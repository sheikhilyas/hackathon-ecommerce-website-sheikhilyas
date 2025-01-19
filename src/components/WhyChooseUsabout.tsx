import Image from 'next/image';

export default function AboutWhyChooseUs() {
  return (
    <section className="bg-black text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
          bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/image91.png" 
          alt="Delicious food"
          className="rounded-lg"
          width={800}
          height={400}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
        <div>
          <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            <i className="text-xl">🎓</i>
          </div>
          <h3 className="text-xl font-bold">Best Chef</h3>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat.
          </p>
        </div>

        <div>
          <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            <i className="text-xl">☕</i>
          </div>
          <h3 className="text-xl font-bold">120 Item Food</h3>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
            bibendum non dui volutpat.
          </p>
        </div>

        <div>
          <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            <i className="text-xl">🧼</i>
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
