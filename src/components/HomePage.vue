<template>
  <div class="min-h-screen bg-[#F1F5FB] font-poppins">
    <!-- Navbar -->
  <header class="fixed top-4 left-0 w-full z-50 px-4 md:px-6 bg-transparent">
  <div
    class="max-w-7xl mx-auto backdrop-blur-md bg-white/50 rounded-full shadow-lg px-4 py-3 flex items-center justify-between font-poppins relative"
  >
    <!-- Logo -->
    <div class="flex-shrink-0">
      <img src="/images/alnet.logo.jpeg" alt="ALNET Logo" class="h-8 md:h-10" />
    </div>

    <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-x-5 text-[#202345] text-sm md:text-base font-medium">
      <router-link to="/" class="hover:text-red-500">Home</router-link>
      <router-link to="/about" class="hover:text-red-500">About Us</router-link>
      <router-link to="/services" class="hover:text-red-500">Services</router-link>
      <router-link to="/faq" class="hover:text-red-500">FAQ</router-link>
      <div class="relative group">
        <button class="hover:text-red-500 text-sm md:text-base">Others</button>
        <div
          class="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded p-2 text-xs md:text-sm"
        >
          <router-link to="/team" class="block px-3 py-1 hover:bg-gray-100">Our Team</router-link>
          <router-link to="/testimonials" class="block px-3 py-1 hover:bg-gray-100">Testimonials</router-link>
        </div>
      </div>
    </nav>


    <!-- CTA Button Desktop -->
        <router-link
      to="/contact"
      class="border border-[#F04748] text-[#F04748] font-medium px-4 py-2 rounded-full hover:bg-red-100 transition text-base md:text-lg"
    >
      Contact Us!
    </router-link>

    <!-- Hamburger Icon -->
    <button
      @click="toggleMenu"
      class="md:hidden text-[#EE585B] text-2xl focus:outline-none"
      aria-label="Toggle menu"
    >
      ☰
    </button>

    <!-- Mobile Menu -->
    <div
      v-show="menuOpen"
      class="md:hidden absolute backdrop-blur-md bg-white/50 top-full left-0 w-full mt-3 rounded-xl shadow-lg p-4 z-50 font-semibold text-sm text-[#202345]"
    >
      <nav class="flex flex-col space-y-3">
        <a href="#" @click="closeMenu" class="hover:text-red-500">Home</a>
        <a href="#" @click="closeMenu" class="hover:text-red-500">About Us</a>
        <a href="#" @click="closeMenu" class="hover:text-red-500">Services</a>
        <a href="#" @click="closeMenu" class="hover:text-red-500">FAQ</a>
        <a href="#" @click="closeMenu" class="hover:text-red-500">Our Team</a>
        <a href="#" @click="closeMenu" class="hover:text-red-500">Testimonials</a>
      </nav>
      <a
      href="#contact"
      class="hidden md:inline-block px-6 py-3 rounded-full font-semibold text-white relative overflow-hidden transition-transform duration-300 hover:scale-105"
      style="background: linear-gradient(90deg, #EE585B, #FF7A7A, #EE585B); background-size: 200% 200%; animation: gradientMove 3s ease infinite;"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      Contact Us!
      <span
        class="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-0 transition-opacity duration-300 pointer-events-none rounded-full"
        :class="{'opacity-30': hovering}"
      ></span>
    </a>
    </div>
  </div>
</header>


    <!-- Spacer div to prevent content behind fixed navbar -->
    <div class="h-[84px] md:h-[84px]"></div>

    <!-- Hero Section -->
    <section
      class="grid grid-cols-1 md:grid-cols-5 px-6 md:px-24 pt-20 pb-10 items-center gap-12"
    >
      <div class="md:col-span-2 md:pl-8">
        <h1
          class="text-6xl md:text-6xl font-bold text-[#202345] leading-tight mb-6"
        >
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
      <div class="md:col-span-3 flex justify-center">
        <img
          src="/images/Hero Image.svg"
          alt="Speed Graphic"
          class="w-full h-auto"
        />
      </div>
    </section>

    <!-- Additional Content Section -->
    <section class="px-6 md:px-24 pt-10 pb-20 relative">
  <div class="max-w-6xl mx-auto">
    <div class="text-center">
      <div class="max-w-6xl mx-auto text-center mb-12">
  <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">SERVICE AREAS</p>
  <p class="text-gray-600 text-base md:text-lg font-medium mt-4 max-w-2xl mx-auto">
    We proudly serve a wide range of areas, ensuring that everyone can experience the best in internet connectivity.
  </p>
</div>
          <div class="flex justify-center relative">
            <img
              src="/images/logo h2 new.png"
              alt="Your Image Description"
              class="max-w-4xl w-full h-auto rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 md:px-24 pt-20 pb-20">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-6xl mx-auto text-center mb-12">
  <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">OUR SERVICES</p>
  <p class="text-gray-600 text-base md:text-lg font-medium mt-4 max-w-2xl mx-auto">
    Explore our range of services designed to meet your digital needs. From high-speed internet to comprehensive IT solutions, we have you covered.
  </p>
</div>
        <!-- Horizontal Scrollable Cards -->
        <div class="flex justify-center">
          <div class="overflow-x-auto pb-4">
            <div class="flex gap-6 justify-center min-w-max">
              <!-- Card 1 -->
              <div
                class="bg-[#202345] rounded-xl shadow-lg p-6 w-80 flex-shrink-0"
              >
                <img
                  src="/images/pinterest13.jpg"
                  alt="Service 1"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-semibold text-white mb-3">
                  High-Speed Internet
                </h3>
                <p class="text-gray-300 mb-4">
                  Experience blazing fast internet speeds up to 1GB for seamless
                  streaming, gaming, and working from home.
                </p>
                <button
                  class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl"
                >
                  View More
                </button>
              </div>
              <!-- Card 2 -->
              <div
                class="bg-[#202345] rounded-xl shadow-lg p-6 w-80 flex-shrink-0"
              >
                <img
                  src="/images/pinterest15.jpg"
                  alt="Service 2"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-semibold text-white mb-3">
                  24/7 Technical Support
                </h3>
                <p class="text-gray-300 mb-4">
                  Round-the-clock technical support to ensure your connection
                  stays stable and any issues are resolved quickly.
                </p>
                <button
                  class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl"
                >
                  View More
                </button>
              </div>
              <!-- Card 3 -->
              <div
                class="bg-[#202345] rounded-xl shadow-lg p-6 w-80 flex-shrink-0"
              >
                <img
                  src="/images/pinterest14.jpg"
                  alt="Service 3"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-semibold text-white mb-3">
                  Business Solutions
                </h3>
                <p class="text-gray-300 mb-4">
                  Customized internet solutions for businesses with dedicated
                  bandwidth and priority support for your operations.
                </p>
                <button
                  class="bg-white text-[#202345] px-4 py-2 rounded-lg hover:bg-[#D0E2FF] transition duration-300 hover:scale-105 hover:shadow-1xl"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="px-6 md:px-24 pt-20 pb-20 bg-white relative">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-6xl mx-auto text-center mb-12">
  <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">WHY SHOULD CHOOSE US</p>
</div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <!-- Left Image with Pop-up Badges -->
          <div class="md:col-span-3 flex justify-center relative p-8">
            <img
              src="/images/pinterest11.jpg"
              alt="Why Choose Us"
              class="w-90 max-w-xl h-auto rounded-2xl shadow-lg"
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
  </div>

  <section class="px-6 md:px-24 py-20 bg-[#F1F5FB]">
  <div class="max-w-6xl mx-auto">
    <!-- Title and subtitle -->
    <div class="max-w-6xl mx-auto text-center mb-12">
  <p class="uppercase text-2xl font-semibold text-red-500 mb-2 tracking-widest">COMMITMENT</p>
  <p class="text-gray-600 text-base md:text-lg font-medium mt-4 max-w-3xl mx-auto">
    Discover why customers trust us for superior service and support.
  </p>
</div>

    <!-- Two-column layout with image left -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Left: Image -->
      <div class="flex justify-center">
        <img
          src="/images/image 2.svg"
          alt="Commitment to Excellence"
          class="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      <!-- Right: Description + Checklist -->
      <div>
        <p class="text-gray-700 mb-8">
          We pride ourselves on delivering outstanding results through dedicated services and expert knowledge.
        </p>

        <!-- Checklist items -->
        <ul class="space-y-6">
          <li class="flex items-start gap-3">
            <span
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
                />
              </svg>
            </span>
            <p class="text-gray-700">
              Reliable and consistent high-speed internet connectivity.
            </p>
          </li>
          <li class="flex items-start gap-3">
            <span
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
                />
              </svg>
            </span>
            <p class="text-gray-700">
              24/7 dedicated customer and technical support team.
            </p>
          </li>
          <li class="flex items-start gap-3">
            <span
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
                />
              </svg>
            </span>
            <p class="text-gray-700">
              Customizable plans tailored to your needs and budget.
            </p>
          </li>
          <li class="flex items-start gap-3">
            <span
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
                />
              </svg>
            </span>
            <p class="text-gray-700">
              Seamless installation and quick setup process.
            </p>
          </li>
        </ul>
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
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col">
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
        <li>$80,000 coverage</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition"
      >
        Get Started
      </button>
    </div>

    <!-- Card 2 -->
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col border-4 border-red-500">
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
        <li>$80,000 coverage</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition"
      >
        Get Started
      </button>
    </div>

    <!-- Card 3 -->
    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col">
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
        <li>$80,000 coverage</li>
      </ul>
      <button
        class="mt-auto bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition"
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
    <div class="bg-[#F1F5FB] p-8 rounded-lg shadow-md flex flex-col">
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
          <h3 class="text-lg font-semibold text-[#202345]">Loana Hadid</h3>
          <p class="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>

    <div class="bg-[#F1F5FB] p-8 rounded-lg shadow-md flex flex-col">
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
          <h3 class="text-lg font-semibold text-[#202345]">Mark R. Thompson</h3>
          <p class="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>

    <div class="bg-[#F1F5FB] p-8 rounded-lg shadow-md flex flex-col">
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
          <h3 class="text-lg font-semibold text-[#202345]">Sophia Lee</h3>
          <p class="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Footer -->
    <FooterSection />
</template>

<script>
import FooterSection from './FooterSection.vue' // Same folder import

export default {
  name: "HomePage",
  components: {
    FooterSection,
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
    }
  }  // No comma here since this is last
};
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
  animation-duration: 20s; /* Adjust speed here */
}
</style>
