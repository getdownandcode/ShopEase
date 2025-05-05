import React, { useState } from 'react';
import { Star, ShoppingCart, Info } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderRating(product.rating)}
          </div>
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-claret font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</span>
          
          <button 
            onClick={handleAddToCart}
            className="bg-claret text-white p-2 rounded-full hover:bg-darkpurple hover:text-claret transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-lg font-semibold text-white mb-2 text-center">{product.name}</h3>
        <p className="text-sm text-gray-200 mb-4 text-center line-clamp-3">{product.description}</p>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleAddToCart}
            className="bg-claret text-white px-4 py-2 rounded-md hover:bg-darkpurple hover:text-claret transition-colors flex items-center"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;