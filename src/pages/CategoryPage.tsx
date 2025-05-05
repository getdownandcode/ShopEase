import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import { products, categories } from '../data/products';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Find the category and filter products
  const category = useMemo(() => {
    if (!categoryName) return null;
    return categories.find(cat => 
      cat.name.toLowerCase() === decodeURIComponent(categoryName)
    );
  }, [categoryName]);
  
  const filteredProducts = useMemo(() => {
    if (!category) return [];
    return products.filter(product => 
      product.category.toLowerCase() === category.name.toLowerCase()
    );
  }, [category]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Category header */}
      <div 
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(124, 58, 237, 0.8)), url(${category.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our wide range of {category.name.toLowerCase()} products
          </p>
        </div>
      </div>

      {/* Products section */}
      <ProductList 
        products={filteredProducts} 
        title={`${category.name} (${filteredProducts.length} products)`} 
      />
    </div>
  );
};

export default CategoryPage;