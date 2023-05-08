import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ai-d-lab.github.io",
  base: "/",
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
