# Portfólio Dev - Olívia Lourenço

Aplicação web desenvolvida com Next.js para apresentar perfil profissional, trajetória e projetos de software, com foco em performance, design responsivo e boa experiência de navegação.

## Visão Geral

Este repositório contém um portfólio pessoal com página única (single-page experience) organizada em seções:

- **Início:** apresentação e chamada para navegação
- **Sobre mim:** trajetória profissional e stack técnica
- **Projetos:** vitrine de projetos com mídia, tags e detalhes técnicos
- **Contato:** canais diretos (WhatsApp, e-mail, LinkedIn e GitHub)

## Principais Funcionalidades

- Navegação fixa com menu desktop e mobile
- Seções com âncoras (`#inicio`, `#projetos`, `#contato`)
- Grid de projetos com diferentes tipos de mockup (phone/browser)
- Destaque visual para projeto com deploy público
- Animações de entrada e interação com Framer Motion
- Metadados SEO e social (Open Graph, Twitter e manifest)
- Geração de ícone e imagem Open Graph via rotas de metadata do Next.js

## Arquitetura do Projeto

Estrutura principal:

```text
.
├─ public/
│  └─ media/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ manifest.ts
│  │  ├─ icon.tsx
│  │  └─ opengraph-image.tsx
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ SobreMim.tsx
│  │  ├─ ProjectGrid.tsx
│  │  └─ Contato.tsx
│  ├─ constants/
│  │  └─ projects.ts
│  └─ lib/
│     └─ cn.ts
├─ package.json
└─ next.config.ts
```

## Tecnologias Utilizadas

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React e React Icons
- **Qualidade de código:** ESLint (config Next.js)

## Como Rodar Localmente

### 1) Pré-requisitos

- Node.js (recomendado: versão LTS atual compatível com Next.js 16)
- npm

### 2) Instalação

```bash
npm install
```

### 3) Configuração de ambiente

Crie um arquivo `.env.local` na raiz (opcional para desenvolvimento local):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> Se essa variável não for definida, o projeto usa um fallback no código para metadados.

### 4) Executar em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 5) Build e execução em produção

```bash
npm run build
npm run start
```

### 6) Lint

```bash
npm run lint
```

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera build de produção
- `npm run start`: inicia a aplicação em modo produção
- `npm run lint`: executa verificação de lint

## Variáveis de Ambiente

Variáveis atualmente utilizadas no código:

- `NEXT_PUBLIC_SITE_URL`: URL pública base para metadados/canonical

## Segurança e Boas Práticas

- Não commitar arquivos com segredos (`.env`, tokens, chaves privadas).
- Este projeto usa apenas variável pública (`NEXT_PUBLIC_*`) para metadados de URL base.
- Informações de contato exibidas na interface são públicas por definição de portfólio.
- Links externos abertos em nova aba utilizam `rel="noopener noreferrer"`.

## Observações

- O repositório representa o frontend do portfólio.
- Não há backend próprio, banco de dados local ou serviços obrigatórios para subir a aplicação.

Portifólio disponível no link: [https://olivia-lourenco.vercel.app/](https://olivia-lourenco.vercel.app/)



