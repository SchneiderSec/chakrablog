import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



const postsDirectory = path.join(process.cwd(), 'content');

export const getPosts = () => 
    fs.promises.readdir(postsDirectory);

export const getPostData = async (slug) => {
    const fullPath = path.join(postsDirectory, `${slug}/index.md`);
    const postContent = fs.readFileSync(fullPath).toString();

    const { content, data } = matter(postContent);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontMatter = {
        ...data,
        date: formattedDate,
        content
    }
    return frontMatter;
}