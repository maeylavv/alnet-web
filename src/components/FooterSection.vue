<template>
  <footer class="bg-[#1E204B] text-white py-12 px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
      <!-- Logo and Contact Info -->
      <div class="md:w-1/4">
        <img src="/images/alnet.logo.png" alt="ALNET Logo" class="h-16 mb-6" />
        <address class="not-italic text-sm leading-relaxed mb-6">
          Jl Dr Sutomo VIII / 42<br />
          Karangwaru, Tulungagung,<br />
          Jawa Timur 66217
        </address>
        <p class="text-sm mb-1 underline cursor-pointer hover:text-red-500">0355 337337</p>
        <p class="text-sm underline cursor-pointer hover:text-red-500">admin@alnet.id</p>
      </div>
      
      <!-- Quick Link -->
      <div class="md:w-1/5">
        <h3 class="font-bold text-lg mb-4">Quick Link</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/" class="hover:text-red-500">Home</a></li>
          <li><a href="/about" class="hover:text-red-500">About Us</a></li>
          <li><a href="/blog" class="hover:text-red-500">Blog</a></li>
          <li><a href="/contact" class="hover:text-red-500">Contact Us</a></li>
        </ul>
      </div>
      
      <!-- Company -->
      <div class="md:w-1/5">
        <h3 class="font-bold text-lg mb-4">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/team" class="hover:text-red-500">Team</a></li>
          <li><a href="/faq" class="hover:text-red-500">Faq</a></li>
        </ul>
      </div>
      
      <!-- Keep in Touch -->
      <div class="md:w-1/4">
        <h3 class="font-bold text-lg mb-4">Keep in Touch</h3>
        <form @submit.prevent="subscribe" class="flex flex-col gap-2 mb-6">
          <div class="flex gap-2">
            <input
              type="email"
              v-model="email"
              placeholder="Email address"
              required
              class="flex-grow rounded-md px-4 py-2 text-black focus:outline-none"
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="bg-[#EB0E70] hover:bg-[#d30d64] disabled:opacity-70 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200 flex items-center justify-center w-full sm:w-auto sm:min-w-[140px]"
            >
              <span v-if="!isSubscribing">Subscribe</span>
              <span v-else class="flex items-center gap-2 whitespace-nowrap">
                <svg class="animate-spin h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </span>
            </button>
          </div>
          
          <!-- Enhanced Notification -->
          <transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="transform translate-y-2 opacity-0 scale-95"
            enter-to-class="transform translate-y-0 opacity-100 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="transform translate-y-0 opacity-100 scale-100"
            leave-to-class="transform translate-y-2 opacity-0 scale-95"
          >
            <div
              v-if="notification.message"
              :class="{
                'bg-gradient-to-r from-green-500/20 to-green-600/20 border-green-400 text-green-300': notification.type === 'success',
                'bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-400 text-red-300': notification.type === 'error'
              }"
              class="mt-3 px-4 py-3 rounded-lg border backdrop-blur-sm shadow-lg"
            >
              <div class="flex items-center gap-3">
                <!-- Success Icon -->
                <div v-if="notification.type === 'success'" class="flex-shrink-0">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <!-- Error Icon -->
                <div v-else-if="notification.type === 'error'" class="flex-shrink-0">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                
                <div class="flex-1">
                  <p class="text-sm font-medium">
                    {{ notification.message }}
                  </p>
                  <p v-if="notification.type === 'success'" class="text-xs opacity-90 mt-1">
                    You'll receive our latest updates and newsletters!
                  </p>
                </div>
                
                <!-- Close Button -->
                <button
                  @click="clearNotification"
                  class="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Progress Bar -->
              <div v-if="notification.type === 'success'" class="mt-2 bg-green-400/20 rounded-full h-1 overflow-hidden">
                <div class="bg-green-400 h-full rounded-full animate-progress" style="animation-duration: 4000ms;"></div>
              </div>
            </div>
          </transition>
        </form>
        

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      email: '',
      isSubscribing: false,
      notification: {
        message: '',
        type: '' // 'success' or 'error'
      },
      timeoutId: null
    }
  },
  methods: {
    async subscribe() {
      if (!this.email) {
        this.showNotification("Please enter your email address", 'error');
        return;
      }

      this.isSubscribing = true;
      
      try {
        const response = await fetch('http://localhost:3000/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
        
        this.showNotification('Welcome to our newsletter!', 'success');
        this.email = '';
        
      } catch (err) {
        this.showNotification('Something went wrong. Please try again.', 'error');
        console.error('Subscription error:', err);
      } finally {
        this.isSubscribing = false;
      }
    },
    
    showNotification(message, type) {
      // Clear any existing timeout
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      
      this.notification.message = message;
      this.notification.type = type;
      
      // Auto-clear after 4 seconds
      this.timeoutId = setTimeout(() => {
        this.clearNotification();
      }, 4000);
    },
    
    clearNotification() {
      this.notification.message = '';
      this.notification.type = '';
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  },
  
  beforeUnmount() {
    // Clean up timeout when component is destroyed
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
</script>

<style scoped>
@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.animate-progress {
  animation: progress linear;
}
</style>