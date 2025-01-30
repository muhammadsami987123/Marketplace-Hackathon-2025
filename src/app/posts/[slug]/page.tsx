import { sanityClient } from '@/sanity/lib/sanity'
import Image from 'next/image'
import { PortableText, PortableTextBlock } from '@portabletext/react'

interface BlogPost {
  title: string
  slug: string
  author: string
  date: string
  category: string
  imageUrl: string
  content: PortableTextBlock[]
}

// ✅ Ensure `generateStaticParams` is an async function
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await sanityClient.fetch<{ slug: string }[]>(`*[_type == "blog"]{ "slug": slug.current }`)
  return blogs.map((blog) => ({ slug: blog.slug }))
}

// ✅ Fix: Await `params` properly inside an async function
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params // 🔹 Await `params`
  const { slug } = resolvedParams

  if (!slug) {
    return <div className="text-center text-2xl font-semibold py-20">Invalid Post</div>
  }

  const post: BlogPost | null = await sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      author,
      date,
      category,
      "imageUrl": mainImage.asset->url,
      content
    }`,
    { slug }
  )

  if (!post) {
    return <div className="text-center text-2xl font-semibold py-20">Blog Post Not Found</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
        <span>{post.author}</span>
        <span>{new Date(post.date).toDateString()}</span>
        <span>{post.category}</span>
      </div>

      <div className="relative w-full h-96 mt-6">
        <Image src={post.imageUrl} alt={post.title} fill className="object-cover rounded-lg" />
      </div>

      <div className="mt-6 space-y-4 text-lg text-gray-700">
        <PortableText value={post.content} />
      </div>
    </div>
  )
}
