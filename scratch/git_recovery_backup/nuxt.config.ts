// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      formspreeIdWhitepaper: 'mrerepvg', // NUXT_PUBLIC_FORMSPREEE_ID_WHITEPAPER
      formspreeIdInvestors: 'mnjljpyj'   // NUXT_PUBLIC_FORMSPREEE_ID_INVESTORS
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sendu — Rails that make Ugandan earners visible',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/green-on-blue.svg' },
        { rel: 'apple-touch-icon', href: '/green-on-blue.svg' }
      ],
      script: [
        {
          defer: true,
          'data-domain': 'sendu.ug',
          src: 'https://plausible.io/js/script.outbound-links.tagged-events.js'
        }
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
