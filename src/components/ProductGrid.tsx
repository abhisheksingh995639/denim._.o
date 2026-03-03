import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useRef } from 'react';

const products = [
  {
    id: 'revival',
    name: 'Revival Pouch',
    description: 'Small in size. Not in purpose. 7" everyday carry. Zipped. Flexible. Easy to hold.',
    price: '₹99',
    image: 'https://picsum.photos/seed/pouch/800/1000',
    tag: 'Best Seller'
  },
  {
    id: 'tote',
    name: "Denim'O Tote",
    description: 'This bag had a life before this. An inside pocket, for the things you reach for first. Designed for everyday.',
    price: '₹499',
    image: 'https://picsum.photos/seed/tote/800/1000',
    tag: 'New Arrival'
  },
  {
    id: 'conference',
    name: 'Conference Kit Bag',
    description: 'Custom branded upcycled bags for events and institutions. Shaping Future Ready Managers.',
    price: 'Custom',
    image: 'https://picsum.photos/seed/sleeve/800/1000'
  },
  {
    id: 'classic',
    name: 'Classic Denim Tote',
    description: 'Every Denim\'O tote begins as lived-in denim... no two ever turn out the same.',
    price: '₹399',
    image: 'https://picsum.photos/seed/mini/800/1000'
  }
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="shop" ref={sectionRef} className="py-32 bg-texture-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity, willChange: 'transform, opacity' }}
          className="text-center max-w-2xl mx-auto mb-24 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-denim-900 mb-6 tracking-tight drop-shadow-sm">
            Upcycled.<br/><span className="text-denim-600 italic">Everyday.</span>
          </h2>
          <p className="text-xl text-denim-800/80 font-body font-medium">
            For the small things that move with you. Each piece is unique, crafted from reclaimed denim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const cardY = useTransform(
              scrollYProgress, 
              [0, 1], 
              isEven ? [50, -100] : [150, -200]
            );

            return (
              <motion.div 
                key={product.id}
                style={{ y: cardY, willChange: 'transform' }}
                className={`group relative flex flex-col ${isEven ? 'md:mt-0' : 'md:mt-32'}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] skeuo-card p-3 mb-8">
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
                      <span className="absolute top-6 left-6 skeuo-leather-patch skeuo-stitch text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-widest">
                        {product.tag}
                      </span>
                    )}

                    <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <button className="w-full flex items-center justify-center gap-2 py-4 skeuo-btn-denim text-sand-50 rounded-xl font-bold transition-all duration-300">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-4 px-4">
                  <div>
                    <h3 className="font-sans font-bold text-3xl text-denim-900 mb-3 group-hover:text-denim-600 transition-colors duration-300 drop-shadow-sm">
                      {product.name}
                    </h3>
                    <p className="font-body text-lg text-denim-800/80 max-w-sm leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-2xl text-denim-900 skeuo-inset px-4 py-2 rounded-xl border border-sand-300 shadow-sm">
                    {product.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
