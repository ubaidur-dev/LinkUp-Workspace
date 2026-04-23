import React, { useEffect } from 'react';
import Notepad from '../components/editor/Notepad';
import ChatBox from '../components/chat/ChatBox';
import { useSocket } from '../hooks/useSocket';

const EditorPage = () => {
  const socket = useSocket(); 

  return (
    <div className="flex flex-1 h-[calc(100vh-104px)] overflow-hidden">
      <main className="flex-1 p-6 bg-[#F8FAFC] overflow-y-auto">
        <Notepad socket={socket} />
      </main>

      <aside className="w-[360px] bg-white border-l shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.02)]">
        <ChatBox socket={socket} />
      </aside>
    </div>
  );
};

export default EditorPage;