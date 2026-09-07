export interface LiteraryPiece {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  department: string;
  category: "centerpiece" | "poem" | "story" | "article" | "regional" | "comic";
  pageRef: number;
  bgImage?: string;
  language?: "English" | "Malayalam" | "Tamil";
  quote?: string;
  stanzas: string[];
}

export const literaryPieces: LiteraryPiece[] = [
  {
    id: "this-was-our-story",
    title: "THIS WAS OUR STORY",
    subtitle: "Our Journey — A Voice of Generation",
    author: "Editorial Collective",
    department: "Astra College Union",
    category: "centerpiece",
    pageRef: 23,
    bgImage: "/images/magazine/page-23.jpg",
    language: "English",
    quote: "We were never simply passing through these years. These years were passing through us.",
    stanzas: [
      "WE NEVER KNEW WHERE THE ROAD WOULD LEAD.",
      "WE ONLY KNEW THERE WAS ANOTHER STEP TO TAKE.",
      "THROUGH UNFAMILIAR TURNS, UNFINISHED DREAMS, LAUGHTER AND LESSONS",
      "WE SLOWLY BECAME MORE THAN WHO WE WERE.",
      "THE DESTINATION WAS NEVER THE STORY.",
      "THE FOOTSTEPS WERE. THE PEOPLE WE MET WERE. THE MOMENTS WE MADE WERE.",
      "AND NOW, AS WE LOOK BACK, WE REALISE —",
      "WE WERE NEVER SIMPLY PASSING THROUGH THESE YEARS.",
      "THESE YEARS WERE PASSING THROUGH US.",
      "THIS WAS OUR ROAD. THIS WAS OUR STORY. THIS WAS OUR YUGAM."
    ]
  },
  {
    id: "our-voices",
    title: "OUR VOICES BECAME OUR YUGAM",
    subtitle: "The Chorus of a Generation",
    author: "Editorial Collective",
    department: "Astra College Union",
    category: "centerpiece",
    pageRef: 32,
    bgImage: "/images/magazine/page-32.jpg",
    language: "English",
    quote: "Our voices were never meant to sound the same. They were meant to be heard.",
    stanzas: [
      "WE SPOKE NOT BECAUSE WE HAD ALL THE ANSWERS,",
      "BUT BECAUSE WE DARED TO ASK THE QUESTIONS.",
      "WE LAUGHED AT THE LITTLE THINGS, ARGUED OVER THE THINGS THAT MATTERED,",
      "DREAMED BEYOND WHAT WAS EXPECTED,",
      "AND SOMETIMES CHOSE SILENCE WHEN WORDS FELL SHORT.",
      "OUR VOICES WERE NEVER MEANT TO SOUND THE SAME. THEY WERE MEANT TO BE HEARD.",
      "AND SOMEWHERE BETWEEN THE NOISE, THE LAUGHTER, THE DEBATES AND THE DREAMS,",
      "WE STOPPED BEING INDIVIDUALS WITH VOICES —",
      "AND BECAME A GENERATION WITH SOMETHING TO SAY.",
      "OUR WORDS BECAME MEMORIES. OUR VOICES BECAME OUR YUGAM."
    ]
  },
  {
    id: "our-generation",
    title: "OUR GENERATION",
    subtitle: "Different Minds. Different Dreams. One Generation.",
    author: "Editorial Collective",
    department: "Astra College Union",
    category: "centerpiece",
    pageRef: 40,
    bgImage: "/images/magazine/page-40.jpg",
    language: "English",
    quote: "They won't remember what we studied, what we wore, or how we looked. They will remember what we dared to become.",
    stanzas: [
      "WE WERE BORN INTO A WORLD THAT WAS CHANGING FASTER THAN WE COULD UNDERSTAND.",
      "WE GREW UP BETWEEN SCREENS AND STORIES, BETWEEN TRADITION AND TOMORROW,",
      "BETWEEN WANTING TO BELONG AND WANTING TO STAND APART.",
      "WE QUESTIONED WHAT WE INHERITED, REIMAGINED WHAT WE WERE GIVEN,",
      "AND DARED TO DREAM BEYOND WHAT WAS EXPECTED.",
      "WE MAY NOT HAVE CHANGED THE WORLD YET — BUT WE ARE THE ONES WHO WILL INHERIT IT.",
      "DIFFERENT MINDS. DIFFERENT DREAMS. DIFFERENT VOICES. ONE GENERATION.",
      "AND PERHAPS, YEARS FROM NOW, THEY WON'T REMEMBER WHAT WE STUDIED, WHAT WE WORE, OR HOW WE LOOKED.",
      "THEY WILL REMEMBER WHAT WE DARED TO BECOME.",
      "THIS IS OUR TIME. THIS IS OUR GENERATION. THIS IS OUR YUGAM."
    ]
  },
  {
    id: "when-corridors-became-memories",
    title: "When Corridors Became Memories",
    subtitle: "A story of glances, unsaid words, and the hallway of time",
    author: "Pavithra Babu",
    department: "BA English",
    category: "story",
    pageRef: 24,
    quote: "Sometimes, all that remains of a chapter in our lives is a corridor, a few smiles, a handful of glances, and a person we never truly had—but never quite forgot.",
    stanzas: [
      "The corridor was never the same again for Saanvi. \"It's just a corridor,\" you might say. But it wasn't. For her, it was a place she had never expected to be gifted with such soulful memories. Those were not just glances. They were exchanges of words she could never bring herself to say.",
      "Saanvi started noticing Ishaan, a fellow third-year student, during the middle of the fifth semester. She had seen him before, but who would have thought that an acquaintance would become someone she would never forget?",
      "They met, shared glances accompanied by genuine smiles, and it went on like that for weeks.",
      "\"Eye contact isn't possible with just one pair of eyes,\" she thought. Why was this happening? Why did he look at her whenever possible, even when he was busy with his friends? He could have simply ignored her. Yet he never forgot to look at her and offer that pleasant smile every time they crossed paths. He would even look back if he had passed their usual, unnamed glance-exchanging spot in the corridor, making sure he caught her eye and smiled.",
      "Anyone meeting her for the first time would have thought she was angry with them. Her resting face had always been like that. \"Let them think so,\" she thought.",
      "Perhaps he, too, had thought she was angry at him because of his reply. His dislike, his avoidance, and even his ego had somehow found a place among her favourite memories. She was aware of her emotions. She understood the psychology behind them all. Yet she chose to hold on to them. All that remained were memories—and the countless imaginations she had woven within her heart.",
      "Some college memories are like that. Many of us can relate to moments like these. When we look back, we often realize that they are among the most precious memories we carry with us. Years later, they take us back to those days, bringing warmth to our minds and souls."
    ]
  },
  {
    id: "being-away-from-home",
    title: "Being Away from Home",
    subtitle: "Navigating independence, loneliness and growth",
    author: "Riyash Debbarma",
    department: "II BA English",
    category: "article",
    pageRef: 25,
    quote: "In the end, while home always remains close to the heart, I hope living away from it will truly be worthwhile by leading me to success.",
    stanzas: [
      "Being away from home is an experience that many people go through for studies, work, or other opportunities. Home is a place of comfort, love, and security, so leaving it is very difficult.",
      "I often feel lonely and homesick because I miss my family, especially my loving mom and her handmade food. Everyday activities like playing with my siblings and friends, and every evening talk at my grandparents' house, have now become special memories.",
      "However, living away from home also brings many benefits. It teaches people to be independent and responsible.",
      "Being in a new environment also provides opportunities to meet different people, learn about new cultures, and develop valuable life skills and lessons.",
      "Although being away from home can be challenging, it helps individuals grow emotionally and mentally. The experience builds maturity."
    ]
  },
  {
    id: "my-village",
    title: "My Village",
    subtitle: "A tribute to roots, honest soil, and peace",
    author: "Rasen Debbarma",
    department: "II BA English",
    category: "poem",
    pageRef: 26,
    quote: "Though my village may seem small, to me it is the best of all.",
    stanzas: [
      "Every village has its own identity and charm. My village is a peaceful place, filled with beauty, love, and grace.",
      "Here I live with my family dear, my mother, father, and little brother near. Surrounded by forests, green and wide, nature blooms on every side.",
      "Birds and animals greet the dawn, their gentle songs carry us on. There is no network in our land, yet hearts stay closely hand in hand.",
      "Each evening people gather near, to share their thoughts and spread good cheer. The elders sit beneath the trees, telling stories with gentle ease. Their words are treasures, rich and wise, like shining stars in evening skies.",
      "Sometimes life is hard to bear; in emergencies, help is rare. Many struggles go unseen, though our days are calm and green.",
      "Still, our village gives us more than wealth could ever hold in store. Fresh air fills each grateful breath, a gift more precious than worldly success.",
      "Golden paddy fields softly sway, where hardworking people toil each day. We grow our fruits and vegetables too, living simply, honest and true.",
      "Every evening, hand in hand, my father walks me through our land. My mother cooks with love and care, and joy is always waiting there.",
      "Though my village may seem small, to me it is the best of all. It is my home, my pride, my song—the place where my heart will always belong."
    ]
  },
  {
    id: "seven-promises-to-keep",
    title: "Seven Promises to Keep",
    subtitle: "An intimate lyrical vow across parting and return",
    author: "Vaishakhi Pillai",
    department: "I MA English",
    category: "poem",
    pageRef: 27,
    quote: "Had it been years that I longed to be held and claimed, let it be so, so the trust.",
    stanzas: [
      "1. To love:\nEver if we end up, suffering in the storms of separation. Ever if we end up, fearing to depart from this heart. Let's make seven promises to keep... Endlessly, let me be drowning, in search of you. For your existence, is all the love I crave.",
      "2. To learn:\nLife has to move on, and the crossroads are crowded. For we need a path, of us two, alone.",
      "3. To remember:\nOf the merry and melancholy, we shared, we cared, we trusted. And let it be eternal, forever to remember.",
      "4. To forgive:\nFor sins that harmed you, for things that prick you. Had it been to vanish from your life, remember to forgive, for not staying.",
      "5. To let go:\nIs this \"I\" good for \"you\"? Still lingers the thought. Shall I wait a little longer? Or, shall I? Let you go? If time says so...",
      "6. To return:\nHad it been years that I longed to be held and claimed, let it be so, so the trust. For I know, you shall return, return to never let go...",
      "7. The seven promises to keep, when we part out from this whole."
    ]
  },
  {
    id: "where-eyes-spoke",
    title: "Where Eyes Spoke",
    subtitle: "Two souls resting in faith",
    author: "Pavithra Babu",
    department: "BA English",
    category: "poem",
    pageRef: 28,
    quote: "They didn't rush; they waited—two souls resting in faith.",
    stanzas: [
      "In a world full of chaos, they met in silence. They spoke no words, but their eyes did.",
      "Glances never made their hearts feel uneasy. This feeling—does it even hold a name?",
      "There's belief in both—if they're meant to be, they would be.",
      "They didn't rush; they waited—two souls resting in faith."
    ]
  },
  {
    id: "hey-soldier-boy",
    title: "Hey Soldier Boy!",
    subtitle: "A battle-tested call to never quit",
    author: "Joel Kurian",
    department: "IIIrd Data Science",
    category: "poem",
    pageRef: 33,
    quote: "A true soldier is not measured by how many times he wins, but by how many times he refuses to quit.",
    stanzas: [
      "Hey soldier boy, don't give up yet. Let's give it one more chance. Let's build it from scratch.",
      "Don't surrender now—let death earn you. Hey soldier boy, let's fight one more time.",
      "There is still something left in you. So just fight one more time; let this pain burn your soul.",
      "This time, you have nothing to lose.",
      "Hey soldier boy, don't give up yet."
    ]
  },
  {
    id: "death-by-curse",
    title: "Death by Curse",
    subtitle: "The unbearable weight of unrequited love",
    author: "Joel Kurian",
    department: "IIIrd Data Science",
    category: "poem",
    pageRef: 34,
    quote: "Some wounds never heal, because they were not caused by knives, but by the one we loved.",
    stanzas: [
      "Lost my Hope, Lost my dream, Lost my sleep, Lost my strength, all due to love.",
      "A deadly curse can be cured, But not when cursed with Love, Even Death can't cure it.",
      "I had big hopes until I hoped for her. I had great dreams until I dreamed about her.",
      "I loved too hard, and that is hard to get, It became hard to live and hard to forget.",
      "She took away my peace, I lost my strength.",
      "Let Death take me; let this be my goodbye, At least let the pain end."
    ]
  },
  {
    id: "in-the-quiet-between-us",
    title: "In the Quiet Between Us",
    subtitle: "For some stories are not written—they bloom with every passing day",
    author: "Emeema Samuel",
    department: "BBA Aided",
    category: "poem",
    pageRef: 35,
    quote: "You became the calm in every storm, the warmth in every winter's breeze, a melody my heart remembered even before it learned your name.",
    stanzas: [
      "Love never asked for perfect words, it lived instead in silent skies, in stolen glances, shared smiles, and dreams reflected in our eyes.",
      "You became the calm in every storm, the warmth in every winter's breeze, a melody my heart remembered even before it learned your name.",
      "If time should scatter us like leaves, across the roads we're meant to roam, I'll still believe that every heartbeat knows the way to bring us home.",
      "For some stories are not written—they bloom with every passing day, and ours, beneath the endless stars, will always find its gentle way."
    ]
  },
  {
    id: "ashes-and-echoes",
    title: "Ashes and Echoes",
    subtitle: "A fleeting eternity — reckless, sublime",
    author: "Sruthy S Kumar",
    department: "III BBA Aided",
    category: "poem",
    pageRef: 9,
    quote: "We loved like embers — glowing long after red.",
    stanzas: [
      "Ash on your lips, moon low and wide, We chased a fire we couldn't hide.",
      "Ocean whispers secrets only night can hold, Every note a spark, every memory gold.",
      "Hands tracing lines the dark couldn't keep, Laughter like lightning, wild and deep.",
      "We lived like a moment borrowed from time, A fleeting eternity — reckless, sublime.",
      "We lit it bright, knowing the light would fade, Some loves burn fast, yet never trade.",
      "Moon above, shadows in our head, We loved like embers — glowing long after red.",
      "Songs in the dark, your voice against mine, We burned, we lived, and we crossed every line.",
      "Now distance hums a quieter tune, But I still look up — and find the same moon."
    ]
  },
  {
    id: "the-clock-never-waits",
    title: "The Clock Never Waits",
    subtitle: "A poem on time and life",
    author: "Anjana Biju",
    department: "2nd yr BBA (Aided)",
    category: "poem",
    pageRef: 6,
    quote: "Time is the most valuable thing a man can spend. — Theophrastus",
    stanzas: [
      "The clock moves on with silent grace, Never pausing, never losing pace. Each passing second writes its tale, A gentle wind that fills our sail.",
      "Morning arrives with dreams untold, Inviting hearts to rise so bold. But idle hands that choose delay Watch golden moments slip away.",
      "Time asks for neither wealth nor fame, It treats each soul exactly the same. The richest gift we truly own Is every hour we've ever known.",
      "The hands keep turning, day and night, Carrying shadows into light. They never question, never rest, Yet teach us all to give our best.",
      "A seed must grow before it flowers, It cannot bloom by counting hours. Success belongs to those who try, Not those who simply watch time fly.",
      "The past is ink that cannot fade, The future waits to still be made. Today alone is ours to hold, More precious far than silver or gold.",
      "When failure knocks upon your door, Let time reveal there's always more. Each sunrise brings another chance To change the ending of life's dance.",
      "So treasure every fleeting beat, For time and life will never meet The same moment twice beneath the skies— The clock moves on, and so must we."
    ]
  },
  {
    id: "cybercrime-in-the-digital-age",
    title: "Cybercrime in the Digital Age",
    subtitle: "Awareness, caution, and responsible digital citizenship",
    author: "Jek Debbarma",
    department: "I BA English",
    category: "article",
    pageRef: 7,
    quote: "Cybersecurity is not only a technical issue but also a personal responsibility that affects everyone who uses the internet.",
    stanzas: [
      "The internet has transformed the way we communicate, learn, work, and conduct financial transactions. From social media platforms to online banking and digital payments, technology has become an essential part of our daily lives. However, as our dependence on digital technology grows, so does the threat of cybercrime.",
      "Cybercrime refers to criminal activities carried out using computers, smartphones, or the internet. These crimes include hacking, identity theft, online scams, phishing attacks, cyberbullying, and the spread of malicious software.",
      "One of my known persons, my uncle, has been attacked by scammers. The first thing they did was send him a WhatsApp message asking him to click a link for the benefit of a government scheme. Unfortunately, after clicking the link, his phone started working abnormally. After a couple of weeks, he received a message that ₹95,000 had been debited from his bank account.",
      "Social media has played a crucial role in modern life. However, oversharing personal information online can expose users to identity theft, fraud, and privacy violations. Photos, phone numbers, addresses, and other personal details shared publicly can be misused by criminals.",
      "In conclusion, while digital technology offers countless opportunities, it also presents significant security challenges. Staying safe online requires awareness, caution, and responsible digital behavior."
    ]
  },
  {
    id: "achan-te-ullam",
    title: "അച്ഛന്റെ ഉള്ളം (Achan'te Ullam)",
    subtitle: "A heartfelt Malayalam tribute to Fatherhood",
    author: "Ranchitha. R",
    department: "II B.Com Finance & Taxation",
    category: "regional",
    pageRef: 1,
    language: "Malayalam",
    quote: "Appa, You are my first hero.",
    stanzas: [
      "നിന്നിലും പാടൻ കൈയിലെടുത്തതോ\nലോകമകൻ കൈകൂട്ടിയാലോ\nതോന്നവേ",
      "വിന്നിത്തിങ്ങളും പുഞ്ചിരി കാണവേ\nഇളൂറുവിഴിയേ കണ്ണീർതുള്ളികൾ എൻ",
      "കുന്നിലും കൈകൾ ചലിക്കുമൊരവേളിൽ\nസ്വപ്നത്തൊങ്ങി ഞാൻ\nസ്വപ്നങ്ങളെത്തുവേ",
      "ആയിരം വർണ്ണങ്ങൾ\nവാരിയെടുത്തപ്പോൾ എന്നോമൽ\nപൊന്നിനെ വാരിപ്പുണരുവേ",
      "വാത്സല്യ ചുംബനമേക നേർത്ത\nവാരോളം നേടി ഞാനൊരച്ഛനായി.\n\nമാറവേ..."
    ]
  },
  {
    id: "manavargal-vaazhkai",
    title: "மாணவர்கள் வாழ்க்கை (Student Life)",
    subtitle: "An inspiring Tamil composition on student aspirations and discipline",
    author: "Kathir K",
    department: "IIIrd Data Science",
    category: "regional",
    pageRef: 2,
    language: "Tamil",
    quote: "மாணவர் வாழ்க்கை என்பது மறக்க முடியாத பொற்காலம்.",
    stanzas: [
      "மாணவர் வாழ்க்கை என்பது மறக்க முடியாத பொற்காலம்.",
      "நட்பின் சிரிப்பும், ஆசிரியரின் அறிவுரையும்,\nதேர்வின் பதற்றமும், வெற்றியின் மகிழ்ச்சியும்\nஇணைந்து உருவாக்கும் இனிய பயணம்.",
      "புத்தகங்கள் அறிவை வளர்க்கும், ஒழுக்கம் மனிதனை உயர்த்தும்,\nமுயற்சி கனவுகளை நனவாக்கும்.",
      "இன்றைய மாணவர்கள் நாளைய சமூகத்தின் தூண்கள்.\nஅறிவோடும், பண்போடும், பொறுப்போடும் வளர்ந்து\nநாட்டின் பெருமையாக விளங்குவோம்."
    ]
  },
  {
    id: "kanavin-paathai",
    title: "கனவின் பாதை (Path of Dreams)",
    subtitle: "Courage, perseverance and rising through trials",
    author: "Kathir K",
    department: "III Data Science",
    category: "regional",
    pageRef: 29,
    language: "Tamil",
    quote: "தோல்வி என்பது முடிவல்ல, துணிவுடன் தொடங்கும் புதிய தொடக்கம்.",
    stanzas: [
      "விழுந்தாலும் எழுவது வாழ்க்கை,\nவிடாமுயற்சியே வெற்றியின் வாசல்.",
      "மழை வந்தால் மண் மணக்கும்,\nமுயற்சி செய்தால் வாழ்வு மலரும்.",
      "தோல்வி என்பது முடிவல்ல,\nதுணிவுடன் தொடங்கும் புதிய தொடக்கம்.",
      "நம்பிக்கையை நெஞ்சில் விதைத்து,\nநாளைய வெற்றியை இன்று உருவாக்குவோம்."
    ]
  },
  {
    id: "the-star-girl-comic",
    title: "The Star Girl (Graphic Comic Series)",
    subtitle: "An illustrated manga comic story created by Muhammed Yaz R",
    author: "Muhammed Yaz R",
    department: "Department of Physics",
    category: "comic",
    pageRef: 12,
    bgImage: "/images/magazine/page-12.jpg",
    quote: "A young heroine and her twin guardian tigers defending the cosmos and innocent hearts.",
    stanzas: [
      "Scene 1: The Night Star Observatory",
      "Scene 2: Falling Meteorite and the Discovery",
      "Scene 3: Journey through the enchanted misty woods",
      "Scene 4: The Glowing Celestial Crystal",
      "Scene 5: Awakening of the Cosmic Shield",
      "Scene 6: The Tiger Protectors Rise",
      "Scene 7: Emergence of the Shadow Giant Villain",
      "Scene 8: The Charge of the Brave Star Girl",
      "Scene 9: The Clash of Light and Dark",
      "Scene 10: Cosmic Strike and Victory",
      "Scene 11: Peace Restored and the Village's Gratitude"
    ]
  }
];
