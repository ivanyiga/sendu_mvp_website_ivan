<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="signal-callout">
    {{ text }}
  </div>
</template>

<style scoped>
.signal-callout {
  background: var(--gray-1);
  border-radius: var(--radius-md);
  padding: 16px;
  margin-top: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.65);
  font-style: italic;
}

/* When inside a grey section, use white background */
.section-alt .signal-callout {
  background: var(--color-white);
}
</style>
