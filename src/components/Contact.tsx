"use client";

import { useState } from "react";

const CONTACT_EMAIL = "aryamalvrz@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    const subject = `Nuevo mensaje de contacto de ${name}`;
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  };

  return (
    <section id="contacto" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <div>
            <span className="font-mono text-accent text-xs tracking-widest uppercase">
              // 03. contacto
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl mt-3 mb-6 text-foreground">
              Hablemos
            </h2>
            <p className="text-muted leading-relaxed max-w-md mb-10">
              ¿Tienes un proyecto en mente o quieres explorar cómo el machine
              learning puede transformar tu producto? Escríbeme y lo conversamos.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "aryamalvrz@gmail.com",
                  href: "mailto:aryamalvrz@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                  label: "github.com/arycodes0",
                  href: "https://github.com/arycodes0",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: "linkedin.com/in/alvarezaryam",
                  href: "https://www.linkedin.com/in/alvarezaryam/",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/40 transition-all duration-200">
                    {item.icon}
                  </div>
                  <span className="text-muted text-sm group-hover:text-accent transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status message */}
              {sent && (
                <div className="text-sm px-4 py-3 rounded-lg bg-emerald-50 border border-accent/30 text-emerald-700">
                  Se abrió Gmail en una nueva pestaña con el mensaje listo para enviar.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-accent text-background font-bold text-sm rounded hover:opacity-90 transition-all duration-200"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
