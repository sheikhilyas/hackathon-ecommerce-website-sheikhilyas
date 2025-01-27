import React from "react"; 
import Image from "next/image";
import { FaTwitter, FaYoutube, FaPinterest, FaFacebook, FaEye } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const PopularTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg text-center p-2 hover:bg-gray-100 cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoGallery = ({ photos }: { photos: string[] }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-4">
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl text-white font-semibold">
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPost = ({ post }: { post: { image: string; date: string; description: string } }) => {
  return (
    <div className="flex items-center mb-3 border-b border-gray-200 pb-3">
      <Image src={post.image} alt="Post" width={50} height={50} className="rounded-md" />
      <div className="ml-3">
        <h5 className="text-sm font-semibold text-gray-900">{post.date}</h5>
        <p className="text-sm text-gray-600">{post.description}</p>
      </div>
    </div>
  );
};

const FilterByMenu = ({ menuItems }: { menuItems: { image: string; date: string }[] }) => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-3">Filter By Menu</h4>
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center mb-3 border-b border-gray-200 pb-3">
          <Image src={item.image} alt="Menu" width={50} height={50} className="rounded-md" />
          <div className="ml-3">
            <h5 className="text-sm font-semibold text-gray-900">{item.date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="p-4 bg-white text-black rounded-lg">
      <h1 className="text-xl font-bold mb-4">Follow Us</h1>
      <div className="flex justify-center gap-4">
        <div className="hover:text-white bg-gray-300 p-2 rounded">
          <FaTwitter size={24} />
        </div>
        <div className="hover:text-white bg-gray-300 p-2 rounded">
          <FaYoutube size={24} />
        </div>
        <div className="hover:text-white bg-gray-300 p-2 rounded">
          <FaPinterest size={24} />
        </div>
        <div className="hover:text-white bg-gray-300 p-2 rounded">
          <AiFillInstagram size={24} />
        </div>
        <div className="hover:text-white bg-gray-300 p-2 rounded">
          <FaFacebook size={24} />
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({
  tags,
  photos,
  recentPosts,
  filterByMenu,
}: {
  tags: string[];
  photos: string[];
  recentPosts: { image: string; date: string; description: string }[];
  filterByMenu: { image: string; date: string }[];
}) => {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-yellow-500 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Author Info */}
      <div className="text-center bg-white border border-white p-4 rounded-lg">
        <Image src="/image67.png" alt="Author" width={70} height={70} className="rounded-full mx-auto mb-3" />
        <h3 className="text-lg font-semibold">Prince Miyako</h3>
        <p className="text-sm text-gray-400">Blogger/Photographer</p>
        <div className="flex justify-center items-center my-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-400 ml-2 text-sm">(1 Review)</span>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit
          reprehenderit atque.
        </p>
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-bold mb-3">Recent Posts</h4>
        {recentPosts.map((post, index) => (
          <RecentPost key={index} post={post} />
        ))}
      </div>

      {/* Filter by Menu */}
      <FilterByMenu menuItems={filterByMenu} />

      {/* Popular Tags */}
      <PopularTags tags={tags} />

      {/* Photo Gallery */}
      <PhotoGallery photos={photos} />

      {/* Social Icons */}
      <SocialIcons />
    </div>
  );
};

const DigitalDetox = () => {
  return (
    <div className="bg-white text-gray-900 w-full flex justify-center flex-col sm:flex-row">
      {/* Content Section */}
      <div className="w-full max-w-4xl px-6 py-8 flex flex-col sm:w-[80%]">
        {/* Header Section */}
        <div className="relative w-full h-[400px]">
          <img
            src="/image92.png"
            alt="Dish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metadata */}
        <div className="text-sm text-gray-500 flex items-center space-x-4">
          <span className="flex items-center">
            <span role="img" aria-label="date">📅</span> Feb 14, 2022
          </span>
          <span className="flex items-center">
            <span role="img" aria-label="comments">💬</span> 9 Comments
          </span>
          <span className="flex items-center">
            <span role="img" aria-label="author">👤</span> Admin
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-4 mb-6 leading-tight">
          10 Reasons To Do A Digital Detox Challenge
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 leading-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          lacus nisi. Vestibulum ac sapien purus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        {/* Blockquote */}
        <blockquote className="bg-orange-100 border-l-4 border-orange-500 p-4 my-6">
          <p className="text-orange-800 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </blockquote>

        {/* Paragraph */}
        <p className="text-gray-700 leading-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula augue eu neque ornare facilisis. Aenean at tortor nec quam
          feugiat tempus.
        </p>

        {/* Secondary Image */}
        <div className="mt-6">
          <img
            src="/image93.png"
            alt="Dish"
            className="w-full sm:w-[424px] h-auto object-cover"
          />
        </div>

        {/* Final Paragraph */}
        <p className="text-gray-700 leading-7 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          ultrices nisl. Quisque vitae lorem a urna.
        </p>

        {/* Tags */}
        <div className="flex items-center space-x-4 mt-8">
          <span className="text-gray-600 font-medium">Tags:</span>
          <div className="flex space-x-2">
            {["Restaurant", "Dinner", "Pizza", "Yummy"].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="font-bold text-2xl mb-4">Comments</h2>

          {/* Comment */}
          <div className="border-b py-3 flex">
            <img
              src="/image69.png"
              alt="User"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-lg text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">January 15, 2025</p>
              <p className="mt-2 text-gray-700">Great post! I love these ideas.</p>
            </div>
          </div>

          {/* Add a Comment */}
          <div className="mt-8">
            <textarea
              rows={4}
              className="w-full p-4 border border-gray-300 rounded-md"
              placeholder="Add a comment..."
            />
            <button
              className="bg-yellow-500 py-2 px-4 mt-4 text-white rounded-md"
              type="submit"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full sm:w-[20%] bg-white px-4 py-8 sm:mt-0 mt-8">
        <Sidebar
          tags={["Health", "Wellness", "Digital Detox", "Mindfulness"]}
          photos={["/image1.png", "/image2.png", "/image3.png", "/image4.png"]}
          recentPosts={[
            {
              image: "/image2.png",
              date: "January 14, 2025",
              description: "How to Unplug for a Week",
            },
            {
              image: "/image3.png",
              date: "December 30, 2024",
              description: "The Benefits of Nature Walks",
            },
          ]}
          filterByMenu={[
            {
              image: "/image4.png",
              date: "January 2025",
            },
            {
              image: "/image5.png",
              date: "February 2025",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DigitalDetox;
