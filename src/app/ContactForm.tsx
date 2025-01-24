import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const FurniroContact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value:string; }; }) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#F9F1E7]">
      {/* Breadcrumb - Improved mobile spacing */}
      

      {/* Hero Section - Responsive text sizes */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center text-gray-900 mb-4 font-serif">
            Contact
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-[#B88E2F] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Visit our showroom or get in touch to discuss your dream furniture. Our design consultants are ready to help bring your vision to life.
          </p>
        </div>
      </div>

      {/* Main Content - Improved grid system */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Contact Information - Better mobile layout */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8 text-gray-900">
                Visit Our Store
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88E2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Showroom Address</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      400 West Design Avenue<br />
                      Suite 200<br />
                      New York, NY 10019
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88E2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Contact Details</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Phone: (555) 123-4567<br />
                      Email: contact@furniro.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88E2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Showroom Hours</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Monday - Friday: 10am - 7pm<br />
                      Saturday: 10am - 6pm<br />
                      Sunday: 11am - 5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Enhanced mobile experience */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-20">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mb-4 sm:mb-6" />
                  <h2 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4 text-gray-900">Thank You!</h2>
                  <p className="text-gray-600 max-w-md text-sm sm:text-base">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8 text-gray-900">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-[#B88E2F] focus:ring-2 focus:ring-[#B88E2F] focus:ring-opacity-20 outline-none transition-colors text-sm sm:text-base"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-[#B88E2F] focus:ring-2 focus:ring-[#B88E2F] focus:ring-opacity-20 outline-none transition-colors text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-[#B88E2F] focus:ring-2 focus:ring-[#B88E2F] focus:ring-opacity-20 outline-none transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-[#B88E2F] focus:ring-2 focus:ring-[#B88E2F] focus:ring-opacity-20 outline-none transition-colors resize-none text-sm sm:text-base"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#B88E2F] text-white hover:bg-[#9A7624] transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurniroContact;