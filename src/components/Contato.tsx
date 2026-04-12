"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export function Contato() {
  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-6 rounded-xl border border-accent/60 bg-surface p-6 md:p-8"
      >
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Contato
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Vamos construir algo relevante
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Estou disponível para colaborar em produtos digitais com foco em
            arquitetura sólida, experiência refinada e entregas consistentes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="https://wa.me/5511934061677"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </Link>

          <Link
            href="mailto:ograciana1@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-accent bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground"
          >
            <Mail className="h-4 w-4" />
            ograciana1@gmail.com
          </Link>

          <Link
            href="https://www.linkedin.com/in/olívia-lourenço-2405421b9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center rounded-md border border-accent bg-background p-2.5 text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/olivialourenco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center rounded-md border border-accent bg-background p-2.5 text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
