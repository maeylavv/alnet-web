<template>
  <footer class="bg-[#1E204B] text-white py-12 px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
      <!-- Logo and Contact Info -->
      <div class="md:w-1/4">
        <img src="/images/alnet.logo.jpeg" alt="ALNET Logo" class="h-16 mb-6" />
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
          <li><a href="#" class="hover:text-red-500">Home</a></li>
          <li><a href="#" class="hover:text-red-500">About Us</a></li>
          <li><a href="#" class="hover:text-red-500">Services</a></li>
          <li><a href="#" class="hover:text-red-500">Contact Us</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="md:w-1/5">
        <h3 class="font-bold text-lg mb-4">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-red-500">Our Story</a></li>
          <li><a href="#" class="hover:text-red-500">Team</a></li>
          <li><a href="#" class="hover:text-red-500">Faq</a></li>
        </ul>
      </div>

      <!-- Keep in Touch -->
      <div class="md:w-1/4">
        <h3 class="font-bold text-lg mb-4">Keep in Touch</h3>
        <form class="flex gap-2 mb-6">
          <input
            type="email"
            placeholder="Email address"
            class="flex-grow rounded-md px-4 py-2 text-black focus:outline-none"
          />
          <button
            type="submit"
            class="bg-[#EB0E70] hover:bg-[#d30d64] text-white font-semibold px-6 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3b5998] hover:bg-gray-200 transition" aria-label="Facebook">
            <!-- Facebook SVG here -->
          </a>
          <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0077b5] hover:bg-gray-200 transition" aria-label="LinkedIn">
            <!-- LinkedIn SVG here -->
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
