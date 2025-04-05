
import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import ChatPanel from '@/components/ChatPanel';
import LiteracyPanel from '@/components/LiteracyPanel';
import InsightsPanel from '@/components/InsightsPanel';
import ProfilePanel from '@/components/ProfilePanel';
import { ContentPanel } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [activePanel, setActivePanel] = useState<ContentPanel>('literacy');
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // On mobile, both sidebars are collapsed by default
  React.useEffect(() => {
    if (isMobile) {
      setLeftSidebarCollapsed(true);
      setRightSidebarCollapsed(true);
    } else {
      setLeftSidebarCollapsed(false);
      setRightSidebarCollapsed(false);
    }
  }, [isMobile]);

  // Handle sidebar toggles
  const toggleLeftSidebar = () => setLeftSidebarCollapsed(!leftSidebarCollapsed);
  const toggleRightSidebar = () => setRightSidebarCollapsed(!rightSidebarCollapsed);

  // Handle panel changes
  const handlePanelChange = (panel: string) => {
    setActivePanel(panel as ContentPanel);
    // On mobile, collapse sidebars when changing panels
    if (isMobile) {
      setLeftSidebarCollapsed(true);
      setRightSidebarCollapsed(true);
    }
  };

  // Handle chat actions that can change the active panel
  const handleChatAction = (action: string) => {
    if (action === 'literacy' || action === 'insights' || action === 'suggestions') {
      setActivePanel(action as ContentPanel);
    }
  };

  // Render active content panel
  const renderContentPanel = () => {
    switch (activePanel) {
      case 'literacy':
        return <LiteracyPanel />;
      case 'insights':
        return <InsightsPanel />;
      case 'suggestions':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg text-gray-500">Recommendations Coming Soon</p>
          </div>
        );
      default:
        return <LiteracyPanel />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar activePanel={activePanel} onPanelChange={handlePanelChange} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Chat Panel */}
        <div 
          className={`flex-shrink-0 border-r border-mentor-gray transition-all duration-300 bg-white relative ${
            leftSidebarCollapsed ? 'w-0' : 'w-full md:w-[350px]'
          }`}
        >
          {!leftSidebarCollapsed && <ChatPanel onActionRequest={handleChatAction} />}
          
          <button 
            onClick={toggleLeftSidebar}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-mentor-primary text-white h-8 w-6 rounded-r-lg flex items-center justify-center z-10"
          >
            {leftSidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50">
          {renderContentPanel()}
        </div>
        
        {/* Right Sidebar - Profile & Holdings Panel */}
        <div 
          className={`flex-shrink-0 border-l border-mentor-gray transition-all duration-300 bg-white relative ${
            rightSidebarCollapsed ? 'w-0' : 'w-full md:w-[350px]'
          }`}
        >
          {!rightSidebarCollapsed && <ProfilePanel />}
          
          <button 
            onClick={toggleRightSidebar}
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-mentor-primary text-white h-8 w-6 rounded-l-lg flex items-center justify-center z-10"
          >
            {rightSidebarCollapsed ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        </div>
      </div>
      
      {/* Footer with disclaimer */}
      <div className="bg-mentor-secondary text-white text-xs py-2 px-4 text-center">
        <p>MoneyMentor AI is for educational purposes only. Not financial advice. © 2025</p>
      </div>
    </div>
  );
};

export default Index;
