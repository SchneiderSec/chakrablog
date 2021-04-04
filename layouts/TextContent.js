import { Text } from "@chakra-ui/react"

const TextContent = ({ children, ...rest }) => {
   return (
        <Text padding="5px" {...rest}>
            {children}
        </Text>
   )    
}

export default TextContent;