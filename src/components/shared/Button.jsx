import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-purple-700 text-white shadow-lg shadow-purple-100 hover:bg-purple-800 active:scale-95',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 active:scale-95',
    outline: 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-50 active:scale-95',
    ghost: 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800',
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;