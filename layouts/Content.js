import { Heading, Text, Flex, Stack } from '@chakra-ui/react';

export default function Content({heading = '', children}){
    return(
    <>
        <Stack
        as="main"
        align="center"
        marginInlineStart="auto"
        marginInlineEnd="auto"
      >
        <Flex
          flexDirection="column"
          maxWidth="lg"
          mx="5"
        >
          <Heading
            as="h1"
            size="2xl"
            display={heading.length == 0 && "none"}
          >
            {heading}
          </Heading>
          <Text mt="2" >
            {children}
          </Text>
        </Flex>

      </Stack>
    </>
    )
}