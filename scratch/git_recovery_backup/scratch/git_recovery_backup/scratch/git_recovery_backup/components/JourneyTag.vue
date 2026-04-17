<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true,
    validator: (v) => ['Field', 'Build', 'Team', 'User Story', 'Milestone'].includes(v)
  }
})

const tagClasses = {
  'Field': 'tag-field',
  'Build': 'tag-build',
  'Team': 'tag-team',
  'User Story': 'tag-user-story',
  'Milestone': 'tag-milestone'
}
</script>

<template>
  <span class="journey-tag px-2 py-1" :class="tagClasses[tag]">{{ tag }}</span>
</template>

<style scoped>
.journey-tag {
  display: inline-block;
  /* padding: 2px 10px; */
  border-radius: var(--radius-sm);
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.tag-field {
  background: rgba(5,56,86,0.08);
  color: #053856;
}
.tag-build {
  background: rgba(0,125,165,0.10);
  color: #007DA5;
}
.tag-team {
  background: rgba(37,167,167,0.10);
  color: #25A7A7;
}
.tag-user-story {
  background: rgba(0,170,95,0.10);
  color: #00AA5F;
}
.tag-milestone {
  background: rgba(4,255,136,0.10);
  color: #053856;
}
</style>
