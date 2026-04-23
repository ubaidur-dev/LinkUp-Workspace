import React from 'react';
import { X, Mail, Link as LinkIcon, Send, Copy } from 'lucide-react';

const InviteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen w-full bg-slate-900/60 backdrop-blur-md z-[999] flex items-center justify-center p-4 transition-all duration-300">
      
      <div 
        className="bg-white w-full max-w-lg rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-8 pb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-2xl tracking-tight">Invite Team</h3>
            <p className="text-slate-500 text-sm mt-1">Collaborate with your developers</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="px-8 pb-10 space-y-8">
          <div className="space-y-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[1px] ml-1">
              Direct Invitation
            </label>
            <div className="flex gap-3">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex items-center gap-3 focus-within:border-purple-500 focus-within:ring-4 ring-purple-50 transition-all">
                <Mail className="w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-transparent border-none outline-none text-sm w-full font-medium text-slate-700 placeholder:text-slate-300" 
                />
              </div>
              <button className="bg-purple-700 text-white px-6 py-4 rounded-2xl text-sm font-bold hover:bg-purple-800 transition-all flex items-center gap-2 shadow-lg shadow-purple-100">
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold"><span className="bg-white px-4 text-slate-300 tracking-widest">Or</span></div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[1px] ml-1">
              Invite via link
            </label>
            <div className="bg-purple-50/50 border border-purple-100 p-5 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <LinkIcon className="w-4 h-4 text-purple-700" />
                </div>
                <span className="text-sm font-semibold text-purple-800 truncate">linkup.pro/a1-collab-7x</span>
              </div>
              <button className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-xl text-xs font-bold border border-purple-100 hover:bg-purple-700 hover:text-white transition-all shadow-sm">
                <Copy className="w-3.5 h-3.5" />
                Copy Link
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 text-center">
          <p className="text-[10px] text-slate-400 font-medium italic">
            Private workspace. Only invited members can access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;