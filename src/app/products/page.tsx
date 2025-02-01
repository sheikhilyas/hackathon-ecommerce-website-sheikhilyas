'use client';
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
    projectId: "x6mishsb",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});

interface Product {
    id: string;
    title: string;
    description: string;
    price?: number;
    discountPercentage?: number;
    imageUrl: string;
    productImage?: {
        asset: {
            _ref: string;
        };
    };
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
            *[_type == "product"] {
                _id,
                title,
                description,
                price,
                discountPercentage,
                "imageUrl": productImage.asset->url,
                tags
            }
            `;
            const data = await sanity.fetch(query);
            setProducts(data.map((item: any) => ({ ...item, id: item._id }))); // Renaming _id to id
        } catch (error) {
            console.error("Error Fetching Products:", error);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    // Function to truncate long descriptions
    const truncateDescription = (description: string) => {
        return description.length > 100 ? `${description.substring(0, 100)}...` : description;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    {product.price && (
                                        <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
                                    )}
                                    {product.discountPercentage && product.discountPercentage > 0 && (
                                        <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap">
                                {product.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 px-2 py-1 rounded-md text-xs mr-2 mb-1 text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart summary */}
            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-black text-red-800">Cart Summary</h3>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                            >
                                <div>
                                    <p className="font-medium text-slate-900">{item.title}</p>
                                    <p className="text-sm text-blue-600">
                                        ${item.price?.toFixed(2)}
                                    </p>
                                </div>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={50}
                                    className="rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-slate-700 mt-2">Your Cart is Empty Pleace Add Products.</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
