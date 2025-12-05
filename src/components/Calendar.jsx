import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Calendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", { origin: "https://cal.com" });

    Cal("ui", { "theme": "dark", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <section id="calendar" className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-6xl">


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-surface-light rounded-2xl overflow-hidden shadow-2xl border border-border-subtle"
        >
          {/* Cal.com Embed Container */}
          <div
            className="cal-embed"
            data-cal-link="madhur-kharade-13yg3x/public"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'hidden' }}
          ></div>
        </motion.div>

        {/* Alternative: Direct Link Button (uncomment if you prefer a simple button) */}
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://cal.com/YOUR_USERNAME/YOUR_EVENT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta-bg text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-cta-hover transition-all duration-300 inline-block hover:scale-105 shadow-lg shadow-cta-bg/20"
          >
            Book Your Strategy Call
          </a>
        </motion.div>
        */}
      </div>
    </section>
  );
}
