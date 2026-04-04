<script setup lang="ts">
import { computed } from 'vue';

type JourneyTag = 'Field' | 'Build' | 'Team' | 'User Story' | 'Milestone';

interface Props {
  title: string;
  excerpt: string;
  date: string;
  thumbnailUrl?: string;
  tag: JourneyTag;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  thumbnailUrl: '',
  to: '#',
});

const truncatedExcerpt = computed(() => {
  const limit = 120;
  if (props.excerpt.length <= limit) return props.excerpt;
  
  // Truncate and find last space to avoid cutting words
  const subString = props.excerpt.slice(0, limit);
  const lastSpace = subString.lastIndexOf(' ');
  const finishedString = lastSpace > 0 ? subString.slice(0, lastSpace) : subString;
  
  return finishedString.trim() + '...';
});

const tagStyles = computed(() => {
  const normalizedTag = props.tag.toLowerCase();
  switch (normalizedTag) {
    case 'field':
      return { bg: 'rgba(5, 56, 86, 0.08)', text: '#053856' };
    case 'build':
      return { bg: 'rgba(0, 125, 165, 0.10)', text: '#007DA5' };
    case 'team':
      return { bg: 'rgba(37, 167, 167, 0.10)', text: '#25A7A7' };
    case 'user story':
      return { bg: 'rgba(0, 170, 95, 0.10)', text: '#00AA5F' };
    case 'milestone':
      return { bg: 'rgba(4, 255, 136, 0.10)', text: '#053856' };
    default:
      return { bg: 'rgba(5, 56, 86, 0.08)', text: '#053856' };
  }
});
</script>

<template>
  <NuxtLink 
    :to="to" 
    class="group block bg-white rounded-lg shadow-level-1 overflow-hidden transition-all duration-200 ease-in-out hover:shadow-level-2 cursor-pointer"
  >
    <!-- Thumbnail (16:9, Object Fit Cover) -->
    <div class="aspect-video bg-gray-2 relative overflow-hidden">
      <img 
        v-if="thumbnailUrl"
        :src="thumbnailUrl" 
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Placeholder if no image -->
      <div v-else class="w-full h-full flex items-center justify-center text-blue-deep opacity-10">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
      </div>
    </div>

    <!-- Content Area (20px Padding) -->
    <div class="p-6 flex flex-col">
      <!-- Tag (Manrope 600 12px, 4px 8px padding, 4px radius) -->
      <span 
        class="inline-flex items-center self-start px-2 py-1 rounded-sm font-sans font-semibold text-[12px] mb-2 transition-colors"
        :style="{ backgroundColor: tagStyles.bg, color: tagStyles.text }"
      >
        {{ tag }}
      </span>

      <!-- Title (Manrope 700 16px, Blue Deep, 8px margin-bottom) -->
      <h3 class="font-sans font-bold text-[16px] text-blue-deep mb-2 transition-colors group-hover:text-blue-bright">
        {{ title }}
      </h3>

      <!-- Date (Manrope 400 12px, Blue Deep 50% opacity, 8px margin-bottom) -->
      <p class="font-sans font-normal text-[12px] text-blue-deep opacity-50 mb-2">
        {{ date }}
      </p>

      <!-- Excerpt (Manrope 400 14px, Line Height 1.6, Blue Deep 65% opacity) -->
      <p class="font-sans font-normal text-[14px] text-blue-deep opacity-65 leading-[1.6]">
        {{ truncatedExcerpt }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>
/* Individual styles if needed */
</style>
