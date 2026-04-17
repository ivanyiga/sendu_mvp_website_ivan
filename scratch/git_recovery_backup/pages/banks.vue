<template>
  <!-- PAGE: /banks -->
  <!-- Reference spec: page-banks.html -->
  <div class="page-banks">

    <!-- Hero -->
    <section class="hero">
      <h1>Activate your dormant customers.</h1>
      <div class="hero-body">
        <p>
          20 million Ugandans have bank accounts they never use. Your customer
          acquisition cost was paid. The account was opened. It went dormant.
          You cannot lend to these customers because you cannot score them. No
          transaction history. No payslip. No collateral. The credit bureau file
          is empty.
        </p>
        <p>
          Sendu captures their financial behaviour through five integrated
          products: consumer payments, savings groups, merchant transactions,
          agent liquidity, and behavioural credit scoring. 132 signals across 7
          groups. Variance economics that price late payment as cash flow and
          treat cured borrowers as stress-tested. CRB integration.
        </p>
        <p>
          You deploy the capital. Sendu provides origination, scoring,
          servicing, and rail control. Revenue share on attributed loans. Rating
          API available on SaaS licence for portfolio-level decisioning.
        </p>
      </div>
    </section>

    <!-- Capability Table -->
    <section class="capability-section">
      <SectionLabel text="Capabilities" />
      <div class="capability-table">
        <div
          v-for="item in capabilities"
          :key="item.capability"
          class="capability-row"
        >
          <div class="capability-key">{{ item.capability }}</div>
          <div class="capability-value">{{ item.detail }}</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Start the conversation.</h2>
      <p class="cta-body">
        Sendu works with Tier 1, Tier 2, and Tier 3 financial institutions in
        Uganda. Magdalena Kurylowicz, COO, leads all bank relationships.
      </p>

      <div class="cta-contact">
        <div class="cta-contact-row">
          <PhoneIcon :size="18" />
          <a href="tel:+256708629489">+256 708 629 489</a>
        </div>
        <div class="cta-contact-row">
          <MailIcon :size="18" />
          <a href="mailto:hello@sendu.ug">hello@sendu.ug</a>
        </div>
      </div>

      <div class="cta-buttons">
        <a class="btn-primary" href="tel:+256708629489">Call us</a>
        <a
          class="btn-secondary"
          :href="videoCallMailto"
        >
          Request a video call
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Phone as PhoneIcon, Mail as MailIcon } from 'lucide-vue-next'

// --- OG Meta ---
useHead({
  title: 'Sendu for Banks — Activate your dormant customers',
  meta: [
    { property: 'og:title', content: 'Sendu — Rails that make Ugandan earners visible' },
    { property: 'og:description', content: '20 million Ugandans have dormant bank accounts. Sendu captures their financial behaviour and converts it into credit decisions. Partner with us.' },
    { property: 'og:image', content: '/og-banks.jpg' },
    { name: 'twitter:image', content: '/og-banks.jpg' },
    { property: 'og:type', content: 'website' },
  ],
})

// --- Capability Data ---
const capabilities = [
  { capability: 'Dormant account activation', detail: 'W2B attribution links mobile money users to their bank accounts' },
  { capability: 'Credit scoring', detail: '132-signal Rating engine with variance economics' },
  { capability: 'Loan origination', detail: 'White-label lending through Sendu rails' },
  { capability: 'Collection', detail: 'Automatic holdback repayment at point of transaction' },
  { capability: 'CRB reporting', detail: 'Positive credit history built for your customers' },
  { capability: 'Merchant intelligence', detail: 'Complete transaction data from Till. Telcos do not sell this.' },
  { capability: 'Float yield', detail: 'Attributed balance interest on trust account deposits' },
]

// --- Pre-populated mailto for video call request ---
const videoCallMailto = 'mailto:hello@sendu.ug'
  + '?subject=' + encodeURIComponent('Bank partnership enquiry – video call request')
  + '&body=' + encodeURIComponent(
    'Hi Magdalena,\n\n'
    + 'I\'d like to schedule a video call to discuss a partnership with Sendu.\n\n'
    + 'Name: \n'
    + 'Institution: \n'
    + 'Preferred date/time: \n\n'
    + 'Thank you.'
  )
</script>

<style scoped>
/*
  All values reference tokens from assets/css/tokens.css.
  Pixel values below match the HTML reference spec exactly.
  Ivan: copy these values, do not approximate.
*/

.page-banks {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 48px;
}

/* --- Hero --- */
.hero {
  padding: 96px 0 64px;
  max-width: 800px;
}

.hero h1 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: var(--blue-deep);
}

.hero-body {
  margin-top: 24px;
}

.hero-body p {
  font: var(--font-body-lg);
  color: rgba(5, 56, 86, 0.70);
  margin-bottom: 16px;
}

.hero-body p:last-child {
  margin-bottom: 0;
}

/* --- Section Label --- */
.section-label {
  font: var(--font-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--blue-bright);
  margin-bottom: 16px;
}

/* --- Capability Table --- */
.capability-section {
  padding: 0 0 64px;
}

.capability-table {
  max-width: 720px;
}

.capability-row {
  display: flex;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid var(--gray-2);
}

.capability-row:first-child {
  border-top: 1px solid var(--gray-2);
}

.capability-key {
  flex: 0 0 240px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  color: var(--blue-deep);
}

.capability-value {
  flex: 1;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.70);
}

/* --- CTA Section --- */
.cta-section {
  padding: 0 0 64px;
}

.cta-section h2 {
  color: var(--blue-deep);
  margin-bottom: 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: var(--font-heading-lg);
  line-height: 1.2;
}

.cta-body {
  font: var(--font-body-lg);
  color: rgba(5, 56, 86, 0.70);
  max-width: 640px;
  margin-bottom: 32px;
}

.cta-contact {
  max-width: 640px;
}

.cta-contact-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.cta-contact-row svg {
  color: var(--blue-bright);
  flex-shrink: 0;
}

.cta-contact-row a {
  font: var(--font-body-sm);
  color: var(--blue-bright);
  transition: color 150ms ease;
}

.cta-contact-row a:hover {
  color: var(--blue-deep);
}

.cta-buttons {
  display: flex;
  gap: 16px;
  margin-top: 32px;
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
}

.btn-primary:hover {
  background: #00D46E;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 32px;
  border-radius: var(--radius-full);
  background: transparent;
  border: 1.5px solid var(--gray-2);
  color: var(--blue-deep);
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 150ms ease, color 150ms ease;
}

.btn-secondary:hover {
  border-color: var(--blue-bright);
  color: var(--blue-bright);
}

/* --- Tablet (768px–1023px) --- */
@media (max-width: 1023px) {
  .page-banks {
    padding: 0 24px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .capability-key {
    flex: 0 0 200px;
  }

  .cta-section h2 {
    font-size: 22px;
  }
}

/* --- Mobile (< 768px) --- */
@media (max-width: 767px) {
  .page-banks {
    padding: 0 20px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .capability-row {
    flex-direction: column;
    padding: 0;
    border-bottom: none;
    margin-bottom: 16px;
  }

  .capability-row:first-child {
    border-top: none;
  }

  .capability-key {
    flex: none;
    margin-bottom: 4px;
  }

  .capability-value {
    flex: none;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .cta-section h2 {
    font-size: 22px;
  }
}
</style>
