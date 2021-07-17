import { extendTheme } from '@chakra-ui/react';

const themes = {
    config: {
        useSystemColorMode: false,
        initialColorMode: "light"
    },
    styles: {
        global: (props) => ({
            "html": {
                bg: (theme) => {
                    return props.colorMode === 'light' ? 'white' : 'rgba(26, 32, 44, 1)'
                }
            },
            "body": {
                bg: (theme) => {
                    return props.colorMode === 'light' ? 'white' : 'rgba(26, 32, 44, 1)'
                }
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