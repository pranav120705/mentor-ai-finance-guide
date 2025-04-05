
import React from 'react';
import LiteracyCard from './LiteracyCard';
import { literacyCards } from '@/data/literacyData';
import { BookOpen } from 'lucide-react';

const LiteracyPanel: React.FC = () => {
  const handleCardClick = (id: string) => {
    console.log(`Opening literacy card ${id}`);
    // This would open the full content of the card
  };

  const beginner = literacyCards.filter(card => card.level === 'beginner');
  const intermediate = literacyCards.filter(card => card.level === 'intermediate');
  const advanced = literacyCards.filter(card => card.level === 'advanced');

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="flex items-center text-2xl font-bold text-mentor-secondary mb-2">
          <BookOpen className="mr-2 h-6 w-6 text-mentor-primary" />
          Financial Literacy
        </h2>
        <p className="text-gray-600">
          Build your financial knowledge with these bite-sized learning modules.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Start with the Basics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beginner.map(card => (
            <LiteracyCard key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Intermediate Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intermediate.map(card => (
            <LiteracyCard key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Advanced Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advanced.map(card => (
            <LiteracyCard key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiteracyPanel;
