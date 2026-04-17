<script setup>
defineProps({
  headline: { type: String, required: true },
  body: { type: String, required: true },
  ctaLabel: { type: String, required: true },
  ctaLink: { type: String, required: true },
  external: { type: Boolean, default: false }
})
</script>

<template>
  <div class="routing-card">
    <div class="routing-card-headline">{{ headline }}</div>
    <div class="routing-card-body">{{ body }}</div>
    <a v-if="external" :href="ctaLink" class="routing-card-cta" target="_blank" rel="noopener">{{ ctaLabel }} →</a>
    <NuxtLink v-else :to="ctaLink" class="routing-card-cta">{{ ctaLabel }} →</NuxtLink>
  </div>
</template>

<style scoped>
.routing-card {
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
}
.routing-card-headline {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--blue-deep);
  margin-bottom: 8px;
}
.routing-card-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  margin-bottom: 16px;
  flex: 1;
}
.routing-card-cta {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-bright);
  text-decoration: none;
  transition: color 150ms ease;
}
.routing-card-cta:hover {
  color: var(--blue-deep);
}
</style>
