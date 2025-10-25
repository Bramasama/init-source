import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.initsource.example", // change later
  integrations: [sitemap()],
  output: "static"
});
