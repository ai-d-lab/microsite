import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.goosplit.com",
  base: "/",
  experimental: {
    assets: true,
  },
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    svelte(),
  ],
  vite: {
    ssr: {
      noExternal: ["bytemd"],
    },
  },
  image: {
    service: sharpImageService(),
  },
});
