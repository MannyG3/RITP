import { recruiters, toppers } from "@/constants/data";

const repeatedRecruiters = [...recruiters, ...recruiters];

const recruiterBrand = {
  "Tata Motors": { code: "TM", tone: "from-[#123b72] to-[#0b2a50]" },
  Hyundai: { code: "HY", tone: "from-[#0c4d86] to-[#06325b]" },
  KPIT: { code: "KP", tone: "from-[#6c1436] to-[#470b22]" },
  TCS: { code: "TC", tone: "from-[#0a5f4f] to-[#064034]" },
  "Shutter Cloud": { code: "SC", tone: "from-[#604000] to-[#3f2b00]" },
  "Bharat Forge": { code: "BF", tone: "from-[#4a2a78] to-[#2f1b4d]" }
} as const;

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
              className="min-w-[180px] md:min-w-[220px] h-16 mx-2 rounded-sm border border-slate/20 flex items-center justify-center gap-3 text-slate font-semibold grayscale hover:grayscale-0 transition-all"
            >
              <span
                className={`h-9 w-9 rounded-full bg-gradient-to-b ${
                  recruiterBrand[name as keyof typeof recruiterBrand]?.tone ?? "from-[#1f3b64] to-[#142843]"
                } text-white text-xs tracking-wide font-bold inline-flex items-center justify-center`}
                aria-hidden
              >
                {recruiterBrand[name as keyof typeof recruiterBrand]?.code ?? name.slice(0, 2).toUpperCase()}
              </span>
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
