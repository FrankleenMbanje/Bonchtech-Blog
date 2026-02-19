import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPosts()
    const baseUrl = 'https://bonchtech.tech'

    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.frontmatter.publishedAt ? new Date(post.frontmatter.publishedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...blogEntries,
    ]
}
