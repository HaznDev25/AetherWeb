
import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface QuoteModalProps {
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">Request Sent!</h2>
              <p className="text-slate-500">One of our experts will contact you within 30 minutes with a custom quote.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Get a Free Quote</h2>
              <p className="text-slate-500 mb-8">Tell us about your shipment and we'll give you the best price possible.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" required placeholder="+1 234..." className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Package Type</label>
                  <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none appearance-none">
                    <option>Standard Parcel</option>
                    <option>Fragile Items</option>
                    <option>Heavy Machinery</option>
                    <option>E-commerce Bulk</option>
                    <option>Documents</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pickup City</label>
                    <input type="text" required placeholder="e.g. New York" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Delivery City</label>
                    <input type="text" required placeholder="e.g. Dallas" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all">
                  Get My Quote <Send size={20} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
