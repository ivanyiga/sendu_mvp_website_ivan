<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bands: {
    type: Array,
    required: true
    // Each item: { letter: 'A', range: '700–900', label: 'Strong', band: 'a' }
  }
})
</script>

<template>
  <div class="rating-bands">
    <div
      v-for="item in bands"
      :key="item.letter"
      :class="['rating-band', `band-${item.band}`]"
    >
      <div class="rating-band-letter">{{ item.letter }}</div>
      <div class="rating-band-range">{{ item.range }}</div>
      <div class="rating-band-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.rating-bands {
  display: flex;
  gap: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
}

.rating-band {
  flex: 1;
  padding: 16px 12px;
  text-align: center;
}

.rating-band-letter {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;
}

.rating-band-range {
  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 4px;
}

.rating-band-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
}

.band-a {
  background: rgba(0, 170, 95, 0.10);
  color: var(--green-solid);
}

.band-b {
  background: rgba(0, 125, 165, 0.10);
  color: var(--blue-bright);
}

.band-c {
  background: rgba(243, 149, 0, 0.10);
  color: var(--orange);
}

.band-d {
  background: var(--gray-3);
  color: rgba(5, 56, 86, 0.5);
}

@media (max-width: 767px) {
  .rating-bands {
    flex-direction: column;
  }
}
</style>
