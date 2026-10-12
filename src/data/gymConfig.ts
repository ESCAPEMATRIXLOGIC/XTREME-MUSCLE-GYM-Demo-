/**
 * Xtreme Muscle Gym N Physical Fitness - Configuration & Business Data
 * Balkot, Bhaktapur, Nepal
 */

import gymFloorImg from '../assets/images/gym_interior_floor_1791724114357.jpg';
import barbellStationImg from '../assets/images/gym_barbell_station_1791724130411.jpg';
import powerCagesImg from '../assets/images/gym_power_cages_1791724158530.jpg';
import dumbbellRackImg from '../assets/images/gym_dumbbell_racks_1791724144488.jpg';
import cardioTreadmillsImg from '../assets/images/gym_cardio_treadmills_1791724175270.jpg';

// Champions & Discipline Motivational Posters
import gogginsImg from '../assets/images/goggins_motivation_1791735710772.jpg';
import arnoldImg from '../assets/images/arnold_motivation_1791735723912.jpg';
import ronnieImg from '../assets/images/ronnie_motivation_1791735738866.jpg';
import dorianImg from '../assets/images/dorian_motivation_1791735750081.jpg';

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
    description: 'Yellow and black steel power cages, squat racks, and calibrated Olympic barbells engineered for heavy compound lifts.',
    features: ['Olympic Barbells', 'Heavy Duty Power Cages', 'Calibrated Iron Plates'],
    image: powerCagesImg,
    alt: 'Heavy yellow steel power cages and squat racks in empty gym floor with blue mats',
  },
  {
    id: 'free-weights',
    title: 'Dumbbell & Free Weight Floor',
    category: 'free-weights',
    categoryLabel: 'Free Weights',
    description: 'Comprehensive dumbbell lineup on heavy steel racks, flat and incline adjustable benches, and full-length mirror wall.',
    features: ['Matched Dumbbell Pairs', 'Incline & Flat Benches', 'Mirror Lifting Zone'],
    image: dumbbellRackImg,
    alt: 'Two-tier steel rack of black iron dumbbells and workout benches in empty gym',
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardio & Endurance Suite',
    category: 'cardio',
    categoryLabel: 'Cardio & Stamina',
    description: 'Commercial running treadmills and stationary spin bikes for warm-ups, endurance building, and conditioning.',
    features: ['Commercial Treadmills', 'Spin Exercise Bikes', 'Endurance Station'],
    image: cardioTreadmillsImg,
    alt: 'Row of modern treadmills and exercise spin bikes in clean empty fitness room',
  },
  {
    id: 'functional-turf',
    title: 'Functional Barbell & Lifting Stations',
    category: 'functional',
    categoryLabel: 'Functional Training',
    description: 'Independent barbell stations with yellow uprights, chalk stations, and blue rubber floor for deadlifts and presses.',
    features: ['Barbell Platform', 'Cast Iron Plates', 'Chalk Station'],
    image: barbellStationImg,
    alt: 'Barbell lifting station with black iron plates and chalk block on blue rubber floor',
  },
  {
    id: 'personal-coaching',
    title: 'Main Workout Floor & Training Layout',
    category: 'personal-training',
    categoryLabel: 'Personal Training',
    description: 'Spacious gym layout with yellow benches, cable stations, and comprehensive equipment for structured workout splits.',
    features: ['Spacious Floor Layout', 'Cable Machine Stations', 'Dedicated Coaching Area'],
    image: gymFloorImg,
    alt: 'Spacious empty gym interior with yellow benches, racks, blue floor, and mirror walls',
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
    title: 'Main Workout Floor & Lifting Stations',
    category: 'strength',
    categoryLabel: 'Workout Floor',
    image: gymFloorImg,
    alt: 'Empty workout floor with yellow lifting benches and blue flooring',
    caption: 'Equipped with heavy-duty benches, Olympic barbells, and full-length mirrors.',
  },
  {
    id: 'gal-2',
    title: 'Barbell Uprights & Plate Station',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    image: barbellStationImg,
    alt: 'Yellow barbell station loaded with black Olympic plates in empty gym',
    caption: 'Solid barbell station and chalk stand for compound power movements.',
  },
  {
    id: 'gal-3',
    title: 'Dumbbell Racks & Free Weights Zone',
    category: 'strength',
    categoryLabel: 'Free Weights',
    image: dumbbellRackImg,
    alt: 'Two-tier dumbbell rack holding pairs of dumbbells with workout benches',
    caption: 'Comprehensive dumbbell pairs arranged by weight for targeted hypertrophy.',
  },
  {
    id: 'gal-4',
    title: 'Yellow Power Cages & Squat Racks',
    category: 'functional',
    categoryLabel: 'Power Cages',
    image: powerCagesImg,
    alt: 'Heavy yellow steel power cages and squat racks in empty gym with blue floor',
    caption: 'Rigid steel power cages with pull-up bars and weight horn storage.',
  },
  {
    id: 'gal-5',
    title: 'Cardiovascular Training Deck',
    category: 'cardio',
    categoryLabel: 'Cardio Suite',
    image: cardioTreadmillsImg,
    alt: 'Line of commercial treadmills and exercise spin bikes in clean gym',
    caption: 'Running treadmills and stationary spin bikes for aerobic capacity and stamina.',
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

export interface MotivationalSlogan {
  id: string;
  name: string;
  title: string;
  slogan: string;
  quote: string;
  image: string;
  discipline: string;
  keyRule: string;
  badge: string;
  accentColor: string;
  highlightWords: string[];
}

export const MOTIVATIONAL_SLOGANS: MotivationalSlogan[] = [
  {
    id: 'slogan-goggins',
    name: 'David Goggins',
    title: 'Ultramarathon Athlete & Mental Toughness Icon',
    slogan: 'STAY HARD!',
    quote: "Don't stop when you're tired. Stop when you're done. When your mind is telling you you're completely exhausted, you're only at 40 percent of your true capability.",
    image: gogginsImg,
    discipline: 'Mental Toughness & Relentless Willpower',
    keyRule: 'The 40% Rule • Zero Excuses',
    badge: 'UNBREAKABLE WILL',
    accentColor: '#dc2626',
    highlightWords: ['STAY', 'HARD!'],
  },
  {
    id: 'slogan-arnold',
    name: 'Arnold Schwarzenegger',
    title: '7x Mr. Olympia & Golden Era Titan',
    slogan: 'NO PAIN, NO GAIN — CONQUER!',
    quote: "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
    image: arnoldImg,
    discipline: 'Relentless Vision & Hypertrophy Focus',
    keyRule: 'The Last 3 Reps Make The Champion',
    badge: 'GOLDEN ERA MINDSET',
    accentColor: '#ef4444',
    highlightWords: ['NO PAIN', 'NO GAIN', 'CONQUER!'],
  },
  {
    id: 'slogan-ronnie',
    name: 'Ronnie Coleman',
    title: '8x Mr. Olympia Heavyweight Legend',
    slogan: 'YEAH BUDDY! LIGHT WEIGHT BABY!',
    quote: "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weights. There is no easy way out. You gotta grind for every single rep.",
    image: ronnieImg,
    discipline: 'Heavy Iron Power & Unrivaled Work Ethic',
    keyRule: 'Ain’t Nothin’ To It But To Do It',
    badge: 'PURE IRON GRIT',
    accentColor: '#b91c1c',
    highlightWords: ['YEAH BUDDY!', 'LIGHT WEIGHT BABY!'],
  },
  {
    id: 'slogan-dorian',
    name: 'Dorian Yates',
    title: '6x Mr. Olympia & High-Intensity Pioneer',
    slogan: 'BLOOD & GUTS!',
    quote: "Success isn't given. It's earned in the dark, under the iron. One all-out set taken beyond absolute failure will forge what ten easy sets never could.",
    image: dorianImg,
    discipline: 'High Intensity Training (HIT) & Heavy Duty',
    keyRule: 'Total Focus Beyond Absolute Failure',
    badge: 'THE SHADOW DISCIPLINE',
    accentColor: '#991b1b',
    highlightWords: ['BLOOD', '&', 'GUTS!'],
  },
];

