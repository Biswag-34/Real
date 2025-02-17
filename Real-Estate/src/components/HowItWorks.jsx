import React from "react";
import { FaSearch, FaPhoneAlt, FaHome } from "react-icons/fa"; // FontAwesome icons

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Heading with Gradient Color */}
          <h2 className="text-4xl font-bold text-left font-poppins bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            How It Works?
          </h2>

          {/* Step 1: Browse Listings */}
          <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="p-3 bg-blue-100 rounded-full animate-bounce">
              <FaSearch className="text-blue-500 text-2xl" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">1. Browse Listings</h3>
              <p className="text-gray-600">Explore a variety of properties available.</p>
            </div>
          </div>

          {/* Step 2: Contact Agent */}
          <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="p-3 bg-green-100 rounded-full animate-bounce">
              <FaPhoneAlt className="text-green-500 text-2xl" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">2. Contact Agent</h3>
              <p className="text-gray-600">Get in touch with a real estate agent.</p>
            </div>
          </div>

          {/* Step 3: Close the Deal */}
          <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="p-3 bg-purple-100 rounded-full animate-bounce">
              <FaHome className="text-purple-500 text-2xl" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">3. Close the Deal</h3>
              <p className="text-gray-600">Seal the deal and move into your dream home!</p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-center justify-center animate-fade-in">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="/bg2.jpg" // Replace with your image path
              alt="How It Works"
              className="w-full h-full object-cover"
            />
            {/* Invisible Border */}
            <div className="absolute inset-0 border-4 border-white opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;