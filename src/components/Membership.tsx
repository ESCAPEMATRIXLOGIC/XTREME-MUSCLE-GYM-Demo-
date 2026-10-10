import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymConfig';

interface MembershipProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" className="py-20 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Membership Plans
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            CHOOSE YOUR COMMITMENT.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Straightforward workout tiers designed for consistent lifters. Select a plan below to connect with our desk for current package rates.
          </p>
        </div>

        {/* Pricing Inquiries Note */}
        <div className="max-w-2xl mx-auto mb-12 p-3.5 rounded-lg bg-[#12141a] border border-[#232732] flex items-center justify-center gap-2.5 text-xs text-neutral-300 text-center">
          <Info className="w-4 h-4 text-red-500 shrink-0" />
          <span>
            <strong>Membership Inquiries:</strong> Current seasonal rates, monthly memberships, and student discounts are available upon inquiry. Select your preferred tier below.
          </span>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={() => onSelectPlan(plan)} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <span>Flexible monthly and seasonal terms available. Student and group options available on request.</span>
        </div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: MembershipPlan;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div
      className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-200 ${
        plan.highlighted
          ? 'bg-[#13151c] border-2 border-[#dc2626] shadow-xl shadow-red-950/20'
          : 'bg-[#101217] border border-[#202430] hover:border-[#2f3545]'
      }`}
    >
      {/* Featured Header Pill */}
      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-[#dc2626] text-white text-[11px] font-bold tracking-wider uppercase shadow-md shadow-red-900/40">
          {plan.tierTag}
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
            {plan.name}
          </h3>
          {!plan.highlighted && (
            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              {plan.tierTag}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 min-h-[40px] mb-6">
          {plan.description}
        </p>

        {/* Pricing Display */}
        <div className="mb-6 p-4 rounded-lg bg-[#0d0e12] border border-[#1e222c]">
          <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
            Membership Fee
          </div>
          <div className="font-heading text-2xl font-bold text-white tracking-wide">
            {plan.priceNote}
          </div>
          <div className="text-[11px] text-neutral-400 mt-0.5">
            Flexible monthly & annual options available
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-3 mb-8">
          <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
            Included Privileges:
          </div>
          {plan.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2.5 text-xs text-neutral-300">
              <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select CTA */}
      <button
        type="button"
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-md font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          plan.highlighted
            ? 'bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white shadow-md shadow-red-900/40'
            : 'bg-[#181b24] hover:bg-[#222734] active:bg-[#12141a] text-neutral-200 border border-[#2c3140]'
        }`}
      >
        <span>Inquire About This Plan</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
