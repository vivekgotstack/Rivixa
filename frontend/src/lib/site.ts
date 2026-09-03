export const company = {
  name: "Rivixa Lifesciences Private Limited",
  email: "rivixalifesciences@gmail.com",
  cin: "U46497MH2026PTC471423",
  registeredOffice:
    "14-L, Floor-6th, Navjeevan Commercial Premises, Mumbai Central, Mumbai – 400008, Maharashtra",
  branchOffice:
    "KH No. 614, Ram Dulare Nagar, Amrai Gaon, Indira Nagar, Lucknow – 226016, Uttar Pradesh, India",
};
export const specialties = [
  {
    slug: "gynaecology",
    name: "Gynaecology",
    label: "WOMEN’S HEALTH",
    number: "01",
    icon: "heart",
    image: "/images/womens-health.jpg",
    alt: "A woman enjoying a moment outdoors",
    tagline: "For every chapter of her life.",
    description:
      "A dedicated focus on women’s health, with care and understanding at every stage of life.",
    intro:
      "Every woman’s health journey is different. Our gynaecology focus is shaped by a simple ambition: to support healthcare professionals in putting her individual needs first.",
    topics: [
      {
        title: "Reproductive wellbeing",
        text: "Keeping women’s individual needs and conversations with their healthcare professionals at the centre of our focus.",
      },
      {
        title: "Maternal health",
        text: "Recognising the importance of thoughtful, professional care throughout the journey to motherhood.",
      },
      {
        title: "Health through life’s stages",
        text: "A long-term perspective on women’s wellbeing, from early adulthood to the years beyond menopause.",
      },
    ],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    label: "VISION & EYE CARE",
    number: "02",
    icon: "eye",
    image: "/images/eye-care.jpg",
    alt: "A close-up of a human eye",
    tagline: "A clearer outlook on life.",
    description:
      "An eye on what matters: supporting the professionals who help people care for their vision.",
    intro:
      "Vision connects us to the people and moments that matter. Our ophthalmology focus reflects a commitment to keeping eye health an important part of the wider healthcare conversation.",
    topics: [
      {
        title: "Everyday eye health",
        text: "A focus on the everyday needs that bring people and their eye-care professionals together.",
      },
      {
        title: "Specialist collaboration",
        text: "Listening to ophthalmic professionals and understanding the needs of their clinical practice.",
      },
      {
        title: "Long-term vision care",
        text: "Recognising the value of continued professional attention to eye health through every stage of life.",
      },
    ],
  },
  {
    slug: "orthopedic",
    name: "Orthopedic",
    label: "BONE, JOINT & MOBILITY",
    number: "03",
    icon: "bone",
    image: "/images/mobility.jpg",
    alt: "A runner climbing outdoor steps",
    tagline: "Life is made for movement.",
    description:
      "A focus on bone and joint health, inspired by the freedom to move and live more fully.",
    intro:
      "Movement is part of everyday independence. Our orthopedic focus is rooted in an understanding of the role that bone, joint and musculoskeletal health play in people’s lives.",
    topics: [
      {
        title: "Bone & joint health",
        text: "Putting everyday musculoskeletal wellbeing at the heart of our orthopedic focus.",
      },
      {
        title: "Mobility & independence",
        text: "Recognising how comfortable movement can shape daily life, work and personal independence.",
      },
      {
        title: "Professional partnerships",
        text: "Building conversations with healthcare professionals around the needs of orthopedic care.",
      },
    ],
  },
] as const;
