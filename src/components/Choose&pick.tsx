"use client";

import React, { useState } from "react";

const ChoosePick = () => {
  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Soups",
  ];

  const items = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image29.png", 
      category: "Breakfast",
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image30.png", 
      category: "Breakfast",
    },
    {
      name: "Fresh Breakfast",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "/image12.png", 
      category: "Breakfast",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "/image31.png",
      category: "Breakfast",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image34.png", 
      category: "Breakfast",
    },
    {
      name: "Sllice Beef",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image4.png", 
      category: "Breakfast",
    },
    {
      name: "Fresh Bread",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image32.png", 
      category: "Breakfast",
    },
    {
      name: "Mushaom Pizza",
      description: "Lacus nisl, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/image33.png", // Replace with your image path
      category: "Breakfast",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-black text-white py-10 px-5">
      <h2 className="text-center text-orange-400 text-2xl mb-2">Choose & pick</h2>
      <h1 className="text-center text-4xl font-bold mb-10">From Our Menu</h1>
      <div className="flex justify-center space-x-8 text-lg font-semibold mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category ? "text-white" : "text-white"
            } hover:text-orange-400`}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-shrink-0 md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/image28.png"
            alt={`${selectedCategory} Dish`}
            className="rounded-full w-3/4"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
          {filteredItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <p className="text-orange-400 text-lg font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoosePick;
