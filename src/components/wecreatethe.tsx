import React from 'react';
import { Great_Vibes } from 'next/font/google';
const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function About () {
    return (
        <div>
            <section className="bg-black text-white py-16 px-4 md:px-8">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-6">
                        <p className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}
                        >
                            About us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            <span className="text-orange-400">We </span>
                            <span>Create the Best Foody Product</span>
                        </h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium
                            donec id elementum.
                        </p>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <span className="text-orange-400 text-xl mr-2">✔</span>
                                Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-400 text-xl mr-2">✔</span>
                                Quisque diam pellentesque bibendum non dui volutpat fringilla
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-400 text-xl mr-2">✔</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>
                        </ul>
                        <a
                            href="#read-more"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-medium"
                        >
                            Read More
                        </a>
                    </div>

                    {/* Right Content */}
                    <div
                        className="md:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-0"
                        style={{ height: '300px' }}
                    >
                        {/* Image 1 */}
                        <div className="col-span-2 flex">
                            <img
                                src="/image69.png"
                                alt="Main Dish"
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                style={{ height: 'auto', maxHeight: '210px' }}
                            />
                        </div>
                        {/* Image 2 */}
                        <div className="flex">
                            <img
                                src="/image5.png"
                                alt="Side Dish"
                                className="rounded-lg shadow-lg object-cover w-full transition-transform duration-500 hover:scale-110"
                                style={{ height: '160px' }}
                            />
                        </div>
                        {/* Image 3 */}
                        <div className="flex">
                            <img
                                src="/image4.png"
                                alt="Sandwich"
                                className="rounded-lg shadow-lg object-cover w-full transition-transform duration-500 hover:scale-110"
                                style={{ height: '160px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


