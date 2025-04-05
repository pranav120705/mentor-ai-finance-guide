
import React from 'react';
import { ChatMessage as ChatMessageType } from '@/types';
import { User, Bot } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const timeAgo = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true });

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[85%]`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-2' : 'mr-2'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-mentor-secondary' : 'bg-mentor-primary'}`}>
            {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
          </div>
        </div>
        <div>
          <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}>
            <p className={`text-sm ${isUser ? 'text-white' : 'text-mentor-secondary'}`}>{message.content}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">{timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
