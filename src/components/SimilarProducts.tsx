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
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div
        className="similar-products"
        style={{
          width: "1320px",
          height: "401px",
          background: "white",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h2 className="title text-black text-xl font-semibold mb-4">
          Similar Products
        </h2>
        <div className="products-grid flex justify-between items-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card relative overflow-hidden bg-white rounded-md hover:scale-105 transition-transform"
              style={{ width: "300px" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="product-image object-cover"
              />
              <div className="product-details p-4">
                <h3 className="product-name text-lg font-medium text-black mb-2">
                  {product.name}
                </h3>
                <p className="product-price text-base text-black">
                  <span className="current-price text-orange-500 font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="old-price text-gray-400 line-through ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation flex justify-between mt-4">
          <button className="nav-btn bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            &#8592;
          </button>
          <button className="nav-btn bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
