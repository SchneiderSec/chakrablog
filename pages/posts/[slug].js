import { getPosts, getPostData } from '../../lib/posts';
import Markdown from 'react-markdown'
import PageLayout from '../../components/layouts/PageLayout';
import CodeBlock from '../../components/layouts/CodeBlock';
import classes from '../../styles/Markdown.module.css'
import { PostImage } from '../../components/Articles';
import Tags from '../../components/Tags/Tags';

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
        <PageLayout heading={meta.title} description={meta.description}>
          <div 
            style={{ marginLeft: '5px' }}
          >
            {meta.tags.map(tag => <Tags key={tag} type={tag}/>)}
              {<Markdown 
                escapeHtml={true} 
                source={content}
                renderers={{ code: CodeBlock, image: PostImage }}
                className={ classes.testCodeBlock }     
              />}
          </div>
        </PageLayout>
    )

}