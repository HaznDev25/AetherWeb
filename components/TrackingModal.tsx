
import React, { useState } from 'react';
import { X, Search, MapPin, CheckCircle, Package } from 'lucide-react';

interface TrackingModalProps {
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ onClose }) => {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        id: trackingId,
        status: 'In Transit',
        location: 'Chicago Distribution Center',
        updated: '2 hours ago',
        history: [
          { status: 'Out for delivery', time: 'Pending', done: false },
          { status: 'Arrived at hub', time: '10:45 AM', done: true },
          { status: 'In Transit', time: '06:30 AM', done: true },
          { status: 'Picked Up', time: 'Yesterday', done: true }
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom duration-300">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Track Your Shipment</h2>
          
          <form onSubmit={handleTrack} className="flex gap-2 mb-8">
            <input 
              type="text" 
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID (e.g. SW-12345)"
              className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:border-blue-600 focus:bg-white outline-none font-bold"
            />
            <button 
              disabled={isSearching}
              className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/20 disabled:opacity-50"
            >
              {isSearching ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Search size={24} />}
            </button>
          </form>

          {results && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex justify-between items-end pb-6 border-b">
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase mb-1">Status</div>
                  <div className="text-2xl font-black text-blue-600">{results.status}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-500 uppercase mb-1">Current Location</div>
                  <div className="text-lg font-bold text-slate-900">{results.location}</div>
                </div>
              </div>

              <div className="space-y-6">
                {results.history.map((h: any, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${h.done ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-300'}`}>
                        {h.done ? <CheckCircle size={18} /> : <Package size={18} />}
                      </div>
                      {i < results.history.length - 1 && <div className={`w-0.5 h-12 ${h.done ? 'bg-blue-600' : 'bg-slate-100'}`}></div>}
                    </div>
                    <div>
                      <div className={`font-bold ${h.done ? 'text-slate-900' : 'text-slate-400'}`}>{h.status}</div>
                      <div className="text-xs text-slate-500">{h.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {!results && !isSearching && (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <Package className="text-slate-200 mx-auto mb-4" size={64} />
              <p className="text-slate-400 font-medium px-8">Enter your tracking number above to see the real-time status of your package.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
