import { Box, Heading, Link, StackDivider, useColorModeValue, VStack } from '@chakra-ui/react';
import PageLayout from '../components/layouts/PageLayout';
import TextContent from '../layouts/TextContent';
import LinkContent from '../layouts/LinkContent';
import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/Articles/PostCard';

export const getStaticProps = async () => {
  const files = await fs.readdirSync(`${process.cwd()}/content/`);
  const posts = files.map(folder => {
      const metaread = fs.readFileSync(`content/${folder}/index.md`).toString();

      const { data } = matter(metaread);

      const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = data.date.toLocaleDateString("en-US", options)

      const frontMatter = {
          ...data,
          date: formattedDate,
          slug: folder
      }
      return {
          slug: folder,
          frontMatter,

      }

  })

  const sorted = posts.sort((a, b) => {
     return Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date)
  })

  return {
    props: {
      posts
    }
  };
};

export default function Home({ posts }) {
  return (
    <>
      <PageLayout heading="Welcome">
        <VStack
        spacing={4}
        divider={<StackDivider borderColor={useColorModeValue('black', 'white')}/>}
        align='stretch'
        >
          <Box>
            <TextContent>
              My name is Chris Schneider and I work as a professional in the Information Security space.
              <br />
              <LinkContent fontSize="sm" to="/about">Read more about me...</LinkContent>
            </TextContent>
          </Box>
          <Box>
            <Heading size="md" mb={4} ml={2}>
              Most Recent Post:
            </Heading>
            <div>
              <PostCard ml={3} frontMatter={posts[0].frontMatter}/>                    
            </div>
          </Box>
        </VStack>
      </PageLayout>
    </>
  )
}
