
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Logistics Solutions Designed for You</h3>
          <p className="text-lg text-slate-600">We offer a wide range of services to meet the demands of modern commerce and personal needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.iconName];
            return (
              <div 
                key={service.id}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <Icons.ChevronRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
