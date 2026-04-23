import React, { useState } from 'react';
import Navbar from './components/shared/Navbar';
import EditorPage from './pages/EditorPage';
import InviteModal from './components/shared/InviteModal';

function App() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar onInviteClick={() => setIsInviteOpen(true)} />
      <EditorPage />
      <InviteModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

export default App;