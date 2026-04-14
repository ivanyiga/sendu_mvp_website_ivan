// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sendu: Embedded Banking',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/green-on-blue.svg' },
        { rel: 'apple-touch-icon', href: '/green-on-blue.svg' }
      ]
    }
  },
  css: ['~/assets/css/tokens.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tokens.css'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
