import { LuPizza } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { PiChefHatDuotone } from "react-icons/pi";

function StartSection() {
  return (
    <div className=" bg-black relative py-10">
      <div className="container mx-auto text-center text-white">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image25.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%', 
            opacity: 0.2,  
          }}
        ></div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Start Card 1 */}
          <div className="flex flex-col items-center space-y-4">
            <PiChefHatDuotone className="text-orange-500 text-6xl" />
            <h2 className="text-4xl font-bold">420</h2>
            <p className="text-gray-400">Professional Chefs</p>
          </div>

          {/* Start Card 2 */}
          <div className="flex flex-col items-center space-y-4">
            <GiHamburger className="text-orange-500 text-6xl" />
            <h2 className="text-4xl font-bold">320</h2>
            <p className="text-gray-400">Items Of Food</p>
          </div>

          {/* Start Card 3 */}
          <div className="flex flex-col items-center space-y-4">
            <MdOutlineRestaurantMenu className="text-orange-500 text-6xl" />
            <h2 className="text-4xl font-bold">30+</h2>
            <p className="text-gray-400">Years Of Experience</p>
          </div>

          {/* Start Card 4 */}
          <div className="flex flex-col items-center space-y-4">
            <LuPizza className="text-orange-500 text-6xl" />
            <h2 className="text-4xl font-bold">220</h2>
            <p className="text-gray-400">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
