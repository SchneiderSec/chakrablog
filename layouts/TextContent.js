import { Text } from "@chakra-ui/react"

const TextContent = ({ children, ...rest }) => {
   return (
        <Text {...rest}>
            {children}
        </Text>
   )    
}

export default TextContent;