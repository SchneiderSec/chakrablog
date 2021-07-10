import { extendTheme, useColorModeValue } from '@chakra-ui/react';

const themes = {
    useSystemColorMode: false,
    initialColorMode: 'light',
    styles: {
        global: (props) => ({
            "body": {
                bg: useColorModeValue('white','rgba(26, 32, 44, 1)')
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