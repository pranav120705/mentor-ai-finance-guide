
import React, { useState } from 'react';
import MarketTicker from './MarketTicker';
import MarketCard from './MarketCard';
import { stockData, fundData } from '@/data/marketData';
import { BarChart3, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const InsightsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("stocks");
  
  // Filter for top gainers/losers
  const topGainers = [...stockData].sort((a, b) => b.changePercent - a.changePercent).slice(0, 3);
  const topLosers = [...stockData].sort((a, b) => a.changePercent - b.changePercent).slice(0, 3);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="flex items-center text-2xl font-bold text-mentor-secondary mb-2">
          <BarChart3 className="mr-2 h-6 w-6 text-mentor-primary" />
          Market Insights
        </h2>
        <p className="text-gray-600">
          Stay informed with real-time market data and trends.
        </p>
      </div>

      <MarketTicker />

      <Tabs defaultValue="stocks" className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="stocks" onClick={() => setActiveTab("stocks")}>Stocks</TabsTrigger>
            <TabsTrigger value="funds" onClick={() => setActiveTab("funds")}>Funds & ETFs</TabsTrigger>
          </TabsList>
          
          <button className="flex items-center text-sm text-mentor-secondary">
            <Filter className="h-4 w-4 mr-1" /> Filter
          </button>
        </div>
        
        <TabsContent value="stocks" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stockData.map((stock) => (
              <MarketCard 
                key={stock.symbol} 
                data={stock} 
                showTooltip={true}
                tooltipContent={`${stock.name} (${stock.symbol}) is a ${stock.sector} company with a market cap of $${(stock.marketCap/1000000000).toFixed(1)}B.`}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="funds" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fundData.map((fund) => (
              <MarketCard 
                key={fund.symbol} 
                data={fund} 
                showTooltip={true}
                tooltipContent={`${fund.name} (${fund.symbol}) is a ${fund.type} with an expense ratio of ${fund.expense}% and ${fund.riskLevel} risk level.`}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-4">
            <ArrowUpRight className="mr-2 h-5 w-5 text-green-600" />
            Top Gainers
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {topGainers.map((stock) => (
              <MarketCard key={`gain-${stock.symbol}`} data={stock} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-4">
            <ArrowDownRight className="mr-2 h-5 w-5 text-red-600" />
            Top Losers
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {topLosers.map((stock) => (
              <MarketCard key={`loss-${stock.symbol}`} data={stock} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
