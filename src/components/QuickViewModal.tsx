import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  images?: string[];
  tag?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, product]);

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-denim-900/80 z-[60] transition-opacity"
            style={{ willChange: 'opacity' }}
          />
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ willChange: 'transform, opacity' }}
              className="w-full max-h-[90vh] max-w-4xl bg-sand-50 rounded-[2.5rem] shadow-2xl overflow-y-auto pointer-events-auto relative flex flex-col md:flex-row skeuo-card p-2"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 flex items-center justify-center skeuo-inset rounded-full text-denim-800 hover:text-leather-600 transition-colors bg-sand-50/80 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative rounded-[2rem] overflow-hidden skeuo-inset shrink-0 group">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, position: 'absolute' }}
                    transition={{ duration: 0.4 }}
                    src={images[currentImageIndex]}
                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-sand-50/70 backdrop-blur-sm text-denim-900 hover:bg-sand-50 hover:text-leather-600 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-sand-50/70 backdrop-blur-sm text-denim-900 hover:bg-sand-50 hover:text-leather-600 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === idx
                            ? 'bg-leather-500 w-6 skeuo-inset-dark'
                            : 'bg-sand-50/60 hover:bg-sand-50'
                            }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {product.tag && (
                  <span className="absolute top-4 left-4 md:top-6 md:left-6 z-10 skeuo-leather-patch skeuo-stitch text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg uppercase tracking-widest">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-texture-sand rounded-[2rem] ml-0 md:ml-2 mt-2 md:mt-0 relative z-10">
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
