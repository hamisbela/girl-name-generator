interface NameDatabase {
  [key: string]: string[];
}

const NAMES_BY_NATIONALITY: NameDatabase = {
  african: [
    'Amara', 'Zuri', 'Nia', 'Imani', 'Aisha', 'Chioma', 'Folami', 'Kesi',
    'Makena', 'Nyota', 'Safiya', 'Talia', 'Zola', 'Abena', 'Dalila',
    'Eshe', 'Fola', 'Hasina', 'Jamila', 'Kioni'
  ],
  american: [
    'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia',
    'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Avery',
    'Ella', 'Scarlett', 'Grace', 'Victoria', 'Riley'
  ],
  french: [
    'Amélie', 'Camille', 'Céline', 'Claire', 'Élise', 'Fleur', 'Gabrielle', 'Inès',
    'Joséphine', 'Louise', 'Manon', 'Margot', 'Marie', 'Noémie', 'Odette',
    'Sophie', 'Sylvie', 'Thérèse', 'Valentine', 'Violette'
  ],
  german: [
    'Ada', 'Annika', 'Clara', 'Elena', 'Emilia', 'Franziska', 'Greta', 'Hannah',
    'Ida', 'Johanna', 'Katharina', 'Lena', 'Luisa', 'Marta', 'Nina',
    'Paula', 'Sophie', 'Theresa', 'Vera', 'Wilhelmina'
  ],
  indian: [
    'Aanya', 'Diya', 'Kavya', 'Khushi', 'Kiara', 'Maya', 'Myra', 'Nisha',
    'Priya', 'Riya', 'Saanvi', 'Sanya', 'Sara', 'Tara', 'Vanya',
    'Zara', 'Aisha', 'Anaya', 'Aria', 'Isha'
  ],
  japanese: [
    'Akiko', 'Emi', 'Hana', 'Haruka', 'Hikari', 'Kaori', 'Keiko', 'Mai',
    'Mika', 'Natsuki', 'Rin', 'Sakura', 'Suki', 'Yuki', 'Yumi',
    'Aiko', 'Emiko', 'Hanako', 'Kumiko', 'Miyuki'
  ],
  russian: [
    'Anastasia', 'Anna', 'Daria', 'Ekaterina', 'Elena', 'Galina', 'Irina', 'Katya',
    'Marina', 'Natasha', 'Olga', 'Polina', 'Sofia', 'Svetlana', 'Tatiana',
    'Valentina', 'Vera', 'Victoria', 'Yelena', 'Zoya'
  ]
};

const ALL_NAMES = Object.values(NAMES_BY_NATIONALITY).flat();

export function generateNames(startsWith: string = '', length: string = '', nationality: string = ''): string[] {
  let namePool = nationality ? NAMES_BY_NATIONALITY[nationality] || ALL_NAMES : ALL_NAMES;
  
  if (startsWith) {
    namePool = namePool.filter(name => 
      name.toLowerCase().startsWith(startsWith.toLowerCase())
    );
  }
  
  if (length) {
    const nameLength = parseInt(length);
    namePool = namePool.filter(name => name.length === nameLength);
  }
  
  // Shuffle and get 6 names
  const shuffled = namePool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}