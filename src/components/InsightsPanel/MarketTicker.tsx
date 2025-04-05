
import React from 'react';
import { marketIndices } from '@/data/marketData';
import { ArrowUp, ArrowDown } from 'lucide-react';

const MarketTicker: React.FC = () => {
  return (
    <div className="bg-mentor-secondary text-white p-2 rounded-lg overflow-hidden mb-6">
      <div className="flex items-center space-x-6 animate-[scroll_20s_linear_infinite]">
        {marketIndices.map((index, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className="font-semibold mr-2">{index.name}:</span>
            <span>{index.price.toLocaleString()}</span>
            <span 
              className={`ml-2 flex items-center ${index.change >= 0 ? 'text-green-400' : 'text-red-400'}`}
            >
              {index.change >= 0 ? 
                <ArrowUp className="h-3 w-3 mr-1" /> : 
                <ArrowDown className="h-3 w-3 mr-1" />
              }
              {index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
        {/* Duplicate indices for seamless looping */}
        {marketIndices.map((index, i) => (
          <div key={`repeat-${i}`} className="flex items-center whitespace-nowrap">
            <span className="font-semibold mr-2">{index.name}:</span>
            <span>{index.price.toLocaleString()}</span>
            <span 
              className={`ml-2 flex items-center ${index.change >= 0 ? 'text-green-400' : 'text-red-400'}`}
            >
              {index.change >= 0 ? 
                <ArrowUp className="h-3 w-3 mr-1" /> : 
                <ArrowDown className="h-3 w-3 mr-1" />
              }
              {index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
