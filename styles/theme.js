import { extendTheme } from '@chakra-ui/react';

const themes = {
    styles: {
        global: (props) => ({
            "html, body": {
                backgroundColor: props.colorMode === "dark" ? "gray.900" : 'gray.100',
            },
            "p":
            {
                color: props.colorMode === "dark" ? 'gray.300' : "black"
            },
        })
    },
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme(themes)

export default theme;