// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  css: [
    "~/assets/fonts.css",
    "~/assets/main.css",
    "animate.css/animate.min.css",
  ],
});
