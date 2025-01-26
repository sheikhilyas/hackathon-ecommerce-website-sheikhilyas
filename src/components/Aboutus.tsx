import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function AboutUs() {
  return (
    <div className="bg-white text-black py-12 px-4 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-screen-lg mx-auto">
        {/* Left Section - Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image88.png"
                alt="Tacos"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image89.png"
                alt="Fried chicken"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image90.png"
                alt="Salad and juice"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Text and CTA */}
        <div className="space-y-6 text-center sm:text-left">
          <h2 className={`${VibeFont.className} text-yellow-500 font-bold text-lg`}>About us ____</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Food is an important <br /> part of a balanced diet
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            vitae mus risus. Lacus nisl, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600">
              Show more
            </button>
            <button className="flex items-center gap-2 text-yellow-500 font-medium hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                />
              </svg>
              Watch video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
