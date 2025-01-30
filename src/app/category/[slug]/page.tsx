"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RiAdminLine } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { sanityClient } from "@/sanity/lib/sanity";
import FeatureSection from "@/app/FeatureSection";

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  content: { children: { text: string }[] }[];
}

const POSTS_PER_PAGE = 4;

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug ? String(params.slug) : "";

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchCategoryPosts() {
      setLoading(true);
      const blogs: BlogPost[] = await sanityClient.fetch<BlogPost[]>(`*[_type == "blog" && category == $slug] | order(date desc){
        title,
        "slug": slug.current,
        author,
        date,
        category,
        "imageUrl": mainImage.asset->url,
        content
      }`, { slug });

      setFilteredPosts(blogs);
      setLoading(false);
    }

    fetchCategoryPosts();
  }, [slug]);

  // Pagination logic
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[280px] w-full">
        <Image src="/blogs.jpg" alt="Category Background" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          <h1 className="text-4xl font-semibold capitalize">{slug ? slug.replace("-", " ") : "Category"}</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="capitalize">{slug ? slug.replace("-", " ") : "Category"}</span>
          </div>
        </div>
      </div>

      {/* Category Posts */}
      <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
        {loading ? (
          <p className="text-center text-xl font-semibold">Loading...</p>
        ) : filteredPosts.length === 0 ? (
          <p className="text-center text-xl font-semibold">No posts found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paginatedPosts.map((post) => (
              <div key={post.slug} className="space-y-6">
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
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 py-8">
          {currentPage > 1 && (
            <Link href={`/category/${slug}?page=${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Previous
            </Link>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <Link 
              key={index + 1} 
              href={`/category/${slug}?page=${index + 1}`} 
              className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {index + 1}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link href={`/category/${slug}?page=${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Next
            </Link>
          )}
        </div>
      )}

      {/* Features Section */}
      <FeatureSection />
    </>
  );
}
