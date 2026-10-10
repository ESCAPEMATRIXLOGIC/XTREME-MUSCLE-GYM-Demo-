import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, FaqItem } from '../data/gymConfig';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#0e1015] border-t border-[#1b1e26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Questions & Information
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-3">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-sm text-neutral-400">
            Answers regarding club visits, membership inquiries, and beginner orientation.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-lg bg-[#12141a] border border-[#222632] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-neutral-200 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="font-heading uppercase tracking-wide text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-md bg-[#181b24] border border-[#2b3040] flex items-center justify-center text-red-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#dc2626]/20 border-red-500/40 text-red-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-[#1c202a]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
