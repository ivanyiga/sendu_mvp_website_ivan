<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true
    // Each item: { number: 1, label: 'Member', desc: 'Contributes via MTN MoMo or Airtel Money.' }
  },
  summary: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <div class="flow-diagram">
      <template v-for="(step, index) in steps" :key="step.number">
        <div class="flow-step">
          <div class="mx-auto w-[36px] h-[36px] bg-blue-deep text-white rounded-full flex items-center justify-center font-mono font-semibold text-[14px] mb-[12px]">{{ step.number }}</div>
          <div class="flow-step-label">{{ step.label }}</div>
          <div class="flow-step-desc">{{ step.desc }}</div>
        </div>
        <div v-if="index < steps.length - 1" class="flow-arrow text-blue-bright">→</div>
      </template>
    </div>
    <p v-if="summary" class="flow-body">{{ summary }}</p>
  </div>
</template>

<style scoped>
.flow-diagram {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 32px;
}

.flow-step {
  flex: 1;
  text-align: center;
  position: relative;
}

.flow-step-number {
  width: 36px;
  height: 36px;
  background: var(--color-blue-deep);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  font-size: 14px;
  margin: 0 auto 12px;
}

.flow-step-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--color-blue-deep);
  margin-bottom: 8px;
}

.flow-step-desc {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: rgba(5, 56, 86, 0.65);
  line-height: 1.5;
  padding: 0 8px;
}

.flow-arrow {
  display: flex;
  align-items: center;
  padding-top: 8px;
  /* color: var(--color-blue-bright); */
  font-size: 20px;
  flex-shrink: 0;
  width: 32px;
  justify-content: center;
}

.flow-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.7);
  text-align: center;
  margin-top: 16px;
}

@media (max-width: 767px) {
  .flow-diagram {
    flex-direction: column;
    align-items: center;
  }

  .flow-arrow {
    transform: rotate(90deg);
    width: auto;
    padding: 8px 0;
  }

  .flow-step {
    max-width: 300px;
  }
}
</style>
