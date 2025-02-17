import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const LeadForm = () => {
  const [isOpen, setIsOpen] = useState(true); // Initially open on page load
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  return (
    <>
      {/* Dimmed Background Overlay to prevent interaction */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      )}

      {/* Main Form (Pop-up Mode) */}
      <motion.div
        initial={{ scale: 0.5, opacity: .5 }}
        animate={isOpen ? { scale: 1, opacity: 1 } : { opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 w-1/4 min-w-[300px] bg-white shadow-2xl rounded-lg p-6 border-4 border-blue-600 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            setIsMinimized(true);
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Form Header */}
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Get a Call Back
        </h2>

        {/* Form Fields */}
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
            <option value="">Interested in</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="Condo">Condo</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
            <option value="Rent">Rent</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:opacity-90 transition font-semibold"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Minimized Form (Half-transparent, Middle-right of screen) */}
      {isMinimized && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 w-1/6 min-w-[200px] bg-white border border-gray-400 p-3 rounded-l-lg shadow-lg cursor-pointer hover:opacity-100 z-40"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <p className="text-center text-blue-600 font-semibold">Get a Call Back</p>
        </motion.div>
      )}
    </>
  );
};

export default LeadForm;
