import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://abd-kabeer-site.vercel.app",
  output: "static",
  build: { inlineStylesheets: "auto" },
});
