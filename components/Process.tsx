
import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Workflow</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple Steps to Deliver</h3>
          <p className="text-lg text-slate-600">Shipping with us is as easy as 1-2-3. We handle the heavy lifting while you stay focused on what matters.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-3xl text-3xl font-black mb-8 shadow-lg shadow-blue-500/20 rotate-3">
                  {item.step}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
