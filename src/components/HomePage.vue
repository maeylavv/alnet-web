<template>
    <!-- Navbar -->
  <DefaultLayout>
  <div class="min-h-screen bg-[#F1F5FB] font-poppins">
    <!-- Hero Section -->
    <section
      class="grid grid-cols-1 md:grid-cols-5 px-6 md:px-24 pt-20 pb-10 items-center gap-12"
    >
       <div class="mt-20 md:col-span-2 md:pl-8"> 
    <h1 class="text-6xl md:text-6xl font-bold text-[#202345] leading-tight mb-6">
      Your Trusted Partner for<br />Fast, Reliable Internet
    </h1>
        <p class="text-lg text-gray-600 mb-8">
          Connecting homes and businesses with the speed they deserve.
        </p>
        <button
        @click="scrollToPackages"
        class="bg-[#F04748] text-white text-semibold px-7 py-5 rounded-full shadow-inner hover:bg-[#EB0E70] transition duration-300 hover:scale-105 hover:shadow-1xl"
      >
        Choose Package
      </button>
      </div>
      <div class="mt-20 md:col-span-3 flex justify-center mb-8">
        <img
          src="/images/Hero Image.svg"
          alt="Speed Graphic"
          class="w-full h-auto"
        />
      </div>
    </section>

    <!-- Service Areas Section -->
    <section class="px-6 md:px-24 pt-10 pb-20 relative bg-[#F1F5FB]">
  <div class="max-w-6xl mx-auto">
    <div class="text-center">
      <div class="max-w-6xl mx-auto text-center mb-12">
        <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">SERVICE AREAS</p>
        <p class="text-gray-600 text-base md:text-lg font-medium mt-4 max-w-2xl mx-auto">
          We proudly serve a wide range of areas, ensuring that everyone can experience the best in internet connectivity.
        </p>
      </div>
      
      <div class="absolute top-0 left-0 w-32 h-32 bg-[#EE585B]/30 rounded-full blur-xl"></div>
      <div class="absolute top-0 right-0 w-30 h-30 bg-[#EE585B]/24 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 left-0 w-16 h-16 bg-[#EE585B]/25 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 right-0 w-20 h-20 bg-[#EE585B]/35 rounded-full blur-xl"></div>

      <div class="flex justify-center relative">
        <img
          src="/images/grouphome.svg"
          alt="Your Image Description"
          class="max-w-4xl w-full h-auto rounded-lg shadow-lg relative z-10"
        />
      </div>
    </div>
  </div>
</section>

<section id="our-services" class="px-6 md:px-24 pt-10 pb-10" > 
  <div class="max-w-6xl mx-auto">
    <div class="max-w-6xl mx-auto text-center mb-6"> 
      <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">OUR SERVICES</p>
      <p class="text-gray-600 text-base md:text-lg font-medium mt-4 max-w-2xl mx-auto">
        Explore our range of services designed to meet your digital needs. From high-speed internet to comprehensive IT solutions, we have you covered.
      </p>
    </div>
  </div>
</section>

<!-- Cards Section -->
<div class="flex justify-center mt-0 pb-10"> 
  <div class="overflow-x-auto pb-4">
    <div class="flex gap-6 justify-center min-w-max">
      <!-- Card 1 -->
      <div class="bg-[#202345] rounded-xl shadow-lg p-6 w-[21.5rem] flex-shrink-0 mb-0">
        <img src="/images/pinterest13.jpg" alt="Service 1" class="w-full h-48 object-cover rounded-lg mb-4" />

        <div class="flex items-center mb-3">
          <!-- Wifi Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.53 16.11a5 5 0 016.94 0M5.06 12.54a9 9 0 0113.88 0M2.46 8.91a13 13 0 0118.08 0M12 20h.01" />
          </svg>
          <h3 class="text-xl font-semibold text-white">Internet Service Provider</h3>
        </div>

        <p class="text-gray-300 mb-4">
          High-speed internet tailored for seniors’ daily needs—video calls, streaming, and remote health access.
        </p>
        <button class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl" @click="scrollToPackages">
          View More
        </button>
      </div>

      <!-- Card 2 -->
      <div class="bg-[#202345] rounded-xl shadow-lg p-6 w-[21.5rem] flex-shrink-0 mb-0">
        <img src="/images/pinterest15.jpg" alt="Service 2" class="w-full h-48 object-cover rounded-lg mb-4" />

        <div class="flex items-center mb-3">
          <!-- Server Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <path d="M3 10h18M9 20v-6M15 20v-6" />
          </svg>
          <h3 class="text-xl font-semibold text-white">IT Infrastructure</h3>
        </div>

        <p class="text-gray-300 mb-4">
        Robust and scalable digital systems built to support senior care facilities and enhance smart aging environments.
      </p>
        <router-link to="/ViewmoreITInfrastructure" class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl inline-block text-center">
          View More
        </router-link>
      </div>

      <!-- Card 3 -->
      <div class="bg-[#202345] rounded-xl shadow-lg p-6 w-[21.5rem] flex-shrink-0 mb-0">
        <img src="/images/pinterest14.jpg" alt="Service 3" class="w-full h-48 object-cover rounded-lg mb-4" />

        <div class="flex items-center mb-3">
          <!-- Code Brackets Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
          <h3 class="text-xl font-semibold text-white">Software Development</h3>
        </div>

        <p class="text-gray-300 mb-4">
        User-friendly apps and innovative digital tools made to support health, connection, and independence for seniors.
      </p>
        <router-link to="/ViewmoreSD" class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl inline-block text-center">
        View More
      </router-link>
      </div>
    </div>
  </div>
</div>
</div>

    <!-- Why Choose Us Section -->
    <section class="px-6 md:px-24 pt-20 pb-20 bg-white relative">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-6xl mx-auto text-center mb-12">
  <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">WHY SHOULD CHOOSE US</p>
</div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <!-- Left Image with Pop-up Badges -->
          <div class="md:col-span-3 flex justify-center relative p-6">
            <img
              src="/images/pinterest11.jpg"
              alt="Why Choose Us"
              class="w-85 max-w-lg h-auto rounded-2xl shadow-lg"
            />
            <div
              class="absolute top-3 left-3 bg-[#EB0E70] text-white px-3 py-1.5 rounded-full shadow-lg text-sm font-semibold transform -rotate-12 z-10 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Software Development
            </div>
            <div
              class="absolute top-1/2 right-3 bg-[#524BE3] text-white px-3 py-1.5 rounded-full shadow-lg text-sm font-semibold transform rotate-12 z-10 hover:scale-110 hover:rotate-0 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              IT Infrastructure
            </div>
            <div
              class="absolute bottom-3 left-1/3 bg-[#EB0E70] text-white px-3 py-1.5 rounded-full shadow-lg text-sm font-semibold transform rotate-6 z-10 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Internet Service Provider
            </div>
          </div>
          <!-- Right Content -->
          <div class="md:col-span-2">
            <h3 class="text-2xl md:text-3xl font-bold text-[#524BE3] mb-4">
              Premium Digital Experience Provider
            </h3>
            <p class="text-lg text-gray-600 mb-8">
              Your go-to partner for cutting-edge digital solutions. We deliver
              blazing internet speeds, robust IT infrastructure, and innovative
              software development with round-the-clock expert assistance.
            </p>
            <!-- Checklist Items -->
            <div class="space-y-6">
              <div
                class="flex items-start gap-3 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  class="flex-shrink-0 w-6 h-6 bg-[#524BE3] rounded-full flex items-center justify-center mt-1"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p class="text-gray-600">
                  Broadband internet access using HYBRID technology for stable
                  connection, wide coverage, and high bandwidth.
                </p>
              </div>
              <div
                class="flex items-start gap-3 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  class="flex-shrink-0 w-6 h-6 bg-[#524BE3] rounded-full flex items-center justify-center mt-1"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p class="text-gray-600">
                  IT system development services covering data security,
                  resource management, integration and maintenance.
                </p>
              </div>
              <div
                class="flex items-start gap-3 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  class="flex-shrink-0 w-6 h-6 bg-[#524BE3] rounded-full flex items-center justify-center mt-1"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p class="text-gray-600">
                  Custom software solutions for web and mobile platforms, always
                  up to date with the latest technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

 <section class="py-12 bg-[#F1F5FB]">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-2xl font-bold text-center text-[#202345] mb-20">
        Trusted by Over 10 Tech Companies
      </h2>
      <div class="overflow-hidden">
        <div
          class="flex space-x-12 animate-marquee"
          style="animation-duration: 20s;"
          ref="marquee"
        >
          <img
            v-for="(logo, idx) in logos"
            :key="idx"
            :src="logo"
            alt="Partner Logo"
            class="h-16 object-contain"
          />
          <!-- Duplicate logos for seamless loop -->
          <img
            v-for="(logo, idx) in logos"
            :key="'dup-' + idx"
            :src="logo"
            alt="Partner Logo"
            class="h-16 object-contain"
          />
        </div>
      </div>
    </div>
</section>

  <section id="packages" class="px-6 md:px-24 py-20 bg-[#F1F5FB]">
  <div class="max-w-6xl mx-auto text-center mb-12">
    <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">PACKAGES</p>
    <h2 class="text-3xl md:text-3xl font-bold text-[#202345]">Choose Your Best Package</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <!-- Card 1 -->
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:scale-105 hover:shadow-1xl">
      <div class="mb-4">
        <h3 class="text-xl font-bold text-red-500">Standard</h3>
        <p class="text-gray-600">Home</p>
      </div>
      <p class="text-3xl font-extrabold text-[#202345] mb-4">Rp.235.000<span class="text-lg font-normal">/month</span></p>
      <p class="text-gray-600 mb-6">Perfect for everyday internet users looking for reliable speeds to stream, browse, and connect multiple devices at home.</p>
      <ul class="mb-6 text-gray-700 space-y-2 flex-grow">
        <li>Fast internet 30 Mbps</li>
        <li>Mobile Broadband</li>
        <li>Home Line</li>
        <li>Free tv streaming</li>
        <li>Free Home Protect</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold shadow-inner hover:bg-[#EB0E70] transition duration-300 hover:scale-105 hover:shadow-1xl"
        @click="redirectToWhatsApp('Standard', 'Rp.235.000', 'Home')"
      >
        Get Started
      </button>
    </div>

    <!-- Card 2 -->
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col border-4 border-red-500 hover:scale-105 hover:shadow-1xl">
      <div class="mb-4">
        <h3 class="text-xl font-bold text-red-500">Super</h3>
        <p class="text-gray-600">Office & B2B</p>
      </div>
      <p class="text-3xl font-extrabold text-[#202345] mb-4">Rp.250.000<span class="text-lg font-normal">/month</span></p>
      <p class="text-gray-600 mb-6">Designed for small to medium businesses needing faster speeds and reliable connectivity to support multiple users and devices.</p>
      <ul class="mb-6 text-gray-700 space-y-2 flex-grow">
        <li>Fast internet 75 Mbps</li>
        <li>Mobile Broadband</li>
        <li>Home Line</li>
        <li>Free tv streaming</li>
        <li>Free Home Protect</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold shadow-inner hover:bg-[#EB0E70] transition duration-300 hover:scale-105 hover:shadow-1xl"
        @click="redirectToWhatsApp('Super', 'Rp.250.000', 'Office & B2B')"
      >
        Get Started
      </button>
    </div>

    <!-- Card 3 -->
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:scale-105 hover:shadow-1xl">
      <div class="mb-4">
        <h3 class="text-xl font-bold text-red-500">Premium</h3>
        <p class="text-gray-600">Enterprise</p>
      </div>
      <p class="text-3xl font-extrabold text-[#202345] mb-4">Rp.400.000<span class="text-lg font-normal">/month</span></p>
      <p class="text-gray-600 mb-6">Tailored for large enterprises requiring ultra-fast internet and dedicated support to handle heavy data traffic and critical operations.</p>
      <ul class="mb-6 text-gray-700 space-y-2 flex-grow">
        <li>Fast internet 100 Mbps</li>
        <li>Mobile Broadband</li>
        <li>Home Line</li>
        <li>Free tv streaming</li>
        <li>Free Home Protect</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold shadow-inner hover:bg-[#EB0E70] transition duration-300 hover:scale-105 hover:shadow-1xl"
        @click="redirectToWhatsApp('Premium', 'Rp.400.000', 'Enterprise')"
      >
        Get Started
      </button>
    </div>
  </div>
</section>

<section class="px-6 md:px-24 py-20 bg-white">
  <div class="max-w-6xl mx-auto text-center mb-12">
    <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">TESTIMONIAL</p>
    <h2 class="text-3xl md:text-3xl font-bold text-[#202345]">What Our Customers Say</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md border border-[#EB0E70]/20 flex flex-col">
      <p class="text-gray-700 italic mb-6">
        "The staff and support are second to none. They are polished, proficient, and patient."
      </p>
      <div class="mt-auto flex items-center gap-3">
        <span
          class="w-10 h-10 rounded-full"
          style="background-color: #EB0E70;"
          aria-hidden="true"
        ></span>
        <div>
          <h3 class="text-lg font-semibold text-[#202345]">Jeon Jungkook</h3>
          <p class="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>

    <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md border border-[#EB0E70]/20 flex flex-col">
      <p class="text-gray-700 italic mb-6">
        "Reliable service and quick response times. Highly recommend for anyone needing fast internet."
      </p>
      <div class="mt-auto flex items-center gap-3">
        <span
          class="w-10 h-10 rounded-full"
          style="background-color: #EB0E70;"
          aria-hidden="true"
        ></span>
        <div>
          <h3 class="text-lg font-semibold text-[#202345]">Go Yeonjoong</h3>
          <p class="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>

    <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md border border-[#EB0E70]/20 flex flex-col">
      <p class="text-gray-700 italic mb-6">
        "Professional and courteous support team that goes above and beyond to solve problems."
      </p>
      <div class="mt-auto flex items-center gap-3">
        <span
          class="w-10 h-10 rounded-full"
          style="background-color: #EB0E70;"
          aria-hidden="true"
        ></span>
        <div>
          <h3 class="text-lg font-semibold text-[#202345]">Park Jimin</h3>
          <p class="text-sm text-gray-500">Customer</p>
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
  name: "HomePage",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      menuOpen: false,
      hovering: false,
      logos: [
        "/images/telkom.png",
        "/images/lintasarta.png",
        "/images/apjii.png",
        "/images/komdigi.png",
        "/images/apjatel.png",
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToPackages() {
      const section = document.getElementById("packages");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    crollToServices() {
      const section = document.getElementById("our-services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      },
    redirectToWhatsApp(packageName, price, category) {
      const message = `Hello! I'm interested in the ${packageName} package (${category}) for ${price}. Can you provide more details?`; // Use backticks for string interpolation
      const phoneNumber = '6285155478411'; 
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; 
      window.open(url, '_blank');
    }
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.animate-marquee {
  display: flex;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 20s; 
}
</style>