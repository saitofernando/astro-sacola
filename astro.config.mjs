import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind({})],
  output: "static",
  site: "https://conservaregrafica.com.br",
  base: "/",
});
