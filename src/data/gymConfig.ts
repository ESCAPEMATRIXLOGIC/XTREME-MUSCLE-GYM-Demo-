/**
 * Xtreme Muscle Gym N Physical Fitness - Configuration & Business Data
 * Balkot, Bhaktapur, Nepal
 */

import heroImg from '../assets/images/hero_gym_strength_1791636335764.jpg';
import aboutImg from '../assets/images/about_gym_training_1791636348463.jpg';
import strengthImg from '../assets/images/facility_strength_zone_1791636360177.jpg';
import cardioImg from '../assets/images/facility_cardio_zone_1791636370981.jpg';
import functionalImg from '../assets/images/facility_functional_turf_1791636383291.jpg';

export interface BusinessConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  location: {
    street: string;
    city: string;
    district: string;
    country: string;
    landmarkNotice: string;
    googleMapsUrl: string;
  };
  contact: {
    whatsappNumber: string;
    phoneDisplay: string;
    phoneRaw: string;
    emailDisplay: string;
  };
  openingHours: {
    days: string;
    morningSession: string;
    eveningSession: string;
    saturdayHours: string;
    memberNote: string;
  };
}

export const GYM_CONFIG: BusinessConfig = {
  brandName: 'XTREME MUSCLE GYM N PHYSICAL FITNESS',
  shortName: 'XTREME MUSCLE GYM',
  tagline: 'BUILD STRENGTH. BECOME XTREME.',
  location: {
    street: 'Balkot Main Road',
    city: 'Balkot',
    district: 'Bhaktapur',
    country: 'Nepal',
    landmarkNotice: 'Conveniently situated in Balkot, Bhaktapur for local fitness enthusiasts.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Xtreme+Muscle+Gym+Balkot+Bhaktapur+Nepal',
  },
  contact: {
    whatsappNumber: '9779841791498',
    phoneDisplay: '9841791498',
    phoneRaw: '+9779841791498',
    emailDisplay: 'contact@xtrememuscle.np',
  },
  openingHours: {
    days: 'Sunday – Friday',
    morningSession: '5:30 AM – 11:00 AM',
    eveningSession: '4:00 PM – 9:00 PM',
    saturdayHours: '6:00 AM – 12:00 PM (Morning Session)',
    memberNote: 'Floor trainers and staff are present during all scheduled morning and evening training hours.',
  },
};

/**
 * Generate a prefilled WhatsApp link safely
 */
export function generateWhatsAppLink(message: string): string {
  const cleanNumber = GYM_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'strength' | 'free-weights' | 'cardio' | 'functional' | 'personal-training';
  categoryLabel: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    id: 'heavy-strength',
    title: 'Heavy Strength & Power Cages',
    category: 'strength',
    categoryLabel: 'Strength Training',
    description: 'High-grade Olympic barbells, calibrated steel & bumper plates, and rigid squat racks built for serious lifting.',
    features: ['Olympic Barbells', 'Reinforced Power Racks', 'Deadlift Platforms'],
    image: strengthImg,
    alt: 'Strength training power cages and barbells in clean dark lighting',
  },
  {
    id: 'free-weights',
    title: 'Dumbbell & Free Weight Floor',
    category: 'free-weights',
    categoryLabel: 'Free Weights',
    description: 'Comprehensive dumbbell lineup with ergonomic grip knurling, adjustable benches, and cable crossover stations.',
    features: ['High-Range Dumbbells', 'Incline & Flat Benches', 'Cable Towers'],
    image: aboutImg,
    alt: 'Free weight training zone with dumbbells and lifting benches',
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardio & Endurance Suite',
    category: 'cardio',
    categoryLabel: 'Cardio & Stamina',
    description: 'Motorized and manual sprint treadmills, rowing machines, and spin bikes to build cardiovascular capacity.',
    features: ['Commercial Treadmills', 'Rowing Ergometers', 'Heart-Rate Trackers'],
    image: cardioImg,
    alt: 'Cardio treadmills and conditioning equipment in sleek athletic space',
  },
  {
    id: 'functional-turf',
    title: 'Functional Turf & Calisthenics',
    category: 'functional',
    categoryLabel: 'Functional Training',
    description: 'High-density sprint turf track, heavy kettlebells, plyometric boxes, battle ropes, and pull-up rig stations.',
    features: ['Sprint Sled Track', 'Cast Iron Kettlebells', 'Multi-Grip Pull-Up Rig'],
    image: functionalImg,
    alt: 'Functional turf zone with kettlebells and athletic conditioning track',
  },
  {
    id: 'personal-coaching',
    title: 'Guided Technique & Coaching Zone',
    category: 'personal-training',
    categoryLabel: 'Personal Training',
    description: 'Dedicated consultation and movement correction space for personalized workout plans and posture evaluation.',
    features: ['Form Assessment', 'Custom Workout Splits', 'Progressive Overload Tracking'],
    image: heroImg,
    alt: 'Athletic guidance and personal training coaching floor',
  },
];

export interface MembershipPlan {
  id: string;
  name: string;
  tierTag: string;
  description: string;
  priceNote: string;
  highlighted: boolean;
  benefits: string[];
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Strength',
    tierTag: 'Essential Access',
    description: 'Focused workout access for independent lifters seeking consistent access to weights and cardio.',
    priceNote: 'Inquire for Rates',
    highlighted: false,
    benefits: [
      'Full access to gym floor during standard hours',
      'Free weights, machine circuit & cardio zone',
      'Locker room & hydration station access',
      'Orientation & equipment safety induction',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Fitness',
    tierTag: 'Most Popular',
    description: 'Complete all-hours fitness access with workout tracking guidance and routine check-ins.',
    priceNote: 'Inquire for Rates',
    highlighted: true,
    benefits: [
      'Unlimited access across all operating sessions',
      'Full equipment, free weights & functional turf',
      'Monthly training split & form review',
      'Workout partner guest privileges (monthly)',
      'Priority guidance on the lifting floor',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Performance',
    tierTag: 'Comprehensive',
    description: 'Designed for athletes desiring dedicated coach supervision, programming, and nutritional advice.',
    priceNote: 'Inquire for Rates',
    highlighted: false,
    benefits: [
      'All Premium access benefits included',
      'Dedicated personal trainer consultation',
      'Customized strength & hypertrophy programming',
      'Regular body composition & milestone assessments',
      'Tailored fitness & nutritional guidelines',
    ],
  },
];

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
}

export const TRAINERS_LIST: TrainerProfile[] = [
  {
    id: 'trainer-strength',
    name: 'Strength & Conditioning',
    role: 'Barbell & Power Specialist',
    specialty: 'Powerlifting, Hypertrophy & Barbell Technique',
    bio: 'Focuses on compound movement mechanics, progressive overload principles, and building foundational athletic power with injury prevention.',
  },
  {
    id: 'trainer-functional',
    name: 'Functional & Mobility',
    role: 'Movement & Endurance Coach',
    specialty: 'Core Conditioning, High-Intensity & Mobility',
    bio: 'Dedicated to dynamic mobility, joint resilience, and cardiovascular conditioning routines tailored to all physical fitness stages.',
  },
  {
    id: 'trainer-recomposition',
    name: 'Physical Fitness & Lifestyle',
    role: 'Personal Guidance Instructor',
    specialty: 'Body Recomposition & Habit Coaching',
    bio: 'Supports sustainable training routines, structured weekly workout splits, and healthy habit formation for lasting strength and vitality.',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'functional';
  categoryLabel: string;
  image: string;
  alt: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lifting Platform & Heavy Squat Rack',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    image: heroImg,
    alt: 'Athlete squatting with barbell inside iron gym cage',
    caption: 'Built for progressive barbell lifts and safe heavy training.',
  },
  {
    id: 'gal-2',
    title: 'Deadlift & Barbell Mastery',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    image: aboutImg,
    alt: 'Chalked barbell deadlift in industrial fitness club',
    caption: 'Calibrated plates and solid platforms for power and control.',
  },
  {
    id: 'gal-3',
    title: 'Free Weight Racks & Dumbbell Stations',
    category: 'strength',
    categoryLabel: 'Free Weights',
    image: strengthImg,
    alt: 'Neat rows of dumbbells and clean workout benches',
    caption: 'Comprehensive dumbbell pairs for targeted muscle hypertrophy.',
  },
  {
    id: 'gal-4',
    title: 'Cardiovascular Training Row',
    category: 'cardio',
    categoryLabel: 'Cardio Suite',
    image: cardioImg,
    alt: 'Precision treadmills and sprint runners with red lighting',
    caption: 'Modern aerobic machines for conditioning and endurance.',
  },
  {
    id: 'gal-5',
    title: 'Athletic Conditioning & Turf Area',
    category: 'functional',
    categoryLabel: 'Functional Turf',
    image: functionalImg,
    alt: 'Functional training area with black turf, kettlebells, and pull-up rig',
    caption: 'Multi-discipline zone for calisthenics, kettlebell circuits, and speed work.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How can I inquire about current membership prices?',
    answer: 'You can submit our quick online inquiry form, message us directly on WhatsApp, or speak with our front desk in Balkot to get current monthly and seasonal membership rates.',
  },
  {
    id: 'faq-2',
    question: 'Where in Balkot, Bhaktapur is Xtreme Muscle Gym located?',
    answer: 'We are situated along Balkot Main Road in Bhaktapur, Nepal. You can use the "Get Directions" button on our location section to navigate directly using Google Maps.',
  },
  {
    id: 'faq-3',
    question: 'What training support is available for beginners?',
    answer: 'New members receive an initial equipment orientation and safety introduction. Our floor trainers assist with proper lifting posture, machine setup, and establishing a comfortable workout routine.',
  },
  {
    id: 'faq-4',
    question: 'Can I visit the gym before deciding to join?',
    answer: 'Yes! Visitors are always welcome to tour our training floors, inspect the equipment, and discuss fitness goals with our coaches during morning or evening sessions.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer personal coaching and custom workout plans?',
    answer: 'Yes, we provide dedicated coaching options including one-on-one personal guidance, technique correction, and customized workout splits tailored to your specific fitness targets.',
  },
];
