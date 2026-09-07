export interface MagazineMeta {
  title: string;
  tagline: string;
  malayalamTitle: string;
  logoUrl?: string;
  edition: string;
  collegeName: string;
  collegeType: string;
  accreditation: string;
  affiliation: string;
  location: string;
  established: number;
  copyrightNotice: string;
  circulationNote: string;
  leadership: {
    manager: string;
    bursar: string;
    principal: string;
    advisor: string;
    formerAdvisor: string;
    studentEditor: string;
  };
}

export const magazineInfo: MagazineMeta = {
  title: "Yugam",
  malayalamTitle: "യുഗം",
  logoUrl: "/images/yugam-logo.png",
  tagline: "A Voice of Generation",
  edition: "2025–2026",
  collegeName: "St. Joseph's College (Autonomous)",
  collegeType: "Autonomous College",
  accreditation: "Re-Accredited with A+ Grade by NAAC with CGPA 3.50",
  affiliation: "Affiliated to Mahatma Gandhi University | AICTE Approved",
  location: "Arakulam P.O., Moolamattom, Idukki - 685591, Kerala",
  established: 1981,
  copyrightNotice: "Copyright © 2026 by Principal, St. Joseph's College (Autonomous) Moolamattom. All Rights Reserved. No part of this publication may be reproduced, distributed, or transmitted without permission.",
  circulationNote: "For Private Circulation Only",
  leadership: {
    manager: "Rev. Fr. Dr. Thomas Puthussery CMI",
    bursar: "Rev. Fr. Bobin Jose Kumarettu CMI",
    principal: "Dr. Joseph George",
    advisor: "Ms. Sunitha Mathew",
    formerAdvisor: "Rev. Fr. Dr. Jomon Kottarathil",
    studentEditor: "Muhammed Yaz R",
  },
};
