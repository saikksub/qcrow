// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  }
})
