
import React from 'react';
import { UserProfile } from '@/types';
import { User, Edit2, AlertTriangle } from 'lucide-react';

interface ProfileCardProps {
  profile: UserProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  // Determine risk level color
  const getRiskColor = () => {
    switch (profile.riskAppetite) {
      case 'conservative':
        return 'bg-blue-100 text-blue-700';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'aggressive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="profile-card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-mentor-primary/20 rounded-full flex items-center justify-center mr-3">
            <User className="h-6 w-6 text-mentor-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{profile.name}</h3>
            <div className={`text-xs px-2 py-1 rounded-full ${getRiskColor()} inline-flex items-center`}>
              {profile.riskAppetite.charAt(0).toUpperCase() + profile.riskAppetite.slice(1)} Investor
            </div>
          </div>
        </div>
        <button className="text-mentor-secondary hover:text-mentor-primary">
          <Edit2 size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-mentor-light/50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Age Group</p>
          <p className="font-medium">{profile.ageGroup}</p>
        </div>
        <div className="bg-mentor-light/50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Income Range</p>
          <p className="font-medium">{profile.incomeRange}</p>
        </div>
        <div className="bg-mentor-light/50 p-3 rounded-lg col-span-2">
          <p className="text-xs text-gray-500 mb-1">Investment Goal</p>
          <p className="font-medium">{profile.investmentGoal}</p>
        </div>
      </div>
      
      <div className="bg-mentor-primary/10 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-mentor-secondary mb-2">AI Analysis</h4>
        <p className="text-sm">
          Based on your profile, you're a {profile.riskAppetite} investor focused on {profile.investmentGoal.toLowerCase()}. 
          I recommend a balanced portfolio with emphasis on long-term growth assets.
        </p>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center text-sm">
        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700">
          Complete your risk assessment quiz to get more personalized recommendations.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
