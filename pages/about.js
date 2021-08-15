import PageLayout from '../components/layouts/PageLayout';
import TextContent from '../layouts/TextContent';
import LinkContent from '../layouts/LinkContent';

export default function About() {
    return(
    <>
      <PageLayout heading="About Me" description="The about me page for SchneiderSec.">
        <TextContent>
          My name is Chris Schneider and I work as a professional in the Information Security space.
          I primarily focus on identifying issues in web applications via code review and black box methodology.
        </TextContent>
        <TextContent>
          This website was made with <LinkContent to="https://nextjs.org/">NextJs</LinkContent> and <LinkContent to="https://chakra-ui.com/" >ChakraUI</LinkContent>. The source code can be 
          found on my <LinkContent to="https://github.com/schneidersec/blog">GitHub</LinkContent>.
        </TextContent>
      </PageLayout>
    </>
    )
}