import { Heading, Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';

export default function PageLayout({heading, children, description="Default description", ...rest}){
    return(
        <Stack
        as="main"
        align="center"
        mx="auto"
      >
        <Head>
          <title>{heading}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description}/>
        </Head>
        <Flex
          flexDirection="column"
          maxW={['lg', '2xl', '2xl', '2xl']}
          mx="auto"
        >
          <Heading
            as="h1"
            fontSize={['20px', '30px', '30px', '30px']}
            mb="5"
            ml="2"
          >
            {heading}
          </Heading>
          {children}
        </Flex>
      </Stack>
    )
}