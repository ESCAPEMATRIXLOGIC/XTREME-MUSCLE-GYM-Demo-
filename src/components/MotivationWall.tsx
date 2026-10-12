import React, { useState } from 'react';
import { Flame, Quote, Sparkles, Copy, Check, Volume2, Shield, Trophy, ChevronRight, Zap } from 'lucide-react';
import { MOTIVATIONAL_SLOGANS, MotivationalSlogan } from '../data/gymConfig';

export const MotivationWall: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<MotivationalSlogan | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [firedUpId, setFiredUpId] = useState<string | null>(null);
  const [dailyQuoteIndex, setDailyQuoteIndex] = useState(0);

  const handleCopy = (slogan: MotivationalSlogan) => {
    const textToCopy = `"${slogan.slogan}" — ${slogan.name}\n${slogan.quote}\n(Xtreme Muscle Gym N Physical Fitness - Balkot, Bhaktapur)`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedId(slogan.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleFireUp = (id: string) => {
    setFiredUpId(id);
    setTimeout(() => setFiredUpId(null), 1800);
  };

  const cycleDailyQuote = () => {
    setDailyQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_SLOGANS.length);
  };

  const activeDaily = MOTIVATIONAL_SLOGANS[dailyQuoteIndex];

  return (
    <section id="mindset" className="py-24 bg-[#090a0d] border-b border-[#1b1e26] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-red-950/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Slogan Ticker Tape / Marquee Header */}
      <div className="w-full bg-[#111318] border-y border-[#1f232d] py-3.5 mb-16 overflow-hidden select-none">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-8 shrink-0">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#dc2626] flex items-center gap-2">
                <Flame className="w-4 h-4 fill-red-600 text-red-600 animate-pulse" />
                STAY HARD!
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-neutral-200">
                YEAH BUDDY! LIGHT WEIGHT BABY!
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#dc2626]">
                NO PAIN, NO GAIN
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                BLOOD & GUTS
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-neutral-300">
                DISCIPLINE OVER MOTIVATION
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-red-500">
                CONQUER THE IRON
              </span>
              <span className="text-[#323744] text-xs">•</span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                DON&apos;T STOP WHEN YOU&apos;RE TIRED
              </span>
              <span className="text-[#323744] text-xs">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
              <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              Champions Mindset & Iron Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">Discipline</span> & Slogans
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              At <strong className="text-neutral-200">XTREME MUSCLE GYM N PHYSICAL FITNESS</strong> in Balkot, we believe lifting heavy weights is only half the battle. True physical transformation starts with an uncompromising mindset. Draw fire from the legendary mottos and discipline of global icons.
            </p>
          </div>

          {/* Quick Mindset Trigger Box */}
          <div className="bg-[#12141a] border border-[#232732] rounded-xl p-5 shrink-0 max-w-sm w-full shadow-lg">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 mb-2">
              <span className="flex items-center gap-1.5 text-red-400 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Pre-Workout Focus
              </span>
              <button
                type="button"
                onClick={cycleDailyQuote}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs underline decoration-neutral-600 underline-offset-2"
              >
                Next Motto →
              </button>
            </div>
            <p className="text-lg font-black text-white uppercase tracking-wide text-red-400">
              &ldquo;{activeDaily.slogan}&rdquo;
            </p>
            <p className="text-xs text-neutral-300 mt-1 font-medium">
              — {activeDaily.name}
            </p>
            <p className="text-xs text-neutral-400 mt-2 line-clamp-2 italic">
              &ldquo;{activeDaily.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* 4 Motivation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOTIVATIONAL_SLOGANS.map((item) => {
            const isFiredUp = firedUpId === item.id;
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className={`group relative bg-[#111319] rounded-2xl overflow-hidden border border-[#20242f] transition-all duration-300 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-950/30 flex flex-col ${
                  isFiredUp ? 'ring-2 ring-red-500 shadow-xl shadow-red-600/30' : ''
                }`}
              >
                {/* Poster Photo Container with Overlay */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={`${item.name} motivation poster - ${item.slogan}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-130"
                  />
                  {/* Subtle red tint / vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-[#111319]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-neutral-700/60 text-[10px] font-black uppercase tracking-wider text-red-400 shadow-md">
                      <Shield className="w-3 h-3 text-red-500" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Slogan Overlay on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-red-900/40 shadow-xl group-hover:border-red-600/50 transition-colors">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        Official Slogan
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase leading-tight mt-0.5 group-hover:text-red-400 transition-colors">
                        {item.slogan}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content & Quotes */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-[#111319]">
                  <div>
                    {/* Athlete Name & Title */}
                    <div className="mb-3.5">
                      <h3 className="text-lg font-black uppercase text-white tracking-tight flex items-center justify-between">
                        {item.name}
                        <Trophy className="w-4 h-4 text-red-500 shrink-0" />
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {item.title}
                      </p>
                    </div>

                    {/* Famous Quote */}
                    <div className="bg-[#161922] border-l-2 border-red-600 rounded-r-lg p-3 my-3">
                      <p className="text-xs text-neutral-300 leading-relaxed italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Key Rule Tag */}
                    <div className="mt-3 text-[11px] text-neutral-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span className="font-semibold text-neutral-300">Rule:</span>
                      <span className="truncate">{item.keyRule}</span>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 mt-4 border-t border-[#1d212b] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleFireUp(item.id)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isFiredUp
                          ? 'bg-red-600 text-white shadow-lg shadow-red-700/50 scale-[1.02]'
                          : 'bg-[#181b24] hover:bg-red-950/60 hover:text-red-300 text-neutral-300 border border-[#262a36]'
                      }`}
                      title="Channel this mindset for your workout"
                    >
                      <Flame className={`w-3.5 h-3.5 ${isFiredUp ? 'fill-white text-white' : 'text-red-500'}`} />
                      {isFiredUp ? 'FIRED UP! 🔥' : 'Embody Mindset'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      className={`p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                        isCopied
                          ? 'bg-green-950/40 border-green-700 text-green-400'
                          : 'bg-[#181b24] hover:bg-[#202430] border-[#262a36] text-neutral-400 hover:text-white'
                      }`}
                      title="Copy motto and quote"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPoster(item)}
                      className="p-2 rounded-lg bg-[#181b24] hover:bg-neutral-800 border border-[#262a36] text-neutral-400 hover:text-white text-xs transition-colors cursor-pointer"
                      title="Enlarge poster view"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Manifesto Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14161f] via-[#101217] to-[#14161f] border border-[#262a38] text-center max-w-4xl mx-auto shadow-2xl relative">
          <Quote className="w-8 h-8 text-red-600 mx-auto mb-3 opacity-60" />
          <p className="text-base sm:text-lg font-bold text-neutral-200 tracking-wide">
            &ldquo;We don&apos;t just train muscle tissue at Xtreme Muscle Gym. We forge mental grit. Walk through our doors, leave the excuses at the gate, and commit to every single rep.&rdquo;
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400 uppercase tracking-widest font-semibold">
            <span className="text-red-500">David Goggins</span>
            <span>•</span>
            <span className="text-red-500">Arnold Schwarzenegger</span>
            <span>•</span>
            <span className="text-red-500">Ronnie Coleman</span>
            <span>•</span>
            <span className="text-red-500">Dorian Yates</span>
          </div>
        </div>
      </div>

      {/* Full Poster Modal View */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative bg-[#12141b] border border-red-900/50 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl shadow-red-950/60 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] max-h-[65vh] w-full bg-black overflow-hidden">
              <img
                src={selectedPoster.image}
                alt={`${selectedPoster.name} tribute poster`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141b] via-[#12141b]/30 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-neutral-700 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm font-bold"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-black tracking-widest text-red-500 uppercase bg-black/70 px-2.5 py-1 rounded border border-red-800/50">
                  {selectedPoster.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2">
                  {selectedPoster.name}
                </h3>
                <div className="text-xl sm:text-2xl font-black text-red-400 uppercase tracking-wider mt-1">
                  &ldquo;{selectedPoster.slogan}&rdquo;
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed bg-[#171a24] p-4 rounded-xl border-l-4 border-red-600">
                &ldquo;{selectedPoster.quote}&rdquo;
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-neutral-400">Discipline Core:</span>{' '}
                  <strong className="text-white">{selectedPoster.discipline}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(selectedPoster)}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedId === selectedPoster.id ? 'Copied!' : 'Copy Slogan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
