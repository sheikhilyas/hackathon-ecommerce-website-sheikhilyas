"use client";
import Image from "next/image";

export default function SimilarProducts() {
  const products = [
    {
      name: "Fresh Lime",
      price: "$38.00",
      oldPrice: "$45.00",
      image: "/image49.png",
    },
    {
      name: "Chocolate Muffin",
      price: "$28.00",
      oldPrice: null,
      image: "/image48.png",
    },
    {
      name: "Burger",
      price: "$21.00",
      oldPrice: null,
      image: "/image50.png",
    },
    {
      name: "Fresh Lime",
      price: "$38.00",
      oldPrice: "$45.00",
      image: "/image49.png",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100 px-4">
      <div
        className="w-full max-w-5xl bg-white rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-base text-gray-800">
                  <span className="text-orange-500 font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            &#8592;
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
