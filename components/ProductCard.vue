<script setup lang="ts">
import { computed } from 'vue';

type Status = 'LIVE' | 'PILOT' | 'BUILDING' | 'ACTIVE';

interface Props {
  title: string;
  body: string;
  icon: string; // This will now be the SVG filename in /public
  status: Status;
}

const props = defineProps<Props>();

// Path to the SVG in the public folder
const iconPath = computed(() => `/${props.icon}`);
</script>

<template>
  <div 
    class="relative p-6 bg-white rounded-lg shadow-level-1 transition-all duration-200 hover:shadow-level-2 hover:-translate-y-[2px] group overflow-hidden"
  >
    <!-- Status Badge (Top-Right, 8px offset) -->
    <div class="absolute top-2 right-2 z-10">
      <StatusBadge :status="status" />
    </div>

    <!-- Product Icon (24px height) -->
    <div class="mb-4">
      <img 
        :src="iconPath" 
        :alt="title"
        class="h-6 w-auto block"
      />
    </div>

    <!-- Title (18px Bold) -->
    <h3 class="font-sans font-bold text-[18px] text-blue-deep mb-2">
      {{ title }}
    </h3>

    <!-- Body (14px Regular, 70% opacity, 1.6 line-height) -->
    <p class="font-sans font-normal text-[14px] text-blue-deep opacity-70 leading-[1.6]">
      {{ body }}
    </p>
  </div>
</template>

<style scoped>
/* Scoped styles kept minimal due to Tailwind presence */
</style>
