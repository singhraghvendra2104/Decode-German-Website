// ─── Site Metadata ───────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Decode German",
  tagline: "Emotional Journey",
  description:
    "Premium German language platform bridging the gap between fluency and identity. Boutique transformation for the global citizen in Germany.",
  url: "https://decodegerman.com",
  email: "decodegerman@gmail.com",
  address: {
    street: "Torstraße 124",
    city: "10119 Berlin, Germany",
  },
  whatsappNumber: "+4915904836675",
  copyright: `© ${new Date().getFullYear()} Decode German. Teaching is passion, not business.`,
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
] as const;

export const ctaButton = {
  label: "Join the Cohort",
  href: "#enroll",
};

// ─── Home Page: Hero Section ─────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    image: "/home/hero-images/HERO1.png",
    alt: "German decides your life",
    handwriting: "",
    heading: "German",
    headingAccent: "decides",
    headingEnd: "your life in Germany.",
  },
  {
    id: 2,
    image: "/home/hero-images/HERO2.png",
    alt: "We exist for our students",
    handwriting: "",
    heading: "We exist so our students don't",
    headingAccent: "beg",
    headingEnd: ". Don't struggle. Don't get left behind.",
  },
  {
    id: 3,
    image: "/home/hero-images/HERO3.png",
    alt: "German is survival",
    handwriting: "",
    heading: "German is",
    headingAccent: "survival",
    headingEnd: ". It's dignity. It's freedom in Germany.",
  },
  {
    id: 4,
    image: "/home/hero-images/HERO4.png",
    alt: "Built from responsibility",
    handwriting: "",
    heading: "This platform was",
    headingAccent: "not built",
    headingEnd: "for profit. It was built from responsibility.",
  },
  {
    id: 5,
    image: "/home/hero-images/HERO5.png",
    alt: "True German fluency",
    handwriting: "",
    heading: "When you truly know German, you",
    headingAccent: "don't struggle",
    headingEnd: ". You don't suffer. You belong.",
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
      "We built this platform with discipline, dedication, and relentless clarity.",
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
      "If you study here, you don't take classes. You commit. You build confidence. You evolve.",
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
      { text: "2 months" },
      { text: "5 days/week, 1.5 hrs/day" },
      { text: "No entrance test required" },
    ],
    description: "Your first step. Build a strong foundation in grammar, vocabulary, and everyday communication from scratch.",
  },
  {
    id: 2,
    level: "A2",
    name: "Pre-Intermediate",
    details: [
      { text: "2 months" },
      { text: "5 days/week, 1.5 hrs/day" },
      { text: "Entrance test required", italic: true },
    ],
    description: "Expand into everyday conversations and social interaction. Start expressing opinions and handling routine situations.",
  },
  {
    id: 3,
    level: "B1",
    name: "Intermediate",
    details: [
      { text: "3 months" },
      { text: "4 days/week, 2 hrs/day" },
      { text: "Entrance test required", italic: true },
    ],
    description: "Handle real-life situations independently. Discuss work, travel, and personal topics with growing fluency and confidence.",
  },
  {
    id: 4,
    level: "B2",
    name: "Professional",
    details: [
      { text: "3 months" },
      { text: "4 days/week, 2 hrs/day" },
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
    body: "No marketing. No ads. Every single student came through recommendations. Built on love and trust, driven by student success. Powered by student success, never by marketing.",
    footer: "Trust-Earned",
    image: "/home/differentiators/DIFF1.png",
    imageAlt: "Community and Trust",
    tags: [],
  },
  {
    id: 2,
    handwriting: "",
    heading: "Founder-Led",
    headingAccent: "Teaching",
    body: "Shalini personally teaches, designs curriculum, and leads every batch. 8 years of experience. Based in Germany. This isn't a platform, it's a person who chose students over career.",
    footer: "Personal Responsibility",
    image: "/home/differentiators/DIFF2.png",
    imageAlt: "Founder Teaching",
    imageOverlayText: "12 Years Experience",
    tags: [],
  },
  {
    id: 3,
    handwriting: "",
    heading: "Entrance Tests +",
    headingAccent: "Progress Tracking",
    body: "Every student must pass an entrance test before joining any level above A1. Progress is tracked individually. Regular tests ensure real learning, not just attendance. You can't hide here.",
    footer: "Accountability",
    image: "/home/differentiators/DIFF3.png",
    imageAlt: "Progress Tracking",
    tags: [],
  },
  {
    id: 4,
    handwriting: "",
    heading: "Native German",
    headingAccent: "Speakers on Team",
    body: "Native speakers, real conversations, real feedback, real German. Not chatbot practice. Not recorded videos. Living, breathing interaction.",
    footer: "Authentic Communication",
    image: "/home/differentiators/DIFF4.png",
    imageAlt: "Native Speakers",
    imageOverlayText: "Real Conversations",
    tags: [],
  },
  {
    id: 5,
    handwriting: "",
    heading: "Small Batches,",
    headingAccent: "Personal Attention",
    body: "Not a factory. Small class sizes so every student gets attention. Every class carries responsibility. Every student matters.",
    footer: "Individual Focus",
    image: "/home/differentiators/DIFF5.png",
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

// ─── Home Page: CTA Section ──────────────────────────────────────────────────
export const homeCta = {
  handwriting: "Your story continues here...",
  heading: "Ready to start\nyour",
  headingAccent: "new life",
  body: "Join the elite platform for professionals who refuse to settle for 'just getting by'.",
  primaryButton: { label: "Enroll Today", href: "#enroll" },
  secondaryButton: { label: "The Syllabus", href: "#syllabus" },
};

// ─── About Page: Hero Section ────────────────────────────────────────────────
export const aboutHero = {
  subtitle: "— The Story of Belonging",
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
    "We focus on the nuance of expression—teaching you how to share your fears, your ambitions, and your humor. Because belonging isn't just about understanding others; it's about making sure others can understand you.",
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
  heading: "Your story is waiting\nto be told.",
  body: "Step away from the apps and into the narrative. Join a collective of learners finding their voice in the heart of Europe.",
  primaryButton: { label: "Join the Collective", href: "#enroll" },
  secondaryButton: { label: "Our Curriculum", href: "#curriculum" },
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKCk2_YHw0uHJSHnQ1ZwaJMvA-qYNNiOAilJb_SpjP4wK4QNoW0akcFrcMqzZKr2f-gb2Zw_h3fxPKy6uKStT36XKV-637mrBx0ThlfKjlFFEuv-41hBHM8B5eaKq2Ntg9mgud5bJzNHESJyUqJs2PrHZKdZH6PqAzDRVVLXTRn6uIkPfvUu0z-JOpDh5HsyHfsq0nqlynKSTFFdoI27p1OS3ernmzAWoMYBFsOYixOCSVUpHzA1JXJJedsuUd_7B_ovnvkvjUMk",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-wEPGW7hntBOjTwlU7x4CJRA87KNpRIcDHVCXNQkdNfXGnjo-NEzM3Dub9KUZjXlNaKNl41cCGAroEyZBwf2hhbaLzFUPYWd0DeqGelPMMbqiRU4XTfOsHXFE-RKOoO84liGeYS2gS-uwIR16hoC_S60bXc3JYBKoMK1smSXNZcXt37o7-8ywTvWv_K2xR37NDEbjAEN4b5Aq-_J1CjHw6k5S5F2fDJLBTxBk-vi8x3o-q6msVMiRNYLVdHPJZGHu-iMnDlbOnw",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC81UHb8cIHz632HnAgMlX1kb-cMIQ8RWX3ycnjMwJgP7GlNsHkSU0AdpTSI21ROZ7YWLLEUYIxoXveMuvLF-d4yKpuuXPw3k9ICx6_cFirV_l6MLXS8QzIuClDRguOnz9vlEWpnNrksEmyJLKy2UlqbZLkiExMARMnvuJxClCd37LOYpGJdudAVQDkEYWLIFbvj6samUHqEXjI4-HVPP_63LboaBm1VNEUURmSyJOj09Y4Yp_Vqb3AaXjne0P_CpbILYMqXp1OuFI",
    imageAlt: "The Independence",
    imageAspect: "aspect-[4/5]",
    maskClass: "curated-image-mask",
    details: [
      { label: "Duration", value: "3.5 Months" },
      { label: "Intensity", value: "Deep Immersion" },
    ],
    buttonLabel: "Begin the B1 Journey",
    buttonStyle: "filled" as const,
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJgzl7b-UKwEQLRFJ9cmgOfmOo16SiLO72ThtJVuaeUw8hvlQDfiznOoy5idT-ndw0rkZSRQ07rQhTjbk_N-uXnJoXISHpWf_7fOcSdgpybGjuETExxbDPJX_LldLKa6NHRYTsh7h3GVf03TPdoXpiViGi8LtWUGEk8nvmD_DWxghJCeDMAAwagoSrb8OU0bS7pbILd3jmTozHlOl1EtZXZ9XTx7ytUNdOLD7sb6H-opbPP8Td4UdTuU-pBueTmhT-BrlWNZoCYA",
    imageAlt: "The Mastery",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask-alt",
    details: [
      { label: "Duration", value: "3.5 Months" },
      { label: "Focus", value: "Professional Fluency" },
    ],
    buttonLabel: "Begin the B2 Journey",
    buttonStyle: "filled" as const,
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKCk2_YHw0uHJSHnQ1ZwaJMvA-qYNNiOAilJb_SpjP4wK4QNoW0akcFrcMqzZKr2f-gb2Zw_h3fxPKy6uKStT36XKV-637mrBx0ThlfKjlFFEuv-41hBHM8B5eaKq2Ntg9mgud5bJzNHESJyUqJs2PrHZKdZH6PqAzDRVVLXTRn6uIkPfvUu0z-JOpDh5HsyHfsq0nqlynKSTFFdoI27p1OS3ernmzAWoMYBFsOYixOCSVUpHzA1JXJJedsuUd_7B_ovnvkvjUMk",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-wEPGW7hntBOjTwlU7x4CJRA87KNpRIcDHVCXNQkdNfXGnjo-NEzM3Dub9KUZjXlNaKNl41cCGAroEyZBwf2hhbaLzFUPYWd0DeqGelPMMbqiRU4XTfOsHXFE-RKOoO84liGeYS2gS-uwIR16hoC_S60bXc3JYBKoMK1smSXNZcXt37o7-8ywTvWv_K2xR37NDEbjAEN4b5Aq-_J1CjHw6k5S5F2fDJLBTxBk-vi8x3o-q6msVMiRNYLVdHPJZGHu-iMnDlbOnw",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC81UHb8cIHz632HnAgMlX1kb-cMIQ8RWX3ycnjMwJgP7GlNsHkSU0AdpTSI21ROZ7YWLLEUYIxoXveMuvLF-d4yKpuuXPw3k9ICx6_cFirV_l6MLXS8QzIuClDRguOnz9vlEWpnNrksEmyJLKy2UlqbZLkiExMARMnvuJxClCd37LOYpGJdudAVQDkEYWLIFbvj6samUHqEXjI4-HVPP_63LboaBm1VNEUURmSyJOj09Y4Yp_Vqb3AaXjne0P_CpbILYMqXp1OuFI",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJgzl7b-UKwEQLRFJ9cmgOfmOo16SiLO72ThtJVuaeUw8hvlQDfiznOoy5idT-ndw0rkZSRQ07rQhTjbk_N-uXnJoXISHpWf_7fOcSdgpybGjuETExxbDPJX_LldLKa6NHRYTsh7h3GVf03TPdoXpiViGi8LtWUGEk8nvmD_DWxghJCeDMAAwagoSrb8OU0bS7pbILd3jmTozHlOl1EtZXZ9XTx7ytUNdOLD7sb6H-opbPP8Td4UdTuU-pBueTmhT-BrlWNZoCYA",
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
  body: "Request a callback or message us directly on WhatsApp. We'll help you find the right course.",
  primaryButton: { label: "Request a Callback", href: "#callback" },
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
      { label: "Intensity", value: "4–5 hrs/day" },
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
      { label: "Intensity", value: "4–5 hrs/day" },
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
    description: "Not sure where to start? Request a callback, we'll help.",
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
      "A structured blend of video lessons and live classes takes you from knowing nothing to handling everyday life in German — introducing yourself, shopping, navigating public transport, filling out forms, and understanding simple conversations.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX1iVf5IBO_iq-_sqrsaDqzBLDuG2j7e2TDjha4l4gda3tbP_lwQcR8LkA3t24WGasNAWDABEhLx3ffM2O0wYkugcpJFUwkWOagxAVXXel6pGEUZUWlJ0M-Dlo2VBdKKh4r6Y9bALmLc-rYLNL_r9Dw51Zwsg_L6XeGLsoDKqKn8FcLNa75gAyinrpH9RWrAlsMfsTRMC0Clq0RmX3jBu_LAmRs1HXh7OTpbeQP7TJll3em3pFR1IXao96gPW1VS3bnbZoDEqVROE",
    heroImageAlt: "Cinematic street view of Berlin",
    imageCaption: "Start from zero. Build the basics to survive, then thrive.",
    stats: [
      { value: "2.5", label: "Months" },
      { value: "5", label: "Days / Week" },
      { value: "8–10", label: "Students / Batch" },
      { value: "4+1", label: "Tests + Full Exam" },
    ],
    competencies: [
      { title: "Introduce Yourself", description: "Say your name, where you're from, what you do, and ask others the same. Handle greetings and goodbyes naturally.", annotation: "\"Ich heiße... and the world opens up\"" },
      { title: "Handle Everyday Situations", description: "Order food, buy groceries, ask for prices, navigate a bakery or supermarket without pointing and hoping.", annotation: "No more pointing at menus!", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FrgcK7geX40q48kD7dqmQ1Q5gNMmMb7S0ZFWLyaZkxO4INFyKPGOs2X5tyEhoXLCGUaTuhhw-e_1uWp7Jyo2ncq_ei276YSqFF7OQ5oYorBVvqbF8OUSu4uZIdwtRqA0g4jcr-q8Zj8HINEDH_e0Ib8dyfzePDbXSMBwTNWwUHyf6yISDZavN1KaLNrAHy4Lh_nRqmFXURCsFWzuh3MACzFpPYDIwHluCrCbG-ALL7eUltiD4JU5ICZbtEgUU-UNkkmxOI2JCiE", imageAlt: "German café scene" },
      { title: "Describe Your World", description: "Talk about your home, family, daily routine. Answer questions about where you live and what you like.", annotation: "\"Meine Familie ist...\"", scrapbookNote: "From the Bäckerei to the Wohnzimmer..." },
      { title: "Fill Out Forms", description: "Complete registration forms, understand simple official letters, write your personal details correctly in German." },
      { title: "Navigate the City", description: "Ask for and understand directions, buy train tickets, read signs and timetables, handle basic conversations with strangers." },
      { title: "Understand Simple German", description: "Follow slow, clearly spoken conversations. Understand short messages, basic emails, and simple announcements.", annotation: "\"I'm finally getting it!\"" },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lessons", description: "27 structured video lessons covering grammar, vocabulary, and real-world usage. Watch at your own pace before each live session." },
      { number: "02", title: "Attend Live Classes", description: "Interactive Zoom sessions to practice what you've watched — speaking, exercises, Q&A. This is where grammar becomes communication." },
      { number: "03", title: "Review & Practice", description: "Built-in catch-up days, homework, and self-study with NicosWeg, podcasts, and curated content to reinforce what you've learned." },
      { number: "04", title: "Test & Progress", description: "4 block tests + 1 full Goethe-style A1 exam at the end. You always know where you stand. Weak spots are identified and addressed before moving on." },
    ],
    methodBenefits: [
      "Small Batches (8–10 students)",
      "1-on-1 Pronunciation Sessions",
      "Built-in Catch-up Days",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Videos 1–11", title: "Block 1: The Building Blocks", description: "Alphabet and numbers, articles, personal pronouns, sein, demonstrative and possessive pronouns, verb conjugation and sentence structure, Imperativ and introductions. Kapitel 1, 2 & 3 (Netzwerk A1).", badge: "Test 1" },
      { number: "02", weeks: "Videos 12–19", title: "Block 2: Grammar in Action", description: "Cases (Kasus) — Nominativ, Akkusativ, Wechselpräpositionen, time and dates, modal verbs, separable verbs, Präteritum, writing emails in German, Es constructions, personal pronouns. Kapitel 4, 5 & 6 (Netzwerk A1).", badge: "Test 2" },
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
      "No prior German knowledge needed. A1 is the absolute beginner level. You start from zero — no entrance test required. All you need is the commitment to show up consistently for 2.5 months. Whether you're a student planning to move to Germany, a professional already here, or someone starting fresh — this is where your journey begins.",
    afterText:
      "You've built the foundation. Now learn to connect — talk about your past, describe routines, hold real conversations. A2 picks up exactly where A1 leaves off.",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-wEPGW7hntBOjTwlU7x4CJRA87KNpRIcDHVCXNQkdNfXGnjo-NEzM3Dub9KUZjXlNaKNl41cCGAroEyZBwf2hhbaLzFUPYWd0DeqGelPMMbqiRU4XTfOsHXFE-RKOoO84liGeYS2gS-uwIR16hoC_S60bXc3JYBKoMK1smSXNZcXt37o7-8ywTvWv_K2xR37NDEbjAEN4b5Aq-_J1CjHw6k5S5F2fDJLBTxBk-vi8x3o-q6msVMiRNYLVdHPJZGHu-iMnDlbOnw",
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
      { title: "Talk About Your Past", description: "Describe what happened yesterday, last week, or last year. Use past tenses to share experiences, tell stories, and explain what you did and why.", annotation: "Gestern war ich...", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FrgcK7geX40q48kD7dqmQ1Q5gNMmMb7S0ZFWLyaZkxO4INFyKPGOs2X5tyEhoXLCGUaTuhhw-e_1uWp7Jyo2ncq_ei276YSqFF7OQ5oYorBVvqbF8OUSu4uZIdwtRqA0g4jcr-q8Zj8HINEDH_e0Ib8dyfzePDbXSMBwTNWwUHyf6yISDZavN1KaLNrAHy4Lh_nRqmFXURCsFWzuh3MACzFpPYDIwHluCrCbG-ALL7eUltiD4JU5ICZbtEgUU-UNkkmxOI2JCiE", imageAlt: "German café conversation" },
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
      "A1 completion or entrance test required. A2 picks up where A1 ends. If you completed A1 with Decode German, you're ready. If you learned A1 elsewhere, through another school, self-study, or living in Germany, you'll take an entrance test so we can confirm you're at the right level. This ensures everyone in the batch can move at the same pace.",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC81UHb8cIHz632HnAgMlX1kb-cMIQ8RWX3ycnjMwJgP7GlNsHkSU0AdpTSI21ROZ7YWLLEUYIxoXveMuvLF-d4yKpuuXPw3k9ICx6_cFirV_l6MLXS8QzIuClDRguOnz9vlEWpnNrksEmyJLKy2UlqbZLkiExMARMnvuJxClCd37LOYpGJdudAVQDkEYWLIFbvj6samUHqEXjI4-HVPP_63LboaBm1VNEUURmSyJOj09Y4Yp_Vqb3AaXjne0P_CpbILYMqXp1OuFI",
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
      { title: "Handle Work Conversations", description: "Participate in meetings, explain processes, handle phone calls, write professional emails, and deal with workplace interactions confidently.", annotation: "Meeting ready!", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FrgcK7geX40q48kD7dqmQ1Q5gNMmMb7S0ZFWLyaZkxO4INFyKPGOs2X5tyEhoXLCGUaTuhhw-e_1uWp7Jyo2ncq_ei276YSqFF7OQ5oYorBVvqbF8OUSu4uZIdwtRqA0g4jcr-q8Zj8HINEDH_e0Ib8dyfzePDbXSMBwTNWwUHyf6yISDZavN1KaLNrAHy4Lh_nRqmFXURCsFWzuh3MACzFpPYDIwHluCrCbG-ALL7eUltiD4JU5ICZbtEgUU-UNkkmxOI2JCiE", imageAlt: "German workplace meeting" },
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
      "Native Speaker Sessions (Justine & Simon)",
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
      { title: "Speaking with Native Germans", description: "Sessions with Justine & Simon, new at B1", type: "primary" as const },
      { title: "1-on-1 Pronunciation Practice", description: "Continuing with B1-level vocabulary", type: "primary" as const },
    ],
    beforeText:
      "A2 completion or entrance test required. B1 builds directly on A2. If you completed A2 with Decode German, you're ready. If you learned A2 elsewhere, through another school, self-study, or living in Germany, you'll take an entrance test so we can confirm you're at the right level. B1 moves faster and expects solid A2 foundations.",
    afterText:
      "Speak with the confidence and precision of someone who truly belongs. B2 is where you handle university lectures, professional debates, and cultural nuance, entirely in German.",
    nextLevel: { id: "b2", level: "B2" },
    closingQuote:
      "Ready to cross the threshold of fluency?",
  },
  b2: {
    level: "B2",
    title: "Mastery",
    subtitle: "Intensive Online German",
    heroDescription: "Speak with confidence. Follow complex discussions, write professional reports, understand humour and idioms, handle university lectures and workplace meetings entirely in German.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJgzl7b-UKwEQLRFJ9cmgOfmOo16SiLO72ThtJVuaeUw8hvlQDfiznOoy5idT-ndw0rkZSRQ07rQhTjbk_N-uXnJoXISHpWf_7fOcSdgpybGjuETExxbDPJX_LldLKa6NHRYTsh7h3GVf03TPdoXpiViGi8LtWUGEk8nvmD_DWxghJCeDMAAwagoSrb8OU0bS7pbILd3jmTozHlOl1EtZXZ9XTx7ytUNdOLD7sb6H-opbPP8Td4UdTuU-pBueTmhT-BrlWNZoCYA",
    heroImageAlt: "B2 Course - The Mastery",
    imageCaption: "Belonging...",
    stats: [
      { value: "3.5", label: "Months Duration" },
      { value: "5", label: "Days / Week" },
      { value: "8-10", label: "Students Batch" },
      { value: "4+1", label: "Module Tests" },
    ],
    competencies: [
      { title: "Complex Discussions", description: "Follow and contribute to complex arguments on abstract and concrete topics." },
      { title: "Professional Reports", description: "Write detailed reports, essays, and professional documents with precision." },
      { title: "Humour & Idioms", description: "Understand cultural references, jokes, and idiomatic expressions naturally." },
      { title: "University Lectures", description: "Follow extended speech and complex lines of argument in academic settings." },
      { title: "Workplace Meetings", description: "Participate actively in professional meetings, presentations, and negotiations." },
      { title: "Cultural Fluency", description: "Navigate German culture with the confidence and ease of a long-term resident." },
    ],
    methodSteps: [
      { number: "01", title: "Watch Video Lessons", description: "Expert-level grammar and stylistic refinement through authentic German media analysis and advanced linguistic structures." },
      { number: "02", title: "Attend Live Classes", description: "Full immersion sessions with native speakers, academic debates, presentation practice, and spontaneous discussions." },
      { number: "03", title: "Review & Practice", description: "B2-level materials including literary texts, journalistic articles, and professional writing exercises." },
      { number: "04", title: "Test & Progress", description: "Intensive exam preparation mirroring Goethe B2 / TELC B2 format with timed mock exams." },
    ],
    methodBenefits: [
      "Small Batches (max 10)",
      "Native Speaker Classes",
      "Full Exam Preparation",
    ],
    journeyBlocks: [
      { number: "01", weeks: "Weeks 1-3", title: "Block 1: Depth", description: "Advanced subjunctive, indirect speech, and nuanced expression of complex ideas.", badge: "Quiz: Perspectives", annotation: "\"In my opinion...\"" },
      { number: "02", weeks: "Weeks 4-7", title: "Block 2: Precision", description: "Academic writing, formal register, participle constructions, and advanced connectors.", badge: "Test: The Essay", annotation: "Writing with style!" },
      { number: "03", weeks: "Weeks 8-11", title: "Block 3: Fluency", description: "Idiomatic expressions, cultural literacy, media analysis, and spontaneous argumentation.", badge: "Test: The Discussion", annotation: "Thinking in German!" },
      { number: "04", weeks: "Weeks 12-14", title: "Block 4: Excellence", description: "Comprehensive B2 exam preparation, intensive mock exams, and final oral presentation.", badge: "Final Assessment", annotation: "B2 mastery!" },
    ],
    resources: [
      { title: "Sicher! Aktuell B2", description: "The comprehensive B2 textbook by Hueber.", type: "primary" as const, link: "#", linkLabel: "Order on Amazon" },
      { title: "ARD Mediathek", description: "", type: "watch" as const },
      { title: "Deutschlandfunk", description: "", type: "listen" as const },
    ],
    beforeText: "You should have completed B1 or equivalent. You can handle most everyday situations and express yourself on familiar topics. An entrance test ensures correct placement.",
    afterText: "You will interact with native speakers fluently and spontaneously, produce detailed text on a wide range of subjects, and be fully prepared for university studies or professional life in Germany.",
    nextLevel: null,
    closingQuote: "\"To have another language is to possess a second soul.\" — Charlemagne",
  },
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerLinks = {
  explorer: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
  ],
  legal: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
  ],
};

export const footerDescription =
  "Teaching is passion, not business. Premium German language transformation for the global citizen in Germany.";

export const socialLinks = [
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/decodegerman" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/decodegerman" },
  { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCrWQrQOWzRSt86XrS6C-D2Q" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/decode-german/" },
];
