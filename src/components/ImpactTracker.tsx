import { motion } from 'motion/react';
import { Droplets, Recycle, Leaf } from 'lucide-react';

export default function ImpactTracker() {
  return (
    <section id="impact" className="py-32 bg-texture-denim text-sand-50 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="absolute inset-x-0 bottom-0 h-1 border-b border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight drop-shadow-md">
              Denim lives forever. <br /> So we give it a second life.
            </h2>
            <p className="text-xl text-sand-200 font-body mb-12 leading-relaxed drop-shadow-sm font-medium">
              On your arm, not in the landfill. Fast fashion dumps a truckload of clothes every second — that's 92 million tons of solid waste every year. We're changing that.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="skeuo-card-dark p-8 rounded-3xl relative overflow-hidden group"
              >
                {/* Animated Water Drop SVG Background */}
                <motion.svg
                  className="absolute -bottom-4 -right-4 w-32 h-32 text-denim-600/20 group-hover:text-denim-600/40 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                  />
                </motion.svg>

                <div className="w-16 h-16 rounded-2xl skeuo-inset-dark flex items-center justify-center mb-6 relative z-10">
                  <Droplets className="w-8 h-8 text-denim-400 drop-shadow-sm" />
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="text-5xl font-sans font-bold text-sand-50 mb-2 relative z-10 drop-shadow-md"
                >
                  3,781
                </motion.p>
                <p className="text-sm font-body text-sand-300 uppercase tracking-wider font-bold relative z-10">Litres of Water / Pair</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="skeuo-card-dark p-8 rounded-3xl relative overflow-hidden group"
              >
                {/* Animated Recycle SVG Background */}
                <motion.svg
                  className="absolute -bottom-4 -right-4 w-32 h-32 text-denim-600/20 group-hover:text-denim-600/40 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0 }}
                    d="M7 15.32l-3.48-6.04A2 2 0 0 1 4 8a2 2 0 0 1 2-2h6.8"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    d="M17.3 14h-6.6a2 2 0 0 1-1.73-1L5.5 6.08"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                    d="m14.5 18 3.5-6.05a2 2 0 0 0 0-2L14.5 3.9"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                    d="m11 11.5 3.5 6.05a2 2 0 0 0 1.73 1H23"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                    d="M8 22h6.8a2 2 0 0 0 1.73-1L20 15"
                  />
                </motion.svg>

                <div className="w-16 h-16 rounded-2xl skeuo-inset-dark flex items-center justify-center mb-6 relative z-10">
                  <Recycle className="w-8 h-8 text-denim-400 drop-shadow-sm" />
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                  className="text-5xl font-sans font-bold text-sand-50 mb-2 relative z-10 drop-shadow-md"
                >
                  92M
                </motion.p>
                <p className="text-sm font-body text-sand-300 uppercase tracking-wider font-bold relative z-10">Tons of Waste / Yr</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative skeuo-card-dark p-3">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden skeuo-inset-dark relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="/images/pro (27).png"
                  alt="Upcycling Process"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-denim-900 via-denim-900/40 to-transparent opacity-90"></div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 md:p-3 skeuo-inset-dark rounded-xl md:rounded-2xl border border-denim-800">
                      <Leaf className="w-6 h-6 md:w-8 md:h-8 text-sand-200 drop-shadow-sm" />
                    </div>
                    <span className="font-sans font-bold text-2xl md:text-3xl text-sand-50 drop-shadow-md">Built to Last</span>
                  </div>
                  <p className="font-body text-sand-200 text-base md:text-lg leading-relaxed font-medium drop-shadow-sm">
                    The very first pair of jeans was made in 1873... and some are still around today. Denim was made to last.
                  </p>
                </div>
              </div>
            </div>

            {/* Spinning Circular Text Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ willChange: 'transform' }}
              className="absolute -top-6 -right-2 md:-top-12 md:-right-12 w-28 h-28 md:w-40 md:h-40 skeuo-leather-patch skeuo-stitch rounded-full flex items-center justify-center shadow-2xl z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="font-sans font-bold text-[13.5px] tracking-widest uppercase fill-sand-50">
                  <textPath href="#circlePath">
                    • 100% Upcycled • Eco Friendly
                  </textPath>
                </text>
              </svg>
              <Recycle className="absolute w-6 h-6 md:w-8 md:h-8 text-sand-100 drop-shadow-md" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background circles */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-denim-800 rounded-full blur-3xl -z-10 opacity-40"
      />
    </section>
  );
}
