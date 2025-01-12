import React from 'react';

export default function Shoppingcontent () {
  return (
    <div className="w-full bg-white text-black p-6 flex justify-between gap-4">
      {/* Coupon Code Section */}
      <div className="w-1/2 border border-gray-700 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
        </p>
        <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter Here code"
            className="w-full bg-white text-black p-2 outline-none"
          />
          <button className="bg-orange-500 text-black px-4 py-2 font-semibold">Apply</button>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="w-1/2 border border-gray-700 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">Total Bill</h2>
        <div className="flex justify-between mb-2">
          <p className="text-gray-400">Cart Subtotal</p>
          <p className="text-white">$120.00</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-400">Shipping Charge</p>
          <p className="text-white">$00.00</p>
        </div>
        <div className="flex justify-between border-t border-gray-700 pt-2">
          <p className="text-white font-semibold">Total Amount</p>
          <p className="text-white font-semibold">$205.00</p>
        </div>
        <button className="w-full bg-orange-500 text-black py-3 font-semibold mt-4 rounded-md flex items-center justify-center">
          Proceed to Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

