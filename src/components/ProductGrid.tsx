import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import QuickViewModal from './QuickViewModal';

const products = [
  {
    id: 'revive-pouch',
    name: 'Revive Pouch',
    description: 'A compact utility pouch built for organization on the go. Designed to hold essentials with ease, it combines structured stitching with soft denim character for practical, everyday carry.',
    price: '₹99',
    image: '/images/pro (11).png',
    images: ['/images/pro (11).png', '/images/pro (3).png', '/images/pro (10).png'],
    tag: 'Best Seller'
  },
  {
    id: 'nova-tote',
    name: 'Nova Tote',
    description: 'A structured everyday tote crafted from upcycled denim. Designed for versatility, it balances durability with a refined silhouette, making it ideal for work, travel, and daily essentials. Thoughtfully made, effortlessly functional.',
    price: '₹299',
    image: '/images/pro (16).png',
    images: ['/images/pro (16).png', '/images/pro (17).png', '/images/pro (18).png'],
    tag: 'New Arrival'
  },
  {
    id: 'loop-sleeve',
    name: 'Loop Sleeve',
    description: 'A sleek protective sleeve tailored for laptops and documents. Minimal in form yet durable in construction, it delivers everyday utility with a clean, modern edge. With a refined silhouette, making it ideal for work, travel, and daily essentials. Thoughtfully made, effortlessly functional.',
    price: '₹399',
    image: '/images/pro (15).png',
    images: ['/images/pro (15).png', '/images/pro (13).png', '/images/pro (14).png']
  },
  {
    id: 'orbit-mini',
    name: 'Orbit mini',
    description: 'A compact pencil and brush pouch designed for practical storage. Durable, lightweight, and easy to carry, it keeps everyday essentials neatly organized.',
    price: '₹49',
    image: '/images/pro (22).png',
    images: ['/images/pro (22).png', '/images/pro (20).png', '/images/pro (23).png']
  }
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="shop" ref={sectionRef} className="py-20 md:py-32 bg-texture-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: isMobile ? 0 : headerY, opacity: isMobile ? 1 : headerOpacity, willChange: 'transform, opacity' }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-denim-900 mb-6 tracking-tight drop-shadow-sm">
            Upcycled.<br /><span className="text-denim-600 italic">Everyday.</span>
          </h2>
          <p className="text-lg md:text-xl text-denim-800/80 font-body font-medium">
            For the small things that move with you. Each piece is unique, crafted from reclaimed denim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const cardY = useTransform(
              scrollYProgress,
              [0, 1],
              isEven ? [25, -50] : [75, -100]
            );

            return (
              <motion.div
                key={product.id}
                style={{ y: isMobile ? 0 : cardY, willChange: 'transform' }}
                className={`group relative flex flex-col cursor-pointer ${isEven ? 'md:mt-0' : 'md:mt-20'}`}
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] skeuo-card p-3 mb-6 md:mb-8">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden skeuo-inset relative">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-90"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-denim-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {product.tag && (
                      <span className="absolute top-4 left-4 md:top-6 md:left-6 skeuo-leather-patch skeuo-stitch text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg uppercase tracking-widest">
                        {product.tag}
                      </span>
                    )}

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image
                          });
                        }}
                        className="flex items-center justify-center p-3 md:p-4 skeuo-btn-denim text-sand-50 rounded-xl md:rounded-2xl font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                        aria-label="Add to Bag"
                      >
                        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 px-2 md:px-4 gap-4">
                  <div>
                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-denim-900 mb-2 md:mb-3 group-hover:text-denim-600 transition-colors duration-300 drop-shadow-sm">
                      {product.name}
                    </h3>
                    <p className="font-body text-base md:text-lg text-denim-800/80 max-w-sm leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-xl md:text-2xl text-denim-900 skeuo-inset px-4 py-2 rounded-xl border border-sand-300 shadow-sm whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
