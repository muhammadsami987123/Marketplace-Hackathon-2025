'use client'; // Make the page a Client Component

import React from 'react';
import SearchBar from '../searchbar';
import FeatureSection from '../FeatureSection';
import Image from 'next/image';

function BlogPostLayout() {
  const posts = [
    {
      title: 'Going all-in with minimal design',
      image: '/blog1.jpg',
      date: '2023-11-23',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Going all-in with minimal design',
      image: '/blog2.jpg',
      date: '2023-11-23',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Going all-in with minimal design',
      image: '/blog3.jpg',
      date: '2023-11-23',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    
  ];

  return (
    <section className="bg-white bg-center">
      {/* Blog Header Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/blog22.jpg"
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {posts.map((post, index) => (
              <div key={index} className="mb-8">
                <Image
                  src={post.image || '/fallback-image.jpg'}
                  alt={post.title}
                  layout="intrinsic"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                  priority
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center mb-4 space-x-4">
                  <div className="text-gray-500 flex items-center">
                    <span className="ml-2">{post.date}</span>
                  </div>
                  <div className="text-gray-500 flex items-center">
                    <span className="ml-2">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar for Search and Categories */}
          <div className="md:col-span-1">
            <SearchBar />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Categories</h2>
            <ul className="text-semibold space-y-2">
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Design</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Home Decor</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">DIY</a></li>
              <li><a href="#" className="text-lg md:text-2xl hover:underline">Lifestyle</a></li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {posts.slice(0, 3).map((post, index) => (
                <li key={index} className="text-base md:text-lg hover:underline">
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <FeatureSection />
    </section>
  );
}

export default BlogPostLayout;
