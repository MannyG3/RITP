const sectionCards = [
  {
    id: "about",
    title: "About us",
    content:
      "RIT Polytechnic Pune is focused on diploma-level technical education with a strong practical orientation. The institute emphasizes disciplined academics, lab-first learning, and professional development so students are prepared for higher studies and industry roles."
  },
  {
    id: "about-kes",
    title: "About KES",
    content:
      "The institute operates under a long-standing educational trust vision that promotes affordable, quality technical education. Its governance model supports value-based learning, transparent administration, and continuous academic modernization."
  },
  {
    id: "vision",
    title: "VISION & MISSION",
    content:
      "Vision: To become a center for excellence in polytechnic education by nurturing competent and ethical technocrats. Mission: Deliver quality diploma programs, strengthen industry collaboration, and develop students through innovation, discipline, and social responsibility."
  },
  {
    id: "principal",
    title: "Principal's Message",
    content:
      "Our focus is to build confident engineers through conceptual clarity and consistent practical exposure. We encourage students to participate in projects, technical events, and internship opportunities that shape their professional journey."
  },
  {
    id: "secretary",
    title: "Secretary's Message",
    content:
      "The institution remains committed to inclusive education, modern infrastructure, and student-centric governance. We strive to create an environment where every learner can discover potential and build a meaningful technical career."
  },
  {
    id: "bog",
    title: "BOG members",
    content:
      "The Board of Governors includes experienced academicians, industry experts, and institutional leaders who guide long-term strategy. Their inputs support quality assurance, curriculum relevance, and strategic growth of the institute."
  },
  {
    id: "governance",
    title: "Board of Governance",
    content:
      "Institutional governance follows a structured framework for academic planning, financial transparency, and policy implementation. Periodic reviews and committee-led monitoring help maintain accountability and educational standards."
  },
  {
    id: "awards",
    title: "Institute Awards",
    content:
      "RITP recognizes merit in academics, attendance, innovation, and co-curricular excellence through annual awards. This encourages students and faculty to sustain high performance and contribute to institutional development."
  },
  {
    id: "media",
    title: "Media Broadcasting",
    content:
      "Campus activities, technical events, and student achievements are regularly shared through official communication channels and media updates. This keeps stakeholders informed and highlights the institute's academic culture."
  },
  {
    id: "location",
    title: "Location",
    content:
      "RIT Polytechnic Pune is located in Lohegaon, Pune, Maharashtra, with access to industrial and educational hubs. The location helps students benefit from regional training opportunities and industry interaction."
  }
];

export function InstitutionalSections() {
  return (
    <section id="ritp-unique" className="mx-auto max-w-grid px-4 md:px-8 py-16 md:py-20" aria-labelledby="institutional-title">
      <h2 id="institutional-title" className="font-heading text-3xl md:text-4xl text-navy tracking-tight">
        RITP Unique
      </h2>
      <p className="mt-3 max-w-3xl text-slate text-sm md:text-base">
        Institutional highlights and governance information based on the sections available in the navigation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectionCards.map((item) => (
          <article id={item.id} key={item.id} className="rounded-sm border border-slate/20 bg-white p-5 md:p-6 shadow-card scroll-mt-28">
            <h3 className="font-heading text-2xl text-navy">{item.title}</h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate">{item.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
