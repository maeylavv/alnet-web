<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <NavbarSection />
    
    <!-- Main Content (Where dynamic content will be injected) -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavbarSection,
    FooterSection
  }
}
</script>

<style scoped>
/* Optional: If you want to add styles specific to the layout */
</style>
