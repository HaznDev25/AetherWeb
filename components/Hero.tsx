
import React from 'react';
import { ArrowRight, PackageSearch, Truck } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
  onTrackClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick, onTrackClick }) => {
  return (
    <section className="relative bg-gray-500 min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-900 -z-10">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-600/10 clip-path-slant opacity-30"></div>
        <img 
          src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRydWNrc3xlbnwwfHwwfHx8MA%3D%3D" 
          alt="Logistics background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left text-white space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sky-400 text-sm font-bold tracking-wider uppercase border border-white/20">
            <Truck size={16} /> Fast. Reliable. Secure.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Nationwide <br /> 
            <span className="text-blue-500">Delivery</span> You Can Trust.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 font-medium">
            From same-day local delivery to cross-country freight, we move your goods with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button 
              onClick={onQuoteClick}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group transition-all shadow-xl shadow-blue-500/20"
            >
              Request Pickup <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onTrackClick}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 flex items-center justify-center gap-2"
            >
              <PackageSearch size={22} /> Track Shipment
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-slate-400 text-sm">Daily Deliveries</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-slate-400 text-sm">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* Hero Image / Illustration Container */}
        <div className="relative hidden md:block">
          <div className="absolute -inset-4 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-20"></div>
          <div className="relative bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-700/50">
            <img 
              src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRydWNrc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Delivery person" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
             <div className="bg-sky-100 p-3 rounded-full text-blue-600">
                <PackageSearch size={24} />
             </div>
             <div>
                <div className="text-sm font-bold text-slate-900">Package Delivered!</div>
                <div className="text-xs text-slate-500">Just now in New York City</div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-path-slant {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
