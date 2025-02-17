import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Home, HomeIcon, Building, Castle, Hotel, LandPlot } from "lucide-react"; // Icons for options
import Swal from "sweetalert2"; // For beautiful pop-up alerts

const LeadForm = () => {
  const [isOpen, setIsOpen] = useState(true); // Initially open on page load
  const [isMinimized, setIsMinimized] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    interest: "",
  });

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsMinimized(true);

    // Show a beautiful pop-up alert
    Swal.fire({
      title: "Success!",
      text: "We will contact you shortly.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3b82f6",
      customClass: {
        popup: "font-poppins",
      },
    });

    // Reset form fields
    setFormData({
      name: "",
      number: "",
      interest: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Dimmed Background Overlay to prevent interaction */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"></div>
      )}

      {/* Main Form (Pop-up Mode) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isOpen ? { scale: 1, opacity: 1 } : { opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 min-w-[300px] bg-gradient-to-br from-gray-600 to-gray-800 bg-opacity-60 shadow-2xl rounded-lg p-8 border-4 border-navy-800 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            setIsMinimized(true);
          }}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
        >
          <X size={24} />
        </button>

        {/* Form Header */}
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-poppins">
          Get a Call Back
        </h2>

        {/* Form Fields */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 text-lg"
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Number"
            value={formData.number}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 text-lg"
          />
          <div className="relative">
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-90 text-gray-900 font-semibold text-lg w-full appearance-none"
            >
              <option value="">Interested in</option>
              <option value="1 BHK">
                <div className="flex items-center gap-2">
                  <Home size={16} /> 1 BHK
                </div>
              </option>
              <option value="2 BHK">
                <div className="flex items-center gap-2">
                  <HomeIcon size={18} /> 2 BHK
                </div>
              </option>
              <option value="3 BHK">
                <div className="flex items-center gap-2">
                  <Building size={20} /> 3 BHK
                </div>
              </option>
              <option value="Condo">
                <div className="flex items-center gap-2">
                  <Castle size={20} /> Condo
                </div>
              </option>
              <option value="Villa">
                <div className="flex items-center gap-2">
                  <Hotel size={20} /> Villa
                </div>
              </option>
              <option value="Plot">
                <div className="flex items-center gap-2">
                  <LandPlot size={20} /> Plot
                </div>
              </option>
              <option value="Rent">
                <div className="flex items-center gap-2">
                  <Home size={20} /> Rent
                </div>
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Home className="text-gray-600" size={20} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md hover:opacity-90 transition font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Minimized Form */}
      {isMinimized && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-25 right-4 w-1/4 sm:w-1/5 min-w-[150px] bg-gradient-to-br  from-blue-500 to-indigo-600 bg-opacity-70 border-4 border-navy-800 p-4 rounded-lg shadow-lg cursor-pointer hover:opacity-90 z-40"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <p className="text-center text-white font-semibold font-poppins">
            Get a Call Back
          </p>
        </motion.div>
      )}
    </>
  );
};

export default LeadForm;