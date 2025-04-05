
import React from 'react';
import { MarketData } from '@/types';
import { ArrowUp, ArrowDown, Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface MarketCardProps {
  data: MarketData;
  showTooltip?: boolean;
  tooltipContent?: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ 
  data, 
  showTooltip = false,
  tooltipContent = "Click for more details" 
}) => {
  const isPositive = data.change >= 0;
  
  return (
    <div className="insight-card">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold">{data.symbol}</h3>
            {showTooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="ml-1">
                      <Info size={14} className="text-gray-400" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[200px]">{tooltipContent}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <p className="text-xs text-gray-500">{data.name}</p>
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} flex items-center`}>
          {isPositive ? 
            <ArrowUp className="h-3 w-3 mr-1" /> : 
            <ArrowDown className="h-3 w-3 mr-1" />
          }
          {data.changePercent.toFixed(2)}%
        </div>
      </div>
      
      <div className="flex justify-between items-end mt-4">
        <div className="text-lg font-bold">${data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{data.change.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
