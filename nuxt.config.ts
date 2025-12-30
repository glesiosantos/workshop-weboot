// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteId: '8a1da6bd-93f7-476d-9759-d3674500dfe0'
    }
  },
  plugins: ['~/plugins/tracker.client.ts']
})
