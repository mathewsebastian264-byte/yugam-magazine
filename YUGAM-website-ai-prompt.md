# PROMPT — Paste everything below into your AI coding tool (bolt.new, Lovable, v0, Claude Code, Cursor, etc.)

Also upload the accompanying `yugam-page-images.zip` (76 rasterized magazine pages) alongside this prompt — reference them as `page-01.jpg` … `page-76.jpg`.

---

## 1. Project Brief

Build a complete, responsive website for **"Yugam" — the St. Joseph's College (Autonomous), Moolamattom Union Magazine 2025-26**, tagline **"A Voice of Generation."** This is a digital adaptation of a 76-page print/PDF magazine. Turn it into a real multi-page website — not a PDF viewer embed — using the actual text and photos below.

The tone: warm, proud, literary, youthful, a little cinematic. This is a college community's yearbook-meets-literary-magazine. Design should feel premium and editorial (like a real magazine site), not like a generic corporate template.

## 2. Design Direction

Derived from the source magazine's actual visual identity — follow this closely:

- **Cover / hero style:** soft grey textured paper background, elegant black serif wordmark ("Yugam" rendered in a flowing Malayalam-calligraphy-inspired logotype), thin gold/black divider rules with small diamond ornaments (❖) between sections.
- **Editorial/message pages** (Principal, Manager, Advisor, Editor notes): clean two-column layout, formal serif headings (Times/Playfair-style), portrait photo + role label on one side, message text on the other.
- **Poem / literary pages ("Our Generation," "This Was Our Yugam," "Our Voices Became Our Yugam"):** full-bleed sepia/grayscale illustrated backgrounds (vintage botanical line art, compass rose, college building silhouette), centered all-caps poem text, generous line spacing, dramatic and quiet.
- **Event pages:** vibrant photo-collage grids (2×3 or asymmetric grid of candid event photography), bold condensed display headers (e.g., "UNION INAUGURATION," "COMQUEST," "ALGORHYTHM," "CHRISTMAS Celebrations") in a mix of a bold sans display face and a script accent face.
- **Color palette:** primarily black/off-white/grey (paper, ink, sepia) for editorial and poem pages, bursting into full-color photography on event pages. Use a warm gold (#B8965A-ish) as the one accent color throughout for rules, ornaments, and link states.
- **Typography:** a formal serif (Playfair Display, Cormorant, or Times-style) for headings/pull quotes, a clean sans (Inter, Montserrat) for body/UI, and one script/display accent face used sparingly for the "Yugam" wordmark and section flourishes.

Use the images in the asset pack as the actual reference for exact layouts, color, and cropping — page-01 is the cover, page-40 and page-23/page-32 are example poem-page treatments, page-16 is an event photo grid.

## 3. Tech Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Content as structured data (JSON/MDX per section) — not hardcoded in components — so next year's student editors can update it without touching code
- next/image for optimized image loading, lazy-loaded galleries
- Deployable to Vercel

## 4. Site Map

1. **Home** — hero (cover art + tagline), issue highlights, quick links into each section
2. **Editorial Board** — Principal, Manager, Bursar, Advisors, Magazine Editor, Sub-Editors, Union Members (grid of names/roles/photos)
3. **Messages** — Principal's Message, Advisor's Message, Former Advisor's Message, Editor's Note (each its own page or expandable section — full text below)
4. **Union Report 2025–26** — the full year-in-review report (full text below)
5. **Events** — one page or one card-with-gallery per event: Union Inauguration, Food Fest ("Who is the Theetarappayi"), Christmas Bike Rally, Fine Arts Competitions, Arts Day, Valentine's Letter Box, ASTRA Football League, Inter-Departmental Athletic Meet, College Day & Holi, TRIONZA 2K26, COMQUEST, ALGORHYTHM, MSW Arts
6. **Literary Corner** — the three poems (full text below), styled as the full-bleed illustrated pages
7. **Achievers** — Best Outgoing Students (UG & PG)
8. **Gallery** — remaining photo-only pages as a masonry/lightbox gallery
9. **About / Contact** — About St. Joseph's College, magazine credits, copyright footer

## 5. Full Text Content

Use this content verbatim (lightly reformat for web, don't invent new copy). Malayalam honorifics/spellings should be preserved exactly as given.

### Cover / Credits
- Magazine name: **Yugam** — "A Voice of Generation"
- Astra College Union Magazine 2025-26
- Principal: Dr. Joseph George
- Student Magazine Editor: Muhammed Yaz . R
- Staff Editors: Ms. Christy Joseph, Mr. Roby Mathew, Mr. Jose James
- Student Editors: Ivan Sebastian, Sruthy S Kumar, Rahul Rajan
- For Private Circulation Only. Copyright © 2026 by Principal, St. Joseph's College (Autonomous) Moolamattom. All Rights Reserved. No part of this publication may be reproduced, distributed, or transmitted without permission.
- Manager: Rev. Fr. Dr. Thomas Puthussery CMI
- Bursar: Rev. Fr. Bobin Jose Kumarettu CMI

### Principal's Message
> Dear beloved members of the St. Joseph's College community,
>
> It gives me immense pleasure to extend my warmest wishes to all the readers on the occasion of the release of the College Union Magazine. This publication is not merely a collection of words and letters; it is an expression of the creative talents and intellectual abilities of the student community. The vibrant college magazine, reflecting the laughter, thoughts, and dreams of college life, is now reaching your hands.
>
> Education is not confined to the four walls of a classroom. It must be reflected in the intellectual growth, creativity, talents, and social commitment of students. Established in 1981, St. Joseph's College Moolamattom strives to foster the creativity, growth, and capabilities of its students. Through their writing, artistic activities, and literary talents, students continue to showcase their abilities. May their thoughts grow in ways that benefit society and the nation. As your creations find a place in the pages of this magazine, may it become a lasting reflection of your talents and achievements.
>
> I extend my heartfelt wishes for success in all their creative endeavors and efforts. May this magazine become a new platform for your dreams and thoughts.
>
> Heartfelt wishes to everyone.
>
> — **Dr. Joseph George**, Principal

### Students' Union Advisor's Message
> "Great things are done by a series of small things brought together." — Vincent van Gogh
>
> It is with immense pleasure that I extend my greetings on the release of our college magazine 'Yugam'. A magazine is far more than a collection of articles and images; it is a vibrant reflection of the thoughts, creativity, aspirations, and achievements of our student community. It stands as a lasting record of the spirit of campus life and the voices that shape it.
>
> I had the privilege of taking over the responsibility of Student Union Advisor during the final quarter of the academic year, succeeding Rev. Dr. Fr. Jomon Kottarathil, whose guidance and commitment laid a strong foundation for the Union's activities. Stepping into this role, though for a brief period, has been a deeply enriching and insightful experience. It has been a pleasure to work alongside our student leaders, witnessing their enthusiasm and dedication.
>
> I must explicitly commend the Student Union for their incredible work this year. They have been the driving force behind a fantastic lineup of programs, managing everything with great energy and efficiency. Beyond organizing successful events, the Union has been a strong pillar of support for both academic and extracurricular life on campus. I offer my heartiest congratulations to the entire team for their dedication, teamwork, and hard work in making this year truly memorable.
>
> This magazine is a testament to that collective effort. It beautifully reflects the continuity of commitment and teamwork that define our institution. I extend my heartfelt congratulations to the Principal, the Magazine editor Mohammed Yaz R, the editorial board, the Student Union, and everyone who has contributed to making this publication a reality. May these pages inspire every reader to think deeply, dream boldly, and continue contributing to the vibrant intellectual and creative life of our college.
>
> — **Ms. Sunitha Mathew**, Department of English, Students' Union Advisor

### Former Students' Union Advisor's Message
> Every publication of art and literature is a true reflection of its time. Through a careful examination of artistic and literary creations, one can analyze the ways of thinking, attitudes, scientific and technological advancements, intellectual brilliance, and social lifestyles of each era. The youth are not only the promises of the future but also the architects who shape the future of every society. Their perspectives today will determine whether society rises to greater heights or declines tomorrow.
>
> In this context, each of their artistic and literary endeavours becomes a gateway to a brighter future and a guiding signpost towards the creation of tomorrow's society. Through the magazine 'YUGAM', beautifully crafted under the leadership of our college students union, may the vibrant colours that unfold through stories, poems, drawings, articles, efforts towards social development, personality development, and excellence in academic and extracurricular activities ignite the sparks of patriotism within all of us.
>
> Let us also proudly echo the immortal words associated with the great poet Mahakavi Ulloor S. Parameswara Iyer: *"When we hear the name Kerala, our blood should surge through our veins."*
>
> — **Rev. Fr. Dr. Jomon Kottarathil**, Department of Mathematics, Former Students' Union Advisor

### Editor's Note — "Our Writings, Our Identity"
> Dear Friends,
>
> It gives me immense happiness and pride to present this new edition of the St. Joseph's College Magazine to you.
>
> College life is not merely about studies and examinations; it is a transformative phase where we discover ourselves and give wings to our dreams. The laughter, conversations, ideas, and dreams we have shared in classrooms and across the campus are reflected on every page of this magazine.
>
> I sincerely thank everyone who contributed their thoughts, talents, and creativity and helped bring this magazine to life. May your time on this campus give you the courage and confidence to express your ideas and abilities fearlessly before the world.
>
> Read, reflect, and carve your own path!
>
> — **Muhammed Yaz R**, Department of Physics, Magazine Editor

### Editorial Team
- Student Magazine Editor: Muhammed Yaz R (Dept. of Physics)
- Staff Editor: Ms. Christy Joseph (Dept. of English)
- Sub Editors: Ivan Sebastian (Dept. of Management Studies), Sruthy S Kumar (Dept. of Management Studies), Rahul Rajan (Dept. of Business Administration)

### Astra Union Members 2025–26
- Chairman: Sanet Shaji
- Vice Chairperson: Emeema Samuel
- General Secretary: Sanjai Solji
- UUC: Aflah P
- Arts Club Secretary: Chinnu Baburaj
- Magazine Editor: Muhammed Yaz R
- Lady Representative 1: Meghna KJ
- Lady Representative 2: Aiswarya Sunil
- 1st UG Representative: Soju Sojan
- 2nd UG Representative: Rince Regi
- 3rd UG Representative: Sreedevi Sugathan
- 1st PG Representative: Anjana S Thampi
- 2nd PG Representative: Midhun P Varghese
- Sports Secretary: Asif PK

### Union Report 2025–26 (St. Joseph's College Autonomous, Moolamattom)
> The academic year 2025–2026 was marked by a variety of vibrant programmes organized under the leadership of the college union. These activities aimed at encouraging student participation, promoting creativity, nurturing leadership, and strengthening unity among students. The events included cultural celebrations, sports activities, academic fests, and talent competitions that brought life and enthusiasm to the campus.

**Astra Union Inauguration — 2 December 2025**
The official inauguration of the college union marked the beginning of an exciting year of activities. The programme was conducted at 11:00 AM in the college auditorium in the presence of faculty members, students, and union representatives. The ceremony began with a formal welcome followed by speeches highlighting the importance of student leadership and participation in campus life. The elected members of the union were introduced and shared their vision for the academic year. The event also included cultural performances by students, setting an energetic tone for the upcoming programmes. The programme was inaugurated by the famous cinema actress Darshana S Nair.

**Who is the Theetarappayi? — Food Fest — 19 November 2025**
The Astra College Union 2025–26 successfully organized an exciting and entertaining programme titled "Who is the Theetarappayi" as part of the Union's initiative to promote student engagement and campus vibrancy. The programme was a food eating competition centered on dosa, one of the most popular South Indian dishes — the participant who ate the highest number of dosas within the given time was declared the winner.

**Christmas Bike Rally — December 2025**
To celebrate the spirit of Christmas and promote unity among students, the union organized a colourful Christmas Bike Rally. Students decorated their bikes with Christmas themes, lights, and festive accessories, creating a joyful atmosphere. The rally passed through nearby areas spreading festive cheer and promoting responsible riding among youth.

**Fine Arts Competitions — 23 January, 30 January & 2 February 2026**
Conducted across three days to ensure maximum participation, students showcased their talents in music, dance, drawing, and other creative performances, helping identify talents who would represent the college in intercollegiate events.

**Arts Day — 3 February 2026**
One of the most colourful events of the year, featuring dance, music, drama, and stage presentations from different departments, showcasing traditional and modern art forms and the rich cultural diversity of the campus.

**Valentine's Letter Box — 11 February 2026**
A creative programme themed "Express Your Feelings," where students wrote anonymous or named letters to their college crush. The letter box was officially unboxed and letters were sorted and distributed with care and privacy.

**ASTRA Football League — 2025**
Organized to encourage sportsmanship, teamwork, and healthy competition, with teams representing different classes and departments competing over several days.

**Inter-Departmental Athletic Meet — 24 February 2026**
Formally inaugurated with a March Past by departmental teams, followed by track races, relays, and field events. Final results: 1st — Team Athletico (overall champions), 2nd — Team Santos, 3rd — Team Spartens, 4th — Team Estadio.

**College Day & Holi Celebrations — 27 February 2026**
College Day featured cultural performances from students across departments, followed by Holi celebrations at the college portico, bringing color and joyful togetherness to close the day.

**TRIONZA 2K26 — National Level Education Fest — 16 & 17 January 2026**
> Trionza 2K26 was a National Level Education Fest organized by St. Joseph's College (Autonomous), Moolamattom, under the theme "Fusion of Academics, Arts & Culture." Held on 16th and 17th January 2026, the fest brought together students from different schools and colleges, providing a vibrant platform to explore knowledge, creativity, talent, sportsmanship, and cultural expression. The two-day fest featured academic and science exhibitions, inter-school competitions, cultural performances, sports activities, fun zones, gaming events, and innovative educational displays. Major attractions included ExploreX, featuring exhibitions and demonstrations related to ISRO, the Indian Army, Indian Navy, police and forensic science, robotics, VR, astronomy, anatomy, and wildlife. The fest also hosted competitions such as Battle of Rhythms, Groove Burst, Naadhalaya, e-games, quiz, drawing, PUBG, mobile photography, and ExploreX Hunt. Vidhu Prathap Music Band performed live on 17th January, making Trionza 2K26 a memorable celebration of education, arts, culture, entertainment, and youthful energy.

**Conclusion**
> The programmes organized by the college union during the academic year 2025–2026 greatly enriched campus life. Each event provided opportunities for students to develop their talents, build confidence, and strengthen relationships with peers. Through cultural, academic, and sports activities, the union successfully fostered a vibrant and engaging college atmosphere. These initiatives will remain cherished memories for students and faculty alike. Thank you.

Additional fest/event section titles present as full-page photo spreads (build a gallery page for each, using the page images as reference for photo selection): **COMQUEST — Commerce Fest**, **ALGORHYTHM — Computer Fest**, **CHRISTMAS Celebrations**, **VALENTINES DAY Celebrations**, **MSW Arts**, **COLLEGE DAY Celebrations**.

### Literary Corner — Poems

**"This Was Our Story"**
> WE NEVER KNEW WHERE THE ROAD WOULD LEAD.
> WE ONLY KNEW THERE WAS ANOTHER STEP TO TAKE.
> THROUGH UNFAMILIAR TURNS, UNFINISHED DREAMS, LAUGHTER AND LESSONS
> WE SLOWLY BECAME MORE THAN WHO WE WERE.
> THE DESTINATION WAS NEVER THE STORY.
> THE FOOTSTEPS WERE. THE PEOPLE WE MET WERE. THE MOMENTS WE MADE WERE.
> AND NOW, AS WE LOOK BACK, WE REALISE —
> WE WERE NEVER SIMPLY PASSING THROUGH THESE YEARS.
> THESE YEARS WERE PASSING THROUGH US.
> THIS WAS OUR ROAD. THIS WAS OUR STORY. THIS WAS OUR YUGAM.

**"Our Voices Became Our Yugam"**
> WE SPOKE NOT BECAUSE WE HAD ALL THE ANSWERS,
> BUT BECAUSE WE DARED TO ASK THE QUESTIONS.
> WE LAUGHED AT THE LITTLE THINGS, ARGUED OVER THE THINGS THAT MATTERED,
> DREAMED BEYOND WHAT WAS EXPECTED,
> AND SOMETIMES CHOSE SILENCE WHEN WORDS FELL SHORT.
> OUR VOICES WERE NEVER MEANT TO SOUND THE SAME. THEY WERE MEANT TO BE HEARD.
> AND SOMEWHERE BETWEEN THE NOISE, THE LAUGHTER, THE DEBATES AND THE DREAMS,
> WE STOPPED BEING INDIVIDUALS WITH VOICES —
> AND BECAME A GENERATION WITH SOMETHING TO SAY.
> OUR WORDS BECAME MEMORIES. OUR VOICES BECAME OUR YUGAM.

**"Our Generation"**
> WE WERE BORN INTO A WORLD THAT WAS CHANGING FASTER THAN WE COULD UNDERSTAND.
> WE GREW UP BETWEEN SCREENS AND STORIES, BETWEEN TRADITION AND TOMORROW,
> BETWEEN WANTING TO BELONG AND WANTING TO STAND APART.
> WE QUESTIONED WHAT WE INHERITED, REIMAGINED WHAT WE WERE GIVEN,
> AND DARED TO DREAM BEYOND WHAT WAS EXPECTED.
> WE MAY NOT HAVE CHANGED THE WORLD YET — BUT WE ARE THE ONES WHO WILL INHERIT IT.
> DIFFERENT MINDS. DIFFERENT DREAMS. DIFFERENT VOICES. ONE GENERATION.
> AND PERHAPS, YEARS FROM NOW, THEY WON'T REMEMBER WHAT WE STUDIED, WHAT WE WORE, OR HOW WE LOOKED.
> THEY WILL REMEMBER WHAT WE DARED TO BECOME.
> THIS IS OUR TIME. THIS IS OUR GENERATION. THIS IS OUR YUGAM.

### Best Outgoing Students of St. Joseph's College, Moolamattom (Autonomous)
- **UG:** Mahesh Shankar — Department of Business Administration (2023–2026 Batch)
- **PG:** Sethulakshmi M A — Department of Social Work (2024–2026 Batch)
- Also featured with individual portrait pages: **Vivek Saji** (Dept. of Chemistry), **Archana Jyothis** (Dept. of Commerce) — treat as an "Achievers" gallery; label each portrait with name + department exactly as given.

## 6. Image Asset Mapping

The zip contains `page-01.jpg` through `page-76.jpg`, rasterized directly from the source magazine at reasonable web resolution. Use them as follows:
- `page-01.jpg` → homepage hero / cover art
- `page-15/16.jpg`, `page-17–21.jpg` → Union Inauguration event gallery
- `page-22.jpg`, `page-32.jpg`, `page-40.jpg` → the three literary/poem full-bleed pages (crop out the illustrated background separately if possible and reuse as a section background texture)
- `page-44.jpg`, `page-45.jpg` → Achiever portrait pages (Vivek Saji, Archana Jyothis)
- `page-55–58.jpg` → COMQUEST (Commerce Fest) gallery
- `page-59.jpg` onward → ALGORHYTHM, Christmas, Valentine's, MSW Arts, College Day galleries (use the visible page title captions to group them)
- `page-68.jpg` and surrounding pages → TRIONZA 2K26 gallery
- All remaining pages with no distinct caption → general campus-life gallery/masonry page

Crop photography out of these composite collage pages into individual images where practical for a cleaner grid gallery; otherwise display the full collage page as one image with a caption/lightbox.

## 7. Functional Requirements

- Fully responsive (mobile-first — most visitors will be students on phones)
- Lightbox/gallery viewer for event photo grids (swipeable on mobile)
- Sticky nav with sections: Home / Editorial / Events / Literary Corner / Achievers / Gallery / About
- Fast image loading (lazy load, blurred placeholders)
- Smooth scroll + subtle fade/parallax on section transitions to match the magazine's editorial feel — but keep it tasteful, not gimmicky
- SEO metadata (title/description per page) and Open Graph tags using page-01.jpg as the share image
- Accessible: proper alt text on every photo, sufficient contrast on text-over-image sections
- Footer with the copyright/circulation notice, exactly as printed, and credits to the editorial team

## 8. Deliverable

A working Next.js project, structured as content-driven pages/components as described above, ready to run locally and deploy to Vercel. Start by scaffolding the project and building the Home, Messages, and one full Event gallery page first, then continue through the remaining sections.
