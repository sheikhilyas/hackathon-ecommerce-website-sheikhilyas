import React from 'react';
import Link from 'next/link';

const Checkout: React.FC = () => {
  return (
    <main
      className='w-full bg-[url("/image24.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'
      role="main"
      aria-label="Checkout Page"
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          {/* Title */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Checkout Page
          </h1>
          {/* Breadcrumb */}
          <div className='text-sm sm:text-base md:text-lg flex flex-wrap gap-2 text-center justify-center'>
            <Link
              href="/"
              className='text-white hover:text-[#FF9F0D] transition-colors duration-300'
              aria-label="Go to Home"
            >
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link
              href="/menu"
              className='text-[#FF9F0D] hover:underline'
              aria-label="Go to Checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
