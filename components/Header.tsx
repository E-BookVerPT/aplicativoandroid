
import React from 'react';
import type { View } from '../types';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const navItems: { id: View; label: string }[] = [
  { id: 'guide', label: 'Guia Completo' },
  { id: 'animated', label: 'Exercícios Animados' },
  { id: 'about', label: 'Sobre o Autor' },
  { id: 'legal', label: 'Aviso Legal' },
];

export default function Header({ activeView, setActiveView }: HeaderProps) {
  return (
    <header className="bg-green-900 shadow-md sticky top-0 z-10">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap py-4">
          <div className="flex items-center mr-4">
            <h1 className="text-lg lg:text-xl font-bold text-white leading-tight">
              Tratar Dor nas
              <br />
              Costas em Casa
            </h1>
          </div>

          {/* Desktop buttons - hidden below `md` breakpoint */}
          <div className="hidden md:block">
            <div className="ml-auto flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeView === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-white hover:bg-green-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile select menu - shown below `md` breakpoint */}
          <div className="md:hidden">
            <select
              onChange={(e) => setActiveView(e.target.value as View)}
              value={activeView}
              className="block w-full pl-3 pr-10 py-2 text-base bg-green-800 text-white border-transparent focus:outline-none focus:ring-2 focus:ring-white sm:text-sm rounded-md"
            >
              {navItems.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}