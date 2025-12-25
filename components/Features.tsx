
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8">The Benchmark for Speed and Reliability</h3>
            <p className="text-lg text-slate-400 mb-12">We don't just move boxes; we move your business forward with commitment and industry-leading technology.</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`shrink-0 ${item.color}`}>
                    <item.Icon size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/5 rounded-full animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
              alt="Logistics Technology" 
              className="relative w-full h-auto rounded-[3rem] shadow-2xl z-10"
            />
            {/* Overlay Stat */}
            <div className="absolute top-1/2 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 text-slate-900 hidden sm:block">
              <div className="text-4xl font-extrabold text-blue-600">100%</div>
              <div className="text-sm font-bold text-slate-500">Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
