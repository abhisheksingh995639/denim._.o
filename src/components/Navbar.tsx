import { ShoppingBag, Menu, Recycle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-texture-sand border-b-4 border-denim-800 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="absolute inset-x-0 bottom-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="flex items-center font-sans font-bold text-2xl tracking-tight text-denim-900 drop-shadow-sm">
              DENIM<span className="text-denim-600">'</span>O
              <Recycle className="w-6 h-6 ml-1 text-denim-600 drop-shadow-sm" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-body font-bold text-denim-800">
            <a href="#shop" className="hover:text-denim-600 transition-colors drop-shadow-sm">Shop</a>
            <a href="#impact" className="hover:text-denim-600 transition-colors drop-shadow-sm">Impact</a>
            <a href="#b2b" className="hover:text-denim-600 transition-colors drop-shadow-sm">Institutional</a>
            <a href="#donate" className="hover:text-denim-600 transition-colors drop-shadow-sm">Donate Denim</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 skeuo-btn-sand rounded-full relative">
              <ShoppingBag className="w-5 h-5 text-denim-900" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-denim-600 rounded-full border-2 border-sand-50 shadow-sm"></span>
            </button>
            <button className="md:hidden p-2 skeuo-btn-sand rounded-full">
              <Menu className="w-5 h-5 text-denim-900" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
