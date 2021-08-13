---
title: PiHole RCE - The Full Shell Puzzle
date: 2021-08-09
author: Chris Schneider
excerpt: How a small mistake in regular expressions led to remote code execution.
---

In my quest to get better with code review I decided to look at applications I run on my network. PiHole was a perfect target because PHP is relatively easy to read and is often riddled with issues. While reviewing the code I noticed something strange. PiHole uses quite a bit of shell commands and often with user input. The approach they've taken to prevent malicious payloads is to check against regular expressions. This is a solid approach if the regex is strict enough.

**note**: The version in the screenshots is v5.5

## The Mistake

On the settings -> API / Web interface when you save you hit this block of code:

```php scripts/pi-hole/php/savesettings.php
//savesettings.php line 444
case "API":

	// Explode the contents of the textareas into PHP arrays
	// \n (Unix) and \r\n (Win) will be considered as newline
	// array_filter( ... ) will remove any empty lines
	$domains = array_filter(preg_split('/\r\n|[\r\n]/', $_POST["domains"]));
	$clients = array_filter(preg_split('/\r\n|[\r\n]/', $_POST["clients"]));

	$domainlist = "";
	$first = true;
	foreach($domains as $domain)
	{
**		if(!validDomainWildcard($domain) || validIP($domain))
		{
			$error .= "Top Domains/Ads entry ".htmlspecialchars($domain)." is invalid (use only domains)!<br>";
		}
		if(!$first)
		{
			$domainlist .= ",";
		}
		else
		{
			$first = false;
		}
		$domainlist .= $domain;
	}

	$clientlist = "";
	$first = true;
	foreach($clients as $client)
	{
**		if(!validDomainWildcard($client) && !validIP($client))
		{
			$error .= "Top Clients entry ".htmlspecialchars($client)." is invalid (use only host names and IP addresses)!<br>";
		}
		if(!$first)
		{
			$clientlist .= ",";
		}
		else
		{
			$first = false;
		}
		$clientlist .= $client;
	}
```
The user input we care about comes in the form of $\_POST["domains"] and $\_POST["clients"] and you can see the only meaningful check performed on it is the validDomainWildcard check. Taking a look at that code will introduce the first issue:

```php scripts/pi-hole/php/savesettings.php#68
function validDomainWildcard($domain_name)
{
	// There has to be either no or at most one "*" at the beginning of a line
**	$validChars = preg_match("/^((\*.)?[_a-z\d](-*[_a-z\d])*)(\.([_a-z\d](-*[a-z\d])*))*(\.([_a-z\d])*)*$/i", $domain_name);
	$lengthCheck = preg_match("/^.{1,253}$/", $domain_name);
	$labelLengthCheck = preg_match("/^[^\.]{1,63}(\.[^\.]{1,63})*$/", $domain_name);
	return ( $validChars && $lengthCheck && $labelLengthCheck ); //length of each label
}
```
This is a pretty simple check with one big flaw. The regular expression is checking to see if the user is passing in some form of 
**\*.foobar.com** ( [regex101](https://regex101.com/) is super helpful) with the only special chars allowed being -\_, except the developer forgot to escape the period in the $validChars check! So what does this mean?

If we pass this check we land inside this code where $domainlist is user controlled input.
```php
				// Set Top Lists options
if(!strlen($error))
{
	// All entries are okay
	pihole_execute("-a setexcludedomains ".$domainlist);
	pihole_execute("-a setexcludeclients ".$clientlist);
	$success .= "The API settings have been updated<br>";
}
```
The implementation of pihole_execute is pretty simple, it escapes the argument string, and runs sudo pihole + argument. In our case it would look like `sudo pihole -a setexcludedomains USERINPUT`

Unfortunately since user input is escaped we will only be able to supply arguments. This is a pretty common thing though when executing system commands in code. That just means we need to look at what that command is doing



## Remote Code Execution By Source

To dive deeper we need to see what the pihole shell command does with our input. The important chain of code our input follows:
```bash
#webpage.sh line 340
SetExcludeDomains() {
    change_setting "API_EXCLUDE_DOMAINS" "${args[2]}"
}
```
```bash
change_setting() {
    delete_setting "${1}"
    add_setting "${1}" "${2}"
}
```
```bash
add_setting() {
 echo "${1}=${2}" >> "${setupVars}"
}
```

TLDR: our user input gets echoed to the /etc/pihole/setupVars.conf file.
So far we haven't seen a way to actually execute commands yet, but looking through the files it becomes apparent this file gets sourced often. This means we can have valid bash inside a file and when it is sourced, it will execute that bash! Perfect. You can intentionally trigger this at the /admin/gravity.php endpoint. Interestingly enough you actually get the output from the command running as well.

![Example output of exploit](/pictures/pi-hole/c55dd2f180e64392b17383bd94ec1f53.png)

This will run sudo pihole -g so it will execute your payloads with root privileges.
So with a payload like: `*;ls` we will list the directory.


## The Massive Hurdle

Yay! Remote code execution! Now of course it's time to get a reverse shell...but we can only enter one command at a time. Oh no.
So what we know:
1. Can enter one special character per domain
2. Can chain domains I.E 
	```
		*;ls
		*;whoami
	```
	gets turned into `API_EXCLUDE_DOMAINS=*;ls,*;whoami`
4. Can change our directory context to /root by exploiting both $\_POST params and setting first to `*;cd`.
5. Can write/overwrite files >
6. The magic of * ?
7. Set to other env vars.

These were the things I was able to figure out through trial and error but unfortunately nothing allowed more than one command at a time. The most interesting functionality was the \*. If you run \* as a command it will expand all the files in your current directory into the command line.
![Example of * shell command](/pictures/pi-hole/8561fb92ceb64cfebb891f81d1b5fb03.png)
With this I figured it would be possible to create filenames and maybe get something going but unfortunately you need a semicolon or equivalent before it.

 All in all I was unable to figure out a way to get it working but if you are able to figure it out please let me know. Thanks for reading.