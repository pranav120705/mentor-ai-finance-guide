
import React from 'react';
import ProfileCard from './ProfileCard';
import HoldingsCard from './HoldingsCard';
import AssetAllocation from './AssetAllocation';
import { userProfileData, userHoldings } from '@/data/userProfile';
import { Wallet, Filter } from 'lucide-react';

const ProfilePanel: React.FC = () => {
  // Calculate total portfolio value
  const totalValue = userHoldings.reduce(
    (total, holding) => total + holding.quantity * holding.currentPrice, 
    0
  );
  
  // Calculate total gain/loss
  const totalGainLoss = userHoldings.reduce(
    (total, holding) => total + (holding.change * holding.quantity), 
    0
  );
  
  const isPositiveOverall = totalGainLoss >= 0;
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-mentor-gray">
        <h2 className="text-xl font-bold text-mentor-secondary flex items-center">
          <span className="w-2 h-8 bg-mentor-primary mr-2 rounded-sm"></span>
          Your Profile
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <ProfileCard profile={userProfileData} />
        
        <div className="mt-6 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="flex items-center text-lg font-semibold">
              <Wallet className="h-5 w-5 mr-2 text-mentor-primary" />
              Your Holdings
            </h3>
            <button className="flex items-center text-xs text-mentor-secondary hover:text-mentor-primary">
              <Filter className="h-3 w-3 mr-1" /> Filter
            </button>
          </div>
          
          <div className="bg-mentor-light border border-mentor-gray/20 p-4 rounded-lg mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Total Value</p>
                <p className="text-xl font-bold">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Gain/Loss</p>
                <p className={`text-xl font-bold ${isPositiveOverall ? 'text-mentor-success' : 'text-mentor-danger'}`}>
                  {isPositiveOverall ? '+' : ''}{totalGainLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>
          
          <AssetAllocation />
          
          {userHoldings.map(holding => (
            <HoldingsCard key={holding.id} holding={holding} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
