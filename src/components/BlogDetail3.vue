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
          <span class="text-[#EE585B]">Speed Up Your Wi-Fi Connection with These 5 Tips</span>
        </h1>
        <!-- Date of Publication -->
        <p class="text-sm text-gray-500 mb-4">Published on: <span class="font-semibold">July 28, 2025</span></p>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Looking for faster internet speeds at home? Check out these practical tips to improve your Wi-Fi performance.
        </p>
      </div>
    </section>

    <!-- Main Blog Content Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Hero Card with Basic Info -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">Why is Your Wi-Fi Speed Slow?</h2>
          <p>
            If you’re experiencing slow internet speeds, it could be due to a variety of factors. Interference, outdated equipment, or network congestion are just a few possibilities.
          </p>
        </div>

        <!-- Blog Details Section -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">5 Tips to Speed Up Your Wi-Fi Connection</h2>
          <div class="mb-6">
            <h3 class="text-lg font-semibold">1. Place Your Router in a Central Location</h3>
            <p>
              The placement of your router significantly affects Wi-Fi coverage. Place it in a central location to ensure that the signal reaches all parts of your home.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">2. Use the Right Wi-Fi Channel</h3>
            <p>
              If your router is set to a crowded Wi-Fi channel, it can slow down your internet speed. Change to a less crowded channel, especially if you live in an apartment or a densely populated area.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">3. Upgrade Your Router Firmware</h3>
            <p>
              Outdated firmware can slow down your router's performance. Check for updates and keep your router’s firmware up to date for optimal performance.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">4. Switch to 5GHz Wi-Fi</h3>
            <p>
              If you’re using a dual-band router, switch to the 5GHz frequency band. It’s less crowded and offers faster speeds, especially for devices close to the router.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">5. Reduce Interference from Other Devices</h3>
            <p>
              Devices such as microwaves, cordless phones, and baby monitors can cause Wi-Fi interference. Move your router away from these devices to reduce signal disruption.
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
  name: 'BlogDetail3',
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
