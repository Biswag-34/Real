import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const partners = [
  "/bp1.png",
  "/bp2.jpeg",
  "/bp3.png",
  "/bp4.png",
  "/bp5.png",
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto text-center">
        {/* Newsletter Section */}
        <div className="mb-8">
          <motion.img
            src="/icon1.png"
            alt="Newsletter"
            className="mx-auto mb-4 w-12 h-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <h2 className="text-2xl font-bold">Stay Up to Date</h2>
          <p className="text-gray-400">Subscribe to our newsletter to receive weekly updates.</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Your e-mail"
              className="px-4 py-2 w-64 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-r-md">Send →</button>
          </div>
        </div>

        {/* Brand Partner Carousel */}
        <div className="overflow-hidden my-8">
          <motion.div
            className="flex space-x-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            key={partners.join(",")} // This ensures that the animation runs continuously without restarting
          >
            {partners.concat(partners).map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt="Brand Partner"
                className="h-16 mx-8 opacity-80 hover:opacity-100 transform hover:scale-110 transition duration-300 ease-in-out object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold">JustHome</h3>
          <p className="text-gray-500">Copyright © 2024. JustHome</p>
          <div className="flex space-x-6 mt-4">
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-500 transition duration-200" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition duration-200" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700 transition duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
