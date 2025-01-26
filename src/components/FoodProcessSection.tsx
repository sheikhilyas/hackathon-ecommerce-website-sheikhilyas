import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function FoodProcessSection() {
  return (
    <section
      className="relative min-h-[100px] sm:min-h-[400px] lg:min-h-[500px] w-full bg-cover bg-center md:bg-[top] bg-no-repeat"
      style={{
        backgroundImage: "url('/image19.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full px-4 sm:px-6 md:px-10 lg:pr-20 text-white top-10 sm:top-20">
        {/* Subtitle */}
        <p
          className={`${VibeFont.className} text-lg sm:text-xl lg:text-2xl text-[#FF9F0D] mb-2 text-right`}
        >
          Restaurant Active Process
        </p>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-right leading-tight">
          <span className="text-[#FF9F0D]">We</span> Document Every <br /> Food Bean Process until it is saved
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mb-6 text-right leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
          volutpat fringilla bibendum. Urna, elit augue urna.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
          <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white border border-yellow-500 rounded-full hover:bg-yellow-500 transition">
            Read More
          </button>
          <button className="flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white border border-yellow-500 rounded-full hover:bg-yellow-500 transition">
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 22v-20l18 10-18 10z" />
            </svg>
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
}
