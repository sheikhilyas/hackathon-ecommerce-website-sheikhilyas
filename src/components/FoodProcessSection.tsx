import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

export default function FoodProcessSection() {
  return (
    <section className="relative h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/image19.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-end justify-center h-full px-4 lg:pr-20 text-white">
        <p className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-2`}>
          Restaurant Active Process
        </p>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-4 text-right">
          <span className="text-[#FF9F0D]">We</span> Document Every <br />Food Bean Process until it is saved
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-6 text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.
        </p>
        <div className="flex items-center justify-end space-x-4">
          <button className="px-6 py-3 text-sm font-medium text-white border border-yellow-500 rounded-full hover:bg-yellow-500">Read More</button>
          <button className="flex items-center px-6 py-3 text-sm font-medium text-white border border-yellow-500 rounded-full hover:bg-yellow-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 22v-20l18 10-18 10z" />
            </svg>
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
}
