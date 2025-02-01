'use client'; 
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const Testimonialaboutus = [
    {
      id: 1,
      name: 'Alamin Hasan',
      role: 'Food Specialist',
      image: '/profile1.png',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      rating: 4,
    },
    {
      id: 2,
      name: 'Sarah Lee',
      role: 'Marketing Expert',
      image: '/profile2.png',
      quote: 'Donec ut lorem eget arcu fringilla ultrices sit amet...',
      rating: 5,
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Web Developer',
      image: '/profile3.png',
      quote: 'Pellentesque habitant morbi tristique senectus...',
      rating: 3,
    },
  ];
  
export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % Testimonialaboutus.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br bg-white text-black py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16">
          <h2
            className={`${VibeFont.className} text-amber-500 text-2xl sm:text-3xl md:text-4xl mb-4 text-left`}
          >
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left">
            What our clients are saying
          </h3>
        </div>

        <div className="bg-white/95 backdrop-blur-sm text-black p-8 md:p-12 rounded-2xl shadow-2xl relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src={Testimonialaboutus[currentTestimonial].image}
                alt={Testimonialaboutus[currentTestimonial].name}
                fill
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="text-4xl sm:text-6xl md:text-7xl text-amber-500 opacity-30 absolute top-8 left-8">
            &quot;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="pt-8"
            >
              <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center mb-8">
                {Testimonialaboutus[currentTestimonial].quote}
              </p>

              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 mx-1 ${
                      i < Testimonialaboutus[currentTestimonial].rating
                        ? 'text-amber-500'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              <div className="text-center">
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
                  {Testimonialaboutus[currentTestimonial].name}
                </h4>
                <p className="text-gray-500 text-sm sm:text-base">
                  {Testimonialaboutus[currentTestimonial].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-amber-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
      </div>
    </section>
  );
}
