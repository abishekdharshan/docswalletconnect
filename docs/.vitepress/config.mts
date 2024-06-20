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

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Intro", link: "/overview/intro" },
          { text: "Native Account Abstraction", link: "/main-features/native-account-abstraction" },
          { text: "Fee Model", link: "/main-features/fee-model" },
          { text: "Security and Finality", link: "/main-features/security-and-finality" },
          { text: "zkSync Stack", link: "/main-features/zksync-stack" },
          { text: "Differences between Ethereum and Zero", link: "/main-features/differences-between-ethereum-and-zero" },
        ],
      },
      {
        text: "Build on Zero",
        items: [
          {
            text: "Smart-Contract Development",
            items: [
              {
                text: "Deploy a smart-contract to Zero",
                link: "/build-on-zero/deploy-smart-contract-to-zero",
              },
            ],
          },
          { text: "System Contracts", link: "/main-features/system-contracts" },
          { text: "Network Information", link: "/build-on-zero/network-information" },
          { text: "Build a dApp on Zero Network", link: "/build-on-zero/build-a-dapp-on-zero-network" },
          {
            text: "Tooling",
            items: [
              { text: "Block Explorer", link: "/build-on-zero/block-explorer" },
              { text: "Testnet Faucets", link: "/build-on-zero/testnet-faucets" },
            ],
          },
          { text: "Tutorials", link: "/build-on-zero/tutorials" },
        ],
      },
      {
        text: "Guide",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zeriontech/zero-docs" },
    ],
  },
});
