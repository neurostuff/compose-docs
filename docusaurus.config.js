// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neurosynth Compose Docs',
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
            'https://github.com/neurostuff/compose-docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Change this w/ edit URL
          editUrl:
            'https://github.com/neurostuff/compose-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Neurosynth Compose',
        logo: {
          alt: 'Neurosynth Compose logo',
          src: 'img/synth.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/about',
            position: 'left',
            label: 'Docs',
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
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'NeuroStars',
                href: 'https://neurostars.org/tag/neuroscout',
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
