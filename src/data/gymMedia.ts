/**
 * Xtreme Muscle Gym N Physical Fitness - Media Manifest & Asset Slots
 * Balkot, Bhaktapur, Nepal
 * 
 * Empty Gym Equipment Photography (Zero People)
 */

import gymFloorImg from '../assets/images/gym_interior_floor_1791724114357.jpg';
import barbellStationImg from '../assets/images/gym_barbell_station_1791724130411.jpg';
import powerCagesImg from '../assets/images/gym_power_cages_1791724158530.jpg';
import dumbbellRackImg from '../assets/images/gym_dumbbell_racks_1791724144488.jpg';
import cardioTreadmillsImg from '../assets/images/gym_cardio_treadmills_1791724175270.jpg';

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
    title: 'Main Workout Floor & Lifting Stations',
    recommendedSubject: 'Wide-angle view of the empty workout floor with yellow lifting benches, barbells, and blue floor.',
    recommendedAspect: '16:9',
    recommendedResolution: '1920 × 1080 px or 1600 × 1200 px',
    currentAsset: gymFloorImg,
    altText: 'Empty workout floor with yellow lifting benches and blue flooring in gym',
    targetFilename: 'gym_interior_floor.jpg',
  },
  about: {
    slotId: 'about',
    section: 'about',
    title: 'Heavy Barbell Station & Squat Uprights',
    recommendedSubject: 'Barbell loaded with Olympic iron plates on yellow uprights with chalk box in empty gym.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: barbellStationImg,
    altText: 'Yellow barbell station loaded with black Olympic plates in empty gym',
    targetFilename: 'gym_barbell_station.jpg',
  },
  facilityStrength: {
    slotId: 'facilityStrength',
    section: 'facility',
    title: 'Heavy Strength & Power Cages',
    recommendedSubject: 'Yellow and black steel power cages, squat racks, and calibrated Olympic barbells.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: powerCagesImg,
    altText: 'Heavy yellow steel power cages and squat racks in empty gym floor with blue mats',
    targetFilename: 'gym_power_cages.jpg',
  },
  facilityFreeWeights: {
    slotId: 'facilityFreeWeights',
    section: 'facility',
    title: 'Dumbbell & Free Weight Floor',
    recommendedSubject: 'Matched dumbbell pairs on two-tier steel rack, flat and incline benches, and mirror wall.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: dumbbellRackImg,
    altText: 'Two-tier steel rack of black iron dumbbells and workout benches in empty gym',
    targetFilename: 'gym_dumbbell_racks.jpg',
  },
  facilityCardio: {
    slotId: 'facilityCardio',
    section: 'facility',
    title: 'Cardio & Conditioning Suite',
    recommendedSubject: 'Commercial running treadmills and stationary exercise spin bikes lined up in clean empty gym.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: cardioTreadmillsImg,
    altText: 'Row of modern treadmills and exercise spin bikes in clean empty fitness room',
    targetFilename: 'gym_cardio_treadmills.jpg',
  },
  facilityFunctional: {
    slotId: 'facilityFunctional',
    section: 'facility',
    title: 'Functional Barbell & Lifting Stations',
    recommendedSubject: 'Barbell lifting stations with yellow uprights, chalk stations, and blue rubber floor.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: barbellStationImg,
    altText: 'Barbell lifting station with black iron plates and chalk block on blue rubber floor',
    targetFilename: 'gym_barbell_station.jpg',
  },
  facilityCoaching: {
    slotId: 'facilityCoaching',
    section: 'facility',
    title: 'Main Workout Floor & Training Layout',
    recommendedSubject: 'Spacious gym layout with yellow benches, cable stations, and comprehensive equipment.',
    recommendedAspect: '4:3',
    recommendedResolution: '1200 × 900 px',
    currentAsset: gymFloorImg,
    altText: 'Spacious empty gym interior with yellow benches, racks, blue floor, and mirror walls',
    targetFilename: 'gym_interior_floor.jpg',
  },
};
