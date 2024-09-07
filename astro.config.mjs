import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://school-prototype.netlify.app/',
  integrations: [tailwind(), icon(), react(), sitemap()]
});