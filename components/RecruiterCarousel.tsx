import { recruiters, toppers } from "@/constants/data";

const repeatedRecruiters = [...recruiters, ...recruiters];

export function RecruiterCarousel() {
  return (
    <section id="placement" className="mx-auto max-w-grid px-4 md:px-8 pb-16 md:pb-20" aria-labelledby="placement-title">
      <h2 id="placement-title" className="font-heading text-3xl md:text-4xl text-navy tracking-tight">
        Alumni and Recruiter Network
      </h2>

      <div className="mt-7 overflow-hidden rounded-sm border border-slate/20 bg-white">
        <div className="ticker-track flex w-[200%] py-4">
          {repeatedRecruiters.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="min-w-[180px] md:min-w-[220px] h-16 mx-2 rounded-sm border border-slate/20 flex items-center justify-center text-slate font-semibold grayscale hover:grayscale-0 transition-all"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div id="wall-of-fame" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {toppers.map((student) => (
          <article key={student.name} className="rounded-sm border border-slate/20 p-5 bg-white shadow-card">
            <h3 className="font-heading text-xl text-navy">{student.name}</h3>
            <p className="mt-2 text-sm text-slate">{student.role}</p>
            <p className="mt-1 text-sm text-gold font-semibold">{student.company}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
