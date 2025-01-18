import React from 'react';
import Image from 'next/image';

function BrowseTheRange() {
  const categories = [
    {
      title: 'Dining',
      image: '/browse1.jpg',
    },
    {
      title: 'Living',
      image: '/browse2.jpg',
    },
    {
      title: 'Bedroom',
      image: '/browse3.jpg',
    },
  ];

  return (
    <section className="container mx-auto flex flex-col justify-center items-center bg-white py-12">
      <h2 className="text-3xl font-extrabold text-center mb-8">Browse The Range</h2>
      <p className="text-center font-semibold mb-12 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <Image
              src={category.image}
              alt={`${category.title} furniture`}
              width={600}  // Add width for the image
              height={400} // Add height for the image
              className="w-full h-[400px] object-cover rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300"
              layout="responsive"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold text-2xl text-white">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseTheRange;
