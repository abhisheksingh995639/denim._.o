import { motion } from 'motion/react';
import { ArrowRight, Droplets, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FloatingShape = ({ delay, duration, className, children }: { delay: number, duration: number, className: string, children: React.ReactNode }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    style={{ willChange: 'transform' }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const { addToCart } = useCart();

  return (
    <section className="relative overflow-hidden bg-texture-sand pt-16 pb-32 md:pt-24 md:pb-40">
      {/* Animated Background Shapes */}
      <FloatingShape delay={0} duration={8} className="top-20 left-10 text-denim-200/40 -z-10 drop-shadow-lg">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.7,145.1C27.2,126.6,18.1,99.9,25.4,75.4C32.7,50.9,56.4,28.6,81.8,20.8C107.2,13,134.4,19.7,152.9,38.2C171.4,56.7,180.5,83.4,173.2,107.9C165.9,132.4,142.2,154.7,116.8,162.5C91.4,170.3,64.2,163.6,45.7,145.1Z" />
        </svg>
      </FloatingShape>
      <FloatingShape delay={2} duration={10} className="bottom-40 right-10 text-sand-300/50 -z-10 drop-shadow-lg">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M154.1,45.9C172.6,64.4,181.7,91.1,174.4,115.6C167.1,140.1,143.4,162.4,118,170.2C92.6,178,65.4,171.3,46.9,152.8C28.4,134.3,19.3,107.6,26.6,83.1C33.9,58.6,57.6,36.3,83,28.5C108.4,20.7,135.6,27.4,154.1,45.9Z" />
        </svg>
      </FloatingShape>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeuo-inset text-denim-800 font-bold text-sm mb-6 md:mb-8"
            >
              <Droplets className="w-4 h-4 text-denim-600 drop-shadow-sm" />
              <span className="drop-shadow-sm">Saved 3781+ litres of water</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-sans font-bold text-denim-900 leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              Not all bags are new. <br />
              <span className="text-denim-600 italic relative inline-block drop-shadow-md">
                Some are reimagined.
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-leather-500 animate-pulse drop-shadow-md" />
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-denim-800/90 font-body mb-8 md:mb-10 leading-relaxed max-w-lg drop-shadow-sm font-medium">
              Woven from waste. Stitched with soul. Fashion that speaks softly — but with purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 skeuo-btn-denim text-sand-50 rounded-full font-bold text-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#story" className="inline-flex items-center justify-center gap-2 px-8 py-4 skeuo-btn-sand text-denim-900 rounded-full font-bold text-lg">
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Continuous floating animation for the image container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
              className="aspect-square rounded-[3rem] overflow-hidden relative skeuo-card p-3"
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden skeuo-inset relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/images/pro (8).png"
                  alt="Upcycled Denim Bag"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-denim-900/30 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 left-2 sm:-left-6 skeuo-leather-patch skeuo-stitch p-4 sm:p-6 rounded-2xl max-w-[16rem] sm:max-w-xs z-20 cursor-pointer group"
              onClick={() => addToCart({
                id: 'revive-pouch',
                name: 'Revive Pouch',
                price: '₹99',
                image: '/images/pro (11).png'
              })}
            >
              <p className="font-sans font-bold text-sand-50 text-lg sm:text-xl mb-1 flex items-center justify-between">
                Revive Pouch
                <ShoppingBag className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="font-body text-sand-100/90 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">A compact utility pouch built for organization on the go. Designed to hold essentials with ease, it combines structured stitching with soft denim character for practical, everyday carry.</p>
              <p className="font-sans font-bold text-sand-50 text-base sm:text-lg">₹99</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-texture-denim py-4 border-y-4 border-denim-900 shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-x-0 top-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
        <div className="absolute inset-x-0 bottom-0 h-1 border-b border-dashed border-leather-500 opacity-50"></div>
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="flex whitespace-nowrap text-sand-50 font-sans font-bold text-lg tracking-widest uppercase items-center drop-shadow-md"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">REDUCE</span>
              <span className="w-3 h-3 rounded-full skeuo-inset bg-denim-400 mx-2"></span>
              <span className="mx-6">REUSE</span>
              <span className="w-3 h-3 rounded-full skeuo-inset bg-denim-400 mx-2"></span>
              <span className="mx-6">RECYCLE</span>
              <span className="w-3 h-3 rounded-full skeuo-inset bg-denim-400 mx-2"></span>
              <span className="mx-6 text-leather-500">REIMAGINE</span>
              <span className="w-3 h-3 rounded-full skeuo-inset bg-denim-400 mx-2"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
