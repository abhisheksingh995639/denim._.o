import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import React, { useState } from 'react';

export default function CheckoutModal() {
    const { isCheckoutOpen, setIsCheckoutOpen, clearCart, cartTotal, items } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const cartText = items.map(item => `- ${item.quantity}x ${item.name} (${item.price})`).join('\n');
        
        const emailBody = `Hello DenimO Team,

I would like to place an order for the following items:

${cartText}

Total Amount: ₹${cartTotal.toFixed(2)}

Delivery Details:
Name: ${data.name}
Mobile: ${data.mobile}
${data.altMobile ? `Alt Mobile: ${data.altMobile}\n` : ''}Email: ${data.email}

Address:
${data.flat}, ${data.building}
${data.road}, ${data.landmark}
${data.city} - PIN: ${data.pincode}

Looking forward to receiving my order!

Thank you,
${data.name}`;

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=orders@denimo.com&su=${encodeURIComponent(`New Order from ${data.name}`)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open Gmail compose link in a new tab
        window.open(mailtoLink, '_blank');

        // Simulate success
        setTimeout(() => {
            setIsSubmitting(false);
            setOrderPlaced(true);
            clearCart();

            // Auto close after success
            setTimeout(() => {
                // Only auto close if they haven't manually closed it already
                setIsCheckoutOpen(false);
                // Reset state after close animation finishes
                setTimeout(() => setOrderPlaced(false), 500);
            }, 8000);
        }, 1500);
    };

    const handleClose = () => {
        if (!isSubmitting) {
            setIsCheckoutOpen(false);
            setTimeout(() => setOrderPlaced(false), 500);
        }
    };

    return (
        <AnimatePresence>
            {isCheckoutOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-denim-900/60 backdrop-blur-sm z-[70]"
                    />
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full max-h-[90vh] max-w-2xl bg-texture-sand rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col skeuo-card"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-dashed border-leather-500/30 bg-sand-50/50 backdrop-blur-md sticky top-0 z-20">
                                <h2 className="font-sans font-bold text-2xl text-denim-900 flex items-center gap-3 drop-shadow-sm">
                                    <Truck className="w-6 h-6 text-leather-500" />
                                    Delivery Details
                                </h2>
                                {!isSubmitting && (
                                    <button
                                        onClick={handleClose}
                                        className="p-2 skeuo-inset rounded-full text-denim-800 hover:text-leather-600 transition-colors bg-sand-50"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            <div className="overflow-y-auto w-full">
                                {orderPlaced ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center p-12 text-center h-[50vh]"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-inner">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold font-sans text-denim-900 mb-4">Order Confirmed!</h3>
                                        <p className="text-denim-800/80 font-body text-lg leading-relaxed max-w-md mx-auto">
                                            We've received your details! Our team will review the stock and send a payment link/confirmation to your email within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                                        {/* Personal Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold tracking-widest uppercase text-leather-500 mb-2">Personal Information</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1.5 md:col-span-2">
                                                    <label htmlFor="name" className="text-sm font-bold text-denim-900 ml-1">Full Name</label>
                                                    <input required type="text" id="name" name="name" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="mobile" className="text-sm font-bold text-denim-900 ml-1">Mobile No.</label>
                                                    <input required type="tel" id="mobile" name="mobile" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="+91 98765 43210" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="email" className="text-sm font-bold text-denim-900 ml-1">Email</label>
                                                    <input required type="email" id="email" name="email" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="john@example.com" />
                                                </div>
                                                <div className="space-y-1.5 md:col-span-2">
                                                    <label htmlFor="altMobile" className="text-sm font-bold text-denim-900 ml-1">Alt Mobile No. <span className="text-denim-900/40 font-normal">(Optional)</span></label>
                                                    <input type="tel" id="altMobile" name="altMobile" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="+91" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-denim-900/10"></div>

                                        {/* Address Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold tracking-widest uppercase text-leather-500 mb-2">Delivery Address</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1.5 md:col-span-2">
                                                    <label htmlFor="flat" className="text-sm font-bold text-denim-900 ml-1">Flat/House No & Floor</label>
                                                    <input required type="text" id="flat" name="flat" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. Flat 402, 4th Floor" />
                                                </div>
                                                <div className="space-y-1.5 md:col-span-2">
                                                    <label htmlFor="building" className="text-sm font-bold text-denim-900 ml-1">Building/Society</label>
                                                    <input required type="text" id="building" name="building" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. Sunshine Apartments" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="road" className="text-sm font-bold text-denim-900 ml-1">Road/Colony</label>
                                                    <input required type="text" id="road" name="road" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. MG Road" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="landmark" className="text-sm font-bold text-denim-900 ml-1">Landmark</label>
                                                    <input required type="text" id="landmark" name="landmark" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. Near Metro Station" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="city" className="text-sm font-bold text-denim-900 ml-1">City & State</label>
                                                    <input required type="text" id="city" name="city" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. Mumbai, Maharashtra" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="pincode" className="text-sm font-bold text-denim-900 ml-1">PIN Code</label>
                                                    <input required type="text" id="pincode" name="pincode" className="w-full bg-sand-100 text-denim-900 placeholder:text-denim-900/40 rounded-xl px-4 py-3 skeuo-inset border-none focus:ring-2 focus:ring-leather-500/50 outline-none transition-all font-body font-medium" placeholder="E.g. 400001" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-denim-900/10"></div>

                                        {/* Order Summary */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold tracking-widest uppercase text-leather-500 mb-2">Order Summary</h3>
                                            <div className="space-y-3">
                                                {items.map((item) => (
                                                    <div key={item.id} className="flex items-center gap-4 p-3 bg-sand-100 rounded-xl skeuo-inset">
                                                        <div className="w-16 h-16 rounded-lg overflow-hidden skeuo-inset flex-shrink-0">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-sans font-bold text-denim-900">{item.name}</h4>
                                                            <p className="text-sm text-denim-800/80 font-body font-medium">Qty: {item.quantity}</p>
                                                        </div>
                                                        <div className="font-sans font-bold text-denim-900 pr-2">
                                                            {item.price}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-8 mt-4 border-t border-dashed border-leather-500/30">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-4 skeuo-btn-denim text-sand-50 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'opacity-80 pointer-events-none' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                                            >
                                                {isSubmitting ? 'Processing...' : `Confirm Order • ₹${cartTotal.toFixed(2)}`}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
