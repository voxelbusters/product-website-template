import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Title',
  tagline: 'Tagline 🚀',
  favicon: '', //enter image path [add an image in static/img folder and write its path here for example : img/SmallIcon.png]

  url: '', //enter main url of site eg:https://adskit.voxelbusters.com/
  baseUrl: '/',

  organizationName: 'voxelbusters', 
  projectName: '', //enter github repo name

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
            '', //enter edit url eg:https://github.com/voxelbusters/ads-kit-website/tree/main
        },
        blog: {
          showReadingTime: true,
          editUrl:
          '', //enter edit url eg:https://github.com/voxelbusters/ads-kit-website/tree/main
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
    // [
    //   "docusaurus-plugin-papersaurus",
    //   {
    //     autoBuildPdfs: true,
    //     keepDebugHtmls: false,
    //     sidebarNames: ["tutorialSidebar"], // Replace with your actual sidebar names
    //     rootDocIds: [
    //       { version: "default", rootDocId: "start_overview" },
    //       // Add other versions if needed
    //     ],
    //     addDownloadButton: true,
    //     downloadButtonText: "Download as PDF",
    //     ignoreDocs: ["licenses"],
    //     stylesheets: [],
    //     scripts: [],
    //     coverPageHeader: `...`, // Add your HTML code here
    //     coverPageFooter: `...`, // Add your HTML code here
    //     getPdfCoverPage: (siteConfig, pluginConfig, pageTitle, version) => {
    //       return `...`; // Add your HTML code here
    //     },
    //     getPdfPageHeader: (siteConfig, pluginConfig, pageTitle) => {
    //       return `...`; // Add your HTML code here
    //     },
    //     getPdfPageFooter: (siteConfig, pluginConfig, pageTitle) => {
    //       return `...`; // Add your HTML code here
    //     },
    //     author: "Voxel Busters",
    //     footerParser: /© Voxel Busters\d{4}-\d{2}-\d{2}Page \d* \/ \d*/g,
    //   },
    // ],
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
        title: 'Tile',
        logo: {
          alt: 'Site logo',
          src: '',  //enter image path [add an image in static/img folder and write its path here for example : img/SmallIcon.png]
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
                to: '', //enter the main url eg:https://adskit.voxelbusters.com/
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: '', //enter the support link page
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
                href: '', //enter the github repo link
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
