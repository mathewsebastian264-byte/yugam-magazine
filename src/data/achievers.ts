export interface AchieverItem {
  id: string;
  name: string;
  category: "Best Outgoing" | "Kalolsavam Winner" | "Featured Artist";
  degree?: "UG" | "PG";
  title: string;
  department: string;
  batch?: string;
  achievements: string[];
  image: string;
  pageRef: number;
}

export const bestOutgoingStudents: AchieverItem[] = [
  {
    id: "mahesh-shankar",
    name: "Mahesh Shankar",
    category: "Best Outgoing",
    degree: "UG",
    title: "Best Outgoing Student (UG)",
    department: "Department of Business Administration",
    batch: "2023–2026 Batch",
    achievements: [
      "Conferred Best Outgoing UG Student of St. Joseph's College (Autonomous), Moolamattom",
      "Exceptional academic record, leadership, and inter-collegiate event management",
      "Lead organizer and ambassador for university fests"
    ],
    image: "/images/magazine/page-44.jpg",
    pageRef: 13,
  },
  {
    id: "sethulakshmi-m-a",
    name: "Sethulakshmi M A",
    category: "Best Outgoing",
    degree: "PG",
    title: "Best Outgoing Student (PG)",
    department: "Department of Social Work",
    batch: "2024–2026 Batch",
    achievements: [
      "Conferred Best Outgoing PG Student of St. Joseph's College (Autonomous), Moolamattom",
      "Excellence in field research, community outreach, and academic brilliance",
      "Spearheaded rural development projects and cultural theatrical productions"
    ],
    image: "/images/magazine/page-45.jpg",
    pageRef: 13,
  }
];

export const featuredArtists: AchieverItem[] = [
  {
    id: "vivek-saji",
    name: "Vivek Saji",
    category: "Featured Artist",
    title: "Albert Einstein Charcoal Portrait",
    department: "Department of Chemistry",
    achievements: [
      "Remarkable master-level pencil and charcoal shading technique",
      "Featured on full-page showcase in Astra Union Magazine"
    ],
    image: "/images/magazine/page-10.jpg",
    pageRef: 10,
  },
  {
    id: "archana-jyothis-mj",
    name: "Archana Jyothis",
    category: "Featured Artist",
    title: "Michael Jackson High-Contrast Ink Art",
    department: "Department of Commerce",
    achievements: [
      "Iconic high-contrast black ink brush silhouette portrait of the King of Pop",
      "Full framed magazine feature"
    ],
    image: "/images/magazine/page-11.jpg",
    pageRef: 11,
  },
  {
    id: "archana-jyothis-neymar",
    name: "Archana Jyothis",
    category: "Featured Artist",
    title: "Neymar Jr. Detailed Pen Sketch & Monsoon Watercolor",
    department: "Department of Commerce",
    achievements: [
      "Realistic cross-hatch pen portrait of football icon Neymar Jr.",
      "Vibrant scenic Kerala monsoon autotaxi watercolor landscape"
    ],
    image: "/images/magazine/page-30.jpg",
    pageRef: 30,
  },
  {
    id: "pooja-s-buddha",
    name: "Pooja S",
    category: "Featured Artist",
    title: "Serene Buddha Pencil Meditation Drawing",
    department: "Department of Management Studies",
    achievements: [
      "Intricate pencil illustration capturing meditative spiritual peace and lotus flower"
    ],
    image: "/images/magazine/page-03.jpg",
    pageRef: 3,
  },
  {
    id: "gouri-jineesh-puppy",
    name: "Gouri Jineesh",
    category: "Featured Artist",
    title: "Golden Puppy Fine Pencil Sketch",
    department: "Department of Physics",
    achievements: [
      "Delicate soft-texture pencil rendering of a puppy with water bowl"
    ],
    image: "/images/magazine/page-31.jpg",
    pageRef: 31,
  }
];

export const kalolsavamWinners = [
  {
    name: "Vaishakhi Pillai",
    class: "I MA English",
    events: ["Short Story Writing Hindi - 1st Prize with A Grade", "Essay Writing Hindi - A Grade", "Short Story Writing English - A Grade"]
  },
  {
    name: "Joji Dominic",
    class: "II MA English",
    events: ["Installation (Group) - Second Prize with A Grade"]
  },
  {
    name: "Merlin Thomas",
    class: "II MA English",
    events: ["Installation (Group) - Second Prize with A Grade"]
  },
  {
    name: "Aswathy Sabu",
    class: "I MA English",
    events: ["Installation (Group) - Second Prize with A Grade"]
  },
  {
    name: "Abinoathmaja BM",
    class: "I MA English",
    events: ["Installation (Group) - Second Prize with A Grade"]
  },
  {
    name: "Chinnu Baburaj",
    class: "III BA English",
    events: ["Light Music - A Grade", "Mappilapattu - A Grade", "Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Githu Biju",
    class: "III BA English",
    events: ["Percussion Instrument - A Grade", "Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Manjima Sibi",
    class: "III BCom",
    events: ["Kavitha Parayanam - A Grade", "Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Esther M Jose",
    class: "I BBA Aided",
    events: ["Monoact - A Grade", "Stand Up Comedy - A Grade"]
  },
  {
    name: "Kakchang Debarma",
    class: "I BA English",
    events: ["Western Vocal Solo - A Grade"]
  },
  {
    name: "Sayoosh Santhosh",
    class: "III BCom",
    events: ["Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Anvin Devasia",
    class: "III BA English",
    events: ["Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Harisankar B",
    class: "II BBA SF",
    events: ["Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Emeema Samuel",
    class: "II BBA Aided",
    events: ["Nadanpaatu (Group) - A Grade"]
  },
  {
    name: "Sruthy S Kumar",
    class: "II BBA Aided",
    events: ["Nadanpaatu (Group) - A Grade"]
  }
];
