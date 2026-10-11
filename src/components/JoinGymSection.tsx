import React from 'react';
import { GYM_CONFIG, generateWhatsAppLink } from '../data/gymConfig';
import { Dumbbell, ShieldCheck, Clock, MapPin } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const JoinGymSection: React.FC = () => {
  // Professionally written prefilled message asking about gym membership & training options
  const defaultInquiryMessage =
    "Namaste! I would like to join Xtreme Muscle Gym N Physical Fitness in Balkot. Could you please share the current membership plans, training timings, and admission details?";

  const whatsAppLink = generateWhatsAppLink(defaultInquiryMessage);

  return (
    <section
      id="join"
      className="relative py-24 bg-[#090a0d] border-t border-b border-[#1c202a] overflow-hidden scroll-mt-20"
      aria-label="Join the Gym"
    >
      {/* Background glow accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-red-950/15 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#11131a] border border-[#242936] p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-black/60">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181b24] border border-[#2b3140] text-xs font-semibold text-red-500 uppercase tracking-wider mb-6">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Join The Gym · Balkot, Bhaktapur</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            START YOUR FITNESS JOURNEY TODAY.
          </h2>

          {/* Clean, persuasive value copy */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Connect directly with our gym desk on WhatsApp to ask about current membership packages, 
            workout timings, and personal training options. We welcome new members and lifters of all experience levels.
          </p>

          {/* Value highlights strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-neutral-400 mb-10 pb-8 border-b border-[#1f232e]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>Direct Front Desk Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500 shrink-0" />
              <span>Morning & Evening Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>Balkot Main Road, Bhaktapur</span>
            </div>
          </div>

          {/* THE ONLY PROMINENT WHATSAPP ACTION BUTTON */}
          <div className="flex flex-col items-center">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white font-bold text-base sm:text-lg shadow-xl shadow-green-950/40 hover:shadow-green-900/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              aria-label="Chat on WhatsApp to inquire about gym membership"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="tracking-wide">Chat on WhatsApp</span>
            </a>

            {/* Clear, honest helper caption */}
            <p className="mt-3.5 text-xs text-neutral-400">
              Opens WhatsApp with a prefilled inquiry for phone{' '}
              <strong className="text-neutral-200 font-mono tracking-wider">{GYM_CONFIG.contact.phoneDisplay}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
