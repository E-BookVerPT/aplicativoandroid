import React from 'react';

interface HomeViewProps {
  onEnter: () => void;
}

const BackPainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        {/* Head */}
        <circle cx="12" cy="4" r="2" />
        {/* Body */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v8" />
        {/* Legs */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14l2 7" />
        {/* Arm on back */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-3 1-3 3s1 3 3 3" />
        {/* Pain lines radiating from back */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l-2 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5l-1-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 13.5l-1 1" />
    </svg>
);


export default function HomeView({ onEnter }: HomeViewProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <header className="w-full max-w-2xl px-2">
        <p className="text-sm font-light text-gray-300">AUTOR: GEORGIO SILVA</p>
        <h1 className="text-6xl md:text-8xl font-black mt-4">
          <span className="text-green-500">TRATAR</span> DOR NAS <span className="text-green-500">COSTAS</span> EM CASA
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200">
          Volte a fazer tudo que você fazia sem dor nas costas.
        </p>
      </header>
      
      <div className="my-12">
        <BackPainIcon />
      </div>

      <div className="w-full max-w-md">
        <p className="text-2xl font-bold">
          <span className="bg-green-600 px-4 py-2 rounded-md">10 MELHORES EXERCÍCIOS</span>
        </p>
        <p className="mt-4 text-lg font-semibold bg-yellow-400 text-black px-4 py-2 inline-block rounded-md">O Guia Passo a Passo</p>
      </div>

      <div className="mt-12">
        <button
          onClick={onEnter}
          className="bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 transition-transform transform hover:scale-105"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}