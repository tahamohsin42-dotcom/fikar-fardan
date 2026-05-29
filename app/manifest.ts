import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             "Fikr Fardan Foundation",
    short_name:       "Fikr Fardan",
    description:      "Empowering Youth Through Skills, Opportunity & Impact",
    start_url:        "/",
    display:          "standalone",
    background_color: "#0D0520",
    theme_color:      "#6B2D8F",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
