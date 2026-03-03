import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-denim-900/60 backdrop-blur-sm z-[60]"
          />
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-h-[90vh] max-w-4xl bg-sand-50 rounded-[2.5rem] shadow-2xl overflow-y-auto pointer-events-auto relative flex flex-col md:flex-row skeuo-card p-2"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 skeuo-inset rounded-full text-denim-800 hover:text-leather-600 transition-colors bg-sand-50/80 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative rounded-[2rem] overflow-hidden skeuo-inset shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 md:top-6 md:left-6 skeuo-leather-patch skeuo-stitch text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg uppercase tracking-widest">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-texture-sand rounded-[2rem] ml-0 md:ml-2 mt-2 md:mt-0">
                <h2 className="text-2xl md:text-4xl font-sans font-bold text-denim-900 mb-3 md:mb-4 drop-shadow-sm pr-10 md:pr-0">
                  {product.name}
                </h2>
                <p className="text-xl md:text-2xl font-sans font-bold text-denim-900 mb-4 md:mb-6 skeuo-inset px-4 py-2 rounded-xl inline-block self-start border border-sand-300 shadow-sm">
                  {product.price}
                </p>
                <div className="w-full h-px bg-denim-900/10 mb-4 md:mb-6"></div>
                <p className="text-base md:text-lg text-denim-800/80 font-body font-medium leading-relaxed mb-6 md:mb-8">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <button
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      });
                      onClose();
                    }}
                    className="w-full flex items-center justify-center py-3 md:py-4 skeuo-btn-denim text-sand-50 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Add to Bag"
                  >
                    <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
