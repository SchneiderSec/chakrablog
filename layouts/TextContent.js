import { Text } from "@chakra-ui/react"

const TextContent = ({ children, ...rest }) => {
   return (
        <Text ml={5} {...rest}>
            {children}
        </Text>
   )    
}

export default TextContent;