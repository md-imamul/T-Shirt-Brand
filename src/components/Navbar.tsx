import React from 'react';
import { ShoppingBag, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-wider">T-SHIRT HAVEN</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-black">Shop</Link>
            <Link to="/" className="text-gray-600 hover:text-black">Collection</Link>
            <Link to="/" className="text-gray-600 hover:text-black">About</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;