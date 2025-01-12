"use client";
import Image from 'next/image';

export default function PartnersClients() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase tracking-widest text-sm">
          Partners & Clients
        </p>
        <h2 className="text-2xl font-bold text-black">We work with the best people</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/image40.png"
            alt="Restaurant"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image39.png"
            alt="Bakery"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image38.png"
            alt="Coffee Shop"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image37.png"
            alt="Wolf Coffee"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image36.png"
            alt="Bistro"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/image35.png"
            alt="Bakery Cupcake"
            width={96} 
            height={96} 
            className="h-24"
          />
        </div>
      </div>
    </section>
  );
}
