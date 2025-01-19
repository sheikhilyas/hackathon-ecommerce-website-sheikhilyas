'use client';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function MeetOurChef() {
  const chefs = [
    { name: 'D. Estwood', title: 'Chief Chef', image: '/image20.png' },
    { name: 'D. Scoriesh', title: 'Assistant Chef', image: '/image21.png' },
    { name: 'M. William', title: 'Advertising Chef', image: '/image22.png' },
    { name: 'W. Readfroad', title: 'Chef', image: '/image23.png' },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      {/* Header */}
      <h2
        className={`${VibeFont.className} text-center text-orange-400 text-2xl sm:text-3xl lg:text-4xl mb-4`}
      >
        Chefs
      </h2>
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
        <span className="text-[#FF9F0D]">Me</span>et Our Chef
      </h1>

      {/* Chefs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Animated Image */}
            <div
              className="relative w-[250px] h-[300px] sm:w-[312px] sm:h-[391px] mx-auto animate-image-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={chef.image}
                alt={`Portrait of ${chef.name}, ${chef.title}`}
                width={312}
                height={391}
                className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-5 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">{chef.name}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8 sm:mt-10">
        <button className="bg-orange-500 text-white py-2 px-6 sm:py-3 sm:px-8 shadow-lg hover:bg-orange-600 transition">
          See More
        </button>
      </div>

      {/* Add Custom Animations */}
      <style jsx>{`
        @keyframes image-fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-image-fade-in {
          animation: image-fade-in 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
