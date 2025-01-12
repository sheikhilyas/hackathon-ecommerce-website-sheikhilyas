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
    <div className="bg-white text-black py-10"> 
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/image14.png"
            alt="Delicious starter menu items including Alder Grilled Chinook Salmon and more"
            width={448} 
            height={500} 
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Menu Section */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold mb-6">Starter Menu</h2>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-4 flex justify-between items-start"
              >
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      item.highlight ? "text-black-500" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                  <span className="text-gray-500">{item.calories}</span>
                </div>
                <div className="text-yellow-500 text-xl font-bold">
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


