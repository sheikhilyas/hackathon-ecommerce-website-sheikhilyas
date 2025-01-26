import React from "react";
import Image from "next/image";

export default function Product() {
  const products = [
    { name: "Burger", price: 35.0, quantity: 1, total: 221.0, image: "/image53.png", rating: 3 },
    { name: "Fresh Lime", price: 25.0, quantity: 1, total: 521.0, image: "/image54.png", rating: 4 },
    { name: "Pizza", price: 15.0, quantity: 1, total: 421.0, image: "/image55.png", rating: 4 },
    { name: "Chocolate Muffin", price: 45.0, quantity: 1, total: 521.0, image: "/image56.png", rating: 3 },
    { name: "Cheese Butter", price: 15.0, quantity: 1, total: 325.0, image: "/image57.png", rating: 4 },
  ];

  const cartSubtotal = 120.0;
  const shippingCharge = 0.0;
  const totalAmount = 205.0;

  return (
    <div className="w-full min-h-screen bg-white text-black p-4 flex justify-center items-center">
      <div className="w-full max-w-[1320px]">
        {/* Product Table */}
        <table className="w-full border-collapse text-left text-sm md:text-base">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-4">Product</th>
              <th className="py-4 hidden md:table-cell">Price</th>
              <th className="py-4 hidden md:table-cell">Quantity</th>
              <th className="py-4 hidden md:table-cell">Total</th>
              <th className="py-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-4 flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <p className="font-semibold text-black">{product.name}</p>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < product.rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 md:w-5 md:h-5"
                        >
                          <path d="M12 .587l3.668 7.431 8.208 1.191-5.939 5.796 1.406 8.195L12 18.896l-7.343 3.804 1.406-8.195-5.939-5.796 8.208-1.191z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell">${product.price.toFixed(2)}</td>
                <td className="py-4 hidden md:table-cell">
                  <div className="flex items-center justify-center border border-gray-600 rounded-md w-[110px] h-[41px]">
                    <button className="px-2 text-black transform hover:bg-gray-200 active:scale-90 transition-all">
                      -
                    </button>
                    <span className="px-4">{product.quantity}</span>
                    <button className="px-2 text-black transform hover:bg-gray-200 active:scale-90 transition-all">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell">${product.total.toFixed(2)}</td>
                <td className="py-4">
                  <button className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Code and Total Bill */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          {/* Coupon Code Section */}
          <div className="w-full md:w-[60%] mb-8 md:mb-0">
            <p className="font-bold text-lg">Coupon Code</p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter Here code"
                className="border border-gray-400 rounded-md px-4 py-2 w-full md:w-[70%] mr-4"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all">
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className="w-full md:w-[35%] text-right">
            <p className="font-bold text-lg">Total Bill</p>
            <div className="text-gray-500 text-sm mt-4">
              <p className="flex justify-between">
                <span>Cart Subtotal:</span> <span>${cartSubtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between mt-2">
                <span>Shipping Charge:</span>{" "}
                <span>${shippingCharge.toFixed(2)}</span>
              </p>
              <p className="flex justify-between font-bold mt-4 text-black">
                <span>Total Amount:</span> <span>${totalAmount.toFixed(2)}</span>
              </p>
            </div>
            <button className="bg-orange-500 text-white w-full mt-4 py-3 rounded-md hover:bg-orange-600 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
