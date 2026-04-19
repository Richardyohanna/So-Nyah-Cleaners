import hero1 from "../assets/enhanced-bg1.png";
import facade_hero from "../assets/facade hero.png";
import fumigation_hero from "../assets/fumigation hero.png";
import space_hero from "../assets/space-cleaning hero.png";
import hero2 from "../assets/enhanced-bg2.png";
import hero3 from "../assets/enhanced-bg3.png";
import hero4 from "../assets/enhanced-bg4.png"


// card icons
import broom from "../assets/broom.png";
import upholstery from "../assets/chushion.png";
import carpet from "../assets/carpet.png";
import gardening from "../assets/gradening.png";
import pest from "../assets/pest.png";
import facility from "../assets/facility.png";
import eventCleaning from "../assets/event.png";
import facade from "../assets/facade.png";
import training from "../assets/training.png";

// why choose us icons
import assess from "../assets/assess.png";
import steam from "../assets/steam.png";
import fast from "../assets/fast.png";

// change these to your real images later
import survey from "../assets/survey.png";
import survey2 from "../assets/survey.png";
import survey3 from "../assets/survey.png";
import survey4 from "../assets/survey.png";
import survey5 from "../assets/survey.png";
import survey6 from "../assets/survey.png";
import survey7 from "../assets/survey.png";
import survey8 from "../assets/survey.png";
import survey9 from "../assets/survey.png";

export type FAQ = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type WhyChooseItem = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  heroImage: string;
  cardIcon: string;
  whyChooseImage: string;
  startingFrom: string;
  duration: string;
  crewSize: string;
  ctaText: string;
  processIntro: string;
  faqs: FAQ[];
  whyChooseUs: WhyChooseItem[];
  processSteps: ProcessStep[];
};

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    slug: "space-cleaning",
    title: "Space Cleaning",
    shortDescription:
      "Detailed architectural purification for high-end residential and commercial estates. Every corner, every surface, handled with editorial care.",
    intro:
      "Your space says a lot about you before you say a single word. Whether it's your home, your office, or your business premises, a clean environment isn't a luxury. It's the standard you deserve.",
    heroImage: space_hero,
    cardIcon: broom,
    whyChooseImage: survey,
    startingFrom: "N450,000",
    duration: "6-8 Hours",
    crewSize: "3 Specialists",
    ctaText: "Schedule Deep Clean",
    processIntro:
      "Your space, transformed from the inside out. At So-Nyah Cleaners, our Space Cleaning service goes beyond the surface. We combine professional deep cleaning, targeted pest control, and thorough sanitisation to give homes and offices in Abuja a genuinely fresh start.",
    faqs: [
      {
        question: "Do i need to be home?",
        answer:
          "We recommend a walkthrough at the start or finish, but many clients provide secure access codes for complete discretion.",
      },
      {
        question: "Are product pet-safe?",
        answer:
          "Yes. Our products are eco-conscious and safe for homes with children and pets when used correctly.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Eco-certified cleaning",
        description:
          "We use biodegradable cleaning products that are safe for homes, offices, children, and pets.",
      },
      {
        icon: steam,
        title: "Deep cleaning + sanitisation",
        description:
          "We go beyond surface cleaning to refresh your environment thoroughly and professionally.",
      },
      {
        icon: fast,
        title: "Flexible scheduling",
        description:
          "Early mornings, evenings, and weekends are available across Abuja districts.",
      },
    ],
    processSteps: [
      {
        title: "Initial Space Assessment",
        description:
          "We inspect the property and identify the right cleaning approach for your home or office.",
      },
      {
        title: "Dust Removal & Surface Prep",
        description:
          "We remove dust, loose debris, and prepare all surfaces for a deeper treatment.",
      },
      {
        title: "Deep Cleaning",
        description:
          "Floors, fixtures, furniture surfaces, and hard-to-reach corners are thoroughly cleaned.",
      },
      {
        title: "Targeted Sanitisation",
        description:
          "High-touch areas are sanitised for a healthier and fresher space.",
      },
      {
        title: "Final Inspection",
        description:
          "We finish with detail checks to ensure the space is polished and ready to use.",
      },
    ],
  },

  {
    id: 2,
    slug: "facade-cleaning",
    title: "Facade Cleaning",
    shortDescription:
      "Restoring the brilliance of glass and stone exteriors at any height.",
    intro:
      "Your building's first impression is its exterior. A clean building exterior communicates professionalism, pride, and attention to detail to every person who passes by.",
    heroImage: facade_hero,
    cardIcon: facade,
    whyChooseImage: survey8,
    startingFrom: "N350,000",
    duration: "5-8 Hours",
    crewSize: "3-5 Specialists",
    ctaText: "Schedule Facade Cleaning",
    processIntro:
      "We use professional pressure washing, specialised cleaning agents, and proven techniques to restore the exterior of your building.",
    faqs: [
      {
        question: "Can you clean high surfaces safely?",
        answer:
          "Yes. We use safe working practices and the right equipment for elevated areas.",
      },
      {
        question: "Will it damage the building finish?",
        answer:
          "No. We choose methods based on the surface type and exterior material.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Surface-specific cleaning",
        description:
          "We match the right method to the surface type for safer results.",
      },
      {
        icon: steam,
        title: "Exterior restoration",
        description:
          "We remove grime, algae, and watermarks to improve presentation.",
      },
      {
        icon: fast,
        title: "Minimal disruption",
        description:
          "We work efficiently around occupants and daily business operations.",
      },
    ],
    processSteps: [
      {
        title: "Exterior Inspection",
        description:
          "We inspect access points, finish type, and the level of buildup.",
      },
      {
        title: "Method Selection",
        description:
          "The right washing or treatment method is chosen for the surface.",
      },
      {
        title: "Surface Preparation",
        description:
          "Sensitive areas are protected before the cleaning begins.",
      },
      {
        title: "Facade Cleaning",
        description:
          "The building exterior is restored using professional techniques.",
      },
      {
        title: "Final Check",
        description:
          "We inspect the finish and ensure the presentation is consistent.",
      },
    ],
  },

 {
    id: 3,
    slug: "fumigation",
    title: "Fumigation",
    shortDescription:
      "Invisibly securing your environment with eco-friendly barrier technologies.",
    intro:
      "Pests don't announce themselves. They settle in quietly, breed fast, and by the time you notice the signs, the problem is already significant.",
    heroImage: fumigation_hero,
    cardIcon: pest,
    whyChooseImage: survey5,
    startingFrom: "N150,000",
    duration: "2-4 Hours",
    crewSize: "2 Technicians",
    ctaText: "Book Pest Control",
    processIntro:
      "We inspect, identify the source of infestation, apply the right treatment, and advise you on how to prevent recurrence.",
    faqs: [
      {
        question: "Are your chemicals safe?",
        answer:
          "Yes. We use eco-conscious treatments that are effective when properly applied.",
      },
      {
        question: "Will I need a follow-up treatment?",
        answer:
          "Some infestations may require follow-up depending on severity and pest type.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Thorough inspection",
        description:
          "We find the source of the infestation, not just the visible signs.",
      },
      {
        icon: steam,
        title: "Targeted treatment",
        description:
          "The treatment is matched to the pest type and environment.",
      },
      {
        icon: fast,
        title: "Prevention guidance",
        description:
          "We advise you on steps to reduce the chance of re-infestation.",
      },
    ],
    processSteps: [
      {
        title: "Inspection",
        description:
          "We assess the property and identify the pest type and risk zones.",
      },
      {
        title: "Treatment Planning",
        description:
          "We choose the right approach for the level and kind of infestation.",
      },
      {
        title: "Application",
        description:
          "Treatments are applied safely and strategically to problem areas.",
      },
      {
        title: "Safety Guidance",
        description:
          "We explain re-entry timing and post-treatment care where necessary.",
      },
      {
        title: "Prevention Advice",
        description:
          "You receive guidance to help prevent future infestation.",
      },
    ],
  },

  {
    id: 4,
    slug: "gardening",
    title: "Gardening",
    shortDescription:
      "Sculpting outdoor sanctuaries that complement your indoor purity.",
    intro:
      "Your outdoor space is the first thing visitors see. A well-kept garden, a trimmed lawn, and clean surroundings say something about the home or business behind them before anyone steps through the door.",
    heroImage: hero3,
    cardIcon: gardening,
    whyChooseImage: survey4,
    startingFrom: "N120,000",
    duration: "2-6 Hours",
    crewSize: "2 Gardeners",
    ctaText: "Book Gardening",
    processIntro:
      "From lawn mowing and edging to shrub trimming, weeding, and bed maintenance, our team keeps your compound looking sharp throughout the year.",
    faqs: [
      {
        question: "Do you offer regular maintenance?",
        answer:
          "Yes. Weekly, bi-weekly, and monthly plans can be arranged.",
      },
      {
        question: "Do you use harmful lawn chemicals?",
        answer:
          "No. We take an eco-conscious approach to outdoor care.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Attention to outdoor detail",
        description:
          "We care for gardens with the same professionalism we bring indoors.",
      },
      {
        icon: steam,
        title: "Season-aware upkeep",
        description:
          "We understand Abuja's climate and maintain gardens accordingly.",
      },
      {
        icon: fast,
        title: "Reliable scheduled visits",
        description:
          "One-off and recurring maintenance options are available.",
      },
    ],
    processSteps: [
      {
        title: "Site Assessment",
        description:
          "We inspect the lawn, garden beds, shrubs, and compound layout.",
      },
      {
        title: "Clearing & Weeding",
        description:
          "Overgrowth, leaves, and unwanted weeds are removed.",
      },
      {
        title: "Trimming & Mowing",
        description:
          "Lawns are cut and shrubs are shaped for a neater look.",
      },
      {
        title: "Garden Finishing",
        description:
          "Edges and visible details are refined for a polished result.",
      },
      {
        title: "Final Review",
        description:
          "We ensure the outdoor space looks clean, balanced, and well-presented.",
      },
    ],
  },
  {
    id: 5,
    slug: "carpet-revamp",
    title: "Carpet Revamp",
    shortDescription:
      "Deep-fiber restoration techniques that breathe life back into premium flooring textiles.",
    intro:
      "The carpet you gave up on we bring it back. What looks like a worn-out, stained, dull carpet is often just a carpet that has never had a proper professional clean.",
    heroImage: hero2,
    cardIcon: carpet,
    whyChooseImage: survey3,
    startingFrom: "N220,000",
    duration: "4-6 Hours",
    crewSize: "2-3 Specialists",
    ctaText: "Book Carpet Revamp",
    processIntro:
      "Our Carpet Revamp service uses hot water extraction to reach deep into carpet fibres, dissolve embedded dirt, lift stains, eliminate odours, and restore original colour and texture.",
    faqs: [
      {
        question: "Can old stains be removed?",
        answer:
          "Many stains can be significantly improved, especially with early treatment and the right extraction process.",
      },
      {
        question: "How long will drying take?",
        answer:
          "Most carpets are ready within 4-6 hours depending on thickness and airflow.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Professional stain treatment",
        description:
          "We assess stains and fibre type before applying the right treatment.",
      },
      {
        icon: steam,
        title: "Hot water extraction",
        description:
          "A deep-cleaning method that lifts dirt and odours from carpet fibres.",
      },
      {
        icon: fast,
        title: "Extends carpet lifespan",
        description:
          "A proper revamp can restore presentation and delay replacement costs.",
      },
    ],
    processSteps: [
      {
        title: "Carpet Inspection",
        description:
          "We inspect fibre condition, stains, and traffic patterns.",
      },
      {
        title: "Pre-vacuuming",
        description:
          "Loose dirt and debris are removed before wet treatment begins.",
      },
      {
        title: "Stain Pre-treatment",
        description:
          "Heavy marks and problem areas are treated with suitable solutions.",
      },
      {
        title: "Hot Water Extraction",
        description:
          "We deep-clean the carpet fibres to remove embedded grime and odours.",
      },
      {
        title: "Drying & Grooming",
        description:
          "The carpet is groomed for even drying and a better final finish.",
      },
    ],
  },
 

  {
    id: 6,
    slug: "facility-management",
    title: "Facility Management",
    shortDescription:
      "Comprehensive stewardship for commercial towers and residential complexes.",
    intro:
      "Running a commercial property, office complex, or estate in Abuja is demanding enough without the added pressure of managing cleaning rotas, maintenance schedules, and the constant upkeep of shared spaces.",
    heroImage: hero4,
    cardIcon: facility,
    whyChooseImage: survey6,
    startingFrom: "N650,000",
    duration: "Ongoing",
    crewSize: "Dedicated Team",
    ctaText: "Request Proposal",
    processIntro:
      "We work as an extension of your team, showing up reliably, maintaining standards, and proactively flagging issues before they become problems.",
    faqs: [
      {
        question: "Can this be a long-term service?",
        answer:
          "Yes. We offer daily, weekly, and custom schedules for ongoing facility support.",
      },
      {
        question: "Do you provide reports?",
        answer:
          "Yes. Regular inspection updates and communication can be included.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Dedicated service team",
        description:
          "Consistent faces and consistent standards for your facility.",
      },
      {
        icon: steam,
        title: "Flexible agreements",
        description:
          "Daily, weekly, and custom service arrangements are available.",
      },
      {
        icon: fast,
        title: "Accountability",
        description:
          "Clear reporting and direct communication help maintain standards.",
      },
    ],
    processSteps: [
      {
        title: "Facility Review",
        description:
          "We inspect the property and understand traffic, workflow, and maintenance needs.",
      },
      {
        title: "Service Planning",
        description:
          "A schedule is created around your operational requirements.",
      },
      {
        title: "Team Deployment",
        description:
          "Our team begins the routine upkeep and managed cleaning cycle.",
      },
      {
        title: "Quality Monitoring",
        description:
          "Standards are checked regularly to maintain consistency.",
      },
      {
        title: "Ongoing Reporting",
        description:
          "We keep you informed and adjust the service as needed.",
      },
    ],
  },

  {
    id: 7,
    slug: "event-cleaning",
    title: "Event Cleaning",
    shortDescription:
      "Pre-event preparation and post-event restoration for elite gatherings.",
    intro:
      "You planned the event. We'll handle the mess. You've spent weeks organising every detail. The last thing you need is to spend the hours after your event exhausted and cleaning up.",
    heroImage: hero1,
    cardIcon: eventCleaning,
    whyChooseImage: survey7,
    startingFrom: "N200,000",
    duration: "Event-based",
    crewSize: "4-6 Specialists",
    ctaText: "Book Event Cleaning",
    processIntro:
      "We provide professional event cleaning before, during, and after your occasion so the venue stays spotless throughout.",
    faqs: [
      {
        question: "Can you clean while the event is ongoing?",
        answer:
          "Yes. Our team works discreetly to maintain cleanliness during the event.",
      },
      {
        question: "Do you handle post-event cleanup too?",
        answer:
          "Yes. We cover pre-event, during-event, and post-event cleaning.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Full event coverage",
        description:
          "We support the venue before, during, and after the event.",
      },
      {
        icon: steam,
        title: "Discreet team",
        description:
          "Our cleaners work around guests and activities without disruption.",
      },
      {
        icon: fast,
        title: "Fast mobilisation",
        description:
          "We can deploy quickly for events across Abuja.",
      },
    ],
    processSteps: [
      {
        title: "Pre-event Preparation",
        description:
          "We make sure the venue is spotless before guests arrive.",
      },
      {
        title: "Setup Support",
        description:
          "Waste points and key maintenance zones are prepared.",
      },
      {
        title: "During-event Cleaning",
        description:
          "We maintain high-traffic areas discreetly during the event.",
      },
      {
        title: "Post-event Cleanup",
        description:
          "After the event, we clean, clear, and restore the venue.",
      },
      {
        title: "Final Venue Reset",
        description:
          "The space is left clean and ready for handover or reuse.",
      },
    ],
  },
    {
    id: 8,
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    shortDescription:
      "Preserving the integrity of fine fabrics and leather with specialized organic treatments.",
    intro:
      "Your furniture deserves better than a vacuum. That sofa you love is holding more than memories. Over time, sofas, chairs, and mattresses absorb dust mites, food particles, and bacteria that regular vacuuming simply cannot reach.",
    heroImage: hero1,
    cardIcon: upholstery,
    whyChooseImage: survey2,
    startingFrom: "N180,000",
    duration: "3-5 Hours",
    crewSize: "2 Specialists",
    ctaText: "Book Upholstery Clean",
    processIntro:
      "So-Nyah Cleaners' Upholstery Cleaning service uses professional steam extraction and fabric-safe techniques to reach deep into your furniture fibres, lifting out what has built up over months or years.",
    faqs: [
      {
        question: "Can you clean delicate fabrics?",
        answer:
          "Yes. We assess the fabric type first and select the right method for velvet, linen, microfibre, and more.",
      },
      {
        question: "How long before I can use it again?",
        answer:
          "Most furniture is ready to use within hours depending on ventilation and fabric type.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Fabric-type assessment",
        description:
          "Each fabric is tested first so the cleaning method matches the material safely.",
      },
      {
        icon: steam,
        title: "Steam extraction",
        description:
          "We remove trapped dirt, allergens, and bacteria from deep inside the fibres.",
      },
      {
        icon: fast,
        title: "Fast drying",
        description:
          "Most furniture is ready for use within hours, not days.",
      },
    ],
    processSteps: [
      {
        title: "Fabric Inspection",
        description:
          "We inspect the furniture material and determine the correct cleaning method.",
      },
      {
        title: "Dry Soil Removal",
        description:
          "Loose dirt and particles are vacuumed out before treatment begins.",
      },
      {
        title: "Spot Treatment",
        description:
          "Stained and heavily used areas are pre-treated carefully.",
      },
      {
        title: "Deep Extraction Cleaning",
        description:
          "We perform fabric-safe extraction to clean deeply without damage.",
      },
      {
        title: "Drying & Finishing",
        description:
          "The furniture is groomed and left clean, fresh, and healthier to use.",
      },
    ],
  },



  {
    id: 9,
    slug: "training-consulting",
    title: "Training & Consulting",
    shortDescription:
      "Empowering your in-house teams with Pristine protocols and eco-standards.",
    intro:
      "Good cleaning is a skill. Great cleaning is a system. If you want to build a cleaning operation that your clients trust, your staff take pride in, and your business profits from, So-Nyah Cleaners can help you get there.",
    heroImage: hero1,
    cardIcon: training,
    whyChooseImage: survey9,
    startingFrom: "N300,000",
    duration: "1-3 Days",
    crewSize: "Lead Consultant + Team",
    ctaText: "Book Training Session",
    processIntro:
      "We help businesses and teams build a cleaning operation that genuinely works, from staff training and product selection to quality control systems.",
    faqs: [
      {
        question: "Is this only for cleaning companies?",
        answer:
          "No. Hotels, property managers, facility teams, and other organisations can benefit too.",
      },
      {
        question: "Do you cover business systems too?",
        answer:
          "Yes. We cover quality control, product selection, team development, and client-facing systems.",
      },
    ],
    whyChooseUs: [
      {
        icon: assess,
        title: "Practical experience",
        description:
          "Our guidance is based on real-world field experience, not theory only.",
      },
      {
        icon: steam,
        title: "Operations-focused training",
        description:
          "We focus on systems, workflows, and standards that actually work.",
      },
      {
        icon: fast,
        title: "Sustainable improvement",
        description:
          "The goal is stronger service quality, better trust, and repeat business.",
      },
    ],
    processSteps: [
      {
        title: "Needs Assessment",
        description:
          "We identify your current gaps, goals, and operational challenges.",
      },
      {
        title: "Training Plan",
        description:
          "A tailored structure is created for your team or organisation.",
      },
      {
        title: "Hands-on Session",
        description:
          "We deliver practical training and consulting around real operations.",
      },
      {
        title: "System Improvement",
        description:
          "We recommend process and quality control improvements.",
      },
      {
        title: "Follow-up Guidance",
        description:
          "You receive clear next steps to implement and sustain progress.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};