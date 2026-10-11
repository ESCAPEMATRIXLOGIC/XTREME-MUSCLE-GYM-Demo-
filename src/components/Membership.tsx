import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan, generateWhatsAppLink } from '../data/gymConfig';

interface MembershipProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

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

      {/* Plan Inquiry CTAs */}
      <div className="flex flex-col gap-2.5">
        <a
          href={generateWhatsAppLink(
            `Namaste! I would like to inquire about the ${plan.name} (${plan.tierTag}) membership at Xtreme Muscle Gym N Physical Fitness in Balkot. Could you please share current pricing, timings, and admission details?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-md font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white shadow-md shadow-green-950/40"
          aria-label={`Inquire about ${plan.name} on WhatsApp`}
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>Inquire on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onSelect}
          className={`w-full py-2.5 px-4 rounded-md font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
            plan.highlighted
              ? 'bg-[#181b24] hover:bg-[#222734] text-neutral-300 border border-[#2c3140]'
              : 'bg-[#14161d] hover:bg-[#1d212b] text-neutral-400 hover:text-neutral-200 border border-[#242834]'
          }`}
        >
          <span>Send Website Form</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
