import React, { useState } from 'react';
import { LayoutGrid, Bell, Settings, Search, User, LogOut, Shield, Zap, Check } from 'lucide-react';

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-[100]">
      
      <div className="flex items-center">
        <div className="h-12 w-auto max-w-[180px] flex items-center justify-center overflow-hidden">
          <img 
            src="/logo.png" 
            alt="LinkUp Workspace" 
            className="h-full w-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              document.getElementById('brand-fallback').style.display = 'block';
            }}
          />
          <span id="brand-fallback" className="hidden font-black text-purple-700 tracking-tighter text-xl">
            LinkUp.
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-2xl w-96 group focus-within:ring-4 ring-purple-50 transition-all">
        <Search className="w-4 h-4 text-slate-400 group-focus-within:text-purple-600" />
        <input 
          type="text" 
          placeholder="Search documentation, files..." 
          className="bg-transparent border-none focus:outline-none px-3 text-sm font-medium text-slate-600 w-full placeholder:text-slate-300"
        />
      </div>

      <div className="flex items-center gap-6 relative">
        
        <div className="relative">
          <button 
            onClick={() => { setShowNotifications(!showNotifications); setShowSettings(false); }}
            className={`p-2 rounded-xl transition-all ${showNotifications ? 'bg-purple-50 text-purple-700' : 'text-slate-400 hover:text-purple-700 hover:bg-purple-50'}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute top-[130%] right-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-2 z-[110] max-h-[450px] overflow-y-auto">
              <div className="flex items-center justify-between mb-4 px-2">
                <h4 className="font-bold text-slate-800 text-sm">Notifications</h4>
                <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">5 NEW</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Alina', time: 'Just now' },
                  { name: 'James', time: '2m ago' },
                  { name: 'Maxwell', time: '5m ago' }
                ].map((user) => (
                  <div key={user.name} className="flex gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                        <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff`} alt={user.name} />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-700">{user.name} joined workspace</p>
                      <p className="text-[10px] text-slate-400">Collaboration active • {user.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <button 
            onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); }}
            className={`p-2 rounded-xl transition-all ${showSettings ? 'bg-purple-50 text-purple-700' : 'text-slate-400 hover:text-purple-700 hover:bg-purple-50'}`}
          >
            <Settings className="w-5 h-5" />
          </button>
          {showSettings && (
            <div className="absolute top-[130%] right-0 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 animate-in slide-in-from-top-2 z-[110]">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 rounded-xl text-[11px] font-bold text-slate-600">
                <User size={14} className="text-slate-400" /> Account Settings
              </button>
              <div className="h-[1px] bg-slate-100 my-1 mx-2"></div>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-rose-50 rounded-xl text-[11px] font-bold text-rose-600">
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>

        <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors tracking-tight">Ubaid Ur Rehman</p>
            <p className="text-[9px] font-extrabold text-purple-600/70 uppercase tracking-widest">Frontend Developer</p>
          </div>
          
          <div className="w-10 h-10 rounded-full border-2 border-purple-100 p-0.5 group-hover:border-purple-600 transition-all shadow-sm overflow-hidden bg-slate-50">
            <img 
              src="/profile.jpeg" 
              alt="Ubaid Ur Rehman" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.src = "https://ui-avatars.com/api/?name=Ubaid+Ur+Rehman&background=6d28d9&color=fff";
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;