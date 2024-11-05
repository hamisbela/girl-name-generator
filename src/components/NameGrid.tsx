import React from 'react';
import { Heart } from 'lucide-react';

interface NameGridProps {
  names: string[];
}

export function NameGrid({ names }: NameGridProps) {
  if (names.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        Click the generate button to see name suggestions
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {names.map((name, index) => (
        <div
          key={index}
          className="bg-pink-50 rounded-lg p-4 text-center hover:bg-pink-100 transition-colors"
        >
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-lg font-medium text-gray-800">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}