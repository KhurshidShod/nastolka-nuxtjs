// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  build: {
    analyze: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],
});
