import React from 'react';
import { Shield, Truck, Headphones, Star } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      Icon: Star,
      title: 'High Quality',
      description: 'Crafted from top-notch materials',
    },
    {
      Icon: Shield,
      title: 'Warranty Protection', 
      description: 'Over 2 years',
    },
    {
      Icon: Truck,
      title: 'Free Shipping',
      description: 'Order over 150$',
    },
    {
      Icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl 
                        bg-white shadow-sm hover:shadow-lg transition-all duration-300
                        transform hover:-translate-y-1"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -inset-1 bg-amber-100 rounded-full opacity-0 
                                transition-opacity duration-300" />
                <feature.Icon 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-700 relative z-10
                            transform group-hover:scale-110 transition-all duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 text-center">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;