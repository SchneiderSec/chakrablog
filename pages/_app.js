import '../styles/globals.css'
import theme from '../styles/theme'
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import MainLayout from '../components/layouts/MainLayout';
import { ChakraProvider } from '@chakra-ui/react';

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
    <ChakraProvider theme={theme} resetCSS>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
export { getServerSideProps } from '../components/Chakra'
