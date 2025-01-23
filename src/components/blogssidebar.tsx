import Image from 'next/image'; 
import React from 'react';

const recentPosts = [
  {
    image: '/post1.png',
    date: 'Jan 21, 2025',
    description: 'Understanding React Context API',
  },
  {
    image: '/post2.png',
    date: 'Jan 18, 2025',
    description: '10 Tips for Effective Blogging',
  },
  
];

export default function Sidebar() {
  return (
    <div className="space-y-4" style={{ width: '300px' }}>
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-yellow-500 p-2 text-white" aria-label="Search">
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
      <div className="text-center border border-gray-300 p-4 rounded-lg bg-white">
        <Image
          src="/image67.png"
          alt="Author"
          width={70}
          height={70}
          className="rounded-full mx-auto mb-3"
        />
        <h3 className="text-lg font-semibold">Prince Miyako</h3>
        <p className="text-sm text-gray-400">Blogger/Photographer</p>
        <div className="flex justify-center items-center my-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-400 ml-2 text-sm">(1 Review)</span>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
        </p>
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Pinterest">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-bold mb-3">Recent Posts</h4>
        {recentPosts.map((post, index) => (
          <div
            key={index}
            className="flex items-center mb-3 border-b border-gray-200 pb-3"
          >
            <Image
              src={post.image}
              alt={`Post ${index + 1}`}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="ml-3">
              <h5 className="text-sm font-semibold text-gray-900">{post.date}</h5>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
