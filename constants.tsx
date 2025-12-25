
import React from 'react';
import { Truck, Package, Globe, Building2, Zap, ShieldCheck, MapPin, BadgeDollarSign } from 'lucide-react';
import { Service, Testimonial, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Same-Day Delivery',
    description: 'Get your urgent parcels delivered within hours across major city centers.',
    iconName: 'Zap'
  },
  {
    id: 's2',
    title: 'Interstate Shipping',
    description: 'Seamless logistics connecting states with our robust long-haul fleet.',
    iconName: 'Globe'
  },
  {
    id: 's3',
    title: 'E-commerce Fulfillment',
    description: 'Tailored solutions for online stores, from storage to last-mile delivery.',
    iconName: 'Package'
  },
  {
    id: 's4',
    title: 'Bulk & Business',
    description: 'Heavy-duty transport and scheduled logistics for corporate needs.',
    iconName: 'Building2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'E-commerce Owner',
    content: 'SwiftMove has transformed our customer satisfaction with their lightning-fast deliveries. Truly reliable!',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Operations Manager',
    content: 'The real-time tracking is a game-changer. We always know exactly where our bulk shipments are.',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  }
];

export const STATS: Stat[] = [
  { label: 'Deliveries Done', value: '500k', suffix: '+' },
  { label: 'Active Trucks', value: '1,200', suffix: '' },
  { label: 'Happy Clients', value: '15k', suffix: '+' },
  { label: 'Cities Covered', value: '250', suffix: '' }
];

export const WHY_CHOOSE_US = [
  { title: 'Fast Delivery', desc: 'Optimized routing for the quickest turnarounds.', Icon: Zap, color: 'text-sky-500' },
  { title: 'Real-time Tracking', desc: 'Monitor your package from pickup to doorstep.', Icon: MapPin, color: 'text-blue-500' },
  { title: 'Affordable Pricing', desc: 'Transparent costs with no hidden fees.', Icon: BadgeDollarSign, color: 'text-emerald-500' },
  { title: 'Secure Handling', desc: 'Fragile or bulky, we handle with utmost care.', Icon: ShieldCheck, color: 'text-blue-700' }
];

export const STEPS = [
  { step: '01', title: 'Request Pickup', desc: 'Use our app or website to schedule a collection.' },
  { step: '02', title: 'Package Collected', desc: 'Our courier arrives at your doorstep on time.' },
  { step: '03', title: 'Delivered Safely', desc: 'Package reaches its destination securely.' }
];
