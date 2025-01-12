import Image from 'next/image';

export default function MeetOurChef () {
  const chefs = [
    { name: 'D.Estwood', title: 'Chief Chef', image: '/image20.png' },
    { name: 'D.Scoriesh', title: 'Assistant Chef', image: '/image21.png' },
    { name: 'M. William', title: 'Advertising Chef', image: '/image22.png' },
    { name: 'W.Readfroad', title: 'Chef', image: '/image23.png' },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">Chefs</span> Meet Our Chef
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div key={index} className="overflow-hidden space-x-4">
            <div className="relative w-[312px] h-[391px] mx-auto">
              <Image
                src={chef.image}
                alt={chef.name}
                width={312}
                height={391}
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{chef.name}</h3>
              <p className="text-gray-400">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-orange-500 text-white py-2 px-6 shadow-lg hover:bg-orange-600 transition">See More</button>
      </div>
    </div>
  );
}


