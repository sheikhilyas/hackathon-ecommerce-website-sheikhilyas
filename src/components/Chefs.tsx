import React from "react";
import Image from "next/image"; 

const chefs = [
  { name: "Tahmina Ruml", role: "Chef", image: "/image72.png" },
  { name: "Jorina Begum", role: "Chef", image: "/image73.png" },
  { name: "M. Mohammad", role: "Chef", image: "/image74.png" },
  { name: "Munna Kathy", role: "Chef", image: "/image75.png" },
  { name: "Tahmina Ruml", role: "Chef", image: "/image76.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/image77.png" },
  { name: "Motin Molladsf", role: "Chef", image: "/image78.png" },
  { name: "William Ruml", role: "Chef", image: "/image79.png" },
  { name: "Kets William Roy", role: "Chef", image: "/image80.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/image81.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/image82.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/image83.png" },
];

export default function ChefGrid() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="text-center bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-gray-700"
          >
            <Image
              src={chef.image}
              alt={chef.name}
              width={312} 
              height={379} 
              className="object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-bold">{chef.name}</h3>
            <p className="text-sm text-gray-400">{chef.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
