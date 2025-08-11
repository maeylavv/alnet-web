<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="mt-20 py-8 md:py-12 px-6 md:px-24 text-center bg-gray-50 bg-[#F1F5FB] font-poppins">
        <p class="text-lg md:text-xl text-gray-semibold mb-0">
          Any question or remarks? Just write us a message!
        </p>
    </section>

    <!-- Contact Section -->
    <section class="pt-2 pb-10 md:px-24 bg-gray-50 font-poppins -mt-8">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="flex flex-col md:flex-row">
            <!-- Contact Information -->
            <div class="md:w-2/5 bg-gradient-to-br from-[#2E3A6D] to-[#5971D3] text-white p-8 md:p-12 relative overflow-hidden">
              <div class="relative z-10">
                <h2 class="text-2xl md:text-3xl font-bold mb-4 font-poppins">
                  Contact Information
                </h2>
                <p class="text-gray-300 mb-8">
                  We'd love to hear from you
                </p>

                <div class="space-y-6">
                  <!-- Phone -->
                  <div class="flex items-center gap-4">
                    <div class="w-6 h-6 flex items-center justify-center">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span class="text-sm md:text-base">+62851-5547-8411</span>
                  </div>

                  <!-- Email -->
                  <div class="flex items-center gap-4">
                    <div class="w-6 h-6 flex items-center justify-center">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span class="text-sm md:text-base">admin@alnet.id</span>
                  </div>

                  <!-- Address -->
                  <div class="flex items-start gap-4">
                    <div class="w-6 h-6 flex items-center justify-center mt-1">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="text-sm md:text-base">
                      <p>Jl Dr Sutomo VIII / 42 Karangwaru,</p>
                      <p>Tulungagung, Jawa Timur 66217</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative circles -->
              <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full font-poppins animate-bounce"></div>
              <div class="absolute bottom-16 right-16 w-20 h-20 bg-white/5 rounded-full font-poppins animate-bounce"></div>
            </div>

            <!-- Contact Form -->
            <div class="md:w-3/5 p-8 md:p-12 font-poppins">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- First Name -->
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      placeholder="First name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE585B] focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <!-- Last Name -->
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      placeholder="Last name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE585B] focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    placeholder="youremail@gmail.com"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE585B] focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <!-- Phone Number -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    placeholder="085155478411"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE585B] focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    placeholder="Write your message..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE585B] focus:border-transparent outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-br from-[#2E3A6D] to-[#5971D3] text-white py-2 px-8 rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="!isSubmitting">Send Message</span>
                    <span v-else class="flex items-center justify-center gap-2">
                        <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </span>
                  </button>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'ContactUs',
  components: {
    DefaultLayout
  },
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;

      try {
        // Basic validation
        if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.phone || !this.form.message) {
          alert('Please fill in all fields');
          this.isSubmitting = false;
          return;
        }

        // Create WhatsApp message
        const fullName = `${this.form.firstName.trim()} ${this.form.lastName.trim()}`;
        const whatsappMessage = `Hello! My name is ${fullName}.

 Email: ${this.form.email.trim()}
 Phone: ${this.form.phone.trim()}
 Message: ${this.form.message.trim()}

Thank you!`;

        // Create WhatsApp URL
        const phoneNumber = '6285155478411';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // DIRECT REDIRECT - NO POPUP
        window.location.href = whatsappURL;

      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
        this.isSubmitting = false;
      }
    },

    // Method for your pricing cards (if you want to use the same WhatsApp function)
    redirectToWhatsApp(plan, price, category) {
      const message = `Hello! I'm interested in the ${plan} plan (${price}) for ${category}. 

Please provide me with more information about this package.

Thank you!`;

      const phoneNumber = '6285155478411';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.location.href = whatsappURL;
    }
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>