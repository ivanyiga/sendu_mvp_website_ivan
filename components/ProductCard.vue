<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';
import { computed } from 'vue';

type Status = 'LIVE' | 'PILOT' | 'BUILDING' | 'ACTIVE';

interface Props {
  title: string;
  body: string;
  icon: string;
  status: Status;
  iconColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconColor: 'currentColor',
});

// Dynamically resolve the Lucide icon component
const IconComponent = computed(() => {
  return (LucideIcons as any)[props.icon] || LucideIcons.HelpCircle;
});
</script>

<template>
  <div 
    class="relative p-6 bg-white rounded-lg shadow-elevation-1 transition-all duration-200 hover:shadow-elevation-2 hover:-translate-y-[2px] group overflow-hidden"
  >
    <!-- Status Badge (Top-Right, 8px offset) -->
    <div class="absolute top-2 right-2 z-10">
      <StatusBadge :status="status" />
    </div>

    <!-- Product Icon (24px) -->
    <div class="mb-4" :style="{ color: iconColor }">
      <component 
        :is="IconComponent" 
        :size="24" 
        stroke-width="2"
      />
    </div>

    <!-- Title (18px Bold) -->
    <h3 class="font-sans font-bold text-[18px] text-blue-deep mb-2">
      {{ title }}
    </h3>

    <!-- Body (14px Regular, 70% opacity, 1.6 line-height) -->
    <p class="font-sans font-normal text-[14px] text-blue-deep/70 leading-[1.6]">
      {{ body }}
    </p>
  </div>
</template>

<style scoped>
/* Scoped styles kept minimal due to Tailwind presence */
</style>
