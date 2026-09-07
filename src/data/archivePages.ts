export interface ArchivePage {
  pageNumber: number;
  image: string;
  title: string;
  category: "Cover & Prelims" | "Messages & Leadership" | "Union Report" | "Literary & Art" | "Fests & Events" | "Campus Life & Gallery";
}

export const archivePages: ArchivePage[] = Array.from({ length: 76 }, (_, i) => {
  const pageNum = i + 1;
  const pad = String(pageNum).padStart(2, '0');
  const image = `/images/magazine/page-${pad}.jpg`;

  let title = `Page ${pageNum}`;
  let category: ArchivePage["category"] = "Campus Life & Gallery";

  if (pageNum === 1) {
    title = "Cover & Editorial Board";
    category = "Cover & Prelims";
  } else if (pageNum === 2 || pageNum === 3) {
    title = "Campus Heritage & St. Joseph's Academy";
    category = "Cover & Prelims";
  } else if (pageNum === 4) {
    title = "Manager & Bursar";
    category = "Messages & Leadership";
  } else if (pageNum === 5) {
    title = "Principal's Message";
    category = "Messages & Leadership";
  } else if (pageNum === 6) {
    title = "Students' Union Advisor's Message";
    category = "Messages & Leadership";
  } else if (pageNum === 7) {
    title = "Former Students' Union Advisor's Message";
    category = "Messages & Leadership";
  } else if (pageNum === 8) {
    title = "Editor's Note — 'Our Writings, Our Identity'";
    category = "Messages & Leadership";
  } else if (pageNum === 9) {
    title = "Editorial Team";
    category = "Messages & Leadership";
  } else if (pageNum === 10) {
    title = "Astra Union Members 2025–26";
    category = "Messages & Leadership";
  } else if (pageNum >= 11 && pageNum <= 14) {
    title = `Union Report (Part ${pageNum - 10})`;
    category = "Union Report";
  } else if (pageNum >= 15 && pageNum <= 17) {
    title = "Astra Union Inauguration";
    category = "Fests & Events";
  } else if (pageNum === 18 || pageNum === 19) {
    title = "18(K) Battalion NCC Senior Panel";
    category = "Messages & Leadership";
  } else if (pageNum >= 20 && pageNum <= 22) {
    title = "MG University Kalolsavam Winners";
    category = "Fests & Events";
  } else if (pageNum === 23) {
    title = "Our Journey — 'This Was Our Story'";
    category = "Literary & Art";
  } else if (pageNum >= 24 && pageNum <= 31) {
    title = `Student Literary & Arts (p. ${pageNum})`;
    category = "Literary & Art";
  } else if (pageNum === 32) {
    title = "Poem — 'Our Voices Became Our Yugam'";
    category = "Literary & Art";
  } else if (pageNum >= 33 && pageNum <= 39) {
    title = `Creative Section (p. ${pageNum})`;
    category = "Literary & Art";
  } else if (pageNum === 40) {
    title = "Poem — 'Our Generation'";
    category = "Literary & Art";
  } else if (pageNum === 41) {
    title = "Editorial Colophon & Landscape";
    category = "Literary & Art";
  } else if (pageNum >= 42 && pageNum <= 45) {
    title = `Achievers & Features (p. ${pageNum})`;
    category = "Literary & Art";
  } else if (pageNum >= 46 && pageNum <= 54) {
    title = `Campus Life & Moments (p. ${pageNum})`;
    category = "Campus Life & Gallery";
  } else if (pageNum >= 55 && pageNum <= 58) {
    title = "COMQUEST — Commerce Fest";
    category = "Fests & Events";
  } else if (pageNum >= 59 && pageNum <= 60) {
    title = "ALGORHYTHM — Computer Fest";
    category = "Fests & Events";
  } else if (pageNum >= 61 && pageNum <= 67) {
    title = `Events & Celebrations (p. ${pageNum})`;
    category = "Fests & Events";
  } else if (pageNum >= 68 && pageNum <= 70) {
    title = "TRIONZA 2K26 National Level Education Fest";
    category = "Fests & Events";
  } else {
    title = `Campus Memoir & Reflections (p. ${pageNum})`;
    category = "Campus Life & Gallery";
  }

  return {
    pageNumber: pageNum,
    image,
    title,
    category,
  };
});
