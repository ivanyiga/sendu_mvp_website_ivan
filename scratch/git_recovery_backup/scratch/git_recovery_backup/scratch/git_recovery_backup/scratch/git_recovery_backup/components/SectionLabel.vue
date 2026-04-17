<script setup lang="ts">
interface Props {
  text?: string;
  centered?: boolean;
}

withDefaults(defineProps<Props>(), {
  text: '',
  centered: false,
});
</script>

<template>
  <div 
    class="font-sans font-semibold text-[12px] leading-none uppercase tracking-[0.08em] text-blue-bright mb-4"
    :class="{ 'text-center': centered }"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<style scoped>
</style>
