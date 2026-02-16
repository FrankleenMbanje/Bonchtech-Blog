import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        publishedAt: string;
        category: string;
        author: string;
        image: string;
        icon: string;
    };
    content: string;
};

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) return [];

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as Post['frontmatter'],
            content,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.frontmatter.publishedAt < b.frontmatter.publishedAt) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string): Post | undefined {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return undefined;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as Post['frontmatter'],
        content,
    };
}
