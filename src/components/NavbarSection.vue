<template>
  <!-- Navbar -->
  <header class="fixed top-4 left-0 w-full z-50 px-4 md:px-6 bg-transparent">
    <div
      class="max-w-7xl mx-auto backdrop-blur-md rounded-full shadow-lg px-4 py-3 flex items-center justify-between font-poppins relative bg-[rgba(242,247,255,0.5)]"
    >
      <!-- Logo + Language Switch Button Container -->
      <div class="flex items-center gap-4 flex-shrink-0">
        <router-link to="/" class="block">
          <img src="/images/alnet.logo.png" alt="ALNET Logo" class="h-8 md:h-10 hover:scale-105 transition-transform duration-200" />
        </router-link>
         </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-x-6 text-[#202345] text-sm md:text-base font-medium">
        <router-link
          to="/"
          class="hover:text-[#EE585B] transition-colors duration-200 relative group"
          :class="{ 'text-[#EE585B]': $route.path === '/' }"
        >
          Home
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EE585B] transition-all duration-200 group-hover:w-full" :class="{ 'w-full': $route.path === '/' }"></span>
        </router-link>
        <router-link
          to="/about"
          class="hover:text-[#EE585B] transition-colors duration-200 relative group"
          :class="{ 'text-[#EE585B]': $route.path === '/about' }"
        >
          About Us
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EE585B] transition-all duration-200 group-hover:w-full" :class="{ 'w-full': $route.path === '/about' }"></span>
        </router-link>
        <router-link
          to="/blog"
          class="hover:text-[#EE585B] transition-colors duration-200 relative group"
          :class="{ 'text-[#EE585B]': $route.path === '/services' }"
        >
          Blog
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EE585B] transition-all duration-200 group-hover:w-full" :class="{ 'w-full': $route.path === '/services' }"></span>
        </router-link>
        <router-link
          to="/faq"
          class="hover:text-[#EE585B] transition-colors duration-200 relative group"
          :class="{ 'text-[#EE585B]': $route.path === '/faq' }"
        >
          FAQ
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EE585B] transition-all duration-200 group-hover:w-full" :class="{ 'w-full': $route.path === '/faq' }"></span>
        </router-link>
        
        <!-- Others Dropdown -->
        <div class="relative group">
          <button
            class="hover:text-[#EE585B] text-sm md:text-base transition-colors duration-200 flex items-center gap-1 relative"
            :class="{ 'text-[#EE585B]': $route.path === '/team' || $route.path === '/testimonials' }"
          >
            Others
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EE585B] transition-all duration-200 group-hover:w-full" :class="{ 'w-full': $route.path === '/team' || $route.path === '/testimonials' }"></span>
          </button>
          <div class="absolute hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 z-50">
            <div class="bg-[rgba(242,247,255,0.95)] backdrop-blur-md shadow-xl rounded-xl border border-white/20 py-2 overflow-hidden">
              <router-link
                to="/team"
                class="flex items-center gap-3 px-4 py-3 hover:bg-[#EE585B]/10 hover:text-[#EE585B] transition-all duration-200 text-sm font-medium"
                :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/team' }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Our Team
              </router-link>
              <router-link
                to="/testimonials"
                class="flex items-center gap-3 px-4 py-3 hover:bg-[#EE585B]/10 hover:text-[#EE585B] transition-all duration-200 text-sm font-medium"
                :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/testimonials' }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                Testimonials
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Contact Us button desktop -->
      <router-link
        to="/contact"
        class="hidden md:inline-flex items-center gap-2 border-2 border-[#EE585B] text-[#EE585B] font-semibold px-6 py-2.5 rounded-full hover:bg-[#EE585B] hover:text-white transition-all duration-300 text-sm md:text-base group"
      >
        <span>Contact Us!</span>
      </router-link>
      
      <!-- Hamburger Icon -->
      <button
        @click="toggleMenu"
        class="md:hidden text-[#EE585B] text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
        aria-label="Toggle menu"
      >
        <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span class="block w-6 h-0.5 bg-current transition-all duration-200" :class="{ 'rotate-45 translate-y-2': menuOpen }"></span>
          <span class="block w-6 h-0.5 bg-current transition-all duration-200" :class="{ 'opacity-0': menuOpen }"></span>
          <span class="block w-6 h-0.5 bg-current transition-all duration-200" :class="{ '-rotate-45 -translate-y-2': menuOpen }"></span>
        </div>
      </button>
      
      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div
          v-show="menuOpen"
          class="md:hidden absolute backdrop-blur-md bg-[rgba(242,247,255,0.95)] border border-[rgba(242,247,255,0.2)] top-full left-0 w-full mt-3 rounded-2xl shadow-xl p-6 z-50 font-medium text-sm text-[#202345]"
        >
          <nav class="flex flex-col space-y-1">
            <router-link
              to="/"
              @click="closeMenu"
              class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
              :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/' }"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              Home
            </router-link>
            <router-link
              to="/about"
              @click="closeMenu"
              class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
              :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/about' }"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              About Us
            </router-link>
            <router-link
              to="/blog"
              @click="closeMenu"
              class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
              :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/services' }"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
              Blog
            </router-link>
            <router-link
              to="/faq"
              @click="closeMenu"
              class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
              :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/faq' }"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              FAQ
            </router-link>
            
            <!-- Mobile Others Section -->
            <div class="border-t border-gray-200 mt-2 pt-2">
              <router-link
                to="/team"
                @click="closeMenu"
                class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
                :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/team' }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
                Our Team
              </router-link>
              <router-link
                to="/testimonials"
                @click="closeMenu"
                class="flex items-center gap-3 hover:text-[#EE585B] hover:bg-[#EE585B]/10 py-3 px-4 rounded-xl transition-all duration-200"
                :class="{ 'text-[#EE585B] bg-[#EE585B]/10': $route.path === '/testimonials' }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  />
                </svg>
                Testimonials
              </router-link>
            </div>
          </nav>
          
          <!-- Enhanced Mobile Language Switch Toggle -->
          <div class="mt-6 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-center mb-4">
              <div class="relative flex items-center bg-white/70 backdrop-blur-sm rounded-full p-1 border border-gray-200/50 shadow-sm w-32">
                <!-- Mobile Toggle Background -->
                <div 
                  class="absolute top-1 bottom-1 w-14 bg-gradient-to-r from-[#EE585B] to-[#FF7A7A] rounded-full transition-all duration-300 ease-out shadow-md"
                  :class="currentLocale === 'en' ? 'left-1' : 'left-[calc(50%)]'"
                ></div>
                
                <!-- Mobile EN Button -->
                <button
                  @click="setLanguage('en')"
                  class="relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex-1"
                  :class="currentLocale === 'en' ? 'text-white' : 'text-gray-600'"
                  type="button"
                  aria-label="Switch to English"
                >
                  EN
                </button>
                
                <!-- Mobile ID Button -->
                <button
                  @click="setLanguage('id')"
                  class="relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex-1"
                  :class="currentLocale === 'id' ? 'text-white' : 'text-gray-600'"
                  type="button"
                  aria-label="Switch to Indonesian"
                >
                  ID
                </button>
              </div>
            </div>
          </div>
          
          <!-- Mobile Contact Us Button -->
          <div class="mt-4">
            <router-link
              to="/contact"
              @click="closeMenu"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#EE585B] to-[#FF7A7A] text-white font-semibold rounded-full hover:from-[#d04748] hover:to-[#ee6b6b] transition-all duration-300 group"
            >
              <span>Contact Us!</span>
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarSection",
  data() {
    return {
      menuOpen: false,
      currentLocale: this.$i18n.locale || 'en' // fallback to 'en'
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    setLanguage(locale) {
      this.currentLocale = locale;
      this.$i18n.locale = locale;
      // Optional: Close mobile menu after language change
      if (this.menuOpen) {
        this.closeMenu();
      }
    },
    // Keep the old method for backward compatibility
    toggleLanguage() {
      this.currentLocale = this.currentLocale === 'en' ? 'id' : 'en';
      this.$i18n.locale = this.currentLocale;
    }
  },
  mounted() {
    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header') && this.menuOpen) {
        this.menuOpen = false;
      }
    });
    
    // Close mobile menu on route change
    this.$router.afterEach(() => {
      this.menuOpen = false;
      // Scroll to top when route changes
      window.scrollTo(0, 0);
    });
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Enhanced slide animation for mobile menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.8);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.8);
}

/* Backdrop blur support */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>