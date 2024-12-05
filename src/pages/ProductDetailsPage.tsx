import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { products } from '../data/products';
import NotFound from '../components/NotFound';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;