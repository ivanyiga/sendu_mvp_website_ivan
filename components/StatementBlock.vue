<script setup>
defineProps({
  headline: { type: String, required: true },
  body: { type: String, required: true }
})
</script>

<template>
  <div class="statement-block">
    <div class="statement-block-headline">{{ headline }}</div>
    <div class="statement-block-body">{{ body }}</div>
  </div>
</template>

<style scoped>
.statement-block-headline {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--color-blue-deep);
  margin-bottom: 8px;
}
.statement-block-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
}
</style>
