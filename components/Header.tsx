
import React, { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';

interface HeaderProps {
  onTrackClick: () => void;
  onQuoteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTrackClick, onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Truck size={24} />
          </div>
          <span className={`text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            SWIFT<span className="text-blue-600"></span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-600`}>Services</a>
          <a href="#coverage" className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-600`}>Coverage</a>
          <button 
            onClick={onTrackClick}
            className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-600 font-semibold`}
          >
            Track
          </button>
          <button 
            onClick={onQuoteClick}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold py-2 border-b">Services</a>
          <a href="#coverage" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold py-2 border-b">Coverage</a>
          <button onClick={() => { onTrackClick(); setIsMobileMenuOpen(false); }} className="text-left text-lg font-semibold py-2 border-b">Track Shipment</button>
          <button onClick={() => { onQuoteClick(); setIsMobileMenuOpen(false); }} className="bg-blue-600 text-white py-4 rounded-xl font-bold text-center mt-2">Request Quote</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
