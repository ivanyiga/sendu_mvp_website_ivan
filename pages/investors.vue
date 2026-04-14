<template>
  <!-- PAGE: /investors -->
  <!-- Reference spec: page-investors.html -->
  <!-- OG meta: set in nuxt.config or useHead() -->
  <div class="bg-white">
    <div class="page-investors">

    <!-- Hero -->
    <section class="hero">
      <h1>Invest in Sendu</h1>
      <div class="hero-body">
        <p>
          Sendu is building embedded banking infrastructure for Uganda's mobile
          money ecosystem. Five integrated products capture financial behaviour
          and convert it into credit decisions for bank partners. Circle, the
          first product, is live. SACCO onboarding is underway in Kampala with
          30-signal behavioural scoring active.
        </p>
        <p>
          We are raising a $1.5M pilot round to fund 12 months of scaling: agent
          network, merchant payments, full Rating API deployment, and bank
          capital activation. Sendu Holdings Ltd (UK HoldCo) is SEIS/EIS
          eligible. Small cheques welcome alongside institutional capital.
        </p>
      </div>
    </section>

    <!-- Traction Grid -->
    <section class="traction-section">
      <SectionLabel text="Traction" />
      <div class="traction-grid">
        <div
          v-for="item in traction"
          :key="item.key"
          class="traction-row"
        >
          <div class="traction-key">{{ item.key }}</div>
          <div class="traction-value">{{ item.value }}</div>
        </div>
      </div>
    </section>

    <!-- Deck Request Form -->
    <section class="form-section">
      <h2>Request the Deck</h2>
      <div class="form-container">
        <!-- Wire to Formspree/Formspark. Action URL TBC. -->
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label" for="fullname">Full name</label>
            <input
              id="fullname"
              v-model="form.fullname"
              class="form-input"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              class="form-input"
              type="email"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="organisation">Fund / Organisation</label>
            <input
              id="organisation"
              v-model="form.organisation"
              class="form-input"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="note">
              Brief note <span class="form-optional">(optional)</span>
            </label>
            <textarea
              id="note"
              v-model="form.note"
              class="form-textarea"
            />
          </div>
          <!-- <button class="btn-primary" type="submit">Request the Deck</button> -->
          <PrimaryButton 
          type="submit" 
          @click="handleSubmit" 
          :disabled="loading"
          :label="loading ? 'Sending...' : 'Request the Deck'"
          class="mt-2"
        />
        </form>
        <p v-if="formState === 'success'" class="form-success">
          Thank you. We will be in touch.
        </p>
        <p v-if="formState === 'error'" class="form-error">
          Something went wrong. Please email us directly at hello@sendu.ug.
        </p>
      </div>
    </section>

    <!-- Direct Contact -->
    <section class="direct-contact">
      <p>
        For direct enquiries, reach Byron Biroli at
        <a href="mailto:hello@sendu.ug">hello@sendu.ug</a> or
        <a href="tel:+256772381105">+256 772 381 105</a>.
      </p>
    </section>

  </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// --- OG Meta ---
useHead({
  title: 'Invest in Sendu — Embedded banking infrastructure for Uganda',
  meta: [
    { property: 'og:title', content: 'Invest in Sendu — Embedded banking infrastructure for Uganda' },
    { property: 'og:description', content: '$1.5M pilot round. SEIS/EIS eligible. Circle live. SACCO onboarding underway in Kampala. Request the deck.' },
    { property: 'og:image', content: '/og-investors.jpg' },
    { property: 'og:type', content: 'website' },
  ],
})

// --- Traction Data ---
const traction = [
  { key: 'Product status', value: 'Circle live, Rating active (MVP subset)' },
  { key: 'SACCO pipeline', value: 'Onboarding active in Kampala' },
  { key: 'Behavioural signals', value: '30 (MVP), 132 (full platform)' },
  { key: 'Trust account settlement', value: 'Infrastructure built' },
  { key: 'Mobile money integration', value: 'Collection, USSD, and SMS infrastructure operational' },
  { key: 'Target market', value: '20 million underbanked Ugandans' },
  { key: 'Revenue model', value: 'Transaction fees + loan revenue share + Rating API SaaS' },
  { key: 'Corporate structure', value: 'Sendu Holdings Ltd (UK) → Sendu Uganda Ltd' },
  { key: 'Tax incentives', value: 'SEIS: 50% income tax relief, 28% CGT relief' },
]

// --- Form State ---
const formState = ref('idle') // 'idle' | 'success' | 'error'

const form = reactive({
  fullname: '',
  email: '',
  organisation: '',
  note: '',
})

// TODO: Replace with actual Formspree/Formspark endpoint
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

async function handleSubmit() {
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullname: form.fullname,
        email: form.email,
        organisation: form.organisation,
        note: form.note,
      }),
    })
    if (res.ok) {
      formState.value = 'success'
      form.fullname = ''
      form.email = ''
      form.organisation = ''
      form.note = ''
    } else {
      formState.value = 'error'
    }
  } catch {
    formState.value = 'error'
  }
}
</script>

<style scoped>
/*
  All values reference tokens from assets/css/tokens.css.
  Pixel values below match the HTML reference spec exactly.
  Ivan: copy these values, do not approximate.
*/

.page-investors {
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
  color: var(--color-blue-bright);
  margin-bottom: 16px;
}

/* --- Traction Grid --- */
.traction-section {
  padding: 0 0 64px;
}

.traction-grid {
  max-width: 720px;
}

.traction-row {
  display: flex;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid var(--gray-2);
}

.traction-row:first-child {
  border-top: 1px solid var(--gray-2);
}

.traction-key {
  flex: 0 0 240px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.60);
}

.traction-value {
  flex: 1;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: var(--blue-deep);
}

/* --- Form --- */
.form-section {
  padding: 0 0 64px;
}

.form-section h2 {
  color: var(--blue-deep);
  margin-bottom: 24px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: var(--font-heading-lg);
  line-height: 1.2;
}

.form-container {
  max-width: 480px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: rgba(5, 56, 86, 0.70);
  margin-bottom: 4px;
}

.form-input {
  display: block;
  width: 100%;
  height: 44px;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-md);
  padding: 0 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--blue-deep);
  background: var(--white);
  outline: none;
  transition: border-color 150ms ease;
}

.form-input:focus {
  border-color: var(--blue-bright);
}

.form-textarea {
  display: block;
  width: 100%;
  height: 120px;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-md);
  padding: 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--blue-deep);
  background: var(--white);
  outline: none;
  resize: vertical;
  transition: border-color 150ms ease;
}

.form-textarea:focus {
  border-color: var(--blue-bright);
}

.form-optional {
  font-weight: 400;
  font-size: 12px;
  color: rgba(5, 56, 86, 0.50);
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
  margin-top: 8px;
}

.btn-primary:hover {
  background: #00D46E;
}

.form-success {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--green-solid);
  margin-top: 12px;
}

.form-error {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--red-orange);
  margin-top: 12px;
}

/* --- Direct Contact --- */
.direct-contact {
  padding: 0 0 96px;
}

.direct-contact p {
  font: var(--body-sm);
  color: rgba(5, 56, 86, 0.65);
}

.direct-contact a {
  color: var(--blue-bright);
  transition: color 150ms ease;
}

.direct-contact a:hover {
  color: var(--blue-deep);
}

/* --- Tablet (768px–1023px) --- */
@media (max-width: 1023px) {
  .page-investors {
    padding: 0 24px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .traction-key {
    flex: 0 0 200px;
  }
}

/* --- Mobile (< 768px) --- */
@media (max-width: 767px) {
  .page-investors {
    padding: 0 20px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .traction-row {
    flex-direction: column;
    padding: 0;
    border-bottom: none;
    margin-bottom: 16px;
  }

  .traction-row:first-child {
    border-top: none;
  }

  .traction-key {
    flex: none;
    margin-bottom: 4px;
  }

  .traction-value {
    flex: none;
  }

  .btn-primary {
    width: 100%;
  }

  .form-section h2 {
    font-size: 22px;
  }
}
</style>
