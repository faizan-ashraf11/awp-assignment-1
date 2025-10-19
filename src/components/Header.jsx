import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary font-bold text-lg shadow-sm">
            F
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary tracking-wide">Faizan Ashraf</h1>
            <p className="text-xs text-gray-600">Full Stack Developer</p>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
