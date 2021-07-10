import '../styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme'
import DeskNavbar from '../components/Navbar/DeskNavbar';
import MobileNav from '../components/Navbar/MobileNav';
import Footer from '../components/Navbar/Footer';
import React from 'react';
import { Circle, Square, Triangle } from '../components/Shapes/Shapes';
import { Chakra } from '../components/Chakra'

function MyApp({ Component, pageProps }) {
  return (
    <Chakra theme={theme} resetCSS>
        <Box
          maxW="100%"
        >
          
          <DeskNavbar  />
          <MobileNav />
          <Component {...pageProps} />
        
          <Triangle w="120px" />
          <Square w="120px" h="120px"/>
          <Circle width="120px" height="120px"/>
          </Box>
        <Footer />
    </Chakra>
  )
}

export default MyApp
