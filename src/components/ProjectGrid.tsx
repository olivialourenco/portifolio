"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project } from "@/constants/projects";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

function BrowserMockup({ videoUrl }: Pick<Project, "videoUrl">) {
  return (
    <div className="overflow-hidden rounded-lg border border-accent/70 bg-surface shadow-surface">
      <div className="flex items-center gap-2 border-b border-accent/70 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
      </div>

      <div className="relative aspect-video w-full bg-background">
        {videoUrl ? (
          <video
            className="h-full w-full object-cover"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}
      </div>
    </div>
  );
}

function WipBrowserMockup({
  images,
  logo,
  status,
  technicalDetails,
  tags,
}: Pick<Project, "images" | "logo" | "status" | "technicalDetails" | "tags">) {
  const [primaryImage, secondaryImage] = images ?? [];

  return (
    <motion.div initial="rest" whileHover="hover" className="relative">
      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/60" />
          </div>
          {logo ? (
            <div className="relative h-5 w-20 opacity-80">
              <Image
                src={logo}
                alt="Logo Notatus"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          ) : null}
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
          {primaryImage ? (
            <Image
              src={primaryImage}
              alt="Preview principal do Notatus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : null}

          {secondaryImage ? (
            <div className="absolute bottom-3 right-3 w-28 overflow-hidden rounded-md border border-zinc-700 bg-zinc-950/90 p-1 md:w-36">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-800">
                <Image
                  src={secondaryImage}
                  alt="Preview secundaria do Notatus"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}

          <motion.div
            className="absolute inset-0 z-10 flex flex-col justify-end gap-3 bg-zinc-950/20 p-4 backdrop-blur-0"
            variants={{
              rest: { opacity: 0, backdropFilter: "blur(0px)" },
              hover: {
                opacity: 1,
                backdropFilter: "blur(4px)",
                transition: { when: "beforeChildren", staggerChildren: 0.08 },
              },
            }}
          >
            <motion.div
              className="flex flex-wrap gap-2"
              variants={overlayItemVariants}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded border bg-background/95 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em]",
                    tag === "React 19" || tag === "Vite 7"
                      ? "border-zinc-500 text-zinc-100"
                      : "border-accent/70 text-muted",
                  )}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.ul
              className="space-y-1.5 rounded-lg border border-zinc-700 bg-zinc-950/85 p-3 text-xs leading-relaxed text-zinc-200"
              variants={overlayItemVariants}
            >
              {technicalDetails.map((detail) => (
                <li key={detail} className="text-[11px] text-zinc-300">
                  {detail}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {status ? (
        <div className="absolute left-3 top-3 z-20 rounded-full border border-zinc-700 bg-zinc-950/95 px-2 py-0.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
            {status}
          </span>
        </div>
      ) : null}
    </motion.div>
  );
}

function SaasHybridMockup({
  imageUrl,
  videoUrl,
}: {
  imageUrl: string;
  videoUrl: string;
}) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/60" />
        </div>

        <div className="relative aspect-video w-full bg-zinc-950">
          <Image
            src={imageUrl}
            alt="Preview da aplicacao Escritor SEO Pro"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-8 right-4 w-[20rem] max-w-[72%] overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-950 p-2.5 shadow-xl"
        variants={{
          rest: { scale: 1, y: 0 },
          hover: { scale: 1.06, y: -2 },
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-zinc-800/90" />
        <div className="relative aspect-[384/832] overflow-hidden rounded-[2rem] border border-zinc-800 bg-black">
          <video
            src={videoUrl}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </motion.div>
    </div>
  );
}

const overlayVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const overlayItemVariants = {
  rest: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

function PhoneMockup({
  tags,
  technicalDetails,
  videoUrl,
  showMobileBadge = true,
}: Pick<Project, "tags" | "technicalDetails" | "videoUrl" | "showMobileBadge">) {
  return (
    <motion.div initial="rest" whileHover="hover" className="relative">
      <div className="mx-auto max-w-[20rem]">
        <motion.div
          className="relative rounded-[2.5rem] border border-zinc-800 bg-zinc-950 p-2.5 shadow-surface ring-1 ring-inset ring-transparent transition-colors duration-300 group-hover:ring-zinc-700/80"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.01 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-zinc-800/90" />

          {showMobileBadge ? (
            <div className="absolute left-5 top-5 z-20 rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                Mobile-First
              </span>
            </div>
          ) : null}

          <div className="relative aspect-[384/832] overflow-hidden rounded-[2rem] border border-zinc-800 bg-black">
            <motion.video
              src={videoUrl}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: 0.3 },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            <motion.div
              className="absolute inset-0 z-10 flex flex-col justify-end gap-3 p-4"
              variants={overlayVariants}
            >
              <motion.div
                className="flex flex-wrap gap-2"
                variants={overlayItemVariants}
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-accent/70 bg-background/95 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.ul
                className="space-y-1.5 rounded-lg border border-accent/60 bg-background/90 p-3 text-xs leading-relaxed text-zinc-200"
                variants={overlayItemVariants}
              >
                {technicalDetails.map((detail) => (
                  <li key={detail} className="text-[11px] text-zinc-300">
                    {detail}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <section
      id="projetos"
      className={cn("mx-auto w-full max-w-6xl space-y-8 px-6 py-16", className)}
    >
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Projetos
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Entregas com foco em clareza e escala
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-accent/60 bg-surface p-4"
            animate="rest"
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
          >
            {project.status ? (
              <WipBrowserMockup
                images={project.images}
                logo={project.logo}
                status={project.status}
                tags={project.tags}
                technicalDetails={project.technicalDetails}
              />
            ) : project.images?.[0] ? (
              <SaasHybridMockup
                imageUrl={project.images[0]}
                videoUrl={project.videoUrl ?? ""}
              />
            ) : project.mockup === "phone" ? (
              <PhoneMockup
                videoUrl={project.videoUrl ?? ""}
                tags={project.tags}
                technicalDetails={project.technicalDetails}
                showMobileBadge={project.showMobileBadge}
              />
            ) : (
              <BrowserMockup videoUrl={project.videoUrl} />
            )}

            <div className="mt-4 space-y-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  {project.deployUrl ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Live SaaS
                    </span>
                  ) : null}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {project.subtitle}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {!project.status ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded border bg-background px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em]",
                          tag === "React 19" || tag === "Vite 7"
                            ? "border-zinc-500 text-zinc-100"
                            : "border-accent/80 text-muted",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 border-l border-accent/70 pl-3">
                    {project.technicalDetails.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs leading-relaxed text-zinc-300"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {project.deployUrl ? (
                <Link
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-zinc-200 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                >
                  Visitar Aplicacao
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
