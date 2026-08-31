import { NotesSidebar } from './NotesSidebar';

export default function PythonLayout({ children }) {
  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-6 py-10">
      <NotesSidebar />
      <main className="min-w-0 flex-1 pb-24">{children}</main>
    </div>
  );
}