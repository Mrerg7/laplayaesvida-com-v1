import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://laplayaesvida.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://laplayaesvida.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        if (item.url.includes('/guides/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
  server: {
    host: true,
    port: 43123,
  },
  vite: {
    server: {
      host: true,
      port: 43123,
      strictPort: true,
    },
  },
});
