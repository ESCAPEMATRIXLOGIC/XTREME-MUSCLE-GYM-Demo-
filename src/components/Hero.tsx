import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Dumbbell, Flame } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymConfig';
import heroImg from '../assets/images/hero_gym_strength_1791636335764.jpg';

interface HeroProps {
  onExploreMembership: () => void;
  onExploreFacilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMembership,
  onExploreFacilities,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-900/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Brand Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>{GYM_CONFIG.brandName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05] text-balance mb-6">
              BUILD STRENGTH. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
                BECOME XTREME.
              </span>
            </h1>

            {/* Compelling Value Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8">
              Welcome to Balkot&apos;s dedicated iron and conditioning center. Built for everyday discipline, 
              proper biomechanics, and consistent physical progression. Train with focus, heavy weights, and 
              guidance designed to support your athletic transformation.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onExploreMembership}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] rounded-md transition-all shadow-lg shadow-red-950/50 cursor-pointer"
              >
                <span>Explore Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreFacilities}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-neutral-200 bg-[#16181f] hover:bg-[#20242e] hover:text-white border border-[#2a2e3a] rounded-md transition-all cursor-pointer"
              >
                <span>Explore Facilities</span>
              </button>
            </div>

            {/* Location Label & Training Focus Strip */}
            <div className="pt-6 border-t border-[#1e222c] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-medium text-neutral-200">
                  {GYM_CONFIG.location.city}, {GYM_CONFIG.location.district}, {GYM_CONFIG.location.country}
                </span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-neutral-400" />
                <span>Heavy Free Weights</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-neutral-400" />
                <span>Cardio & Functional Conditioning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#262a36] bg-[#12141a] shadow-2xl group">
              {!imgError ? (
                <img
                  src={heroImg}
                  alt="Athlete barbell training with intensity at Xtreme Muscle Gym"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-700 ease-out"
                  onError={() => setImgError(true)}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-[460px] flex flex-col items-center justify-center bg-[#151821] p-8 text-center">
                  <Dumbbell className="w-16 h-16 text-red-500 mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    XTREME MUSCLE GYM
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Balkot, Bhaktapur, Nepal
                  </p>
                </div>
              )}

              {/* Cinematic Vignette Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent opacity-80 pointer-events-none"
                aria-hidden="true"
              />

              {/* Lower floating badge card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0e1015]/90 backdrop-blur-md border border-[#262a36] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-red-400">
                    Training Environment
                  </div>
                  <div className="text-sm font-bold text-white">
                    Heavy Iron & Physical Conditioning
                  </div>
                </div>
                <div className="w-9 h-9 rounded-md bg-[#dc2626]/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
