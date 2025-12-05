import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { RefreshCw, Zap, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'We offer unlimited revisions for a set period to ensure the best results.',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Fast Turnaround Time',
    description: 'Quick execution with updates every 24 to 48 hours and a smooth communication flow.',
  },
  {
    id: 3,
    icon: Users,
    title: 'Everything, one team',
    description: 'Branding, websites and e-commerce, all under one roof. One team, zero hassle.',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface-light border border-border-subtle rounded-2xl p-10 hover:border-white/20 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-surface-lighter rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-cta-bg" />
      </div>
      <h3 className="text-[18px] md:text-[19px] lg:text-[20px] text-white font-semibold mb-3 leading-[1.3]">{feature.title}</h3>
      <p className="text-[13px] md:text-[13.5px] lg:text-[14px] text-[#AAAAAA] leading-[1.5]">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-16"
        >
          Why you'll love us
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
