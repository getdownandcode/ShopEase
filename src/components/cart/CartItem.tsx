import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../data/products';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b">
      {/* Product image */}
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product info */}
      <div className="ml-4 flex-grow">
        <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-1">Category: {item.category}</p>
        <p className="text-claret font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center border rounded-md overflow-hidden">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-4 py-1">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      {/* Item total and remove button */}
      <div className="ml-6 flex flex-col items-end">
        <span className="text-base font-medium text-claret">
          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price * item.quantity)}
        </span>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 mt-1 flex items-center text-sm"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;