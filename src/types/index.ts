
// Chat related types
export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

// Financial literacy types
export interface LiteracyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  progress?: number;
}

// Market insight types
export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface StockData extends MarketData {
  sector: string;
  marketCap: number;
}

export interface FundData extends MarketData {
  type: 'mutual' | 'etf' | 'index';
  expense: number;
  riskLevel: 'low' | 'moderate' | 'high';
}

// Profile and holdings types
export interface UserProfile {
  name: string;
  avatar?: string;
  ageGroup: string;
  riskAppetite: 'conservative' | 'moderate' | 'aggressive';
  investmentGoal: string;
  incomeRange: string;
}

export interface Holding {
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'mutual' | 'etf' | 'bond' | 'other';
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  change: number;
  changePercent: number;
}

// Content panel types for main area
export type ContentPanel = 'literacy' | 'insights' | 'suggestions';
