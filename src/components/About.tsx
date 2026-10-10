import React, { useState } from 'react';
import { Dumbbell, Activity, Compass, CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/about_gym_training_1791636348463.jpg';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const pillars = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      desc: 'Progressive overload principles, free weights, and dedicated lifting cages engineered for safe hypertrophy and power.',
    },
    {
      icon: Activity,
      title: 'Fitness & Conditioning',
      desc: 'Dynamic high-intensity endurance circuits, functional turf work, and cardiovascular machines to enhance stamina.',
    },
    {
      icon: Compass,
      title: 'Personal Guidance',
      desc: 'Constructive lifting technique pointers, workout structure routines, and supportive guidance for gym members.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0e1015] border-t border-b border-[#1b1e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-[#242834] bg-[#141720] shadow-xl">
              {!imgError ? (
                <img
                  src={aboutImg}
                  alt="Serious barbell lifting and training at Xtreme Muscle Gym"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center filter contrast-105"
                  onError={() => setImgError(true)}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-[400px] flex flex-col items-center justify-center bg-[#181b24] p-8 text-center">
                  <Dumbbell className="w-12 h-12 text-red-500 mb-3" />
                  <span className="font-heading text-xl font-bold text-white">Strength First</span>
                </div>
              )}

              {/* Editorial Caption Bar */}
              <div className="p-4 bg-[#111319] border-t border-[#232732] flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-300">Dedicated Training Floor</span>
                <span className="text-red-400 font-semibold uppercase tracking-wider text-[11px]">Balkot, Bhaktapur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & 3 Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">
              About The Club
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              A GROUNDED SANCTUARY FOR REAL LIFTING AND VIGOR.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed mb-6">
              XTREME MUSCLE GYM N PHYSICAL FITNESS is founded on the belief that meaningful physical transformation 
              comes from daily commitment, proper training mechanics, and a supportive iron environment. 
              Whether you are gripping a barbell for the first time or advancing personal records, our club provides 
              the space, equipment, and community to foster true resilience.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              We focus on substance over superficial trends: solid barbell platforms, clean free weights, functional conditioning, 
              and guidance designed to protect your joints while maximizing your strength output.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#202430]">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col">
                    <div className="w-9 h-9 rounded-md bg-[#191c24] border border-[#2b303e] flex items-center justify-center text-red-500 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
