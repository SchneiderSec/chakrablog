import {  Link, useColorMode, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router'


const NavLink = ({ label, to = '/', ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const isActive = router.pathname === to;
    const color = isActive ? colorMode === 'light' ? 'red.800' : 'teal.100' : null
    return(
        <Link 
            href={to} 
            color={color}
            _focus={{ border: 'none'}}
            >
                <Text display="inline"  fontWeight="bold" {...rest} as="href">
                    {label}
                </Text>
        </Link>
    )
}

export default NavLink;