import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Baby } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const path = location.pathname;

  const getTitle = () => {
    switch (path) {
      case '/african-girl-names':
        return 'African Girl Name Generator';
      case '/american-girl-names':
        return 'American Girl Name Generator';
      case '/french-girl-names':
        return 'French Girl Name Generator';
      case '/german-girl-names':
        return 'German Girl Name Generator';
      case '/indian-girl-names':
        return 'Indian Girl Name Generator';
      case '/japanese-girl-names':
        return 'Japanese Girl Name Generator';
      case '/russian-girl-names':
        return 'Russian Girl Name Generator';
      default:
        return 'Girl Name Generator';
    }
  };

  return (
    <header className="text-center pt-16 pb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Baby className="w-8 h-8 text-pink-500" />
        <h1 className="text-4xl font-bold text-gray-800">{getTitle()}</h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto px-4 mb-8">
        Discover the perfect name for your baby girl with our intelligent name generator.
        Create beautiful, meaningful names that will last a lifetime.
      </p>
      
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="text-pink-600 hover:text-pink-800 transition-colors">All Names</Link>
          <Link to="/african-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">African Names</Link>
          <Link to="/american-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">American Names</Link>
          <Link to="/french-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">French Names</Link>
          <Link to="/german-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">German Names</Link>
          <Link to="/indian-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">Indian Names</Link>
          <Link to="/japanese-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">Japanese Names</Link>
          <Link to="/russian-girl-names" className="text-pink-600 hover:text-pink-800 transition-colors">Russian Names</Link>
        </div>
      </nav>
    </header>
  );
}