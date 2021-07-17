import '../styles/globals.css'
import theme from '../styles/theme'
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
