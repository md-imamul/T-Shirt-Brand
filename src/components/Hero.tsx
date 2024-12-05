import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"
          alt="Luxury T-shirt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-serif mb-4">Elevate Your Everyday</h1>
          <p className="text-xl mb-8">Discover our collection of meticulously crafted premium t-shirts, where comfort meets sophistication.</p>
          <button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100 transition duration-300">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;