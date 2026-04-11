<script setup>
import { Wallet, Users, Store, RefreshCw, BarChart3, Landmark, User, ChartNoAxesColumn } from 'lucide-vue-next'

const steps = [
  { label: 'Pay', icon: Wallet, colorClass: 'step-pay', iconColor: 'var(--green-vivid)' },
  { label: 'Circle', icon: Users, colorClass: 'step-circle', iconColor: 'var(--teal)' },
  { label: 'Till', icon: Store, colorClass: 'step-till', iconColor: 'var(--orange)' },
  { label: 'Float', icon: RefreshCw, colorClass: 'step-float', iconColor: 'var(--purple)' },
  { label: 'Rating', icon: ChartNoAxesColumn, colorClass: 'step-rating', iconColor: 'var(--blue-deep)' },
  { label: 'Bank Capital', icon: Landmark, colorClass: 'step-bank', iconColor: 'var(--green-solid)' },
  { label: 'Users', icon: User, colorClass: 'step-users', iconColor: 'var(--blue-bright)' }
]
</script>

<template>
  <div class="flywheel">
    <template v-for="(step, i) in steps" :key="step.label">
      <div class="flywheel-step" :class="step.colorClass">
        <div class="flywheel-step-icon">
          <component :is="step.icon" :size="20" :stroke-width="2" :style="{ color: step.iconColor }" />
        </div>
        <div class="flywheel-step-label">{{ step.label }}</div>
      </div>
      <div v-if="i < steps.length - 1" class="flywheel-arrow">→</div>
    </template>
  </div>
</template>

<style scoped>
.flywheel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.flywheel-step {
  text-align: center;
  padding: 16px 12px;
  flex: 0 0 auto;
}
.flywheel-step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
}
.flywheel-step-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: var(--blue-deep);
}
.flywheel-arrow {
  display: flex;
  align-items: center;
  color: var(--blue-bright);
  font-size: 18px;
  flex-shrink: 0;
}

/* Product colour backgrounds */
.step-pay .flywheel-step-icon { background: rgba(4,255,136,0.12); color: var(--green-vivid); }
.step-circle .flywheel-step-icon { background: rgba(37,167,167,0.12); color: var(--teal); }
.step-till .flywheel-step-icon { background: rgba(243,149,0,0.12); color: var(--orange); }
.step-float .flywheel-step-icon { background: rgba(111,52,111,0.12); color: var(--purple); }
.step-rating .flywheel-step-icon { background: rgba(5,56,86,0.10); color: var(--blue-deep); }
.step-bank .flywheel-step-icon { background: rgba(0,170,95,0.10); color: var(--green-solid); }
.step-users .flywheel-step-icon { background: rgba(0,125,165,0.10); color: var(--blue-bright); }

@media (max-width: 767px) {
  .flywheel { flex-direction: column; align-items: center; }
  .flywheel-arrow { transform: rotate(90deg); }
}
</style>
