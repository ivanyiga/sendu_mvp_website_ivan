<script setup>
// --- OG Meta ---
useHead({
  title: 'Sendu — Build the rails that make working people visible',
  meta: [
    { property: 'og:title', content: 'Sendu — Rails that make Ugandan earners visible' },
    { property: 'og:description', content: 'Send money make progress. Embedded banking infrastructure for Uganda. Payment and savings products that capture financial behaviour and convert it into credit decisions.' },
    { property: 'og:image', content: '/og-home.jpg' },
    { name: 'twitter:image', content: '/og-home.jpg' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>
<template>
  <div>
    <Hero />
    <MarketStats />
    <ProductSection />
    <TeamSection />
    <JourneySection />
    <!-- Other sections will go here -->
  </div>
</template>
