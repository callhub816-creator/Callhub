import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, User, PlusCircle, Heart, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path ? 'text-neon-pink drop-shadow-lg' : 'text-gray-400';

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col text-white font-sans">
      {/* Desktop/Mobile Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue neon-text">
            CallHub<span className="text-xs text-white ml-1 opacity-70">.in</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`hover:text-neon-pink transition ${isActive('/')}`}>Home</Link>
            <Link to="/characters" className={`hover:text-neon-pink transition ${isActive('/characters')}`}>Browse</Link>
            <Link to="/subscribe" className={`hover:text-neon-pink transition ${isActive('/subscribe')}`}>Premium</Link>
            <Link to="/dashboard" className={`hover:text-neon-pink transition ${isActive('/dashboard')}`}>Dashboard</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-bg/95 pt-20 px-6 md:hidden">
           <nav className="flex flex-col space-y-6 text-xl font-display">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/characters" onClick={() => setIsMenuOpen(false)}>Characters</Link>
            <Link to="/creator" onClick={() => setIsMenuOpen(false)}>Create AI</Link>
            <Link to="/subscribe" onClick={() => setIsMenuOpen(false)} className="text-neon-pink">Premium Plans</Link>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
           </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 pb-24 md:pb-6">
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 glass-panel border-t border-dark-border md:hidden z-50 flex justify-around items-center pb-1">
        <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/')}`}>
          <Home size={20} />
          <span className="text-[10px] mt-1">Home</span>
        </Link>
        <Link to="/characters" className={`flex flex-col items-center p-2 ${isActive('/characters')}`}>
          <Heart size={20} />
          <span className="text-[10px] mt-1">Meet</span>
        </Link>
        <Link to="/creator" className={`flex flex-col items-center p-2 -mt-6 bg-neon-pink/20 rounded-full border border-neon-pink shadow-[0_0_15px_rgba(255,0,255,0.4)]`}>
          <PlusCircle size={28} className="text-neon-pink" />
        </Link>
        <Link to="/characters" className={`flex flex-col items-center p-2 ${isActive('/characters')}`}>
          <MessageCircle size={20} />
          <span className="text-[10px] mt-1\">Chat</span>
        </Link>
        <Link to="/dashboard" className={`flex flex-col items-center p-2 ${isActive('/dashboard')}`}>
          <User size={20} />
          <span className="text-[10px] mt-1\">Me</span>
        </Link>
      </div>
    </div>
  );
};

export default Layout;