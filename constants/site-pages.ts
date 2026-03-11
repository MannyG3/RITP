export type DepartmentSlug = "computer" | "aiml" | "civil" | "mech";

export type DepartmentFaculty = {
  name: string;
  designation: string;
  linkedin: string;
  phone?: string;
  email?: string;
};

export type DepartmentLab = {
  title: string;
  image: string;
  description: string;
};

export type DepartmentDetail = {
  slug: DepartmentSlug;
  name: string;
  intake: number;
  duration: string;
  focusAreas: string[];
  heroTitle: string;
  overview: string[];
  faculty: DepartmentFaculty[];
  labs: DepartmentLab[];
  syllabus: string[];
};

export const instituteProfile = {
  fullName: "Kasegaon Education Society's Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune",
  shortName: "RIT Polytechnic Pune",
  dteCode: "6456",
  establishedYear: "2009",
  affiliations: "Approved by AICTE (New Delhi), Affiliated to MSBTE (Mumbai), and Recognized by Govt. of Maharashtra"
};

export const departmentDetails: Record<DepartmentSlug, DepartmentDetail> = {
  computer: {
    slug: "computer",
    name: "Computer Engineering",
    intake: 120,
    duration: "3 Years",
    focusAreas: ["Software Development", "Networking", "Cybersecurity", "Database Management"],
    heroTitle: "Code, systems, and infrastructure for modern digital industries.",
    overview: [
      "The Computer Engineering department at RIT Polytechnic Pune focuses on software engineering, cloud platforms, networking, cybersecurity awareness, and practical problem solving.",
      "Students work through structured lab sessions, mini-projects, coding practice, and industry-aligned assignments that strengthen employability and higher-study readiness."
    ],
    faculty: [
      {
        name: "Vikramsinh Saste",
        designation: "HOD",
        linkedin: "https://www.linkedin.com/",
        phone: "7350199501",
        email: "vikramsinh.saste@ritppune.com"
      },
      { name: "Prof. Snehal Patwardhan", designation: "Faculty", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Akash Salunke", designation: "Lecturer, Programming Systems", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Neha Shinde", designation: "Lecturer, Database Systems", linkedin: "https://www.linkedin.com/" }
    ],
    labs: [
      {
        title: "Programming Studio",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        description: "Well-equipped lab for C, C++, Java, Python, and problem-solving sessions."
      },
      {
        title: "Network Simulation Lab",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
        description: "Hands-on networking, switching, routing, and cyber hygiene experiments."
      },
      {
        title: "Cloud and Project Bay",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        description: "Project-focused environment for deployment workflows and capstone builds."
      }
    ],
    syllabus: ["Programming in C", "Data Structures", "Database Management Systems", "Computer Networks", "Web Application Development"]
  },
  aiml: {
    slug: "aiml",
    name: "Artificial Intelligence and Machine Learning",
    intake: 120,
    duration: "3 Years",
    focusAreas: ["Data Science", "Neural Networks", "Python", "Automation"],
    heroTitle: "Applied intelligence, data systems, and production-ready model thinking.",
    overview: [
      "The AIML department introduces students to data pipelines, model workflows, automation fundamentals, and industry use cases across analytics, manufacturing, and digital services.",
      "The curriculum balances statistics, Python-based experimentation, and deployment awareness so students gain practical AI literacy rather than purely theoretical exposure."
    ],
    faculty: [
      { name: "Prof. Aditi Kulkarni", designation: "Head of Department", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Pranav Deshmukh", designation: "Lecturer, ML Applications", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Rutuja More", designation: "Lecturer, Data Engineering", linkedin: "https://www.linkedin.com/" }
    ],
    labs: [
      {
        title: "AI Computing Lab",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
        description: "GPU-ready systems and notebooks for experimentation with intelligent applications."
      },
      {
        title: "Data Visualization Lab",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        description: "Students work with dashboards, analytics tools, and decision-support datasets."
      },
      {
        title: "Innovation Sandbox",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
        description: "Cross-functional space for AI prototypes, hackathons, and capstone reviews."
      }
    ],
    syllabus: ["Python for AI", "Data Preprocessing", "Machine Learning Concepts", "AI Applications", "Mini Project and Seminar"]
  },
  civil: {
    slug: "civil",
    name: "Civil Engineering",
    intake: 60,
    duration: "3 Years",
    focusAreas: ["Structural Design", "Surveying", "Construction Management", "Hydraulics"],
    heroTitle: "Infrastructure thinking grounded in surveying, structures, and field precision.",
    overview: [
      "The Civil Engineering department builds strong foundations in surveying, estimation, structural behavior, geotechnics, and construction practice.",
      "Students develop site-ready skills through drawing work, material testing, field exposure, and software-assisted civil planning exercises."
    ],
    faculty: [
      { name: "Prof. Rohan Jadhav", designation: "Head of Department", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Priya Khot", designation: "Lecturer, Surveying", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Omkar Chavan", designation: "Lecturer, Structural Engineering", linkedin: "https://www.linkedin.com/" }
    ],
    labs: [
      {
        title: "Material Testing Lab",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        description: "Testing of concrete, aggregates, and structural materials using standard procedures."
      },
      {
        title: "Survey Practice Ground",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        description: "Field measurement exercises with leveling, total station, and mapping workflows."
      },
      {
        title: "CAD Drafting Studio",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
        description: "Plan drawing, drafting standards, and estimation practice in digital environments."
      }
    ],
    syllabus: ["Construction Materials", "Surveying", "Structural Mechanics", "Civil Drafting", "Quantity Estimation"]
  },
  mech: {
    slug: "mech",
    name: "Mechanical Engineering",
    intake: 60,
    duration: "3 Years",
    focusAreas: ["CAD/CAM", "Manufacturing", "Thermal Engineering", "Robotics"],
    heroTitle: "From workshop discipline to modern manufacturing systems.",
    overview: [
      "The Mechanical Engineering department develops strong practical competence in machines, thermal systems, manufacturing, and maintenance practices.",
      "Students engage with workshops, machine tools, CAD/CAM processes, and industrial applications linked to automotive and production sectors."
    ],
    faculty: [
      { name: "Prof. Rahul Pawar", designation: "Head of Department", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Swati Nikam", designation: "Lecturer, Thermal Systems", linkedin: "https://www.linkedin.com/" },
      { name: "Prof. Kunal Bhosale", designation: "Lecturer, Manufacturing Processes", linkedin: "https://www.linkedin.com/" }
    ],
    labs: [
      {
        title: "Machine Shop",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
        description: "Precision machining practice using lathes, drilling, and milling equipment."
      },
      {
        title: "CAD/CAM Lab",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
        description: "Digital design workflows for product modeling and manufacturing simulation."
      },
      {
        title: "Thermal Engineering Lab",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        description: "Experiments on engines, refrigeration systems, and energy conversion basics."
      }
    ],
    syllabus: ["Engineering Mechanics", "Manufacturing Processes", "Thermal Engineering", "CAD/CAM", "Industrial Maintenance"]
  }
};

export const placementStats = [
  { label: "Placement Assistance", value: "100%" },
  { label: "Core Recruiters", value: "50+" },
  { label: "Internship Programs", value: "MOU-Based" },
  { label: "Career Preparation", value: "Integrated" }
];

export const recruiterWall = [
  { name: "Tata Motors", logo: "/images/recruiters/tata-motors.svg" },
  { name: "Hyundai", logo: "/images/recruiters/hyundai.svg" },
  { name: "TCS", logo: "/images/recruiters/tcs.svg" },
  { name: "KPIT Technologies", logo: "/images/recruiters/kpit.png" },
  { name: "Bharat Forge", logo: "/images/recruiters/bharat-forge.jpg" },
  { name: "Kirloskar Brothers", logo: "/images/recruiters/kirloskar-brothers.jpg" },
  { name: "Persistent Systems", logo: "/images/recruiters/persistent.svg" },
  { name: "Capgemini", logo: "/images/recruiters/capgemini.svg" },
  { name: "Accenture", logo: "/images/recruiters/accenture.svg" }
];

export const placementServices = [
  "Industry visits",
  "Soft skills training",
  "Aptitude preparation",
  "MOU-based internships"
];

export const placementContact = {
  name: "Mr. Mayur Gund",
  role: "Training & Placement Officer",
  email: "tpo@ritppune.com"
};

export const placementTestimonials = [
  {
    name: "Sakshi Patil",
    role: "Software Engineer, TCS",
    quote: "The training roadmap at RITP made interviews feel structured rather than intimidating. Aptitude support, mock interviews, and project reviews directly improved my confidence."
  },
  {
    name: "Rahul Jadhav",
    role: "Graduate Engineer Trainee, Tata Motors",
    quote: "The T&P cell consistently connected academics with industry expectations. My placement journey improved because the department and placement team worked in alignment."
  },
  {
    name: "Aditi Kulkarni",
    role: "Data Analyst, KPIT",
    quote: "Resume refinement, company-specific preparation, and internship exposure gave me a strong edge during the recruitment process."
  }
];

export const admissionsSteps = [
  {
    title: "Enquiry",
    description: "Submit your academic details and preferred branch so the admissions team can guide you on eligibility and seat availability."
  },
  {
    title: "Document Verification",
    description: "Carry SSC/HSC mark sheets, transfer certificate, domicile, caste certificate if applicable, and passport-size photographs."
  },
  {
    title: "Fee Payment",
    description: "Once eligibility is confirmed, complete fee payment through the institute-approved mode to reserve your provisional seat."
  },
  {
    title: "Final Admission",
    description: "Receive branch confirmation, onboarding instructions, orientation details, and academic calendar updates."
  }
];

export const admissionsInfo = {
  eligibility: "10th Pass (SSC) with minimum 35% aggregate marks as per MSBTE/DTE Maharashtra norms.",
  process: "Centralized Admission Process (CAP) via DTE Maharashtra.",
  documents: [
    "SSC Marksheet",
    "School Leaving Certificate",
    "Nationality or Domicile Certificate",
    "Income Certificate (for TFWS)",
    "Caste Certificate (if applicable)"
  ],
  officeContact: "Mr. Dhiraj Nimbalkar",
  officePhone: "9822850858"
};

export type AdmissionTrackSlug = "first-year" | "direct-second-year";

export type AdmissionTrack = {
  slug: AdmissionTrackSlug;
  title: string;
  shortDescription: string;
  overview: string[];
  eligibility: string[];
  process: string[];
  documents: string[];
  importantNotes: string[];
  sourceLinks: Array<{ label: string; href: string }>;
};

export const admissionTracks: AdmissionTrack[] = [
  {
    slug: "first-year",
    title: "First Year Diploma Admission",
    shortDescription: "For students taking admission after SSC (10th) through Maharashtra CAP rounds.",
    overview: [
      "First Year Diploma admissions in Maharashtra are conducted through the Centralized Admission Process (CAP) announced each year by the competent authority.",
      "Candidates fill online option forms, complete document verification, and receive allotment in CAP rounds based on merit, category rules, and seat availability."
    ],
    eligibility: [
      "Passed SSC (10th Standard) or equivalent examination with at least 35% aggregate marks.",
      "Eligibility, reservation norms, and seat-type conditions are applied as per the latest annual CAP information brochure.",
      "For minority and institute-level seats, institute and authority guidelines are applicable as notified in the admission year."
    ],
    process: [
      "Register online on the official admission portal notified for Maharashtra Polytechnic CAP.",
      "Upload required documents and complete e-scrutiny or physical verification as instructed.",
      "Publish/confirm merit details, submit option form, and lock branch-college preferences.",
      "Accept allotted seat in CAP rounds and report to the institute within deadlines.",
      "Complete final admission formalities, fee payment, and document submission at institute level."
    ],
    documents: [
      "SSC Marksheet and Passing Certificate",
      "School Leaving / Transfer Certificate",
      "Nationality and Domicile certificate (as applicable)",
      "Caste certificate, validity, and non-creamy layer documents (if applicable)",
      "Income certificate (for EWS / TFWS or fee concession categories, if applicable)",
      "Aadhaar card and passport-size photographs"
    ],
    importantNotes: [
      "Merit list, CAP schedule, and seat matrix change every academic year.",
      "Always verify the active year's brochure and deadlines on official portals before applying."
    ],
    sourceLinks: [
      { label: "DTE Maharashtra", href: "https://dte.maharashtra.gov.in" },
      { label: "MSBTE Official Website", href: "https://msbte.org.in" },
      { label: "State CET Cell Maharashtra", href: "https://cetcell.mahacet.org" }
    ]
  },
  {
    slug: "direct-second-year",
    title: "Direct Second Year Diploma Admission",
    shortDescription: "For eligible students seeking lateral entry to diploma second year.",
    overview: [
      "Direct Second Year (lateral entry) admissions are also processed under Maharashtra admission rules notified for the academic year.",
      "This route is intended for eligible candidates from qualifying backgrounds such as HSC Science, HSC vocational streams, or ITI, subject to current-year rules."
    ],
    eligibility: [
      "Passed HSC (Science) with Physics and Mathematics (and relevant subjects as specified in yearly rules).",
      "OR passed HSC (Vocational/MCVC) in an appropriate stream as per equivalence rules.",
      "OR passed 2-year ITI after 10th in a relevant trade, where permitted by annual CAP guidelines.",
      "Branch equivalence and seat eligibility are decided according to the official yearly admission handbook."
    ],
    process: [
      "Register on the official admissions portal for the active academic year.",
      "Complete document upload and verification for lateral-entry eligibility.",
      "Confirm merit details and submit preference options for available branches/institutes.",
      "Participate in allotment rounds and confirm allotted seat within reporting window.",
      "Report to institute and complete admission with original documents and fees."
    ],
    documents: [
      "Qualifying exam marksheets (HSC Science/MCVC/ITI as applicable)",
      "SSC marksheet and school leaving certificate",
      "ITI certificates and trade documents (for ITI applicants)",
      "Nationality/domicile and category documents (if applicable)",
      "Income and concession-related certificates (if applicable)",
      "Identity proof and passport-size photographs"
    ],
    importantNotes: [
      "Not all branches may have direct second-year intake every year.",
      "Seat distribution, reservation, and eligible qualifications are finalized in the yearly official notification."
    ],
    sourceLinks: [
      { label: "DTE Maharashtra", href: "https://dte.maharashtra.gov.in" },
      { label: "MSBTE Official Website", href: "https://msbte.org.in" },
      { label: "State CET Cell Maharashtra", href: "https://cetcell.mahacet.org" }
    ]
  }
];

export const aboutContent = {
  vision: "To develop skilled professionals through technical education.",
  mission: [
    "M1: To excel in technical knowledge in specific domains.",
    "M2: To involve faculty and students in emerging teaching-learning practices.",
    "M3: To prepare students for higher studies in reputed institutes.",
    "M4: To provide skilled manpower to the society."
  ]
};

export type AboutSectionSlug =
  | "about-us"
  | "about-kes"
  | "vision-and-mission"
  | "principals-message"
  | "secretarys-message"
  | "bog-members"
  | "board-of-governance"
  | "institute-awards"
  | "media-broadcasting"
  | "location"
  | "infrastructure-and-facilities";

export type AboutSection = {
  slug: AboutSectionSlug;
  title: string;
  summary: string;
  content: string[];
  image?: {
    src: string;
    alt: string;
  };
  contact?: {
    name: string;
    designation: string;
    phone: string;
    email: string;
  };
};

export const aboutSections: AboutSection[] = [
  {
    slug: "about-us",
    title: "About us",
    summary: "Institution profile, establishment background, and statutory approvals.",
    content: [
      `${instituteProfile.fullName} (DTE Code: ${instituteProfile.dteCode}) was established in ${instituteProfile.establishedYear}.`,
      `The institute is ${instituteProfile.affiliations} and is focused on delivering practical, industry-aligned diploma education.`
    ]
  },
  {
    slug: "about-kes",
    title: "About KES",
    summary: "Educational trust values and governance legacy.",
    content: [
      "The institute operates under a long-standing educational trust vision that promotes affordable, quality technical education.",
      "Its governance model supports value-based learning, transparent administration, and continuous academic modernization."
    ]
  },
  {
    slug: "vision-and-mission",
    title: "VISION & MISSION",
    summary: "Core institutional direction and long-term student outcomes.",
    content: [
      `Vision: ${aboutContent.vision}`,
      ...aboutContent.mission
    ]
  },
  {
    slug: "principals-message",
    title: "Principal's Message",
    summary: "Academic focus, practical learning, and student growth outlook.",
    content: [
      "Words from Principal's Desk",
      "Warm Greetings!",
      "Education is a multi-stage process of building character. Engineering education is discipline-specific and outcome based, which involves the application of basic principles.",
      "The inspiration and commitment of our management to continuous improvement and hard work of the faculty members towards the overall growth of our students ensures that every student passing out of our college will taste the success of life.",
      "I wish all our students great success and expect them to be proud RITians. With vision and mission, we will continue to rise in the field of engineering. With the help of technology, we will make engineering a special key to pathways of great opportunity through RIT.",
      "I believe that every student can learn and be successful if provided the right support and opportunities. Here at RIT, the professors and staff are committed to providing all students with an appropriate and challenging educational experience in a respectful environment.",
      "I would like parents to know that my door is always open to discuss any concerns, questions, or ideas you may have regarding your child's education. I welcome you all to this outstanding learning community where everyone is dedicated to high standards of excellence.",
      "I conclude by assuring that together we can make the learning experience memorable and fruitful at RIT Polytechnic, Lohegaon, Pune."
    ],
    image: {
      src: "/images/about/principal-dr-kashinath-munde.jpg",
      alt: "Dr. Kashinath Munde, Principal"
    },
    contact: {
      name: "Dr. Kashinath Munde",
      designation: "Principal",
      phone: "9307128729",
      email: "principal@ritppune.com"
    }
  },
  {
    slug: "secretarys-message",
    title: "Secretary's Message",
    summary: "Institutional commitment to inclusive and student-centric education.",
    content: [
      "The institution remains committed to inclusive education, modern infrastructure, and student-centric governance.",
      "We strive to create an environment where every learner can discover potential and build a meaningful technical career."
    ]
  },
  {
    slug: "bog-members",
    title: "BOG members",
    summary: "Advisory strength from academia, industry, and institute leadership.",
    content: [
      "The Board of Governors includes experienced academicians, industry experts, and institutional leaders who guide long-term strategy.",
      "Their inputs support quality assurance, curriculum relevance, and strategic growth of the institute."
    ]
  },
  {
    slug: "board-of-governance",
    title: "Board of Governance",
    summary: "Policy oversight, accountability, and quality monitoring framework.",
    content: [
      "Institutional governance follows a structured framework for academic planning, financial transparency, and policy implementation.",
      "Periodic reviews and committee-led monitoring help maintain accountability and educational standards."
    ]
  },
  {
    slug: "institute-awards",
    title: "Institute Awards",
    summary: "Recognition for student and faculty achievements.",
    content: [
      "RITP recognizes merit in academics, attendance, innovation, and co-curricular excellence through annual awards.",
      "This encourages students and faculty to sustain high performance and contribute to institutional development."
    ]
  },
  {
    slug: "media-broadcasting",
    title: "Media Broadcasting",
    summary: "Official communication channels for campus updates and achievements.",
    content: [
      "Campus activities, technical events, student achievements, and admissions updates are shared through official channels.",
      "These updates help students, parents, alumni, and industry stakeholders stay informed about institutional progress."
    ]
  },
  {
    slug: "location",
    title: "Location",
    summary: "Strategic campus location in Lohegaon, Pune.",
    content: [
      "RIT Polytechnic Pune is located in Lohegaon, Pune, Maharashtra, with access to industrial and educational hubs.",
      "The location helps students benefit from regional training opportunities, internships, and industry interaction."
    ]
  },
  {
    slug: "infrastructure-and-facilities",
    title: "Infrastructure & Facilities",
    summary: "Academic, residential, and student support infrastructure at a glance.",
    content: [
      "Advanced AI/ML Labs, Cloud Computing Lab, CAD/CAM Center, Concrete Technology Lab, and Language Lab.",
      "Fully automated Central Library with 24/7 exam-time access, journals, and E-content portal.",
      "Separate hostels for boys and girls with power backup, solar hot water, and 500 Mbps Wi-Fi.",
      "Cafeteria, gymnasium, sports ground, and bus transport covering major parts of Pune."
    ]
  }
];

export const campusFacilities = [
  "Advanced AI/ML Labs, Cloud Computing Lab, CAD/CAM Center, Concrete Technology Lab, and Language Lab.",
  "Fully automated Central Library with 24/7 exam-time access, journals, and E-content portal.",
  "Separate hostels for boys and girls with power backup, solar hot water, and 500 Mbps Wi-Fi.",
  "Cafeteria, gymnasium, sports ground, and bus transport covering major parts of Pune."
];

export type CampusLifeSlug =
  | "virtual-campus-tour"
  | "infrastructure"
  | "iconic-places-at-campus"
  | "academic-buildings"
  | "departments"
  | "tilak-hall"
  | "diploma-wing"
  | "admin-block"
  | "student-housing"
  | "hostels"
  | "ajit-gulabchand-central-library"
  | "books-and-journals"
  | "reading-room-services"
  | "computing"
  | "walchand-informatics-centre"
  | "campus-network-and-wifi"
  | "computing-infrastructure"
  | "student-induction"
  | "student-scholarships"
  | "student-activities"
  | "cultural-activities"
  | "sports-activities"
  | "social-activities"
  | "clubs-activities"
  | "student-council"
  | "online-platforms"
  | "aicte-idea-lab";

export const campusLifePages: Array<{ slug: CampusLifeSlug; title: string; description: string }> = [
  {
    slug: "virtual-campus-tour",
    title: "Virtual Campus Tour",
    description: "Explore campus spaces, classrooms, laboratories, and student facilities through guided visual orientation."
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description: "RIT Polytechnic Pune has structured academic blocks, department zones, and support services designed for diploma-focused technical education."
  },
  {
    slug: "iconic-places-at-campus",
    title: "Iconic Places at Campus",
    description: "Landmark institutional spaces used for events, orientations, and student gatherings."
  },
  {
    slug: "academic-buildings",
    title: "Academic Buildings",
    description: "Dedicated academic blocks with theory classrooms, tutorial rooms, and department offices."
  },
  {
    slug: "departments",
    title: "Departments",
    description: "Computer, AIML, Mechanical, and Civil departments with domain-specific practical learning environments."
  },
  {
    slug: "tilak-hall",
    title: "Tilak Hall",
    description: "Primary hall for seminars, orientation sessions, technical talks, and campus functions."
  },
  {
    slug: "diploma-wing",
    title: "Diploma Wing",
    description: "Core wing supporting diploma-specific administration and teaching activities."
  },
  {
    slug: "admin-block",
    title: "Admin Block",
    description: "Administrative support center for admissions, accounts, examination coordination, and student services."
  },
  {
    slug: "student-housing",
    title: "Student Housing",
    description: "Safe and structured student residential support with supervision and essential amenities."
  },
  {
    slug: "hostels",
    title: "Hostels",
    description: "Separate hostels for boys and girls with power backup, solar hot water, and high-speed Wi-Fi connectivity."
  },
  {
    slug: "ajit-gulabchand-central-library",
    title: "Central Library",
    description: "Central library facility with curated technical collections and digital learning support."
  },
  {
    slug: "books-and-journals",
    title: "Books and Journals",
    description: "Access to core curriculum books, references, and national/international journal resources."
  },
  {
    slug: "reading-room-services",
    title: "Reading Room and Services",
    description: "Quiet reading spaces and student-friendly services with extended access during exams."
  },
  {
    slug: "computing",
    title: "Computing",
    description: "Campus computing ecosystem supporting practical sessions, software tools, and project execution."
  },
  {
    slug: "walchand-informatics-centre",
    title: "Walchand Informatics Centre (WIC)",
    description: "Technology center for practical computing exposure and departmental digital activities."
  },
  {
    slug: "campus-network-and-wifi",
    title: "Campus Network and WiFi",
    description: "Reliable internal networking and Wi-Fi coverage across key academic and residential zones."
  },
  {
    slug: "computing-infrastructure",
    title: "Computing Infrastructure",
    description: "Modern systems and software infrastructure used for labs, analytics, CAD/CAM workflows, and project work."
  },
  {
    slug: "student-induction",
    title: "Student Induction",
    description: "Structured induction for first-year students covering academics, discipline, facilities, and mentoring support."
  },
  {
    slug: "student-scholarships",
    title: "Student Scholarships",
    description: "Guidance and administrative support for eligible scholarship schemes and aid opportunities."
  },
  {
    slug: "student-activities",
    title: "Student Activities",
    description: "Balanced campus life with co-curricular participation, technical clubs, and student-led initiatives."
  },
  {
    slug: "cultural-activities",
    title: "Cultural Activities",
    description: "Events and programs that encourage creativity, expression, and community engagement."
  },
  {
    slug: "sports-activities",
    title: "Sports Activities",
    description: "Outdoor and indoor sports opportunities for fitness, team spirit, and competitive participation."
  },
  {
    slug: "social-activities",
    title: "Social Activities",
    description: "Awareness drives and socially relevant initiatives promoting civic responsibility."
  },
  {
    slug: "clubs-activities",
    title: "Clubs Activities",
    description: "Student clubs that strengthen technical depth, communication, leadership, and innovation culture."
  },
  {
    slug: "student-council",
    title: "Student Council",
    description: "Student representation platform supporting campus coordination, event planning, and student voice."
  },
  {
    slug: "online-platforms",
    title: "Online Platforms",
    description: "Digital portals for academic updates, notices, communication, and student support workflows."
  },
  {
    slug: "aicte-idea-lab",
    title: "AICTE IDEA Lab",
    description: "Innovation-oriented ecosystem encouraging prototyping, problem-solving, and applied technical creativity."
  }
];
