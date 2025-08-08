import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/image.png" 
              alt="Spongein 2.0" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-secondary-400 transition-colors">
              About
            </Link>
            <Link to="#features" className="text-gray-300 hover:text-secondary-400 transition-colors">
              Features
            </Link>
            <Link to="#pricing" className="text-gray-300 hover:text-secondary-400 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-300 hover:text-secondary-400 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/onboarding" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-secondary-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-secondary-400 transition-colors">
                About
              </Link>
              <Link to="#features" className="text-gray-300 hover:text-secondary-400 transition-colors">
                Features
              </Link>
              <Link to="#pricing" className="text-gray-300 hover:text-secondary-400 transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-dark-700">
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  to="/onboarding" 
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;