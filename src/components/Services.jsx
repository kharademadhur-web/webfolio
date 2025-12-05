import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Website Design',
    subtitle: 'Turn your website into a 24/7 sales machine',
    description: 'Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger.',
  },
  {
    id: 2,
    title: 'E-Commerce',
    subtitle: 'Build an online store that actually makes sales',
    description: 'Pretty product photos mean nothing if your checkout scares customers away. We create e-commerce sites that reduce cart abandonment and turn browsers into buyers.',
  },
  {
    id: 3,
    title: 'Branding',
    subtitle: 'Look like you charge what you\'re worth',
    description: 'Generic brand = commodity pricing. We create visual identities that let you charge 2x-3x more than competitors selling the exact same thing.',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border-b border-border-subtle pb-12 last:border-b-0"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-white mb-3 tracking-[-0.2px]">
            {service.title}
          </h3>
        </div>
        <div className="space-y-4">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-white leading-[1.4] mb-4">
            {service.subtitle}
          </p>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#999999] leading-[1.5]">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] text-white font-bold leading-[1.2] tracking-[-0.3px] mb-10">
            Services
          </h2>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
