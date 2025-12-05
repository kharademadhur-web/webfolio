import { motion } from 'framer-motion';

const clientLogos = [
  'ApDes Studio',
  'AE Creatives',
  'View Convert',
  'Wassup Media',
  'Trans & Log',
  'Outlier Labs',
  'Nexchain AI',
  'FO Management',
  'Ella AI',
  'Khushiva',
  'Ninja WB',
  'Prestige',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-24 px-6 lg:px-12 flex items-center">
      {/* Subtle Background Glow - Right Side */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cta-bg/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-8"
        >
          {/* Main Headline - Left Aligned */}
          <motion.h1
            variants={itemVariants}
            className="text-[59px] font-bold text-white leading-[70px] tracking-[-0.5px]"
            style={{ fontFamily: '"Inter Display", "Inter", sans-serif' }}
          >
            We help businesses unlock more
            <br />
            revenue with strategy-led websites
          </motion.h1>

          {/* Subtext - Left Aligned */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] md:text-[17px] lg:text-[18px] text-[#CCCCCC] leading-[1.6] max-w-2xl mt-4 mb-6"
          >
            Your website should print money, not collect dust. We build conversion-focused
            sites that turn visitors into customers in 4 weeks or less.
          </motion.p>

          {/* CTA Button - Left Aligned */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              className="bg-cta-bg text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-cta-hover transition-all duration-300 hover:scale-105 shadow-lg shadow-cta-bg/20"
              onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Strategy Call
            </button>
          </motion.div>

          {/* Client Logos Section - Left Aligned */}
          <motion.div variants={itemVariants} className="pt-12">
            <p className="text-sm font-medium text-text-secondary mb-6">
              Trusted by 32+ agencies, startups, and founders worldwide
            </p>

            {/* Client Logos Grid - 2 Rows, Left Aligned */}
            <div className="space-y-4">
              {/* First Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {clientLogos.slice(0, 5).map((name, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-base font-semibold text-white hover:text-cta-bg transition-colors cursor-default"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {clientLogos.slice(5, 12).map((name, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    className="text-base font-semibold text-white hover:text-cta-bg transition-colors cursor-default"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
