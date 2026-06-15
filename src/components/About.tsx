"use client";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "Python", "PostgreSQL", "Redis"] },
  { category: "Machine Learning", items: ["PyTorch", "scikit-learn", "Transformers", "NumPy", "Pandas"] },
  { category: "DevOps & Cloud", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Supabase"] },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section bg-card/60">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">
            // 02. sobre mí
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl mt-3 text-foreground">
            Quién soy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div>
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-2xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/40 via-amber-200/30 to-stone-200/40 border border-border rounded-2xl flex items-center justify-center">
                <span className="font-mono font-bold text-2xl text-accent">
                  AM
                </span>
              </div>
            </div>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Soy <span className="text-foreground font-semibold">Aryam M. Alvarez Ramos</span>,
                desarrollador full-stack con especialización en machine learning.
                Me apasiona construir productos que no solo funcionen bien
                técnicamente, sino que también ofrezcan una experiencia de
                usuario memorable.
              </p>
              <p>
                Mi trabajo abarca desde el diseño de APIs robustas y escalables
                hasta el entrenamiento de modelos de ML que resuelven problemas
                reales. Creo firmemente en que la inteligencia artificial tiene
                más impacto cuando se integra de forma invisible y elegante en
                el producto final.
              </p>
              <p>
                Cuando no estoy programando, me puedes encontrar explorando
                papers de investigación en ML, contribuyendo a proyectos
                open-source o aprendiendo sobre sistemas distribuidos.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-bold text-sm rounded hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Trabajemos juntos
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground/80 font-medium text-sm rounded hover:border-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-4 bg-accent rounded-full" />
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-background text-foreground/80 border border-border hover:border-accent/40 hover:text-accent transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-background border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-foreground/80 text-sm">
                Disponible para proyectos freelance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
