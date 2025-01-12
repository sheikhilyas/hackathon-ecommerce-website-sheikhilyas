import React from 'react';

export default function SupportSection () {
    return (
      <div className="flex items-center justify-between bg-black px-10 py-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 flex-grow">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500">
            Still You Need Our Support?
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.
          </p>
          {/* Line extends dynamically */}
          <div className=" h-0.5 bg-orange-500 flex-grow " />
        </div>
  
        {/* Right Section */}
        <div className="flex items-center ml-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 w-64 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    );
}
