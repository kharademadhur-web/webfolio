import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-cta-bg transition-colors"
            aria-label="Webfolio Home"
          >
            <img src="/logo.png" alt="Webfolio" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium text-white hover:text-cta-bg transition-colors uppercase tracking-wide"
            >
              CASE-STUDIES
            </a>
          </div>

          <button
            className="hidden md:block bg-cta-bg text-black px-6 py-3 rounded-full font-bold hover:bg-cta-hover transition-all duration-300"
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Strategy Call
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-sm font-medium text-white hover:text-cta-bg transition-colors uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CASE-STUDIES
              </a>
              <button
                className="bg-cta-bg text-black px-6 py-3 rounded-full font-bold hover:bg-cta-hover transition-all duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
