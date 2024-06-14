import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/zero-docs/",
  title: "Zero Network",
  description: "Docs and developer portal for Zero Network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/build-on-zero/deploy-smart-contract-to-zero" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [{ text: "Intro", link: "/overview/intro" }],
      },
      {
        text: "Build on Zero",
        items: [
          {
            text: "Smart-contract Development",
            items: [
              {
                text: "Deploy a smart-contract to Zero",
                link: "/build-on-zero/deploy-smart-contract-to-zero",
              },
            ],
          },
        ],
      },
      {
        text: "Guide",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
