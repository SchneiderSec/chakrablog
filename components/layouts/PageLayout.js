import { Heading, Text, Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import TextContent from '../../layouts/TextContent';

export default function PageLayout({heading, children, ...rest}){
    return(
        <Stack
        as="main"
        align="center"
        mx="auto"
      >
        <Flex
          flexDirection="column"
          maxWidth="lg"
          mx="auto"
        >
          <Heading
            as="h1"
            fontSize={['30px', '30px', '30px', '30px']}
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