
import { UserProfile, Holding } from '@/types';

export const userProfileData: UserProfile = {
  name: 'Alex Johnson',
  avatar: undefined,
  ageGroup: '25-34',
  riskAppetite: 'moderate',
  investmentGoal: 'Retirement',
  incomeRange: '$75,000 - $100,000'
};

export const userHoldings: Holding[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    type: 'stock',
    quantity: 10,
    buyPrice: 175.32,
    currentPrice: 189.84,
    change: 14.52,
    changePercent: 8.28
  },
  {
    id: '2',
    symbol: 'VTSAX',
    name: 'Vanguard Total Stock Market Index',
    type: 'mutual',
    quantity: 25.5,
    buyPrice: 110.45,
    currentPrice: 118.74,
    change: 8.29,
    changePercent: 7.51
  },
  {
    id: '3',
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF',
    type: 'etf',
    quantity: 5,
    buyPrice: 485.67,
    currentPrice: 504.23,
    change: 18.56,
    changePercent: 3.82
  },
  {
    id: '4',
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    type: 'stock',
    quantity: 3,
    buyPrice: 420.12,
    currentPrice: 418.42,
    change: -1.70,
    changePercent: -0.40
  }
];

export const assetAllocation = [
  { name: 'Stocks', value: 45 },
  { name: 'ETFs', value: 30 },
  { name: 'Mutual Funds', value: 20 },
  { name: 'Bonds', value: 5 }
];
