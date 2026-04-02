<script setup lang="ts">
interface Props {
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
}

withDefaults(defineProps<Props>(), {
  to: '',
  disabled: false,
  type: 'button',
  label: '',
});
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to || undefined"
    :type="!to ? type : undefined"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-green-vivid text-blue-deep font-sans font-bold text-[15px] tracking-[0.01em] whitespace-nowrap transition-colors duration-150 ease-in-out hover:bg-green-soft active:scale-[0.98] disabled:bg-gray-3 disabled:text-blue-deep/35 disabled:cursor-not-allowed disabled:active:scale-100 w-full md:w-auto overflow-hidden group"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<style scoped>
</style>
