import React from 'react';
import Navbar from '../components/layout/Navbar';
import PresenceBar from '../components/layout/PresenceBar';
import ChatBox from '../components/chat/ChatBox';
// Agar tumne Notepad kisi aur naam se rakha hai toh wahan path change kar dena
import Notepad from '../components/editor/Notepad'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-poppins selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Global Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full p-4 lg:p-6 gap-6">
        
        {/* 2. Team Presence Bar */}
        <PresenceBar />

        {/* 3. Main Content Grid (Editor + Chat) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
          
          {/* Left Side: Professional Editor (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
              <Notepad />
            </div>
          </div>

          {/* Right Side: Chat System (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col relative">
              <ChatBox />
            </div>
          </div>

        </div>
      </main>

      {/* Footer / Status Bar (Optional) */}
      <footer className="px-10 py-3 bg-white border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Cloud Sync: <span className="text-emerald-500">Active</span>
          </p>
        </div>
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          LinkUp Pro Workspace v1.0
        </p>
      </footer>
    </div>
  );
};

export default Home;