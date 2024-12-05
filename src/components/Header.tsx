import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Gharchala Al-Ishan Foundation</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#goals" className="hover:underline">Goals</a></li>
            <li><a href="#objectives" className="hover:underline">Objectives</a></li>
            <li><a href="#action-plans" className="hover:underline">Action Plans</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;