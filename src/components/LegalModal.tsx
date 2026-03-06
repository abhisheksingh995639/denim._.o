import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, BookOpen } from 'lucide-react';

type LegalType = 'privacy' | 'terms' | 'our-story' | null;

interface LegalModalProps {
    type: LegalType;
    isOpen: boolean;
    onClose: () => void;
}

export default function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
    if (!type) return null;

    const content = {
        privacy: {
            title: 'Privacy Policy',
            icon: <Shield className="w-6 h-6 text-leather-500" />,
            body: (
                <div className="space-y-4 text-denim-800/80 font-body">
                    <p>
                        At Denim'O, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">1. Information We Collect</h4>
                    <p>
                        We may collect personal information such as your name, email address, delivery address, and payment details when you place an order, donate denim, or subscribe to our newsletter.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">2. How We Use Your Information</h4>
                    <p>
                        The information we collect is used to process your orders, facilitate denim donations, send you important updates, and improve your overall experience with our platform.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">3. Data Security</h4>
                    <p>
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <p className="mt-8 text-sm italic">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            )
        },
        terms: {
            title: 'Terms of Service',
            icon: <FileText className="w-6 h-6 text-leather-500" />,
            body: (
                <div className="space-y-4 text-denim-800/80 font-body">
                    <p>
                        Welcome to Denim'O. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">1. Upcycled Products</h4>
                    <p>
                        Since our products are crafted from upcycled denim, each item is unique. Slight variations in color, texture, and distress are inherent to the upcycling process and should be expected.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">2. Denim Donations</h4>
                    <p>
                        By participating in our "Donate Denim" program, you represent that the items you are donating are your property. We reserve the right to decline items that do not meet our upcycling criteria.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6">3. Liability</h4>
                    <p>
                        Denim'O shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.
                    </p>
                    <p className="mt-8 text-sm italic">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            )
        },
        'our-story': {
            title: 'Our Story',
            icon: <BookOpen className="w-6 h-6 text-leather-500" />,
            body: (
                <div className="space-y-4 text-denim-800/80 font-body">
                    <h3 className="text-2xl font-sans font-bold text-denim-900 mb-4">The Denim'O Journey</h3>
                    <p className="leading-relaxed">
                        What started as a simple observation of overflowing wardrobes has evolved into a dedicated mission to give textiles a second, meaningful life. At Denim'O, we see the potential in what others consider waste.
                    </p>
                    <p className="leading-relaxed">
                        Denim is one of the most durable, versatile fabrics ever created. Yet, countless pairs of jeans end up in landfills every year. We set out to change that narrative by transforming post-consumer denim into high-quality, functional accessories.
                    </p>
                    <h4 className="font-bold text-denim-900 mt-6 text-lg">Our Philosophy</h4>
                    <p className="leading-relaxed">
                        Every bag we craft carries a unique history. The natural fades, the distinct distress marks, and the character of the original fabric means no two Denim'O bags are ever exactly alike. We celebrate these imperfections as marks of authenticity.
                    </p>
                    <p className="leading-relaxed">
                        By choosing Denim'O, you're not just buying a bag—you're participating in a circular economy, reducing water waste, and carrying a piece of sustainable fashion that makes a tangible impact.
                    </p>
                    <div className="mt-8 p-4 skeuo-inset rounded-xl bg-sand-100 flex items-center justify-center">
                        <p className="font-bold text-denim-900 text-center italic">"Fashion-first. Sustainability-led."</p>
                    </div>
                </div>
            )
        }
    };

    const { title, icon, body } = content[type];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-denim-900/60 backdrop-blur-sm z-[80]"
                    />
                    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full max-h-[85vh] max-w-2xl bg-texture-sand rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col skeuo-card"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-dashed border-leather-500/30 bg-sand-50/50 backdrop-blur-md sticky top-0 z-20">
                                <h2 className="font-sans font-bold text-2xl text-denim-900 flex items-center gap-3 drop-shadow-sm">
                                    {icon}
                                    {title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 skeuo-inset rounded-full text-denim-800 hover:text-leather-600 transition-colors bg-sand-50"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="overflow-y-auto w-full p-6 md:p-8">
                                {body}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
