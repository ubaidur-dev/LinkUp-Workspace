import React, { useState } from 'react';
import { Send, MessageSquare, MoreHorizontal, Smile, Paperclip, ShieldCheck, FileText, Image, Folder, CheckCheck } from 'lucide-react';

const ChatBox = () => {
  const [msg, setMsg] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showAttach, setShowAttach] = useState(false);

  const messages = [
    {
      id: 1,
      user: "Alina",
      text: "I have updated the documentation. Please check it.",
      time: "10:30 AM",
      isMe: false,
      avatar: "/Alina.jpg"
    },
    {
      id: 2,
      user: "James",
      text: "Looks great! Reviewing the PDF engine now.",
      time: "10:32 AM",
      isMe: false,
      avatar: "/James.jpg"
    },
    {
      id: 3,
      user: "Ubaid Ur Rehman",
      text: "Documentation updated. You can check it now.",
      time: "10:35 AM",
      isMe: true,
      avatar: "/profile.jpeg" 
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white font-poppins">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-50 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-purple-700" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 tracking-tight text-sm">Project Discussion</h3>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">3 Online</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50/30 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.isMe ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 bg-white">
              <img 
                src={message.avatar} 
                alt={message.user} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${message.user}&background=6d28d9&color=fff`; }} 
              />
            </div>

            <div className={`flex flex-col max-w-[85%] ${message.isMe ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1.5 px-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                  {message.user}
                </span>
                <span className="text-[9px] font-medium text-slate-300">{message.time}</span>
                {message.isMe && <CheckCheck className="w-3 h-3 text-purple-500" />}
              </div>

              <div className={`p-4 rounded-2xl shadow-sm border leading-relaxed text-sm font-medium ${
                message.isMe 
                ? 'bg-purple-700 text-white border-purple-600 rounded-tr-none' 
                : 'bg-white text-slate-600 border-slate-100 rounded-tl-none'
              }`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-white border-t border-slate-100 relative">
        {showAttach && (
          <div className="absolute bottom-[110%] left-6 w-48 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 animate-in slide-in-from-bottom-4 zoom-in-95 duration-200 z-[20]">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 rounded-xl text-[11px] font-bold text-slate-600">
              <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600"><FileText size={14}/></div> Documents
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-rose-50 rounded-xl text-[11px] font-bold text-rose-600">
              <div className="p-1.5 bg-rose-50 rounded-lg text-rose-600"><Image size={14}/></div> Photos
            </button>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:ring-4 ring-purple-50 transition-all shadow-inner relative">
            <button onClick={() => setShowAttach(!showAttach)} className="p-2 text-slate-400 hover:text-purple-600">
              <Paperclip className="w-4 h-4" />
            </button>
            <input 
              className="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none font-medium text-slate-700 placeholder:text-slate-300"
              placeholder="Write a message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button className="bg-purple-700 p-3 rounded-xl text-white hover:bg-purple-800 transition-all shadow-md active:scale-90">
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 opacity-60">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
              End-to-end encrypted workspace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;