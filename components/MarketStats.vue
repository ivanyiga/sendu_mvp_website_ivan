<script setup lang="ts">
const stats = [
  {
    number: "33 million",
    label: "active mobile money users in Uganda"
  },
  {
    number: "$133 billion",
    label: "annual mobile money transaction volume"
  },
  {
    number: "21 million",
    label: "underbanked with dormant bank accounts"
  },
  {
    number: "$10 billion",
    label: "saved informally each year"
  }
];
</script>

<template>
  <section class="w-full bg-white text-blue-deep pt-16 pb-12 lg:pt-24 lg:pb-16 px-[20px] md:px-[24px] lg:px-0 transition-all">
    <div class="max-w-[1120px] mx-auto flex flex-col items-center">
      <!-- Section Header -->
      <SectionLabel text="The Market" centered />

      <!-- Stats Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-8 lg:gap-12 w-full"
      >
        <StatItem 
          v-for="(stat, index) in stats" 
          :key="index"
          :number="stat.number"
          :label="stat.label"
        />
      </div>

      <!-- Optional Footer text if needed later -->
      <p class="mt-12 text-body-md text-blue-deep opacity-70 text-center max-w-[600px] leading-relaxed">
        Millions save, repay, and transact every week. None of it counts toward credit.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Individual styles if needed */
</style>
