import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryMenu: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map(category => (
          <Link 
            key={category.id}
            to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-white font-medium text-lg p-4 w-full">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;