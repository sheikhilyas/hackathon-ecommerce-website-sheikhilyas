import React from "react";

const DigitalDetox = () => {
  return (
    <div className="bg-white text-gray-900 w-full flex justify-start">
      {/* Content Section */}
      <div className="w-[80%] max-w-[600px] px-6 py-8">
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
            className="w-[424px] h-auto object-cover"
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

        {/* Comments Section (Now placed below the form) */}
        <div className="w-[80%] max-w-[600px] px-6 py-8 bg-gray-50 mt-8">
          <h2 className="text-xl font-bold mb-6">Comments - 03</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/imageprofil1.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-800">MD Gulli Khan</p>
                    <p className="text-sm text-gray-500">June 22, 2022</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sed metus, fermentum nec imperdiet sed, pulvinar et sem.
                </p>
              </div>
            ))}
             {/* Post a Comment Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Post a comment</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <textarea
              placeholder="Write a comment"
              rows={4}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Post a comment
            </button>
          </form>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDetox;
