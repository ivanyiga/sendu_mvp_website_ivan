<script setup>
import SignalCallout from './SignalCallout.vue'

defineProps({
  icon: {
    type: [Object, String],
    required: true
  },
  iconColor: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    validator: (v) => ['BUILDING', 'LIVE', 'PILOT', 'ACTIVE'].includes(v)
  },
  headline: {
    type: String,
    required: true
  },
  subheadline: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  signalText: {
    type: String,
    required: true
  },
  ctaLabel: {
    type: String,
    default: null
  },
  ctaLink: {
    type: String,
    default: null
  },
  reversed: {
    type: Boolean,
    default: false
  }
})

const statusClass = {
  BUILDING: 'status-building',
  LIVE: 'status-live',
  PILOT: 'status-pilot',
  ACTIVE: 'status-active'
}
</script>

<template>
  <div class="product-block" :class="{ 'product-block--reversed': reversed }">
    <div class="product-block-inner">
      <div class="product-block-text">
        <template v-if="typeof icon === 'string'">
          <img :src="'/' + icon" class="mb-3 h-8 w-auto block" :alt="headline" />
        </template>
        <component v-else :is="icon" class="mb-3" :style="{ color: iconColor }" :size="32" :stroke-width="2" />
        <div>
          <span class="status-badge" :class="statusClass[status]">
            <span class="dot"></span>{{ status }}
          </span>
        </div>
        <div class="product-block-headline">{{ headline }}</div>
        <div class="product-block-subheadline">{{ subheadline }}</div>
        <div class="product-block-body">{{ body }}</div>
        <SignalCallout :text="signalText" />
        <div v-if="ctaLabel && ctaLink" class="product-block-cta">
          <NuxtLink :to="ctaLink">{{ ctaLabel }} →</NuxtLink>
        </div>
      </div>
      <div class="product-block-visual">
        <template v-if="typeof icon === 'string'">
          <img :src="'/' + icon" class="h-16 w-auto block" :alt="headline" />
        </template>
        <component v-else :is="icon" :style="{ color: iconColor }" :size="64" :stroke-width="1.5" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-block {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 48px;
}
.product-block-inner {
  display: flex;
  align-items: flex-start;
  gap: 64px;
}
.product-block--reversed .product-block-inner {
  flex-direction: row-reverse;
}
.product-block-text {
  flex: 1;
}
.product-block-visual {
  flex: 0 0 320px;
  height: 240px;
  background: var(--gray-1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-block-icon {
  margin-bottom: 12px;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: var(--radius-full);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}
.status-badge .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
.status-building { background: rgba(223,227,227,0.50); color: #6B7E8A; }
.status-building .dot { background: #6B7E8A; }
.status-live { background: rgba(0,170,95,0.10); color: #00AA5F; }
.status-live .dot { background: #00AA5F; }
.status-pilot { background: rgba(243,149,0,0.10); color: #F39500; }
.status-pilot .dot { background: #F39500; }
.status-active { background: rgba(0,125,165,0.10); color: #007DA5; }
.status-active .dot { background: #007DA5; }
.product-block-headline {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  color: var(--color-blue-deep);
  margin-bottom: 4px;
}
.product-block-subheadline {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: rgba(5,56,86,0.7);
  margin-bottom: 16px;
}
.product-block-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
}
.product-block-cta {
  margin-top: 16px;
}
.product-block-cta a {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-bright);
  transition: color 150ms ease;
}
.product-block-cta a:hover {
  color: var(--blue-deep);
}

@media (max-width: 1023px) {
  .product-block-inner { flex-direction: column !important; gap: 32px; }
  .product-block-visual { flex: 0 0 auto; width: 100%; height: 200px; }
}
@media (max-width: 767px) {
  .product-block { padding: 48px 20px; }
  .product-block-headline { font-size: 22px; }
}
</style>
