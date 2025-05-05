import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const { totalPrice, totalItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  
  const handleCheckout = () => {
    setShowModal(true);
    
    // Clear cart after 3 seconds to simulate order processing
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-4 sticky top-24">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${(totalPrice * 0.08).toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span>${(totalPrice + (totalPrice * 0.08)).toFixed(2)}</span>
        </div>
      </div>
      
      <button
        onClick={handleCheckout}
        disabled={totalItems === 0}
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md text-center relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;