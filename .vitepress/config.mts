import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Floralink Info",
  description: "Wissenssammlung über botanische Erfassungen und deren Analyse",
  lastUpdated: true,
  lang: "de-DE",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Wissenssammlung", link: "/" },
      { text: "Abfrage in Floralink", link: "https://www.flora-link.de/query" },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/floralink/info" },
    ],
    sidebar: [
      {
        text: "Erfassungen",
        collapsed: false,
        items: [
          {
            text: "Floristische Kartierung",
            collapsed: true,
            items: [
              {
                text: "Methodik",
                link: "/",
                // link: "/erfassungen/floristische-kartierung/",
              },
              {
                text: "Auswertungen",
                link: "/erfassungen/floristische-kartierung/auswertungen/",
              },
              {
                text: "Verzerrungen",
                link: "/erfassungen/floristische-kartierung/verzerrungen/",
              },
            ],
          },
          // {
          //   text: "Vegetationsaufnahmen",
          //   collapsed: false,
          // },
          {
            text: "Taxonomische Konzepte",
            link: "/erfassungen/taxonomische-referenz/",
          },
        ],
      },
      {
        text: "Taxonspezifische Daten",
        collapsed: false,
        items: [
          {
            text: "Taxonspezifische Daten",
            link: "/taxonspezifische-daten/",
          },
          {
            text: "Ökologische Zeigerwerte",
            collapsed: true,
            items: [
              {
                text: "Ellenbergsche Zeigerwerte",
                link: "/taxonspezifische-daten/oekologische-zeigerwerte/",
              },
              {
                text: "Auswertungen",
                link: "/taxonspezifische-daten/oekologische-zeigerwerte/auswertungen/",
              },
              {
                text: "Aussagekraft",
                link: "/taxonspezifische-daten/oekologische-zeigerwerte/aussagekraft/",
              },
            ],
          },
        ],
      },
      {
        text: "Datenbanken",
        collapsed: true,
        items: [
          {
            text: "Datenbanken in der Geobotanik",
            link: "/datenbanken/",
          },
          {
            text: "Taxonomische Referenzdatenbanken",
            link: "/datenbanken/taxonreferenz/",
          },
          {
            text: "Taxonspezifische Datenbanken",
            link: "/datenbanken/taxonspezifisch/",
          },
          {
            text: "Erfassungsdatenbanken",
            link: "/datenbanken/erfassungsdaten/",
          },
        ],
      },
      {
        text: "Software",
        collapsed: true,
        items: [
          {
            text: "für Erfassungsdaten",
            link: "/software/",
          },
          {
            text: "für floristische Daten",
            link: "/software/floristische-daten/",
          },
          {
            text: "für Vegetationsaufnahmen",
            link: "/software/vegetationsaufnahmen/",
          },
        ],
      },
    ],
  },
});
