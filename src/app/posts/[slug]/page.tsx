import { sanityClient } from '@/sanity/lib/sanity'
import Image from 'next/image'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { RiAdminLine } from 'react-icons/ri'
import { CiCalendarDate } from 'react-icons/ci'
import { IoPricetagOutline } from 'react-icons/io5'

interface BlogPost {
  title: string
  slug: string
  author: string
  date: string
  category: string
  imageUrl: string
  content: PortableTextBlock[]
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await sanityClient.fetch<{ slug: string }[]>(`*[_type == "blog"]{ "slug": slug.current }`)
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
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
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-[#f5f0e8] min-h-[200px] md:min-h-[280px]">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <header className="relative h-40 md:h-64 w-full bg-center bg-cover rounded-md overflow-hidden"
            style={{ backgroundImage: "url('/background.jpg')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image src="/logo.ico" alt="logo" width={32} height={32} className="md:w-10 md:h-10" />
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">Blog Details</h1>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                <span>Details</span>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-[90%] md:max-w-4xl mx-auto py-8 md:py-12">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-4 md:px-0">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 md:gap-6 mb-6 md:mb-8 text-gray-600 text-sm md:text-base px-4 md:px-0">
            <div className="flex items-center gap-1 md:gap-2">
              <RiAdminLine className="w-4 h-4 md:w-5 md:h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <CiCalendarDate className="w-4 h-4 md:w-5 md:h-5" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <IoPricetagOutline className="w-4 h-4 md:w-5 md:h-5" />
              <span>{post.category}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-6 md:mb-10 px-4 md:px-0">
            <Image 
              src={post.imageUrl} 
              alt={post.title} 
              fill 
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>

          {/* Content */}
          <article className="px-4 md:px-0">
            <PortableText 
              value={post.content}
              components={{
                block: {
                  normal: ({children}) => (
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">{children}</p>
                  ),
                  h2: ({children}) => (
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">{children}</h2>
                  ),
                  h3: ({children}) => (
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-4 md:mt-6 mb-2 md:mb-3">{children}</h3>
                  ),
                },
                list: {
                  bullet: ({children}) => (
                    <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-base md:text-lg">{children}</ul>
                  ),
                  number: ({children}) => (
                    <ol className="list-decimal pl-4 md:pl-6 mb-4 md:mb-6 text-base md:text-lg">{children}</ol>
                  ),
                },
              }}
            />
          </article>
        </div>
      </div>
    </>
  )
}
