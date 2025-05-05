import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ShopEase</h3>
            <p className="text-gray-600 mb-4">
              Your one-stop destination for quality products at great prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-indigo-600">My Cart</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-indigo-600">Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="text-gray-600 hover:text-indigo-600">Electronics</Link>
              </li>
              <li>
                <Link to="/category/clothing" className="text-gray-600 hover:text-indigo-600">Clothing</Link>
              </li>
              <li>
                <Link to="/category/home-&-kitchen" className="text-gray-600 hover:text-indigo-600">Home & Kitchen</Link>
              </li>
              <li>
                <Link to="/category/books" className="text-gray-600 hover:text-indigo-600">Books</Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-gray-600 hover:text-indigo-600">Beauty</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <address className="text-gray-600 not-italic">
              <p>Email: 1ds23is015@dsce.edu.in</p>
              <p>Email: 1ds23is019@dsce.edu.in</p>
              <p className="mt-2">Dayananda Sagar College of Engineering, Bangalore</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;