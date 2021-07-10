import '../styles/globals.css'
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import theme from '../styles/theme'
import DeskNavbar from '../components/Navbar/DeskNavbar';
import MobileNav from '../components/Navbar/MobileNav';
import Footer from '../components/Navbar/Footer';
import React, { useState, useEffect } from 'react';
import { Circle, Square, Triangle } from '../components/Shapes/Shapes';
import { Chakra } from '../components/Chakra'
import Router from 'next/router';
import MainLayout from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  const [ loading, setLoading ] = useState(false)
  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    loading ? <div>test</div> :
    <Chakra theme={theme} resetCSS>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
    </Chakra>
  )
}

export default MyApp
