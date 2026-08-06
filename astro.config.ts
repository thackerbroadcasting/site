import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import starlight from '@astrojs/starlight';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  server: {
    host: '127.0.0.1',
    port: 4321,
  },

  integrations: [
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
          'businessman'
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { lightningcss: { minify: true } },
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

    starlight({
      title: 'Thacker Broadcasting Docs',
      favicon: './src/assets/favicons/favicon.svg',
      editLink: {
        baseUrl: 'https://github.com/thackerbroadcasting/site/edit/main/',
      },
      customCss: [
        './src/assets/styles/starlight.css',
      ],
      lastUpdated: true,
      disable404Route: true,
      sidebar: [
        {
          label: 'Legal',
          items: [{ autogenerate: { directory: 'legal' } }],
          collapsed: true,
        },
        {
          label: 'Platform Guides',
          items: [{ autogenerate: { directory: 'platform-guides' } }],
          collapsed: true,
        },
        {
          label: 'Advanced',
          items: [{ autogenerate: { directory: 'advanced' } }],
          collapsed: true,
        },
        {
          label: 'FAQs',
          link: '/faqs',
        },
        {
          label: 'MSP',
          items: [{ autogenerate: { directory: 'msp/policies' } }],
          collapsed: true,
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/thackerbroadcasting' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/thackbroadcast' },
        { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/thackerbroadcasting' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/thackerbroadcasting' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@ThackerBroadcastingStudios' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/thacker-broadcasting' }, 
      ],
      logo: {
        dark: './src/assets/images/logo/logo-dark.svg',
        light: './src/assets/images/logo/logo-light.svg',
        replacesTitle: true,
      },
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    dangerouslyProcessSVG: true,
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});