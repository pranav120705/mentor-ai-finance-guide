
import React from 'react';
import { Holding } from '@/types';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface HoldingsCardProps {
  holding: Holding;
}

const HoldingsCard: React.FC<HoldingsCardProps> = ({ holding }) => {
  const totalValue = holding.quantity * holding.currentPrice;
  const isPositive = holding.change >= 0;
  
  return (
    <div className="p-4 border border-mentor-gray/20 rounded-lg mb-2 hover:bg-mentor-light/50 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{holding.symbol}</h3>
          <p className="text-xs text-gray-500">{holding.name}</p>
          <div className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full inline-block mt-1">
            {holding.type.charAt(0).toUpperCase() + holding.type.slice(1)}
          </div>
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} flex items-center`}>
          {isPositive ? 
            <ArrowUp className="h-3 w-3 mr-1" /> : 
            <ArrowDown className="h-3 w-3 mr-1" />
          }
          {holding.changePercent.toFixed(2)}%
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <p className="text-xs text-gray-500">Quantity</p>
          <p className="font-medium">{holding.quantity}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Avg. Price</p>
          <p className="font-medium">${holding.buyPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Current</p>
          <p className="font-medium">${holding.currentPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Total Value</p>
          <p className="font-medium">${totalValue.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-mentor-gray/20">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Gain/Loss</p>
          <p className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{holding.change.toFixed(2)} ({holding.changePercent.toFixed(2)}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoldingsCard;
