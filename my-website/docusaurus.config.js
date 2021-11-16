// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Numerical Analysis',
  tagline: 'Methods and more methods',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Kirbo.ico',
  organizationName: 'Vasitos Math', // Usually your GitHub org/user name.
  projectName: 'Numerical Analysis ', // Usually your repo name.

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          editUrl:'https://github.com/egonzalezt/NumericalAnalysis/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'nteam',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'team',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './team',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Numerical',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Methods',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/team', label: 'About', position: 'left'},
          {
            href: 'https://github.com/egonzalezt/NumericalAnalysis',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Methods (Theory)',
            items: [
              {
                label: 'Nonlinear equations',
                to: '/docs/Methods01/incrementalSch',
              },
              {
                label: 'Systems of linear equations',
                to: '/docs/Methods02/gausssimp',
              },
              {
                label: 'Interpolation',
                to: '/docs/Methods03/lagrange',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'About the subjet',
                href: 'http://webapps.eafit.edu.co/admisiones/contenidos/verDocumentoContenidoPublico.do?matCodigo=ST0256&matSemestre=20212&tipoDocumento=3&nf'
              }
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
                href: 'https://github.com/egonzalezt/NumericalAnalysis',
              },
              {
                label: 'About this project',
                to: '/team',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vasitos, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
