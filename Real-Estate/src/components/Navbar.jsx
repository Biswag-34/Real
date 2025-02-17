import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-200 via-slate-300 to-slate-500 shadow-md py-4 px-8 flex justify-between items-center z-50 font-inter">
      {/* Left Side - Burger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Left Side - Navigation Links (Hidden on Mobile) */}
      <ul
        className={`lg:flex space-x-6 text-gray-700 font-semibold text-lg ${
          isMobileMenuOpen
            ? "absolute top-16 left-0 bg-white shadow-lg w-full py-4 px-8 space-y-4"
            : "hidden"
        }`}
      >
        <li className="relative group">
          <button className="hover:text-blue-600 transition duration-300">
            Home ▾
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Home 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Home 2
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600 transition duration-300">
            Listings ▾
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              For Rent
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              For Sale
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600 transition duration-300">
            Members ▾
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Agents
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Brokers
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600 transition duration-300">
            Blog ▾
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Latest News
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Market Trends
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600 transition duration-300">
            Pages ▾
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              About Us
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
          </ul>
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">
          Contact
        </li>
      </ul>

      {/* Center - Logo */}
      <div className="text-2xl font-bold flex items-center">
        <img
          src="/logo.png"
          alt="JustHome Logo"
          className="border-dotted h-8 w-40 mr-2"
        />
      </div>

      {/* Right Side - Contact & Buttons */}
      <div className="flex items-center space-x-4">
        {/* Contact Info (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center text-gray-700 font-semibold text-lg">
          <FaPhoneAlt className="mr-2 text-blue-600" />
          <span>+68 685 88666</span>
        </div>

        {/* User Profile */}
        <button className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 transition duration-300">
          <FaUser className="text-gray-700" />
        </button>

        {/* Add Property Button (Hidden on Mobile) */}
        <button className="hidden lg:block border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 font-semibold text-lg">
          Add Property
        </button>
      </div>
    </nav>
  );
}

export default Navbar;