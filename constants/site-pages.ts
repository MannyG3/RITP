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
  heroTitle: string;
  overview: string[];
  faculty: DepartmentFaculty[];
  labs: DepartmentLab[];
  syllabus: string[];
};

export const departmentDetails: Record<DepartmentSlug, DepartmentDetail> = {
  computer: {
    slug: "computer",
    name: "Computer Engineering",
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
  { label: "Offers in 2025", value: "200+" },
  { label: "Highest Package", value: "₹6.8 LPA" },
  { label: "Core Recruiters", value: "50+" },
  { label: "Internship Support", value: "100%" }
];

export const recruiterWall = [
  "Tata Motors",
  "Hyundai",
  "TCS",
  "KPIT",
  "Infosys",
  "Wipro",
  "Tech Mahindra",
  "Bharat Forge",
  "Cummins",
  "Bosch",
  "L&T",
  "Capgemini",
  "Cognizant",
  "Siemens",
  "Persistent",
  "Hexaware",
  "Mahindra",
  "Syntel",
  "Amdocs",
  "HCLTech",
  "JCB",
  "Atlas Copco",
  "Forbes Marshall",
  "John Deere"
];

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
