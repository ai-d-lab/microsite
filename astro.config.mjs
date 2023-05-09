import { defineConfig, sharpImageService } from "astro/config";
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
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  image: {
    service: sharpImageService(),
  },
});
