<script setup>
import journeyPosts from '~/data/journeyPosts.json'

const route = useRoute()
const post = journeyPosts.find(p => p.slug === route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

useHead({
  title: `${post.title} — Sendu Journey`,
  meta: [
    { name: 'description', content: post.excerpt },
    { property: 'og:title', content: `${post.title} — Sendu Journey` },
    { property: 'og:description', content: post.excerpt },
    { property: 'og:image', content: post.thumbnail || '/og-journey.jpg' }
  ]
})
</script>

<template>
  <div v-if="post">
    <!-- POST HEADER -->
    <div class="post-header">
      <JourneyTag :tag="post.tag" />
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-date">{{ post.date }}</div>
    </div>

    <!-- POST THUMBNAIL -->
    <div class="post-thumbnail">
      <div class="post-thumbnail-image">
        <img v-if="post.thumbnail" :src="post.thumbnail" :alt="post.title" />
        <div v-else class="w-full h-full flex items-center justify-center text-blue-deep opacity-10">
          <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
        </div>
      </div>
    </div>

    <!-- POST BODY -->
    <div class="post-body">
      <p v-for="(paragraph, i) in post.body" :key="i">{{ paragraph }}</p>
    </div>

    <!-- POST CTA -->
    <div v-if="post.cta" class="post-cta">
      <PrimaryButton :to="post.cta.link" :label="post.cta.label" />
    </div>

    <!-- BACK LINK -->
    <div class="post-back">
      <NuxtLink to="/journey">← Back to Journey</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.post-header {
  max-width: 720px;
  margin: 0 auto;
  padding: 96px 48px 32px;
}
.post-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: var(--blue-deep);
  margin-bottom: 12px;
  margin-top: 16px;
}
.post-date {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(5,56,86,0.5);
}
.post-thumbnail {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 48px;
}
.post-thumbnail-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--gray-2);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.post-thumbnail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.post-body {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 48px 48px;
}
.post-body p {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(5,56,86,0.8);
  margin-bottom: 24px;
}
.post-body p:last-child {
  margin-bottom: 0;
}
.post-cta {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 48px 32px;
}
.post-back {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 48px 64px;
}
.post-back a {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-bright);
  text-decoration: none;
  transition: color 150ms ease;
}
.post-back a:hover {
  color: var(--blue-deep);
}

@media (max-width: 767px) {
  .post-header { padding: 64px 20px 24px; }
  .post-title { font-size: 28px; }
  .post-thumbnail { padding: 0 20px; }
  .post-body { padding: 24px 20px 48px; }
  .post-cta { padding: 0 20px 32px; }
  .post-back { padding: 0 20px 48px; }
}
</style>
