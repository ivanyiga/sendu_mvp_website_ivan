<script setup lang="ts">
// Props can be added later if dynamic content is needed
</script>

<template>
  <section class="relative w-full lg:h-[140vh] bg-blue-deep text-white text-center pt-16 pb-12 lg:pt-24 lg:pb-[20px] px-5 transition-all overflow-hidden hero-bg">
    <!-- Optional: Add a subtle overlay to ensure blue-deep remains the dominant color -->
    <div class="absolute lg:hidden inset-0 bg-blue-deep opacity-80 z-0 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[800px] px-[20px] lg:px-0 mx-auto flex flex-col items-center">
      <!-- Headline -->
      <h1 class="font-sans text-heading-xl text-white">
        Build the rails that make working people visible.
      </h1>

      <!-- Body -->
      <p class="font-sans text-body-lg text-white opacity-70 mt-[24px] max-w-[640px]">
        Sendu is a mobile money rail for Uganda. Every payment and savings contribution on the rail generates a credit score. Banks and SACCOs use that score to lend to people they currently cannot.
      </p>

      <!-- CTA Group -->
      <div class="mt-[32px] flex flex-col md:flex-row gap-4 w-full md:w-auto items-center justify-center">
        <!-- Primary Button -->
        <PrimaryButton to="/circle" label="See how Circle works" />

        <!-- Secondary Button -->
        <SecondaryButton variant="on-dark" label="Read the Sendu thesis" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  /* Using a combination of background color and image with blending/overlay */
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
