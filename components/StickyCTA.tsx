
import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface StickyCTAProps {
  onQuoteClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onQuoteClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 h-12">
        <a 
          href="tel:+1234567890" 
          className="flex-1 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-2 font-bold h-full text-sm"
        >
          <Phone size={18} /> Call
        </a>
        <a 
          href="https://wa.me/1234567890" 
          className="flex-1 bg-green-500 text-white rounded-xl flex items-center justify-center gap-2 font-bold h-full text-sm"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <button 
          onClick={onQuoteClick}
          className="flex-[2] bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 font-bold h-full shadow-lg shadow-blue-500/20 text-sm"
        >
          Get Quote <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
