<script setup>
import journeyPosts from '~/data/journeyPosts.json'

useHead({
  title: 'Sendu Journey — Building in public from Kampala',
  meta: [
    { name: 'description', content: 'Field dispatches, user stories, and build updates from the Sendu team in Uganda.' },
    { property: 'og:title', content: 'Sendu Journey — Building in public from Kampala' },
    { property: 'og:description', content: 'Field dispatches, user stories, and build updates from the Sendu team in Uganda.' },
    { property: 'og:image', content: '/og-journey.jpg' }
  ]
})
</script>

<template>
  <div class="bg-white">
    <!-- HERO -->
    <section class="hero">
      <h1>From the Field</h1>
      <p class="body">We are building in public. Every Journey post is a real moment from the ground.</p>
    </section>
    
    <!-- POST GRID -->
    <section class="section">
      <div class="journey-grid">
        <JourneyPostCard
          v-for="post in journeyPosts"
          :key="post.slug"
          :title="post.title"
          :excerpt="post.excerpt"
          :date="post.date"
          :thumbnail-url="post.thumbnail"
          :tag="post.tag"
          :to="`/journey/${post.slug}`"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  max-width: 800px;
  margin: 0 auto;
  padding: 96px 48px 64px;
  text-align: center;
}
.hero h1 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: var(--blue-deep);
}
.hero .body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  margin-top: 24px;
}
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 48px 64px;
}
.journey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1023px) {
  .journey-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .hero { padding: 64px 20px 48px; }
  .hero h1 { font-size: 28px; }
  .section { padding: 0 20px 48px; }
  .journey-grid { grid-template-columns: 1fr; gap: 16px; }
}
</style>
