
import React from 'react';
import { Sun, Moon, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

interface NavbarProps {
  activePanel: string;
  onPanelChange: (panel: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePanel, onPanelChange }) => {
  const { theme, setTheme } = useTheme();

  const isActive = (panel: string) => {
    return activePanel === panel ? 'bg-mentor-primary/10 text-mentor-secondary' : 'text-mentor-secondary/60';
  };

  return (
    <div className="border-b border-mentor-gray py-3 px-6 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <div className="mr-8">
          <h1 className="font-bold text-xl text-mentor-secondary flex items-center">
            <span className="w-3 h-6 bg-mentor-primary mr-2 rounded-sm"></span>
            MoneyMentor
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Button 
            variant="ghost" 
            className={`rounded-lg ${isActive('literacy')}`}
            onClick={() => onPanelChange('literacy')}
          >
            Learn
          </Button>
          <Button 
            variant="ghost" 
            className={`rounded-lg ${isActive('insights')}`}
            onClick={() => onPanelChange('insights')}
          >
            Insights
          </Button>
          <Button 
            variant="ghost" 
            className={`rounded-lg ${isActive('suggestions')}`}
            onClick={() => onPanelChange('suggestions')}
          >
            Recommendations
          </Button>
        </nav>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell size={20} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
