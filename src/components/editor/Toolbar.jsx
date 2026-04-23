import React from 'react';
import { Bold, Italic, List, Code, Quote, Type, Underline } from 'lucide-react';

const Toolbar = ({ onAction }) => {
  const tools = [
    { icon: <Bold size={18} />, label: 'Bold', action: 'bold' },
    { icon: <Italic size={18} />, label: 'Italic', action: 'italic' },
    { icon: <Underline size={18} />, label: 'Underline', action: 'underline' },
    { icon: <List size={18} />, label: 'List', action: 'insertUnorderedList' },
    { icon: <Quote size={18} />, label: 'Quote', action: 'formatBlock', value: 'blockquote' },
  ];

  return (
    <div className="flex items-center gap-1.5 p-3 bg-slate-50/50 border-b border-slate-100 px-8">
      {tools.map((tool, index) => (
        <button
          key={index}
          onClick={() => onAction(tool.action)}
          title={tool.label}
          className="p-2.5 hover:bg-white hover:text-purple-700 rounded-xl text-slate-500 transition-all hover:shadow-sm border border-transparent hover:border-slate-200 active:scale-90"
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;