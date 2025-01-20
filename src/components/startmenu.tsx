import Image from 'next/image'; 

export default function StartMenu() {
  const menuItems = [
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      title: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
      highlight: true,
    },
    {
      title: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];

  return (
    <div className="bg-white text-black py-10 flex justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-5xl w-full space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/image14.png"
            alt="Delicious starter menu items including Alder Grilled Chinook Salmon and more"
            width={448}
            height={626}
            className="w-[444px] h-[550px] shadow-lg"
          />
        </div>

        {/* Right Menu Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Starter Menu</h2>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-4 flex justify-between items-start"
              >
                <div>
                  <h3
                    className={`text-xl font-bold hover:text-yellow-500 transition duration-300 ${
                      item.title === "Berries and creme tart" ? "text-black" : item.highlight ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                  <span className="text-gray-500">{item.calories}</span>
                </div>
                <div className="text-gray-500 text-xl font-bold">
                  {item.price}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
