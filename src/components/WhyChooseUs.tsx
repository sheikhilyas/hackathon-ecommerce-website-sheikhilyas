import React from 'react';
import Image from 'next/image';
import { MdOutlineLunchDining, MdOutlineDinnerDining } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function WhyChooseUs() {
    return (
        <section className="bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Image Grid */}
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    {/* Image 1 - Large top-left image */}
                    <div className="relative w-full h-[360px] row-span-2">
                        <Image
                            src="/image10.png"
                            alt="Tacos"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    {/* Image 2 */}
                    <div className="relative w-full h-[170px]">
                        <Image
                            src="/image11.png"
                            alt="Burger"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    {/* Image 3 */}
                    <div className="relative w-full h-[230px]">
                        <Image
                            src="/image16.png"
                            alt="Chicken"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    {/* Image 4 */}
                    <div className="relative w-full h-[280px] row-span-2">
                        <Image
                            src="/image60.png"
                            alt="Fries"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    {/* Image 5 */}
                    <div className="relative w-[161px] h-[166px]">
                        <Image
                            src="/image70.png"
                            alt="Steak"
                            className="rounded-lg object-cover"
                            width={161}
                            height={166}
                        />
                    </div>
                    {/* Image 6 */}
                    <div className="relative w-[161px] h-[166px]">
                        <Image
                            src="/image71.png"
                            alt="Salad"
                            className="rounded-lg object-cover"
                            width={161}
                            height={166}
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div>
                    <h1 className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}>Why Choose Us</h1>
                    <h1 className="text-4xl font-bold text-white leading-snug">
                        <span className="text-orange-400">Ex</span>traordinary Taste
                        <br />
                        And Experienced
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 rounded-full">
                                <IoFastFoodOutline className="text-2xl" />
                            </div>
                            <p className="mt-2">Fast Food</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 rounded-full">
                                <MdOutlineLunchDining className="text-2xl" />
                            </div>
                            <p className="mt-2">Lunch</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 rounded-full">
                                <MdOutlineDinnerDining className="text-2xl" />
                            </div>
                            <p className="mt-2">Dinner</p>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-center bg-white w-[350px] h-[90px] rounded-lg">
                        <div className="text-5xl font-bold text-orange-400">30+</div>
                        <p className="ml-4 text-black font-semibold text-lg">
                            Years of <br />
                            <span className="font-bold">Experience</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
