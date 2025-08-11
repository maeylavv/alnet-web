<template>
  <DefaultLayout>
    <!-- Updated Hero Section -->
    <section class="py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative">
      <!-- Decorative Background Blurs -->
      <div class="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-20 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>

      <!-- Main Content -->
      <div class="mt-20 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Image with Flip Effect -->
          <div class="order-2 lg:order-1">
            <div class="relative image-container overflow-hidden">
              <div class="absolute -top-4 -left-4 w-32 h-32 bg-[#EE585B]/30 rounded-full blur-xl"></div>
              <div class="absolute -top-2 -right-2 w-24 h-24 bg-[#EE585B]/24 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-2 -left-2 w-16 h-16 bg-[#EE585B]/25 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-[#EE585B]/35 rounded-full blur-xl"></div>
              <div class="image-flip-container h-full relative z-10">
                <div class="image-flip h-full">
                  <img src="/images/aboutus4.jpg" alt="Front Image" class="rounded-2xl w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" />
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Content -->
          <div class="order-1 lg:order-2 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E204B] mb-6 font-poppins leading-tight">
              {{ $t('aboutAlnetTitle1') }} <span class="text-[#EE585B]">Alnet</span><br />
              <span class="text-3xl md:text-4xl lg:text-5xl">{{ $t('aboutAlnetTitle2') }}</span><br />
              <span class="text-3xl md:text-4xl lg:text-5xl">{{ $t('aboutAlnetTitle3') }}</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {{ $t('aboutAlnetDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Mission Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-8 font-poppins">
              {{ $t('ourMissionTitle') }}
            </h2>
            <div class="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>{{ $t('ourMissionParagraph1') }}</p>
              <p>{{ $t('ourMissionParagraph2') }}</p>
              <p>{{ $t('ourMissionParagraph3') }}</p>
            </div>
          </div>

          <!-- Director Says -->
          <div class="lg:mt-16">
            <div class="bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#EE585B] rounded-r-2xl p-8 shadow-lg">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-[#EE585B] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p id="typing-text" class="text-gray-700 italic mb-4 leading-relaxed"></p>
                  <div class="border-t border-gray-200 pt-4">
                    <p class="font-semibold text-[#1E204B]">{{ $t('directorName') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('directorPosition') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Us Different -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">
            {{ $t('whatMakesUsDifferentTitle') }}
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {{ $t('whatMakesUsDifferentDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Free Consultation -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">{{ $t('freeConsultationTitle') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('freeConsultationDesc') }}</p>
          </div>

          <!-- One Stop Solution -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">{{ $t('oneStopSolutionTitle') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('oneStopSolutionDesc') }}</p>
          </div>

          <!-- Experienced -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7V5a2 2 0 012-2h4a2 2 0 012 2v2h3v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7h3zm2-2v2h4V5H8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">{{ $t('experiencedTitle') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('experiencedDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 font-poppins">{{ $t('alnetByNumbersTitle') }}</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">{{ $t('alnetByNumbersDesc') }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#EE585B] mb-2 font-poppins">{{ animatedStats.customers }}%</div>
            <p class="text-gray-300 text-sm md:text-base">{{ $t('Satisfaction Rate') }}</p>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#EE585B] mb-2 font-poppins">{{ animatedStats.coverage }}%</div>
            <p class="text-gray-300 text-sm md:text-base">{{ $t('networkCoverage') }}</p>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#EE585B] mb-2 font-poppins">{{ animatedStats.uptime }}%</div>
            <p class="text-gray-300 text-sm md:text-base">{{ $t('networkUptime') }}</p>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#EE585B] mb-2 font-poppins">24/{{ animatedStats.support }}</div>
            <p class="text-gray-300 text-sm md:text-base">{{ $t('supportAvailable') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">{{ $t('visitUsTitle') }}</h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{{ $t('visitUsDesc') }}</p>
        </div>

        <div class="relative">
          <iframe
            class="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659956.285742648!2d95.98030485995918!3d-2.224708638907664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4bdf5f78436fea41%3A0xf1a5073528f22cbc!2sAlnet%20Telekomunikasi%20Indonesia!5e0!3m2!1sen!2sid!4v1754202425270!5m2!1sen!2sid"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Animated Call to Action with white background -->
<section class="py-16 md:py-20 px-6 md:px-24 bg-white">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-poppins animate-bounce animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
      {{ $t('readyToExperienceTitle') }}
    </h2>
    <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      {{ $t('readyToExperienceDesc') }}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <router-link
        to="/contact"
        class="inline-flex items-center justify-center px-8 py-4 bg-[#EE585B] text-white font-semibold rounded-full transform hover:scale-110 hover:bg-[#ff8989] transition duration-300 shadow-lg animate-pulse"
      >
        {{ $t('getFreeConsultationBtn') }}
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
      <button
        class="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E204B] text-[#1E204B] font-semibold rounded-full hover:bg-[#1E204B] hover:text-white transition duration-300 transform hover:scale-105"
        @click="goToServices"
      >
        {{ $t('viewOurServicesBtn') }}
      </button>
    </div>
  </div>
</section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'AboutUs',
  components: { DefaultLayout },
  data() {
    return {
      animatedStats: {
        customers: 0,
        coverage: 0,
        uptime: 0,
        support: 0
      },
      finalStats: {
        customers: 90,
        coverage: 95,
        uptime: 99,
        support: 7
      },
      statsAnimated: false // track if animation ran
    }
  },
  mounted() {
    this.initTypingEffect()
    this.observeStatsSection()
  },
  methods: {
    animateStats() {
      if (this.statsAnimated) return
      this.statsAnimated = true

      const duration = 2000
      const interval = 50
      const steps = duration / interval

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        const easeProgress = 1 - Math.pow(1 - progress, 3)

        this.animatedStats.customers = Math.floor(this.finalStats.customers * easeProgress)
        this.animatedStats.coverage = Math.floor(this.finalStats.coverage * easeProgress)
        this.animatedStats.uptime = Math.floor(this.finalStats.uptime * easeProgress)
        this.animatedStats.support = Math.floor(this.finalStats.support * easeProgress)

        if (currentStep >= steps) {
          this.animatedStats = { ...this.finalStats }
          clearInterval(timer)
        }
      }, interval)
    },

    observeStatsSection() {
      const statsSection = document.querySelector('section.bg-gradient-to-br')
      if (!statsSection) return

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateStats()
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })

      observer.observe(statsSection)
    },

    typeText(element, text, speed = 40) {
      let index = 0
      const typing = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index)
          index++
          setTimeout(typing, speed)
        }
      }
      typing()
    },

    initTypingEffect() {
      const typingElement = document.getElementById('typing-text')
      const testimonialText = this.$t('directorTestimonial')

      if (typingElement) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.typeText(typingElement, testimonialText)
              observer.unobserve(entry.target)
            }
          })
        }, { threshold: 0.5 })

        observer.observe(typingElement)
      }
    },

    goToServices() {
      this.$router.push('/').then(() => {
        this.$nextTick(() => {
          const servicesSection = document.getElementById('our-services')
          if (servicesSection) {
            servicesSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
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

/* Image container */
.image-container {
  height: 400px;
  width: 85%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .image-container {
    height: 450px;
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .image-container {
    height: 500px;
    width: 75%;
  }
}

/* Flip effect styles omitted for brevity */
.image-flip-container {
  perspective: 1000px;
  position: relative;
  width: 100%;
  height: 100%;
}

.image-flip {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
}

.image-flip-container:hover .image-flip {
  transform: rotateY(180deg);
}

.image-flip-back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.image-flip img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.image-flip-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
