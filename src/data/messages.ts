export interface MessageItem {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  role: string;
  department?: string;
  image: string;
  pageRef: number;
  quote?: string;
  content: string[];
  signoff?: string;
}

export const messages: MessageItem[] = [
  {
    id: "principals-message",
    title: "Principal's Message",
    subtitle: "A lasting reflection of talents and achievements",
    author: "Dr. Joseph George",
    role: "Principal",
    department: "St. Joseph's College (Autonomous), Moolamattom",
    image: "/images/magazine/page-05.jpg",
    pageRef: 5,
    quote: "Education is not confined to the four walls of a classroom. It must be reflected in the intellectual growth, creativity, talents, and social commitment of students.",
    content: [
      "Dear beloved members of the St. Joseph's College community,",
      "It gives me immense pleasure to extend my warmest wishes to all the readers on the occasion of the release of the College Union Magazine. This publication is not merely a collection of words and letters; it is an expression of the creative talents and intellectual abilities of the student community. The vibrant college magazine, reflecting the laughter, thoughts, and dreams of college life, is now reaching your hands.",
      "Education is not confined to the four walls of a classroom. It must be reflected in the intellectual growth, creativity, talents, and social commitment of students. Established in 1981, St. Joseph's College Moolamattom strives to foster the creativity, growth, and capabilities of its students. Through their writing, artistic activities, and literary talents, students continue to showcase their abilities. May their thoughts grow in ways that benefit society and the nation. As your creations find a place in the pages of this magazine, may it become a lasting reflection of your talents and achievements.",
      "I extend my heartfelt wishes for success in all their creative endeavors and efforts. May this magazine become a new platform for your dreams and thoughts.",
      "Heartfelt wishes to everyone."
    ],
    signoff: "Dr. Joseph George, Principal"
  },
  {
    id: "union-advisors-message",
    title: "Students' Union Advisor's Message",
    subtitle: "A testament to collective effort and student leadership",
    author: "Ms. Sunitha Mathew",
    role: "Students' Union Advisor",
    department: "Department of English",
    image: "/images/magazine/page-06.jpg",
    pageRef: 6,
    quote: "Great things are done by a series of small things brought together. — Vincent van Gogh",
    content: [
      "\"Great things are done by a series of small things brought together.\" — Vincent van Gogh",
      "It is with immense pleasure that I extend my greetings on the release of our college magazine 'Yugam'. A magazine is far more than a collection of articles and images; it is a vibrant reflection of the thoughts, creativity, aspirations, and achievements of our student community. It stands as a lasting record of the spirit of campus life and the voices that shape it.",
      "I had the privilege of taking over the responsibility of Student Union Advisor during the final quarter of the academic year, succeeding Rev. Dr. Fr. Jomon Kottarathil, whose guidance and commitment laid a strong foundation for the Union's activities. Stepping into this role, though for a brief period, has been a deeply enriching and insightful experience. It has been a pleasure to work alongside our student leaders, witnessing their enthusiasm and dedication.",
      "I must explicitly commend the Student Union for their incredible work this year. They have been the driving force behind a fantastic lineup of programs, managing everything with great energy and efficiency. Beyond organizing successful events, the Union has been a strong pillar of support for both academic and extracurricular life on campus. I offer my heartiest congratulations to the entire team for their dedication, teamwork, and hard work in making this year truly memorable.",
      "This magazine is a testament to that collective effort. It beautifully reflects the continuity of commitment and teamwork that define our institution. I extend my heartfelt congratulations to the Principal, the Magazine editor Mohammed Yaz R, the editorial board, the Student Union, and everyone who has contributed to making this publication a reality. May these pages inspire every reader to think deeply, dream boldly, and continue contributing to the vibrant intellectual and creative life of our college."
    ],
    signoff: "Ms. Sunitha Mathew, Department of English, Students' Union Advisor"
  },
  {
    id: "former-advisors-message",
    title: "Former Students' Union Advisor's Message",
    subtitle: "Art and literature as the gateway to a brighter future",
    author: "Rev. Fr. Dr. Jomon Kottarathil",
    role: "Former Students' Union Advisor",
    department: "Department of Mathematics",
    image: "/images/magazine/page-07.jpg",
    pageRef: 7,
    quote: "When we hear the name Kerala, our blood should surge through our veins. — Mahakavi Ulloor S. Parameswara Iyer",
    content: [
      "Every publication of art and literature is a true reflection of its time. Through a careful examination of artistic and literary creations, one can analyze the ways of thinking, attitudes, scientific and technological advancements, intellectual brilliance, and social lifestyles of each era. The youth are not only the promises of the future but also the architects who shape the future of every society. Their perspectives today will determine whether society rises to greater heights or declines tomorrow.",
      "In this context, each of their artistic and literary endeavours becomes a gateway to a brighter future and a guiding signpost towards the creation of tomorrow's society. Through the magazine 'YUGAM', beautifully crafted under the leadership of our college students union, may the vibrant colours that unfold through stories, poems, drawings, articles, efforts towards social development, personality development, and excellence in academic and extracurricular activities ignite the sparks of patriotism within all of us.",
      "Let us also proudly echo the immortal words associated with the great poet Mahakavi Ulloor S. Parameswara Iyer:",
      "\"When we hear the name Kerala, our blood should surge through our veins.\""
    ],
    signoff: "Rev. Fr. Dr. Jomon Kottarathil, Department of Mathematics, Former Students' Union Advisor"
  },
  {
    id: "editors-note",
    title: "Editor's Note: Our Writings, Our Identity",
    subtitle: "A transformative phase where we discover ourselves and give wings to our dreams",
    author: "Muhammed Yaz R",
    role: "Student Magazine Editor",
    department: "Department of Physics",
    image: "/images/magazine/page-08.jpg",
    pageRef: 8,
    quote: "College life is not merely about studies and examinations; it is a transformative phase where we discover ourselves and give wings to our dreams.",
    content: [
      "Dear Friends,",
      "It gives me immense happiness and pride to present this new edition of the St. Joseph's College Magazine to you.",
      "College life is not merely about studies and examinations; it is a transformative phase where we discover ourselves and give wings to our dreams. The laughter, conversations, ideas, and dreams we have shared in classrooms and across the campus are reflected on every page of this magazine.",
      "I sincerely thank everyone who contributed their thoughts, talents, and creativity and helped bring this magazine to life. May your time on this campus give you the courage and confidence to express your ideas and abilities fearlessly before the world.",
      "Read, reflect, and carve your own path!"
    ],
    signoff: "Muhammed Yaz R, Department of Physics, Magazine Editor"
  }
];
