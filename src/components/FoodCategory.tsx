import React from 'react';
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
export default function FoodCategory () {
  return (
    <section className="bg-black text-white py-12  justify-center sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p
            className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}
          >
            Food Category
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="text-orange-400">Ch</span>oose Food Item
          </h2>
        </div>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Food Item 1 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 group">
            <img
              src="/image8.png"
              alt="Fast Food Dish"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-4 left-4 text-orange-500 bg-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Fast Food Dish
            </div>
          </div>

          {/* Repeat Food Item Template */}
          {/* Food Item 2 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 group">
            <img
              src="/image7.png"
              alt="Fast Food Dish"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-4 left-4 text-orange-500 bg-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Fast Food Dish
            </div>
          </div>

          {/* Food Item 3 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 group">
            <img
              src="/image68.png"
              alt="Fast Food Dish"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-4 left-4 text-orange-500 bg-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Fast Food Dish
            </div>
          </div>

          {/* Food Item 4 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 group">
            <img
              src="/image9.png"
              alt="Fast Food Dish"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-4 left-4 text-orange-500 bg-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Fast Food Dish
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


