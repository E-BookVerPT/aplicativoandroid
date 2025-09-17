
import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './views/HomeView';
import GuideView from './views/GuideView';
import AboutView from './views/AboutView';
import LegalView from './views/LegalView';
import AnimatedView from './views/AnimatedView';
import type { View } from './types';


export default function App() {
  const [activeView, setActiveView] = useState<View>('home');

  const handleEnter = () => {
    setActiveView('guide');
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onEnter={handleEnter} />;
      case 'guide':
        return <GuideView />;
      case 'animated':
        return <AnimatedView />;
      case 'about':
        return <AboutView />;
      case 'legal':
        return <LegalView />;
      default:
        return <HomeView onEnter={handleEnter} />;
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {activeView !== 'home' && <Header activeView={activeView} setActiveView={setActiveView} />}
      <main>
        {renderView()}
      </main>
    </div>
  );
}