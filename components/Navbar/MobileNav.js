import { Flex, Stack, Menu, Box, Text, MenuList, MenuItem, MenuButton, Button, Icon  } from "@chakra-ui/react"
import DarkModeSwitch from "../DarkModeSwitch"
import NavLink from "../NavLink"
import { TiThMenu, TiThMenuOutline } from 'react-icons/ti'
import React, { useState } from 'react';

//Want these links
//Home - About - Disclosure - Articles - Contact

const MobileNav = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleClick = () => {

    }

    return(
        <Flex
            as="nav"
            justify="space-between"
            width="100%"
            wrap="wrap"
            marginInlineStart="auto"
            marginInlineEnd="auto"
            mb={4}
            p={4}
            display={["flex", "none", "none", "none"]}
            maxWidth='100%'
        >
                <Box >
                    <Box d="flex">
                    <NavLink label="SchneiderSec" to="/" fontSize="xl" as="h3" />
                        <Box ml="2" display={['block', 'block', 'block', 'block']} align="center">
                            <DarkModeSwitch />
                        </Box>
                    </Box>
                </Box>
                <Menu onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)} >
                    <MenuButton as={Button} _focus={{ outline: 'none' }}>
                        <Icon as={menuOpen ? TiThMenuOutline : TiThMenu} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem >
                            <NavLink label="Articles" to="/articles" />
                        </MenuItem>
                        <MenuItem>
                            <NavLink label="Disclosures" to="/disclosures" />
                        </MenuItem>
                        <MenuItem>
                            <NavLink label="Contact" to="/contact" />
                        </MenuItem>  
                        <MenuItem>
                            <NavLink label="About" to="/about" />
                        </MenuItem>  
                    </MenuList> 
                </Menu>
        </Flex>
    )
}

export default MobileNav;