
import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Truck size={24} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SWIFT<span className="text-blue-600">MOVE</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Pioneering modern logistics with a focus on speed, safety, and customer satisfaction. Your package, our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-600">Our Services</a></li>
              <li><a href="#coverage" className="hover:text-blue-600">Global Coverage</a></li>
              <li><a href="#" className="hover:text-blue-600">Tracking Portal</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-600">News & Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 shrink-0" size={20} />
                <span>123 Logistics Way, Suite 500, <br /> San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <span>+1 (800) SWIFT-MOVE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <span>hello@swiftmove.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} SwiftMove Logistics Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
