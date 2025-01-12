import Image from 'next/image';
import profilePic from '/public/profile.jpg';

export default function Testimonial() {
  return (
    <div className="bg-black text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-yellow-400">Testimonials</h2>
        <p className="text-3xl mt-4">What our client are saying</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            <Image src="/image27.png" alt="Profile" width={80} height={80} />

          </div>
        </div>
        <p className="text-yellow-500 text-5xl text-center mt-6 mb-6">&#x201C;</p>
        <p className="text-center text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="text-center mt-6">
          <div className="flex justify-center mb-2">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.848L19.335 24 12 20.4 4.665 24 6 15.598 0 9.75l8.332-1.595z" />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-gray-400"
            >
              <path
                fill="currentColor"
                d="M12 .587l3.668 7.568L24 9.75l-6 5.848L19.335 24 12 20.4 4.665 24 6 15.598 0 9.75l8.332-1.595z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold">Alamin Hasan</h4>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
