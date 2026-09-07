export interface EventItem {
  id: string;
  title: string;
  category: "Major Fest" | "Union Event" | "Academic & Tech" | "Cultural" | "Sports" | "Departmental";
  date: string;
  tagline: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  pageReferences: number[];
}

export const eventsData: EventItem[] = [
  {
    id: "trionza-2k26",
    title: "TRIONZA 2K26 — National Education Fest",
    category: "Major Fest",
    date: "16 & 17 January 2026",
    tagline: "Fusion of Academics, Arts & Culture",
    coverImage: "/images/magazine/page-34.jpg",
    galleryImages: [
      "/images/magazine/page-34.jpg",
      "/images/magazine/page-35.jpg",
      "/images/magazine/page-36.jpg",
      "/images/magazine/page-37.jpg",
      "/images/magazine/page-38.jpg",
      "/images/magazine/page-39.jpg",
      "/images/magazine/page-40.jpg",
      "/images/magazine/page-68.jpg",
      "/images/magazine/page-69.jpg",
      "/images/magazine/page-70.jpg",
    ],
    description: "Trionza 2K26 was a National Level Education Fest organized by St. Joseph's College (Autonomous), Moolamattom, bringing together students from diverse schools and colleges. The two-day fest featured academic and science exhibitions, inter-school competitions, cultural performances, sports activities, fun zones, gaming events, and innovative educational displays. Major attractions included ExploreX (ISRO, Indian Army, Indian Navy, Police and forensic science, robotics, VR, astronomy, anatomy, and wildlife). The fest reached its pinnacle on 17th January with an electrifying live concert by the renowned Vidhu Prathap Music Band.",
    highlights: [
      "Inaugurated by Shri Roshy Augustine (Hon. Minister for Water Resources)",
      "ExploreX Mega Exhibition (ISRO, Armed Forces, Forensic Science, VR & Robotics)",
      "Inter-Collegiate & Inter-School Competitions: Battle of Rhythms, Groove Burst, Naadhalaya",
      "Live Mega Concert by Vidhu Prathap Music Band",
      "Interactive Fun Zones, Gaming Tournaments & ExploreX Hunt"
    ],
    pageReferences: [34, 35, 36, 37, 38, 39, 40, 68, 69, 70]
  },
  {
    id: "union-inauguration",
    title: "Astra Union Inauguration",
    category: "Union Event",
    date: "2 December 2025",
    tagline: "Empowering Student Leadership and Artistic Energy",
    coverImage: "/images/magazine/page-15.jpg",
    galleryImages: [
      "/images/magazine/page-15.jpg",
      "/images/magazine/page-16.jpg",
      "/images/magazine/page-17.jpg",
    ],
    description: "The official inauguration of the Astra College Union 2025–26 took place at 11:00 AM in the college auditorium in the presence of faculty members, students, and union leaders. The event was officially inaugurated by popular cinema actress Darshana S Nair. The elected members shared their vision for the academic year, accompanied by live musical acoustic performances, cultural dances, and dynamic stage shows that set an inspiring tone for the year.",
    highlights: [
      "Chief Guest: Famous Malayalam cinema actress Darshana S Nair",
      "Traditional Lamp Lighting & Formal Oath taking",
      "Acoustic guitar and vocal performances",
      "High-energy DJ and laser light cultural celebration"
    ],
    pageReferences: [15, 16, 17]
  },
  {
    id: "comquest-commerce-fest",
    title: "COMQUEST — Commerce Fest",
    category: "Departmental",
    date: "2025–2026",
    tagline: "The Benchmark of Commerce and Corporate Leadership",
    coverImage: "/images/magazine/page-55.jpg",
    galleryImages: [
      "/images/magazine/page-21.jpg",
      "/images/magazine/page-55.jpg",
      "/images/magazine/page-56.jpg",
      "/images/magazine/page-57.jpg",
      "/images/magazine/page-58.jpg",
    ],
    description: "Organized by the Department of Commerce, COMQUEST brought together hundreds of enthusiastic students wearing signature blue fest jerseys. Featuring corporate simulations, managerial mock-trials, marketing wars, finance quizzes, and creative cultural programmes, COMQUEST was a celebrated highlight of academic and business acumen.",
    highlights: [
      "Grand opening ceremony in front of the college facade",
      "Over 300+ students participating in team jersey livery",
      "Managerial games, mock stock exchanges, and corporate case presentations",
      "Auditorium cultural showcases and grand trophy presentations"
    ],
    pageReferences: [21, 55, 56, 57, 58]
  },
  {
    id: "algorhythm-computer-fest",
    title: "ALGORHYTHM — Computer Fest",
    category: "Academic & Tech",
    date: "2025–2026",
    tagline: "Where Code Meets Creativity and Robotics",
    coverImage: "/images/magazine/page-25.jpg",
    galleryImages: [
      "/images/magazine/page-25.jpg",
      "/images/magazine/page-59.jpg",
      "/images/magazine/page-60.jpg",
    ],
    description: "ALGORHYTHM is the flagship tech festival organized by the Department of Computer Applications and Data Science. Students built life-sized automated humanoid models, robotic greeters, coding workstations, and conducted competitive programming, e-gaming arenas, and paper presentations.",
    highlights: [
      "Humanoid robot model exhibits with intelligent interactive cues",
      "Coding contests, debug battles, and web design challenges",
      "Department group photo on the college steps",
      "Interactive tech talks and AI project showcases"
    ],
    pageReferences: [25, 59, 60]
  },
  {
    id: "robotics-and-physics",
    title: "Robotics & VR Lab — Dept. of Physics",
    category: "Academic & Tech",
    date: "2025–2026",
    tagline: "Exploring Frontiers of Hardware, Robotics and VR",
    coverImage: "/images/magazine/page-23.jpg",
    galleryImages: [
      "/images/magazine/page-23.jpg",
    ],
    description: "The Department of Physics organized immersive hands-on workshops in Virtual Reality (VR) headsets, automated mobile robotic systems, and micro-controller circuit building, enabling students to experience modern applied physics and automated systems.",
    highlights: [
      "VR Headset immersion experiments",
      "Mobile wheeled robotic server demonstrations",
      "Microcontroller and sensor circuitry workshops"
    ],
    pageReferences: [23]
  },
  {
    id: "prompt-mastery-english",
    title: "Prompt Mastery — Dept. of English",
    category: "Academic & Tech",
    date: "2025–2026",
    tagline: "Harnessing Generative AI & Digital Humanities",
    coverImage: "/images/magazine/page-22.jpg",
    galleryImages: [
      "/images/magazine/page-22.jpg",
    ],
    description: "Conducted in the modern computer lab, Prompt Mastery explored the intersection of language, literature, and Artificial Intelligence, training students in prompt engineering, creative copywriting with AI, and computational language processing.",
    highlights: [
      "Hands-on AI prompt construction lab",
      "Language and editorial creative styling",
      "Digital humanities seminar"
    ],
    pageReferences: [22]
  },
  {
    id: "onam-celebrations",
    title: "Onam Celebrations",
    category: "Cultural",
    date: "September 2025",
    tagline: "Tradition, Thalam & The Festive Spirit of Kerala",
    coverImage: "/images/magazine/page-14.jpg",
    galleryImages: [
      "/images/magazine/page-14.jpg",
      "/images/magazine/page-15.jpg",
      "/images/magazine/page-16.jpg",
      "/images/magazine/page-17.jpg",
    ],
    description: "The campus came alive in pristine Kasavu sarees and traditional mundus to celebrate Onam. Complete with a majestic Maveli persona, grand Chenda Melam percussion ensemble echoing across the misty hills of Moolamattom, thrilling Tug-of-War (Vadamvali) matches, Uri Adi, musical chairs, and traditional payasam feasts.",
    highlights: [
      "Grand procession with Maveli, Olakuda, and Chenda Melam artists",
      "Fierce Inter-batch Tug-of-War (Vadamvali) championship",
      "Traditional Kerala attire ramp walk and cultural dance",
      "Grand trophy presentation by college management"
    ],
    pageReferences: [14, 15, 16, 17]
  },
  {
    id: "sports-day-and-athletics",
    title: "Inter-Departmental Athletic Meet & Sports Day",
    category: "Sports",
    date: "24 February 2026",
    tagline: "Speed, Strength and Unbreakable Spirit",
    coverImage: "/images/magazine/page-18.jpg",
    galleryImages: [
      "/images/magazine/page-18.jpg",
      "/images/magazine/page-19.jpg",
      "/images/magazine/page-20.jpg",
    ],
    description: "Inaugurated with a colourful March Past featuring all departmental contingents in team uniforms, followed by track sprints, 4x100m relays, javelin throw, shot put, and high jump competitions. Team Athletico emerged as the undisputed Overall Champions.",
    highlights: [
      "1st Prize & Overall Champions: Team Athletico",
      "2nd Prize: Team Santos | 3rd Prize: Team Spartens | 4th: Team Estadio",
      "Official March Past and athletic torch relay",
      "Record-setting performances in sprint and javelin throw"
    ],
    pageReferences: [18, 19, 20]
  },
  {
    id: "astra-football-league",
    title: "ASTRA Football League",
    category: "Sports",
    date: "2025–2026",
    tagline: "Passionate Football on the Campus Turf",
    coverImage: "/images/magazine/page-24.jpg",
    galleryImages: [
      "/images/magazine/page-24.jpg",
    ],
    description: "An electric football tournament featuring intense rivalries between class and department squads. After hard-fought matches under the campus floodlights, Chelsea FC clinched the prestigious championship trophy against Manchester United.",
    highlights: [
      "Champions: Chelsea FC",
      "Runners-Up: Manchester United",
      "Golden Boot & Best Goalkeeper awards",
      "Massive student cheering squads across the ground"
    ],
    pageReferences: [24]
  },
  {
    id: "christmas-bike-rally-and-celebrations",
    title: "Christmas Bike Rally & Celebrations",
    category: "Cultural",
    date: "December 2025",
    tagline: "Spreading Festive Cheer on Wheels",
    coverImage: "/images/magazine/page-26.jpg",
    galleryImages: [
      "/images/magazine/page-26.jpg",
      "/images/magazine/page-61.jpg",
    ],
    description: "Students decorated their motorcycles with festive Christmas lights, Santa costumes, and banners, riding across Moolamattom to spread the message of peace, joy, and safe riding. Back on campus, an elaborate, hand-crafted Nativity Crib and twin Santas delighted the student body.",
    highlights: [
      "Illuminated Christmas bike rally across Moolamattom town",
      "Award-winning campus Christmas crib with water streams and model villages",
      "Joyous Santa Claus greetings and carol performances"
    ],
    pageReferences: [26, 61]
  },
  {
    id: "valentines-letter-box",
    title: "Valentine's Letter Box — 'Express Your Feelings'",
    category: "Union Event",
    date: "11 February 2026",
    tagline: "Heartfelt Words, Secret Admirers & Warm Smiles",
    coverImage: "/images/magazine/page-27.jpg",
    galleryImages: [
      "/images/magazine/page-27.jpg",
      "/images/magazine/page-62.jpg",
    ],
    description: "A cherished and discreet campus initiative where students placed handwritten notes and poetic tributes into a specially decorated Valentine's Box. Union coordinators sorted and securely delivered every note with strict privacy and warmth.",
    highlights: [
      "Over hundreds of handwritten letters and artistic cards collected",
      "Dedicated secret letterbox placed at the college lounge",
      "Joyful unboxing ceremony and confidential distribution"
    ],
    pageReferences: [27, 62]
  },
  {
    id: "msw-arts-day",
    title: "MSW Arts & Cultural Stage",
    category: "Cultural",
    date: "2025–2026",
    tagline: "Celebrating Theatrical Expressions & Social Consciousness",
    coverImage: "/images/magazine/page-28.jpg",
    galleryImages: [
      "/images/magazine/page-28.jpg",
      "/images/magazine/page-29.jpg",
      "/images/magazine/page-63.jpg",
    ],
    description: "The Department of Social Work brought powerful theatrical storytelling, mythological costume tableaus, tribal dance fusions, and classical dance tributes to the college auditorium stage.",
    highlights: [
      "Mythological & theatrical costume stage play",
      "Traditional Kerala dance with classical hand fans & ornate headgear",
      "Social-awareness musical mime and group drama"
    ],
    pageReferences: [28, 29, 63]
  },
  {
    id: "college-day-and-holi",
    title: "College Day & Holi Celebrations",
    category: "Major Fest",
    date: "27 February 2026",
    tagline: "A Symphony of Colours, Laughter and Everlasting Memories",
    coverImage: "/images/magazine/page-30.jpg",
    galleryImages: [
      "/images/magazine/page-30.jpg",
      "/images/magazine/page-31.jpg",
      "/images/magazine/page-32.jpg",
      "/images/magazine/page-33.jpg",
      "/images/magazine/page-64.jpg",
      "/images/magazine/page-65.jpg",
    ],
    description: "The grand annual culmination of campus life. College Day showcased showstopping departmental dance and fashion routines on the main auditorium stage, followed by an explosion of gulal powder, music, and water celebrations at the college portico steps.",
    highlights: [
      "All-department grand cultural stage battle",
      "Annual excellence trophy distributions to student leaders and achievers",
      "Holi powder splash & dance party at the campus portico",
      "Unforgettable batch farewell moments"
    ],
    pageReferences: [30, 31, 32, 33, 64, 65]
  },
  {
    id: "food-fest-theetarappayi",
    title: "Food Fest — 'Who is the Theetarappayi?'",
    category: "Union Event",
    date: "19 November 2025",
    tagline: "The Ultimate Dosa Eating Championship",
    coverImage: "/images/magazine/page-11.jpg",
    galleryImages: [
      "/images/magazine/page-11.jpg",
    ],
    description: "A wild and hilarious eating championship celebrating Kerala's beloved Dosa. Students cheered relentlessly as contestants raced against the clock to devour the maximum number of hot dosas.",
    highlights: [
      "High-speed dosa eating contest with record timing",
      "Crowd cheering and interactive audience voting",
      "Crowning of the campus 'Theetarappayi' champion"
    ],
    pageReferences: [11]
  }
];
