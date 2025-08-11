<template>
  <DefaultLayout>
    <div class="bg-white">
      <!-- Hero Section with Blur Effects -->
      <section class="py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <!-- Decorative Background Blurs -->
        <div class="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div class="absolute top-20 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
        
        <!-- Main Content -->
        <div class="mt-20 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Side - Image with Decorative Effects -->
            <div class="order-2 lg:order-1">
              <div class="relative image-container overflow-hidden">
                <!-- Decorative Blur Effects around Image -->
                <div class="absolute -top-4 -left-4 w-32 h-32 bg-[#EE585B]/30 rounded-full blur-xl"></div>
                <div class="absolute -top-2 -right-2 w-24 h-24 bg-[#EE585B]/24 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-2 -left-2 w-16 h-16 bg-[#EE585B]/25 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-[#EE585B]/35 rounded-full blur-xl"></div>
                
                <!-- Image container with hover effect -->
                <div class="image-flip-container h-full relative z-10">
                  <div class="image-flip h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Software Development" 
                      class="rounded-2xl w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side - Content -->
            <div class="order-1 lg:order-2 flex flex-col justify-center">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E204B] mb-6 font-poppins leading-tight">
                Software <span class="text-[#EE585B]">Development</span><br>
                <span class="text-3xl md:text-4xl lg:text-5xl">Services</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                Transform your ideas into powerful software solutions with our expert development team
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Software Stack Section -->
      <section class="py-16 md:py-20 px-6 md:px-24 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">
              Our Software Stack
            </h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and methodologies for robust software solutions
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Programming Languages -->
            <div class="bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 font-poppins">Programming Languages</h3>
              <div class="space-y-3 text-center">
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">C++</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Java</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Python</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">JavaScript</div>
              </div>
            </div>

            <!-- Frameworks -->
            <div class="bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 font-poppins">Frameworks</h3>
              <div class="space-y-3 text-center">
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">React</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Django</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Angular</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Spring Boot</div>
              </div>
            </div>

            <!-- Methodologies -->
            <div class="bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 font-poppins">Methodologies</h3>
              <div class="space-y-3 text-center">
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Agile</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Scrum</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">Kanban</div>
                <div class="bg-white bg-opacity-10 rounded-lg py-3 px-4 hover:bg-opacity-20 transition-all duration-300">DevOps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Solutions Section -->
      <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">
              Our Solutions
            </h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Solutions List -->
            <div class="space-y-6">
              <!-- Web Application -->
              <div class="bg-white border-l-4 border-[#EE585B] rounded-r-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Web Application</h3>
                    <p class="text-gray-600 leading-relaxed">We create dynamic, responsive web applications tailored to your business needs with modern technologies and best practices.</p>
                  </div>
                </div>
              </div>

              <!-- Cloud Solutions -->
              <div class="bg-white border-l-4 border-[#EE585B] rounded-r-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Cloud Solutions</h3>
                    <p class="text-gray-600 leading-relaxed">We offer scalable cloud solutions to enhance your business efficiency with secure, reliable, and cost-effective infrastructure.</p>
                  </div>
                </div>
              </div>

              <!-- Mobile Apps -->
              <div class="bg-white border-l-4 border-[#EE585B] rounded-r-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm2.5 9a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Mobile Apps</h3>
                    <p class="text-gray-600 leading-relaxed">Our mobile solutions are designed to provide seamless user experiences on all devices with native and cross-platform development.</p>
                  </div>
                </div>
              </div>

              <!-- Enterprise Software -->
              <div class="bg-white border-l-4 border-[#EE585B] rounded-r-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-15a2 2 0 00-2 2v11a3 3 0 106 0V2a2 2 0 00-2-2h-2zM9 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm7-15a2 2 0 00-2 2v11a3 3 0 106 0V2a2 2 0 00-2-2h-2zm-1 13a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Enterprise Software</h3>
                    <p class="text-gray-600 leading-relaxed">Custom enterprise solutions to streamline your business operations with integrated systems and automated workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="lg:mt-16">
              <div class="relative image-container">
                <!-- Decorative elements -->
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-[#EE585B]/20 rounded-full blur-xl"></div>
                <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1E204B]/20 rounded-full blur-xl"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team Working" 
                  class="rounded-2xl shadow-2xl w-full h-96 object-cover relative z-10 mt-12"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- Development Process Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">
            Our Development Process
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your project is delivered on time and exceeds expectations
          </p>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center group relative">
            <div class="w-20 h-20 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-2xl font-bold text-white font-poppins">1</span>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Analysis</h3>
            <p class="text-gray-600 leading-relaxed">Understanding your requirements and project scope to deliver the perfect solution</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center group relative">
            <div class="w-20 h-20 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-2xl font-bold text-white font-poppins">2</span>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Design</h3>
            <p class="text-gray-600 leading-relaxed">Creating user-friendly and intuitive designs that enhance user experience</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center group relative">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-2xl font-bold text-white font-poppins">3</span>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Development</h3>
            <p class="text-gray-600 leading-relaxed">Building robust and scalable solutions using cutting-edge technologies</p>
          </div>

          <!-- Step 4 -->
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-2xl font-bold text-white font-poppins">4</span>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-3 font-poppins">Deployment</h3>
            <p class="text-gray-600 leading-relaxed">Launching and maintaining your application with ongoing support</p>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'SoftwareDev',
  components: { DefaultLayout },
  data() {
    return {
      animatedStats: {
        projects: 0,
        clients: 0,
        technologies: 0,
        support: 0
      },
      finalStats: {
        projects: 150,
        clients: 98,
        technologies: 25,
        support: 7
      },
      statsAnimated: false
    }
  },
  mounted() {
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

        this.animatedStats.projects = Math.floor(this.finalStats.projects * easeProgress)
        this.animatedStats.clients = Math.floor(this.finalStats.clients * easeProgress)
        this.animatedStats.technologies = Math.floor(this.finalStats.technologies * easeProgress)
        this.animatedStats.support = Math.floor(this.finalStats.support * easeProgress)

        if (currentStep >= steps) {
          this.animatedStats = { ...this.finalStats }
          clearInterval(timer)
        }
      }, interval)
    },

    observeStatsSection() {
      const statsSection = document.querySelector('section.bg-gradient-to-br.from-\\[\\#1E204B\\]')
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

    goToServices() {
      // Navigate by path directly
      this.$router.push('/').then(() => { // This navigates to the home page
        this.$nextTick(() => {
          const servicesSection = document.getElementById('our-services');
          if (servicesSection) {
            servicesSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  }
}
</script>


<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

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

/* Image container styling */
.image-container {
  height: 400px;
  width: 85%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .image-container {
    height: 500px;
    width: 100%;
  }
}

/* Image flip container - implement a simple hover effect */
.image-flip-container {
  perspective: 1000px;
}

.image-flip {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.image-flip-container:hover .image-flip {
  transform: rotateY(10deg) scale(1.05);
}

/* Responsive adjustments */
@media (min-width: 1024px) {
  .image-container {
    height: 550px;
  }
}
</style>
