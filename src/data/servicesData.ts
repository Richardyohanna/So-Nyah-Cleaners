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
      `Let your space speak before you do with the So-nyah effect.
      At So-nyah Cleaners handle deep cleaning of private residence, hotel apartments, corporate office, or commercial properties. A clean environment is not luxury, it is a reflection of standard, discipline, and attention to detail.

      We deliver structured and professional cleaning solutions designed to create smiles, elevate your space and restore order, using safe products and eco conscious methods that protect both your space and its occupants.
    `,
    intro:
      `Let your space speak before you do with the So-nyah effect.
       At So-nyah Cleaners handle deep cleaning of private residence, hotel apartments, corporate office, or commercial properties. A clean environment is not luxury, it is a reflection of standard, discipline, and attention to detail.

        We deliver structured and professional cleaning solutions designed to create smiles, elevate your space and restore order, using safe products and eco conscious methods that protect both your space and its occupants.
      `,
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
    slug: "post-construction",
    title: "Post-Construction Cleaning",
    shortDescription:
      `Construction may be complete, but the project is not finished until the space is professionally cleaned. So-nyah Cleaners turns your site to a statement.
Over here, we understand that post-construction cleaning signifies a holistic approach that reveals the true quality of the work done. Dust, paint splashes, cement residue, adhesive marks, and debris can hide the beauty of a newly built or renovated space when left untouched.
Our promise is to turn construction sites into move-in ready, excellent environments.
`,
    intro:
      `Construction may be complete, but the project is not finished until the space is professionally cleaned. So-nyah Cleaners turns your site to a statement.
Over here, we understand that post-construction cleaning signifies a holistic approach that reveals the true quality of the work done. Dust, paint splashes, cement residue, adhesive marks, and debris can hide the beauty of a newly built or renovated space when left untouched.
Our promise is to turn construction sites into move-in ready, excellent environments.
`,
    heroImage: hero1,
    cardIcon: training,
    whyChooseImage: survey9,
    startingFrom: "N300,000",
    duration: "1-3 Days",
    crewSize: "Lead Consultant + Team",
    ctaText: "Book Training Session",
    processIntro:
      "We turn newly built or renovated spaces into clean, polished, and move-in ready environments by removing dust, debris, paint splashes, and construction residue.",
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

  {
    id: 3,
    slug: "facade-cleaning",
    title: "Facad Cleaning Services",
    shortDescription:
      "Your building is your first impression, make it count.",
    intro:
      `Your building is your first impression, make it count.
A clean exterior communicates professionalism, excellence, and attention to detail before anyone steps inside.

Using specialised equipment and safe cleaning methods, So-nyah restores building facades, glass panels, and exterior surfaces to a clean, polished, and professional standard.
`,
    heroImage: facade_hero,
    cardIcon: facade,
    whyChooseImage: survey8,
    startingFrom: "N350,000",
    duration: "5-8 Hours",
    crewSize: "3-5 Specialists",
    ctaText: "Schedule Facade Cleaning",
    processIntro:
      "Your building is your first impression, make it count.",
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
    id: 4,
    slug: "facility-management",
    title: "Facility Management",
    shortDescription:
      "We manage your space Facility so you can focus on what matters.",
    intro:
      `We manage your space Facility so you can focus on what matters.
Maintaining a commercial property or residential estate requires structure, consistency, and attention to detail.

So-nyah Cleaners provides comprehensive facility management services, from cleaning operations, maintenance coordination, and routine upkeep; ensuring your environment runs efficiently, professionally, and without disruption.
`,
    heroImage: hero4,
    cardIcon: facility,
    whyChooseImage: survey6,
    startingFrom: "N650,000",
    duration: "Ongoing",
    crewSize: "Dedicated Team",
    ctaText: "Request Proposal",
    processIntro:
      `We manage your space Facility so you can focus on what matters.
Maintaining a commercial property or residential estate requires structure, consistency, and attention to detail.

So-nyah Cleaners provides comprehensive facility management services, from cleaning operations, maintenance coordination, and routine upkeep; ensuring your environment runs efficiently, professionally, and without disruption.
`,
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
    id: 5,
    slug: "event-cleaning",
    title: "Event Cleaning",
    shortDescription:
      "Pre-event preparation and post-event restoration for elite gatherings.",
    intro:
      `So-nyah Cleaners collaborates with Event managers, planners, coordinators and vendors to handle all cleaning concerns, from pre-event setup to post-event dismantle. Our mandate is to ensure your entire venue remains spotless at every stage.

Your guests should remember the experience; not the mess. We take care of the cleaning, so you can focus on delivering excellence.
`,
    heroImage: hero1,
    cardIcon: eventCleaning,
    whyChooseImage: survey7,
    startingFrom: "N200,000",
    duration: "Event-based",
    crewSize: "4-6 Specialists",
    ctaText: "Book Event Cleaning",
    processIntro:
      `So-nyah Cleaners collaborates with Event managers, planners, coordinators and vendors to handle all cleaning concerns, from pre-event setup to post-event dismantle. Our mandate is to ensure your entire venue remains spotless at every stage.

Your guests should remember the experience; not the mess. We take care of the cleaning, so you can focus on delivering excellence.
`,
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
    id: 6,
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    shortDescription:
      "Your furniture deserves more attention than just surface care.",
    intro:
      `Your furniture deserves more attention than just surface care. Sofas, chairs, and mattresses quietly accumulate dust mites, bacteria, and allergens that ordinary cleaning cannot remove. What you do not see often affects comfort, air quality, and overall wellbeing.

Our deep upholstery cleaning process penetrates beneath the surface; removing embedded contaminants while restoring freshness, texture, and appearance.
`,
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
    id: 7,
    slug: "carpet-revamp",
    title: "Carpet Revamp",
    shortDescription:
      "So-nyah Cleaners do not just clean carpets, we specialise in restoring them, by paying attention to tough stains.",
    intro:
     `So-nyah Cleaners do not just clean carpets, we specialise in restoring them, by paying attention to tough stains.

What appears worn-out or permanently stained is often the result of incomplete cleaning. With the right professional treatment, most carpets can be revived to a near new condition.

Let So-nyah Carpet revamp bring life back into your space.
`,
    heroImage: hero2,
    cardIcon: carpet,
    whyChooseImage: survey3,
    startingFrom: "N220,000",
    duration: "4-6 Hours",
    crewSize: "2-3 Specialists",
    ctaText: "Book Carpet Revamp",
    processIntro:
      `So-nyah Cleaners do not just clean carpets, we specialise in restoring them, by paying attention to tough stains.

What appears worn-out or permanently stained is often the result of incomplete cleaning. With the right professional treatment, most carpets can be revived to a near new condition.

Let So-nyah Carpet revamp bring life back into your space.
`,
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
    id: 8,
    slug: "fumigation",
    title: "Pest Control & General Fumigation",
    shortDescription:
      "In Nigeria’s climate, infestations can escalate quickly if not handled professionally.",
    intro:
      `In Nigeria’s climate, infestations can escalate quickly if not handled professionally. From insects to rodents, to reptiles to infestations, no space is completely immune.

Our spraying and fogging pest control solutions are strategic, safe, and effective; eliminating existing infestations while preventing future occurrences using environmentally approved chemicals and responsible treatment methods
`,
    heroImage: fumigation_hero,
    cardIcon: pest,
    whyChooseImage: survey5,
    startingFrom: "N150,000",
    duration: "2-4 Hours",
    crewSize: "2 Technicians",
    ctaText: "Book Pest Control",
    processIntro:
      `In Nigeria’s climate, infestations can escalate quickly if not handled professionally. From insects to rodents, to reptiles to infestations, no space is completely immune.

Our spraying and fogging pest control solutions are strategic, safe, and effective; eliminating existing infestations while preventing future occurrences using environmentally approved chemicals and responsible treatment methods
`,
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
    id: 9,
    slug: "gardening",
    title: "Gardening Care & Revamp",
    shortDescription:
      "First impressions begin before the door opens.",
    intro:
      `First impressions begin before the door opens.
Your outdoor environment sets the tone for everything inside. Well-maintained lawn, trimmed greenery, and clean surroundings communicate care and prestige.

We provide professional garden maintenance and outdoor cleaning services that ensure your property stands out, always.
`,
    heroImage: hero3,
    cardIcon: gardening,
    whyChooseImage: survey4,
    startingFrom: "N120,000",
    duration: "2-6 Hours",
    crewSize: "2 Gardeners",
    ctaText: "Book Gardening",
    processIntro:
     `  First impressions begin before the door opens.
Your outdoor environment sets the tone for everything inside. Well-maintained lawn, trimmed greenery, and clean surroundings communicate care and prestige.

We provide professional garden maintenance and outdoor cleaning services that ensure your property stands out, always.`,
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
  id: 10,
  slug: "training",
  title: "Cleaning Training & Consultancy Services",
  shortDescription:
    "We equip individuals and organisations with the knowledge, systems, and guidance needed to build successful cleaning operations.",
  intro:
    `For more than seven years, So-nyah Cleaners has gained extensive industry training, practical experience, and proven results in professional cleaning services.

Through our training and consultancy services, we help individuals and organisations build structured cleaning systems, develop well-trained professional teams, and position their operations for long-term growth and profitability.

Our goal is to guide every client from start to finish with practical, in-depth support that builds confidence, capacity, and lasting success in the cleaning industry.`,
  heroImage: hero3,
  cardIcon: gardening,
  whyChooseImage: survey4,
  startingFrom: "Custom Quote",
  duration: "1-3 Days",
  crewSize: "1-2 Consultants",
  ctaText: "Book Training",
  processIntro:
    `For more than seven years, So-nyah Cleaners has built deep expertise through industry training, hands-on experience, and proven results.

We help individuals and organisations develop structured cleaning systems, train professional teams, and position their operations for sustainable growth and profitability.`,
  faqs: [
    {
      question: "Who are these training and consultancy services for?",
      answer:
        "They are ideal for aspiring cleaners, cleaning businesses, and organisations that want to build or improve professional cleaning operations.",
    },
    {
      question: "Do you provide practical guidance from start to finish?",
      answer:
        "Yes. We offer in-depth support, helping clients build capacity, structure their operations, and understand the industry step by step.",
    },
  ],
  whyChooseUs: [
    {
      icon: assess,
      title: "Industry-backed experience",
      description:
        "Our guidance is built on over seven years of practical cleaning experience, training, and proven results.",
    },
    {
      icon: steam,
      title: "Structured operational support",
      description:
        "We help clients create efficient systems, train teams, and build a solid operational foundation.",
    },
    {
      icon: fast,
      title: "Growth-focused consulting",
      description:
        "Our approach is designed to position cleaning businesses and teams for long-term growth and profitability.",
    },
  ],
  processSteps: [
    {
      title: "Needs Assessment",
      description:
        "We identify your goals, challenges, and the current state of your cleaning operation or business idea.",
    },
    {
      title: "Strategy & System Design",
      description:
        "We help structure workflows, service standards, and practical systems for smooth operations.",
    },
    {
      title: "Training & Capacity Building",
      description:
        "We provide practical training to equip individuals and teams with professional cleaning knowledge and skills.",
    },
    {
      title: "Operational Guidance",
      description:
        "We walk you through setup, positioning, and best practices for running an effective cleaning service.",
    },
    {
      title: "Growth Support",
      description:
        "We provide direction to help you strengthen your operations for sustainability, profitability, and long-term success.",
    },
  ],
},
 







];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};