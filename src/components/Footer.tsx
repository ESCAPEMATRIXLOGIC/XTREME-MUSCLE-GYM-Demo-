import React from 'react';
import { Dumbbell, ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#08090b] text-neutral-400 border-t border-[#181b22] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181b22]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#dc2626] flex items-center justify-center text-white shadow-md shadow-red-950/40">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                XTREME<span className="text-[#dc2626]">.</span>FITNESS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
              XTREME MUSCLE GYM N PHYSICAL FITNESS is dedicated to authentic strength, functional conditioning, 
              and disciplined physical training in Balkot, Bhaktapur, Nepal.
            </p>

            <div className="flex flex-col gap-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Balkot, Bhaktapur, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Inquiries: <a href={`tel:${GYM_CONFIG.contact.phoneRaw}`} className="text-white hover:text-red-400 font-semibold transition-colors">{GYM_CONFIG.contact.phoneDisplay}</a></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Club</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities & Zones</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">Training Team</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Club Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Hours</a>
              </li>
            </ul>
          </div>

          {/* Club Information & Hours Summary */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Club Hours & Information
            </h4>
            <div className="p-4 rounded-lg bg-[#101217] border border-[#202430] text-xs text-neutral-300 space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-[#1c202a]">
                <span className="text-neutral-400">Sunday – Friday</span>
                <span className="font-medium text-white">5:30 AM – 11:00 AM | 4:00 PM – 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#1c202a]">
                <span className="text-neutral-400">Saturday</span>
                <span className="font-medium text-white">6:00 AM – 12:00 PM</span>
              </div>
              <div className="pt-1 text-[11px] text-neutral-400">
                Location: Balkot Main Road, Bhaktapur, Nepal. Lockers, free weights, and cardio deck available daily.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} XTREME MUSCLE GYM N PHYSICAL FITNESS. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#13151b] hover:bg-[#1d2029] border border-[#232732] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
