import React from 'react';
import { CheckCheck, ShieldCheck } from 'lucide-react';

const Message = ({ user, text, time, isMe, isSystem, avatar }) => {
  return (
    <div className={`flex gap-3 ${isMe ? 'flex-row-reverse' : 'flex-row'} animate-in fade-in slide-in-from-bottom-2`}>
      {!isSystem && (
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 bg-white">
          <img 
            src={avatar || `https://ui-avatars.com/api/?name=${user}&background=6d28d9&color=fff`} 
            alt={user} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className={`flex flex-col max-w-[85%] ${isMe ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center gap-2 mb-1.5 px-1">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isSystem ? 'text-purple-600' : 'text-slate-500'}`}>
            {user}
          </span>
          <span className="text-[9px] font-medium text-slate-300">{time}</span>
          {isMe && <CheckCheck className="w-3 h-3 text-purple-500" />}
          {isSystem && <ShieldCheck className="w-3 h-3 text-purple-400" />}
        </div>

        <div className={`p-4 rounded-2xl shadow-sm border leading-relaxed text-sm font-medium ${
          isMe 
          ? 'bg-purple-700 text-white border-purple-600 rounded-tr-none' 
          : 'bg-white text-slate-600 border-slate-100 rounded-tl-none'
        }`}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;