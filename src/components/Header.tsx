"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <section className="bg-black text-white relative">
      <nav className="bg-black border-gray-700">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center relative top-3 ">
          <span className="text-2xl font-bold absolute top-0">
            <span className="text-white">Food</span>
            <span className="text-yellow-500">tuck</span>
          </span>

          <div className="w-full flex items-center justify-between mt-10">
            <div className="hidden md:flex space-x-8 text-lg font-medium">
              <ul className="flex flex-row space-x-8">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-yellow-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Menu
                  </Link>
                </li>

                {/* Dropdown for Blog */}
                <li
                  className="relative"
                  onMouseEnter={() => toggleDropdown("blog")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-gray-400 hover:text-yellow-500 flex items-center">
                    Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === "blog" && (
                    <div className="absolute left-0 mt-2 bg-black text-white rounded-md shadow-lg w-40 z-10">
                      <ul className="py-2">
                        <li>
                          <Link
                            href="/blog"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blogdetails"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Dropdown for Pages */}
                <li
                  className="relative"
                  onMouseEnter={() => toggleDropdown("pages")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-gray-400 hover:text-yellow-500 flex items-center">
                    Pages
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === "pages" && (
                    <div className="absolute left-0 mt-2 bg-black text-white rounded-md shadow-lg w-40 z-10">
                      <ul className="py-2">
                        <li>
                          <Link
                            href="/pages"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Page
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/checkout"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Checkout Page
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/FAQ"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            FAQ Page
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    About
                  </Link>
                </li>

                {/* Dropdown for Shop */}
                <li
                  className="relative"
                  onMouseEnter={() => toggleDropdown("shop")}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-gray-400 hover:text-yellow-500 flex items-center">
                    Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === "shop" && (
                    <div className="absolute left-0 mt-2 bg-black text-white rounded-md shadow-lg w-40 z-10">
                      <ul className="py-2">
                        <li>
                          <Link
                            href="/shoplist"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shopdetails"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Shop Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shopcart"
                            className="block px-4 py-2 text-white-700 hover:bg-gray-200 hover:text-black rounded-md"
                          >
                            Shop Cart
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-black border border-gray-600 rounded-full px-4 py-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
                <button className="absolute top-2 right-3 text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.8-1.8l4.35 4.35z"
                    />
                  </svg>
                </button>
              </div>
              <button className="text-gray-400 hover:text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M9 9h6m-8.25 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm12.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
