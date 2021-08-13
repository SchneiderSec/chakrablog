import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/Articles/PostCard';
import PageLayout from '../components/layouts/PageLayout';
  
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

export default function Articles({ posts }) {
    const cards = posts.map( (post, idx) => (
       <PostCard key={idx} frontMatter={post.frontMatter}/>
    ))
  return (
    <>
      <PageLayout heading="Articles">
        <div 
          style={{ marginLeft: '5px' }}
        >
            {cards}
        </div>
      </PageLayout>
    </>
  )
}
