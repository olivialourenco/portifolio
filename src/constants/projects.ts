export type Project = {
  title: string;
  subtitle: string;
  status?: string;
  description: string;
  videoUrl?: string;
  deployUrl?: string;
  images?: string[];
  logo?: string;
  showMobileBadge?: boolean;
  tags: string[];
  technicalDetails: string[];
  mockup: "phone" | "browser";
};

export const projects: Project[] = [
  {
    title: "Projeto Acadêmico - Doce Encanto",
    subtitle: "Brigaderia Artesanal",
    description:
      "E-commerce mobile-first completo com vitrine por categorias, carrinho sincronizado em tempo real e lista de desejos.",
    videoUrl: "/media/app_DoceEncanto.mp4",
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "PostgreSQL"],
    technicalDetails: [
      "Sincronizacao de catalogo e pedidos via Supabase (PostgreSQL).",
      "Integracao com API ViaCEP para preenchimento automatico de enderecos.",
      "Persistencia de sessao e ID anonimo com AsyncStorage.",
      "Simulacao de frete baseada em peso e CEP.",
      "Interface mobile com React Native Paper e tipografia Montserrat.",
    ],
    showMobileBadge: true,
    mockup: "phone",
  },
  {
    title: "Projeto Pessoal - Escritor SEO Pro",
    subtitle: "SaaS de IA para E-commerce",
    description:
      "Plataforma escalavel para geracao de descricoes de produtos otimizadas para SEO utilizando LLaMA 3.3 70B via Groq API.",
    videoUrl: "/media/Escritor_Seo.mp4",
    deployUrl: "https://escritor-seo.vercel.app/",
    tags: ["Next.js 16", "Stripe", "Clerk", "Groq API", "Tailwind CSS v4"],
    technicalDetails: [
      "Sistema de assinaturas PRO com checkout e gestao via Stripe Customer Portal.",
      "Autenticacao e controle de cotas de uso integrado com Clerk Metadados.",
      "Geracao de conteudo via IA (LLaMA 3.3) com processamento via Serverless Functions.",
      "Arquitetura SEO avancada com sitemap dinamico e metadados OpenGraph otimizados.",
      "Interface adaptavel com suporte nativo a Dark Mode e renderizacao Markdown.",
    ],
    showMobileBadge: false,
    mockup: "phone",
  },
  {
    title: "Notatus",
    subtitle: "Marketplace para Tatuadores",
    status: "Em Desenvolvimento",
    description:
      "Plataforma Single Page Application (SPA) que conecta clientes a tatuadores, com gestao de orcamentos e portfolios em tempo real.",
    images: ["/media/notatus1.png", "/media/notatus2.png"],
    logo: "/media/logonotatus.png",
    tags: ["React 19", "Vite 7", "Supabase", "PostgreSQL", "Tailwind CSS"],
    technicalDetails: [
      "Arquitetura Jamstack com comunicacao direta via Supabase SDK.",
      "Fluxo de autenticacao dual: Google OAuth (PKCE) e e-mail/senha com hash bcryptjs.",
      "Seguranca de dados implementada via Row Level Security (RLS) no PostgreSQL.",
      "Sistema de upload e crop de imagens de referencia para orcamentos.",
      "Integracao de contato direto via Deep Links de WhatsApp.",
    ],
    mockup: "browser",
  },
];
