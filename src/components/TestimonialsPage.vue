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
          <span class="text-[#EE585B]">Testimonials</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          See what our customers say about ALNET's reliable telecommunications services
        </p>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-300/20 to-purple-300/25 rounded-full blur-2xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300/15 rounded-full blur-xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Testimonial Card 1 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "Great service from a trusted provider. The internet is very fast and stable. I am very glad with this service."
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Elvaretta Alexandra</p>
                  <p class="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 2 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "ALNET has transformed our business operations with their reliable internet service. Outstanding support and incredibly fast speeds!"
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Ahmad Rizki</p>
                  <p class="text-sm text-gray-500">IT Manager</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 3 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "Perfect for remote work! The connection is stable throughout the day and their customer service is always helpful and responsive."
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Sarah Indira</p>
                  <p class="text-sm text-gray-500">Remote Worker</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 4 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "As a family with multiple devices, ALNET provides consistent high-speed internet for all our needs. Highly recommended!"
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Budi Santoso</p>
                  <p class="text-sm text-gray-500">Family Plan User</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 5 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "Excellent service quality and competitive pricing. ALNET has exceeded my expectations in every aspect of their service."
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Maya Putri</p>
                  <p class="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 6 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex mb-3">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
                </div>
                <p class="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "The technical support team is amazing! They resolved my connectivity issue within minutes. Professional and efficient service."
                </p>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-[#1E204B] text-lg">Rizky Pratama</p>
                  <p class="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- Animated Join Our Satisfied Customers CTA -->
<section class="py-16 md:py-20 px-6 md:px-24 bg-white">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-poppins animate-bounce animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
      Join Our Satisfied Customers
    </h2>
    <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Experience the same reliable, fast internet service that our customers love. 
      Get your free consultation today and see why ALNET is the trusted choice.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <router-link
        to="/contact"
        class="inline-flex items-center justify-center px-8 py-4 bg-[#EE585B] text-white font-semibold rounded-full transform hover:scale-110 hover:bg-[#ff8989] transition duration-300 shadow-lg animate-pulse"
      >
        Get Started Today
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
  name: 'TestimonialsPage', // ✅ Changed from 'Testimonials' to 'TestimonialsPage'
  components: {
    DefaultLayout
  },
  mounted() {
    // Add any animations or interactions here if needed
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

      // Observe testimonial cards
      document.querySelectorAll('.bg-white\\/80').forEach(card => {
        observer.observe(card)
      })
    }
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
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

body {
  padding-bottom: 90px;  /* Adjust the padding as per your requirement */
}

/* Additional padding for sections */
section {
  padding-bottom: 90px; /* Ensure the sections have padding */
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
</style>