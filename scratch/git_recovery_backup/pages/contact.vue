<script setup>
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-vue-next'
import ContactRow from '~/components/ContactRow.vue'
import RoutingCard from '~/components/RoutingCard.vue'

useHead({
  title: 'Contact Sendu',
  meta: [
    { name: 'description', content: 'Reach the Sendu team in Kampala. Phone, email, WhatsApp.' },
    { property: 'og:title', content: 'Sendu — Rails that make Ugandan earners visible' },
    { property: 'og:description', content: 'Reach the Sendu team in Kampala. Phone, email, WhatsApp.' },
    { property: 'og:image', content: '/og-contact.jpg' },
    { name: 'twitter:image', content: '/og-contact.jpg' }
  ]
})

const WhatsAppIcon = defineComponent({
  render() {
    return h('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      innerHTML: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>'
    })
  }
})

const contacts = [
  { icon: Phone, label: 'Phone', value: '+256 708 629 489', href: 'tel:+256708629489' },
  { icon: WhatsAppIcon, label: 'WhatsApp', value: '+44 7913 836 424', href: 'https://wa.me/447913836424', external: true },
  { icon: Mail, label: 'Email', value: 'hello@sendu.ug', href: 'mailto:hello@sendu.ug' },
  { icon: MapPin, label: 'Office', value: 'Plot 5, Fifth St, Bugolobi, Uganda' }
]

const routes = [
  {
    headline: 'For SACCOs',
    body: 'Want to digitise your savings group? Call us or send a WhatsApp message. We will walk you through how Circle works and what onboarding looks like.',
    ctaLabel: 'WhatsApp us',
    ctaLink: 'https://wa.me/447913836424',
    external: true
  },
  {
    headline: 'For Investors',
    body: 'Sendu is raising a $1.5M pilot round. SEIS/EIS eligible via UK HoldCo. Request the deck.',
    ctaLabel: 'Investor enquiry',
    ctaLink: '/investors'
  },
  {
    headline: 'For Bank Partners',
    body: 'Interested in dormant account activation, Rating API access, or a design partnership? Speak to our partnerships team.',
    ctaLabel: 'Bank partnerships',
    ctaLink: '/banks'
  }
]
</script>

<template>
  <div>
    <div class="bg-white w-full">
      <!-- HERO -->
    <section class="hero">
      <h1>Get in Touch</h1>
      <p class="body">We are based in Kampala, Uganda. Reach us directly.</p>
    </section>

    <!-- CONTACT DETAILS -->
    <section class="section">
      <div class="contact-details">
        <ContactRow
          v-for="contact in contacts"
          :key="contact.label"
          v-bind="contact"
        />
      </div>
    </section>
    </div>

    <!-- ROUTING CARDS -->
    <div class="section-alt">
      <section class="section-padded">
        <div class="routing-grid">
          <RoutingCard
            v-for="route in routes"
            :key="route.headline"
            v-bind="route"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.hero {
  max-width: 800px;
  margin: 0 auto;
  padding: 96px 48px 64px;
  text-align: center;
}
.hero h1 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: var(--blue-deep);
}
.hero .body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  margin-top: 24px;
}
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 48px 64px;
}
.section-alt {
  background: var(--gray-1);
}
.section-padded {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 48px;
}
.contact-details {
  max-width: 560px;
  margin: 0 auto;
}
.routing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1023px) {
  .routing-grid { grid-template-columns: 1fr; gap: 16px; }
}
@media (max-width: 767px) {
  .hero { padding: 64px 20px 48px; }
  .hero h1 { font-size: 28px; }
  .section { padding: 0 20px 48px; }
  .section-padded { padding: 48px 20px; }
}
</style>
