// ─── Site Metadata ───────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Decode German",
  tagline: "Student focused language learning",
  description:
    "Learn German A1–B2 in Dresden or online with small batches, native-level teachers, and a community of 1,000+ learners. Personal mentorship from beginner to fluent.",
  url: "https://www.decodegerman.com",
  email: "decodegerman@gmail.com",
  address: {
    city: "Dresden",
    country: "Germany",
  },
  whatsappNumber: "+4915904836675",
  phoneIndia: "+919871205947",
  whatsappIndia: "+919871205947",
  copyright: `© ${new Date().getFullYear()} Decode German. SPEAK.BELONG.THRIVE`,
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Beyond Classes", href: "/beyond-classes" },
] as const;

export const ctaButton = {
  label: "Get in Touch",
};

// ─── Home Page: Hero Section ─────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    image: "/home/hero-images/HERO1.webp",
    alt: "Your life in Germany starts with German",
    handwriting: "",
    heading: "Your Life in Germany Starts with",
    headingAccent: "German.",
    headingEnd: "",
  },
  {
    id: 2,
    image: "/home/hero-images/HERO2.webp",
    alt: "German is your power in Germany",
    handwriting: "",
    heading: "German is confidence. It's pride. It's your",
    headingAccent: "power",
    headingEnd: "in Germany.",
  },
  {
    id: 3,
    image: "/home/hero-images/HERO3.webp",
    alt: "When you truly know German you belong",
    handwriting: "",
    heading: "When you truly know German, you lead, you",
    headingAccent: "thrive,",
    headingEnd: "you belong.",
  },
  {
    id: 4,
    image: "/home/hero-images/HERO4.webp",
    alt: "Building confident German speakers",
    handwriting: "",
    heading: "We exist to build confident, fluent,",
    headingAccent: "unstoppable",
    headingEnd: "German speakers.",
  },
  {
    id: 5,
    image: "/home/hero-images/HERO5.webp",
    alt: "Built on purpose driven by responsibility",
    handwriting: "",
    heading: "Built on purpose. Driven by responsibility.",
    headingAccent: "Committed",
    headingEnd: "for your success.",
  },
];

export const heroCta = {
  label: "Begin Transformation",
};

// ─── Home Page: Narrative Section ────────────────────────────────────────────
export const narrativeSection = {
  tag: "The Narrative of Belonging",
  heading: "Your language isn't just a tool; it's the key to your",
  headingAccent: "identity",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJgzl7b-UKwEQLRFJ9cmgOfmOo16SiLO72ThtJVuaeUw8hvlQDfiznOoy5idT-ndw0rkZSRQ07rQhTjbk_N-uXnJoXISHpWf_7fOcSdgpybGjuETExxbDPJX_LldLKa6NHRYTsh7h3GVf03TPdoXpiViGi8LtWUGEk8nvmD_DWxghJCeDMAAwagoSrb8OU0bS7pbILd3jmTozHlOl1EtZXZ9XTx7ytUNdOLD7sb6H-opbPP8Td4UdTuU-pBueTmhT-BrlWNZoCYA",
  imageAlt: "Learning together in a community",
  body: "In Germany, your professional and personal horizons are defined by the depth of your connection. Many learn grammar, but few learn to belong. We decode the nuances that make you feel at home.",
  quote: "Stop translating your life.\nStart living it in German.",
};

// ─── Home Page: Transformation Journey ───────────────────────────────────────
export const transformationSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "German finally starts making sense.",
    label: "The Foundation",
    shapeClass: "organic-shape-1",
  },
  {
    number: "02",
    title: "Own",
    description:
      "Knowledge becomes communication.",
    label: "",
    shapeClass: "organic-shape-2",
  },
  {
    number: "03",
    title: "Live",
    description:
      "German becomes part of your daily life. Not a subject.",
    label: "",
    shapeClass: "organic-shape-3",
  },
  {
    number: "04",
    title: "Belong",
    description: "From understanding to ownership. From survival to belonging. German is not a language. It's a life.",
    label: "The Destination",
    shapeClass: "organic-shape-4",
  },
];

export const transformationHeading = {
  title: "Transformation\nJourney",
  subtitle: "Four steps to a new life...",
};

// ─── Home Page: Courses Section ──────────────────────────────────────────────
export const coursesHeading = {
  tag: "Educational Roadmap",
  heading: "Course Progression",
  accent: "Path",
  description: "Tailored intensive programs designed to move you from functional survival to professional mastery.",
};

export const courses = [
  {
    id: 1,
    level: "A1",
    name: "Beginner",
    details: [
      { text: "2.5 months" },
      { text: "4 days/week, 2 hrs/day" },
      { text: "No entrance test required" },
    ],
    description: "Your first step. Build a strong foundation in grammar, vocabulary, and everyday communication from scratch.",
  },
  {
    id: 2,
    level: "A2",
    name: "Pre-Intermediate",
    details: [
      { text: "2.5 months" },
      { text: "4 days/week, 2 hrs/day" },
      { text: "Entrance test required", italic: true },
    ],
    description: "Expand into everyday conversations and social interaction. Start expressing opinions and handling routine situations.",
  },
  {
    id: 3,
    level: "B1",
    name: "Intermediate",
    details: [
      { text: "3.5 months" },
      { text: "4 days/week, 2.5 hrs/day" },
      { text: "Entrance test required", italic: true },
    ],
    description: "Handle real-life situations independently. Discuss work, travel, and personal topics with growing fluency and confidence.",
  },
  {
    id: 4,
    level: "B2",
    name: "Professional",
    details: [
      { text: "3.5 months" },
      { text: "4 days/week, 2.5 hrs/day" },
      { text: "Entrance test required", italic: true },
    ],
    description: "The gateway to the German workforce. Master technical discussions, professional communication, and cultural fluency.",
  },
];

// ─── Home Page: How We're Different ──────────────────────────────────────────
export const coreBeliefs = [
  {
    id: 1,
    handwriting: "",
    heading: "100% Word-of-Mouth",
    headingAccent: "Growth Since 2020",
    body: "Students don't just learn here - they recommend us. Because when someone truly progresses, they don't stay silent. Every student you see came through trust, not ads. Built on care. Proven by results. Sustained by trust.",
    footer: "Trust-Earned",
    image: "/home/differentiators/DIFF1.webp",
    imageAlt: "Community and Trust",
    tags: [],
  },
  {
    id: 2,
    handwriting: "",
    heading: "Founder-Led",
    headingAccent: "Teaching",
    body: "You are not handed over. You are guided directly. Shalini designs, teaches, and leads every batch - herself. Not as a name behind the system, but as someone responsible for your progress. Because your future should never feel outsourced. Here, responsibility is real.",
    footer: "Personal Responsibility",
    image: "/home/differentiators/DIFF2.webp",
    imageAlt: "Founder Teaching",
    imageOverlayText: "12 Years Experience",
    tags: [],
  },
  {
    id: 3,
    handwriting: "",
    heading: "Entrance Tests +",
    headingAccent: "Progress Tracking",
    body: "Structured Entry. Real Progress. Every student starts at the right level - and moves forward with clarity. We stay involved in your progress. You always know where you stand - and your next step. No guesswork. No false confidence. Only real progress.",
    footer: "Accountability",
    image: "/home/differentiators/DIFF3.webp",
    imageAlt: "Progress Tracking",
    tags: [],
  },
  {
    id: 4,
    handwriting: "",
    heading: "Learn with Native",
    headingAccent: "German Speakers",
    body: "Native German. Real Conversations. You don't practice German. You speak. No scripts. No shortcuts. The moment you stop translating - you start thinking in German.",
    footer: "Authentic Communication",
    image: "/home/differentiators/DIFF4.webp",
    imageAlt: "Native Speakers",
    imageOverlayText: "Real Conversations",
    tags: [],
  },
  {
    id: 5,
    handwriting: "",
    heading: "Small Batches.",
    headingAccent: "Real Attention.",
    body: "You are not one of many. You are known. Your progress is seen. Your gaps are closed. Nothing is missed. Everything is addressed.",
    footer: "Individual Focus",
    image: "/home/differentiators/DIFF5.webp",
    imageAlt: "Small Class Sizes",
    tags: [],
  },
];

// ─── Home Page: Testimonials ─────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      "Before Decode German, I was an outsider in my own company. Now, I lead meetings with a sense of authority I never thought possible in a second language.",
    name: "Elena S.",
    role: "Tech Lead, Berlin",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_QaI_aAaHY86AyJv0GZ-NEDLaoMqdQsk57Z1kSncs1WAXEaopYX8zs_R8cBIS-j20JWF6IxyXyl3Y9bpswgETsUA6SmNsOWN16X5ySvzkgYtCOc8qYEUiGdaoXox5TuIpHKtJue-O7OTxggKhvyi106keJXEXnB0f-gFp5A_8M_U-D900iCoBzpkC3fMNWEVhZ6KvPHDdVXAsyEXQw3HbUWH-lSZZuBvdWpsaK14aFOnzhRm-kT9fwrMatBbAWD3z2Kutk4WnNqE",
  },
  {
    id: 2,
    quote:
      "The cultural nuances I learned here were the missing piece. It's not just a course; it's a guide to surviving and thriving in Germany.",
    name: "Marcus T.",
    role: "Architect, Munich",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANfMhfHG1c_cCVf1_wST0wEays6HgnbP_VDbArE053Am95fWkzB2KtntqxwEo4gZlUP55yn8859LMXEiIR4Ir699yTR921UlGa86ApeExwQF1oAqS3DF1om3RJJL5sCwR2HJV0tT61np-dAiByIBzQ6-6yMTmHQYMq4Btt8zH0gXkAR2Wq2qP4kwt_3wySDQsumMKMLpTYSsExnVGOSebRvNrpNxXgXUHZO3qQwV_tgijEN19wEhrWoyG712npwlvJJJBMkvVF2AI",
  },
  {
    id: 3,
    quote:
      "I finally feel like I have a home here. The emotional connection I made with the language changed my social life completely.",
    name: "Sarah L.",
    role: "Creative Director, Hamburg",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2HYcEP14DWmol3DKnKZ4GJnHt_bSglx3h5R60P9b-nBSX-jpWKV3ZKRUUTlz8U74PGWhGh623Dm5Ze0Z-SBwQ5homL9C5Coco-xoRcZ4KLGx_TQRQKtklQiibaIQv_uWYKTkRDUy5sIs5MZ-2nU78SrVXuYvW4NhoTpOAZ4PTI8h4iWJiMRXDKdGNze6V4nVSJIuUTap2ZWCXUtFw0FNnp62LwYqPLAUWpaHiHd8uTLOlytf1V3na-NH_TvaKP-J-eEIblhHM6xg",
  },
];

// ─── Home Page: Wall of Achievement ─────────────────────────────────────────
export const wallOfAchievement = {
  handwriting: "Our Wall of Achievement",
  polaroids: Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    image: `/home/results/${i + 1}.svg`,
    alt: `Student Result ${i + 1}`,
  })),
};

// ─── Home Page: CTA Section ──────────────────────────────────────────────────
export const homeCta = {
  handwriting: "Your story continues here...",
  heading: "Ready to",
  headingAccent: "Decode German?",
  body: "Take the very first step to begin!",
  primaryButton: { label: "Get in Touch" },
};

// ─── About Page: Hero Section ────────────────────────────────────────────────
export const aboutHero = {
  subtitle: "- The Story of Belonging",
  heading: "Language is the",
  headingAccent: "seat at the table",
  body: "A boutique German language platform crafted for the seekers, the thinkers, and those brave enough to rebuild their lives in a new tongue.",
  ctaLabel: "Begin your journey",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKCk2_YHw0uHJSHnQ1ZwaJMvA-qYNNiOAilJb_SpjP4wK4QNoW0akcFrcMqzZKr2f-gb2Zw_h3fxPKy6uKStT36XKV-637mrBx0ThlfKjlFFEuv-41hBHM8B5eaKq2Ntg9mgud5bJzNHESJyUqJs2PrHZKdZH6PqAzDRVVLXTRn6uIkPfvUu0z-JOpDh5HsyHfsq0nqlynKSTFFdoI27p1OS3ernmzAWoMYBFsOYixOCSVUpHzA1JXJJedsuUd_7B_ovnvkvjUMk",
  imageAlt: "Life in Germany - city view",
  quoteText:
    '"I finally didn\'t feel like a ghost in my own neighborhood."',
  quoteCaption: "Entry: Berlin, 2023",
};

// ─── About Page: Weight of Silence ───────────────────────────────────────────
export const weightOfSilence = {
  heading: "The Weight of\nSilence",
  sidebar:
    "It's the dinner party where you smile but remain silent, your complex inner world trapped.",
  bodyFirst:
    "Living in a foreign land without the words to express your true self is a silent weight. It's the moment at the bakery where you point instead of speaking. Decode German bridges the gap between grammar rules and genuine emotional connection.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-wEPGW7hntBOjTwlU7x4CJRA87KNpRIcDHVCXNQkdNfXGnjo-NEzM3Dub9KUZjXlNaKNl41cCGAroEyZBwf2hhbaLzFUPYWd0DeqGelPMMbqiRU4XTfOsHXFE-RKOoO84liGeYS2gS-uwIR16hoC_S60bXc3JYBKoMK1smSXNZcXt37o7-8ywTvWv_K2xR37NDEbjAEN4b5Aq-_J1CjHw6k5S5F2fDJLBTxBk-vi8x3o-q6msVMiRNYLVdHPJZGHu-iMnDlbOnw",
  imageAlt: "Atmospheric street in Germany",
  imageQuote:
    '"Language is not about tables; it\'s about the dignity of being seen."',
  bodySecond:
    "We focus on the nuance of expression-teaching you how to share your fears, your ambitions, and your humor. Because belonging isn't just about understanding others; it's about making sure others can understand you.",
  nuanceHighlight: "nuance of expression",
};

// ─── About Page: Moments of Dignity ──────────────────────────────────────────
export const momentsOfDignity = {
  heading: "Moments of Dignity",
  subtitle: "Success stories and founder reflections",
  cards: [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC81UHb8cIHz632HnAgMlX1kb-cMIQ8RWX3ycnjMwJgP7GlNsHkSU0AdpTSI21ROZ7YWLLEUYIxoXveMuvLF-d4yKpuuXPw3k9ICx6_cFirV_l6MLXS8QzIuClDRguOnz9vlEWpnNrksEmyJLKy2UlqbZLkiExMARMnvuJxClCd37LOYpGJdudAVQDkEYWLIFbvj6samUHqEXjI4-HVPP_63LboaBm1VNEUURmSyJOj09Y4Yp_Vqb3AaXjne0P_CpbILYMqXp1OuFI",
      imageAlt: "The Interview story",
      title: "The Interview",
      quote:
        '"For the first time, I didn\'t just answer questions. I asked them. I shared my vision for the role."',
      author: "Lukas M.",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCTVltqc0SvkEW-w1eXEC6CP0HiVrzXMq9LRvUT-tqtjdm-_VvFyLauXgUXfkH-hGvju3fI8eZUak7z9htS8AAmCY8z4B-fo1PTRa3PytdqaFD2cVmVEKC4kb7RrUwM2NZHK9Ls_gpAK0X2g4IYsgVOcG1FxCeWhMk6u-LXM17duBE_ZnOdLZnLIx2kz9-KMrODzUeyslKyP8BzE25Jry3CaWEEdDSJmaxBTjhiZvl72Hh5HdLdtFV9sQzH1LmRB68M3vktMZ8K2k",
      imageAlt: "Neighborly story",
      title: "Neighborly",
      quote:
        '"When my neighbor lost her cat, I could offer comfort. That conversation made this street feel like home."',
      author: "Sofia R.",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCCyqMNrVIcD-Yd15QeLl9tGDG0PoDSyVojIbTxGU-Q6_e4V9OQSmoL7-A0ZBaoVK-6XVba54ZMfxsjVS--yfX6lQCPIFJPqqitXHLd5cVEgK4AOJD6fWrGEamGHeAmD9fWzpnE-qkN60jNrXw60uUg6na79tWWwAwA0rgmGORliNSe7w9NTelU2dmmCOv4N46jnn3yk25KLunbIlW93O2nWsoP3aX58B0jfWHvTEwhFel9LJ2nFzzfEAvtIw9BBTdbrix7S2gtt3o",
      imageAlt: "On Clarity story",
      title: "On Clarity",
      quote:
        '"Dignity is the byproduct of clarity. We\'re handing back the pieces of yourself that get lost."',
      author: "Marc Weber",
    },
  ],
};

// ─── About Page: Founder's Note ──────────────────────────────────────────────
export const foundersNote = {
  tag: "Founder's Note",
  heading: "From Marc's Desk",
  paragraphs: [
    '"When I moved to Munich fifteen years ago, I didn\'t know how to \'be\' German. I didn\'t know how to joke at the pub or how to argue politely at the town hall. I felt like a child in an adult\'s world."',
    '"Decode German was born from that frustration. I wanted to build a platform that treated learners with the intellectual respect they deserve. We don\'t use cartoons. We use literature, real-life drama, and psychological insights."',
    '"Because you aren\'t just learning a language. You\'re building a new life."',
  ],
  name: "Marc Weber",
  role: "Founder, Decode German",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBa014D5Rk8UhFHXadigua1cZIi4VwVsaRT2u30NhCTsjLDkGDC-AMn9UgeIfMeE9_qrMy7TfTPFIqEdHpByLGJKFgV5PKcHwB5c3aFEeTsDb0OyYlXP2Bg9QAJB0VvGkpCQNLBjHJMBR6C7kOTiUBY5eCvIvSp1uPB-w1aZep_9woDAL1Jwwal-UOcp2Su9fTQ3o2G2A8p9oUpSDKfHRzcU1azURAXgj7w6kPaUgqCcshM1CxceoMuob-3kbnCChkjheQU2sy6FRg",
  imageAlt: "Marc Weber - Founder of Decode German",
  imageLabel: "A life spoken beautifully.",
};

// ─── About Page: CTA ─────────────────────────────────────────────────────────
export const aboutCta = {
  heading: "Your German shapes your life in Germany.",
  body: "Walk confidently through your work, daily life, and more. Join a collective of learners finding their voice in the heart of Europe.",
  primaryButton: { label: "Get in Touch" },
};

// ─── Courses Page: Hero Section ──────────────────────────────────────────────
export const courseHero = {
  subtitle: "Our Courses",
  heading: "A Structured Journey",
  headingAccent: "Through the Language.",
  body: "Every course is online, intensive, and taught in small batches. Whether you're starting from zero or preparing for an exam, we have a structured path for you.",
};

// ─── Courses Page: Course Levels ─────────────────────────────────────────────
export const courseLevels = [
  {
    id: "a1",
    level: "A1",
    title: "The Foundation",
    description:
      "Start from zero. Learn to introduce yourself, handle everyday situations like ordering food, asking for directions, filling out forms and build the confidence to exist in German.",
    image: "/courses/1.svg",
    imageAlt: "The Foundation",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask",
    details: [
      { label: "Duration", value: "2.5 Months" },
      { label: "Batch Size", value: "8–10 Students" },
    ],
    buttonLabel: "Explore A1 Course",
    buttonStyle: "outline" as const,
    resources: [
      "Netzwerk A1",
      "Concrete Guide A1",
      "NicosWeg",
      "Podcasts",
      "FM Series",
      "YouTube",
      "1-on-1 Pronunciation",
    ],
    quote: {
      text: "\u201CThe moment I ordered my first coffee without panic, the city started to feel like it wanted me there.\u201D",
      caption: "A1 Student Reflection",
      position: "bottom-right" as const,
      bgClass: "bg-warm-sand",
    },
  },
  {
    id: "a2",
    level: "A2",
    title: "The Momentum",
    description:
      "You can survive. Now learn to connect. Talk about your past, describe your routines, hold real conversations with neighbours, understand announcements and simple news.",
    image: "/courses/2.svg",
    imageAlt: "The Momentum",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask-alt",
    details: [
      { label: "Duration", value: "2.5 Months" },
      { label: "Batch Size", value: "8–10 Students" },
    ],
    buttonLabel: "Explore A2 Course",
    buttonStyle: "outline" as const,
    resources: [
      "Netzwerk A2",
      "Concrete Guide A2",
      "NicosWeg",
      "Podcasts",
      "FM Series",
      "YouTube",
      "1-on-1 Pronunciation",
    ],
    reversed: true,
  },
  {
    id: "b1",
    level: "B1",
    title: "The Independence",
    description:
      "Stop translating in your head. Express opinions, handle work conversations, understand most of what you hear in daily life, and write structured emails. Native German speaker sessions included.",
    image: "/courses/3.svg",
    imageAlt: "The Independence",
    imageAspect: "aspect-[4/5]",
    maskClass: "curated-image-mask",
    details: [
      { label: "Duration", value: "3.5 Months" },
      { label: "Intensity", value: "Deep Immersion" },
    ],
    buttonLabel: "Explore B1 Course",
    buttonStyle: "outline" as const,
    resources: [
      "Netzwerk B1",
      "Concrete Guide B1",
      "NicosWeg",
      "Podcasts",
      "FM Series",
      "YouTube",
      "German Films & Music",
      "Native Speaker Sessions",
    ],
    quote: {
      text: "\u201CB1 isn\u2019t just a level. It\u2019s the moment you stop translating in your head and start living in German.\u201D",
      caption: "",
      position: "top-left" as const,
      bgClass: "bg-charcoal text-ivory",
    },
  },
  {
    id: "b2",
    level: "B2",
    title: "The Mastery",
    description:
      "Speak with confidence. Follow complex discussions, write professional reports, understand humour and idioms, handle university lectures and workplace meetings entirely in German.",
    image: "/courses/4.svg",
    imageAlt: "The Mastery",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask-alt",
    details: [
      { label: "Duration", value: "3.5 Months" },
      { label: "Focus", value: "Professional Fluency" },
    ],
    buttonLabel: "Explore B2 Course",
    buttonStyle: "outline" as const,
    resources: [
      "Sicher! Series",
      "NicosWeg",
      "Podcasts",
      "FM Series",
      "YouTube",
      "German Films & Music",
      "Native Speaker Classes",
    ],
    reversed: true,
    quote: {
      text: "\u201CAt B2, you don\u2019t just speak German \u2014 you think, dream, and argue in it.\u201D",
      caption: "B2 Graduate",
      position: "bottom-right" as const,
      bgClass: "bg-warm-sand",
    },
  },
];

// ─── Course Detail Pages ─────────────────────────────────────────────────────
export const courseDetails: Record<
  string,
  {
    level: string;
    title: string;
    subtitle: string;
    heroDescription: string;
    heroImage: string;
    heroImageAlt: string;
    duration: string;
    batchSize: string;
    schedule: string;
    materials: string;
    price: string;
    modules: { number: string; title: string; description: string }[];
    outcomes: string[];
    testimonial: {
      quote: string;
      name: string;
      role: string;
    };
    nextLevel: { id: string; level: string; title: string } | null;
  }
> = {
  a1: {
    level: "A1",
    title: "The Foundation",
    subtitle: "Where your journey begins",
    heroDescription:
      "Begin with the basics of existence. Learn to introduce yourself, navigate daily life, and express your immediate needs with dignity. This isn\u2019t a grammar drill \u2014 it\u2019s your first step toward belonging.",
    heroImage: "/courses/1.svg",
    heroImageAlt: "A1 Course - The Foundation",
    duration: "3 Months",
    batchSize: "Max 6 Students",
    schedule: "3 sessions per week",
    materials: "Netzwerk Neu A1",
    price: "On Request",
    modules: [
      {
        number: "01",
        title: "The First Words",
        description:
          "Introductions, greetings, and the art of small talk. Learn to navigate the bakery, the U-Bahn, and the Amt with confidence.",
      },
      {
        number: "02",
        title: "The Everyday",
        description:
          "Numbers, time, shopping, and describing your world. Build the vocabulary that shapes your daily rhythm in Germany.",
      },
      {
        number: "03",
        title: "The Connection",
        description:
          "Family, hobbies, and expressing preferences. Move from transactional exchanges to genuine conversations.",
      },
      {
        number: "04",
        title: "The Foundation Complete",
        description:
          "Past tense basics, writing simple messages, and your first real conversation. You\u2019re no longer a tourist \u2014 you\u2019re a resident.",
      },
    ],
    outcomes: [
      "Order food and navigate public transport with confidence",
      "Introduce yourself and talk about your life and interests",
      "Understand simple written notices, emails, and signs",
      "Handle basic interactions at offices (Anmeldung, bank, doctor)",
      "Write short messages, forms, and personal emails",
    ],
    testimonial: {
      quote:
        "The moment I ordered my first coffee without panic, the city started to feel like it wanted me there.",
      name: "Priya K.",
      role: "Software Engineer, Berlin",
    },
    nextLevel: { id: "a2", level: "A2", title: "The Expansion" },
  },
  a2: {
    level: "A2",
    title: "The Expansion",
    subtitle: "Beyond survival, toward expression",
    heroDescription:
      "Move beyond survival. Learn to describe your past, share your dreams, and engage in meaningful exchanges with your neighbors. At A2, you begin to reclaim the complexity of who you are.",
    heroImage: "/courses/2.svg",
    heroImageAlt: "A2 Course - The Expansion",
    duration: "2.5 Months",
    batchSize: "Max 6 Students",
    schedule: "3 sessions per week",
    materials: "Netzwerk Neu A2",
    price: "On Request",
    modules: [
      {
        number: "01",
        title: "The Narrative Past",
        description:
          "Tell your story. Learn to speak about experiences, childhood memories, and the journey that brought you to Germany.",
      },
      {
        number: "02",
        title: "The Social Self",
        description:
          "Invitations, celebrations, and navigating social norms. Understand the unspoken rules of German friendships.",
      },
      {
        number: "03",
        title: "The Working World",
        description:
          "Job descriptions, workplace communication, and professional emails. Begin to function in a German-speaking office.",
      },
      {
        number: "04",
        title: "The Expansion Complete",
        description:
          "Express opinions, make comparisons, and handle unexpected situations. You now have a voice \u2014 not just a vocabulary.",
      },
    ],
    outcomes: [
      "Describe past events and tell personal stories fluently",
      "Navigate social situations: parties, dinners, neighborhood events",
      "Write semi-formal emails and short professional messages",
      "Understand and participate in conversations about everyday topics",
      "Handle basic conflict resolution and express disagreement politely",
    ],
    testimonial: {
      quote:
        "I stopped being the quiet one at dinner parties. For the first time, I could actually be funny in German.",
      name: "Carlos M.",
      role: "Designer, Munich",
    },
    nextLevel: { id: "b1", level: "B1", title: "The Independence" },
  },
  b1: {
    level: "B1",
    title: "The Independence",
    subtitle: "The threshold of true fluency",
    heroDescription:
      "The threshold of fluency. Articulate complex thoughts, debate opinions, and navigate professional environments with nuance and confidence. B1 is where you stop translating and start living.",
    heroImage: "/courses/3.svg",
    heroImageAlt: "B1 Course - The Independence",
    duration: "3 Months",
    batchSize: "Max 6 Students",
    schedule: "4 sessions per week",
    materials: "Netzwerk Neu B1+",
    price: "On Request",
    modules: [
      {
        number: "01",
        title: "The Deep Dive",
        description:
          "Complex grammar structures, Konjunktiv II, and passive voice. Master the tools that separate tourists from residents.",
      },
      {
        number: "02",
        title: "The Debate",
        description:
          "Express and defend opinions on politics, culture, and society. Learn to argue with the precision Germans respect.",
      },
      {
        number: "03",
        title: "The Professional Edge",
        description:
          "Presentations, negotiations, and formal correspondence. Command respect in German-speaking professional settings.",
      },
      {
        number: "04",
        title: "The Independence Complete",
        description:
          "Spontaneous conversation, humor, and cultural fluency. You don\u2019t just speak German \u2014 you belong in it.",
      },
    ],
    outcomes: [
      "Express and defend complex opinions in real-time discussions",
      "Write formal letters, applications, and professional reports",
      "Understand news broadcasts, podcasts, and literary texts",
      "Navigate bureaucracy, legal matters, and healthcare independently",
      "Prepare for the B1 Zertifikat Deutsch examination",
    ],
    testimonial: {
      quote:
        "B1 wasn\u2019t just a level. It\u2019s the moment I stopped translating in my head and started living in German.",
      name: "Amara S.",
      role: "Product Manager, Frankfurt",
    },
    nextLevel: { id: "b2", level: "B2", title: "The Mastery" },
  },
  b2: {
    level: "B2",
    title: "The Mastery",
    subtitle: "Where fluency becomes eloquence",
    heroDescription:
      "Command the language with precision. Engage in academic discourse, understand subtle humor, and express yourself with the eloquence of a native speaker. B2 is where you become undeniable.",
    heroImage: "/courses/4.svg",
    heroImageAlt: "B2 Course - The Mastery",
    duration: "4 Months",
    batchSize: "Max 6 Students",
    schedule: "4 sessions per week",
    materials: "Aspekte Neu B2",
    price: "On Request",
    modules: [
      {
        number: "01",
        title: "The Nuance",
        description:
          "Advanced grammar, idiomatic expressions, and register switching. Speak differently at work, with friends, and in formal settings.",
      },
      {
        number: "02",
        title: "The Intellectual",
        description:
          "Academic writing, structured argumentation, and critical analysis. Engage with German media, research, and literature.",
      },
      {
        number: "03",
        title: "The Cultural Insider",
        description:
          "Humor, sarcasm, and cultural references. Understand what makes Germans laugh, cringe, and connect.",
      },
      {
        number: "04",
        title: "The Mastery Complete",
        description:
          "Spontaneous eloquence across all contexts. You are no longer learning German \u2014 you are living it at its highest level.",
      },
    ],
    outcomes: [
      "Participate fluently in academic and professional discussions",
      "Write essays, reports, and formal documents with nuance",
      "Understand films, literature, and complex media without subtitles",
      "Navigate any social situation with cultural confidence",
      "Prepare for the B2 Goethe-Zertifikat examination",
    ],
    testimonial: {
      quote:
        "At B2, I stopped being \u2018the foreigner who speaks good German\u2019 and became just another voice in the room.",
      name: "Kenji T.",
      role: "Researcher, Heidelberg",
    },
    nextLevel: null,
  },
};

// ─── Courses Page: Quote Divider ─────────────────────────────────────────────
export const courseQuote =
  "Every level is not just grammar. It's a new way of being in the world.";

// ─── Courses Page: CTA Section ───────────────────────────────────────────────
export const courseCta = {
  heading: "Not sure where to start?",
  body: "Get in touch or message us directly on WhatsApp. We'll help you find the right course.",
  primaryButton: { label: "Get in Touch" },
  secondaryButton: { label: "Chat on WhatsApp", href: "https://wa.me/4915904836675" },
};

// ─── Courses Page: Course Resources ──────────────────────────────────────────
export const courseResources = {
  a1: [
    "Netzwerk A1",
    "Concrete Guide A1",
    "NicosWeg",
    "Podcasts",
    "FM Series",
    "YouTube",
    "1-on-1 Pronunciation",
  ],
  a2: [
    "Netzwerk A2",
    "Concrete Guide A2",
    "NicosWeg",
    "Podcasts",
    "FM Series",
    "YouTube",
    "1-on-1 Pronunciation",
  ],
  b1: [
    "Netzwerk B1",
    "Concrete Guide B1",
    "NicosWeg",
    "Podcasts",
    "FM Series",
    "YouTube",
    "German Films & Music",
    "Native Speaker Sessions",
  ],
  b2: [
    "Sicher! Series",
    "NicosWeg",
    "Podcasts",
    "FM Series",
    "YouTube",
    "German Films & Music",
    "Native Speaker Classes",
  ],
};

// ─── Courses Page: Timeline ──────────────────────────────────────────────────
export const courseTimeline = {
  label: "Most Popular Path",
  heading: "Zero to B1 Exam in ~9 Months",
  description:
    "B1 is required for most German university admissions, job applications, and visa processes. This is the route most of our students follow.",
  steps: [
    { level: "A1", label: "Foundation", duration: "2.5 mo" },
    { level: "A2", label: "Momentum", duration: "2.5 mo" },
    { level: "B1", label: "Independence", duration: "3.5 mo" },
    { level: "Exam", label: "B1 Prep", duration: "15 days" },
  ],
  total: "~9 months",
  note: "Every student's pace is different.",
};

// ─── Courses Page: Specialized Courses ───────────────────────────────────────
export const specializedCourses = [
  {
    id: 1,
    title: "Crash Courses",
    levels: "A1 · A2 · B1 · B2",
    description:
      "You know ~50% of a level already and need structured help to fill the gaps and complete it.",
    details: [
      { label: "Duration", value: "15–25 days" },
      { label: "Intensity", value: "3-4 hrs/day" },
      { label: "Format", value: "One-to-one" },
    ],
  },
  {
    id: 2,
    title: "Revision Courses",
    levels: "A1 · A2 · B1 · B2",
    description:
      "You've completed ~80% and need a quick, focused revision before the next level or an exam.",
    details: [
      { label: "Duration", value: "7–10 days" },
      { label: "Intensity", value: "3-4 hrs/day" },
      { label: "Format", value: "One-to-one" },
    ],
  },
  {
    id: 3,
    title: "Exam Preparation",
    levels: "Goethe · TELC · ÖSD",
    description:
      "You've completed the level and want focused preparation, mock exams, timed practice across all four modules.",
    details: [
      { label: "Duration", value: "15 days" },
      { label: "Intensity", value: "4–5 hrs/day" },
      { label: "Format", value: "Groups of 2" },
    ],
  },
];

// ─── Courses Page: Features ──────────────────────────────────────────────────
export const courseFeatures = [
  {
    title: "100% Online",
    description: "Attend from anywhere. All you need is commitment.",
  },
  {
    title: "Small Batches",
    description: "8–10 students per class. Everyone gets attention.",
  },
  {
    title: "Regular Tests",
    description: "No one falls behind quietly. Progress is tracked.",
  },
  {
    title: "Personal Guidance",
    description: "Not sure where to start? Get in touch, we'll help.",
  },
  {
    title: "Entrance Test",
    description: "For levels above A1. We place you correctly.",
  },
  {
    title: "Beyond Textbooks",
    description:
      "NicosWeg, podcasts, films, music, pronunciation practice.",
  },
];

// ─── Course Detail Pages (New Design) ────────────────────────────────────────
export const courseDetailPages: Record<string, {
  level: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  imageCaption?: string;
  stats: { value: string; label: string }[];
  competencies: { title: string; description: string; annotation?: string; image?: string; imageAlt?: string; scrapbookNote?: string }[];
  methodSteps: { number: string; title: string; description: string }[];
  methodBenefits: string[];
  journeyBlocks: { number: string; weeks: string; title: string; description: string; badge: string; annotation?: string }[];
  resources: { title: string; description: string; type: "primary" | "watch" | "listen" | "read"; link?: string; linkLabel?: string }[];
  beforeText: string;
  afterText: string;
  nextLevel: { id: string; level: string } | null;
  closingQuote?: string;
}> = {
  a1: {
    level: "A1",
    title: "Foundation",
    subtitle: "Online German A1 Intensive Course",
    heroDescription:
      "A structured blend of video lessons and live classes takes you from knowing nothing to handling everyday life in German - introducing yourself, shopping, navigating public transport, filling out forms, and understanding simple conversations.",
    heroImage: "/courses/1.svg",
    heroImageAlt: "Cinematic street view of Berlin",
    imageCaption: "Start from zero. Build the basics to survive, then thrive.",
    stats: [
      { value: "2.5", label: "Months" },
      { value: "4", label: "Days / Week" },
      { value: "8–10", label: "Students / Batch" },
      { value: "4+1", label: "Tests + Full Exam" },
    ],
    competencies: [
      { title: "Introduce Yourself", description: "Say your name, where you're from, what you do, and ask others the same. Handle greetings and goodbyes naturally.", annotation: "\"Ich heiße... and the world opens up\"" },
      { title: "Handle Everyday Situations", description: "Order food, buy groceries, ask for prices, navigate a bakery or supermarket without pointing and hoping.", annotation: "No more pointing at menus!", image: "/courses/5.svg", imageAlt: "German café scene" },
      { title: "Describe Your World", description: "Talk about your home, family, daily routine. Answer questions about where you live and what you like.", annotation: "\"Meine Familie ist...\"", scrapbookNote: "From the Bäckerei to the Wohnzimmer..." },
      { title: "Fill Out Forms", description: "Complete registration forms, understand simple official letters, write your personal details correctly in German." },
      { title: "Navigate the City", description: "Ask for and understand directions, buy train tickets, read signs and timetables, handle basic conversations with strangers." },
      { title: "Understand Simple German", description: "Follow slow, clearly spoken conversations. Understand short messages, basic emails, and simple announcements.", annotation: "\"I'm finally getting it!\"" },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lessons", description: "27 structured video lessons covering grammar, vocabulary, and real-world usage. Watch at your own pace before each live session." },
      { number: "02", title: "Attend Live Classes", description: "Interactive Zoom sessions to practice what you've watched - speaking, exercises, Q&A. This is where grammar becomes communication." },
      { number: "03", title: "Review & Practice", description: "Built-in catch-up days, homework, and self-study with NicosWeg, podcasts, and curated content to reinforce what you've learned." },
      { number: "04", title: "Test & Progress", description: "4 block tests + 1 full Goethe-style A1 exam at the end. You always know where you stand. Challenging spots are identified and addressed before moving on." },
    ],
    methodBenefits: [
      "Small Batches (8–10 students)",
      "1-on-1 Pronunciation Sessions",
      "Built-in Catch-up Days",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Videos 1–11", title: "Block 1: The Building Blocks", description: "Alphabet and numbers, articles, personal pronouns, sein, demonstrative and possessive pronouns, verb conjugation and sentence structure, Imperativ and introductions. Kapitel 1, 2 & 3 (Netzwerk A1).", badge: "Test 1" },
      { number: "02", weeks: "Videos 12–19", title: "Block 2: Grammar in Action", description: "Cases (Kasus) - Nominativ, Akkusativ, Wechselpräpositionen, time and dates, modal verbs, separable verbs, Präteritum, writing emails in German, Es constructions, personal pronouns. Kapitel 4, 5 & 6 (Netzwerk A1).", badge: "Test 2" },
      { number: "03", weeks: "Videos 20–24", title: "Block 3: Connecting Ideas", description: "Prepositions, welcher, man, Perfekt tense and OSUDA rule, extended vocabulary (Wortschatz). Kapitel 7, 8 & 9 (Netzwerk A1).", badge: "Test 3" },
      { number: "04", weeks: "Videos 25–27", title: "Block 4: Completing the Picture", description: "Kapitel 10, 11 & 12 (Netzwerk A1), full textbook completion, comprehensive revision.", badge: "Test 4" },
    ],
    resources: [
      { title: "Netzwerk A1 Book Series", description: "Kursbuch + Arbeitsbuch · 12 Kapitel", type: "primary" as const },
      { title: "A Concrete Guide in German A1", description: "Supplementary grammar reference", type: "primary" as const },
      { title: "NicosWeg (Deutsche Welle)", description: "Video series for beginners", type: "watch" as const },
      { title: "Curated Podcasts", description: "Slow German, easy listening", type: "listen" as const },
      { title: "FM Series", description: "Real German radio content", type: "listen" as const },
      { title: "YouTube Videos", description: "Handpicked by the team", type: "watch" as const },
      { title: "1-on-1 Pronunciation Practice", description: "Individual sessions with personal feedback", type: "primary" as const },
    ],
    beforeText:
      "No prior German knowledge needed. A1 is the absolute beginner level. You start from zero - no entrance test required. All you need is the commitment to show up consistently for 2.5 months. Whether you're a student planning to move to Germany, a professional already here, or someone starting fresh - this is where your journey begins.",
    afterText:
      "You've built the foundation. Now learn to connect - talk about your past, describe routines, hold real conversations. A2 picks up exactly where A1 leaves off.",
    nextLevel: { id: "a2", level: "A2" },
    closingQuote:
      "Ready to start your A1 journey?",
  },
  a2: {
    level: "A2",
    title: "Momentum",
    subtitle: "Online German A2 Intensive Course",
    heroDescription:
      "A2 takes you beyond basic survival. You'll learn to talk about your past, describe your routines, hold real conversations with neighbours, understand announcements, and express opinions on everyday topics, all through a structured blend of video lessons and live interactive classes.",
    heroImage: "/courses/2.svg",
    heroImageAlt: "A2 Course, The Momentum",
    imageCaption: "You can survive. Now learn to connect.",
    stats: [
      { value: "2.5", label: "Months" },
      { value: "4", label: "Days / Week" },
      { value: "8–10", label: "Students / Batch" },
      { value: "4+1", label: "Tests + Full Exam" },
    ],
    competencies: [
      { title: "Hold Real Conversations", description: "Go beyond single sentences. Exchange information about familiar topics, ask follow-up questions, and keep a conversation going with neighbours and colleagues.", annotation: "\"Endlich, a real chat!\"" },
      { title: "Talk About Your Past", description: "Describe what happened yesterday, last week, or last year. Use past tenses to share experiences, tell stories, and explain what you did and why.", annotation: "Gestern war ich...", image: "/courses/5.svg", imageAlt: "German café conversation" },
      { title: "Handle Routine Situations", description: "Make appointments, deal with service providers, handle phone calls, navigate bureaucracy at the Bürgeramt, and manage basic workplace interactions.", annotation: "Bürgeramt, kein Problem!", scrapbookNote: "From Termine to Telefonate, you're ready." },
      { title: "Write Messages & Short Emails", description: "Compose personal messages, write short emails to landlords or offices, respond to invitations, and fill out more complex forms." },
      { title: "Understand Everyday Media", description: "Follow the main points in simple news, understand announcements at train stations, read short articles, and grasp the gist of everyday written German." },
      { title: "Express Opinions & Preferences", description: "Say what you like and dislike, agree and disagree politely, give simple reasons, and participate in discussions about everyday topics.", annotation: "\"Ich finde...\"" },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lesson", description: "Each video introduces new grammar, vocabulary, and usage patterns. Watch it before the next live session to come prepared." },
      { number: "02", title: "Attend Live Class", description: "Every video has a paired live class via Zoom. Practice speaking, do exercises, ask questions, and solidify what the video taught." },
      { number: "03", title: "Repeat & Build", description: "17 cycles of video to live class across 12 Kapitel. Each cycle builds on the last. The rhythm creates steady, compounding progress." },
      { number: "04", title: "Test & Advance", description: "4 block tests after every 3 Kapitel plus 1 full A2 exam at the end. You always know exactly where you stand." },
    ],
    methodBenefits: [
      "Small Batches (8–10 students)",
      "1-on-1 Pronunciation",
      "Consistent 4-Day Rhythm",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Videos 1 to 5", title: "Block 1: Reconnecting with German", description: "Kapitel 1, 2 & 3 (Netzwerk A2). Reviewing and expanding A1 foundations, new grammar structures for daily life. 5 video lessons + 5 live classes.", badge: "Test: Kapitel 1, 2, 3" },
      { number: "02", weeks: "Videos 6 to 9", title: "Block 2: Building Confidence", description: "Kapitel 4, 5 & 6 (Netzwerk A2). Past tenses and storytelling, handling routine social situations. 4 video lessons + 4 live classes.", badge: "Test: Kapitel 4, 5, 6" },
      { number: "03", weeks: "Videos 10 to 13", title: "Block 3: Expressing Yourself", description: "Kapitel 7, 8 & 9 (Netzwerk A2). Opinions, preferences, and comparisons, writing short messages and emails. 4 video lessons + 4 live classes.", badge: "Test: Kapitel 7, 8, 9" },
      { number: "04", weeks: "Videos 14 to 17", title: "Block 4: Completing A2", description: "Kapitel 10, 11 & 12 (Netzwerk A2). Complex everyday interactions, full textbook completion. 4 video lessons + 4 live classes.", badge: "Test: Kapitel 10, 11, 12" },
    ],
    resources: [
      { title: "Netzwerk A2 Book Series", description: "Kursbuch + Arbeitsbuch · 12 Kapitel", type: "primary" as const },
      { title: "A Concrete Guide in German A2", description: "Supplementary grammar reference", type: "primary" as const },
      { title: "NicosWeg (Deutsche Welle)", description: "Continuing the video series", type: "watch" as const },
      { title: "Curated Podcasts", description: "Intermediate-beginner level", type: "listen" as const },
      { title: "FM Series", description: "Real German radio content", type: "listen" as const },
      { title: "YouTube Videos", description: "Handpicked by the team", type: "watch" as const },
      { title: "1-on-1 Pronunciation Practice", description: "Continuing from A1 with expanded vocabulary", type: "primary" as const },
    ],
    beforeText:
      "Whether you completed A1 with Decode German or elsewhere through another school, self-study, or living in Germany you'll take a short entrance test before joining. This helps us confirm you're at the right level and ensures everyone in the batch moves at the same pace.",
    afterText:
      "Stop translating in your head. B1 is where fluency begins. Express opinions, handle work conversations, and navigate daily life without hesitation. Native German speaker sessions start here.",
    nextLevel: { id: "b1", level: "B1" },
    closingQuote:
      "Ready to build on your A1?",
  },
  b1: {
    level: "B1",
    title: "Independence",
    subtitle: "Online German B1 Intensive Course",
    heroDescription:
      "B1 is the threshold of real fluency. You'll learn to express opinions, handle work and social conversations, understand most of what you hear in daily life, and write structured texts, with dedicated speaking topic sessions and classes led by native German speakers.",
    heroImage: "/courses/3.svg",
    heroImageAlt: "B1 Course, The Independence",
    imageCaption: "Stop translating. Start thinking in German.",
    stats: [
      { value: "3.5", label: "Months" },
      { value: "4", label: "Days / Week" },
      { value: "8–10", label: "Students / Batch" },
      { value: "4+1", label: "Tests + Full Exam" },
    ],
    competencies: [
      { title: "Express Opinions Fluently", description: "Agree, disagree, explain your reasoning, and participate actively in discussions on familiar topics, without constantly pausing to think.", annotation: "\"Ich bin der Meinung...\"" },
      { title: "Handle Work Conversations", description: "Participate in meetings, explain processes, handle phone calls, write professional emails, and deal with workplace interactions confidently.", annotation: "Meeting ready!", image: "/courses/5.svg", imageAlt: "German workplace meeting" },
      { title: "Write Structured Texts", description: "Compose formal and informal letters, write complaints, applications, and detailed messages with correct grammar and appropriate tone.", annotation: "Sehr geehrte Damen und Herren...", scrapbookNote: "From Beschwerden to Bewerbungen, with confidence." },
      { title: "Understand Everyday German", description: "Follow news broadcasts, understand most conversations around you, read newspaper articles, and grasp the main points of complex texts." },
      { title: "Think in German", description: "Stop the constant mental translation. React naturally, form sentences without building them word-by-word in your head first." },
      { title: "Navigate Bureaucracy & Services", description: "Handle complex situations at the Ausländerbehörde, doctor's office, insurance providers, and landlords, independently and with confidence.", annotation: "\"Alles klar, danke!\"" },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lesson", description: "16 structured videos covering B1 grammar, complex sentence structures, and real-world language patterns." },
      { number: "02", title: "Attend Live Class", description: "24 live sessions via Zoom to practise, apply, and consolidate. More live classes per video means deeper understanding." },
      { number: "03", title: "Sprechthemen Sessions", description: "Dedicated speaking topic sessions. Discuss real-world themes, practise expressing opinions, and build conversational fluency." },
      { number: "04", title: "Test & Advance", description: "4 block tests after every 3 Kapitel plus 1 full Goethe-style B1 exam. Clear benchmarks at every stage." },
    ],
    methodBenefits: [
      "Small Batches (8–10 students)",
      "Native Speaker Sessions ",
      "1-on-1 Pronunciation",
      "Deeper Live-Class Rhythm",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Videos 1 to 4", title: "Block 1: Building Complexity", description: "Kapitel 1, 2 & 3 (Netzwerk B1). Complex sentence structures, Sprechthemen on expressing opinions. 4 videos + 6 live classes + 2 speaking sessions.", badge: "Test: Kapitel 1, 2, 3" },
      { number: "02", weeks: "Videos 5 to 8", title: "Block 2: Gaining Fluency", description: "Kapitel 4, 5 & 6 (Netzwerk B1). Professional and social language, Sprechthemen on work and daily life. 4 videos + 6 live classes + 2 speaking sessions.", badge: "Test: Kapitel 4, 5, 6" },
      { number: "03", weeks: "Videos 9 to 12", title: "Block 3: Thinking in German", description: "Kapitel 7, 8 & 9 (Netzwerk B1). Abstract topics and argumentation, Sprechthemen on culture and society. 4 videos + 6 live classes + 2 speaking sessions.", badge: "Test: Kapitel 7, 8, 9" },
      { number: "04", weeks: "Videos 13 to 16", title: "Block 4: Completing B1", description: "Kapitel 10, 11 & 12 (Netzwerk B1). Full textbook completion, Sprechthemen on advanced discussions. 4 videos + 6 live classes + 2 speaking sessions.", badge: "Test: Kapitel 10, 11, 12" },
    ],
    resources: [
      { title: "Netzwerk B1 Book Series", description: "Kursbuch + Arbeitsbuch · 12 Kapitel", type: "primary" as const },
      { title: "A Concrete Guide in German B1", description: "Supplementary grammar reference", type: "primary" as const },
      { title: "NicosWeg (Deutsche Welle)", description: "Continuing at B1 level", type: "watch" as const },
      { title: "Curated Podcasts", description: "Intermediate level content", type: "listen" as const },
      { title: "FM Series", description: "Real German radio content", type: "listen" as const },
      { title: "YouTube Videos", description: "Handpicked by the team", type: "watch" as const },
      { title: "German Films & Music", description: "New at B1, immersive cultural content", type: "watch" as const },
      { title: "Speaking with Native Germans", description: '', type: "primary" as const },
      { title: "1-on-1 Pronunciation Practice", description: "Continuing with B1-level vocabulary", type: "primary" as const },
    ],
    beforeText:
      "Whether you completed A2 with Decode German or elsewhere through another school, self-study, or living in Germany you'll take a short entrance test before joining. B1 moves faster and expects solid A2 foundations, so we confirm everyone is at the right level before the batch begins..",
    afterText:
      "Speak with the confidence and precision of someone who truly belongs. B2 is where you handle university lectures, professional debates, and cultural nuance, entirely in German.",
    nextLevel: { id: "b2", level: "B2" },
    closingQuote:
      "Ready to cross the threshold of fluency?",
  },
  b2: {
    level: "B2",
    title: "Mastery",
    subtitle: "Online German B2 Intensive Course",
    heroDescription:
      "B2 is where the language becomes truly yours. You'll handle university lectures, professional debates, subtle humour, and complex written texts, with a heavy live-class rhythm and native speaker sessions that push you to think, react, and express yourself entirely in German.",
    heroImage: "/courses/4.svg",
    heroImageAlt: "B2 Course, The Mastery",
    imageCaption: "Speak with confidence. Belong.",
    stats: [
      { value: "3.5", label: "Months" },
      { value: "4", label: "Days / Week" },
      { value: "8–10", label: "Students / Batch" },
      { value: "4+1", label: "Tests + Full Exam" },
    ],
    competencies: [
      { title: "Debate & Argue Fluently", description: "Present and defend your position on complex topics. Engage in discussions about politics, culture, and abstract ideas with nuance and conviction.", annotation: "\"Ich bin überzeugt, dass...\"" },
      { title: "Handle Academic German", description: "Follow university lectures, read academic texts, write structured essays and reports, and participate in seminars, entirely in German.", annotation: "Uni ready!", image: "/courses/5.svg", imageAlt: "University lecture hall" },
      { title: "Work Professionally in German", description: "Lead meetings, write formal reports, negotiate with clients, handle complex phone calls, and navigate German workplace culture with confidence.", annotation: "Chef-level German!", scrapbookNote: "From Sitzungen to Verhandlungen, you own the room." },
      { title: "Write with Precision", description: "Compose detailed formal letters, argumentative essays, professional emails, and reports with correct grammar, register, and style." },
      { title: "Understand Humour & Idioms", description: "Get the joke. Understand sarcasm, cultural references, idiomatic expressions, and the subtle things that make German feel like home." },
      { title: "Think, Dream & React in German", description: "No more translating. German is now your operating language. You think in it, react in it, and express your full personality through it.", annotation: "\"Ich träume auf Deutsch!\"" },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lesson", description: "8 core videos introduce the grammar and structures for each block. Concentrated, high-level content that sets up the live sessions." },
      { number: "02", title: "Deep Kapitel Sessions", description: "Each Kapitel gets 2 to 3 dedicated live sessions. You don't just learn it, you work through it until it's natural. Around 7 sessions per block." },
      { number: "03", title: "Cross-Kapitel Practice", description: "Bridge sessions that connect chapters. Practise using grammar from Kapitel 3 while discussing topics from Kapitel 4. Real integration." },
      { number: "04", title: "Meilenstein-Tests", description: "4 milestone tests after every 3 Kapitel plus 1 full B2 Abschlussprüfung. Rigorous checkpoints that prove real mastery." },
    ],
    methodBenefits: [
      "Small Batches (8–10 students)",
      "Classes by Native German Teachers ",
      "Exam-Integrated Practice",
      "1-on-1 Pronunciation",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Videos 1 & 2", title: "Block 1: Thinking on a B2 Level", description: "Kapitel 1, 2 & 3 (Sicher! B2). 2 to 3 live sessions per Kapitel, cross-chapter integration sessions. 2 videos + 7 live sessions.", badge: "Meilenstein-Test: Kapitel 1, 2, 3" },
      { number: "02", weeks: "Videos 3 & 4", title: "Block 2: Professional Precision", description: "Kapitel 4, 5 & 6 (Sicher! B2). Complex grammar and argumentation, formal and informal register. 2 videos + 7 live sessions.", badge: "Meilenstein-Test: Kapitel 4, 5, 6" },
      { number: "03", weeks: "Videos 5 & 6", title: "Block 3: Cultural Fluency", description: "Kapitel 7, 8 & 9 (Sicher! B2). Abstract and cultural topics, nuanced expression and style. 2 videos + 7 live sessions.", badge: "Meilenstein-Test: Kapitel 7, 8, 9" },
      { number: "04", weeks: "Videos 7 & 8", title: "Block 4: Complete Mastery", description: "Kapitel 10, 11 & 12 (Sicher! B2). Full textbook completion, comprehensive revision. 2 videos + 7 live sessions.", badge: "Meilenstein-Test: Kapitel 10, 11, 12" },
    ],
    resources: [
      { title: "Sicher! B2 Book Series", description: "Kursbuch + Arbeitsbuch · 12 Kapitel", type: "primary" as const },
      { title: "NicosWeg (Deutsche Welle)", description: "Advanced episodes", type: "watch" as const },
      { title: "Curated Podcasts", description: "Upper-intermediate content", type: "listen" as const },
      { title: "FM Series", description: "Real German radio", type: "listen" as const },
      { title: "YouTube Videos", description: "Handpicked by the team", type: "watch" as const },
      { title: "German Films & Music", description: "Full immersion content", type: "watch" as const },
      { title: "Native German Teachers Classes", description: "", type: "primary" as const },
      { title: "1-on-1 Pronunciation Practice", description: "Precision at B2 level", type: "primary" as const },
    ],
    beforeText:
      "Whether you completed B1 with Decode German or elsewhere, through another school, self-study, or living in Germany, you'll take a short entrance test before joining. B2 demands solid B1 foundations and moves at a significantly faster pace, with complex grammar and abstract topics from day one",
    afterText:
      "The language is yours. B2 is where most journeys reach their destination. You can study, work, and live in Germany with full confidence. For those who want to go further, C1 preparation and exam-specific courses are available on request.",
    nextLevel: null,
    closingQuote:
      "Ready to master German?",
  },
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerLinks = {
  explorer: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Beyond Classes", href: "/beyond-classes" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export const footerDescription =
  "A brand of SkiD Decode Deutsch Language Institute Private Limited.";

export const socialLinks = [
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/decodegerman" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/decodegerman" },
  { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCrWQrQOWzRSt86XrS6C-D2Q" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/decode-german/" },
];

// ─── Footer Content ──────────────────────────────────────────────────────────
export const footerContent = {
  sections: {
    explorer: "Explorer",
    contact: "Contact",
  },
  contact: {
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    addressLabel: "Address",
    phoneGermanyDisplay: "+49 15900 4836675",
    phoneIndiaDisplay: "+91 98712 05947",
    displayAddress: "Dresden, Germany",
  },
};

// ─── Header Content ──────────────────────────────────────────────────────────
export const headerContent = {
  mobileMenuAriaLabel: "Toggle navigation menu",
  logoAltSuffix: "logo",
};

// ─── Legal / Impressum / Datenschutz ─────────────────────────────────────────
// Operator / Impressum details required by German TMG §5.
// TODO: Confirm final values with Shalini before public launch.
export const legalInfo = {
  operatorName: "Shalini K. Dubey",
  brandName: "Decode German",
  companyName: "SkiD Decode Deutsch Language Institute Private Limited",
  street: "Boltenhagener Str. 83",
  postalCode: "01109",
  city: "Dresden",
  country: "Germany",
  email: "decodegerman@gmail.com",
  phone: "+49 159 004836675",
  responsibleForContent: "Shalini K. Dubey",
  lastUpdated: "April 2026",
};

// ─── WhatsApp Floating Button ────────────────────────────────────────────────
export const whatsappButton = {
  tooltip: "Chat on WhatsApp",
  ariaLabel: "Contact us on WhatsApp",
};

// ─── 404 / Not Found Page ────────────────────────────────────────────────────
export const notFoundPage = {
  bigNumber: "404",
  tag: "Page Not Found",
  heading: "Seite nicht",
  headingAccent: "gefunden",
  body: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  backButtonLabel: "Back to Home",
  logoAlt: "Decode German logo",
};

// ─── About Page: Hero (current design) ───────────────────────────────────────
export const aboutHeroContent = {
  tag: "The Promise",
  heading: "Our Story",
  subheading: "We built a promise to students.",
  subheadingBold: "You commit, we commit the hardest.",
  stats: [
    { value: "1000+", label: "Students Taught" },
    { value: "2020", label: "Year Founded" },
  ],
  founderImageAlt: "Shalini K Dubey teaching",
  founderImage: "/about/team/Founder1.webp",
  founderCaption: "Shalini K Dubey",
  introParagraph:
    'Founded in 2020 by <strong>Shalini K Dubey</strong>. 1000+ students taught across the world. We built this platform with discipline, dedication, and relentless clarity. With teaching that is structured, demanding, and deeply human. <strong> <br />With equal commitment from us and from YOU.</strong>',
};

// ─── About Page: Why We Exist ────────────────────────────────────────────────
export const whyWeExistContent = {
  heading: "What Makes Us Unique",
  description:
    "Students come with hope, believing this is where everything finally comes together, with the right guidance and a structured approach.",
  reasons: [
    {
      number: "01",
      title: "German That Works",
      description1: "Built for how you actually use German in real situations.",
      description2: "In conversations, at work, and in everyday life, with clarity and confidence.",
      bgClass: "bg-accent",
    },
    {
      number: "02",
      title: "Individual Understanding",
      description1: "Every student learns differently, and that is at the core of how we teach.",
      description2: "Your patterns, your pace, and the way you learn are understood and shaped into a method that works for you.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
    {
      number: "03",
      title: "Every Step Matters",
      description1: "Learning continues beyond the classroom.",
      description2: "Through regular follow-ups, focused check-ins, and constant attention to how you are learning and where you need to go next.",
      bgClass: "bg-accent",
    },
    {
      number: "04",
      title: "Right Level, From the Start",
      description1: "Every student begins at a level that fits where they are.",
      description2: "This creates a focused pace, clear direction, and a group that stays aligned as it moves forward.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
  ],
};

// ─── About Page: How Students Join ───────────────────────────────────────────
export const howStudentsJoinContent = {
  heading: "How You Begin",
  description: "Where you start matters it shapes everything ahead.",
  descriptionBold: "When the foundation is strong, learning becomes smoother, faster, and stable.",
  beginners: {
    title: "A1: Beginners",
    steps: [
      "Contact us to join",
      "We confirm your enrollment and you begin your journey",
    ],
  },
  higherLevels: {
    title: "A2, B1, B2: Higher Levels",
    steps: [
      "Contact us for your target level",
      "Take the entrance test (short assessment)",
      "Pass → Enrolled",
    ],
    callout: {
      title: "Else prepare first →",
      body: "Crash course: fast-paced, individual sessions with flexible scheduling. Keep studying until you pass.",
      bodyBold: "When you're ready, you get enrolled.",
    },
  },
  blockquote:
    "Every batch has students who earned their place. No one is holding the class back. No one is lost.",
};

// ─── About Page: The Team ────────────────────────────────────────────────────
export const theTeamContent = {
  heading: "The Team",
  description: "The people at Decode German, behind every student's progress - accountable & precise.",
  founder: {
    name: "Shalini K Dubey",
    role: "Founder & Lead Instructor",
    location: "Dresden, Germany",
    image: "/about/team/Founder2.webp",
    imageAlt: "Founder Portrait",
    bio1: "Personally teaches, designs the curriculum, and works closely with every student their patterns, their gaps, their journey.",
    bio2: "Built from scratch after moving to Germany for post-graduate studies.\n12+ years of teaching experience shaped through real students, not systems.",
    quote: "This is not a place where you take classes. This is a place where you commit. Where you build confidence, evolve, and transform.",
    badges: ["12+ Years Exp"],
  },
  academicAdvisor: {
    name: "Prof. Dr. Vridhagiri Ganeshan",
    nameDisplay: "Prof. Dr. Vridhagiri\nGaneshan",
    role: "Academic Advisor",
    image: "/about/team/Founder3.webp",
    imageAlt: "Prof. Dr. Vridhagiri Ganeshan",
    bio1: "Over 50 years teaching, researching, and writing about German language and culture, from Universität München to CIEFL Hyderabad to Emory University. Prof. Dr. Ganeshan earned his doctorate in Germanistik in 1975 and spent 32 years as Professor of German at CIEFL, training generations of language teachers across India. He served twice as Vice-Chancellor, taught at leading American universities, and was awarded the Jakob-und-Wilhelm-Grimm-Preis by Germany in 1990, one of the highest honours in German philology.",
    bio2: "His life's work, bridging the gap between the learners and genuine German fluency, is exactly the challenge Decode German is built around.",
    quote: "Language is the bridge between who you are and who you are becoming in another culture.",
    badges: [
      "Atlanta, USA",
      "Dr. Phil., München 1975",
      "Grimm-Preis 1990",
      "DAAD & Humboldt Fellow",
      "50+ Years in Germanistik",
    ],
  },
  // TODO (feedback 2026-04): Replace the current team headshots with real photos.
  // The existing headshots read as AI-generated (hyperlit faces, generic office
  // backdrops, identical lighting) and contradict Decode German's "personal
  // relationships" brand promise. Even informal phone-camera shots are better.
  members: [
    {
      name: "Atalbihari Sharma",
      role: "Co-Founder & Director",
      description: "Growth & Strategic Direction",
      image: "/about/team/atalbihari-sharma.webp",
      objectPosition: "center 25%",
    },
    {
      name: "Isabelle Das",
      role: "Native Speaker & German Language Teacher",
      description: "Helping international students master the German flow of speech and achieve real fluency.",
      image: "/about/team/isabelle-das.webp",
    },
    {
      name: "Srishty Arora",
      role: "German Language Teacher",
      description: "Shaping confident communicators who can connect beyond borders.",
      image: "/about/team/srishty-arora.webp",
    },
    {
      name: "Aditya Mohan Ray",
      role: "German Language Teacher",
      description: "Fostering care, camaraderie, and a collective learning experience across diverse backgrounds.",
      image: "/about/team/aditya-mohan-ray.webp",
    },
    {
      name: "Tanya Wadhwa",
      role: "German Language Teacher",
      description: "Helping students speak German with clarity, confidence, and ease.",
      image: "/about/team/tanya-wadhwa.webp",
    },
    {
      name: "Sakshi Tripathi",
      role: "Student Support & Doubt Resolution Lead",
      description: "Ensuring clarity at every step of the journey.",
      image: "/about/team/sakshi-tripathi.webp",
    },
    {
      name: "Gurneesh Singh",
      role: "Language Support Specialist",
      description: "Ensuring class quality through content development and after-class support.",
      image: "/about/team/gurneesh-singh.webp",
    },
    {
      name: "Ashutosh Dubey",
      role: "Program & Operations Manager",
      description: "Keeping everything structured, seamless, and on track.",
      image: "/about/team/ashutosh-dubey.webp",
      objectPosition: "center 25%",
    },
    {
      name: "Afroj Ansari",
      role: "Social Media Strategist",
      description: "Making German language learning accessible through structured, easy-to-understand content.",
      image: "/about/team/afroj-ansari.webp",
    },
  ],
};

// ─── About Page: Our Journey Timeline ────────────────────────────────────────
export const ourJourneyContent = {
  heading: "Our Journey",
  timeline: [
    {
      year: "2020",
      title: "The beginning",
      description: "Decode German founded. First A1 batch starts online. One teacher, a small group of students, and a commitment to do things differently.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2021",
      title: "Expanding levels",
      description: "A2 and B1 courses launched. First native German speakers join the teaching team.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2022",
      title: "100+ students milestone",
      description: "Exam preparation courses launched - Goethe-Zertifikat, TestDaF, and TELC. Still growing entirely through student recommendations.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2023",
      title: "B2 level and revision courses",
      description: "B2 added to complete the A1–B2 journey. Revision courses introduced. Team grows to 4.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2024",
      title: "400+ students - company registered",
      description: "SKiD Decode Deutsch Language Institute Pvt Ltd formally registered. Entrance test system implemented for all levels above A1.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2025",
      title: "800+ students - Scaling excellence",
      description: "Expanded team, advanced curriculum, and personalized learning technology. Commitment to maintaining quality while reaching more students.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2026",
      title: " Speaking courses launched",
      description: "New tracking systems, same educational soul. Building the next generation of confident German speakers.",
      isLeft: true,
      isPrimary: true,
    },
  ],
};

// ─── About Page: Founder's Note (current design) ────────────────────────────
export const foundersNoteContent = {
  sidebarQuote: "I didn't leave my career to teach German. I left it to change what German changes.",
  founderName: "Shalini K Dubey",
  founderTitle: "Founder · Dresden, Germany",
  sectionTitle: "Message from the Founder",
  paragraphs: [
    { text: 'This is not a place for passive learning.<br />This is where you<em> show up - with consistency and intent.</em>' },
    { text: "Teaching was never a choice for me; it was always who I am. I started teaching in 2015, building everything from scratch, only students and their trust." },
    { text: "Since that day, there hasn't been a single day I haven't taught or thought about my students, their progress, their struggles, and their growth." },
    { text: "My life is my students.<br />I don't separate it. I don't balance it. I live for them.<br />There is no other goal, and there never has been.", bold: true },
    { text: "Over the years, I have seen students repeat levels again and again, going through A1 three or four times before reaching me, or returning to A1 even after B1 or B2, because their foundation was never truly built. Living in Germany without enough German means paying a price every single day, in every queue, every workplace, every conversation that slips away. Every time I see that, it stays with me. This is where I invest my life." },
    { text: "This is not just work for me - it is a responsibility I carry with complete honesty, discipline, and a sense of purpose every single day." },
    { text: "Today, our students come from across the globe, growing through trust and real impact. This has only been possible because of the love and trust my students have placed in me. Every student here has come through recommendation, not marketing. That, more than anything, reflects the impact they carry forward." },
    { text: "I came to Germany in 2020, completed my master's, and worked as a Team Lead for more than three years. Then I made a decision to leave that path and dedicate myself fully to my students. My heart chose this over everything else." },
    { text: "If you are here, this is not just a course for you. This is a turning point in your journey." },
    { text: "Dear students, I am grateful for each of you for your trust, your love, and your support." },
    { text: "Today and always, I live for my students.", bold: true },
  ],
  signoff: "Shalini K Dubey",
  stats: [
    { value: "30+", label: "Enroll Monthly" },
    { value: "A1–B2", label: "Course Levels" },
    { value: "100%", label: "Word of Mouth" },
  ],
};

// ─── Course Components UI Strings ────────────────────────────────────────────
export const courseComponentStrings = {
  features: {
    heading: "What Every Course Includes",
  },
  level: {
    resourcesLabel: "Learning Resources",
  },
  specialized: {
    handwriting: "Already Know Some German?",
    heading: "Pick Up Where You Left Off",
    enquireButton: "Enquire",
  },
  beforeAfter: {
    beforeHeading: "Before You Join",
    afterHeading: "After This Course",
    exploreCoursePrefix: "Explore",
    exploreCourseSuffix: "Course",
  },
  competencies: {
    headingStart: "What You'll Be",
    headingEnd: "Able To Do",
  },
  detailCTA: {
    handwriting: "Bis bald!",
    headingPrefix: "Ready to start your",
    headingSuffix: "journey?",
    primaryButton: "Get in Touch",
    whatsappButton: "WhatsApp Us",
  },
  journey: {
    description: "A curated path through the fundamentals of German life and language.",
  },
  method: {
    headingLine1: "The",
    headingLine2: "Blended",
    headingLine3: "Method",
    benefitsLabel: "Key Benefits",
  },
  resources: {
    headingItalic: "Curated",
    headingNormal: "Resources",
    learnMore: "Learn More",
    typeLabels: {
      watch: "Watch",
      listen: "Listen",
      read: "Read",
    } as Record<string, string>,
  },
};

// ─── Home: Narrative Section ─────────────────────────────────────────────────
export const narrativeSectionContent = {
  handwriting: "Our Promise",
  heading: "The Decode",
  headingAccent: "Commitment",
  commitments: [
    {
      number: 1,
      title: "You Are Not Just Another Student",
      description:
        "We take the time to know you, your goals, your pace, your challenges. This journey defines what comes next, and we stay fully focused on it.",
    },
    {
      number: 2,
      title: "Structured Follow-up",
      description:
        "Regular check-ins before class, after class, and between batches. If your pace changes, we respond immediately. If something needs attention, we step in right away.",
    },
    {
      number: 3,
      title: "We Target Exactly What You Need",
      description:
        "Working on a specific topic? You get a targeted micro-session. Only what you need, exactly where you need it. Real solutions, focused on your exact friction points.",
    },
  ],
  closingQuote: "Your goals are our top priority.",
};

// ─── Home: Testimonials Section ──────────────────────────────────────────────
export const testimonialsContent = {
  backgroundHeading: "TESTIMONIALS",
  heading: "Voices of Transformation",
  addReviewButton: "+ Add Your Review",
  loading: "Loading reviews\u2026",
  errorPrefix: "Failed to load reviews:",
  empty: "No reviews yet. Be the first to share your story.",
  verifiedLabel: "Verified Student",
  modal: {
    title: "Share your experience",
    nameLabel: "Your name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email (optional)",
    emailPlaceholder: "jane@example.com",
    ratingLabel: "Rating",
    reviewLabel: "Your review",
    reviewPlaceholder: "Tell us about your experience with Decode German\u2026",
    cancelButton: "Cancel",
    submitButton: "Submit Review",
    successTitle: "Thank you!",
    successBody: "Your review has been submitted and will appear after approval.",
    genericError: "Something went wrong",
    networkError: "Network error. Please try again.",
  },
};

// ─── Home: Courses Section ───────────────────────────────────────────────────
export const coursesSectionContent = {
  levelLabel: "Level",
  ctaButton: "Explore All Courses",
  ctaHref: "/courses",
};

// ─── Home: Hero Section ──────────────────────────────────────────────────────
export const heroSectionContent = {
  scrollHint: "Scroll for the Journey",
};

// ─── Contact Form Modal ──────────────────────────────────────────────────────
export const contactFormContent = {
  handwritingAccent: "Get in Touch...",
  closeAriaLabel: "Close",
  header: {
    tag: "Start Your Journey",
    heading: "Start Your Journey",
    description: "Fill in the form below and we'll get back to you personally. No automated replies.",
  },
  fields: {
    firstName: { label: "First Name (required)", placeholder: "e.g. Johannes" },
    lastName: { label: "Last Name", placeholder: "e.g. Müller" },
    email: { label: "Email Address (required)", placeholder: "hello@example.de" },
    countryCode: { label: "Country Code" },
    phone: { label: "Phone / WhatsApp", placeholder: "171 1234567" },
    level: { label: "Current German Level", placeholder: "Select level" },
    interest: { label: "I'm interested in", placeholder: "Select course" },
    message: { label: "Your Message", placeholder: "Tell us about your goals..." },
  },
  submit: {
    sending: "Sending...",
    default: "Send Message",
  },
  success: {
    heading: "Message sent.",
    body: "We've received your message and will get back to you personally within a few hours.",
  },
  networkError: "Network error. Please try again.",
  genericError: "Something went wrong",
  whatsapp: {
    heading: "Want a faster reply?",
    body: "Message us on WhatsApp. We typically respond within minutes.",
    linkLabel: "Open WhatsApp",
    href: "https://wa.me/4915904836675",
  },
  bottomContact: {
    email: "decodegerman@gmail.com",
    languages: "We speak: Deutsch, English, Hindi",
  },
  germanLevels: [
    "Complete Beginner",
    "A1",
    "A2",
    "B1",
    "B2",
    "Not sure",
  ],
  interests: [
    "A1 Course",
    "A2 Course",
    "B1 Course",
    "B2 Course",
    "Exam Preparation",
    "Revision Course",
    "Crash Course",
    "Just exploring",
  ],
  countryCodes: [
    { value: "+49", label: "\u{1F1E9}\u{1F1EA} +49 (DE)" },
    { value: "+91", label: "\u{1F1EE}\u{1F1F3} +91 (IN)" },
    { value: "+1", label: "\u{1F1FA}\u{1F1F8} +1 (US)" },
    { value: "+44", label: "\u{1F1EC}\u{1F1E7} +44 (GB)" },
    { value: "+43", label: "\u{1F1E6}\u{1F1F9} +43 (AT)" },
    { value: "+41", label: "\u{1F1E8}\u{1F1ED} +41 (CH)" },
    { value: "+33", label: "\u{1F1EB}\u{1F1F7} +33 (FR)" },
    { value: "+31", label: "\u{1F1F3}\u{1F1F1} +31 (NL)" },
    { value: "+39", label: "\u{1F1EE}\u{1F1F9} +39 (IT)" },
    { value: "+34", label: "\u{1F1EA}\u{1F1F8} +34 (ES)" },
    { value: "+48", label: "\u{1F1F5}\u{1F1F1} +48 (PL)" },
    { value: "+90", label: "\u{1F1F9}\u{1F1F7} +90 (TR)" },
    { value: "+86", label: "\u{1F1E8}\u{1F1F3} +86 (CN)" },
    { value: "+81", label: "\u{1F1EF}\u{1F1F5} +81 (JP)" },
    { value: "+82", label: "\u{1F1F0}\u{1F1F7} +82 (KR)" },
    { value: "+55", label: "\u{1F1E7}\u{1F1F7} +55 (BR)" },
    { value: "+61", label: "\u{1F1E6}\u{1F1FA} +61 (AU)" },
    { value: "+971", label: "\u{1F1E6}\u{1F1EA} +971 (AE)" },
    { value: "+966", label: "\u{1F1F8}\u{1F1E6} +966 (SA)" },
    { value: "+92", label: "\u{1F1F5}\u{1F1F0} +92 (PK)" },
    { value: "+880", label: "\u{1F1E7}\u{1F1E9} +880 (BD)" },
    { value: "+94", label: "\u{1F1F1}\u{1F1F0} +94 (LK)" },
    { value: "+977", label: "\u{1F1F3}\u{1F1F5} +977 (NP)" },
    { value: "+234", label: "\u{1F1F3}\u{1F1EC} +234 (NG)" },
    { value: "+254", label: "\u{1F1F0}\u{1F1EA} +254 (KE)" },
    { value: "+27", label: "\u{1F1FF}\u{1F1E6} +27 (ZA)" },
  ],
};

// ─── Page Metadata ───────────────────────────────────────────────────────────
export const pageMetadata = {
  home: {
    title: "Decode German - SPEAK, BELONG, THRIVE",
    description:
      "German language platform bridging the gap between fluency and identity. Transformation for the global citizens.",
    ogTitle: "Decode German - SPEAK, BELONG, THRIVE",
    ogDescription:
      "German language platform bridging the gap between fluency and identity.",
    ogImage: "/og-image.png",
    ogImageAlt: "Decode German - SPEAK, BELONG, THRIVE",
  },
  about: {
    title: "Our Story",
    description:
      "The story of Decode German - a boutique German language platform crafted for seekers, thinkers, and those brave enough to rebuild their lives in a new tongue.",
    ogTitle: "Decode German - SPEAK, BELONG, THRIVE",
    ogDescription:
      "German language platform bridging the gap between fluency and identity.",
    ogImage: "/og-image.png",
    ogImageAlt: "Decode German - SPEAK, BELONG, THRIVE",
  },
  courses: {
    title: "Courses",
    description:
      "A structured journey through the German language. Every course is online, intensive, and taught in small batches. Whether you're starting from zero or preparing for an exam - we have a structured path for you.",
    ogTitle: "Decode German - SPEAK, BELONG, THRIVE",
    ogDescription:
      "German language platform bridging the gap between fluency and identity.",
    ogImage: "/og-image.png",
    ogImageAlt: "Decode German - SPEAK, BELONG, THRIVE",
  },
  courseDetail: {
    ogTitle: "Decode German - SPEAK, BELONG, THRIVE",
    ogDescription:
      "German language platform bridging the gap between fluency and identity.",
    ogImage: "/og-image.png",
    ogImageAlt: "Decode German - SPEAK, BELONG, THRIVE",
  },
};
