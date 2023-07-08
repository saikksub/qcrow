// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: true
  },
  runtimeConfig: {
    GitHubClientId: '',
    GitHubClientSecret: ''
  }
})
