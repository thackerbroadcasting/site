import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from '@playform/compress';
import starlight from '@astrojs/starlight';

import astrowind from './vendor/integration';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter.mjs';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    astroExpressiveCode(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'electrical-sensor',
          'multiple-devices',
          'gallery',
          'approval',
          'advertising',
          'shop',
          'template',
          'document',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
          'businessman',
        ],
      },
    }),

    starlight({
      title: 'Thacker Broadcasting Docs',
      favicon: './src/assets/favicons/favicon.svg',
      editLink: {
        baseUrl: 'https://github.com/thackerbroadcasting/redesign2/edit/main/',
      },
      customCss: [
        './src/assets/styles/starlight.css',
      ],
      lastUpdated: false,
      disable404Route: true,
      sidebar: [
        { label: 'Legal', autogenerate: { directory: '/legal' }},
        //{
          //label: 'Legal',
          //items: [
            //{ label: 'Overview', link: '/legal' },
            //{ label: 'Disclaimer', link: '/legal/disclaimer' },
            //{ label: 'Privacy Policy', link: 'legal/privacy-policy', badge: { text: 'Updated', variant: 'tip' } },
            //{ label: 'Terms and Conditions', link: '/legal/terms-conditions', badge: { text: 'Updated', variant: 'tip' } },
            //{ label: 'Cookie Policy', link: '/legal/cookies', badge: { text: 'Updated', variant: 'tip' } },
            //{ label: 'Acceptable Use Policy', link: '/legal/acceptable-use-policy', badge: { text: 'New', variant: 'note' } },
            //{ label: 'Refusal of Services', link: '/legal/refusal-of-services' }
          //],
        //},
        {
          label: 'Advanced',
          collapsed: true,
          autogenerate: { directory: 'advanced' },
        },
      ],
      social: {
        github: 'https://github.com/thackerbroadcasting',
        'x.com': 'https://x.com/thackbroadcast',
        instagram: 'https://instagram.com/thackerbroadcasting',
        facebook: 'https://www.facebook.com/thackerbroadcasting',
        youtube: 'https://www.youtube.com/@ThackerBroadcastingStudios',
        linkedin: 'https://www.linkedin.com/company/thacker-broadcasting',
      },
      logo: {
        dark: './src/assets/images/logo/logo-dark.svg',
        light: './src/assets/images/logo/logo-light.svg',
        replacesTitle: true,
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    service: squooshImageService(),
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
