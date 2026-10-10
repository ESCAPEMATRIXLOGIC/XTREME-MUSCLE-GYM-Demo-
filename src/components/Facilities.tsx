import React, { useState } from 'react';
import { Dumbbell, Check, Layers } from 'lucide-react';
import { FACILITIES, FacilityItem } from '../data/gymConfig';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'strength', label: 'Strength' },
    { id: 'free-weights', label: 'Free Weights' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'functional', label: 'Functional' },
    { id: 'personal-training', label: 'Coaching' },
  ];

  const filteredFacilities =
    selectedCategory === 'all'
      ? FACILITIES
      : FACILITIES.filter((item) => item.category === selectedCategory);

  return (
    <section id="facilities" className="py-20 bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
              Club Facilities & Training Zones
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              BUILT FOR PERFORMANCE & PRECISION.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Engineered workout zones optimized for progressive overload, metabolic conditioning, and functional movement.
          </p>
        </div>

        {/* Working Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist" aria-label="Facility Categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/40'
                    : 'bg-[#14171f] text-neutral-400 hover:text-white hover:bg-[#1f232e] border border-[#232732]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility.id} item={facility} />
          ))}
        </div>

        {/* Quality Standards Bar */}
        <div className="mt-12 p-4 rounded-lg bg-[#111319] border border-[#202430] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-red-500 shrink-0" />
            <span>
              <strong>Facility Standards:</strong> All lifting stations, free weights, and cardio equipment are maintained for safety, clean hygiene, and peak performance.
            </span>
          </div>
          <span className="text-neutral-300 shrink-0 font-medium">Balkot, Bhaktapur</span>
        </div>
      </div>
    </section>
  );
};

interface FacilityCardProps {
  item: FacilityItem;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden bg-[#12141a] border border-[#222632] flex flex-col hover:border-red-500/40 transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#171a22]">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#171a22] text-neutral-500">
            <Dumbbell className="w-10 h-10 text-red-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0b0c0e]/80 backdrop-blur-sm border border-[#262a36] text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">
          {item.categoryLabel}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white group-hover:text-red-400 transition-colors mb-2">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="pt-4 border-t border-[#1e222c] flex flex-wrap gap-2">
          {item.features.map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-300"
            >
              <Check className="w-3.5 h-3.5 text-red-500" />
              <span>{feat}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
