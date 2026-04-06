// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sendu',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-vivid-green.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-vivid-green.svg', media: '(prefers-color-scheme: dark)' }
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
