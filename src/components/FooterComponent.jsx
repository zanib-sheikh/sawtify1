import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-black via-45% to-purple-950 text-white mt-0 py-10 px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Main Section - Flex container */}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          
          {/* Left Section - Sawtify logo */}
          <div className="flex flex-col  sm:items-start  sm:text-left lg:items-start lg:text-left">
            <h1 className="text-3xl font-semibold font-space-grotesk">Sawtify</h1>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              {/* Gmail Icon */}
              <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-400 p-3 rounded-full transform transition-transform duration-200 hover:scale-110">
                <img
                  src="https://img.icons8.com/?size=100&id=38158&format=png&color=FFFFFF"
                  alt="Gmail"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>

              {/* LinkedIn Icon */}
              <div className="bg-gradient-to-bl from-purple-800 via-pink-500 to-orange-300 p-3 rounded-full transform transition-transform duration-200 hover:scale-110">
                <img
                  src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                  alt="LinkedIn"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3 gap-8">
            {/* First Section */}
            <div>
              <h3 className="py-2 text-lg font-medium">Customer Support</h3>
              <ul className="space-y-1 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/* Second Section */}
            <div>
              <h3 className="py-2 text-lg font-medium">Corporate Info</h3>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Brands</li>
                <li>Investors</li>
                <li>Cookies</li>
              </ul>
            </div>
            {/* Third Section */}
            <div>
              <h3 className="py-2 text-lg font-medium">Promotion</h3>
              <ul className="space-y-1 text-sm">
                <li>Redeem Vouchers</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Help Button */}
          <div className="flex flex-col items-start lg:items-start">
            <h3 className="text-lg font-space-grotesk font-semibold">Need Any Help?</h3>
            <button className="mt-2 font-semibold shadow-sm shadow-gray-400/50 bg-gradient-to-tr from-purple-700 via-pink-500 to-pink-600 text-white py-2 px-4 rounded-full transform transition-transform duration-200 hover:scale-105">
              Contact Sawtify
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t py-1 border-gray-400 w-full mt-8"></div>

        {/* Copyright */}
        <div className="mt-6 text-center font-space-grotesk text-sm">
          Copyright © 2024 Sawtify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
