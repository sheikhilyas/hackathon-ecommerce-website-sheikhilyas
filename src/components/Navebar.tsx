import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function Navebar() {
    return (
        <div className="bg-black min-h-screen w-full">
            {/* Header Section */}
            <div className="relative w-full min-h-screen lg:h-[600px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/image1.png"
                        alt="Background showcasing the ambiance of our service"
                        fill
                        priority
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                </div>

                {/* Main Content Container */}
                <div className="relative h-full max-w-[1440px] mx-auto">
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Social Media Sidebar */}
                        <div className="flex lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-6 px-4 lg:px-12 py-8 lg:py-0 lg:mt-40">
                            <div className="hidden lg:block w-px h-20 bg-white"></div>
                            <FaFacebookF className="text-white hover:text-[#FF9F0D] transition-colors w-5 h-5 cursor-pointer" />
                            <FaTwitter className="text-white hover:text-[#FF9F0D] transition-colors w-5 h-5 cursor-pointer" />
                            <FaPinterestP className="text-white hover:text-[#FF9F0D] transition-colors w-5 h-5 cursor-pointer" />
                            <div className="hidden lg:block w-px h-20 bg-white"></div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-0">
                            {/* Text Content */}
                            <div className="lg:mt-40 max-w-xl">
                                <p className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}>
                                    It&apos;s Quick &amp; Amusing!
                                </p>
                                <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                                    <span className="text-[#FF9F0D]">Th&apos;e</span> Art of Speed
                                    <br /> Food Quality
                                </h1>
                                <p className="text-gray-300 text-lg mb-8 max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <br />
                                    Varius sed pharetra dictum neque massa congue.
                                </p>

                                <a
                                    className={`px-8 py-3 bg-[#FF9F0D] text-white rounded-full hover:bg-[#ff8c00] transition-colors duration-300`}
                                >
                                    See Menu
                                </a>
                            </div>

                            {/* Hero Image Section */}
                            <div className="relative mt-12 lg:mt-6 w-full max-w-2xl">
                                <div className="relative w-full pt-[100%]">
                                    {/* Main Dish Image */}
                                    <Image
                                        src="/Image.png"
                                        alt="A deliciously plated dish that highlights our quality"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
