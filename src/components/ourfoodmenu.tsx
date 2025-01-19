import React from "react";

export default function Ourfoodmenu() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">Our Food Menu</h1>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-6 text-lg font-medium">
        <button className="text-orange-400 border-b-2 border-orange-400">
          Breakfast
        </button>
        <button className="text-gray-400">Lunch</button>
        <button className="text-gray-400">Dinner</button>
        <button className="text-gray-400">Dessert</button>
        <button className="text-gray-400">Drink</button>
        <button className="text-gray-400">Snack</button>
      </div>

      {/* Menu Items in Two Columns */}
      <div className="grid grid-cols-2 gap-6 mt-8 px-12">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-6 py-4 border border-gray-700"
          >
            <div>
              <h2 className="text-xl font-semibold text-orange-400">
                Alder Grilled Chinook Salmon
              </h2>
              <p className="text-gray-400 text-sm">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-gray-400 mt-1">560 CAL</p>
            </div>
            <p className="text-orange-400 text-xl font-bold">32$</p>
          </div>
        ))}
      </div>

      {/* View Menu Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-transparent border border-orange-400 text-orange-400 px-6 py-2 text-lg font-medium hover:bg-orange-400 hover:text-black">
          View menu
        </button>
      </div>
    </div>
  );
}
