
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, STATS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl text-center shadow-lg shadow-slate-200/50 border border-white">
              <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Trust</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative group">
                <Quote className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-200 transition-colors" size={64} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-blue-500 text-blue-500" />)}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-slate-50" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
