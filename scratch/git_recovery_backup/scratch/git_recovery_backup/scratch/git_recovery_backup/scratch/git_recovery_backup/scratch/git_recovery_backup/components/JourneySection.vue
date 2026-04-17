<script setup lang="ts">
import journeyPosts from '~/data/journeyPosts.json'

const posts = journeyPosts.slice(0, 3)
</script>

<template>
  <section class="w-full bg-gray-1 pt-16 pb-12 lg:pt-24 lg:pb-16 px-[20px] md:px-[24px] lg:px-0">
    <div class="max-w-[1120px] mx-auto">
      <!-- Section Header -->
      <div class="mb-0">
        <SectionLabel text="FROM THE FIELD" />
      </div>

      <!-- Journey Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        <JourneyPostCard 
          v-for="post in posts" 
          :key="post.slug"
          :tag="post.tag"
          :title="post.title"
          :date="post.date"
          :excerpt="post.excerpt"
          :thumbnail-url="post.thumbnail"
          :to="`/journey/${post.slug}`"
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
