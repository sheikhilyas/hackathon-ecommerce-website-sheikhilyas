import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { TbGitCompare } from "react-icons/tb";
import { FaYoutube, FaTwitter, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

export default function ProductCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white text-black p-6 max-w-screen-lg">
        {/* Left Section (Thumbnail Images) */}
        <div className="flex flex-col space-y-4">
          <Image
            src="/image44.png"
            alt="Thumbnail 1"
            width={96}
            height={96}
            className="object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/image45.png"
            alt="Thumbnail 2"
            width={96}
            height={96}
            className="object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/image46.png"
            alt="Thumbnail 3"
            width={96}
            height={96}
            className="object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/image47.png"
            alt="Thumbnail 4"
            width={96}
            height={96}
            className="object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Image */}
        <div className="flex-shrink-0 mx-6">
          <Image
            src="/image43.png"
            alt="Main Dish"
            width={400}
            height={435}
            className="object-cover rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Section (Details) */}
        <div className="flex-1 flex flex-col space-y-4">
          {/* Stock Status */}
          <div className="flex justify-between items-center">
            <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-md">
              In stock
            </span>
            <div className="text-gray-400 text-sm flex space-x-4">
              <span className="cursor-pointer hover:text-black flex items-center gap-x-2"><FaArrowLeft /> Prev</span>
              <span className="cursor-pointer hover:text-black flex items-center gap-x-2">Next <FaArrowRight /></span>
            </div>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl font-bold">Yummy Chicken Chup</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla. Urna, urna,
            vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          {/* Price and Rating */}
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold">$54.00</span>
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-gray-400 text-sm ml-2">5.0 Rating | 22 Reviews</span>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button className="bg-gray-200 text-black px-4 py-2">-</button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-12 text-center bg-white border-0"
              />
              <button className="bg-gray-200 text-black px-4 py-2">+</button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition flex items-center gap-x-2 ">
            <BiShoppingBag />
            Add to cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex justify-between text-gray-600">
            <span className="cursor-pointer hover:text-black flex items-center gap-x-2 "> <CiHeart />Add to Wishlist</span>
            <span className="cursor-pointer hover:text-black flex items-center gap-x-2 "><TbGitCompare />Compare</span>

          </div>

          {/* Category and Tags */}
          <div className="text-gray-600">
            <p>
              Category: <span className="text-black">Pizza</span>
            </p>
            <p>
              Tag: <span className="text-black">Our Shop</span>
            </p>
          </div>
          {/* Social Sharing */}
          <div className="flex space-x-4">
           <h1>Share:</h1>
            <span className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-orange-500 transition">
              <FaYoutube />
            </span>
            <span className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-orange-500 transition">
              <FaFacebook />
            </span>
            <span className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-orange-500 transition">
              <FaTwitter />
            </span>
            <span className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-orange-500 transition">
              <AiFillInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
