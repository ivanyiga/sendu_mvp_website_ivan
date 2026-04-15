<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="feature-block">
    <div class="w-[24px] h-[24px] text-blue-bright mb-[12px]">
      <component :is="icon" :size="24" :stroke-width="2" />
    </div>
    <div class="feature-block-title">{{ title }}</div>
    <div class="feature-block-body">{{ body }}</div>
  </div>
</template>

<style scoped>
.feature-block-icon {
  width: 24px;
  height: 24px;
  color: var(--blue-bright);
  margin-bottom: 12px;
}

.feature-block-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--blue-deep);
  margin-bottom: 8px;
}

.feature-block-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(5, 56, 86, 0.7);
  line-height: 1.6;
}
</style>
