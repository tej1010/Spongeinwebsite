import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/image.png" 
                alt="Spongein 2.0" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming education for Grade 8-12 CAPS students with AI-powered learning, 
              gamified progress tracking, and comprehensive dashboards for students, parents, and schools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#features" className="text-gray-400 hover:text-secondary-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="text-gray-400 hover:text-secondary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-secondary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-secondary-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-secondary-400" />
                <span className="text-gray-400">support@spongein.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary-400" />
                <span className="text-gray-400">+27 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-secondary-400" />
                <span className="text-gray-400">Cape Town, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Educational Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;