import Link from "next/link";
import { Circle } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#inicio"
          className="font-mono text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
        >
          Dev.FullStack
        </Link>

        <nav className="flex items-center gap-1">
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
      </div>
    </header>
  );
}
