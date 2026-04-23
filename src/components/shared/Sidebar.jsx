import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  FolderKanban,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <FolderKanban size={20} />, label: 'Projects', active: false },
    { icon: <FileText size={20} />, label: 'Documents', active: false },
    { icon: <MessageSquare size={20} />, label: 'Messages', active: false },
    { icon: <Users size={20} />, label: 'Team', active: false },
  ];

  return (
    <aside className="w-[80px] lg:w-[100px] h-screen bg-white border-r border-slate-100 flex flex-col items-center py-8 gap-10 sticky top-0 left-0 z-50 shadow-sm">
      
      <div className="w-12 h-12 bg-purple-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-100 cursor-pointer active:scale-95 transition-all">
        <span className="text-xl font-black">L</span>
      </div>

      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item, index) => (
          <div key={index} className="group relative flex items-center justify-center">
            <button className={`p-3.5 rounded-2xl transition-all duration-300 ${
              item.active 
              ? 'bg-purple-50 text-purple-700 shadow-sm' 
              : 'text-slate-400 hover:bg-slate-50 hover:text-purple-600'
            }`}>
              {item.icon}
            </button>
            
            <span className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[60]">
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-4 border-t border-slate-50 pt-8">
        <button className="p-3.5 text-slate-400 hover:text-purple-600 hover:bg-slate-50 rounded-2xl transition-all">
          <Settings size={20} />
        </button>
        <button className="p-3.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all">
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;