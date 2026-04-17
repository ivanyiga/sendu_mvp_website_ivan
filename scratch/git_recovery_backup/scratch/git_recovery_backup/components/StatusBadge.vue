<script setup lang="ts">
import { computed } from 'vue';

type Status = 'LIVE' | 'PILOT' | 'BUILDING' | 'ACTIVE';

interface Props {
  status: Status;
}

const props = defineProps<Props>();

const config = computed(() => {
  switch (props.status.toUpperCase() as Status) {
    case 'LIVE':
      return {
        bg: 'rgba(0, 170, 95, 0.10)',
        color: '#00AA5F',
      };
    case 'PILOT':
      return {
        bg: 'rgba(243, 149, 0, 0.10)',
        color: '#F39500',
      };
    case 'BUILDING':
      return {
        bg: 'rgba(223, 227, 227, 0.50)',
        color: '#6B7E8A',
      };
    case 'ACTIVE':
    default:
      return {
        bg: 'rgba(0, 125, 165, 0.10)',
        color: '#007DA5',
      };
  }
});
</script>

<template>
  <div 
    class="inline-flex items-center h-6 px-[10px] rounded-full transition-all duration-200"
    :style="{ backgroundColor: config.bg }"
  >
    <!-- Status Dot -->
    <span 
      class="w-[5px] h-[5px] rounded-full mr-[6px]"
      :style="{ backgroundColor: config.color }"
    />
    
    <!-- Status Label -->
    <span 
      class="font-sans font-bold text-[10px] uppercase tracking-[0.05em] whitespace-nowrap"
      :style="{ color: config.color }"
    >
      {{ status }}
    </span>
  </div>
</template>

<style scoped>
/* Individual styles if needed */
</style>
