import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Do you handle everything from branding to website and e-commerce development?',
    answer: 'Yes! We offer end-to-end services including branding, website design, development, and e-commerce solutions. Everything you need under one roof.',
  },
  {
    id: 2,
    question: 'What\'s your process for delivering a project?',
    answer: 'We start with a strategy session to understand your goals, then move through design, development, and revisions. You\'ll get regular updates every 24-48 hours throughout the process.',
  },
  {
    id: 3,
    question: 'How long does a typical project take?',
    answer: 'Most projects are completed within 2-4 weeks depending on complexity. Landing pages typically take 1-2 weeks, while full websites take 3-4 weeks.',
  },
  {
    id: 4,
    question: 'Do you provide marketing services as well?',
    answer: 'While we focus primarily on design and development, we do offer conversion copywriting and can recommend trusted marketing partners for ongoing campaigns.',
  },
  {
    id: 5,
    question: 'Do you build MVPs or just full-scale products?',
    answer: 'We build both! Whether you need a quick MVP to test your idea or a full-scale product, we can help you launch fast and iterate based on real user feedback.',
  },
  {
    id: 6,
    question: 'Do you provide post-launch support?',
    answer: 'Absolutely. We offer ongoing support and maintenance packages to keep your website updated, secure, and performing optimally after launch.',
  },
  {
    id: 7,
    question: 'What if I need ongoing updates and changes?',
    answer: 'We offer flexible retainer packages for clients who need regular updates, new features, or ongoing optimization work.',
  },
  {
    id: 8,
    question: 'Do you work with startups or only established businesses?',
    answer: 'We work with both! From early-stage startups to established enterprises, we tailor our approach to fit your stage and budget.',
  },
  {
    id: 9,
    question: 'What platforms do you build on?',
    answer: 'We build on modern, industry-standard platforms including React, Next.js, Shopify, WordPress, and Webflow—whatever best fits your needs and technical requirements.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-cta-bg transition-colors group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-semibold text-white group-hover:text-cta-bg transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 text-cta-bg">
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <p className="pb-6 text-base md:text-lg text-text-secondary leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-16"
        >
          Questions? We got answers.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-light border border-border-subtle rounded-2xl overflow-hidden"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
