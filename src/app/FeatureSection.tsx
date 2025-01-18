import React from 'react';
import Image from 'next/image';

function FeatureSection() {
  const features = [
    {
      icon: 'Group1.svg',
      title: 'High Quality',
      description: 'Crafted from top-notch materials',
    },
    {
      icon: 'guarantee.svg',
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: 'shipping.svg',
      title: 'Free Shipping',
      description: 'Order over 150$',
    },
    {
      icon: 'customer-support.svg',
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <section className="bg-[#faf3e3] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/${feature.icon}`} // Ensure the path is correct and the images are in public/
                alt={feature.title} 
                width={80}  // Set width
                height={80} // Set height
                className="mx-auto mb-4" 
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src = '/fallback-icon.svg'; // Fallback in case of missing icon
                }}
              />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
