
import React from 'react';
import { LiteracyCard as LiteracyCardType } from '@/types';
import { ChevronRight, BookOpen, DollarSign, PieChart, BarChart3, ArrowUpRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface LiteracyCardProps {
  card: LiteracyCardType;
  onClick: (id: string) => void;
}

const LiteracyCard: React.FC<LiteracyCardProps> = ({ card, onClick }) => {
  // Map icon string to component
  const getIcon = () => {
    switch (card.icon) {
      case 'dollar-sign':
        return <DollarSign className="h-6 w-6 text-mentor-primary" />;
      case 'pie-chart':
        return <PieChart className="h-6 w-6 text-mentor-primary" />;
      case 'chart-bar':
        return <BarChart3 className="h-6 w-6 text-mentor-primary" />;
      case 'arrow-up':
        return <ArrowUpRight className="h-6 w-6 text-mentor-primary" />;
      default:
        return <BookOpen className="h-6 w-6 text-mentor-primary" />;
    }
  };

  // Badge color based on level
  const levelColor = () => {
    switch (card.level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="literacy-card cursor-pointer"
      onClick={() => onClick(card.id)}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 bg-mentor-primary/10 rounded-lg">
          {getIcon()}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColor()}`}>
          {card.level.charAt(0).toUpperCase() + card.level.slice(1)}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{card.description}</p>
      
      <div className="flex justify-between items-center">
        {typeof card.progress === 'number' ? (
          <div className="w-full">
            <Progress value={card.progress} className="h-2 mb-1" />
            <span className="text-xs text-gray-500">{card.progress}% Complete</span>
          </div>
        ) : (
          <span className="text-xs text-mentor-primary font-medium">Start Learning</span>
        )}
        <ChevronRight className="h-5 w-5 text-mentor-primary ml-2" />
      </div>
    </div>
  );
};

export default LiteracyCard;
