
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { ChatMessage as ChatMessageType } from '@/types';
import { initialChatMessages } from '@/data/chatMessages';

interface ChatPanelProps {
  onActionRequest?: (action: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onActionRequest }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialChatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (content: string) => {
    const newUserMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Simulate AI response (would be replaced with actual API call)
    setTimeout(() => {
      let responseContent = `I understand you're asking about "${content}". Let me help you with that.`;
      
      if (content.toLowerCase().includes('invest')) {
        responseContent = "Investing is about allocating resources now to create future returns. Would you like me to show you our beginner's guide to investing?";
        onActionRequest?.('literacy');
      } else if (content.toLowerCase().includes('stock') || content.toLowerCase().includes('market')) {
        responseContent = "Let me show you the latest market data so you can see how stocks are performing today.";
        onActionRequest?.('insights');
      } else if (content.toLowerCase().includes('portfolio') || content.toLowerCase().includes('holding')) {
        responseContent = "I've pulled up your current investment portfolio. You can see your holdings in the panel on the right.";
      }
      
      const newAiMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, newAiMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-mentor-gray">
        <h2 className="text-xl font-bold text-mentor-secondary flex items-center">
          <span className="w-2 h-8 bg-mentor-primary mr-2 rounded-sm"></span>
          MoneyMentor Chat
        </h2>
        <p className="text-sm text-gray-500">Ask me anything about investing and finance</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <div className="w-8 h-8 rounded-full bg-mentor-primary flex items-center justify-center mr-2">
              <span className="text-white font-bold">AI</span>
            </div>
            <div className="bg-mentor-light border border-mentor-gray rounded-2xl p-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-mentor-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-mentor-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-mentor-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPanel;
