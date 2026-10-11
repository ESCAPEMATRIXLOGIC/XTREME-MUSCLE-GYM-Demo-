import React, { useEffect } from 'react';
import { X, Camera, CheckCircle2, Image as ImageIcon, Sparkles } from 'lucide-react';
import { MEDIA_MANIFEST } from '../data/gymMedia';

interface PhotoSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoSpecsModal: React.FC<PhotoSpecsModalProps> = ({ isOpen, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slots = Object.values(MEDIA_MANIFEST);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-specs-title"
        className="relative z-10 w-full max-w-2xl rounded-xl bg-[#12141a] border border-[#262b38] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#202430] flex items-center justify-between bg-[#151821]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#dc2626]/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 id="photo-specs-title" className="font-heading text-lg font-bold uppercase text-white">
                Facility Photography Manifest
              </h2>
              <p className="text-xs text-neutral-400">
                Visual slot specifications for Xtreme Muscle Gym (Balkot, Bhaktapur)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-[#202532] transition-colors"
            aria-label="Close specifications"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-lg bg-[#181b24] border border-[#282d3c] text-xs text-neutral-300 leading-relaxed">
            <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Owner & Photography Integration Guide</span>
            </p>
            The website is structured with 7 designated visual slots ready to receive on-site photographs from the Balkot facility. When authentic photographs of your gym floor, signboard, or equipment are taken, they can be dropped directly into the media manifest.
          </div>

          <div className="space-y-3">
            {slots.map((slot) => (
              <div
                key={slot.slotId}
                className="p-3.5 rounded-lg bg-[#0e1015] border border-[#222632] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-10 rounded overflow-hidden shrink-0 bg-[#191c24] border border-[#272b38] mt-0.5">
                    <img
                      src={slot.currentAsset}
                      alt={slot.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white uppercase font-heading text-sm">
                      {slot.title}
                    </h3>
                    <p className="text-neutral-400 text-[11px] leading-tight mt-0.5 max-w-sm">
                      {slot.recommendedSubject}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1c202a]">
                  <span className="inline-block px-2 py-0.5 rounded bg-[#171a22] border border-[#2a2f3e] text-[10px] font-semibold text-red-400 mb-1">
                    {slot.recommendedResolution} ({slot.recommendedAspect})
                  </span>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    {slot.targetFilename}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#202430] bg-[#141720] flex items-center justify-between text-xs">
          <span className="text-neutral-400 text-[11px]">
            Detailed setup guide available in <code className="text-neutral-300 font-mono">/AUTHENTIC_PHOTOS_GUIDE.md</code>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#232734] hover:bg-[#2c3242] text-white font-medium text-xs transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
