<template>
  <DefaultLayout>
    <!-- Hero Section matching your About Us style -->
    <section class="mt-20 py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <!-- 2-column grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left Side - Decorative Element -->
          <div class="order-2 lg:order-1 relative flex justify-center items-center min-h-[300px]">
            <!-- Decorative Blur Effects -->
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#EE585B]/30 rounded-full blur-2xl"></div>
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-[#EE585B]/25 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-6 -left-6 w-28 h-28 bg-[#EE585B]/25 rounded-full blur-xl"></div>
            <div class="absolute -bottom-10 -right-10 w-36 h-36 bg-[#EE585B]/35 rounded-full blur-2xl"></div>

            <!-- Circle with Question Mark Icon -->
            <div class="w-48 h-48 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-full flex items-center justify-center z-10 shadow-2xl">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <!-- Right Side - Text Content -->
          <div class="order-1 lg:order-2 flex flex-col justify-center lg:pl-20">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E204B] mb-6 font-poppins leading-tight">
              Frequently<br>
              <span class="text-[#EE585B]">Asked</span><br>
              <span class="text-3xl md:text-4xl lg:text-5xl">Questions</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Get quick answers to common questions about our internet services and support
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Content Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- Tab Navigation -->
        <div class="flex flex-wrap justify-center mb-12">
          <div class="flex bg-gray-50 rounded-2xl p-2 shadow-lg border border-gray-100">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              @click="activeTab = tab.key"
              :class="[
                'px-6 md:px-8 py-3 md:py-4 font-semibold text-sm md:text-base transition-all duration-300 rounded-xl font-poppins',
                activeTab === tab.key
                  ? 'text-white bg-[#EE585B] shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-[#1E204B] hover:bg-white'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>
        

        <!-- FAQ Items -->
        <div class="space-y-6">
          <div
            v-for="(faq, index) in currentFAQs"
            :key="index"
            class="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full px-6 md:px-8 py-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-300"
            >
              <div class="flex items-start space-x-4 flex-1">
                <div class="flex-shrink-0 w-8 h-8 bg-[#EE585B] rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  {{ index + 1 }}
                </div>
                <span class="font-semibold text-[#1E204B] text-lg md:text-xl leading-relaxed font-poppins">
                  {{ faq.question }}
                </span>
              </div>
              <div
                :class="[
                  'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ml-4 transition-all duration-300',
                  openItems.includes(index) 
                    ? 'bg-[#EE585B] text-white transform rotate-45' 
                    : 'bg-gray-100 text-gray-500 hover:bg-[#EE585B]/10 hover:text-[#EE585B]'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </button>
            
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="openItems.includes(index)" class="overflow-hidden">
                <div class="px-6 md:px-8 pb-6">
                  <div class="ml-12 p-6 bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#EE585B] rounded-r-2xl">
                    <p class="text-gray-600 leading-relaxed text-base md:text-lg">{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

  <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#1E204B] mb-4 font-poppins">Still Need Help?</h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Our support team is here to assist you with any questions
        </p>
      </div>
      <div class="relative flex flex-col md:flex-row md:justify-between md:items-center">
        <!-- Stepper Line -->
        <div class="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 z-0"></div>
        <!-- Step: Call Us -->
        <div class="relative md:w-1/3 flex flex-col items-center mb-16 md:mb-0">
          <div class="z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#EE585B] to-[#FF7A7A] rounded-full shadow-lg mb-4">
            <!-- Phone Icon SVG -->
            <!-- ...SVG here... -->
             <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
          </div>
          <h3 class="text-xl font-bold text-[#1E204B] mb-2 font-poppins">Call Us</h3>
          <p class="text-gray-600 text-center mb-2">Speak directly with our support team for immediate assistance.</p>
          <a href="tel:0355337337" class="text-[#EE585B] font-semibold hover:underline">0355 337337</a>
        </div>
        <!-- Step: Email Us -->
        <div class="relative md:w-1/3 flex flex-col items-center mb-16 md:mb-0">
          <div class="z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1E204B] to-[#2A2D5F] rounded-full shadow-lg mb-4">
            <!-- Mail Icon SVG -->
            <!-- ...SVG here... -->
             <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
          </div>
          <h3 class="text-xl font-bold text-[#1E204B] mb-2 font-poppins">Email Us</h3>
          <p class="text-gray-600 text-center mb-2">Send us your questions and we'll respond within 24 hours.</p>
          <a href="mailto:admin@alnet.id" class="text-[#EE585B] font-semibold hover:underline">admin@alnet.id</a>
        </div>
        <!-- Step: Visit Office -->
      <div class="relative md:w-1/3 flex flex-col items-center">
        <div class="z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg mb-4">
          <!-- Map Pin Icon SVG -->
          <!-- ...SVG here... -->
           <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
        </div>
        <h3 class="text-xl font-bold text-[#1E204B] mb-2 font-poppins">Visit Office</h3>
        <p class="text-gray-600 text-center mb-2">Come visit us for personalized consultation.</p>
        <a
          href="https://maps.app.goo.gl/LR2tuFvNqMqgQGun6"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#EE585B] font-semibold text-center hover:underline transition"
        >
          Jl Dr Sutomo VIII / 42<br />Karangwaru, Tulungagung
        </a>
      </div>
      </div>
    </div>
  </section>


   <!-- Animated Ready to Get Started CTA -->
<section class="py-16 md:py-20 px-6 md:px-24 bg-white">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-poppins animate-bounce animate-gradient bg-gradient-to-r from-[#EE585B] via-[#1E204B] to-[#2A2D5F] bg-clip-text text-transparent">
      Ready to Get Started?
    </h2>
    <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Join thousands of satisfied customers who trust ALNET for reliable telecommunications services. 
      Get your free consultation today and discover our solutions.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <router-link
        to="/contact"
        class="inline-flex items-center justify-center px-8 py-4 bg-[#EE585B] text-white font-semibold rounded-full transform hover:scale-110 hover:bg-[#ff8989] transition duration-300 shadow-lg font-poppins animate-pulse"
      >
        Contact Us Now
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
      <button
        class="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E204B] text-[#1E204B] font-semibold rounded-full hover:bg-[#1E204B] hover:text-white transition duration-300 transform hover:scale-105"
        @click="goToServices"
      >
        View Our Services
      </button>
    </div>
  </div>
</section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'FAQPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      activeTab: 'general',
      openItems: [],
      tabs: [
        { key: 'general', label: 'General Information' },
        { key: 'home', label: 'Home Internet' },
        { key: 'b2b', label: 'B2B & Enterprise' }
      ],
      faqs: {
        general: [
          {
            question: 'What is Alnet?',
            answer: 'Alnet is a leading telecommunications provider in Indonesia, offering reliable internet services for homes and businesses. We specialize in high-speed internet connections, dedicated bandwidth solutions, and comprehensive networking services to meet diverse connectivity needs.'
          },
          {
            question: 'What products are available at Alnet Home?',
            answer: 'Alnet Home offers various internet packages including basic browsing plans, high-speed streaming packages, and premium unlimited plans. We also provide Wi-Fi equipment, networking accessories, and technical support services to ensure optimal connectivity for your home.'
          },
          {
            question: 'How can I contact Alnet customer support?',
            answer: 'You can reach our customer support team through multiple channels: call us at 0355 337337, email us at admin@alnet.id, visit our office at Jl Dr Sutomo VIII / 42, Karangwaru, Tulungagung, East Java, or use our online contact form. Our support team is available to assist you with any questions or technical issues.'
          },
          {
            question: 'Are there any installation fees?',
            answer: 'Installation fees may vary depending on your location, package selection, and specific requirements. Some promotional packages include free installation, while others may have a one-time setup fee. Please contact our sales team for detailed pricing information and current promotional offers.'
          }
        ],
        home: [
          {
            question: 'What types of internet packages does Alnet Home offer?',
            answer: 'Alnet Home provides several internet packages with varying speeds and quotas to suit your personal or household needs, from casual browsing to high-speed streaming. Our packages range from basic plans for light usage to premium unlimited plans for heavy users and families.'
          },
          {
            question: 'How do I install Alnet Home Internet at my residence?',
            answer: 'Once you\'ve subscribed, our technician will schedule a home visit to install the necessary equipment and ensure your internet is running smoothly. The installation process typically takes 2-4 hours and includes setting up the modem, configuring your Wi-Fi network, and testing the connection.'
          },
          {
            question: 'Can I upgrade my Alnet Home package later?',
            answer: 'Yes, you can upgrade your package anytime by contacting our customer service or visiting the nearest Alnet branch. Upgrades are usually processed within 24-48 hours, and you\'ll only pay the difference in monthly fees from the upgrade date.'
          },
          {
            question: 'What is the average speed I can expect from Alnet Home?',
            answer: 'Our packages range from 10 Mbps up to 100 Mbps, depending on the plan you choose and the area you live in. Actual speeds may vary based on network conditions, time of day, and your specific location. We guarantee at least 80% of the advertised speed during peak hours.'
          }
        ],
        b2b: [
          {
            question: 'What services are included in the Super & Premium packages for businesses?',
            answer: 'Our Super & Premium packages include high-speed internet with guaranteed bandwidth, dedicated IP addresses, priority technical support, service level agreements (SLAs), advanced security features, and 24/7 monitoring. Premium packages also include backup connections and enhanced support services.'
          },
          {
            question: 'What types of businesses are these packages suitable for?',
            answer: 'These packages are ideal for offices, retail chains, co-working spaces, medium to large enterprises, educational institutions, healthcare facilities, and any business operation that requires reliable, high-performance internet connectivity with guaranteed uptime and professional support.'
          },
          {
            question: 'Do these packages come with 24/7 technical support?',
            answer: 'Yes, all Super & Premium clients receive priority technical support with 24/7 availability. This includes dedicated account management, faster response times, remote troubleshooting, and on-site support when needed. Our business support team is specially trained to handle enterprise-level requirements.'
          },
          {
            question: 'Can I customize the package based on my company\'s needs?',
            answer: 'Absolutely! Our business packages are highly flexible and can be customized based on your specific requirements including bandwidth allocation, number of devices, security features, backup solutions, and service level agreements. We work with you to design the perfect connectivity solution.'
          },
          {
            question: 'What\'s the difference between the Super and Premium packages?',
            answer: 'Super packages are designed for smaller to medium-scale business needs with standard enterprise features. Premium packages are intended for large-scale operations requiring advanced networking solutions, higher bandwidth guarantees, additional redundancy, enhanced security features, and priority support with faster response times.'
          }
        ]
      }
    }
  },
  computed: {
    currentFAQs() {
      return this.faqs[this.activeTab] || []
    }
  },
  methods: {
    toggleFAQ(index) {
      const position = this.openItems.indexOf(index)
      if (position > -1) {
        this.openItems.splice(position, 1)
      } else {
        this.openItems.push(index)
      }
      },

      goToServices() {
    this.$router.push('/').then(() => { 
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

  },
  watch: {
    activeTab() {
      this.openItems = []
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

/* Smooth transitions */
.transition-all {
  transition-property: all;
}

/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>