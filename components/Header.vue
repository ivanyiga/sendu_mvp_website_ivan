<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Circle', to: '/circle' },
  { label: 'Platform', to: '/platform' },
  { label: 'White Paper', to: '/whitepaper' },
  { label: 'Journey', to: '/journey' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <header 
    class="sticky top-0 z-[100] w-full bg-white border-b border-gray-2 transition-all duration-200"
    :class="[isMenuOpen ? 'h-full fixed' : 'h-[56px] lg:h-[72px]']"
  >
    <div class="h-full flex items-center justify-between px-5 md:px-6 lg:px-12">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center" @click="closeMenu">
        <img 
          src="/logo-sendu.svg" 
          alt="Sendu Logo" 
          class="h-[24px] lg:h-[28px] w-auto transition-all"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to"
          :to="link.to"
          class="font-sans font-semibold text-label lg:text-[14px] text-blue-deep hover:text-blue-bright transition-colors relative py-2"
          active-class="text-blue-bright after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-blue-bright after:translate-y-[4px]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile Hamburger -->
      <button 
        class="lg:hidden p-2 text-blue-deep"
        aria-label="Toggle Menu"
        @click="toggleMenu"
      >
        <Menu v-if="!isMenuOpen" :size="24" />
        <!-- Close Button (Positioned top right) -->
        <X v-else :size="24" class="text-white relative z-[110]" />
      </button>
    </div>

    <!-- Mobile Overlay -->
    <Transition name="slide-down">
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-blue-deep z-[105] flex flex-col items-center justify-center pt-14"
      >
        <!-- <button 
          class="absolute top-4 right-5 text-white p-2"
          @click="toggleMenu"
        >
          <X :size="24" />
        </button> -->

        <!-- Mobile Links -->
        <nav class="flex flex-col items-center gap-[24px]">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            class="font-sans font-semibold text-[20px] text-white hover:opacity-80 transition-opacity"
            @click="toggleMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

/* Ensure active class works with NuxtLink */
.router-link-active {
  color: var(--blue-bright);
}
</style>
