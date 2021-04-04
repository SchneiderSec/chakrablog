import { Flex, Stack, Spacer, Box, Text  } from "@chakra-ui/react"
import DarkModeSwitch from "../DarkModeSwitch"
import NavLink from "../NavLink"


//Want these links
//Home - About - Disclosure - Articles - Contact

const DeskNavbar = () => {
    return(
        <Flex
            as="nav"
            justify="space-between"
            width="100%"
            wrap="wrap"
            marginInlineStart="auto"
            marginInlineEnd="auto"
            mb={8}
            p={4}
            display={["none", "flex", "flex", "flex"]}
            maxWidth={['100%', '100%', '100%', '968px']}
        >
                <Box mx="auto">
                    <Box d="flex">
                    <NavLink label="SchneiderSec" to="/" fontSize="xl" as="h3" />
                        <Box ml="2" display={['block', 'block', 'block', 'block']} align="center">
                            <DarkModeSwitch />
                        </Box>
                    </Box>
                </Box>
                <Stack
                    spacing={4}
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    mx="auto"
                >
                    <NavLink label="Articles" to="/articles" />
                    <NavLink label="Disclosures" to="/disclosures" />
                    <NavLink label="About" to="/about" />
                    <NavLink label="Contact" to="/contact" />
                </Stack>
        </Flex>
    )
}

export default DeskNavbar;