<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    validator: (val) => ['active', 'onboarding'].includes(val)
  }
})

const statusText = {
  active: 'ACTIVE',
  onboarding: 'ONBOARDING'
}
</script>

<template>
  <div class="bg-white border border-gray-2 rounded-lg p-[24px]">
    <div class="archetype-label">{{ label }}</div>
    <div class="archetype-detail">{{ detail }}</div>
    <span :class="['archetype-status', `status-${status}`]">
      <span class="dot"></span>
      {{ statusText[status] }}
    </span>
  </div>
</template>

<style scoped>
.archetype-card {
  background: var(--color-white);
  border: 1px solid var(--color-gray-2);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.archetype-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--color-blue-deep);
  margin-bottom: 8px;
}

.archetype-detail {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(5, 56, 86, 0.7);
  line-height: 1.6;
  margin-bottom: 12px;
}

.archetype-status {
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
}

.archetype-status .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.status-active {
  background: rgba(0, 125, 165, 0.10);
  color: #007DA5;
}

.status-active .dot {
  background: #007DA5;
}

.status-onboarding {
  background: rgba(243, 149, 0, 0.10);
  color: #F39500;
}

.status-onboarding .dot {
  background: #F39500;
}
</style>
