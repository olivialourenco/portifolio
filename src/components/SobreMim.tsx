"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Primeira Experiência como Programadora",
    description:
      "Atuei no front-end e back-end com C# e SQL, aplicando princípios de POO para garantir código modular e escalável.",
  },
];

const techStack = [
  "C#",
  "ASP.NET",
  "Java",
  "Python",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server | MySQL | PostgreSQL",
  "Scrum",
  "Kanban",
  "Supabase",
  "Git",
  "Claude",
  "Engenharia de Prompts (Cursor/GPT-4)",
];

export function SobreMim() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-4"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Sobre Mim
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          Minha Trajetória
        </h2>
        <p className="max-w-4xl text-sm leading-relaxed text-muted md:text-base">
        Sempre fui movida pela curiosidade de entender como a tecnologia funciona por dentro. 
        Minha jornada começou em 2022 no curso Técnico de Mecatrônica, onde escrevi minhas primeiras 
        linhas de código. O que era curiosidade virou objetivo: em 2024, ingressei em Análise e 
        Desenvolvimento de Sistemas para mergulhar de cabeça na engenharia de software. Em 2025, minha 
        primeira oportunidade profissional confirmou minha paixão por construir soluções completas como 
        Desenvolvedora FullStack
        </p>
      </motion.div>

      <div className="space-y-3">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
            className="relative rounded-lg border border-accent/60 bg-surface px-5 py-4 pl-8"
          >
            <span className="absolute left-3.5 top-5 h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="flex flex-wrap gap-2 pt-2"
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-accent/60 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
