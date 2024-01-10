// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ads KIT',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/SmallIcon.png',

  // Set the production url of your site here
  url: 'https://voxelbusters.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ads-kit-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'voxelbusters', // Usually your GitHub org/user name.
  projectName: 'ads-kit-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/voxelbusters/ads-kit-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/voxelbusters/ads-kit-docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: ['/'], 
        blogRouteBasePath: ['/blog'], 
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
       tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ads KIT',
        logo: {
          alt: 'ads KIT logo',
          src: 'img/SmallIcon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentations',
            items: [
              {
                label: 'Docs',
                to: '/ads-kit-docs/',
              },
              {
                label: 'Tutorials',
                to: 'https://adskit.voxelbusters.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'https://discord.gg/mp7fsmmC9n',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Voxel Busters',
                to: 'https://www.voxelbusters.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/voxelbusters/ads-kit-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Voxel Busters`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'], // Add C# to the list of languages
        
        // Load Prism language definition for C#
        // For example:
      },
      
    }),
};

export default config;
