import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border-subtle py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Urgency CTA */}
        <div className="text-center mb-16 pb-16 border-b border-border-subtle">
          <p className="text-xl md:text-2xl font-bold text-cta-bg mb-6">
            Be quick! The spots are almost gone
          </p>
          <button
            className="bg-cta-bg text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-cta-hover transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book A Call
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Webfolio</h3>
            <p className="text-base text-text-muted leading-relaxed">
              Building strategy-led websites that turn visitors into customers and grow your revenue on autopilot.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-base text-text-muted hover:text-cta-bg transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@webfolio.com"
                  className="text-base text-text-muted hover:text-cta-bg transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Social</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@webfolio.com"
                className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center text-text-muted hover:bg-cta-bg hover:text-black transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center text-text-muted hover:bg-cta-bg hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center text-text-muted hover:bg-cta-bg hover:text-black transition-all"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-text-muted">
              ©{currentYear} Webfolio - All Rights Reserved.
            </p>
            <p className="text-sm text-text-muted">
              Design inspired by Webfolio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
