<script setup lang="ts">
const products = [
  {
    title: "Pay",
    icon: "sendu-pay-icon.svg",
    status: "BUILDING" as const,
    body: "Consumer mobile money payments. P2P transfers, bill payments, cash-out. Every transaction feeds the scoring engine."
  },
  {
    title: "Circle",
    icon: "sendu-circle-icon.svg",
    status: "LIVE" as const,
    body: "Digital savings groups for SACCOs. Mobile money collection, trust account settlement, lending infrastructure, and 30 behavioural signals per member."
  },
  {
    title: "Till",
    icon: "sendu-till-icon.svg",
    status: "PILOT" as const,
    body: "Interoperable merchant payments. Any MTN or Airtel user pays any Till merchant. Captures transaction data banks cannot access from telcos."
  },
  {
    title: "Float",
    icon: "sendu-float-icon.svg",
    status: "PILOT" as const,
    body: "Agent liquidity infrastructure. Earned float, daily sweep mechanics, rebalancing via retail offices across Kampala and Jinja."
  },
  {
    title: "Rating",
    icon: "sendu-rating-icon.svg",
    status: "ACTIVE" as const,
    body: "132-signal behavioural credit scoring. Variance economics. CRB integration. Banks deploy capital through Sendu rails using Rating decisions."
  }
];
</script>

<template>
  <section class="w-full bg-gray-1 pt-16 pb-12 lg:pt-24 lg:pb-16 px-[20px] md:px-[24px] lg:px-0">
    <div class="max-w-[1120px] mx-auto">
      <!-- Section Header -->
      <div class="mb-12">
        <SectionLabel text="The Platform" />
        <p class="mt-4 font-sans text-body-md text-blue-deep opacity-70 max-w-[600px] leading-tight">
          Five products. One integrated rail. Every transaction generates a signal.
        </p>
      </div>

      <!-- Products Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6"
      >
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          :title="product.title"
          :icon="product.icon"
          :status="product.status"
          :body="product.body"
          class="h-full"
        />
      </div>

      <!-- Footer CTA -->
      <div class="mt-12 text-left">
        <NuxtLink 
          to="/platform" 
          class="inline-flex items-center font-sans font-semibold text-[14px] lg:text-[16px] text-blue-bright hover:underline group"
        >
          See the full platform 
          <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Individual styles if needed */
</style>
