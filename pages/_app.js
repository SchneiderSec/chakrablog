import '../styles/globals.css'
import { Box, ChakraProvider, Flex, Spacer, useColorMode, useColorModeValue } from '@chakra-ui/react';
import theme from '../styles/theme'
import DeskNavbar from '../components/Navbar/DeskNavbar';
import MobileNav from '../components/Navbar/MobileNav';
import Footer from '../components/Navbar/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
        <Box
          maxW="100%"
        >
          <DeskNavbar  />
          <MobileNav />
          <Component {...pageProps} />
        </Box>
        <Footer />
    </ChakraProvider>
  )
}

export default MyApp
