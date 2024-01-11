import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ads Kit',
  tagline: 'Your All-in-One Advertising Solution! 🚀',
  favicon: 'img/SmallIcon.png',

  url: 'https://adskit.voxelbusters.com/',
  baseUrl: '/',

  organizationName: 'voxelbusters', 
  projectName: 'ads-kit-website', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          editUrl:
            'https://github.com/voxelbusters/ads-kit-website/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/voxelbusters/ads-kit-website/tree/main',
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
       tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ads Kit',
        logo: {
          alt: 'Ads Kit logo',
          src: 'img/SmallIcon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
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
                to: '/docs',
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
                href: 'https://github.com/voxelbusters/ads-kit-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Voxel Busters`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'], 
      },
      
    }),
};

export default config;
