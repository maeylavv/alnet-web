<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Decorative Background Blurs -->
      <div class="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-20 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
      
      <div class="mt-20 max-w-4xl mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E204B] mb-6 font-poppins">
          <span class="text-[#EE585B]">Wi-Fi Connected, But No Internet? Here's the Fix!</span>
        </h1>
        <!-- Date of Publication -->
        <p class="text-sm text-gray-500 mb-4">Published on: <span class="font-semibold">July 28, 2025</span></p>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Learn how to resolve the common problem of a connected Wi-Fi network with no internet access and get back online quickly.
        </p>
      </div>
    </section>

    <!-- Main Blog Content Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Hero Card with Basic Info -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">What Causes the Wi-Fi to Be Connected but No Internet?</h2>
          <p>
            There are several reasons why a Wi-Fi network may be connected, but no internet access is available. The most common causes include issues with the router, service provider, or network configuration.
          </p>
        </div>

        <!-- Blog Details Section -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">How to Fix Wi-Fi Connected, But No Internet</h2>
          <div class="mb-6">
            <h3 class="text-lg font-semibold">1. Check the Router and Modem</h3>
            <p>
              Start by checking your router and modem to ensure they are functioning correctly. Try restarting both devices and check for any error lights or unusual behavior.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">2. Restart Your Device</h3>
            <p>
              Sometimes, the issue may be with your device itself. Restarting your device can help reset its connection and resolve the issue.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">3. Check Your Internet Service Provider</h3>
            <p>
              If the problem persists, the issue might be with your internet service provider. Check their website or call customer service to ensure there are no outages in your area.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">4. Reconfigure the Network Settings</h3>
            <p>
              If the previous steps don't work, try reconfiguring your network settings. Reset your network adapter or contact your ISP for further assistance.
            </p>
          </div>
        </div>

        <!-- Add a Call-to-Action or Footer here -->
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'BlogDetail2',
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  background-image: linear-gradient(to bottom right, #e0e7ff, #ffffff);
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Content Styling */
.content {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Increased Line Spacing for Better Readability */
p, ol, ul {
  line-height: 1.8; 
  margin-bottom: 20px; 
}

ol, ul {
  padding-left: 20px;
}

h2, h3 {
  margin-bottom: 16px;
  color: #1E204B;
}

/* Button Styling */
.btn {
  background-color: #EE585B;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #d04748;
  transform: translateY(-3px);
}
</style>
