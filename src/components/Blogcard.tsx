import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaEye, FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export default function BlogCard() {
  const blogPosts = [
    {
      date: "14 Feb",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: "/image95.png",
      alt: "Tacos",
    },
    {
      date: "15 Feb",
      title: "Exploring the Benefits of Mindful Eating",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: "/image96.png",
      alt: "Pizza",
    },
    {
      date: "16 Feb",
      title: "How to Stay Productive While Working From Home",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: "/image97.png",
      alt: "Tacos",
    },
    {
      date: "17 Feb",
      title: "Understanding the Impact of Digital Marketing",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: "/image98.png",
      alt: "Pizza",
    },
  ];

  const recentPosts = [
    { image: "/image94.png", date: "June 22, 2020", description: "Lorem ipsum dolor sit amet, sed do." },
    { image: "/image94.png", date: "June 23, 2020", description: "Duis aute irure dolor in reprehenderit." },
    { image: "/image94.png", date: "June 24, 2020", description: "Excepteur sint occaecat cupidatat non proident." },
    { image: "/image94.png", date: "June 25, 2020", description: "Ut enim ad minim veniam, quis nostrud exercitation." },
  ];

  const FilerByMenu = [
    { image: "/image94.png", date: "Chicken Fry" },
    { image: "/image94.png", date: "Burger Food" },
    { image: "/image94.png", date: "Pizza" },
    { image: "/image94.png", date: "Fresh Fruites" },
    { image: "/image94.png", date: "Vegetables" },
  ];

  const PopularTags = () => {
    const tags = [
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
    ];
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
        <div className="grid grid-cols-3 gap-4">
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
  const PhotoGallery = () => {
    const photos = [
      "/image17.png",
      "/image17.png",
      "/image17.png",
      "/image17.png",
      "/image17.png",
      "/image17.png",
    ];

    return (
      <div className=" p-4">
        <h1 className="text-xl font-bold mb-4">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
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
                <span className="text-xl text-white font-semibold"><FaEye /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden" style={{ width: "100%", height: "830px" }}>
              <Image src={post.image} alt={post.alt} width={872} height={415} className="w-full h-1/2 object-cover" />
              <div className="p-4">
                <div className="uppercase text-orange-500 text-sm font-semibold mb-2">{post.date}</div>
                <a href="#" className="block text-lg font-bold text-gray-900 hover:underline mb-2">
                  {post.title}
                </a>
                <p className="text-gray-700 mb-3">{post.description}</p>
                <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Sidebar */}
        <div className="space-y-4" style={{ width: "300px" }}>
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
          <div className="text-center border border-gray-300 p-4 rounded-lg bg-white">
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
              <div key={index} className="flex items-center mb-3 border-b border-gray-200 pb-3">
                <Image src={post.image} alt="Post" width={50} height={50} className="rounded-md" />
                <div className="ml-3">
                  <h5 className="text-sm font-semibold text-gray-900">{post.date}</h5>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Filter by Menu */}
          <div>
            <h4 className="text-lg font-bold mb-3">Filter By Menu</h4>
            {FilerByMenu.map((post, index) => (
              <div key={index} className="flex items-center mb-3 border-b border-gray-200 pb-3">
                <Image src={post.image} alt="Post" width={50} height={50} className="rounded-md" />
                <div className="ml-3">
                  <h5 className="text-sm font-semibold text-gray-900">{post.date}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* Popular Tags */}
          <PopularTags />

          {/* Photo Gallery */}
          <PhotoGallery />
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
        </div>
      </div>
    </div>
  );
}
