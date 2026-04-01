<script setup lang="ts">
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
    <div class="space-y-6 text-center">
      <div class="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-2">
        <Rocket class="lucide w-10 h-10" />
      </div>
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        Sendu Website
      </h1>
      <p class="text-muted-foreground text-lg max-w-[600px]">
        Welcome to the Sendu Website project. Initialized with Nuxt 3.21.2, shadcn-vue, and Lucide icons.
      </p>
      <div class="flex items-center justify-center gap-4">
        <Button size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Documentation
        </Button>
      </div>
    </div>
  </div>
</template>
