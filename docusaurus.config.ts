import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const config: Config = {
  title: 'Write-ing',
  tagline: '김태중 프론트엔드 개발 블로그',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://te-ing.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/te-ing-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'te-ing', // Usually your GitHub org/user name.
  projectName: 'te-ing-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          path: 'til',
          routeBasePath: 'til',
          showReadingTime: true,
          readingTime: ({ content, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '김태중 블로그',
      logo: {
        alt: 'te-ing Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/til', label: 'TIL', position: 'left' },
        { to: '/problem', label: 'Problem', position: 'left' },
        { to: '/think', label: 'Think', position: 'left' },
        { to: '/aboutMe', label: 'About Me', position: 'right' },
        {
          href: 'https://github.com/te-ing',
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
              label: 'TIL',
              to: '/til',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:hi2177@naver.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Velog',
              to: 'https://velog.io/@te-ing',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/te-ing/te-ing-blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} te-ing, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'think',
        routeBasePath: 'think',
        path: 'think',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'problem',
        routeBasePath: 'problem',
        path: 'problem',
      },
    ],
  ],
};

export default config;
