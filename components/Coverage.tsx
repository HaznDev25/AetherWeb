
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-slate-100 p-8 rounded-[3rem] border-8 border-white shadow-2xl relative overflow-hidden h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="text-center relative z-10">
                  <div className="bg-blue-600 p-6 rounded-full inline-block mb-6 shadow-2xl animate-pulse">
                    <Navigation className="text-white" size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Nationwide Network</h4>
                  <p className="text-slate-500">Operating in all 50 states with 250+ hubs</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Coverage Area</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Every Corner Covered</h3>
              <p className="text-lg text-slate-600 mb-8">We have established a vast network of logistics hubs and last-mile delivery partners to ensure your packages reach even the most remote locations.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="font-semibold text-slate-700">{city}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
              View Full Network Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
