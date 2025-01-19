import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="bg-white text-black w-full  max-w-sm mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-700 rounded-md overflow-hidden max-w-md mx-auto mt-4 mb-6">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="flex-grow p-2 bg-white text-gray-300 placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-yellow-500 p-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </button>
      </div>
      {/* Author Info */}
      <div className="text-center border border-gray-700 p-6 rounded-lg bg-white text-black max-w-xs mx-auto">
        <div className="mb-4">
          <Image
            src="/image67.png"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>
        <h3 className="text-xl font-semibold">Prince Miyako</h3>
        <p className="text-sm text-gray-400">Blogger/Photographer</p>
        <div className="flex justify-center items-center my-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-400 ml-2">(1 Review)</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          distinctio, odio eligendi suscipit reprehenderit atque.
        </p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
      {/* Recent Posts */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Recent Posts</h4>
        {[
          { image: "/image94.png", date: "June 22, 2020", description: "Lorem ipsum dolor sit amet, sed do." },
          { image: "/image94.png", date: "June 23, 2020", description: "Duis aute irure dolor in reprehenderit." },
          { image: "/image94.png", date: "June 24, 2020", description: "Excepteur sint occaecat cupidatat non proident." },
          { image: "/image94.png", date: "June 25, 2020", description: "Ut enim ad minim veniam, quis nostrud exercitation." },
        ].map((post, index) => (
          <div
            key={index}
            className="flex items-center mb-4 border-b border-gray-300 pb-4"
          >
            <Image
              src={post.image}
              alt="Post"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="ml-4">
              <h5 className="text-sm font-semibold text-black">{post.date}</h5>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Filter By Menu */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Filter By Menu</h4>
        {[
          { name: "Chicken Fry", count: 26, image: "/image94.png" },
          { name: "Burger Food", count: 46, image: "/image94.png" },
          { name: "Pizza", count: 16, image: "/image94.png" },
          { name: "Fresh Fruits", count: 36, image: "/image94.png" },
          { name: "Vegetables", count: 16, image: "/image94.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4"
          >
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-md"
              />
              <p className="ml-4 text-sm font-medium text-black">{item.name}</p>
            </div>
            <span className="text-sm font-medium text-gray-500">{item.count}</span>
          </div>
        ))}
      </div>


      {/* Popular Tags */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Popular Tags</h4>
        <div className="grid grid-cols-3 gap-3">
          {[
            "Sandwich",
            "Tikka",
            "Bbq",
            "Restaurant",
            "Chicken Sharma",
            "Health",
            "Fastfood",
            "Food",
            "Pizza",
            "Burger",
            "Chicken",
          ].map((tag, index) => (
            <span
              key={index}
              className="bg-transparent border border-gray-500 text-black text-sm py-2 px-4 text-center rounded cursor-pointer hover:bg-gray-700 hover:border-yellow-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Photo Gallery */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-4">
          {[
            "/image94.png",
            "/image94.png",
            "/image94.png",
            "/image94.png",
            "/image94.png",
            "/image94.png",
          ].map((path, index) => (
            <div key={index} className="relative group">
              <Image
                src={path}
                alt={`Gallery Image ${index + 1}`}
                width={200}
                height={200}
                className="rounded-md object-cover"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-xl">👁️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Follow Us */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-4">
          {[
            { platform: "twitter", icon: "/t-2.png" },
            { platform: "youtube", icon: "/y-3.png" },
            { platform: "pinterest", icon: "/p-4.png" },
            { platform: "instagram", icon: "/i-5.png" },
            { platform: "facebook", icon: "/facebooklogo1.png" },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className={`p-3 border rounded-md ${social.platform === "pinterest"
                ? "bg-yellow-500 border-yellow-500"
                : "bg-white-800 border-gray-700 hover:bg-yellow-500"
                }`}
            >
              <img
                src={social.icon}
                alt={`${social.platform} icon`}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
