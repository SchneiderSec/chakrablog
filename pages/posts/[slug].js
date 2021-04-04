import { Text } from '@chakra-ui/react';
import { getPosts, getPostData } from '../../lib/posts';
import Markdown from 'react-markdown'
import PageLayout from '../../components/layouts/PageLayout';
import CodeBlock from '../../components/layouts/CodeBlock';

export async function getStaticPaths(){
  const slugs = await getPosts();
  return {
    paths: slugs?.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const postContent = await getPostData(slug);

  return {
    props: {
      slug,
      meta: postContent,
      content: postContent.content
    }
  };
};


export default function Post({ slug, meta, content }){
    return(
        <PageLayout heading={meta.title}>
            {<Markdown 
              escapeHtml={true} 
              source={content}
              renderers={{ code: CodeBlock }}
            
            />}
        </PageLayout>
    )

}