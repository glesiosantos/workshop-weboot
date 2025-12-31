import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const siteId = config.public.siteId
  if (!siteId) return

  // const track = () => {
  //   fetch('http://localhost:54321/functions/v1/track-visit', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       siteId,
  //       page: window.location.pathname,
  //       referrer: document.referrer || null,
  //       userAgent: navigator.userAgent,
  //       device: window.innerWidth < 768 ? 'mobile' : 'desktop'
  //     })
  //   }).catch(() => {})
  // }
  const track = () => {}

  // primeira carga
  track()

  // SPA navigation
  const router = useRouter()
  router.afterEach(() => {
    track()
  })
})
