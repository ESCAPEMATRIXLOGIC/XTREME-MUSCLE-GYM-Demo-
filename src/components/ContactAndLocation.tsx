import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { GYM_CONFIG, generateWhatsAppLink } from '../data/gymConfig';

export const ContactAndLocation: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('membership');
  const [selectedPlan, setSelectedPlan] = useState('Premium Fitness');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    inquiryType: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Full name is required.';
    } else if (name.trim().length < 2) {
      errs.name = 'Please provide a valid name.';
    }

    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s\-()]{7,16}$/.test(phone.trim())) {
      errs.phone = 'Please provide a valid phone number with at least 7 digits.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!consent) {
      errs.consent = 'Please confirm consent before submitting.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: name.trim(),
        phone: phone.trim(),
        inquiryType: inquiryType === 'membership' ? `Membership (${selectedPlan})` : 'General / Coaching',
      });
    }, 700);
  };

  const whatsAppMessage = `Hello Xtreme Muscle Gym! I would like to inquire regarding ${
    inquiryType === 'membership' ? `the ${selectedPlan} plan` : 'general training and facilities'
  } at your Balkot location. My name is ${name || 'Prospective Member'}.`;
  const whatsAppUrl = generateWhatsAppLink(whatsAppMessage);

  return (
    <section id="contact" className="py-20 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Connect & Locate
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            VISIT US OR SEND AN INQUIRY.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Reach out with any questions about packages, training hours, or visit our gym in Balkot, Bhaktapur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location & Hours Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Location Card */}
            <div className="rounded-xl bg-[#12141a] border border-[#232732] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white uppercase">
                    Gym Location
                  </h3>
                  <span className="text-xs text-neutral-400">
                    Balkot, Bhaktapur, Nepal
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                {GYM_CONFIG.location.street}, {GYM_CONFIG.location.city}, {GYM_CONFIG.location.district}. {GYM_CONFIG.location.landmarkNotice}
              </p>

              <a
                href={GYM_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#191c25] hover:bg-[#232734] border border-[#2d3242] text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-500" />
              </a>
            </div>

            {/* Proposed Operating Hours Card */}
            <div className="rounded-xl bg-[#12141a] border border-[#232732] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white uppercase">
                    Operating Hours
                  </h3>
                  <span className="text-xs text-red-400 font-medium">
                    Daily Timetable
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-[#1f232e]">
                  <span className="text-neutral-400">{GYM_CONFIG.openingHours.days}</span>
                  <div className="text-right font-medium text-white">
                    <div>{GYM_CONFIG.openingHours.morningSession}</div>
                    <div className="text-neutral-400">{GYM_CONFIG.openingHours.eveningSession}</div>
                  </div>
                </div>

                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Saturday</span>
                  <span className="text-neutral-300 font-medium">
                    {GYM_CONFIG.openingHours.saturdayHours}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e222d] text-[11px] text-neutral-400 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.openingHours.memberNote}</span>
              </div>
            </div>

            {/* Direct Channel Strip */}
            <div className="rounded-xl bg-[#12141a] border border-[#232732] p-6 flex flex-col gap-4">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Direct Contact Channels
              </h4>

              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#1e222d]">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Phone (Inquiries):</span>
                </div>
                <a
                  href={`tel:${GYM_CONFIG.contact.phoneRaw}`}
                  className="text-white hover:text-red-400 font-bold tracking-wide transition-colors"
                >
                  {GYM_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#1e222d]">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Email:</span>
                </div>
                <span className="text-neutral-300 font-medium">{GYM_CONFIG.contact.emailDisplay}</span>
              </div>

              {/* Direct Call & WhatsApp trigger buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                <a
                  href={`tel:${GYM_CONFIG.contact.phoneRaw}`}
                  className="py-3 px-4 rounded-md bg-[#1d212b] hover:bg-[#272c3a] border border-[#2d3342] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>Call {GYM_CONFIG.contact.phoneDisplay}</span>
                </a>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-md bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#12141a] border border-[#232732] p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">
                  Membership & Fitness Question
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Fill in your details below. We will guide you with membership rates and training schedules.
                </p>
              </div>

              {submittedData ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{submittedData.name}</strong>. Your inquiry regarding{' '}
                    <strong className="text-red-400">{submittedData.inquiryType}</strong> has been registered.
                  </p>

                  <div className="p-4 rounded-lg bg-[#181b24] border border-[#2b3040] text-left text-xs text-neutral-300 max-w-md mx-auto mb-6">
                    <div className="flex items-center gap-1.5 font-semibold text-white mb-1.5">
                      <Info className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Next Steps</span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                      Our front desk will review your inquiry details. For the fastest response or immediate assistance regarding rates and session timings, you can connect directly with our desk via WhatsApp.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-md bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Connect on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="py-3 px-6 rounded-md bg-[#1c202a] hover:bg-[#252a38] text-neutral-200 font-semibold text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Inquiry Type Radio / Toggle */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setInquiryType('membership')}
                        className={`py-2 px-3 rounded-md text-xs font-semibold border transition-colors ${
                          inquiryType === 'membership'
                            ? 'bg-[#dc2626]/20 border-red-500 text-white'
                            : 'bg-[#171a22] border-[#252936] text-neutral-400 hover:text-white'
                        }`}
                      >
                        Gym Membership
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquiryType('training')}
                        className={`py-2 px-3 rounded-md text-xs font-semibold border transition-colors ${
                          inquiryType === 'training'
                            ? 'bg-[#dc2626]/20 border-red-500 text-white'
                            : 'bg-[#171a22] border-[#252936] text-neutral-400 hover:text-white'
                        }`}
                      >
                        Personal Coaching & Other
                      </button>
                    </div>
                  </div>

                  {/* Plan Selector if membership */}
                  {inquiryType === 'membership' && (
                    <div>
                      <label htmlFor="contact-plan" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Selected Plan Option
                      </label>
                      <select
                        id="contact-plan"
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border border-[#282d3c] text-white text-sm focus:outline-none focus:border-red-500"
                      >
                        <option value="Basic Strength">Basic Strength Plan</option>
                        <option value="Premium Fitness">Premium Fitness Plan</option>
                        <option value="Elite Performance">Elite Performance Plan</option>
                      </select>
                    </div>
                  )}

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="e.g. Ramesh Thapa"
                        className={`w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border text-white text-sm focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#282d3c] focus:border-red-500 focus:ring-red-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder="98XXXXXXXX"
                        className={`w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border text-white text-sm focus:outline-none focus:ring-1 ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#282d3c] focus:border-red-500 focus:ring-red-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-neutral-500">(Optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="ramesh@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border text-white text-sm focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#282d3c] focus:border-red-500 focus:ring-red-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about workout times, training guidance, or trial sessions..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border border-[#282d3c] text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-neutral-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-[#2c3140] bg-[#171a22] text-red-600 focus:ring-red-500"
                      />
                      <span>
                        I consent to submitting this inquiry regarding Xtreme Muscle Gym facilities.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-6 rounded-md bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-950/40 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Processing inquiry...' : 'Send Inquiry'}</span>
                    </button>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
