import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olívia Portfólio",
    short_name: "Olívia Portfólio",
    description:
      "Portfólio de Olívia Lourenço, Desenvolvedora FullStack focada em sistemas robustos e interfaces de alta performance.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
