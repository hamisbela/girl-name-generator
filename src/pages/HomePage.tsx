import React, { useState } from 'react';
import { Wand2, RefreshCcw } from 'lucide-react';
import { NameFilters } from '../components/NameFilters';
import { NameGrid } from '../components/NameGrid';
import { SeoContent } from '../components/SeoContent';
import { generateNames } from '../utils/nameGenerator';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    startsWith: '',
    length: '',
    nationality: ''
  });

  const handleGenerateNames = () => {
    setLoading(true);
    setTimeout(() => {
      const newNames = generateNames(filters.startsWith, filters.length, filters.nationality);
      setNames(newNames);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <NameFilters filters={filters} onFilterChange={setFilters} />

          <button
            onClick={handleGenerateNames}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-medium shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <RefreshCcw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Generate Names
              </>
            )}
          </button>

          <NameGrid names={names} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <SeoContent />
      </div>

      <Footer />
    </>
  );
}