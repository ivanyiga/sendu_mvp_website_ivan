<script setup lang="ts">
interface Props {
  number: string;
  label: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <!-- Number -->
    <span class="font-mono text-data-lg text-blue-deep">
      {{ number }}
    </span>
    
    <!-- Label -->
    <p class="font-sans text-body-sm text-blue-deep opacity-65 mt-[4px] max-w-[200px]">
      {{ label }}
    </p>
  </div>
</template>

<style scoped>
/* Individual styles if needed, but Tailwind classes cover most specs */
</style>
