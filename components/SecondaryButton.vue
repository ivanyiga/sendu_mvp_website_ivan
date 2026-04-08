<script setup lang="ts">
interface Props {
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  variant?: 'default' | 'on-dark';
}

withDefaults(defineProps<Props>(), {
  to: '',
  disabled: false,
  type: 'button',
  label: '',
  variant: 'default',
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border-[1.5px] font-sans font-semibold text-[14px] whitespace-nowrap transition-all duration-150 ease-in-out active:scale-[0.98] disabled:cursor-not-allowed disabled:active:scale-100 w-full md:w-auto overflow-hidden group cursor-pointer"
    :class="[
      variant === 'default' 
        ? 'border-gray-2 text-blue-deep hover:border-blue-bright hover:text-blue-bright' 
        : 'border-[color:color-mix(in_srgb,var(--white),transparent_70%)] text-white hover:border-[color:color-mix(in_srgb,var(--white),transparent_00%)]',
      disabled ? 'bg-gray-3 text-[color:color-mix(in_srgb,var(--blue-deep),transparent_65%)] border-gray-3' : ''
    ]"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border-[1.5px] font-sans font-semibold text-[14px] whitespace-nowrap transition-all duration-150 ease-in-out active:scale-[0.98] disabled:cursor-not-allowed disabled:active:scale-100 w-full md:w-auto overflow-hidden group cursor-pointer"
    :class="[
      variant === 'default' 
        ? 'border-gray-2 text-blue-deep hover:border-blue-bright hover:text-blue-bright' 
        : 'border-[color:color-mix(in_srgb,var(--white),transparent_70%)] text-white hover:border-[color:color-mix(in_srgb,var(--white),transparent_00%)]',
      disabled ? 'bg-gray-3 text-[color:color-mix(in_srgb,var(--blue-deep),transparent_65%)] border-gray-3' : ''
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
/* Individual styles if needed, but Tailwind classes cover most specs */
</style>
