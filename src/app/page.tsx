import { Contato } from "@/components/Contato";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SobreMim } from "@/components/SobreMim";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SobreMim />
      <ProjectGrid projects={projects} />
      <Contato />
    </main>
  );
}
