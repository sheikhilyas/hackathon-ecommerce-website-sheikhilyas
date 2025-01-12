
export default function ProductCard() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-black p-4">
        {/* Left Section (Images) */}
        <div className="flex flex-col space-y-4 mr-4">
          <img
            src="/image44.png"
            alt="Sample Dish"
            className="w-24 h-24 object-cover rounded-md cursor-pointer hover:scale-105 transition"
          />
          <img
            src="/image45.png"
            alt="Sample Dish"
            className="w-24 h-24 object-cover rounded-md cursor-pointer hover:scale-105 transition"
          />
          <img
            src="/image46.png"
            alt="Sample Dish"
            className="w-24 h-24 object-cover rounded-md cursor-pointer hover:scale-105 transition"
          />
          <img
            src="/image47.png"
            alt="Sample Dish"
            className="w-24 h-24 object-cover rounded-md cursor-pointer hover:scale-105 transition"
          />
        </div>
  
        {/* Main Image */}
        <div>
          <img
            src="/image43.png"
            alt="Sample Dish"
            className="w-[400px] h-[435px] object-cover rounded-md cursor-pointer hover:scale-105 transition"
          />
        </div>
  
        {/* Right Section (Details) */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start md:ml-4 text-center md:text-left">
          {/* Product Title and Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-md">
                In stock
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Yummy Chicken Chup</h1>
            <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
             pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,<br />
              vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae <br />
               mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="w-full h-px bg-gray-300 mb-4" />
  
            {/* Price and Reviews */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">$54.00</span>
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg mr-1">★★★★★</span>
                <span className="text-gray-400 text-sm">5.0 Rating | 22 Reviews</span>
              </div>
            </div>
  
            {/* Add to Cart Section */}
            <div className="flex items-center mb-4 justify-center">
              <button className="bg-gray-700 px-4 py-2 text-xl rounded-l-md">
                -
              </button>
              <input
                type="text"
                value="1"
                className="w-12 text-center bg-gray-200 border-0 text-black focus:outline-none"
              />
              <button className="bg-gray-700 px-4 py-2 text-xl rounded-r-md">
                +
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 ml-4 rounded-md hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
  
            {/* Wishlist and Compare */}
            <div className="flex space-x-6 mb-4 justify-center">
              <span className="text-gray-600 cursor-pointer hover:text-black">
                Add to Wishlist
              </span>
              <span className="text-gray-600 cursor-pointer hover:text-black">
                Compare
              </span>
            </div>
  
            {/* Categories and Tags */}
            <div className="text-gray-600 mb-4">
              <p>Category: <span className="text-black">Pizza</span></p>
              <p>Tag: <span className="text-black">Our Shop</span></p>
            </div>
  
            {/* Social Sharing */}
            <div className="flex space-x-4 justify-center">
              <span className="cursor-pointer bg-gray-200 p-2 rounded-md hover:bg-orange-500">
                📘
              </span>
              <span className="cursor-pointer bg-gray-200 p-2 rounded-md hover:bg-orange-500">
                🐦
              </span>
              <span className="cursor-pointer bg-gray-200 p-2 rounded-md hover:bg-orange-500">
                📸
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  