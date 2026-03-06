import { motion } from 'motion/react';
import { Heart, Recycle, ArrowRight, Package, Send } from 'lucide-react';
import { getMailtoLink } from '../utils/mail';

export default function DonationCTA() {
  const donationSubject = "Denim Donation Inquiry";
  const donationBody = `Name: \r\nMobile No: \r\nCity: \r\nItems you wish to donate (e.g., 2 pairs of jeans, 1 denim jacket): \r\nPickup Address (If applicable): \r\n\r\nAdditional Details: `;
  const donationMailto = getMailtoLink('abhisheksingh9956390506@gmail.com', donationSubject, donationBody);

  return (
    <section id="donate" className="py-24 bg-texture-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square rounded-[3rem] overflow-hidden relative skeuo-card p-4"
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden skeuo-inset relative">
                <img
                  src="/images/pro (28).png"
                  alt="Donating Denim"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-denim-900/20 mix-blend-multiply pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Floating Package Animation */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-top-10 md:-right-10 skeuo-leather-patch skeuo-stitch p-4 md:p-6 rounded-2xl md:rounded-3xl z-20"
            >
              <Package className="w-8 h-8 md:w-12 md:h-12 drop-shadow-md" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeuo-inset text-denim-800 font-bold text-sm mb-8 drop-shadow-sm">
              <Heart className="w-4 h-4 text-denim-600 drop-shadow-sm" />
              <span>Join the Movement</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-denim-900 mb-6 leading-tight drop-shadow-sm">
              Love Your Denim? <br />
              <span className="text-denim-600 italic drop-shadow-md">Pass It On.</span>
            </h2>

            <p className="text-xl text-denim-800/80 font-body mb-12 leading-relaxed font-medium drop-shadow-sm">
              Your old jeans hold the potential for new stories. Donate your worn-out denim and help us create sustainable, functional accessories while reducing textile waste.
            </p>

            <div className="space-y-10 mb-12 relative">
              {/* Animated Dashed Line connecting steps */}
              <div className="absolute left-6 top-12 bottom-12 w-0.5 border-l-2 border-dashed border-leather-500 -z-10">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  className="w-full bg-leather-500"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-full skeuo-card flex items-center justify-center shrink-0 relative z-10 border-2 border-sand-200">
                  <Package className="w-5 h-5 text-denim-600 drop-shadow-sm" />
                </div>
                <div className="pt-2">
                  <h4 className="font-sans font-bold text-2xl text-denim-900 mb-2 drop-shadow-sm">Pack It Up</h4>
                  <p className="font-body text-lg text-denim-800/80 font-medium">Gather your old, clean denim items. Jeans, jackets, skirts—we accept them all.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-full skeuo-btn-denim flex items-center justify-center shrink-0 relative z-10">
                  <Send className="w-5 h-5 text-sand-50 drop-shadow-sm" />
                </div>
                <div className="pt-2">
                  <h4 className="font-sans font-bold text-2xl text-denim-900 mb-2 drop-shadow-sm">Send It In</h4>
                  <p className="font-body text-lg text-denim-800/80 font-medium">Ship it to our workshop or drop it off at one of our partner locations.</p>
                </div>
              </motion.div>
            </div>

            <a href={donationMailto} className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 skeuo-btn-denim text-sand-50 rounded-full font-bold text-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Donate Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-sand-300/40 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
