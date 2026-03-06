import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Eco-Conscious Shopper",
    content: "I absolutely love my Nova Tote! It's incredibly durable and knowing it's made from upcycled materials makes it even better. I get compliments on it all the time.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/150/150"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Coordinator",
    content: "We ordered 100 conference kits for our annual summit. The quality was outstanding, and our attendees appreciated the sustainable approach. Highly recommended for corporate events.",
    rating: 5,
    image: "https://picsum.photos/seed/michael/150/150"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Everyday User",
    content: "The Revive Pouch is my go-to for keeping my essentials organized. The craftsmanship is top-notch, and the denim texture feels so unique. It's a small change that feels good.",
    rating: 4,
    image: "https://picsum.photos/seed/priya/150/150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-texture-sand relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 border-t border-dashed border-leather-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <span className="inline-block px-4 py-2 rounded-full skeuo-inset text-denim-900 font-bold text-sm mb-6 uppercase tracking-widest drop-shadow-sm">
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-denim-900 mb-6 leading-tight drop-shadow-sm">
              Loved by People, <br className="hidden md:block" />
              <span className="text-denim-600 italic">Good for the Planet.</span>
            </h2>
            <p className="text-xl text-denim-800/80 font-body leading-relaxed font-medium drop-shadow-sm">
              Don't just take our word for it. Here's what our community has to say about their upcycled companions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ willChange: 'transform, opacity' }}
              className="skeuo-card p-8 md:p-10 rounded-[2.5rem] relative flex flex-col"
            >
              <div className="absolute -top-6 right-8 w-12 h-12 skeuo-inset rounded-full flex items-center justify-center text-leather-500 bg-sand-50">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-leather-500 fill-leather-500' : 'text-sand-300'}`}
                  />
                ))}
              </div>

              <p className="text-lg text-denim-800/90 font-body font-medium leading-relaxed mb-8 flex-grow italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-dashed border-leather-500/30">
                <div className="w-14 h-14 rounded-full overflow-hidden skeuo-inset shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-denim-900 text-lg drop-shadow-sm">{testimonial.name}</h4>
                  <p className="text-sm text-denim-600 font-body font-bold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
