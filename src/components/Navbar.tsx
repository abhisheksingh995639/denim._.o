import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { items, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full bg-texture-sand border-b-4 border-denim-800 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="absolute inset-x-0 bottom-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 bg-texture-sand">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <BrandLogo
                className="h-24 md:h-28"
                textClassName="text-4xl text-denim-900"
                iconClassName="w-12 h-12 text-denim-600"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-body font-bold text-denim-800">
            <a href="#shop" className="hover:text-denim-600 transition-colors drop-shadow-sm">Shop</a>
            <a href="#impact" className="hover:text-denim-600 transition-colors drop-shadow-sm">Impact</a>
            <a href="#b2b" className="hover:text-denim-600 transition-colors drop-shadow-sm">Institutional</a>
            <a href="#donate" className="hover:text-denim-600 transition-colors drop-shadow-sm">Donate Denim</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 skeuo-btn-sand rounded-full relative"
            >
              <ShoppingBag className="w-5 h-5 text-denim-900" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-denim-600 rounded-full border-2 border-sand-50 shadow-sm text-[10px] font-bold text-sand-50 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 skeuo-btn-sand rounded-full relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-denim-900" /> : <Menu className="w-5 h-5 text-denim-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-texture-sand border-b-4 border-denim-800 shadow-lg -z-10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col font-body font-bold text-denim-800">
              <a href="#shop" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-sand-200 transition-colors drop-shadow-sm">Shop</a>
              <a href="#impact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-sand-200 transition-colors drop-shadow-sm">Impact</a>
              <a href="#b2b" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-sand-200 transition-colors drop-shadow-sm">Institutional</a>
              <a href="#donate" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-sand-200 transition-colors drop-shadow-sm">Donate Denim</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
