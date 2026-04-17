<script setup>
defineProps({
  icon: { type: Object, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  href: { type: String, default: null },
  external: { type: Boolean, default: false }
})
</script>

<template>
  <div class="contact-row">
    <div class="contact-row-icon">
      <component :is="icon" :size="20" :stroke-width="2" />
    </div>
    <div class="contact-row-text">
      <div class="contact-row-label">{{ label }}</div>
      <div class="contact-row-value">
        <a v-if="href && external" :href="href" target="_blank" rel="noopener" :class="['text-blue-bright hover:text-blue-deep']">{{ value }}</a>
        <a v-else-if="href" :href="href" :class="['text-blue-bright hover:text-blue-deep']">{{ value }}</a>
        <span v-else>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--gray-2);
}
.contact-row:last-child {
  border-bottom: none;
}
.contact-row-icon {
  width: 40px;
  height: 40px;
  background: var(--gray-1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--blue-bright);
}
.contact-row-text {
  flex: 1;
}
.contact-row-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: rgba(5,56,86,0.5);
  margin-bottom: 2px;
}
.contact-row-value {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--blue-deep);
}
.contact-row-value a {
  color: var(--blue-bright);
  text-decoration: none;
  transition: color 150ms ease;
}
.contact-row-value a:hover {
  color: var(--blue-deep);
}
</style>
