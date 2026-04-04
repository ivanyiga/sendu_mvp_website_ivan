<script setup lang="ts">
const posts = [
  {
    tag: "Field" as const,
    title: "Why I Moved to Kampala",
    date: "30 March 2026",
    excerpt: "I was born in Kampala. Raised in London. Spent twenty years building infrastructure for other people's projects.",
    image: "/journey-kampala-01.jpg"
  },
  {
    tag: "User Story" as const,
    title: "What a SACCO Manager Actually Does",
    date: "1 April 2026",
    excerpt: "She arrives at the SACCO office at 8am on a Saturday. There are already fifteen members waiting.",
    image: "/journey-sacco-manager-01.jpg"
  },
  {
    tag: "Build" as const,
    title: "One Integration Partner",
    date: "4 April 2026",
    excerpt: "Early in the build, we evaluated three payment aggregator routes for Uganda.",
    image: "/journey-yu-payments-01.jpg"
  }
];
</script>

<template>
  <section class="w-full bg-gray-1 pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 lg:px-0">
    <div class="max-w-[1120px] mx-auto">
      <!-- Section Header -->
      <div class="mb-0">
        <SectionLabel text="FROM THE FIELD" />
      </div>

      <!-- Journey Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <JourneyPostCard 
          v-for="(post, index) in posts" 
          :key="index"
          :tag="post.tag"
          :title="post.title"
          :date="post.date"
          :excerpt="post.excerpt"
          :image="post.image"
          class="h-full"
        />
      </div>

      <!-- Footer CTA -->
      <div class="mt-12 text-left">
        <NuxtLink 
          to="/journey" 
          class="inline-flex items-center font-sans font-semibold text-[14px] lg:text-[16px] text-blue-bright hover:underline group"
        >
          Follow our journey 
          <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Individual styles if needed */
</style>
