import { Link, useColorModeValue } from "@chakra-ui/react"

const LinkContent = ({ to, children, ...rest}) => {
    return (
        <Link href={to} {...rest} as="a" color={useColorModeValue('red.500', 'cyan.200')}>
            {children}
        </Link>
    )    
}

export default LinkContent;