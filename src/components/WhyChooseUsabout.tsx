import Image from 'next/image';
import { MdEmojiFoodBeverage, MdOutlineSelfImprovement } from 'react-icons/md';
import { PiChefHat } from "react-icons/pi";

export default function AboutWhyChooseUs() {
  return (
    <section className="bg-white text-black py-12">
      {/* Section Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
          bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center px-4">
        <Image
          src="/image91.png"
          alt="Delicious food"
          className="rounded-lg"
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto', maxWidth: '800px' }} 
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-12 px-4">
        {/* Best Chef */}
        <div>
          <div className="flex justify-center items-center w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4">
            <PiChefHat className="text-4xl text-orange-400" />
          </div>
          <h3 className="text-xl font-bold">Best Chef</h3>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat.
          </p>
        </div>

        {/* 120 Item Food */}
        <div>
          <div className="flex justify-center items-center w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4">
            <MdEmojiFoodBeverage className="text-4xl text-orange-400" />
          </div>
          <h3 className="text-xl font-bold">120 Item Food</h3>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat.
          </p>
        </div>

        {/* Clean Environment */}
        <div>
          <div className="flex justify-center items-center w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4">
            <MdOutlineSelfImprovement className="text-4xl text-orange-400" />
          </div>
          <h3 className="text-xl font-bold">Clean Environment</h3>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat.
          </p>
        </div>
      </div>
    </section>
  );
}
