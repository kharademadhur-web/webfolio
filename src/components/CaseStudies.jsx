import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const caseStudies = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=800&fit=crop',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=800&fit=crop',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=800&fit=crop',
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
    },
];

function CaseStudyCard({ study, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${study.image})` }}
            ></div>

            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="bg-black">
            <div className="max-w-full">
                {/* Grid Layout - 2 Rows × 3 Columns - No Gaps */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
                >
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
