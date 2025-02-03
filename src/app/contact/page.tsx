'use client';

import React from "react";
import ContactForm from "@/app/ContactForm";
import FeatureSection from "@/app/FeatureSection";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    // <div className="bg-[#f5f0e8]">
       <div className="relative h-[280px] w-full">
        {/* <div className="container mx-auto px-4 py-8"> */}
        <header
          className="relative h-48 md:h-64 w-full bg-center bg-cover rounded-md overflow-hidden mb-6 container mx-auto px-4 py-8"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          {/* Optional overlay and heading */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white font-bold text-2xl md:text-4xl">Our Shop</h1>
          </div> */}
           <div className="absolute inset-0 flex flex-col items-center justify-center">
           <Image src="/logo.ico" alt="logo" width={40} height={40} />
          <h1 className="text-5xl font-semibold mb-4">Contact</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Contact</span>
          </div>
        </div>
        </header>
      {/* <div className="bg-white p-8 text-center rounded-lg"> */}
        {/* <h2 className="text-3xl text-center font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us an email.
        </p> */}
        <ContactForm />
      {/* </div> */}
      <div className="container mx-auto px-6 py-12">
        <FeatureSection />
      </div>
      <Footer/>
    </div>
    
  );
};

export default About;
