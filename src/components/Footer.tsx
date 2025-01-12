import React from 'react';
import Image from 'next/image';

export default function Footer () {
  const recentPosts = [
    {
      title: 'Is fastfood good for your body?',
      date: 'February 28, 2022',
      imgSrc: '/image15.png',
    },
    {
      title: 'Change your food habit With organic food',
      date: 'February 28, 2022',
      imgSrc: '/image15.png',
    },
    {
      title: 'Do you like fastfood for your life?',
      date: 'February 28, 2022',
      imgSrc: '/image15.png',
    },
  ];

  const socialIcons = [
    { name: 'Facebook', href: '#', src: '/facebook-icon.png.png' },
    { name: 'Twitter', href: '#', src: '/twitter-icon.png.png' },
    { name: 'Instagram', href: '#', src: '/instagram-icon.png.png' },
    { name: 'YouTube', href: '#', src: '/youtube-icon.png.png' },
    { name: 'Pinterest', href: '#', src: '/pinterest-icon.png.png' },
  ];

  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About Us Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Us</h2>
          <p className="mb-4">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and
            professional chauffeured car service in major cities across the world.
          </p>
          <p className="text-orange-500 font-bold">Opening Hours</p>
          <p>Mon - Sat (8:00 - 6:00)</p>
          <p>Sunday - Closed</p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
            <li><a href="#" className="hover:text-white">Partners</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Help?</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Reporting</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Support Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Recent Post Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Recent Post</h2>
          <ul className="space-y-4">
            {recentPosts.map((post, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  width={48}  
                  height={48} 
                  className="object-cover rounded"
                />
                <div>
                  <a href="#" className="hover:text-white">{post.title}</a>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 by Sheikh Ilyas. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map((icon) => (
              <a href={icon.href} key={icon.name} className="hover:text-white">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={40}  
                  height={40} 
                  className="rounded-full border-2 border-white object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
