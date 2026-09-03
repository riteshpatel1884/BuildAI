'use client';

import { useState } from 'react';
import { NotesSidebar } from './Notessidebar';

export default function DeepAgentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex w-full">
      <NotesSidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
      <main className="min-w-0 flex-1 px-6 py-6">{children}</main>
    </div>
  );
}