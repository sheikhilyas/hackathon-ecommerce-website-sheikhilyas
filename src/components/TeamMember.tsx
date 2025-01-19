import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const TeamMember = () => {
  return (
    <section className="bg-orange-400 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Team Member</h2>
          <p className="text-lg text-white mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-64"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  {member.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                    >
                      <social.icon className="w-4 h-4 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamData = [
  {
    name: 'Mark Henry',
    role: 'Owner',
    image: '/image74.png',
    social: [
      { icon: FaFacebook, link: 'https://facebook.com' },
      { icon: FaTwitter, link: 'https://twitter.com' },
      { icon: FaYoutube, link: 'https://youtube.com' },
      { icon: FaPinterest, link: 'https://pinterest.com' },
    ],
  },
  {
    name: 'Lucky Helen',
    role: 'Chef',
    image: '/image74.png',
    social: [
      { icon: FaFacebook, link: 'https://facebook.com' },
      { icon: FaTwitter, link: 'https://twitter.com' },
      { icon: FaYoutube, link: 'https://youtube.com' },
      { icon: FaPinterest, link: 'https://pinterest.com' },
    ],
  },
  {
    name: 'Moon Henry',
    role: 'Founder',
    image: '/image74.png',
    social: [
      { icon: FaFacebook, link: 'https://facebook.com' },
      { icon: FaTwitter, link: 'https://twitter.com' },
      { icon: FaYoutube, link: 'https://youtube.com' },
      { icon: FaPinterest, link: 'https://pinterest.com' },
    ],
  },
  {
    name: 'Tom Monrow',
    role: 'Specialist',
    image: '/image74.png',
    social: [
      { icon: FaFacebook, link: 'https://facebook.com' },
      { icon: FaTwitter, link: 'https://twitter.com' },
      { icon: FaYoutube, link: 'https://youtube.com' },
      { icon: FaPinterest, link: 'https://pinterest.com' },
    ],
  },
];

export default TeamMember;
