import React, { useState } from 'react';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <Link 
          to={`/product/${product.id}`}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Quick View
        </Link>
      </div>
      
      <div className="mt-4 space-y-4">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-medium hover:text-gray-600 transition duration-300">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600">${product.price}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Size:</span>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Color:</span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-black text-white py-2 px-4 flex items-center justify-center space-x-2 hover:bg-gray-800 transition duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 px-4 flex items-center justify-center space-x-2 hover:bg-green-700 transition duration-300">
            <CreditCard className="w-4 h-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;