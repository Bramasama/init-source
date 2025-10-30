import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://initsource.co.uk',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
});
