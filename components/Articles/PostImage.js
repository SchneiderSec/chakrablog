import { Box, chakra, Image, useColorModeValue } from '@chakra-ui/react'

const PostImage = ({ src, alt }) => {
    useColorModeValue
    return (
    <Box>
      <chakra.figure 
        marginTop={5}
        marginBottom={5}
        display="inline-block"
      >
        <Image src={src} alt={alt}/>
        <chakra.figcaption
          fontSize={15}
          color={useColorModeValue("gray.700", "gray.400")}
          textAlign="center"
        >
          {alt}
        </chakra.figcaption>
      </chakra.figure>
      </Box>
    )
  }

export default PostImage;