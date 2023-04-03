import { defineConfig } from "vitepress";

import sidebar from "./sidebar";

export default defineConfig({
  title: "Floralink",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  description:
    "Tools und Wissenssammlung für floristische und vegetationskundliche Erfassungen",
  lastUpdated: true,
  appearance: "dark",
  lang: "de-DE",
  base: "/info/",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      {
        text: "Wissenssammlung",
        link: "/",
      },
      {
        text: "Floralink-Handbuch",
        link: "https://flora-link.de/docs",
      },
      {
        text: "Floralink",
        link: "https://flora-link.de",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/floralink" }],
    sidebar,
  },
});
