import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;