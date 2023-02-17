// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neurosynth Compose Documentation',
  tagline: 'A platform for reproducible neuroimaging meta-analysis',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://neurostuff.github.io/',
  baseUrl: '/compose-docs/',

  // GitHub pages deployment config.
  organizationName: 'neurostuff', 
  projectName: 'compose-docs',
  deploymentBranch: 'master',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  // internalization
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Change this w/ edit URL
          editUrl:
            'https://github.com/neurostuff/compose-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Change this w/ edit URL
          editUrl:
            'https://github.com/neurostuff/compose/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Neurosynth Compose Docs',
        logo: {
          alt: 'Neurosynth Compose logo',
          src: 'img/synth.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/neurostuff/compose-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/neurosynth-compose',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/neurosynth',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/neurostuff/neurostore',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neuroinformatics Lab, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
