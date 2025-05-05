import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../data/products';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No products found</h2>
        <p className="text-gray-600">Try a different category or search term.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;