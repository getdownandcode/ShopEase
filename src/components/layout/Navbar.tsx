import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../data/products';

const Navbar: React.FC = () => {
  return (
    <nav className="flex md:space-x-8 md:justify-center justify-between overflow-x-auto">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `text-sm font-medium px-3 py-2 whitespace-nowrap ${
            isActive 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-300'
          }`
        }
      >
        Home
      </NavLink>
      
      {categories.map(category => (
        <NavLink 
          key={category.id}
          to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}
          className={({ isActive }) => 
            `text-sm font-medium px-3 py-2 whitespace-nowrap ${
              isActive 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-300'
            }`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;