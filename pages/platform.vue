<script setup>
import ProductBlock from '~/components/ProductBlock.vue'
import PlatformFlywheel from '~/components/PlatformFlywheel.vue'
import StatementBlock from '~/components/StatementBlock.vue'

useHead({
  title: 'Sendu Platform — Five products. One sovereign rail.',
  meta: [
    { name: 'description', content: 'Pay, Circle, Till, Float, Rating. Integrated embedded banking infrastructure that captures financial behaviour and converts it into credit decisions for banks in Uganda.' },
    { property: 'og:title', content: 'Sendu Platform — Five products. One sovereign rail.' },
    { property: 'og:description', content: 'Pay, Circle, Till, Float, Rating. Integrated embedded banking infrastructure that captures financial behaviour and converts it into credit decisions for banks in Uganda.' },
    { property: 'og:image', content: '/og-platform.jpg' }
  ]
})

const products = [
  {
    icon: 'sendu-pay-icon.svg',
    iconColor: 'var(--green-vivid)',
    status: 'BUILDING',
    headline: 'Pay',
    subheadline: 'Consumer mobile money wallet.',
    body: 'P2P transfers across MTN and Airtel networks. Bill payments. Cash-out at parity pricing. Every transaction feeds the Rating engine. Pay is how users enter the Sendu ecosystem. Their daily financial behaviour becomes visible to banks for the first time.',
    signalText: 'Pay generates: transaction frequency, amount patterns, network activity, cash-out behaviour, bill payment consistency.',
    reversed: false
  },
  {
    icon: 'sendu-circle-icon.svg',
    iconColor: 'var(--teal)',
    status: 'LIVE',
    headline: 'Circle',
    subheadline: 'Digital savings groups for SACCOs.',
    body: 'Mobile money collection, trust account settlement, sub-ledger management, reconciliation, and lending infrastructure. Managers administer groups via USSD, PC dashboard, and Android app. SACCOs lend from their own capital with Sendu providing origination, scoring, and variance management. 30 behavioural signals per member.',
    signalText: 'Circle generates: contribution consistency, repayment discipline, savings trajectory, prompt response rate, early warning indicators.',
    ctaLabel: 'See Circle in detail',
    ctaLink: '/circle',
    reversed: true
  },
  {
    icon: 'sendu-till-icon.svg',
    iconColor: 'var(--orange)',
    status: 'PILOT',
    headline: 'Till',
    subheadline: 'Interoperable merchant payment rail.',
    body: 'Any MTN or Airtel mobile money user can pay any Till merchant. Merchants abandon telco merchant codes and consolidate on a single interoperable rail. This captures complete transaction data that banks cannot access from telcos. MTN and Airtel do not sell merchant transaction data to banks. Sendu creates this intelligence.',
    signalText: 'Till generates: merchant revenue, transaction volume, deposit patterns, seasonal revenue curves, customer diversity.',
    reversed: false
  },
  {
    icon: 'sendu-float-icon.svg',
    iconColor: 'var(--purple)',
    status: 'PILOT',
    headline: 'Float',
    subheadline: 'Agent liquidity. Bank intelligence.',
    body: "Agents run out of cash. 62% of mobile money users in Uganda cite agent liquidity failure as their primary challenge. Float provides earned float (tiered by performance), commercial float, daily sweep mechanics, and rebalancing across a retail network. One liquidity network. Every connected bank and SACCO shares it. Agents serve any institution's customers from a single float balance. Every rebalance, every cash-in, every float draw generates a signal. Sendu scores it.",
    signalText: 'Float generates: rebalancing frequency, float utilisation, liquidity management, operational discipline.',
    reversed: true
  },
  {
    icon: 'sendu-rating-icon.svg',
    iconColor: 'var(--blue-deep)',
    status: 'ACTIVE',
    headline: 'Rating',
    subheadline: '132-signal behavioural credit scoring engine.',
    body: 'Three layers. External credit reference bureau data provides credit history and cross-network loan exposure. First-party signals from Pay, Circle, Till, and Float capture financial behaviour within the Sendu ecosystem. Variance economics treat late payment as priced cash flow and reward borrowers who recover. Banks deploy capital through Sendu rails using Rating decisions. Automatic collection via holdback.',
    signalText: 'Rating integrates: 132 signals across savings, repayment, transaction, financial behaviour, early warning, external validation, and seasonal stress.',
    reversed: false
  }
]

const statements = [
  {
    headline: 'First-party data.',
    body: 'Sendu captures behaviour through products Sendu built and operates. Competitors depend on telco partnerships for data access. When the partnership ends, the data ends. Sendu\'s data is permanent.'
  },
  {
    headline: 'Rail control enables lending.',
    body: 'Holdback repayment collection requires owning the transaction rail. Sendu debits repayments at the point of transaction. This is the mechanism that makes micro-lending at scale economically viable. Scoring without rail control is a consultancy, not infrastructure.'
  },
  {
    headline: 'Cross-product compounding.',
    body: 'CRBs score consumers from bureau history. Telcos score from airtime and mobile money. Sendu scores from savings, payments, merchant transactions, agent behaviour, and repayment patterns simultaneously. 132 signals across 7 groups. No single-product platform can replicate this density.'
  }
]
</script>

<template>
  <div class="bg-white">
    <!-- HERO -->
    <section class="hero">
      <h1>Five products. One sovereign rail.</h1>
      <p class="body">Sendu is a sovereign rail with five integrated products. Each product captures financial behaviour. Together, they create the most complete picture of a working person's creditworthiness in Uganda. Sendu owns the rails, the data, and the scoring engine. No dependency on telco partnerships for data access.</p>
    </section>

    <!-- PRODUCT STACK -->
    <template v-for="(product, i) in products" :key="product.headline">
      <ProductBlock v-bind="product" />
      <div v-if="i < products.length - 1" class="product-divider">
        <hr class="product-divider-line" />
      </div>
    </template>

    <!-- FLYWHEEL -->
    <div class="section-alt">
      <section class="section">
        <div class="section-label">How the Products Connect</div>
        <PlatformFlywheel />
        <p class="flywheel-body">Each product feeds signals into Rating. Rating unlocks bank capital that flows back to users as credit, creating demand for more transactions across all five products.</p>
      </section>
    </div>

    <!-- WHY SOVEREIGN -->
    <section class="section">
      <div class="section-label">Why We Own the Rails</div>
      <div class="statement-grid">
        <StatementBlock
          v-for="statement in statements"
          :key="statement.headline"
          :headline="statement.headline"
          :body="statement.body"
        />
      </div>
    </section>

    <!-- BANK VALUE -->
    <div class="section-alt">
      <section class="section">
        <div class="section-label">For Bank Partners</div>
        <div class="bank-value-headline">Activate your dormant customers.</div>
        <div class="bank-value-body">20 million Ugandans have bank accounts they never use. Banks cannot score them. No transaction history. No payslip. No collateral. Sendu captures their financial behaviour through five integrated products and converts it into credit decisions banks can deploy capital against. Revenue share on attributed loans. SaaS licensing for the Rating API. Banks keep their customers. Sendu provides the intelligence.</div>
        <NuxtLink to="/banks" class="btn-primary">Learn more about bank partnerships</NuxtLink>
      </section>
    </div>
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
  color: var(--blue-deep);
}
.hero .body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  margin-top: 24px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 48px;
}
.section-alt {
  background: var(--gray-1);
}
.section-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--blue-bright);
  margin-bottom: 16px;
}
.product-divider {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 48px;
}
.product-divider-line {
  border: none;
  border-top: 1px solid var(--gray-2);
}
.flywheel-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}
.statement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 24px;
}
.bank-value-headline {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  color: var(--blue-deep);
  margin-bottom: 16px;
}
.bank-value-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(5,56,86,0.7);
  max-width: 720px;
  margin-bottom: 32px;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 32px;
  border-radius: var(--radius-full);
  background: var(--green-vivid);
  color: var(--blue-deep);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.01em;
  border: none;
  cursor: pointer;
  transition: background 150ms ease;
  text-decoration: none;
}
.btn-primary:hover { background: #00D46E; }

@media (max-width: 1023px) {
  .statement-grid { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 767px) {
  .hero { padding: 64px 20px 48px; }
  .hero h1 { font-size: 28px; }
  .section { padding: 48px 20px; }
  .product-divider { padding: 0 20px; }
  .bank-value-headline { font-size: 22px; }
  .btn-primary { width: 100%; }
}
</style>
