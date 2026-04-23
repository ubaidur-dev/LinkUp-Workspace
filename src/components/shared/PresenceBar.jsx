import React from 'react';
import { Users } from 'lucide-react';

const PresenceBar = () => {
  const collaborators = [
    { id: 1, name: 'Maxwell', src: '/maxwell.jpg' }, 
    { id: 2, name: 'Alina', src: '/Alina.jpg' },
    { id: 3, name: 'James', src: '/James.jpg' }, 
  ];

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-transparent mb-2 flex-row-reverse">
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">
          3 Members Collaborating
        </span>
        <div className="p-2 bg-white/80 rounded-lg shadow-sm border border-slate-100">
          <Users className="w-4 h-4 text-purple-700" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex -space-x-3 mr-3">
          {collaborators.map((user) => (
            <div 
              key={user.id} 
              className="relative group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200 transition-transform hover:scale-110 hover:z-10">
                <img 
                  src={user.src} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=" + user.name + "&background=6366f1&color=fff";
                  }}
                />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-[9px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap font-bold">
                {user.name}
              </div>
            </div>
          ))}
          <div className="w-9 h-9 rounded-full border-2 border-white bg-purple-50 flex items-center justify-center shadow-md z-0">
            <span className="text-[10px] font-bold text-purple-700">+0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceBar;