import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="w-full max-w-xs bg-white text-black p-4">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="w-full p-2 rounded bg-gray-800 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Profile Section */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <Image
            src="/image67.png" // Make sure this file exists in the public folder
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-700"
          />
        </div>
        <h3 className="text-lg font-bold">Prince Miyako</h3>
        <p className="text-sm">Blogger/Photographer</p>
        <p className="text-sm text-yellow-400">★★★★★ (1 Review)</p>
        <p className="text-xs text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dignissimos.
        </p>
        <div className="flex justify-center gap-2 mt-3">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mb-6">
        <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Recent Posts</h3>
        <ul>
          {[1, 2, 3, 4].map((index) => (
            <li key={index} className="flex items-center gap-3 mb-4">
              <Image
                src={`/image66${index}.png`} // Ensure files like image661.png, image662.png exist in public folder
                alt={`Post ${index}`}
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <h4 className="text-sm font-bold">Post {index}</h4>
                <p className="text-xs text-gray-400">June 22, 2020</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter Menu */}
      <div className="mb-6">
        <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Filter By Menu</h3>
        <ul>
          {[
            { name: 'Chicken Fry', count: 23 },
            { name: 'Burger Food', count: 48 },
            { name: 'Pizza', count: 16 },
            { name: 'Fresh Fruits', count: 36 },
            { name: 'Vegetables', count: 18 },
          ].map((item, index) => (
            <li key={index} className="flex justify-between text-sm mb-2">
              <span>{item.name}</span>
              <span className="text-gray-400">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="mb-6">
        <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Sandwich', 'Tikka', 'Blog', 'Restaurant', 'Health', 'Fastfood', 'Food'].map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="mb-6">
        <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, index) => (
            <Image
              key={index}
              src={`/gallery${index + 1}.jpg`} // Ensure files like gallery1.jpg, gallery2.jpg exist in public folder
              alt={`Gallery Image ${index + 1}`}
              width={70}
              height={70}
              className="rounded"
            />
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-6">
        {[{ icon: 'fab fa-twitter', link: '#' }, { icon: 'fab fa-youtube', link: '#' }, { icon: 'fab fa-pinterest', link: '#' }, { icon: 'fab fa-instagram', link: '#' }, { icon: 'fab fa-facebook', link: '#' }].map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="text-gray-400 hover:text-white text-lg"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
