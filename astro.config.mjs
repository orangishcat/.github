// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from "@astrojs/markdown-remark";
  import remarkObsidianImages, { rehypeImagesAvif } from "./src/plugins/remark-obsidian-images.mjs";
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://orangishcat.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
      processor: unified({
        remarkPlugins: [remarkObsidianImages],
        rehypePlugins: [rehypeImagesAvif],
      }),
    },
  vite: {
    plugins: [tailwindcss()]
  }
});
