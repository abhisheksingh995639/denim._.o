import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, setIsCheckoutOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-denim-900/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-sand-50 shadow-2xl z-50 flex flex-col border-l-8 border-denim-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dashed border-leather-500/30 bg-texture-sand">
              <h2 className="font-sans font-bold text-2xl text-denim-900 flex items-center gap-3 drop-shadow-sm">
                <ShoppingBag className="w-6 h-6 text-leather-500" />
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 skeuo-inset rounded-full text-denim-800 hover:text-leather-600 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-texture-sand">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-denim-800/60 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-50" />
                  <p className="font-body font-medium text-lg">Your cart is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="skeuo-btn-denim px-6 py-3 rounded-xl font-bold text-sand-50 mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id}
                    className="flex gap-4 p-4 skeuo-card rounded-2xl bg-sand-100"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden skeuo-inset flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3 className="font-sans font-bold text-lg text-denim-900 leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-leather-500 hover:text-leather-600 p-1 skeuo-inset rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="font-sans font-bold text-denim-900">
                          {item.price}
                        </div>

                        <div className="flex items-center gap-3 skeuo-inset px-2 py-1 rounded-lg bg-sand-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-leather-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-mono font-bold w-4 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-leather-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-texture-denim border-t-8 border-denim-900 text-sand-50 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-6 font-sans font-bold text-xl drop-shadow-sm">
                  <span>Total</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 skeuo-btn-sand rounded-xl font-bold text-denim-900 text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Place Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
