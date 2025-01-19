import React from 'react';
import Image from 'next/image';

export default function MenuCourse() {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg overflow-hidden">

        {/* Left Section: Menu */}
        <div className="flex-1 max-w-xl px-8 py-8">
          <h1 className="text-4xl font-bold mb-8 border-b border-white-300 pb-4">Main Course</h1>

          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex justify-between items-center border-b border-white-300 pb-4">
              <div>
                <h2 className="text-2xl font-semibold">Optic Big Breakfast Combo Menu</h2>
                <p className="text-gray-500 mt-2">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 mt-2">560 CAL</p>
              </div>
              <span className="text-orange-500 text-xl font-bold">32$</span>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <div>
                <h2 className="text-2xl font-semibold">Cashew Chicken With Stir-Fry</h2>
                <p className="text-gray-500 mt-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-gray-400 mt-2">700 CAL</p>
              </div>
              <span className="text-orange-500 text-xl font-bold">43$</span>
            </div>

            {/* Item 3 */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <div>
                <h2 className="text-2xl font-semibold">Vegetables & Green Salad</h2>
                <p className="text-gray-500 mt-2">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-gray-400 mt-2">1000 CAL</p>
              </div>
              <span className="text-orange-500 text-xl font-bold">14$</span>
            </div>

            {/* Item 4 */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold">Spicy Vegan Potato Curry</h2>
                <p className="text-gray-500 mt-2">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-gray-400 mt-2">560 CAL</p>
              </div>
              <span className="text-orange-500 text-xl font-bold">35$</span>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-none lg:w-1/2 p-8 flex justify-center items-center bg-white">
          <Image
            src="/image87.png"  
            alt="Menu Highlight"
            width={448}
            height={626}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
