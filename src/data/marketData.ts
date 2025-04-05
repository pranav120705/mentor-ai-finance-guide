
import { StockData, FundData } from '@/types';

export const stockData: StockData[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 189.84,
    change: 2.35,
    changePercent: 1.25,
    sector: 'Technology',
    marketCap: 2980000000000
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    price: 418.42,
    change: 3.28,
    changePercent: 0.79,
    sector: 'Technology',
    marketCap: 3110000000000
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc',
    price: 178.22,
    change: -1.64,
    changePercent: -0.91,
    sector: 'Consumer Cyclical',
    marketCap: 1840000000000
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc',
    price: 142.65,
    change: 0.56,
    changePercent: 0.39,
    sector: 'Communication Services',
    marketCap: 1790000000000
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc',
    price: 175.34,
    change: -5.61,
    changePercent: -3.10,
    sector: 'Automotive',
    marketCap: 557000000000
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co',
    price: 197.45,
    change: 2.10,
    changePercent: 1.07,
    sector: 'Financial Services',
    marketCap: 570000000000
  }
];

export const fundData: FundData[] = [
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF',
    price: 504.23,
    change: 1.38,
    changePercent: 0.27,
    type: 'etf',
    expense: 0.09,
    riskLevel: 'moderate'
  },
  {
    symbol: 'QQQ',
    name: 'Invesco QQQ Trust',
    price: 422.16,
    change: 2.54,
    changePercent: 0.60,
    type: 'etf',
    expense: 0.20,
    riskLevel: 'high'
  },
  {
    symbol: 'VTSAX',
    name: 'Vanguard Total Stock Market Index',
    price: 118.74,
    change: 0.31,
    changePercent: 0.26,
    type: 'mutual',
    expense: 0.04,
    riskLevel: 'moderate'
  },
  {
    symbol: 'VFIAX',
    name: 'Vanguard 500 Index Fund',
    price: 434.85,
    change: 1.21,
    changePercent: 0.28,
    type: 'mutual',
    expense: 0.04,
    riskLevel: 'moderate'
  },
  {
    symbol: 'FXAIX',
    name: 'Fidelity 500 Index Fund',
    price: 177.62,
    change: 0.48,
    changePercent: 0.27,
    type: 'index',
    expense: 0.015,
    riskLevel: 'moderate'
  },
  {
    symbol: 'VGSLX',
    name: 'Vanguard Real Estate Index',
    price: 102.45,
    change: -0.75,
    changePercent: -0.73,
    type: 'mutual',
    expense: 0.12,
    riskLevel: 'high'
  }
];

export const marketIndices = [
  {
    symbol: 'SPX',
    name: 'S&P 500',
    price: 5021.84,
    change: 13.65,
    changePercent: 0.27
  },
  {
    symbol: 'DJI',
    name: 'Dow Jones',
    price: 38563.81,
    change: 53.74,
    changePercent: 0.14
  },
  {
    symbol: 'IXIC',
    name: 'NASDAQ',
    price: 15786.56,
    change: 40.88,
    changePercent: 0.26
  }
];
