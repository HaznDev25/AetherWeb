
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import QuoteModal from './components/QuoteModal';
import TrackingModal from './components/TrackingModal';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen pb-24 md:pb-0">
      <Header 
        onTrackClick={() => setIsTrackingModalOpen(true)} 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
      />
      
      <main>
        <Hero 
          onQuoteClick={() => setIsQuoteModalOpen(true)}
          onTrackClick={() => setIsTrackingModalOpen(true)}
        />
        <Services />
        <Features />
        <Process />
        <Coverage />
        <Testimonials />
      </main>

      <Footer />
      
      {/* Mobile-only Sticky Bar */}
      <StickyCTA 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
      />

      {/* Modals */}
      {isQuoteModalOpen && <QuoteModal onClose={() => setIsQuoteModalOpen(false)} />}
      {isTrackingModalOpen && <TrackingModal onClose={() => setIsTrackingModalOpen(false)} />}
    </div>
  );
};

export default App;
