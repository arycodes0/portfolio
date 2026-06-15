"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "CoquiNav",
    description:
      "App comunitaria desarrollada junto a otra ingeniera de software, que ayuda a las personas a encontrar eventos cercanos y también a organizar los suyos para conectar con la comunidad local.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Flask", "Firebase", "Google Maps API", "unittest"],
    github: "https://github.com/arycodes0/CoquiNav",
    live: null,
    media: [
      { type: "video" as const, src: "/projects/coquinav-demo.mp4" },
      { type: "image" as const, src: "/projects/coquinav.png" },
    ],
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    id: 2,
    name: "HaiBank Management",
    description:
      "Aplicación full-stack de gestión financiera con frontend en React (Vite) y backend en Django REST Framework. Permite a los usuarios administrar cuentas, balances y préstamos de forma sencilla.",
    tags: ["Django", "DRF", "PostgreSQL", "JWT", "Django ORM", "React (Vite)", "CSS", "Axios", "Prettier"],
    github: "https://github.com/arycodes0/HaiFinance",
    live: null,
    media: [
      { type: "image" as const, src: "/projects/haibank-1.png" },
      { type: "image" as const, src: "/projects/haibank-2.png" },
    ],
    accent: "from-amber-400/30 to-transparent",
  },
  {
    id: 3,
    name: "Raincoat",
    description:
      "Widget conversacional de seguros que utiliza Google Maps y hexágonos H3 para visualizar ubicaciones aseguradas, verificar direcciones y calcular riesgos paramétricos.",
    tags: ["Next.js", "React", "Google Maps API", "H3", "Supabase", "LangGraph", "Claude", "JavaScript", "CSS", "Vercel"],
    github: null,
    live: null,
    media: [
      { type: "image" as const, src: "/projects/raincoat-1.png" },
      { type: "image" as const, src: "/projects/raincoat-2.png" },
    ],
    accent: "from-stone-400/30 to-transparent",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = project.media.length > 1;
  const current = project.media[imgIndex];

  const prevImage = () =>
    setImgIndex((i) => (i - 1 + project.media.length) % project.media.length);
  const nextImage = () =>
    setImgIndex((i) => (i + 1) % project.media.length);

  return (
    <article className="group relative flex flex-col lg:flex-row bg-card border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300">
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent} group-hover:opacity-100 opacity-60 transition-opacity z-10`} />

      {/* Preview image */}
      <div className="relative h-72 sm:h-96 lg:h-[32rem] lg:w-3/5 w-full bg-background border-b lg:border-b-0 lg:border-r border-border overflow-hidden flex-shrink-0">
        {current.type === "video" ? (
          <video
            src={current.src}
            controls
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <Image
            src={current.src}
            alt={`Captura de pantalla de ${project.name}`}
            fill
            className="object-contain"
          />
        )}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/80 border border-border text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/80 border border-border text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {project.media.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === imgIndex ? "bg-accent" : "bg-background/80 border border-border"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1 lg:w-2/5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-background border border-border flex items-center justify-center">
              <span className="font-mono text-accent text-xs font-bold">
                {String(project.id).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-sans font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-200">
              {project.name}
            </h3>
          </div>

          {/* Links */}
          {(project.github || project.live) && (
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver proyecto"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-background text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">
            // 01. proyectos
          </span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl mt-3 text-foreground">
            Trabajos Destacados
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            Proyectos donde la ingeniería de software se une con inteligencia
            artificial para resolver problemas reales.
          </p>
        </div>

        {/* Cards list */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
