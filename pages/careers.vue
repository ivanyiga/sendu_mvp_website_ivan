<template>
  <!-- PAGE: /careers -->
  <!-- Reference spec: page-careers.html -->
  <div class="bg-white">
    <div class="page-careers">

    <!-- Hero -->
    <section class="hero">
      <h1>Build with us.</h1>
      <div class="hero-body">
        <p>
          Sendu is based in Kampala, Uganda. We are building a small, high-output
          team. We value people who ship, who work well with explicit briefs, and
          who care about the outcome more than the title. Current priorities are
          backend engineering, field operations, and SACCO relationship
          management.
        </p>
      </div>
    </section>

    <!-- Open Roles -->
    <section v-if="roles.length" class="roles-section">
      <SectionLabel text="Open Roles" />
      <div class="roles-list">
        <div
          v-for="role in roles"
          :key="role.title"
          class="role-card"
        >
          <div class="role-header">
            <div class="role-title">{{ role.title }}</div>
            <div class="role-type">{{ role.type }}</div>
          </div>
          <div class="role-location">{{ role.location }}</div>
          <div class="role-description">{{ role.description }}</div>
          <div class="role-reports">Reports to {{ role.reportsTo }}.</div>
          <a class="btn-primary" :href="role.applyHref">Apply</a>
        </div>
      </div>
    </section>

    <!-- General Enquiry (always visible) -->
    <section class="general-section">
      <h2>{{ roles.length ? 'No role listed that fits?' : 'No open roles right now.' }}</h2>
      <p>
        We hire when we find the right person. If you think you should be
        building this with us, reach out directly:
        <a href="mailto:hello@sendu.ug">hello@sendu.ug</a>. Include what you
        do and why Sendu.
      </p>
    </section>

  </div>
  </div>
</template>

<script setup>
// --- OG Meta ---
useHead({
  title: 'Careers at Sendu — Build with us in Kampala',
  meta: [
    { property: 'og:title', content: 'Careers at Sendu — Build with us in Kampala' },
    { property: 'og:description', content: 'Join the team building embedded banking infrastructure for Uganda. Engineering, operations, and field roles in Kampala.' },
    { property: 'og:image', content: '/og-careers.jpg' },
    { property: 'og:type', content: 'website' },
  ],
})

// --- Roles Data ---
// To add a role: push an object to this array.
// To remove all roles: empty the array. The fallback heading switches automatically.
const roles = [
  {
    title: 'Field Sales',
    type: 'Full-time',
    location: 'Kampala',
    description:
      'SACCO recruitment across Kampala and Jinja. You visit savings groups, explain what Circle does, and bring them through onboarding. You work directly with SACCO managers, attend group meetings, and handle the relationship from first contact through go-live. Prior experience with SACCOs, microfinance, or community savings groups preferred. Fluent Luganda required.',
    reportsTo: 'Jacque Namwase, Financial Growth Officer',
    applyHref:
      'mailto:hello@sendu.ug'
      + '?subject=' + encodeURIComponent('Field Sales – Application')
      + '&body=' + encodeURIComponent(
        'Hi,\n\n'
        + 'I\'m applying for the Field Sales role.\n\n'
        + 'Name: \n'
        + 'Phone: \n'
        + 'Location: \n\n'
        + 'Why Sendu:\n\n'
      ),
  },
]
</script>

<style scoped>
/*
  All values reference tokens from assets/css/tokens.css.
  Pixel values below match the HTML reference spec exactly.
  Ivan: copy these values, do not approximate.
*/

.page-careers {
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
}

/* --- Section Label --- */
.section-label {
  font: var(--font-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--blue-bright);
  margin-bottom: 16px;
}

/* --- Roles --- */
.roles-section {
  padding: 0 0 64px;
}

.roles-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.role-card {
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-lg);
  padding: 24px;
  max-width: 640px;
}

.role-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
}

.role-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: var(--blue-deep);
}

.role-type {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--blue-bright);
}

.role-location {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.2;
  color: rgba(5, 56, 86, 0.60);
  margin-bottom: 16px;
}

.role-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.70);
  margin-bottom: 16px;
}

.role-reports {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(5, 56, 86, 0.50);
  margin-bottom: 24px;
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

/* --- General Section --- */
.general-section {
  padding: 0 0 96px;
  max-width: 640px;
}

.general-section h2 {
  color: var(--blue-deep);
  margin-bottom: 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: var(--font-heading-md);
  line-height: 1.2;
}

.general-section p {
  font: var(--font-body-sm);
  color: rgba(5, 56, 86, 0.65);
}

.general-section a {
  color: var(--blue-bright);
  transition: color 150ms ease;
}

.general-section a:hover {
  color: var(--blue-deep);
}

/* --- Tablet (768px–1023px) --- */
@media (max-width: 1023px) {
  .page-careers {
    padding: 0 24px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }
}

/* --- Mobile (< 768px) --- */
@media (max-width: 767px) {
  .page-careers {
    padding: 0 20px;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .role-header {
    flex-direction: column;
    gap: 4px;
  }

  .btn-primary {
    width: 100%;
  }

  .general-section h2 {
    font-size: 18px;
  }
}
</style>
