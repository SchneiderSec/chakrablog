import { extendTheme } from '@chakra-ui/react';

const themes = {
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
    },
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme(themes)

export default theme;