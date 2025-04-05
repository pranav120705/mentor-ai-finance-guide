
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { assetAllocation } from '@/data/userProfile';

const COLORS = ['#5be7a9', '#3b82f6', '#f59e0b', '#ef4444'];

const AssetAllocation: React.FC = () => {
  return (
    <div className="p-4 border border-mentor-gray/20 rounded-lg mb-4">
      <h3 className="font-semibold mb-4">Asset Allocation</h3>
      
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={assetAllocation}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {assetAllocation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              formatter={(value, entry, index) => (
                <span className="text-xs">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AssetAllocation;
