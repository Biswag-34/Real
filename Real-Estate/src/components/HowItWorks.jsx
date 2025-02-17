import React from "react";

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold">1. Browse Listings</h3>
          <p className="text-gray-600">Explore a variety of properties available.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold">2. Contact Agent</h3>
          <p className="text-gray-600">Get in touch with a real estate agent.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold">3. Close the Deal</h3>
          <p className="text-gray-600">Seal the deal and move into your dream home!</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
