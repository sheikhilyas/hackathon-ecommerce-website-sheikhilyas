import React from 'react'; 

export default function SupportSection () {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-black px-4 md:px-48 py-20">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 flex-grow text-center md:text-left px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            <span className='text-orange-500'>St</span>ill You Need Our Support?
          </h2>
          <p className="text-sm md:text-lg text-white">
            Don’t wait, make a smart logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center mt-2 md:mt-0 px-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 w-full md:w-64 rounded-l-md bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-white"
          />
          <button className="bg-white text-orange-500 px-6 py-2 rounded-r-md hover:bg-orange-100 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    );
}
