<script setup>
useHead({
  title: 'Sendu Team — Built in Uganda. Led from the ground.',
  meta: [
    { name: 'description', content: 'Founders, executives, and advisors building embedded banking infrastructure for Uganda.' },
    { property: 'og:title', content: 'Sendu Team — Built in Uganda. Led from the ground.' },
    { property: 'og:description', content: 'Founders, executives, and advisors building embedded banking infrastructure for Uganda.' },
    { property: 'og:image', content: '/og-team.jpg' }
  ]
})

const team = [
  {
    photo: '/team-byron.jpg',
    initials: 'BB',
    name: 'Byron Biroli',
    title: 'MD, Founder',
    credential: 'Dual UK-Ugandan. Born in Kampala, raised in London. Background in large-scale infrastructure delivery: <strong>NASA</strong>, <strong>CERN</strong>, <strong>UK government</strong> (Coventry City of Culture 2021), <strong>Cable & Wireless</strong>, enterprise telecoms. Relocated to Kampala to deploy Sendu."</strong>',
    linkedin: 'https://www.linkedin.com/in/byron-biroli/'
  },
  {
    photo: '/team-magdalena.jpg',
    initials: 'MK',
    name: 'Magdalena Kurylowicz',
    title: 'COO, Co-Founder',
    credential: 'Cambridge Law. 14 years in risk, AML, and sanctions. VP Anti-Financial Crime (EMEA), <strong>PIMCO</strong>. AVP AFC, <strong>Deutsche Bank</strong>. Risk, compliance, and forensic, <strong>KPMG UK</strong>. Leads bank partnerships and data protection for Sendu. <strong>DPO (Data Protection Officer)',
    linkedin: 'https://www.linkedin.com/in/magdalenakurylowicz/'
  },
  {
    photo: '/team-keneth.jpg',
    initials: 'KB',
    name: 'Keneth Buhiire',
    title: 'CTO',
    credential: 'CTO, <strong>Swipe2pay</strong>. Built the <strong>Agent Banking Company</strong> prototype. Developer, <strong>Numida</strong>. M-Cash integration, <strong>Interswitch</strong>. Full stack: Node.js, TypeScript, PostgreSQL, Python, PHP, USSD. Leads database architecture, API design, and mobile money integration for Sendu.',
    linkedin: 'https://www.linkedin.com/in/buhiire-keneth-84802367'
  },
  {
    photo: '/team-gordian.jpg',
    initials: 'GK',
    name: 'Gordian Kyomukama',
    title: 'Director, Telecoms & Regulatory',
    credential: 'CEO, <strong>MTN South Sudan</strong>. CTO and Acting CEO, <strong>MTN Uganda</strong>. 30 years in telecoms operations across East and Central Africa. Built Uganda\'s mobile money rails. Leads telco integrations and regulatory relationships for Sendu.',
    linkedin: 'https://www.linkedin.com/in/gordian-kyomukama-424b33247'
  },
  {
    photo: '/team-jacque.jpg',
    initials: 'JN',
    name: 'Jacque Namwase',
    title: 'Financial Growth Officer',
    credential: 'Team Lead, <strong>Platinum Credit</strong>. B2B sales and client acquisition across Kampala. Business development, <strong>Certigence</strong>. Field lead for SACCO recruitment and direct community relationships. Leads growth operations for Sendu.',
    linkedin: 'https://www.linkedin.com/in/jacque-namwase-b1171311b'
  },
  {
    photo: '/team-grace.jpg',
    initials: 'GL',
    name: 'Grace Musoke Lwanga',
    title: 'Chairman',
    credential: 'Pioneer Chairman, <strong>PRIDE Microfinance</strong>. Steered the institution to licensed status. <strong>World Bank</strong> PPP. Chairman, <strong>ALT East Africa</strong>. Governance: <strong>Stanbic Uganda</strong>, <strong>Horizons International</strong>.',
    linkedin: 'https://www.linkedin.com/in/grace-musoke-lwanga-55b36013/'
  }
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <h1>The Team</h1>
      <p class="body">Sendu is Ugandan-founded and Kampala-operated. Our team combines infrastructure delivery, telecoms regulation, banking, and field operations across East Africa.</p>
    </section>

    <!-- TEAM GRID -->
    <section class="section">
      <div class="team-grid">
        <TeamCard
          v-for="member in team"
          :key="member.name"
          :photo-url="member.photo"
          :name="member.name"
          :title="member.title"
          :credential="member.credential"
          :linked-in-url="member.linkedin"
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
  color: var(--color-blue-deep);
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
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1023px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .hero { padding: 64px 20px 48px; }
  .hero h1 { font-size: 28px; }
  .section { padding: 0 20px 48px; }
  .team-grid { grid-template-columns: 1fr; gap: 16px; }
}
</style>
