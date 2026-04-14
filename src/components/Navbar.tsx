"use client";

import Link from "next/link";
import { useState } from "react";
import { Circle, Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#inicio"
          className="font-mono text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
        >
          Olívia Lourenço
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group inline-flex items-center rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Circle className="mr-1 h-2.5 w-2.5 fill-current text-accent transition-colors group-hover:text-foreground" />
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent/70 bg-surface/70 text-muted transition-colors hover:text-foreground md:hidden"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-accent/60 bg-background/95 px-6 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleCloseMenu}
                className="group inline-flex items-center rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <Circle className="mr-2 h-2.5 w-2.5 fill-current text-accent transition-colors group-hover:text-foreground" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
