import React from 'react';
import CartItem from '../components/cart/CartItem';
import Checkout from '../components/cart/Checkout';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link 
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Your Shopping Cart</h1>
      <p className="text-gray-600 mb-6">{totalItems} items in your cart</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-6">
            <Link 
              to="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order summary and checkout */}
        <div className="lg:col-span-1">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default CartPage;