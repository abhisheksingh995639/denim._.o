import React, { useState } from 'react';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-texture-denim text-sand-50 py-16 border-t-8 border-denim-900 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] relative">
      <div className="absolute inset-x-0 top-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4 md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <BrandLogo
                className="h-28 md:h-32 brightness-0 invert"
                textClassName="text-6xl text-sand-50"
                iconClassName="w-14 h-14 text-leather-500"
              />
            </a>
            <p className="font-body text-sand-200 max-w-sm leading-relaxed mb-8 font-medium drop-shadow-sm">
              Upcycled Denim Bags. Thoughtfully made from used denim. Fashion-first. Sustainability-led.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/denim._.o/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full skeuo-inset-dark flex items-center justify-center text-sand-200 hover:text-leather-500 transition-colors">
                <Instagram className="w-5 h-5 drop-shadow-sm" />
              </a>
              <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full skeuo-inset-dark flex items-center justify-center text-sand-200 hover:text-leather-500 transition-colors">
                <Mail className="w-5 h-5 drop-shadow-sm" />
              </a>
              <a href="tel:+919876543210" className="w-10 h-10 rounded-full skeuo-inset-dark flex items-center justify-center text-sand-200 hover:text-leather-500 transition-colors">
                <Phone className="w-5 h-5 drop-shadow-sm" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-lg mb-6 uppercase tracking-wider text-sand-300 drop-shadow-sm">Shop</h4>
            <ul className="space-y-4 font-body text-sand-200 font-medium">
              <li><a href="#" className="hover:text-leather-500 transition-colors drop-shadow-sm">Revive Pouch</a></li>
              <li><a href="#" className="hover:text-leather-500 transition-colors drop-shadow-sm">Nova Tote</a></li>
              <li><a href="#" className="hover:text-leather-500 transition-colors drop-shadow-sm">Orbit mini</a></li>
              <li><a href="#" className="hover:text-leather-500 transition-colors drop-shadow-sm">Loop Sleeve</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-lg mb-6 uppercase tracking-wider text-sand-300 drop-shadow-sm">Company</h4>
            <ul className="space-y-4 font-body text-sand-200 font-medium">
              <li><a href="#story" className="hover:text-leather-500 transition-colors drop-shadow-sm">Our Story</a></li>
              <li><a href="#impact" className="hover:text-leather-500 transition-colors drop-shadow-sm">Impact Tracker</a></li>
              <li><a href="#b2b" className="hover:text-leather-500 transition-colors drop-shadow-sm">Institutional Orders</a></li>
              <li><a href="#donate" className="hover:text-leather-500 transition-colors drop-shadow-sm">Donate Denim</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 md:col-span-2">
            <h4 className="font-sans font-bold text-lg mb-6 uppercase tracking-wider text-sand-300 drop-shadow-sm">Stay in the Loop</h4>
            <p className="font-body text-sand-200 mb-6 font-medium drop-shadow-sm">
              Subscribe to our newsletter for the latest upcycled drops and sustainability news.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-denim-900/50 text-sand-50 placeholder-sand-400/70 skeuo-inset-dark rounded-full py-3 pl-6 pr-14 outline-none focus:ring-2 focus:ring-leather-500 transition-all font-body"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square skeuo-btn-sand rounded-full flex items-center justify-center text-denim-900 hover:text-leather-600 hover:scale-110 hover:bg-sand-200 active:scale-95 transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm font-body text-leather-400 font-medium animate-pulse">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-dashed border-leather-500/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sand-300 text-sm font-medium drop-shadow-sm">
            &copy; {new Date().getFullYear()} Denim'O. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-body text-sand-300 font-medium">
            <a href="#" className="hover:text-sand-50 transition-colors drop-shadow-sm">Privacy Policy</a>
            <a href="#" className="hover:text-sand-50 transition-colors drop-shadow-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
