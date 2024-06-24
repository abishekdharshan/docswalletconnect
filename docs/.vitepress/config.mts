import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/zero-docs/',
  title: 'ZERϴ Network',
  description: 'Docs and developer portal for Zero Network',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/overview/intro' },
      { text: 'Guides', link: '/build-on-zero/deploy-smart-contract-to-zero' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Intro', link: '/overview/intro' },
          { text: 'Native Account Abstraction', link: '/main-features/native-account-abstraction' },
          { text: 'Fee Model', link: '/main-features/fee-model' },
          { text: 'Security and Finality', link: '/main-features/security-and-finality' },
          { text: 'zkSync Stack', link: '/main-features/zksync-stack' },
          { text: 'Differences between Ethereum and ZERϴ', link: '/main-features/differences-between-ethereum-and-zero' },
        ],
      },
      {
        text: 'Build on ZERϴ',
        items: [
          {
            text: 'Smart-Contract Development',
            collapsible: true,
            collapsed: false,
            items: [
              {
                text: 'Deploy a smart-contract to ZERϴ',
                link: '/build-on-zero/deploy-smart-contract-to-zero',
              },
              {
                text: 'Build a dApp on ZERϴ Network',
                link: '/build-on-zero/build-a-dapp-on-zero-network',
              }
            ],
          },
          { text: 'System Contracts', link: '/main-features/system-contracts' },
          { text: 'Network Information', link: '/build-on-zero/network-information' },
          {
            text: 'Tooling',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Block Explorer', link: '/build-on-zero/block-explorer' },
              { text: 'Testnet Faucets', link: '/build-on-zero/testnet-faucets' },
            ],
          },
          { text: 'Claim ZERO', link: '/build-on-zero/claim-zero' },
        ],
      },
      {
        text: 'Other Docs',
        items: [
          { text: 'Zerion API', link: '/other-docs/zerion-api' },
          { text: 'Audits', link: '/other-docs/audits' },
          { text: 'Branding Guidelines', link: '/other-docs/branding-guidelines' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zeriontech/zero-docs' },
    ],
  },
});
