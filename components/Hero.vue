<script setup lang="ts">
// Props can be added later if dynamic content is needed
</script>

<template>
  <section class="w-full bg-blue-deep text-white text-center pt-16 pb-12 lg:pt-24 lg:pb-16 px-5 transition-all">
    <div class="max-w-[800px] px-[16px] lg:px-0 mx-auto flex flex-col items-center">
      <!-- Headline -->
      <h1 class="font-sans text-heading-xl text-white">
        Build the rails that make working people visible.
      </h1>

      <!-- Sub-headline -->
      <!-- <p class="font-sans text-heading-md text-white opacity-70 mt-[12px]">
        The borderless financial platform for everyone.
      </p> -->

      <!-- Body -->
      <p class="font-sans text-body-lg text-white opacity-70 mt-[24px] max-w-[640px]">
        Sendu is a mobile money rail for Uganda. Every payment and savings contribution on the rail generates a credit score. Banks and SACCOs use that score to lend to people they currently cannot.
      </p>

      <!-- CTA Group -->
      <div class="mt-[32px] flex flex-col md:flex-row gap-4 w-full md:w-auto items-center justify-center">
        <!-- Primary Button -->
        <PrimaryButton label="See how Circle works" />

        <!-- Secondary Button -->
        <SecondaryButton variant="on-dark" label="Read the Sendu thesis" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Individual styles if needed, but Tailwind classes cover most specs */
</style>
