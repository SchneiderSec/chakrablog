import { Text } from "@chakra-ui/react"

const TextContent = ({ children, ...rest }) => {
   return (
        <Text ml={3} {...rest}>
            {children}
        </Text>
   )    
}

export default TextContent;