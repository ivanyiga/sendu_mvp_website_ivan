<script setup lang="ts">
const team = [
  {
    name: "Byron Biroli",
    title: "MD, Founder",
    credential: "Infrastructure delivery at scale. NASA, CERN, UK government, enterprise telecoms.",
  },
  {
    name: "Magdalena Kurylowicz",
    title: "COO, Head of Risk, Co-Founder",
    credential: "Cambridge Law. AML, anti-bribery, and anti-corruption compliance. Operations and risk management.",
  },
  {
    name: "Kenneth Buhiire",
    title: "CTO",
    credential: "Backend architecture, USSD, mobile money integration.",
  },
  {
    name: "Rob Phillpott",
    title: "Executive Chair",
    credential: "Former Vodafone East Africa CEO. Built telecoms across Sub-Saharan Africa and the Middle East.",
  },
  {
    name: "Gordian Kyomukama",
    title: "Director, Telecoms & Regulatory",
    credential: "Former MTN Uganda CTO and CEO. 30 years in telecoms.",
  },
  {
    name: "Jacque Namwase",
    title: "Financial Growth Officer",
    credential: "Sales, field lead, SACCO recruitment, direct community relationships.",
  },
  {
    name: "Varghese Thambi",
    title: "Advisor, Bank Partnerships",
    credential: "Former CEO Diamond Trust Bank Uganda. Leads all bank partnership relationships.",
  },
  {
    name: "Grace Musoke Lwanga",
    title: "Advisor",
    credential: "Pioneer Chairman of PRIDE Microfinance.",
  }
];
</script>

<template>
  <section class="w-full bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 lg:px-0">
    <div class="max-w-[1120px] mx-auto">
      <!-- Section Header -->
      <div class="mb-0">
        <SectionLabel text="The Team" />
      </div>

      <!-- Team Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
      >
        <TeamCard 
          v-for="(member, index) in team" 
          :key="index"
          :name="member.name"
          :title="member.title"
          :credential="member.credential"
          class="h-full"
        />
      </div>

      <!-- Footer CTA -->
      <div class="mt-12 text-left">
        <NuxtLink 
          to="/team" 
          class="inline-flex items-center font-sans font-semibold text-[14px] lg:text-[16px] text-blue-bright hover:underline group"
        >
          Meet the full team 
          <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Individual styles if needed */
</style>
