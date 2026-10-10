import React from 'react';
import { UserCheck, Award, ArrowUpRight } from 'lucide-react';
import { TRAINERS_LIST, TrainerProfile } from '../data/gymConfig';

interface TrainersProps {
  onInquire: (subject?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onInquire }) => {
  return (
    <section id="trainers" className="py-20 bg-[#0e1015] border-t border-[#1b1e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
              Coaching & Instruction
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              DEDICATED FLOOR GUIDANCE.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Guiding your lifting form, programming structure, and daily gym discipline safely and effectively.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINERS_LIST.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} onInquire={onInquire} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TrainerCardProps {
  trainer: TrainerProfile;
  onInquire: (subject?: string) => void;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, onInquire }) => {
  return (
    <div className="rounded-xl bg-[#12141a] border border-[#232732] p-6 flex flex-col justify-between hover:border-[#dc2626]/40 transition-colors">
      <div>
        {/* Header Avatar Placeholder */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-lg bg-[#191c24] border border-[#2d3240] flex items-center justify-center text-red-500">
            <UserCheck className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 px-2.5 py-0.5 rounded bg-[#171a22] border border-[#282d3c]">
            Coaching Floor
          </span>
        </div>

        {/* Names & Role */}
        <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-1">
          {trainer.name}
        </h3>
        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
          {trainer.role}
        </p>

        {/* Specialty */}
        <div className="mb-4 pb-3 border-b border-[#1e222c]">
          <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
            Focus Discipline
          </span>
          <span className="text-xs text-neutral-200 font-medium">
            {trainer.specialty}
          </span>
        </div>

        {/* Bio */}
        <p className="text-xs text-neutral-400 leading-relaxed mb-6">
          {trainer.bio}
        </p>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => onInquire(`Personal Training Inquiry (${trainer.name})`)}
        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-neutral-300 hover:text-white bg-[#161921] hover:bg-[#1f232e] border border-[#282c38] rounded-md transition-colors cursor-pointer"
      >
        <span>Inquire About Training</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
      </button>
    </div>
  );
};
