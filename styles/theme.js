import { extendTheme } from '@chakra-ui/react';

const themes = {
    config: {
        useSystemColorMode: true
    },
    styles: {
        global: (props) => ({
            "*": {
                bg: 'none'                
            },
            "p":
            {
                color: props.colorMode === "dark" ? 'gray.100' : "black"
            },
        })
    }
}

const theme = extendTheme(themes)

export default theme;