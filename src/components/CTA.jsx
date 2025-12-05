import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="border border-border-subtle rounded-2xl p-12 lg:p-16 text-center bg-surface-light"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 leading-tight">
            Ready to stop leaving money on the table?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's see how we can fix the issues that are holding you back from driving more revenue today!
          </p>
          <button
            className="bg-cta-bg text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-cta-hover transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
