import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymConfig';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'strength', label: 'Strength Zone' },
    { id: 'cardio', label: 'Cardio Suite' },
    { id: 'functional', label: 'Functional Turf' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Lightbox navigation handlers
  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const handleClose = () => {
    setActiveLightboxIndex(null);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeLightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex, handleNext, handlePrev]);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#0e1015] border-t border-[#1b1e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
              Atmosphere & Club Spaces
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              TRAINING FLOOR VISUALS.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            A glimpse into the iron aesthetic, lifting cages, and functional training stations at Xtreme Muscle Gym.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveLightboxIndex(null);
                }}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryThumbnail
              key={item.id}
              item={item}
              onClick={() => setActiveLightboxIndex(index)}
            />
          ))}
        </div>

        {/* Visitor Floor Note */}
        <div className="mt-10 p-4 rounded-lg bg-[#12141a] border border-[#212531] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-red-500 shrink-0" />
            <span>
              <strong>Experience the Atmosphere:</strong> Prospective members are welcome to visit our gym in Balkot, Bhaktapur to tour the equipment and training floor in person.
            </span>
          </div>
          <span className="hidden sm:inline text-neutral-300 font-medium shrink-0">Balkot, Bhaktapur</span>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={currentItem.title}
            className="relative z-10 max-w-5xl w-full flex flex-col items-center"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 text-neutral-300">
              <span className="text-xs uppercase tracking-wider font-semibold">
                Photo {activeLightboxIndex! + 1} of {filteredItems.length} · {currentItem.categoryLabel}
              </span>
              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-md hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Frame with Navigation Arrows */}
            <div className="relative w-full rounded-xl overflow-hidden bg-black border border-[#2a2e3a] max-h-[75vh] flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700 hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700 hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Caption */}
            <div className="w-full mt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between text-neutral-300 text-xs gap-2">
              <span className="font-semibold text-white text-sm">{currentItem.title}</span>
              <span className="text-neutral-400">{currentItem.caption}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryThumbnailProps {
  item: GalleryItem;
  onClick: () => void;
}

const GalleryThumbnail: React.FC<GalleryThumbnailProps> = ({ item, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative rounded-xl overflow-hidden bg-[#12141a] border border-[#222632] cursor-pointer hover:border-red-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      <div className="h-64 w-full overflow-hidden">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
            onError={() => setImgError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#151821] text-neutral-400">
            <Camera className="w-8 h-8 text-red-500" />
          </div>
        )}
      </div>

      {/* Hover Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

      {/* Info Badge */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider block mb-1">
            {item.categoryLabel}
          </span>
          <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
            {item.title}
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
