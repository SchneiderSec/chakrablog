import { Box, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Tags from "../Tags/Tags";

const PostCard = ({ frontMatter, ...rest }) => {
    const { title, excerpt, date, slug, tags } = frontMatter; 
    return(
    <Link
        href={`/posts/${slug}`}
        _hover={{ textDecoration: 'none', color: useColorModeValue('red.500', 'teal.300') }}
        _focus={{ borderColor: '' }}
        as="a"
    >
        <Box 
            maxW="lg" 
            w={['xs', 'md', 'md', 'md']} 
            borderRadius="lg" 
            bgColor={useColorModeValue('white', 'gray.700')}
            boxShadow={useColorModeValue("0px 7px 17px -8px black")}
            mb="3" 
            p="5"
            mr="3"
            {...rest}
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
            {tags &&
            <Box p="0">
                {tags.map(tag => <Tags key={tag} type={tag}/>)}
            </Box>
            }
            <Box p="2" fontSize="md">
                {excerpt}
            </Box>

        </Box>
    </Link>
    )

}

export default PostCard;