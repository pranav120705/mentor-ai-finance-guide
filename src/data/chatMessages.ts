
import { ChatMessage } from '@/types';

export const initialChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your MoneyMentor AI assistant. I can help you learn about investing, understand market trends, and make smarter financial decisions. What would you like to know today?',
    timestamp: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: '2',
    role: 'user',
    content: 'I\'m new to investing. Can you help me get started?',
    timestamp: new Date(Date.now() - 1000 * 60 * 4)
  },
  {
    id: '3',
    role: 'assistant',
    content: 'Absolutely! As a beginner, I recommend starting with our Financial Literacy module. Would you like me to show you some beginner-friendly topics to learn about investing basics?',
    timestamp: new Date(Date.now() - 1000 * 60 * 3)
  },
  {
    id: '4',
    role: 'user',
    content: 'Yes, that sounds great!',
    timestamp: new Date(Date.now() - 1000 * 60 * 2)
  },
  {
    id: '5',
    role: 'assistant',
    content: 'I\'ve opened our Financial Literacy module for you. Start with "What is Investing?" and "Understanding Stocks" to build your foundation. Feel free to ask me any questions as you go through the content!',
    timestamp: new Date(Date.now() - 1000 * 60 * 1)
  }
];
