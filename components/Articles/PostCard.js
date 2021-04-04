import { Box, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";

const PostCard = ({ frontMatter }) => {
    const { title, excerpt, date, slug } = frontMatter; 
    return(
    <Link
        href={`/posts/${slug}`}
        _hover={{ textDecoration: 'none', color: useColorModeValue('red.500', 'teal.300') }}
        _focus={{ borderColor: '' }}
        as="a"
    >
        <Box 
            maxW="lg" 
            w={['xs', 'md', 'lg', 'lg']} 
            borderRadius="lg" 
            bgColor={useColorModeValue('white', 'gray.700')}
            mb="5" 
            p="5"
            >
            <Heading 
                fontSize={['md', 'lg', 'lg', 'lg']} 
                as="h3"
                fontWeight="600"
                
                >
                {title}
            </Heading>
            <Text fontSize="xs" color="inherit" fontWeight="300">
                    {date}
            </Text>
            <Box p="2" fontSize="md">
                {excerpt}
            </Box>

        </Box>
    </Link>
    )

}

export default PostCard;