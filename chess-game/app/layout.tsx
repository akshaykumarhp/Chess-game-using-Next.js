// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen flex flex-col">
        <header className="w-full py-4 bg-gray-700 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Next.js Chess Game</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 flex items-center justify-center">
          {children}
        </main>
        <footer className="w-full py-4 bg-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name</p>
        </footer>
      </body>
    </html>
  );
}