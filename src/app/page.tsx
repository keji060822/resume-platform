import Image from "next/image";

export default function Home() {
  const profile = {
    name: "Yicheng Ke",
    role: "Undergraduate Student in Microelectronics",
    location: "Changsha, Hunan, China",
    phone: "18773152670",
    email: "keych@mail2.sysu.edu.cn",
    alternateEmail: "3330870783@qq.com",
    summary:
      "I am a 2024-cohort undergraduate at Sun Yat-sen University focusing on device modeling, reliability analysis, and device-circuit co-simulation for emerging memory technologies.",
  };

  const skills = [
    "Python",
    "C",
    "MATLAB",
    "Verilog-A",
    "Cadence",
    "Monte Carlo Statistical Modeling",
    "Device-Circuit Co-Simulation",
    "Technical Writing (Chinese & English)",
    "PyTorch (Basic)",
  ];

  const experience = [
    {
      period: "2025 - Present",
      role: "Student Researcher (First Author)",
      company: "FeFET-Based TCAM Manuscript (Under Review)",
      highlights: [
        "Working on a manuscript related to FeFET-based TCAM reliability, currently under review.",
        "Built and tested simulation workflows and supported experiment analysis.",
        "Contributed to model updates, figures, and paper writing.",
      ],
    },
    {
      period: "Jul 2025 - Present",
      role: "Research Participant",
      company: "Advanced 3D NAND Reliability Project",
      highlights: [
        "Participating in reliability modeling work for advanced 3D NAND devices.",
        "Assisting with threshold-voltage data analysis across multiple temperature points.",
        "Exploring temperature and radiation effects on device behavior.",
      ],
    },
  ];

  const awards = [
    {
      title: "Provincial First Prize, National College Mathematical Modeling Contest (Higher Education Cup)",
      year: "2025",
    },
  ];

  const extras = [
    "Able to write technical documents in both Chinese and English.",
    "Familiar with Verilog-A model editing and device-circuit co-simulation.",
    "Comfortable using Cadence tools for simulation tasks.",
  ];

  const researchFocus = [
    "Ferroelectric memory device modeling (FeFET/2FeFET)",
    "TCAM bit-cell search reliability and failure analysis",
    "3D NAND temperature-radiation coupled reliability",
    "Cross-scale mapping from device variation to circuit-level behavior",
  ];

  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8 md:py-10">
      <div className="overflow-hidden rounded-2xl border border-stroke bg-panel shadow-[0_12px_36px_rgba(16,24,40,0.08)]">
        <div className="grid md:grid-cols-[340px_1fr]">
          <aside className="bg-white/70 md:border-r md:border-stroke">
            <section className="p-6 md:p-8">
              <div className="inline-flex rounded-full border-2 border-accent/40 p-1 shadow-sm">
                <Image
                  src="/avatar.jpg"
                  alt="Yicheng Ke avatar"
                  width={108}
                  height={108}
                  className="h-[108px] w-[108px] rounded-full object-cover"
                  priority
                />
              </div>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-ink">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-ink/90">{profile.role}</p>
              <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted">
                <p>{profile.location}</p>
                <p>{profile.phone}</p>
                <a
                  className="block text-accent underline-offset-4 hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                <a
                  className="block text-accent underline-offset-4 hover:underline"
                  href={`mailto:${profile.alternateEmail}`}
                >
                  {profile.alternateEmail}
                </a>
              </div>
            </section>

            <section className="border-t border-stroke px-6 py-5 md:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Skills
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-stroke px-3 py-1 text-sm font-medium text-ink/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-stroke px-6 py-5 md:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Education
              </h2>
              <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                <p className="font-semibold text-ink">
                  B.Eng. in Microelectronics Science and Technology
                </p>
                <p>
                  Sun Yat-sen University, School of Microelectronics Science and
                  Engineering
                </p>
                <p>Sep 2024 - Present</p>
                <p>Major Ranking: 31/156 (Top ~19%)</p>
              </div>
            </section>

            <section className="border-t border-stroke px-6 py-5 md:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Honors
              </h2>
              <ul className="mt-3 space-y-3">
                {awards.map((award) => (
                  <li key={award.title} className="rounded-lg border border-stroke p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {award.year}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-ink">
                      {award.title}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-stroke px-6 py-5 md:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Research Focus
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {researchFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>

          <main className="p-6 md:p-8">
            <p className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Open to internships and research opportunities
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {profile.summary}
            </p>

            <section className="mt-7 border-t border-stroke pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Research Experience
              </h2>
              <div className="mt-4 space-y-6">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.period}`} className="space-y-2">
                    <p className="text-sm font-semibold text-accent">{item.period}</p>
                    <h3 className="text-2xl font-semibold leading-tight text-ink">
                      {item.role} - {item.company}
                    </h3>
                    <ul className="list-disc space-y-1.5 pl-5 text-base leading-relaxed text-muted">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-7 border-t border-stroke pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Selected Publication
              </h2>
              <article className="mt-4 rounded-lg border border-stroke bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Project-Corresponding Manuscript | Under Review | 2025
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-ink">
                  Manuscript Supporting the FeFET-TCAM Reliability Project
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  This manuscript is prepared as the corresponding paper for the
                  project and is currently under review. Full title and technical
                  details will be disclosed after publication.
                </p>
              </article>
            </section>

            <section className="mt-7 border-t border-stroke pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Additional Information
              </h2>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-muted">
                {extras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

