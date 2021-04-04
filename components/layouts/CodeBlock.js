import { useColorMode } from "@chakra-ui/react";
import { Prism } from "react-syntax-highlighter";
import { prism, dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export default function CodeBlock({ language, value }){
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Prism language={language} style={colorMode === 'dark' ? dracula : prism}>
            {value}
        </Prism>
    )
}