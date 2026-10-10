import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertCircle, MessageSquare, Send, ShieldAlert } from 'lucide-react';
import { GYM_CONFIG, generateWhatsAppLink } from '../data/gymConfig';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'General Inquiry',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    plan: string;
  } | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync initialPlan when it changes
  useEffect(() => {
    setSelectedPlan(initialPlan);
  }, [initialPlan]);

  // Handle Escape key and focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setSubmittedData(null);
      setErrors({});
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^[0-9+\s\-()]{7,16}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!consent) {
      newErrors.consent = 'Please confirm you agree to send this inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: fullName.trim(),
        phone: phone.trim(),
        plan: selectedPlan,
      });
    }, 600);
  };

  const whatsAppText = `Namaste! I would like to inquire about membership at Xtreme Muscle Gym (Balkot). Name: ${fullName || 'Guest'}, Plan/Topic: ${selectedPlan}.`;
  const whatsAppLink = generateWhatsAppLink(whatsAppText);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
        className="relative z-10 w-full max-w-lg rounded-xl bg-[#12141a] border border-[#262b38] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#202430] flex items-center justify-between bg-[#151821]">
          <div>
            <div className="text-[11px] font-semibold text-red-500 uppercase tracking-wider">
              {GYM_CONFIG.shortName}
            </div>
            <h2 id="inquiry-modal-title" className="font-heading text-xl font-bold uppercase text-white">
              Membership & Training Inquiry
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-[#202532] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto">
          {submittedData ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                Inquiry Received
              </h3>

              <p className="text-sm text-neutral-300 mb-4">
                Thank you, <span className="font-semibold text-white">{submittedData.name}</span>! Your request regarding{' '}
                <span className="font-semibold text-red-400">{submittedData.plan}</span> has been registered.
              </p>

              <div className="p-4 rounded-lg bg-[#181b24] border border-[#2b3040] text-left text-xs text-neutral-300 mb-6">
                <p className="leading-relaxed text-neutral-400">
                  Our gym desk in Balkot will follow up with you. For immediate confirmation on membership rates or session slots, connect with us directly on WhatsApp.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-md bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-md bg-[#222634] hover:bg-[#2b3042] text-neutral-200 font-semibold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Plan Selection */}
              <div>
                <label htmlFor="plan-select" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Interested Plan or Topic <span className="text-red-500">*</span>
                </label>
                <select
                  id="plan-select"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border border-[#282d3c] text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                >
                  <option value="Basic Strength">Basic Strength Plan</option>
                  <option value="Premium Fitness">Premium Fitness Plan</option>
                  <option value="Elite Performance">Elite Performance Plan</option>
                  <option value="Personal Training Coaching">Personal Training Coaching</option>
                  <option value="General Facility Inquiry">General Facility Inquiry</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                  }}
                  placeholder="e.g. Aarav Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border text-white text-sm focus:outline-none focus:ring-1 ${
                    errors.fullName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-[#282d3c] focus:border-red-500 focus:ring-red-500'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
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

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-neutral-500">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder="name@example.com"
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
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Workout Goals or Questions <span className="text-neutral-500">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your current fitness level, preferred timings, or questions about training."
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#171a22] border border-[#282d3c] text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
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
                    I confirm this inquiry is for personal membership details at Xtreme Muscle Gym (Balkot).
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-[#202430] flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-md bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-950/40 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Preparing inquiry...' : 'Submit Inquiry'}</span>
                </button>

                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-md bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
