import React from 'react';

export default function Dessert() {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex">
      {/* Image on the left */}
      <div className="flex-none w-1/3 p-4 flex justify-center items-center">
        <img src="/image26.png" alt="Menu Highlight" className="w-[448px] h-[626px] object-cover rounded-lg shadow-lg" />
      </div>

      {/* Content on the right */}
      <div className="flex-1 max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold text-left mb-8 border-b border-gray-700 pb-2">Dessert</h1>

        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div>
              <h2 className="text-2xl font-semibold">Fig and lemon cake</h2>
              <p className="text-gray-400 mt-2">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 mt-2">560 CAL</p>
            </div>
            <span className="text-orange-400 text-xl font-bold">32$</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div>
              <h2 className="text-2xl font-semibold">Creamy mascarpone cake</h2>
              <p className="text-gray-400 mt-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 mt-2">700 CAL</p>
            </div>
            <span className="text-orange-400 text-xl font-bold">43$</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div>
              <h2 className="text-2xl font-semibold">Pastry, blueberries, lemon juice</h2>
              <p className="text-gray-400 mt-2">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 mt-2">1000 CAL</p>
            </div>
            <span className="text-orange-400 text-xl font-bold">14$</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Pain au chocolat</h2>
              <p className="text-gray-400 mt-2">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 mt-2">560 CAL</p>
            </div>
            <span className="text-orange-400 text-xl font-bold">35$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
