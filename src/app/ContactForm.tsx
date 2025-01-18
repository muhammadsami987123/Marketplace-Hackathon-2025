"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto p-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="space-y-9">
            <div className="flex items-center space-x-20">
              <CiLocationOn size={60} className="text-gray-700" /> {/* Larger Icon */}
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600">236 5th SE Avenue, New York<br /> NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-center space-x-20">
              <FaPhoneAlt size={60} className="text-gray-700" /> {/* Larger Icon */}
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-center space-x-20">
              <IoTimeSharp size={60} className="text-gray-700" /> {/* Larger Icon */}
              <div>
                <p className="font-medium text-gray-800">Working Time</p>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md p-8 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={5}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-medium py-3 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
