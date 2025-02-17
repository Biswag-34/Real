import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
      
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-6 text-gray-700">
        <li className="relative group">
          <button className="hover:text-blue-600">Home ▾</button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home 2</li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600">Listings ▾</button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">For Rent</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">For Sale</li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600">Members ▾</button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Agents</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brokers</li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600">Blog ▾</button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Latest News</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Market Trends</li>
          </ul>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-600">Pages ▾</button>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 rounded-md w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
          </ul>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Center - Logo */}
      <div className="text-2xl font-bold flex items-center">
        <img src="/logo.png" alt="JustHome Logo" className="border-dotted h-8 w-40 mr-2" />
        <span></span>
      </div>

      {/* Right Side - Contact & Buttons */}
      <div className="flex items-center space-x-4">
        {/* Contact Info */}
        <div className="flex items-center text-gray-700">
          <FaPhoneAlt className="mr-2 text-blue-600" />
          <span>+68 685 88666</span>
        </div>

        {/* User Profile */}
        <button className="p-2 border border-gray-400 rounded-full hover:bg-gray-200">
          <FaUser className="text-gray-700" />
        </button>

        {/* Add Property Button */}
        <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200">
          Add Property
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
