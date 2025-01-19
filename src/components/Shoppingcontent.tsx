import React from 'react';

export default function ShoppingContent() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-[1320px] h-[338px] text-black flex justify-between gap-x-8 relative -top-10">
        {/* Coupon Code Section */}
        <div className="w-1/2">
          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4 text-black-100">Coupon Code</h2>
          <div className="border border-gray-500 p-6 rounded-md">
            <p className="text-black-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter Here code"
                className="w-full bg-white text-black p-3 outline-none"
              />
              <button className="bg-orange-500 text-black px-6 py-3 font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Total Bill Section */}
        <div className="w-1/2">
          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4 text-white-100">Total Bill</h2>
          <div className="border border-gray-500 p-6 rounded-md">
            <div className="flex justify-between mb-4">
              <p className="text-black-400">Cart Subtotal</p>
              <p className="text-black-100">$120.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-black-400">Shipping Charge</p>
              <p className="text-black-100">$00.00</p>
            </div>
            <div className="flex justify-between border-t border-gray-500 pt-4">
              <p className="text-black-100 font-semibold">Total Amount</p>
              <p className="text-black-100 font-semibold">$205.00</p>
            </div>
            <button className="w-full bg-orange-500 text-black py-4 font-semibold mt-6 rounded-md flex items-center justify-center">
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
      </div>
    </div>
  );
}
