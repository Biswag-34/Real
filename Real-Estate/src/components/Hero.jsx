import React, { useState } from "react";

function Hero() {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center relative bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/bg.jpeg')" }} // Replace with actual image path
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          The <span className="text-blue-600">#1</span> site real estate professionals trust*
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          From as low as $10 per day with limited-time offer discounts.
        </p>

        {/* Sale & Rent Toggle */}
        <div className="flex justify-center mt-6 space-x-6 text-lg font-medium">
          <button
            className={`pb-1 border-b-2 ${
              activeTab === "sale" ? "border-black" : "border-transparent"
            }`}
            onClick={() => setActiveTab("sale")}
          >
            Sale
          </button>
          <button
            className={`pb-1 border-b-2 ${
              activeTab === "rent" ? "border-black" : "border-transparent"
            }`}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-6 bg-white p-2 rounded-full shadow-lg flex items-center space-x-2">
          {/* Property Type Dropdown */}
          <select className="px-4 py-2 border-none outline-none bg-transparent">
            <option>Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Enter Keywords"
            className="flex-grow px-4 py-2 border-none outline-none bg-transparent"
          />

          {/* Filters Button */}
          <button className="px-4 py-2 border rounded-full text-gray-600">Filters</button>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
