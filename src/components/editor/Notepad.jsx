import React, { useRef, useState } from 'react';
import { FileText, Save, Shield, AlertCircle } from 'lucide-react';
import PresenceBar from '../shared/PresenceBar';
import Toolbar from './Toolbar';

const Notepad = () => {
  const editorRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState(false);

  const handleToolbarAction = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  const handleSaveAsPDF = () => {
    const element = editorRef.current;
    
    const isRawEmpty = element.innerText.trim() === "" || element.innerText.trim() === "Start architecting your ideas...";
    
    if (isRawEmpty) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return; 
    }

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);

    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>LinkUp - Work together, better</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
            body { 
              font-family: 'Poppins', sans-serif; 
              padding: 50px; 
              color: #1e293b; 
              line-height: 1.8;
            }
            .pdf-header { 
              border-bottom: 2px solid #6d28d9; 
              padding-bottom: 10px; 
              margin-bottom: 30px;
              color: #6d28d9;
              font-weight: bold;
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              text-transform: uppercase;
            }
            .pdf-footer {
              position: fixed;
              bottom: 20px;
              left: 50px;
              right: 50px;
              font-size: 10px;
              color: #94a3b8;
              border-top: 1px solid #f1f5f9;
              padding-top: 10px;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-weight: 600;
            }
            @page { margin: 0mm; }
          </style>
        </head>
        <body>
          <div class="pdf-header">
            <span>LinkUp - Workspace</span>
            <span>${new Date().toLocaleDateString()}</span>
          </div>
          
          <div class="content">
            ${element.innerHTML}
          </div>

          <div class="pdf-footer">
            LinkUp | System Verified • ID: 7X-0226
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleFocus = () => {
    if (editorRef.current.innerText.trim() === "Start architecting your ideas...") {
      editorRef.current.innerText = "";
    }
  };

  return (
    <div className="h-full flex flex-col font-poppins relative">
      <PresenceBar />

      {error && (
        <div className="absolute top-24 right-8 bg-rose-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] animate-in slide-in-from-right-10">
          <AlertCircle className="w-5 h-5" />
          <div>
            <p className="text-xs font-bold">Action Denied</p>
            <p className="text-[10px] opacity-90">Please type something before exporting.</p>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="absolute top-24 right-8 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] animate-in slide-in-from-right-10 border border-slate-700">
          <div className="bg-purple-500 p-1 rounded-full">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold">PDF Engine Active</p>
            <p className="text-[10px] text-slate-400">Exporting high-quality document</p>
          </div>
        </div>
      )}

      <div className="h-full flex flex-col bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden ring-8 ring-slate-100/50">
        <div className="px-8 py-5 border-b border-slate-100 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3 text-purple-700">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-slate-700 tracking-tight text-lg">System Documentation</h2>
          </div>
          
          <button 
            onClick={handleSaveAsPDF}
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-purple-100 flex items-center gap-2 active:scale-95"
          >
            <Save className="w-3.5 h-3.5" /> Export PDF
          </button>
        </div>

        <Toolbar onAction={handleToolbarAction} />

        <div
          ref={editorRef}
          contentEditable={true}
          onFocus={handleFocus}
          className="flex-1 p-12 text-slate-700 text-xl leading-relaxed focus:outline-none overflow-y-auto"
          style={{ minHeight: '200px' }}
        >
          <span className="text-slate-200 pointer-events-none select-none italic">
            Start architecting your ideas...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notepad;