<script setup>
import { ref } from 'vue'
import FormField from '~/components/FormField.vue'

useHead({
  title: 'The Dormant Majority — Sendu White Paper',
  meta: [
    { name: 'description', content: 'Uganda\'s financial inclusion problem is activation, not acquisition. 21 million people with dormant bank accounts. Read the Sendu thesis.' },
    { property: 'og:title', content: 'Sendu — Rails that make Ugandan earners visible' },
    { property: 'og:description', content: 'Uganda\'s financial inclusion problem is activation, not acquisition. 21 million people with dormant bank accounts. Read the Sendu thesis.' },
    { property: 'og:image', content: '/og-whitepaper.jpg' },
    { name: 'twitter:image', content: '/og-whitepaper.jpg' }
  ]
})

const email = ref('')
const name = ref('')
const org = ref('')
const submitted = ref(false)
const error = ref(false)
const loading = ref(false)

async function handleSubmit() {
  if (!email.value || !name.value) return

  loading.value = true
  error.value = false

  const config = useRuntimeConfig()
  const formId = config.public.formspreeIdWhitepaper || 'YOUR_ID_HERE'
  const endpoint = `https://formspree.io/f/${formId}`

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        organisation: org.value
      })
    })

    if (response.ok) {
      submitted.value = true
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-white">
    <!-- HERO -->
    <section class="hero">
      <h1>The Dormant Majority</h1>
      <h2>Uganda's financial inclusion problem is activation.</h2>
      <p class="body">Uganda has 81% financial inclusion. Bank accounts exist. They are dormant. 33 million earners trust mobile money more than their banks. Banks want to lend to them. They cannot. No transaction history. No payslip. No collateral. The solution is infrastructure that captures financial behaviour through sovereign payment and savings rails and converts it into credit decisions banks can use. Five integrated products. 132 behavioural signals. First-party data from first-party rails.</p>
    </section>

    <!-- FORM -->
    <div class="form-section">
      <template v-if="!submitted">
        <form @submit.prevent="handleSubmit">
          <FormField
            label="Email address"
            id="wp-email"
            type="email"
            placeholder="you@example.com"
            :required="true"
            v-model="email"
          />
          <FormField
            label="Name"
            id="wp-name"
            type="text"
            placeholder="Your name"
            :required="true"
            v-model="name"
          />
          <FormField
            label="Organisation"
            id="wp-org"
            type="text"
            placeholder="Company or fund name"
            :optional="true"
            v-model="org"
          />
          <PrimaryButton 
            type="submit" 
            :disabled="loading"
            :label="loading ? 'Sending...' : 'Get the white paper'"
            class="mt-2 !w-full plausible-event-name=Whitepaper+Submission"
          />
        </form>
        <p v-if="error" class="form-submission-error">Something went wrong. Please email us directly at hello@sendu.ug.</p>
        <p class="form-privacy">We will only use your email to deliver the white paper. No spam. No third-party sharing.</p>
      </template>

      <p v-else class="form-success">Thank you. We will be in touch.</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  max-width: 800px;
  margin: 0 auto;
  padding: 96px 48px 48px;
  text-align: center;
}
.hero h1 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: var(--blue-deep);
}
.hero h2 {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: rgba(5,56,86,0.7);
  margin-top: 12px;
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
.form-section {
  max-width: 480px;
  margin: 0 auto;
  padding: 48px 48px 64px;
}
.form-privacy {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(5,56,86,0.5);
  margin-top: 12px;
  text-align: center;
  line-height: 1.5;
}
.form-success {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--green-solid);
  text-align: center;
}
.form-submission-error {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--red-orange);
  margin-top: 12px;
  text-align: center;
}

@media (max-width: 767px) {
  .hero { padding: 64px 20px 48px; }
  .hero h1 { font-size: 28px; }
  .hero h2 { font-size: 18px; }
  .form-section { padding: 32px 20px 48px; }
}
</style>
