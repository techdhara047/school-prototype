import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://techdhara047.github.io",
  base: "school-prototype",
  integrations: [tailwind(), icon(), react()],
});
