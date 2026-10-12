/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { PhotoSpecsModal } from './components/PhotoSpecsModal';
import { JoinGymSection } from './components/JoinGymSection';
import { MotivationWall } from './components/MotivationWall';
import { MembershipPlan } from './data/gymConfig';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [photoSpecsOpen, setPhotoSpecsOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState('Premium Fitness');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenInquiry = (planOrTopic?: string) => {
    setSelectedPlanForModal(planOrTopic || 'General Inquiry');
    setInquiryModalOpen(true);
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlanForModal(plan.name);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e2e4e9] flex flex-col font-sans selection:bg-[#dc2626] selection:text-white">
      {/* Header */}
      <Header
        onOpenInquiry={() => handleOpenInquiry('General Membership')}
        onJoinGym={() => scrollTo('join')}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero
          onExploreMembership={() => scrollTo('membership')}
          onExploreFacilities={() => scrollTo('facilities')}
        />

        <About />

        <Facilities />

        {/* Wall of Discipline: Icons & Mottos (David Goggins "STAY HARD!", Arnold, Ronnie Coleman, Dorian Yates) */}
        <MotivationWall />

        <Trainers onInquire={(subject) => handleOpenInquiry(subject || 'Personal Coaching')} />

        <Membership onSelectPlan={handleSelectPlan} />

        {/* Simplified frontend-only Join the Gym CTA section */}
        <JoinGymSection />

        <Gallery />

        <ContactAndLocation />

        <Faq />
      </main>

      {/* Footer */}
      <Footer onOpenPhotoSpecs={() => setPhotoSpecsOpen(true)} />

      {/* Membership & Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialPlan={selectedPlanForModal}
      />

      {/* Facility Photography Specifications Modal */}
      <PhotoSpecsModal
        isOpen={photoSpecsOpen}
        onClose={() => setPhotoSpecsOpen(false)}
      />
    </div>
  );
}
