import React from 'react';
import Image from 'next/image';

export default function Product() {
  const products = [
    { name: 'Burger', price: 35.0, quantity: 1, total: 221.0, image: '/image53.png' },
    { name: 'Fresh Lime', price: 25.0, quantity: 1, total: 521.0, image: '/image54.png' },
    { name: 'Pizza', price: 15.0, quantity: 1, total: 421.0, image: '/image55.png' },
    { name: 'Chocolate Muffin', price: 45.0, quantity: 1, total: 521.0, image: '/image56.png' },
    { name: 'Cheese Butter', price: 15.0, quantity: 1, total: 325.0, image: '/image57.png' },
  ];

  return (
    <div className="w-full bg-white text-black p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="py-4">Product</th>
            <th className="py-4">Price</th>
            <th className="py-4">Quantity</th>
            <th className="py-4">Total</th>
            <th className="py-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-4 flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={64} 
                  height={64} 
                  className="rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.431 8.208 1.191-5.939 5.796 1.406 8.195L12 18.896l-7.343 3.804 1.406-8.195-5.939-5.796 8.208-1.191z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </td>
              <td className="py-4">${product.price.toFixed(2)}</td>
              <td className="py-4">
                <div className="flex items-center border border-gray-700 rounded-md">
                  <button className="px-2 text-gray-300">-</button>
                  <span className="px-4">{product.quantity}</span>
                  <button className="px-2 text-gray-300">+</button>
                </div>
              </td>
              <td className="py-4">${product.total.toFixed(2)}</td>
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
    </div>
  );
}
