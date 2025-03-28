"use client"; // This is a Client Component

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation"; // Next.js 15
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RiAdminLine } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import FeatureSection from "../FeatureSection";
import { sanityClient } from "@/sanity/lib/sanity";

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  content: { children: { text: string }[] }[];
}

const BLOGS_PER_PAGE = 3; // Number of blogs per page

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[280px] bg-[#f5f0e8] w-full">
        <div className="container mx-auto px-4 py-8">
          <header
            className="relative h-48 md:h-64 w-full bg-center bg-cover rounded-md overflow-hidden mb-6"
            style={{ backgroundImage: "url('/background.jpg')" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image src="/logo.ico" alt="logo" width={40} height={40} />
              <h1 className="lg:text-3xl font-semibold sm:text-2xl mb-4">Blog</h1>
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Blog</span>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Blog Content with Suspense */}
      <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
        <Suspense fallback={<LoadingSpinner />}>
          <ClientPagination />
        </Suspense>
      </div>

      {/* Features Section */}
      <FeatureSection />
    </>
  );
}

// ---------------------------
// Loading Spinner
// ---------------------------
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

// ---------------------------
// Pagination + Blog Listing
// ---------------------------
function ClientPagination() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      const blogs: BlogPost[] = await sanityClient.fetch<BlogPost[]>(`*[_type == "blog"] | order(date desc){
        title,
        "slug": slug.current,
        author,
        date,
        category,
        "imageUrl": mainImage.asset->url,
        content
      }`);
      setAllBlogs(blogs);
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalBlogs = allBlogs.length;
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = allBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  // Generate unique categories
  const categories = [
    ...new Set(allBlogs.map((blog) => blog.category)),
  ].map((category) => ({
    name: category || "Uncategorized",
    count: allBlogs.filter((blog) => blog.category === category).length,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-8">
      <div>
        {loading ? (
          // Skeleton Loader for Blog Posts
          <div className="space-y-6 mb-12">
            {Array.from({ length: BLOGS_PER_PAGE }).map((_, index) => (
              <div key={index} className="space-y-6">
                <div className="relative aspect-[16/9] w-full bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex items-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          // Actual Blog Posts
          paginatedBlogs.map((post) => (
            <div key={post.slug} className="space-y-6 mb-12">
              <div className="relative aspect-[16/9] w-full">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover rounded-lg" priority />
              </div>

              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2 hover:text-black">
                  <RiAdminLine className="text-xl" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-black">
                  <CiCalendarDate className="text-xl" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-black">
                  <IoPricetagOutline className="text-xl" />
                  <span>{post.category}</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-medium">{post.title}</h1>
              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {post.content?.[0]?.children?.[0]?.text || "No content available"}
              </p>
              <Link href={`/posts/${post.slug}`} className="inline-block text-black underline underline-offset-4 hover:text-gray-600">
                Read more
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Sidebar - Categories */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Categories</h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex justify-between items-center">
                <Link href={`/Blogcategory/${category.name}`} className="text-lightGray hover:text-gray-900">
                  {category.name}
                </Link>
                <span className="text-lightGray">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 py-8">
        {currentPage > 1 && (
          <Link href={`/blog?page=${currentPage - 1}`} className="bg-[#F9F1E7] text-black px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            Previous
          </Link>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <Link 
            key={index + 1} 
            href={`/blog?page=${index + 1}`} 
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"}`}
          >
            {index + 1}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={`/blog?page=${currentPage + 1}`} className="bg-[#F9F1E7] text-black px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}