
import React from 'react';

export default function ShopPage() {
  return (
    <div className="min-h-screen text-black bg-white font-sans">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="col-span-3">
            {/* Menu Section */}
            <div className="flex justify-between items-center mb-6 bg-white-900 p-4 rounded-lg">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-4">
                  <label htmlFor="sort" className="text-sm text-black-300">Sort By:</label>
                  <select id="sort" className="bg-white-800 text-gray p-2 rounded-lg">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="show" className="text-sm text-black-300">Show:</label>
                  <select id="show" className="bg-white-800 text-gray p-2 rounded-lg">
                    <option>Default</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'Fresh Lime', price: 38, originalPrice: 45, img: '/image58.png' },
                { name: 'Chocolate Muffin', price: 28, img: '/image59.png' },
                { name: 'Burger', price: 21, originalPrice: 45, img: '/image60.png' },
                { name: 'Country Burger', price: 45, img: '/image61.png' },
                { name: 'Drink', price: 23, originalPrice: 45, img: '/image62.png' },
                { name: 'Pizza', price: 43, img: '/image63.png' },
                { name: 'Cheese Butter', price: 10, img: '/image66.png' },
                { name: 'Sandwiches', price: 25, img: '/image64.png' },
                { name: 'Chicken Chup', price: 12, img: '/image65.png' },
                { name: 'Country Burger', price: 45, img: '/image61.png' },
                { name: 'Drink', price: 23, originalPrice: 45, img: '/image62.png' },
                { name: 'Pizza', price: 43, img: '/image63.png' },
                { name: 'Cheese Butter', price: 10, img: '/image66.png' },
                { name: 'Sandwiches', price: 25, img: '/image64.png' },
                { name: 'Chicken Chup', price: 12, img: '/image65.png' },
              ].map((item, index) => (
                <div key={index} className="bg-white-800 p-4 rounded-lg">
                  {/* Product Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[312px] h-[267px] object-cover mb-4 rounded-lg"
                  />
                  {/* Product Details */}
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-yellow-500">${item.price}</span>
                    {item.originalPrice && (
                      <span className="line-through text-gray-400">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center space-x-4">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">1</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">2</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">3</button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="col-span-1 bg-white-900 p-6 rounded-lg">
            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full p-3 rounded-lg text-black"
              />
            </div>

            {/* Category Section */}
            <h2 className="text-lg font-bold mb-4 text-black-500">Category</h2>
            <div className="space-y-2 text-black-300">
              {['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thai', 'Non Veg', 'Uncategorized'].map(
                (category) => (
                  <div key={category} className="flex items-center">
                    <input type="checkbox" id={category} className="mr-2" />
                    <label htmlFor={category}>{category}</label>
                  </div>
                )
              )}
            </div>

            {/* Banner Section */}
            <div className="mt-8 bg-yellow-500 p-4 rounded-lg text-center">
              <img
                src="/perfect-taste-banner.png"
                alt="Perfect Taste"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-2 text-black">Perfect Taste</h2>
              <p className="text-black">Classic Restaurant</p>
              <span className="text-2xl font-bold text-black">45.00$</span>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">Shop Now</button>
            </div>

            {/* Price Filter */}
            <div className="mt-10">
              <h2 className="text-lg font-bold mb-4 text-black-500">Filter By Price</h2>
              <input type="range" min="0" max="8000" className="w-full" />
              <div className="mt-2 flex justify-between text-black-300">
                <span>$0</span>
                <span>$8000</span>
              </div>
            </div>

            {/* Latest Products */}
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4 text-black-500">Latest Products</h2>
              <ul className="space-y-4 text-black-300">
                {['Pizza', 'Cupcake', 'Cookies', 'Burger'].map((product, index) => (
                  <li key={product} className="flex items-center space-x-2">
                    <img
                      src={`/image86${index + 1}.png`}
                      alt={product}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <p>{product}</p>
                      <p className="text-yellow-500">$35.00</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Tags */}
            <div className="mt-10">
              <h2 className="text-lg font-bold mb-4 text-black-500">Product Tags</h2>
              <div className="flex flex-wrap gap-2">
                {['Services', 'Our Menu', 'Pizza', 'Cupcake', 'Burger', 'Cookies', 'Our Shop', 'Tandoori Chicken'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
