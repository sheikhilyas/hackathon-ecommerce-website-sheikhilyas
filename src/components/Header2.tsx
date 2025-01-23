'use client';

import { useState } from 'react';
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <header className="z-50 w-full bg-[#0D0D0D] left-0 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-4 lg:py-7">
      <nav className="flex items-center justify-between relative font-bold">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[32px] font-bold text-white z-50"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <p
          variant="ghost"
          className="lg:hidden hover:text-white text-white z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </p>

        {/* Navigation Links */}
        <div className={`fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6 lg:static lg:flex-row lg:bg-transparent lg:gap-[32px] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full lg:translate-x-0 lg:opacity-100 lg:visible'} absolute top-0 left-0 w-full h-screen lg:h-auto`}>
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[32px]">
            {menuItems.map((item) => (
              <li key={item.name} className="relative w-full lg:w-auto text-center">
                {/* Dropdown for "Blog", "Pages", "Shop" */}
                {item.name === "Blog" || item.name === "Pages" || item.name === "Shop" ? (
                  <div 
                    onMouseEnter={() => toggleDropdown(item.name)} 
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <button className="text-white hover:text-yellow-500">
                      {item.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 bg-[#0D0D0D] text-white rounded-md shadow-lg w-40 z-10">
                        <ul className="py-2 text-left"> {/* Added text-left class here */}
                          {/* Blog Dropdown Items */}
                          {item.name === "Blog" && (
                            <>
                              <li>
                                <Link
                                  href="/blog"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Blog
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blogdetails"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Blog Details
                                </Link>
                              </li>
                            </>
                          )}
                          {/* Pages Dropdown Items */}
                          {item.name === "Pages" && (
                            <>
                              <li>
                                <Link
                                  href="/pages"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Page
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/checkout"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Checkout Page
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/FAQ"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  FAQ Page
                                </Link>
                              </li>
                            </>
                          )}
                          {/* Shop Dropdown Items */}
                          {item.name === "Shop" && (
                            <>
                              <li>
                                <Link
                                  href="/shoplist"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Shop
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/shopdetails"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Shop Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/shopcart"
                                  className="block px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                                >
                                  Shop Cart
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block w-full lg:w-auto text-[16px] leading-6 ${item.active ? "text-white" : "text-white"} font-inter hover:text-yellow-500 transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center gap-4 mt-6">
            <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Search">
              <Search size={24} />
            </Link>
            <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
              <User size={24} />
            </Link>
            <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Search">
            <Search size={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
            <User size={24} />
          </Link>
          <Link href="/shopcart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
