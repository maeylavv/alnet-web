<template>
  <DefaultLayout>
    <!-- Hero Section with animated gradients and background shapes -->
    <section class="mt-20 py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute -top-20 -right-40 w-96 h-96 bg-gradient-to-br from-[#EE585B]/30 to-[#1E204B]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-28 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2A2D5F]/20 via-[#1E204B]/10 to-white/30 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
          Our <span class="text-[#EE585B]">IT Infrastructure</span> Services
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed backdrop-blur bg-white/60 rounded-xl px-4 py-3 inline-block shadow animate-fade-in">
          Comprehensive IT infrastructure solutions tailored to your business needs, 
          ensuring reliability, security, and efficiency for your enterprise.
        </p>
      </div>
    </section>

    <!-- Services Cards Section with glassmorphic cards and hover scale effect -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Cloud Services Card -->
          <div class="glass-card p-8 rounded-2xl shadow-lg border border-gray-100 group transition-transform duration-300 hover:scale-105">
            <div class="flex items-start gap-6">
              <div class="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A]">
                <svg class="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-[#1E204B] mb-4 font-poppins">Cloud Services</h3>
                <p class="text-gray-600 leading-relaxed">
                  We offer scalable cloud solutions tailored to your business needs, ensuring reliability and efficiency 
                  for your operations with cutting-edge technology and seamless integration.
                </p>
              </div>
            </div>
          </div>

          <!-- Network Management Card -->
          <div class="glass-card p-8 rounded-2xl shadow-lg border border-gray-100 group transition-transform duration-300 hover:scale-105">
            <div class="flex items-start gap-6">
              <div class="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F]">
                <svg class="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-[#1E204B] mb-4 font-poppins">Network Management</h3>
                <p class="text-gray-600 leading-relaxed">
                  Our network management services ensure smooth and secure connectivity across your enterprise, 
                  with 24/7 monitoring and proactive maintenance for optimal performance.
                </p>
              </div>
            </div>
          </div>

          <!-- Security Measures Card -->
          <div class="glass-card p-8 rounded-2xl shadow-lg border border-gray-100 group transition-transform duration-300 hover:scale-105">
            <div class="flex items-start gap-6">
              <div class="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-green-500 to-green-600">
                <svg class="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-[#1E204B] mb-4 font-poppins">Security Measures</h3>
                <p class="text-gray-600 leading-relaxed">
                  We implement advanced security measures to protect your data and infrastructure from threats, 
                  ensuring comprehensive protection with the latest cybersecurity technologies.
                </p>
              </div>
            </div>
          </div>

          <!-- Consulting Card -->
          <div class="glass-card p-8 rounded-2xl shadow-lg border border-gray-100 group transition-transform duration-300 hover:scale-105">
            <div class="flex items-start gap-6">
              <div class="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-purple-600">
                <svg class="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-[#1E204B] mb-4 font-poppins">Consulting</h3>
                <p class="text-gray-600 leading-relaxed">
                  Our experts provide strategic consulting to optimize your IT infrastructure and operations, 
                  helping you make informed decisions for long-term business growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with shimmering icons and fade-in -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
            Why Choose Our IT Infrastructure Services?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Comprehensive solutions backed by expertise and reliability
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 24/7 Support -->
          <div class="text-center group animate-fade-in" style="animation-delay: 100ms">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shimmer-icon bg-gradient-to-br from-[#EE585B] to-[#FF7A7A]">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">24/7 Monitoring</h3>
            <p class="text-gray-600 leading-relaxed">
              Round-the-clock monitoring and support to ensure your infrastructure runs smoothly at all times.
            </p>
          </div>

          <!-- Scalable Solutions -->
          <div class="text-center group animate-fade-in" style="animation-delay: 200ms">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shimmer-icon bg-gradient-to-br from-[#1E204B] to-[#2A2D5F]">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">Scalable Solutions</h3>
            <p class="text-gray-600 leading-relaxed">
              Infrastructure that grows with your business, easily scalable to meet changing demands and requirements.
            </p>
          </div>

          <!-- Expert Team -->
          <div class="text-center group animate-fade-in" style="animation-delay: 300ms">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shimmer-icon bg-gradient-to-br from-green-500 to-green-600">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E204B] mb-4 font-poppins">Expert Team</h3>
            <p class="text-gray-600 leading-relaxed">
              Experienced professionals with deep expertise in modern IT infrastructure and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials Section with hover scale and fade-in -->
<section class="py-16 md:py-20 px-6 md:px-24 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
        Client Testimonials
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
        What our satisfied clients say about our IT infrastructure services
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Testimonial Cards with hover scale -->
      <div class="glass-card p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#EE585B]">
            <span class="text-white font-bold text-lg">E</span>
          </div>
          <div>
            <h4 class="font-semibold text-[#1E204B]">Elvaretta Alexandra</h4>
            <p class="text-sm text-gray-500">Business Owner</p>
          </div>
        </div>
        <p class="text-gray-600 italic leading-relaxed text-sm">
          "Great service from a trusted provider. The internet is very fast and stable. I am very glad with this service."
        </p>
      </div>

      <div class="glass-card p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#1E204B]">
            <span class="text-white font-bold text-lg">J</span>
          </div>
          <div>
            <h4 class="font-semibold text-[#1E204B]">Park Jimin</h4>
            <p class="text-sm text-gray-500">Tech Entrepreneur</p>
          </div>
        </div>
        <p class="text-gray-600 italic leading-relaxed text-sm">
          "This service has transformed the way we handle data. Our operations are now more efficient and secure."
        </p>
      </div>

      <div class="glass-card p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-green-500">
            <span class="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <h4 class="font-semibold text-[#1E204B]">Jeon Mayla</h4>
            <p class="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
        <p class="text-gray-600 italic leading-relaxed text-sm">
          "Highly reliable service. My team’s productivity has improved dramatically since we switched."
        </p>
      </div>

      <div class="glass-card p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-purple-500">
            <span class="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <h4 class="font-semibold text-[#1E204B]">Amira Zahra</h4>
            <p class="text-sm text-gray-500">Marketing Director</p>
          </div>
        </div>
        <p class="text-gray-600 italic leading-relaxed text-sm">
          "Exceptional support and customer service. We’ve seen a remarkable improvement in network speed and stability."
        </p>
      </div>
    </div>
  </div>
</section>

     <!-- Animated CTA Section -->
    <section class="py-20 px-6 md:px-24 bg-gradient-to-br from-[#2A2D5F] via-[#1E204B] to-[#EE585B] text-white relative overflow-hidden">
      <div class="max-w-4xl mx-auto text-center z-10 relative">
        <h2 class="text-3xl md:text-4xl font-bold mb-5 font-poppins animate-bounce">Need a Consultation?</h2>
        <p class="text-lg mb-10 max-w-2xl mx-auto text-gray-200">Let us build, secure, and modernize your IT infrastructure. Our experts are ready to help you grow.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-[#EE585B] text-white font-semibold rounded-full transform hover:scale-110 hover:bg-[#ff8989] transition duration-300 shadow-lg animate-pulse"
          >
            Get in Touch
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
          <a
            href="tel:+6285155478411"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1E204B] transition duration-300 transform hover:scale-105"
          >
            Call Now
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'ITInfrastructure',
  components: { DefaultLayout }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Glassmorphic cards */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(18px);
  border: 1.5px solid rgba(200,200,200,0.10);
  box-shadow: 0 6px 32px 0 rgba(1,29,95,.08);
  transition: transform 0.3s cubic-bezier(.4,2.3,.3,1), box-shadow 0.3s;
}
.glass-card:hover, .glass-card:focus {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 16px 42px 0 rgba(238, 88, 91, 0.16);
}

/* Animate gradient text for headings */
@keyframes gradient-move {
  0% { background-position: 0% 50%;}
  100% { background-position: 100% 50%;}
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-move 4s linear infinite alternate;
}

/* Fade-in animation */
@keyframes fade-in {
  from { opacity:0; transform: translateY(20px);}
  to { opacity:1; transform: none;}
}
.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}

/* Pulsing animation */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1;}
  50% { transform: scale(1.05); opacity: 0.8;}
}
.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}

/* Bouncing animation */
@keyframes bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-10px);}
}
.animate-bounce {
  animation: bounce 2.5s ease-in-out infinite;
}

/* Shimmer icon effect */
.shimmer-icon {
  position: relative;
  overflow: hidden;
}
.shimmer-icon::before {
  content: '';
  position: absolute;
  top: 0; left: -150%;
  width: 150%;
  height: 100%;
  background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%);
  animation: shimmer 2s infinite;
}
@keyframes shimmer {
  100% { left: 150%;}
}
</style>
