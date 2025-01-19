// plugins/gtag.client.ts
import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  // Only enable on production builds (optional)
  const isProduction = process.env.NODE_ENV === 'production'

  nuxtApp.vueApp.use(VueGtag, {
    config: { id: 'G-R3EQ9GXZYY', params: { send_page_view: true } },
    pageTrackerScreenviewEnabled: true, 
    enabled: true,
    appName: 'FlexerBits'
  })
})
