import { Icon, Container, Flex, Box, Text, Stack, useColorModeValue, Link } from "@chakra-ui/react"
import { FaGithubAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const color = useColorModeValue('red.500', 'teal.300')
    return(
        <Container>
            <Flex direction="column" justify="center" align="center" padding="2em 0">
                <Stack direction="row" spacing="14px">
                    <Box>
                        <Link href="https://github.com/schneidersec" _focus={{ border: 'none' }}>
                            <Icon as={FaGithubAlt} fontSize="xl" _hover={{ color: color }} />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://twitter.com/CSchneiderSec" _focus={{ border: 'none' }}>
                            <Icon as={FaTwitter} fontSize="xl" _hover={{ color: color }}/>
                        </Link>
                    </Box>
                    <Box>
                        <Text fontSize="lg">
                            |
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            ©2021 Chris Schneider
                        </Text>
                    </Box>
                </Stack>
            </Flex>
        </Container>
    )
}

export default Footer;