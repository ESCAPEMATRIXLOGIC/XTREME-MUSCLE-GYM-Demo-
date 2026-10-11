import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymConfig';

interface HeaderProps {
  onOpenInquiry?: (planName?: string) => void;
  onJoinGym?: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, onJoinGym }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleJoinClick = () => {
    if (onJoinGym) {
      onJoinGym();
    } else if (onOpenInquiry) {
      onOpenInquiry();
    }
  };

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map(item => ({
        id: item.href.substring(1),
        el: document.getElementById(item.href.substring(1)),
      }));

      const scrollPos = window.scrollY + 120;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard escape listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          scrolled
            ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#232730] shadow-lg shadow-black/40'
            : 'bg-[#0b0c0e] border-b border-[#1b1e26]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group whitespace-nowrap shrink-0"
              aria-label="Xtreme Muscle Gym Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#dc2626] flex items-center justify-center text-white shadow-md shadow-red-950/40 group-hover:bg-[#ef4444] transition-colors">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                  XTREME<span className="text-[#dc2626]">.</span>FITNESS
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300"
              aria-label="Primary Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`whitespace-nowrap transition-colors py-1 relative ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc2626] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleJoinClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] rounded-md transition-all shadow-md shadow-red-900/30 whitespace-nowrap cursor-pointer"
              >
                <span>Join the Gym</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-md text-neutral-300 hover:text-white hover:bg-[#1a1d24] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div
            className="relative z-10 w-full max-w-sm ml-auto h-full bg-[#101217] border-l border-[#232730] p-6 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#232730]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#dc2626] flex items-center justify-center text-white">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-lg text-white">XTREME FITNESS</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-md hover:bg-[#1c202a]"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#dc2626]/15 text-red-400 font-semibold border-l-2 border-[#dc2626]'
                          : 'text-neutral-300 hover:bg-[#1a1d24] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#232730] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleJoinClick();
                }}
                className="w-full py-3 px-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-center rounded-md shadow-md shadow-red-900/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join the Gym</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-neutral-400 text-center">
                {GYM_CONFIG.location.city}, {GYM_CONFIG.location.district}, {GYM_CONFIG.location.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
