export interface EditorialMember {
  name: string;
  role: string;
  department?: string;
  category: "patron" | "advisor" | "editor" | "student_editor" | "union" | "ncc";
  image?: string;
  pageRef?: number;
  bio?: string;
}

export const patrons: EditorialMember[] = [
  {
    name: "Rev. Fr. Dr. Thomas Puthussery CMI",
    role: "Manager",
    category: "patron",
    image: "/images/magazine/page-04.jpg",
    pageRef: 4,
    bio: "Guiding the institution with visionary leadership, educational excellence, and moral enlightenment."
  },
  {
    name: "Rev. Fr. Bobin Jose Kumarettu CMI",
    role: "Bursar",
    category: "patron",
    image: "/images/magazine/page-04.jpg",
    pageRef: 4,
    bio: "Overseeing institutional administration, infrastructure development, and campus governance."
  },
  {
    name: "Dr. Joseph George",
    role: "Principal",
    category: "patron",
    image: "/images/magazine/page-05.jpg",
    pageRef: 5,
    bio: "Head of the institution, fostering academic rigor, research innovation, and vibrant student community life."
  }
];

export const advisors: EditorialMember[] = [
  {
    name: "Ms. Sunitha Mathew",
    role: "Students' Union Advisor",
    department: "Department of English",
    category: "advisor",
    image: "/images/magazine/page-06.jpg",
    pageRef: 6,
    bio: "Spearheading student leadership activities, event coordination, and union initiatives across the academic year."
  },
  {
    name: "Rev. Fr. Dr. Jomon Kottarathil",
    role: "Former Students' Union Advisor",
    department: "Department of Mathematics",
    category: "advisor",
    image: "/images/magazine/page-07.jpg",
    pageRef: 7,
    bio: "Laying the foundation for annual union programs, cultural leadership, and academic mentoring."
  }
];

export const editorialTeam: EditorialMember[] = [
  {
    name: "Muhammed Yaz R",
    role: "Student Magazine Editor",
    department: "Department of Physics",
    category: "editor",
    image: "/images/magazine/page-08.jpg",
    pageRef: 8,
    bio: "Chief student architect of 'Yugam' 2025–26, curating literary selections, layout direction, and graphic storytelling."
  },
  {
    name: "Ms. Christy Joseph",
    role: "Staff Editor",
    department: "Department of English",
    category: "editor",
    image: "/images/magazine/page-09.jpg",
    pageRef: 9,
    bio: "Guiding editorial language, English literature submissions, and academic prose standards."
  },
  {
    name: "Mr. Roby Mathew",
    role: "Staff Editor",
    department: "Department of Commerce",
    category: "editor",
    pageRef: 1,
    bio: "Editorial advisory member ensuring journalistic precision, reportage, and institutional archival integrity."
  },
  {
    name: "Mr. Jose James",
    role: "Staff Editor",
    department: "Department of Chemistry",
    category: "editor",
    pageRef: 1,
    bio: "Editorial advisory member supporting science, creative arts, and editorial publication review."
  },
  {
    name: "Ivan Sebastian",
    role: "Sub Editor",
    department: "Department of Management Studies",
    category: "student_editor",
    image: "/images/magazine/page-09.jpg",
    pageRef: 9,
    bio: "Student editorial desk coordinator for business articles, event reports, and feature curation."
  },
  {
    name: "Sruthy S Kumar",
    role: "Sub Editor",
    department: "Department of Management Studies",
    category: "student_editor",
    image: "/images/magazine/page-09.jpg",
    pageRef: 9,
    bio: "Student editorial desk coordinator for student poetry, creative fiction, and campus features."
  },
  {
    name: "Rahul Rajan",
    role: "Sub Editor",
    department: "Department of Business Administration",
    category: "student_editor",
    image: "/images/magazine/page-09.jpg",
    pageRef: 9,
    bio: "Student editorial desk coordinator for student art reviews, campus photography, and typography."
  }
];

export const unionCouncil: EditorialMember[] = [
  { name: "Sanet Shaji", role: "Chairman", category: "union", pageRef: 10 },
  { name: "Emeema Samuel", role: "Vice Chairperson", category: "union", pageRef: 10 },
  { name: "Sanjai Solji", role: "General Secretary", category: "union", pageRef: 10 },
  { name: "Aflah P", role: "University Union Councillor (UUC)", category: "union", pageRef: 10 },
  { name: "Chinnu Baburaj", role: "Arts Club Secretary", category: "union", pageRef: 10 },
  { name: "Muhammed Yaz R", role: "Magazine Editor", category: "union", pageRef: 10 },
  { name: "Meghna KJ", role: "Lady Representative 1", category: "union", pageRef: 10 },
  { name: "Aiswarya Sunil", role: "Lady Representative 2", category: "union", pageRef: 10 },
  { name: "Soju Sojan", role: "1st UG Representative", category: "union", pageRef: 10 },
  { name: "Rince Regi", role: "2nd UG Representative", category: "union", pageRef: 10 },
  { name: "Sreedevi Sugathan", role: "3rd UG Representative", category: "union", pageRef: 10 },
  { name: "Anjana S Thampi", role: "1st PG Representative", category: "union", pageRef: 10 },
  { name: "Midhun P Varghese", role: "2nd PG Representative", category: "union", pageRef: 10 },
  { name: "Asif PK", role: "Sports Secretary", category: "union", pageRef: 10 },
];

export const nccPanel: EditorialMember[] = [
  { name: "SUO Amal Kumaran", role: "Senior Under Officer (SUO)", category: "ncc", pageRef: 18 },
  { name: "UO Adithyan S. Thoppil", role: "Under Officer (UO)", category: "ncc", pageRef: 18 },
  { name: "UO Mariya Mol K M", role: "Under Officer (UO)", category: "ncc", pageRef: 18 },
  { name: "CSM Alan Thankachan", role: "Company Sergeant Major (CSM)", category: "ncc", pageRef: 18 },
  { name: "CQMS Joeyal Kurian", role: "Company Quartermaster Sergeant (CQMS)", category: "ncc", pageRef: 18 },
  { name: "SGT Joseph Varghese", role: "Sergeant (SGT)", category: "ncc", pageRef: 19 },
  { name: "SGT Sai Kiran", role: "Sergeant (SGT)", category: "ncc", pageRef: 19 },
  { name: "SGT Sai Krishna A S", role: "Sergeant (SGT)", category: "ncc", pageRef: 19 },
  { name: "SGT Deva Bijoy", role: "Sergeant (SGT)", category: "ncc", pageRef: 19 },
];
