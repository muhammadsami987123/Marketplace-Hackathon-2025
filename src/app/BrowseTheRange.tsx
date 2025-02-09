// 'use client';   // the is with sanity

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { client } from '@/sanity/lib/client'; // Adjust the import path as needed

// interface CategoryCard {
//   title: string;
//   image: string;
//   href: string;
// }

// export default function BrowseTheRange() {
//   const [categories, setCategories] = useState<CategoryCard[]>([]);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const query = `*[_type == "category"]{
//         title,
//         "image": image.asset->url,
//       }`;
//       const data = await client.fetch(query);
//       setCategories(data);
//     };

//     fetchCategories();
//   }, []);

//   // Scroll functionality
//   const scroll = (direction: 'left' | 'right') => {
//     const container = containerRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth;
//       const newPosition =
//         direction === 'left'
//           ? Math.max(scrollPosition - scrollAmount, 0)
//           : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.offsetWidth);

//       container.scrollTo({
//         left: newPosition,
//         behavior: 'smooth',
//       });
//       setScrollPosition(newPosition);
//     }
//   };

//   // Automatically scroll every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const container = containerRef.current;
//       if (container) {
//         const newPosition =
//           scrollPosition + container.offsetWidth >= container.scrollWidth
//             ? 0 // Reset to the start if at the end
//             : scrollPosition + container.offsetWidth;

//         container.scrollTo({
//           left: newPosition,
//           behavior: 'smooth',
//         });
//         setScrollPosition(newPosition);
//       }
//     }, 5000); // 5 seconds interval

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [scrollPosition]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       const handleScroll = () => {
//         setScrollPosition(container.scrollLeft);
//       };
//       container.addEventListener('scroll', handleScroll);
//       return () => container.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <section className="py-16 md:py-24 px-4 font-poppins">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12 md:mb-14">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Browse The Range
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>

//         <div className="relative">
//           <div
//             ref={containerRef}
//             className="overflow-x-auto md:overflow-x-visible scrollbar-hide"
//           >
//             <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-semibold">
//               {categories.map((category, index) => (
//                 <Link
//                   key={index}
//                   href={category.href || '/LivingRoom'} // Fallback to '/shop' if href is undefined
//                   className="group flex-shrink-0 w-full md:w-auto"
//                 >
//                   <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
//                     {/* Image Container */}
//                     <div className="relative w-[300px] h-[400px]">
//                       <Image
//                         src={category.image}
//                         alt={`${category.title} furniture category`}
//                         width={600}
//                         height={400}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                     {/* Title */}
//                     <div className="p-4 text-center">
//                       <h3 className="text-xl md:text-2xl text-gray-900 font-semibold">
//                         {category.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//           {/* Scroll Buttons */}
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// the is without sanity 
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryCard {
  title: string;
  image: string;
  href: string;
}

export default function BrowseTheRange() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories: CategoryCard[] = [
    { title: 'Dining Room', image: '/dining.jpg', href: '/DiningRoom' },
    { title: 'Living Room', image: '/living.jpg', href: '/LivingRoom' },
    { title: 'Bedroom', image: '/bedrooms.jpg', href: '/BedRoom' },
  ];

  // Scroll function (only for mobile)
  const scroll = (index: number) => {
    if (window.innerWidth >= 768) return; // ✅ Prevent scrolling on PC

    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const itemWidth = scrollWidth / categories.length;
      const scrollAmount = itemWidth * index;

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });

      setActiveIndex(index);
    }
  };

  // Detect Scroll Position & Update Active Dot (Only for Mobile)
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        if (window.innerWidth >= 768) return; // ✅ Prevent dot updates on PC
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / categories.length;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [ containerRef, categories.length ]);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Browse The Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our premium furniture collections.
          </p>
        </div>

        {/* ✅ Mobile - Scrollable Slider, ✅ PC - Static Grid */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto scrollbar-hide md:overflow-visible"
          >
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group flex-shrink-0 w-full md:w-auto">
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image Container - Now spans full width */}
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={category.image}
                      alt={`${category.title} furniture category`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Title - Centered */}
                  <div className="p-4 text-center">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-semibold">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ✅ Show Dots Only on Mobile */}
          <div className="md:hidden flex justify-center mt-6 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-gray-900' : 'bg-gray-400'
                } transition-colors duration-300`}
                onClick={() => scroll(index)}
              />
            ))}
          </div>

          {/* ✅ Arrows Only on Mobile */}
          <button
            onClick={() => scroll((activeIndex - 1 + categories.length) % categories.length)}
            className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => scroll((activeIndex + 1) % categories.length)}
            className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
