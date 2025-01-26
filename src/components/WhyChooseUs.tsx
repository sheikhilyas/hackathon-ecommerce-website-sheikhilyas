import React from "react";
import Image from "next/image";
import { MdOutlineLunchDining, MdOutlineDinnerDining } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { Great_Vibes } from "next/font/google";
import { section } from "framer-motion/client";

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16 px-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
          {/* Top Left Image */}
          <div className="relative w-[370px] h-[300px] lg:h-[360px] row-span-2 right-20">
            <Image
              src="/image10.png"
              alt="Tacos"
              className="rounded-lg object-cover"
              fill
            />
          </div>
          {/* Top Right Image */}
          <div className="relative w-[250px] h-[150px] lg:h-[200px] top-40 right-2">
            <Image
              src="/image16.png"
              alt="Burger"
              className="rounded-lg object-cover"
              fill
            />
          </div>
          {/* Bottom Left Image */}
          <div className="relative w-[210px] h-[100px] lg:h-[200px] top-20 right-40">
            <Image
              src="/image60.png"
              alt="Chicken"
              className="rounded-lg object-cover"
              fill
            />
          </div>
          {/* Bottom Center Image */}
          <div className="relative w-[220px] h-[260px] lg:h-[300px] row-span-2 bottom-56 right-20">
            <Image
              src="/image11.png"
              alt="Fries"
              className="rounded-lg object-cover"
              fill
            />
          </div>
          {/* Bottom Center Image */}
          <div className="relative w-[180px] h-[200px] lg:h-[150px] row-span-2 bottom-56 left-16">
            <Image
              src="/image13.png"
              alt="Fries"
              className="rounded-lg object-cover"
              fill
            />
          </div>
          {/* Bottom Center Image */}
          <div className="relative w-[180px] h-[200px] lg:h-[150px] row-span-2 bottom-96 left-96">
            <Image
              src="/image71.png"
              alt="Fries"
              className="rounded-lg object-cover"
              fill
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative">
          <div className="absolute bottom-2">
            <h1 className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}>
              Why Choose Us
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-snug">
              <span className="text-orange-400">Ex</span>traordinary Taste
              <br />
              And Experienced
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              <br />pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <IoFastFoodOutline className="text-2xl" />
                </div>
                <p className="mt-2 text-sm sm:text-base">Fast Food</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <MdOutlineLunchDining className="text-2xl" />
                </div>
                <p className="mt-2 text-sm sm:text-base">Lunch</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <MdOutlineDinnerDining className="text-2xl" />
                </div>
                <p className="mt-2 text-sm sm:text-base">Dinner</p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center bg-white w-full max-w-xs h-[90px] rounded-lg shadow-lg mx-auto lg:mx-0">
              <div className="text-5xl font-bold text-orange-400">30+</div>
              <p className="ml-4 text-black font-semibold text-lg">
                Years of <br />
                <span className="font-bold">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
