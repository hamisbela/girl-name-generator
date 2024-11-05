import React from 'react';

interface NationalitySeoContentProps {
  nationality: string;
}

const nationalityContent: { [key: string]: { title: string; description: string; facts: string[]; usage: string[] } } = {
  african: {
    title: "African Girl Names - Traditional & Modern African Baby Names",
    description: "African names often carry deep cultural meanings and family traditions. Many African names are inspired by circumstances of birth, hopes for the child's future, or important family events.",
    facts: [
      "Many African names have spiritual significance",
      "Names often reflect the day of birth or birth order",
      "Different African regions have distinct naming traditions",
      "Modern African names often blend traditional and contemporary elements"
    ],
    usage: [
      "Select 'African' from the nationality dropdown",
      "Optionally filter by first letter or name length",
      "Click 'Generate Names' to see authentic African girl names",
      "Each name is carefully selected from various African cultures",
      "Generate new sets of names until you find the perfect one"
    ]
  },
  american: {
    title: "American Girl Names - Popular & Unique American Baby Names",
    description: "American names reflect the country's diverse cultural heritage, combining traditional elements with modern trends. These names often represent a blend of different cultural influences.",
    facts: [
      "American names often follow current pop culture trends",
      "Many American names have European origins",
      "Unique spellings are increasingly popular",
      "Names often reflect regional preferences"
    ],
    usage: [
      "Choose 'American' from the nationality options",
      "Use filters to narrow down your preferences",
      "Click generate to see popular American girl names",
      "Each name reflects modern American naming trends",
      "Keep generating until you find your perfect match"
    ]
  },
  french: {
    title: "French Girl Names - Beautiful & Classic French Baby Names",
    description: "French names are known for their elegance and sophistication. These names often have rich historical backgrounds and maintain their timeless appeal across generations.",
    facts: [
      "French names often have Latin or Greek origins",
      "Many French names are associated with saints",
      "Accent marks are important in French names",
      "French naming traditions often honor family members"
    ],
    usage: [
      "Select 'French' from the nationality menu",
      "Apply optional filters for specific preferences",
      "Generate to discover elegant French girl names",
      "Each suggestion maintains authentic French style",
      "Continue generating to explore more options"
    ]
  },
  german: {
    title: "German Girl Names - Traditional & Modern German Baby Names",
    description: "German names combine strength with beauty, often drawing from historical and mythological sources. These names frequently have clear meanings and strong cultural connections.",
    facts: [
      "German names often have nature-related meanings",
      "Many German names have royal connections",
      "Compound names are common in German culture",
      "German names often reflect strength and character"
    ],
    usage: [
      "Choose 'German' from the nationality selector",
      "Use filters to refine your search",
      "Generate to see authentic German girl names",
      "Each name reflects German naming traditions",
      "Generate multiple times to explore more options"
    ]
  },
  indian: {
    title: "Indian Girl Names - Beautiful & Meaningful Indian Baby Names",
    description: "Indian names are deeply rooted in culture and spirituality. These names often come from Sanskrit origins and carry profound meanings related to divine attributes or natural elements.",
    facts: [
      "Indian names often have Sanskrit origins",
      "Names frequently honor Hindu deities",
      "Regional variations influence naming traditions",
      "Many names are associated with positive attributes"
    ],
    usage: [
      "Select 'Indian' from the nationality options",
      "Apply filters for specific preferences",
      "Generate to discover meaningful Indian names",
      "Each name carries cultural significance",
      "Continue generating to explore more choices"
    ]
  },
  japanese: {
    title: "Japanese Girl Names - Traditional & Modern Japanese Baby Names",
    description: "Japanese names are chosen with great care, often combining beautiful sounds with meaningful kanji characters. These names frequently reflect natural elements and positive attributes.",
    facts: [
      "Japanese names often use specific kanji combinations",
      "Many names are inspired by nature elements",
      "Seasonal references are common in names",
      "Modern Japanese names often blend traditional and contemporary elements"
    ],
    usage: [
      "Choose 'Japanese' from the nationality menu",
      "Use filters to narrow your selection",
      "Generate to see authentic Japanese girl names",
      "Each name follows Japanese naming conventions",
      "Generate new sets to explore more options"
    ]
  },
  russian: {
    title: "Russian Girl Names - Classic & Beautiful Russian Baby Names",
    description: "Russian names carry a rich cultural heritage, often derived from historical and religious sources. These names frequently have diminutive forms used to show affection.",
    facts: [
      "Russian names often have Greek or Slavic origins",
      "Many names are associated with Orthodox saints",
      "Names typically have multiple diminutive forms",
      "Patronymic middle names are traditional"
    ],
    usage: [
      "Select 'Russian' from the nationality dropdown",
      "Apply optional filters for preferences",
      "Generate to discover Russian girl names",
      "Each name reflects Russian naming traditions",
      "Keep generating to find your perfect name"
    ]
  }
};

export function NationalitySeoContent({ nationality }: NationalitySeoContentProps) {
  const content = nationalityContent[nationality];

  return (
    <section className="prose lg:prose-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.title}</h2>
      <p className="text-gray-600 mb-6">{content.description}</p>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        How to Use Our {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Girl Name Generator
      </h3>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {content.usage.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        About {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Girl Names
      </h3>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {content.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        How to Choose a {nationality.charAt(0).toUpperCase() + nationality.slice(1)} Name
      </h3>
      <p className="text-gray-600 mb-6">
        When selecting a {nationality} name for your baby girl, consider the following:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Research the meaning and cultural significance</li>
        <li>Consider the pronunciation in your home country</li>
        <li>Think about potential nicknames</li>
        <li>Reflect on family traditions and heritage</li>
      </ul>
    </section>
  );
}