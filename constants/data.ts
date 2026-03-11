import { aboutSections, campusLifePages } from "@/constants/site-pages";

const departmentMenu = [
  { label: "Computer Engineering", href: "/departments/computer" },
  { label: "Mechanical Engineering", href: "/departments/mech" },
  { label: "AIML", href: "/departments/aiml" },
  { label: "Civil Engineering", href: "/departments/civil" }
];

const studentCareerMenu = [
  { label: "Placement Cell", href: "/placement-cell" },
  { label: "Internship Guidance", href: "/placement-cell#success-stories-title" },
  { label: "Career Readiness", href: "/placement-cell" }
];

const academicsMenu = [
  { label: "Computer Engineering", href: "/departments/computer" },
  { label: "Mechanical Engineering", href: "/departments/mech" },
  { label: "AIML", href: "/departments/aiml" },
  { label: "Civil Engineering", href: "/departments/civil" }
];

const admissionsMenu = [
  { label: "First Year Diploma", href: "/admissions/first-year" },
  { label: "Direct Second Year", href: "/admissions/direct-second-year" }
];

const campusLifeMenu = campusLifePages.map((item) => ({
  label: item.title,
  href: `/campus-life/${item.slug}`
}));

export const aboutMenu = aboutSections
  .filter((item) => item.slug !== "infrastructure-and-facilities")
  .map((item) => ({
    label: item.title,
    href: `/about/${item.slug}`
  }));

export const navTabs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: aboutMenu },
  { label: "Admissions", href: "/admissions", children: admissionsMenu },
  { label: "Academics & Programmes", href: "/departments/computer", children: academicsMenu },
  { label: "Student Careers", href: "/placement-cell", children: studentCareerMenu },
  { label: "Campus life", href: "/campus-life", children: campusLifeMenu },
  { label: "Research & Consultancy", href: "/#professional-body" },
  { label: "Departments", href: "/departments/computer", children: departmentMenu }
];

export const impactMetrics = [
  "100% Placement Assistance",
  "50+ Industry Partners",
  "State-of-the-Art AIML Labs"
];

export const departments = [
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    summary: "Advanced manufacturing, CAD/CAM, and thermal engineering practice in modern workshops.",
    pageHref: "/departments/mech",
    hodMessageHref: "/departments/mech",
    curriculumHref: "/departments/mech"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    summary: "Structural, geotechnical, and surveying skills aligned to real infrastructure projects.",
    pageHref: "/departments/civil",
    hodMessageHref: "/departments/civil",
    curriculumHref: "/departments/civil"
  },
  {
    id: "computer",
    name: "Computer Engineering",
    summary: "Software development, networking, and cloud-first problem solving for modern industries.",
    pageHref: "/departments/computer",
    hodMessageHref: "/departments/computer",
    curriculumHref: "/departments/computer"
  },
  {
    id: "aiml",
    name: "AIML",
    summary: "AI model engineering, data systems, and applied machine intelligence in industry contexts.",
    pageHref: "/departments/aiml",
    hodMessageHref: "/departments/aiml",
    curriculumHref: "/departments/aiml"
  }
];

export const notices = [
  {
    date: "11 Mar 2026",
    title: "CAP Round Counseling Support Desk Open at Lohegaon Campus",
    description: "Admissions team will guide applicants for final merit list and branch allotment procedures."
  },
  {
    date: "08 Mar 2026",
    title: "MSBTE Practical Examination Timetable Published",
    description: "Department-wise practical schedule is now available through Student Portal and notice board."
  },
  {
    date: "03 Mar 2026",
    title: "Industry Expert Session on EV Manufacturing Systems",
    description: "Mechanical and AIML students to attend combined technical keynote by automotive specialists."
  }
];

export const recruiters = ["Tata Motors", "Hyundai", "KPIT", "TCS", "Shutter Cloud", "Bharat Forge"];

export const toppers = [
  { name: "Sakshi Patil", role: "Software Engineer", company: "TCS" },
  { name: "Rahul Jadhav", role: "Graduate Engineer Trainee", company: "Tata Motors" },
  { name: "Aditi Kulkarni", role: "Data Analyst", company: "KPIT" }
];
