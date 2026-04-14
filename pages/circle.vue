<script setup>
/**
 * Circle Page — pages/circle.vue
 *
 * Reference spec: page-circle.html
 * All values taken directly from the HTML/CSS reference.
 * Do not modify any spacing, colour, or font values.
 *
 * Lucide icon imports: match the SVG shapes in the reference spec.
 * If a Lucide icon name does not match exactly, check https://lucide.dev/icons
 * and find the icon whose SVG paths match the reference spec.
 */
// --- OG Meta ---
useHead({
  title: 'Sendu Circle — Digital savings group infrastructure for SACCOs',
  meta: [
    { property: 'og:title', content: 'Sendu Circle — Digital savings group infrastructure for SACCOs' },
    { property: 'og:description', content: 'Circle digitises SACCO savings groups in Uganda. Mobile money collection, trust account settlement, lending origination, and behavioural credit scoring. Live in Kampala.' },
    { property: 'og:image', content: '/og-circle.jpg' },
    { property: 'og:type', content: 'website' },
  ],
})
import {
  ClipboardCheck,
  Smartphone,
  Monitor,
  CreditCard,
  TrendingUp,
  ShieldCheck
} from 'lucide-vue-next'

import FeatureBlock from '~/components/FeatureBlock.vue'
import ArchetypeCard from '~/components/ArchetypeCard.vue'
import RatingBand from '~/components/RatingBand.vue'
import FlowDiagram from '~/components/FlowDiagram.vue'

// Data: Flow diagram steps
const flowSteps = [
  { number: 1, label: 'Member', desc: 'Contributes via MTN MoMo or Airtel Money.' },
  { number: 2, label: 'Sendu', desc: 'Collects and confirms every transaction in real time.' },
  { number: 3, label: 'Settlement', desc: "Two options. Funds settle directly to the SACCO's own bank account with individual member contributions tracked. Or funds settle to a Sendu-managed trust account for SACCOs without their own banking arrangement." },
  { number: 4, label: 'Ledger', desc: 'Tracks every shilling. One account per SACCO. One entry per member per cycle.' }
]

// Data: Manager features
const managerFeatures = [
  {
    icon: ClipboardCheck,
    title: 'Reconciliation in minutes',
    body: "Open a session with your PIN. Review each member's contribution against the pre-populated expected deposit. Confirm. Close. Every member gets an SMS."
  },
  {
    icon: Smartphone,
    title: 'Field app for cash',
    body: 'Record cash contributions on the Android app. Log bank deposits with amount, date, branch, and slip reference. Track unbanked cash balance in real time. Receive nudge alerts when a bank run is overdue.'
  },
  {
    icon: Monitor,
    title: 'Dashboard for oversight',
    body: "View every member's balance, contribution history, and rating score. Manage loan applications. Track repayments. Export reports. Accessible from any browser, including mobile."
  }
]

// Data: Member features
const memberFeatures = [
  {
    icon: CreditCard,
    title: 'Contribute from anywhere',
    body: 'Push your contribution via MTN MoMo or Airtel Money. Receive an SMS confirmation when your manager reconciles it. No need to visit the SACCO office.'
  },
  {
    icon: TrendingUp,
    title: 'A credit score that grows',
    body: 'Every on-time contribution, every repayment, every financial decision builds your rating. Your score determines your loan eligibility.'
  },
  {
    icon: ShieldCheck,
    title: 'Your money, accounted for',
    body: 'Three-status balance: Received (payment confirmed), Reconciled (manager verified), Available (settled). You always know where your money is.'
  }
]

// Data: Archetype cards
const archetypes = [
  {
    label: 'Community SACCO (Deposit)',
    detail: 'Collects weekly or monthly member contributions. Paper ledger or basic spreadsheet. Mobile money replaces cash at the office. Digital reconciliation replaces manual counting.',
    status: 'active'
  },
  {
    label: 'Community SACCO (Lending)',
    detail: 'Collects contributions and lends from pooled capital. Needs loan application tracking, guarantor management, repayment monitoring, and credit scoring to replace committee guesswork.',
    status: 'active'
  },
  {
    label: 'Employer SACCO',
    detail: 'Payroll deduction. Dual-approval governance between SACCO manager and HR. High smartphone penetration. Dashboard-first experience.',
    status: 'active'
  }
]

// Data: Rating bands
const ratingBands = [
  { letter: 'A', range: '700–900', label: 'Strong', band: 'a' },
  { letter: 'B', range: '500–699', label: 'Good', band: 'b' },
  { letter: 'C', range: '350–499', label: 'Developing', band: 'c' },
  { letter: 'D', range: 'Below 350', label: 'New / Insufficient', band: 'd' }
]

// SEO
useHead({
  title: 'Circle — Sendu',
  meta: [
    { name: 'description', content: 'Digital savings group management and lending infrastructure for SACCOs in Uganda.' }
  ]
})
</script>

<template>
  <!-- SECTION 1: HERO -->
  <div class="bg-white w-full">
    <section class="hero">
    <h1>Circle is live.</h1>
    <h2>Digital savings group management and lending infrastructure for SACCOs.</h2>
    <p class="body">
      Circle lets savings groups collect, lend, and track everything digitally. 
      Members contribute via mobile money. Managers run their group from USSD, 
      a dashboard, or a field app. SACCOs lend from their own capital. 
      Sendu handles credit intelligence and repayment tracking.
    </p>
  </section>
</div>

  <!-- SECTION 2: THE ARCHITECTURE (flow diagram) -->
  <div class="section-alt">
    <section class="section">
    <SectionLabel text="The Architecture" />
      <FlowDiagram
        :steps="flowSteps"
        summary="Collect. Track. Score. Lend."
      />
    </section>
  </div>

  <!-- SECTION 3: FOR SACCO MANAGERS -->
  <div class="bg-white w-full">
    <section class="section">
    <SectionLabel text="For SACCO Managers" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureBlock
        v-for="(feat, i) in managerFeatures"
        :key="i"
        :icon="feat.icon"
        :title="feat.title"
        :body="feat.body"
      />
    </div>
  </section>
  </div>

  <!-- SECTION 4: FOR SACCO MEMBERS -->
  <div class="section-alt">
    <section class="section">
    <SectionLabel text="For SACCO Members" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureBlock
          v-for="(feat, i) in memberFeatures"
          :key="i"
          :icon="feat.icon"
          :title="feat.title"
          :body="feat.body"
        />
      </div>
    </section>
  </div>

  <!-- SECTION 5: BUILT FOR REAL SACCOS (archetype cards) -->
  <div class="bg-white w-full">
    <section class="section">
    <SectionLabel text="Built for Real SACCOs" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArchetypeCard
        v-for="(arch, i) in archetypes"
        :key="i"
        :label="arch.label"
        :detail="arch.detail"
        :status="arch.status"
      />
    </div>
    <p class="font-sans text-body-lg text-deep-blue opacity-70 line-height-1.6 font-weight-400 text-center text-size-[16px] mt-8 lg:max-w-[720px] mx-auto">Sendu operates as a technical service provider to SACCOs. Your SACCO retains its regulatory standing and member relationships. Sendu provides the digital infrastructure: collection, reconciliation, credit scoring, and reporting. Your regulator sees a SACCO using better tools. Your members see a SACCO that works.</p>
  </section>
  </div>

  <!-- SECTION 6: RATING -->
  <div class="section-alt">
    <section class="section">
    <SectionLabel text="Rating: the score behind every lending decision" />
      <p class="rating-intro">
        Circle generates 30+ behavioural signals per member. 
        Contribution consistency. Repayment discipline. 
        Financial prudence. Early warning indicators. 
        Airtime and data usage patterns. 
        Bill payment behaviour. External credit exposure via Credit Reference Bureau. 
        These signals produce a score from 0 to 900, classified into four bands. 
        SACCO loan committees see the score before they approve. 
        The rating grows with every cycle. Your repayment history is portable. 
        It travels with you to any participating institution. 
        No one in Uganda has done this before.
      </p>
      <RatingBand :bands="ratingBands" />
      <div class="rating-cta">
        <SecondaryButton to="/platform" label="See how Rating fits the full platform" />
      </div>
    </section>
  </div>

  <!-- SECTION 7: CTA -->
  <div class="bg-white w-full">
    <section class="cta-section">
    <h2>Ready to digitise your SACCO?</h2>
    <p class="body">
      Your members contribute. Your committees decide. Your
      SACCO lends. Circle gives you the infrastructure to do all of it faster, with complete records and
      credit intelligence your board can trust. Less time on administration. Better data for every
      lending decision.
    </p>
    <PrimaryButton to="/contact" label="Get in touch" />
  </section>
  </div>
</template>

<style scoped>
/* ========================================
   HERO
   ======================================== */
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

.hero h2 {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: rgba(5, 56, 86, 0.7);
  margin-top: 12px;
}

.hero .body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.7);
  margin-top: 24px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

/* ========================================
   SECTION LAYOUT
   ======================================== */
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 48px;
}

.section-alt {
  background: var(--color-gray-1);
}

.section-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-blue-bright);
  margin-bottom: 16px;
}

/* ========================================
   FEATURE GRID
   ======================================== */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 24px;
}

/* ========================================
   ARCHETYPE GRID
   ======================================== */
.archetype-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
}

/* ========================================
   RATING SECTION
   ======================================== */
.rating-intro {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.7);
  margin-bottom: 8px;
}

.rating-cta {
  text-align: center;
}

/* ========================================
   CTA SECTION
   ======================================== */
.cta-section {
  text-align: center;
  padding: 64px 48px;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  color: var(--color-blue-deep);
  margin-bottom: 16px;
}

.cta-section .body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.7);
  margin-bottom: 32px;
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 1023px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .archetype-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 767px) {
  .hero {
    padding: 64px 20px 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero h2 {
    font-size: 18px;
  }

  .section {
    padding: 48px 20px;
  }

  .archetype-grid {
    grid-template-columns: 1fr;
  }

  .cta-section {
    padding: 48px 20px;
  }

  .cta-section h2 {
    font-size: 22px;
  }
}
</style>
