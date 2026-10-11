/**
 * Xtreme Muscle Gym N Physical Fitness - Media Manifest & Asset Slots
 * Balkot, Bhaktapur, Nepal
 * 
 * This module defines every visual media slot across the website.
 * When authentic photos are taken at the gym (or supplied by the owner),
 * simply replace the referenced files in /src/assets/images/ or update
 * the image paths below.
 */

import heroImg from '../assets/images/hero_gym_strength_1791636335764.jpg';
import aboutImg from '../assets/images/about_gym_training_1791636348463.jpg';
import strengthImg from '../assets/images/facility_strength_zone_1791636360177.jpg';
import cardioImg from '../assets/images/facility_cardio_zone_1791636370981.jpg';
import functionalImg from '../assets/images/facility_functional_turf_1791636383291.jpg';

export interface MediaSlot {
  slotId: string;
  section: 'hero' | 'about' | 'facility' | 'gallery';
  title: string;
  recommendedSubject: string;
  recommendedAspect: '16:9' | '4:3' | '1:1';
  recommendedResolution: string;
  currentAsset: string;
  altText: string;
  targetFilename: string;
}

export const MEDIA_MANIFEST: Record<string, MediaSlot> = {
  hero: {
    slotId: 'hero',
    section: 'hero',
    title: 'Homepage Hero Spotlight',
    recommendedSubject: 'Panoramic or wide view of the main workout floor, high-contrast lifting area, or prominent gym sign in Balkot.',
    recommendedAspect: '16:9',
    recommendedResolution: '1920 × 1080 px or 1600 × 1200 px',
    currentAsset: heroImg,
    altText: 'Athlete performing barbell strength workout inside modern gym',
    targetFilename: 'hero_balkot_gym.jpg',
  },
  about: {
    slotId: 'about',
    section: 'about',
    title: 'About Section Training Floor',
    recommendedSubject: 'Close-up or medium shot of barbells, knurled plates, deadlift platforms, or focused training in the gym.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: aboutImg,
    altText: 'Chalked hands and barbell deadlift on heavy lifting platform',
    targetFilename: 'about_balkot_lifting.jpg',
  },
  facilityStrength: {
    slotId: 'facilityStrength',
    section: 'facility',
    title: 'Heavy Strength & Power Cages',
    recommendedSubject: 'Actual squat racks, power cages, bench presses, and Olympic barbell stations at the Balkot facility.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: strengthImg,
    altText: 'Power cages, Olympic barbells, and calibrated weight plates on rubber gym flooring',
    targetFilename: 'facility_strength_racks.jpg',
  },
  facilityFreeWeights: {
    slotId: 'facilityFreeWeights',
    section: 'facility',
    title: 'Dumbbell & Free Weight Floor',
    recommendedSubject: 'The gym dumbbell rack lined up by weight pairs, flat and incline benches, and cable equipment.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: aboutImg,
    altText: 'Free weight training benches and dumbbell floor area',
    targetFilename: 'facility_dumbbell_rack.jpg',
  },
  facilityCardio: {
    slotId: 'facilityCardio',
    section: 'facility',
    title: 'Cardio & Conditioning Suite',
    recommendedSubject: 'Treadmills, elliptical cross-trainers, rowing machines, or spin bikes at the gym.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: cardioImg,
    altText: 'Row of motorized treadmills and endurance machines in atmospheric gym lighting',
    targetFilename: 'facility_cardio_floor.jpg',
  },
  facilityFunctional: {
    slotId: 'facilityFunctional',
    section: 'facility',
    title: 'Functional Turf & Calisthenics',
    recommendedSubject: 'Functional training area, kettlebell lineup, pull-up rig, plyometric boxes, or stretching area.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: functionalImg,
    altText: 'Functional conditioning area with turf track, kettlebells, and pull-up rig',
    targetFilename: 'facility_functional_turf.jpg',
  },
  facilityCoaching: {
    slotId: 'facilityCoaching',
    section: 'facility',
    title: 'Personal Training & Guidance Zone',
    recommendedSubject: 'Coaching consultation area, technique assessment mirror, or trainer-assisted lifting station.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: heroImg,
    altText: 'Personal training and technique coaching consultation floor',
    targetFilename: 'facility_coaching_space.jpg',
  },
};
