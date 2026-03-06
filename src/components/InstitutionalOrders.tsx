import { motion } from 'motion/react';
import { Briefcase, ShieldCheck, Truck, Building2 } from 'lucide-react';
import { getMailtoLink } from '../utils/mail';

export default function InstitutionalOrders() {
  const b2bSubject = "B2B Quote Request";
  const b2bBody = `Organization/Company Name: \r\nContact Person: \r\nMobile No: \r\nEmail: \r\nProduct Category (e.g., Conference Kits, Event Bags): \r\nEstimated Quantity: \r\nExpected Delivery Date: \r\nDelivery Location (City/State): \r\n\r\nAdditional Requirements/Details: `;
  const b2bMailto = getMailtoLink('abhisheksingh9956390506@gmail.com', b2bSubject, b2bBody);

  return (
    <section id="b2b" className="py-32 bg-texture-sand relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <span className="inline-block px-4 py-2 rounded-full skeuo-inset text-denim-900 font-bold text-sm mb-6 uppercase tracking-widest drop-shadow-sm">
              Denim'O Presents
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-denim-900 mb-6 leading-tight drop-shadow-sm">
              Crafted for Institutions, Trusted for Impact.
            </h2>
            <p className="text-xl text-denim-800/80 font-body leading-relaxed font-medium drop-shadow-sm">
              We supply high-quality, upcycled conference kits and bulk orders for organizations that care about their environmental footprint.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
            className="skeuo-card p-8 rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto skeuo-inset rounded-2xl flex items-center justify-center mb-6 text-denim-600">
              <Briefcase className="w-8 h-8 drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-denim-900 mb-3 drop-shadow-sm">Premium Quality</h3>
            <p className="text-denim-800/80 font-body font-medium">Durable, stylish, and functional bags designed for professional use.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
            className="skeuo-card p-8 rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto skeuo-inset rounded-2xl flex items-center justify-center mb-6 text-denim-600">
              <ShieldCheck className="w-8 h-8 drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-denim-900 mb-3 drop-shadow-sm">Reliable Service</h3>
            <p className="text-denim-800/80 font-body font-medium">Consistent quality and timely delivery for events of any scale.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
            className="skeuo-card p-8 rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto skeuo-inset rounded-2xl flex items-center justify-center mb-6 text-denim-600">
              <Truck className="w-8 h-8 drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-denim-900 mb-3 drop-shadow-sm">Bulk Fulfillment</h3>
            <p className="text-denim-800/80 font-body font-medium">Capacity to handle large orders with streamlined logistics.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ willChange: 'transform, opacity' }}
          className="skeuo-card-dark rounded-[3rem] p-10 md:p-16 text-center text-sand-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-texture-denim opacity-50 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-sans font-bold mb-8 drop-shadow-md">
              Now fulfilling Institutional Orders through GeM
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-4 skeuo-inset-dark px-8 py-4 rounded-2xl">
                <Building2 className="w-8 h-8 text-sand-200 drop-shadow-sm" />
                <div className="text-left">
                  <p className="text-sm text-sand-300 font-body uppercase tracking-wider font-bold">Recent Milestone</p>
                  <p className="text-xl font-sans font-bold drop-shadow-md">55 Conference Kits Supplied</p>
                </div>
              </div>
              <div className="text-left max-w-xs">
                <p className="text-sand-200 font-body italic font-medium drop-shadow-sm">
                  "Conference on Tourism Technology and Talent: Shaping Future Ready Managers"
                </p>
              </div>
            </div>
            <a href={b2bMailto} className="inline-block skeuo-btn-sand text-denim-900 px-8 py-4 rounded-full font-bold text-lg">
              Request a B2B Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
