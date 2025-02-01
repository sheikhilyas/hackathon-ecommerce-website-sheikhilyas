// import React from "react";
// import Image from "next/image";
// import { MdOutlineLunchDining, MdOutlineDinnerDining } from "react-icons/md";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { Great_Vibes } from "next/font/google";


// const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-black text-white py-16 px-6 flex justify-center items-center">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Side: Image Grid */}
//         <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
//           {/* Top Left Image */}
//           <div className="relative w-[370px] h-[300px] lg:h-[360px] row-span-2 right-20">
//             <Image
//               src="/image10.png"
//               alt="Tacos"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//           {/* Top Right Image */}
//           <div className="relative w-[250px] h-[150px] lg:h-[200px] top-40 right-2">
//             <Image
//               src="/image16.png"
//               alt="Burger"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//           {/* Bottom Left Image */}
//           <div className="relative w-[210px] h-[100px] lg:h-[200px] top-20 right-40">
//             <Image
//               src="/image60.png"
//               alt="Chicken"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//           {/* Bottom Center Image */}
//           <div className="relative w-[220px] h-[260px] lg:h-[300px] row-span-2 bottom-56 right-20">
//             <Image
//               src="/image11.png"
//               alt="Fries"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//           {/* Bottom Center Image */}
//           <div className="relative w-[180px] h-[200px] lg:h-[150px] row-span-2 bottom-56 left-16">
//             <Image
//               src="/image13.png"
//               alt="Fries"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//           {/* Bottom Center Image */}
//           <div className="relative w-[180px] h-[200px] lg:h-[150px] row-span-2 bottom-96 left-96">
//             <Image
//               src="/image71.png"
//               alt="Fries"
//               className="rounded-lg object-cover"
//               fill
//             />
//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div className="relative">
//           <div className="absolute bottom-2">
//             <h1 className={`${VibeFont.className} text-3xl sm:text-4xl text-[#FF9F0D] mb-4`}>
//               Why Choose Us
//             </h1>
//             <h2 className="text-4xl sm:text-5xl font-bold text-white leading-snug">
//               <span className="text-orange-400">Ex</span>traordinary Taste
//               <br />
//               And Experienced
//             </h2>
//             <p className="text-gray-400 mt-4 text-sm sm:text-base">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//               <br />pellentesque bibendum non dui volutpat fringilla bibendum.
//               Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum.
//               Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit
//               eu velit in consequat.
//             </p>
//             <div className="mt-6 grid grid-cols-3 gap-4 justify-center">
//               <div className="flex flex-col items-center">
//                 <div className="bg-orange-500 p-4 rounded-full">
//                   <IoFastFoodOutline className="text-2xl" />
//                 </div>
//                 <p className="mt-2 text-sm sm:text-base">Fast Food</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="bg-orange-500 p-4 rounded-full">
//                   <MdOutlineLunchDining className="text-2xl" />
//                 </div>
//                 <p className="mt-2 text-sm sm:text-base">Lunch</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="bg-orange-500 p-4 rounded-full">
//                   <MdOutlineDinnerDining className="text-2xl" />
//                 </div>
//                 <p className="mt-2 text-sm sm:text-base">Dinner</p>
//               </div>
//             </div>
//             <div className="mt-8 flex items-center justify-center bg-white w-full max-w-xs h-[90px] rounded-lg shadow-lg mx-auto lg:mx-0">
//               <div className="text-5xl font-bold text-orange-400">30+</div>
//               <p className="ml-4 text-black font-semibold text-lg">
//                 Years of <br />
//                 <span className="font-bold">Experience</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const WhyChooseUs = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Food Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {['/food1.png', '/food2.png', '/food3.png', '/food4.png'].map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={src}
                  alt={`Category ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Image
                  src="/image10.png"
                  alt="paratha"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Image
                  src="/image16.png"
                  alt="burger"
                  width={240}
                  height={200}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Image
                  src="/image60.png"
                  alt="kabab"
                  width={200}
                  height={250}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Image
                  src="/image11.png"
                  alt="burger2"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-4">
                <Image
                  src="/image13.png"
                  alt="raita"
                  width={160}
                  height={160}
                  className="rounded-xl"
                />
                <Image
                  src="/image71.png"
                  alt="last-pic"
                  width={160}
                  height={160}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <p className={`${VibeFont.className} text-[#FF9F0D] text-3xl mb-4`}>
                Why Choose us
              </p>
              <h2 className="text-white text-4xl font-bold mb-6">
                Extraordinary taste And Experience
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat 
                pretium donec id elementum.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6 justify-center">
              {[
                { icon: "/Hamburger.png", title: "Fast Food" },
                { icon: "/Cookie.png", title: "Lunch" },
                { icon: "/Wine.png", title: "Dinner" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#FF9F0D] rounded-xl p-6 mb-4 transform hover:scale-105 transition-transform duration-300">
                    <Image src={item.icon} alt={item.title} width={56} height={56} />
                  </div>
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="bg-white rounded-xl p-6 flex items-center justify-center gap-8 max-w-md">
              <span className="text-[#FF9F0D] text-5xl font-bold">30+</span>
              <div>
                <p className="text-gray-600">Years of</p>
                <p className="text-black font-bold text-xl">Experience</p>
              </div>
            </div>
          </div>
        </div>
        </div>

</div>
        
  );
};

export default WhyChooseUs;