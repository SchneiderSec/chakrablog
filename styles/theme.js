import { extendTheme } from '@chakra-ui/react';
import { flashless } from 'chakra-ui-flashless'

const themes = {
    useSystemColorMode: false,
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

const theme = extendTheme(flashless(themes))

export default theme;