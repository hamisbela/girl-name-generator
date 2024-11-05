import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/african-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  African Girl Names
                </Link>
              </li>
              <li>
                <Link to="/american-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  American Girl Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">European Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/french-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  French Girl Names
                </Link>
              </li>
              <li>
                <Link to="/german-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  German Girl Names
                </Link>
              </li>
              <li>
                <Link to="/russian-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Russian Girl Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Asian Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/indian-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Indian Girl Names
                </Link>
              </li>
              <li>
                <Link to="/japanese-girl-names" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Japanese Girl Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Name Generator Tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About Our Names
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}