"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const ctaBase =
  "inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:pt-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="order-2 space-y-6 md:order-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Desenvolvedora FullStack
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Interfaces sóbrias, sistemas robustos e performance como requisito.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Sou a Olívia Lourenço, em dezembro de 2025 me formei em Análise e Desenvolvimento de Sistemas 
            pela Faculade SENAI de Tecnologia Mecatrônica, sou
            uma Desenvolvedora FullStack de 23 anos e
            moro em São Bernardo do Campo - SP. Minha jornada é movida pela
            curiosidade técnica e pelo desejo de construir soluções que unam
            arquitetura limpa a uma experiência de usuário impecável.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projetos"
              className={cn(
                ctaBase,
                "border-accent bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
              )}
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contato"
              className={cn(
                ctaBase,
                "border-accent/80 bg-surface text-muted hover:border-accent hover:text-foreground",
              )}
            >
              Falar comigo
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="group relative mx-auto max-w-xs overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 md:ml-auto md:mr-0 md:max-w-sm">
            <Image
              src="/media/foto.jpg"
              alt="Olívia Graciana"
              width={2316}
              height={2556}
              priority
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
