<template>
  <div class="min-h-screen bg-[#F1F5FB] font-poppins flex flex-col">

    <!-- Main Content -->
    <main class="flex-grow px-6 md:px-24 py-20 max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-[#F04748] mb-4 text-center">Contact Us</h1>
      <p class="text-center text-[#202345] mb-12">
        Any question or remarks? Just write us a message!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Contact Info -->
        <div class="bg-[#1E204B] rounded-3xl p-12 text-white">
          <h2 class="text-3xl font-bold mb-6">Contact Information</h2>
          <p class="mb-4 text-lg font-medium">We’d love to hear from you</p>

          <ul class="space-y-6 text-lg">
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.41 12.41 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.41 12.41 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+62 851-5525-5577</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16v16H4z"/>
                <path d="M22 4L12 14.01 2 4"/>
              </svg>
              <span>admin@alnet.id</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                <path d="M12 16v-4"/>
                <path d="M12 12h.01"/>
              </svg>
              <span>Jl Dr Sutomo VIII / 42 Karangwaru, Tulungagung, Jawa Timur 66217</span>
            </li>
          </ul>
        </div>

        <!-- Right Contact Form -->
        <form class="bg-white rounded-lg p-8 shadow-lg space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" placeholder="First name" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F04748] focus:outline-none" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" placeholder="Last name" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F04748] focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="youremail@gmail.com" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F04748] focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="085155478411" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F04748] focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea placeholder="Write your message..." rows="4" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F04748] focus:outline-none"></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-[#524BE3] to-[#2F31C0] text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
