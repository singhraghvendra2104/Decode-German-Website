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
  copyright: `© ${new Date().getFullYear()} Decode German. Editorial Language Learning.`,
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
      "Breaking down the linguistic codes and cultural foundations.",
    label: "The Foundation",
    shapeClass: "organic-shape-1",
  },
  {
    number: "02",
    title: "Own",
    description:
      "Gaining the confidence to express your true self without fear.",
    label: "",
    shapeClass: "organic-shape-2",
  },
  {
    number: "03",
    title: "Live",
    description:
      "Applying your skills in real-world scenarios that shape your career.",
    label: "",
    shapeClass: "organic-shape-3",
  },
  {
    number: "04",
    title: "Belong",
    description: "Becoming an integral part of the community.",
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
      { icon: "calendar_today", text: "2 months" },
      { icon: "schedule", text: "5 days/week, 1.5 hrs/day" },
      { icon: "assignment_turned_in", text: "No entrance test required" },
    ],
    description: null,
  },
  {
    id: 2,
    level: "A2",
    name: "Pre-Intermediate",
    details: [
      { icon: "verified", text: "Entrance test required", italic: true },
    ],
    description: "Building the foundation for everyday communication and basic social interaction.",
  },
  {
    id: 3,
    level: "B1",
    name: "Intermediate",
    details: [
      { icon: "schedule", text: "4 days/week, 2 hrs/day" },
      { icon: "verified", text: "Entrance test required", italic: true },
    ],
    description: null,
  },
  {
    id: 4,
    level: "B2",
    name: "Professional",
    details: [
      { icon: "verified", text: "Entrance test required", italic: true },
    ],
    description: "The gateway to the German workforce. Mastering technical discussions and professional etiquette.",
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
    imageOverlayText: "8 Years Experience",
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
  subtitle: "— The Path to Belonging",
  heading: "A Curated Journey",
  headingAccent: "Through the Language.",
  body: "We don't teach grammar in isolation. We teach you how to reclaim your identity, level by level, through the power of emotional storytelling.",
};

// ─── Courses Page: Course Levels ─────────────────────────────────────────────
export const courseLevels = [
  {
    id: "a1",
    level: "A1",
    title: "The Foundation",
    description:
      "Begin with the basics of existence. Learn to introduce yourself, navigate daily life, and express your immediate needs with dignity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKCk2_YHw0uHJSHnQ1ZwaJMvA-qYNNiOAilJb_SpjP4wK4QNoW0akcFrcMqzZKr2f-gb2Zw_h3fxPKy6uKStT36XKV-637mrBx0ThlfKjlFFEuv-41hBHM8B5eaKq2Ntg9mgud5bJzNHESJyUqJs2PrHZKdZH6PqAzDRVVLXTRn6uIkPfvUu0z-JOpDh5HsyHfsq0nqlynKSTFFdoI27p1OS3ernmzAWoMYBFsOYixOCSVUpHzA1JXJJedsuUd_7B_ovnvkvjUMk",
    imageAlt: "The Foundation",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask",
    details: [
      { label: "Duration", value: "3 Months" },
      { label: "Batch Size", value: "Max 6 Students" },
      { label: "Materials", value: "Netzwerk Neu" },
    ],
    buttonLabel: "Explore A1 Curriculum",
    buttonStyle: "outline" as const,
    quote: {
      text: "\u201CThe moment I ordered my first coffee without panic, the city started to feel like it wanted me there.\u201D",
      caption: "— A1 Student Reflection",
      position: "bottom-right" as const,
      bgClass: "bg-warm-sand",
    },
  },
  {
    id: "a2",
    level: "A2",
    title: "The Expansion",
    description:
      "Move beyond survival. Learn to describe your past, share your dreams, and engage in meaningful exchanges with your neighbors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-wEPGW7hntBOjTwlU7x4CJRA87KNpRIcDHVCXNQkdNfXGnjo-NEzM3Dub9KUZjXlNaKNl41cCGAroEyZBwf2hhbaLzFUPYWd0DeqGelPMMbqiRU4XTfOsHXFE-RKOoO84liGeYS2gS-uwIR16hoC_S60bXc3JYBKoMK1smSXNZcXt37o7-8ywTvWv_K2xR37NDEbjAEN4b5Aq-_J1CjHw6k5S5F2fDJLBTxBk-vi8x3o-q6msVMiRNYLVdHPJZGHu-iMnDlbOnw",
    imageAlt: "The Expansion",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask-alt",
    details: [
      { label: "Duration", value: "2.5 Months" },
      { label: "Focus", value: "Narrative Past" },
      { label: "Materials", value: "Netzwerk A2" },
    ],
    buttonLabel: "Explore A2 Curriculum",
    buttonStyle: "outline" as const,
    reversed: true,
  },
  {
    id: "b1",
    level: "B1",
    title: "The Independence",
    description:
      "The threshold of fluency. Articulate complex thoughts, debate opinions, and navigate professional environments with nuance and confidence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC81UHb8cIHz632HnAgMlX1kb-cMIQ8RWX3ycnjMwJgP7GlNsHkSU0AdpTSI21ROZ7YWLLEUYIxoXveMuvLF-d4yKpuuXPw3k9ICx6_cFirV_l6MLXS8QzIuClDRguOnz9vlEWpnNrksEmyJLKy2UlqbZLkiExMARMnvuJxClCd37LOYpGJdudAVQDkEYWLIFbvj6samUHqEXjI4-HVPP_63LboaBm1VNEUURmSyJOj09Y4Yp_Vqb3AaXjne0P_CpbILYMqXp1OuFI",
    imageAlt: "The Independence",
    imageAspect: "aspect-[4/5]",
    maskClass: "curated-image-mask",
    details: [
      { label: "Duration", value: "3 Months" },
      { label: "Intensity", value: "Deep Immersion" },
      { label: "Materials", value: "Netzwerk B1+" },
    ],
    buttonLabel: "Begin the B1 Journey",
    buttonStyle: "filled" as const,
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
      "Command the language with precision. Engage in academic discourse, understand subtle humor, and express yourself with the eloquence of a native speaker.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJgzl7b-UKwEQLRFJ9cmgOfmOo16SiLO72ThtJVuaeUw8hvlQDfiznOoy5idT-ndw0rkZSRQ07rQhTjbk_N-uXnJoXISHpWf_7fOcSdgpybGjuETExxbDPJX_LldLKa6NHRYTsh7h3GVf03TPdoXpiViGi8LtWUGEk8nvmD_DWxghJCeDMAAwagoSrb8OU0bS7pbILd3jmTozHlOl1EtZXZ9XTx7ytUNdOLD7sb6H-opbPP8Td4UdTuU-pBueTmhT-BrlWNZoCYA",
    imageAlt: "The Mastery",
    imageAspect: "aspect-[16/10]",
    maskClass: "curated-image-mask-alt",
    details: [
      { label: "Duration", value: "4 Months" },
      { label: "Focus", value: "Academic Fluency" },
      { label: "Materials", value: "Aspekte Neu B2" },
    ],
    buttonLabel: "Begin the B2 Journey",
    buttonStyle: "filled" as const,
    reversed: true,
    quote: {
      text: "\u201CAt B2, you don\u2019t just speak German \u2014 you think, dream, and argue in it.\u201D",
      caption: "— B2 Graduate",
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
  "\u201CTo have another language is to possess a second soul.\u201D";

// ─── Courses Page: CTA Section ───────────────────────────────────────────────
export const courseCta = {
  heading: "Where does your\nstory begin?",
  body: "Whether you\u2019re taking your first breath in a new tongue or polishing your professional edge, we have a place for you.",
  primaryButton: { label: "Consultation Call", href: "#consultation" },
  secondaryButton: { label: "Browse All Modules", href: "#modules" },
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
  "Bridging the gap between fluency and identity. Premium transformation for the global citizen in Germany.";
