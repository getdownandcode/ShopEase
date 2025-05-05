import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User, LogOut, Home } from 'lucide-react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">ShopEase</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            {/* Cart icon with counter */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User account */}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">
                  {currentUser.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-sm text-gray-700 hover:text-indigo-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-gray-700 hover:text-indigo-600">
                <User className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden border-t">
        <div className="container mx-auto px-4 py-2">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;