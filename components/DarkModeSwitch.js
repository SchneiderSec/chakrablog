import { useColorMode, IconButton, Icon } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'

const DarkModeSwitch = ({ ...rest}) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <IconButton 
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'dark' ? <Icon as={FaSun} /> : <Icon as={BsMoon} />}
            onClick={toggleColorMode}
            _focus={{ boxShadow: colorMode === 'light' ? '0px 0px 3px black' : '0px 0px 3px white'}}
            _hover={{
                borderRadius: 'md',
                boxShadow: colorMode === 'light' ? "0px 0px 3px rgba(90, 89, 89, 0.3)" : '0px 0px 3px rgba(197, 197, 197, 0.3)'
            }}
            size="xs"
            as="span"
            {...rest}
            backgroundColor="inherit"
        />
    )
}

export default DarkModeSwitch;