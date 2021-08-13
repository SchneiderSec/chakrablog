import { Box, useColorMode } from "@chakra-ui/react";
import SyntaxHighlighter, { Prism } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const FileName = ({ name }) => {
    return (
        <Box
            borderRight="1px solid black"
            borderLeft="1px solid black"
            borderRadius="3px"
            borderBottom="0px"
            align="center"
            width={["fit-content", "fit-content", "50%", "50%"]}
            padding="2px 15px 2px 15px"
            transform="auto"
            translateY="2.5"
            translateX="0.3"
            backgroundColor="gray.600"
            color="white"
        >
            {name}
        </Box>
    )
}

export default function CodeBlock({ language, value, node, ...rest }){
    const { colorMode } = useColorMode();
    let highlightedLines = []
    
    value.split('\r\n').forEach( (item, index) => {
        if (item.startsWith("**")) {
            value = value.replace("**", "  ")
            highlightedLines.push(index + 1)
        }
    })

    return(
        <Box 
            marginBottom={5}
            marginTop={5}
        >
            {node.meta && <FileName name={node.meta}/>}
            <Prism 
                language={language} 
                style={colorMode === 'dark' ? dracula : dracula}
                wrapLines={true}
                showLineNumbers={true}
                lineNumberStyle={{ display: 'none' }}
                lineProps={ (lineNumber) => {
                    let style = {};
                    if (highlightedLines.includes(lineNumber)){
                        style.backgroundColor = "rgba(251, 255, 0, 0.404)";
                    }
                    return { style }
                }}
            >
                {value}
            </Prism>
        </Box>
    )
}