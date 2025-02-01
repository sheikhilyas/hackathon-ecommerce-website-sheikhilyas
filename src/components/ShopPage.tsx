import React from 'react';
import Image from 'next/image';

function ShopPage() {

  const images = [
    "/image90.png",
    "/image59.png",
    "/image50.png",
    "/image61.png",
    "/image62.png",
    "/image63.png",
    "/image66.png",
    "/image64.png",
    "/image65.png",
    "/image61.png",
    "/image62.png",
    "/image63.png"
  ];

  const categories = [
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'burger', label: 'Burger' },
    { id: 'chicken', label: 'Chicken Chup' },
    { id: 'drink', label: 'Drink' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'nonveg', label: 'Non Veg' },
    { id: 'uncategorized', label: 'Uncategorized' },
  ];

  const StarRating = () => (
    <div className="flex items-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#FF9F0D" viewBox="0 0 24 24">
          <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19.61-5.52 4.78 1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <span className="text-lg font-medium">Sort By:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">Show:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>12 Items</option>
                <option>24 Items</option>
                <option>36 Items</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Fresh Lime</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9F0D] text-xl font-bold">$38.00</span>
                      <span className="text-gray-400 line-through">$45.00</span>
                    </div>
                    <button className="bg-[#FF9F0D] hover:bg-[#e68906] text-white px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/4 space-y-8">
          {/* Search */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search Products..."
                className="flex-grow bg-gray-50 p-2 border border-gray-300 rounded"
              />
              <button className="bg-[#FF9F0D] hover:bg-[#e68906] text-white px-4 py-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-3">
              {categories.map(({ id, label }) => (
                <div key={id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={id}
                    className="w-4 h-4 text-[#FF9F0D] rounded"
                  />
                  <label htmlFor={id} className="text-gray-700 hover:text-[#FF9F0D] cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>

            {/* Styled Category Image */}
            <div className="relative mt-4 rounded-lg overflow-hidden">
              <Image
                src="/image86.png"
                alt="Category Promotion"
                width={300}
                height={200}
                className="object-cover"
              />
              {/* Centered Text Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
                <p className="text-sm text-white">Perfect Taste</p>
                <h3 className="text-lg font-bold text-white">Classic Restaurant</h3>
                <p className="text-lg text-[#FF9F0D] font-bold">$45.00</p>
                <button className="mt-2 bg-[#FF9F0D] hover:bg-[#e68906] text-white px-4 py-2 rounded">
                  Shop Now ➜
                </button>
              </div>
            </div>
          </div>



          {/* Price Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="8000"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$8000</span>
              </div>
              <button className="w-full bg-[#FF9F0D] hover:bg-[#e68906] text-white px-4 py-2 rounded">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Latest Products */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Latest Products</h2>
            <div className="space-y-4">
              {[
                { id: 1, name: "Premium Pizza", price: "$45.00", image: "/image85.png" },
                { id: 2, name: "Cheese Burger", price: "$38.00", image: "/image85.png" },
                { id: 3, name: "Chicken Wings", price: "$25.00", image: "/image85.png" },
                { id: 4, name: "Fresh Juice", price: "$15.00", image:  "/image85.png" },
              ].map((product) => (
                <div key={product.id} className="flex gap-4 items-center">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <StarRating />
                    <p className="text-[#FF9F0D] font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;

