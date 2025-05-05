import React from 'react';
import ProductList from '../components/products/ProductList';
import CategoryMenu from '../components/products/CategoryMenu';
import { products } from '../data/products';

const Home: React.FC = () => {
  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-claret text-white py-20 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-pulse"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight" style={{ textShadow: '2px 2px 8px #231123' }}>
            Shop Bold. Shop Unique.
          </h1>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto mb-10 font-semibold text-white/90">
            Discover exclusive deals and premium products at unbeatable prices. Elevate your shopping experience with us!
          </p>
          <div className="flex justify-center">
            <a 
              href="#featured"
              className="bg-darkpurple text-claret px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-claret hover:text-white border-2 border-claret transition-all duration-300"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="py-8 bg-darkpurple">
        <CategoryMenu />
      </div>
      
      {/* Featured products section */}
      <div id="featured" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Discover our handpicked selection of premium products</p>
          <ProductList products={featuredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;