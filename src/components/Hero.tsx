"use client";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — text */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 animate-fade-in-up"
              style={{ opacity: 0 }}
            >
              <span className="font-mono text-accent text-xs tracking-widest uppercase">
                // full-stack &amp; machine learning
              </span>
            </div>

            <h1
              className="font-sans font-extrabold leading-none mb-6 animate-fade-in-up delay-100"
              style={{ opacity: 0 }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
                ARYAM M.
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
                ALVAREZ
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-accent">
                RAMOS
              </span>
            </h1>

            <p
              className="text-muted text-lg sm:text-xl max-w-md leading-relaxed mb-8 animate-fade-in-up delay-200"
              style={{ opacity: 0 }}
            >
              Construyo sistemas inteligentes que unen el poder de los datos
              con experiencias de usuario excepcionales.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up delay-300"
              style={{ opacity: 0 }}
            >
              <a
                href="#proyectos"
                className="px-6 py-3 bg-accent text-background font-bold text-sm rounded hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#proyectos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 border border-border text-foreground/80 font-medium text-sm rounded hover:border-accent hover:text-accent transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contactar
              </a>
            </div>

          </div>

          {/* Right — terminal card */}
          <div
            className="hidden lg:flex justify-center animate-fade-in-up delay-500"
            style={{ opacity: 0 }}
          >
            <div className="animate-float w-full max-w-sm">
              <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-accent/70" />
                  <span className="ml-3 font-mono text-muted text-xs">
                    portfolio.py
                  </span>
                </div>

                {/* Code */}
                <pre className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-muted">
                      {"# Desarrollador Full-Stack & ML\n"}
                    </span>
                    <span className="text-accent">import</span>
                    <span className="text-foreground/80">{" torch\n"}</span>
                    <span className="text-accent">import</span>
                    <span className="text-foreground/80">{" numpy as np\n\n"}</span>
                    <span className="text-amber-700">class</span>
                    <span className="text-accent">{" Developer"}</span>
                    <span className="text-foreground/80">{":\n"}</span>
                    <span className="text-foreground/80">{"  name "}</span>
                    <span className="text-muted">= </span>
                    <span className="text-orange-600">{'"Aryam"\n'}</span>
                    <span className="text-foreground/80">{"  skills "}</span>
                    <span className="text-muted">= </span>
                    <span className="text-foreground/80">{"[\n"}</span>
                    <span className="text-orange-600">
                      {'    "Full-Stack",\n'}
                    </span>
                    <span className="text-orange-600">
                      {'    "Machine Learning",\n'}
                    </span>
                    <span className="text-orange-600">{'    "APIs",\n'}</span>
                    <span className="text-foreground/80">{"  ]\n\n"}</span>
                    <span className="text-amber-700">  def</span>
                    <span className="text-blue-600">{" build"}</span>
                    <span className="text-foreground/80">{"(self):\n"}</span>
                    <span className="text-accent">{"    return"}</span>
                    <span className="text-orange-600">
                      {' "sistemas inteligentes"'}
                    </span>
                    <span className="text-muted animate-blink">█</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in-up delay-700" style={{ opacity: 0 }}>
          <span className="text-muted text-xs font-mono tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
