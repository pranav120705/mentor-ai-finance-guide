
import React, { useState } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recognition would be implemented here
  };

  return (
    <div className="border-t border-mentor-gray p-4">
      <div className="flex flex-col">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask MoneyMentor something..."
          className="resize-none min-h-[60px] focus-visible:ring-mentor-primary"
        />
        <div className="flex justify-between mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleRecording}
            className={`rounded-full ${isRecording ? 'bg-mentor-danger text-white' : ''}`}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
          </Button>
          <Button 
            onClick={handleSendMessage}
            disabled={!message.trim()} 
            className="bg-mentor-primary hover:bg-mentor-primary/90 text-white"
          >
            <Send size={18} className="mr-2" /> Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
