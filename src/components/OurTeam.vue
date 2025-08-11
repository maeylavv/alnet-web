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
          Meet <span class="text-[#EE585B]">Our Team</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Get to know the talented professionals behind ALNET's success in delivering exceptional telecommunications services
        </p>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-300/20 to-purple-300/25 rounded-full blur-2xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300/15 rounded-full blur-xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <!-- David Indra Y -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <svg class="w-24 h-24 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-amber-200">
                <h3 class="text-lg font-bold text-[#1E204B]">David I.Y</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">CEO and Co-Founder</p>
            </div>
          </div>

          <!-- Mayla Fatima -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                  <svg class="w-24 h-24 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-slate-200">
                <h3 class="text-lg font-bold text-[#1E204B]">Maey FP</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">Head of Development</p>
            </div>
          </div>

          <!-- Zalfaa Berliana -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-orange-300 to-yellow-300 flex items-center justify-center">
                  <svg class="w-24 h-24 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-orange-200">
                <h3 class="text-lg font-bold text-[#1E204B]">Zalfa B.P</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">Head of Sales</p>
            </div>
          </div>

          <!-- Yusuf Ali -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-red-300 to-pink-300 flex items-center justify-center">
                  <svg class="w-24 h-24 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-red-200">
                <h3 class="text-lg font-bold text-[#1E204B]">Yusuf Ali</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">Network Management Manager</p>
            </div>
          </div>

          <!-- Alfin GP -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <svg class="w-24 h-24 text-indigo-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-indigo-200">
                <h3 class="text-lg font-bold text-[#1E204B]">Alfin GP</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">Customer Management Manager</p>
            </div>
          </div>

          <!-- Karina Syarav -->
          <div class="flex flex-col items-center team-member">
            <div class="relative mb-6">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center overflow-hidden shadow-lg">
                <!-- Profile Image Placeholder -->
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
                  <svg class="w-24 h-24 text-pink-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <!-- Name Badge -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-pink-200">
                <h3 class="text-lg font-bold text-[#1E204B]">Aditya S.</h3>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-600 font-medium">Head of Product</p>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- Team Values Section -->
<section class="py-16 md:py-20 px-6 md:px-24 bg-gradient-to-br from-[#F6F8FB] to-[#EAECF4]">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#1E204B] mb-6 font-poppins">
        Our Team Values
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        The principles that guide our team in delivering exceptional telecommunications services
      </p>
    </div>
    <!-- Card Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Innovation -->
      <div class="relative flex flex-col items-start bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-blue-100 px-7 pt-12 pb-8 transition-all duration-300 hover:scale-105 hover:border-blue-300 group">
        <!-- Floating Icon -->
        <div class="absolute -top-7 left-7 z-10">
          <div class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition">
            <!-- Sparkles Icon (e.g., Spark Innovation) -->
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 3v2m0 14v2m7-7h2M3 12H5m10.66-5.66l1.42 1.42M6.34 17.66l1.42-1.42m10.66 5.66l-1.42-1.42M6.34 6.34l-1.42 1.42" />
            </svg>
          </div>
        </div>
        <h3 class="mt-8 text-left text-2xl font-bold text-[#223] mb-2">Innovation</h3>
        <p class="text-left text-gray-600">
          Constantly pushing boundaries to deliver cutting-edge telecommunications solutions.
        </p>
      </div>

      <!-- Reliability -->
      <div class="relative flex flex-col items-start bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-green-100 px-7 pt-12 pb-8 transition-all duration-300 hover:scale-105 hover:border-green-300 group">
        <div class="absolute -top-7 left-7 z-10">
          <div class="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition">
            <!-- Shield / Check Icon -->
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 4l7 4v4a7 7 0 01-7 7 7 7 0 01-7-7V8z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
        <h3 class="mt-8 text-left text-2xl font-bold text-[#223] mb-2">Reliability</h3>
        <p class="text-left text-gray-600">
          Ensuring consistent, dependable service that our customers can always count on.
        </p>
      </div>

      <!-- Excellence -->
      <div class="relative flex flex-col items-start bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-pink-100 px-7 pt-12 pb-8 transition-all duration-300 hover:scale-105 hover:border-pink-300 group">
        <div class="absolute -top-7 left-7 z-10">
          <div class="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition">
            <!-- Star Icon -->
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polygon points="12 2 15 8.5 22 9.3 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.3 9 8.5 12 2" />
            </svg>
          </div>
        </div>
        <h3 class="mt-8 text-left text-2xl font-bold text-[#223] mb-2">Excellence</h3>
        <p class="text-left text-gray-600">
          Striving for perfection in every aspect of our service delivery and customer experience.
        </p>
      </div>
    </div>
  </div>
</section>


   <!-- Updated Call to Action with animated gradient style -->
<section class="py-20 px-6 md:px-24 bg-gradient-to-br from-[#2A2D5F] via-[#1E204B] to-[#EE585B] text-white relative overflow-hidden">
  <div class="max-w-4xl mx-auto text-center z-10 relative">
    <h2 class="text-3xl md:text-4xl font-bold mb-5 font-poppins animate-bounce">
      Ready to Work with Our Team?
    </h2>
    <p class="text-lg mb-10 max-w-2xl mx-auto text-gray-200">
      Get in touch with our expert team to discuss your telecommunications needs and discover how we can help your business grow.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <router-link
        to="/contact"
        class="inline-flex items-center justify-center px-8 py-4 bg-[#EE585B] text-white font-semibold rounded-full transform hover:scale-110 hover:bg-[#ff8989] transition duration-300 shadow-lg animate-pulse"
      >
        Contact Our Team
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'TeamPage',
  components: {
    DefaultLayout
  },
  mounted() {
    // Add scroll animations
    this.addScrollAnimations()
  },
  methods: {
    addScrollAnimations() {
      // Optional: Add scroll-triggered animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      }, observerOptions)

      // Observe team member cards
      document.querySelectorAll('.team-member').forEach(member => {
        observer.observe(member)
      })
    }
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-move 4s linear infinite alternate;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce {
  animation: bounce 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}
/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

body {
  padding-bottom: 90px;
}

/* Additional padding for sections */
section {
  padding-bottom: 90px;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Team member hover effects */
.team-member {
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-8px);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s ease;
}
</style>