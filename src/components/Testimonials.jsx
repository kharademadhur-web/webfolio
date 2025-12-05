import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'The Framer site Webfolio built for us is a game-changer. Stunning visuals and effortless performance—exactly what we needed.',
    author: 'Francesco',
    title: 'Founder & CEO, Tremik',
    avatar: '👤',
  },
  {
    id: 2,
    rating: 5,
    text: 'The Webfolio team took our vision and turned it into a beautifully crafted, highly functional website.',
    author: 'Praneeth',
    title: 'Founder & CEO, Nexchain AI',
    avatar: '👤',
  },
  {
    id: 3,
    rating: 5,
    text: 'From design to launch, Webfolio made the entire process seamless. Our website now truly reflects our brand\'s identity.',
    author: 'Varshith Merugu',
    title: 'Founder, WassupMediaCo',
    avatar: '👤',
  },
  {
    id: 4,
    rating: 5,
    text: 'Webfolio transformed our website into a sleek, high-performance platform. Our clients love the new experience.',
    author: 'Suhair Rahman',
    title: 'Founder @ SpainAcademy',
    avatar: '👤',
  },
  {
    id: 5,
    rating: 5,
    text: 'Roopesh and his team\'s work is of the highest quality when it comes to building websites. They know exactly what works in your industry.',
    author: 'Satvik',
    title: 'Founder, UpSync Media',
    avatar: '👤',
  },
  {
    id: 6,
    rating: 5,
    text: 'Webfolio helped us kickstart our creative agency in Germany with ease, love them',
    author: 'Alicia Pohl',
    title: 'Founder, AECreatives',
    avatar: '👤',
  },
  {
    id: 7,
    rating: 5,
    text: 'Our e-commerce platform now runs smoother and faster than ever. Webfolio\'s expertise made a real difference.',
    author: 'Ruby Liza',
    title: 'Founder, RLSM',
    avatar: '👤',
  },
  {
    id: 8,
    rating: 5,
    text: 'Webfolio revamped our e-commerce store, and sales have never been better. The site is now faster and more user-friendly.',
    author: 'Khushi',
    title: 'Founder, Khushiva',
    avatar: '👤',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-surface-light border border-border-subtle rounded-2xl p-8 min-w-[350px] max-w-[350px] mx-3 flex-shrink-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-surface-lighter rounded-full flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-semibold leading-[1.4]">{testimonial.author}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[13px] md:text-[13.5px] lg:text-[14px] text-[#CCCCCC] leading-[1.6] mb-3 italic">
        {testimonial.text}
      </p>
      <p className="text-[11px] md:text-[11.5px] lg:text-[12px] text-[#888888] leading-[1.4]">{testimonial.title}</p>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Duplicate testimonials for seamless loop
  const firstRow = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const secondRow = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];

  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold"
        >
          Testimonials
        </motion.h2>
      </div>

      <div className="space-y-8">
        {/* First Row - Moving Right to Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
