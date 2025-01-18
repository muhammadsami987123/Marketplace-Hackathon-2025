'use client';

import React from "react";
import ContactForm from "@/app/ContactForm";
import FeatureSection from "../FeatureSection";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[300px]">
        <Image
          src="/about.jpg"
          alt="About Us"
          fill
          className="absolute inset-0 object-cover"
        />
      </div>
      <div className="bg-white p-8 text-center rounded-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us an email.
        </p>
        <ContactForm />
      </div>
      <div className="container mx-auto px-6 py-12">
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
