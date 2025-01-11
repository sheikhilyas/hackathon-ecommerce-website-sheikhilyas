import React from "react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shipping Address Section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded mt-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <select
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              >
                <option>Choose country</option>
                {/* Add more countries here */}
              </select>
              <select
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              >
                <option>Choose city</option>
                {/* Add more cities here */}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Zip code"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Address 1"
                className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address 2"
              className="w-full p-2 bg-white-800 text-white border border-gray-700 rounded mt-4"
            />
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="billing-address"
                className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700 rounded"
              />
              <label
                htmlFor="billing-address"
                className="ml-2 text-sm"
              >
                Same as shipping address
              </label>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button className="px-4 py-2 bg-white-800 text-white rounded">
                Back to cart
              </button>
              <button className="px-4 py-2 bg-orange-500 text-black font-bold rounded">
                Proceed to shipping
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white-900 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <img
                src="/image84.png" 
                alt="Chicken Tikka Kabab"
                className="w-16 h-16 rounded"
              />
              <div>
                <h3>Chicken Tikka Kabab</h3>
                <p className="text-sm">150 gm net</p>
                <p className="font-bold">50$</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <img
                src="/image84.png"
                alt="Chicken Tikka Kabab"
                className="w-16 h-16 rounded"
              />
              <div>
                <h3>Chicken Tikka Kabab</h3>
                <p className="text-sm">150 gm net</p>
                <p className="font-bold">50$</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <img
                src="/image84.png"
                alt="Chicken Tikka Kabab"
                className="w-16 h-16 rounded"
              />
              <div>
                <h3>Chicken Tikka Kabab</h3>
                <p className="text-sm">150 gm net</p>
                <p className="font-bold">50$</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4 space-y-2">
            <div className="flex justify-between">
              <p>Sub-total</p>
              <p>130$</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>25%</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>54.76$</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>432.65$</p>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-black font-bold rounded">
            Place an order
          </button>
        </div>
      </div>
    </div>
  );
}
