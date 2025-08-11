<template>
<DefaultLayout>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div class="mt-8 max-w-4xl mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-4xl lg:text-5xl font-bold text-[#1E204B] mb-6 font-poppins">
          <span class="text-[#EE585B]">Blog</span> - Latest Articles
        </h1>
        <p class="text-lg md:text-lg text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Read about useful tips, how-tos, and more on various internet and networking topics.
        </p>
      </div>
    </section>

    <!-- Decorative Background Blurs -->
    <div class="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
    <div class="absolute top-20 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
    <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>

    <!-- Blog List Section -->
    <section class="py-12 md:py-0 px-6 md:px-24 bg-gray-50 pb-16 mb-16">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog1.jpg" alt="How to Update Your Wi-Fi Password in 2025" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">How to Update Your Wi-Fi Password in 2025</h3>
            <p class="text-gray-600 mb-4">
              Discover the latest methods for updating your Wi-Fi password in just a few minutes, using simple steps.
            </p>
            <router-link to="/blog1" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>

          <!-- Blog Post 2 -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog2222.jpg" alt="Wi-Fi Connected, But No Internet? Here's the Fix!" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">Wi-Fi Connected, But No Internet? Here's the Fix!</h3>
            <p class="text-gray-600 mb-4">
              Learn how to resolve the common problem of a connected Wi-Fi network with no internet access.
            </p>
            <router-link to="/blog2" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>

          <!-- Blog Post 3 -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog333.jpg" alt="Speed Up Your Wi-Fi Connection with These 5 Tips" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">Speed Up Your Wi-Fi Connection with These 5 Tips</h3>
            <p class="text-gray-600 mb-4">
              Looking for faster internet speeds at home? Check out these practical tips to improve your Wi-Fi performance.
            </p>
            <router-link to="/blog3" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>

          <!-- Blog Post 4: Internet Service for Seniors -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog4444.jpg" alt="Internet Service for Seniors" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">Internet Service for Seniors: Stay Connected Anytime</h3>
            <p class="text-gray-600 mb-4">
              Learn how high-speed internet can help seniors stay connected with loved ones, enjoy streaming, and access healthcare services remotely.
            </p>
            <router-link to="/blog/4" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>

          <!-- Blog Post 5: Software Development for Seniors -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog6.jpg" alt="Software Development for Seniors" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">How Software Development Supports Seniors' Independence</h3>
            <p class="text-gray-600 mb-4">
              Explore how user-friendly software applications are making daily tasks easier for seniors and promoting their independence.
            </p>
            <router-link to="/blog/6" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>
          
          <!-- Blog Post 6: IT Infrastructure for Senior Care -->
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#EE585B]/20">
            <img src="/images/blog66.jpg" alt="IT Infrastructure for Senior Care" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-2xl font-bold text-[#1E204B] mb-4">Building Robust IT Infrastructure for Senior Care</h3>
            <p class="text-gray-600 mb-4">
              Learn how advanced IT infrastructure can enhance senior care facilities, improve communication, and support smart aging environments.
            </p>
            <router-link to="/blog/5" class="text-[#EE585B] hover:text-[#d04748]">Read More</router-link>
          </div>
        </div>
      </div>
    </section>
</DefaultLayout>

</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'BlogPage',
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  background-image: linear-gradient(to bottom right, #e0e7ff, #ffffff);
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Blog Post Cards */
.blog-card {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f5a7b7; 
}
.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

/* Blog Titles */
.blog-card h3 {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1E204B;
  margin-bottom: 16px;
  transition: color 0.3s ease;
}
.blog-card h3:hover {
  color: #EE585B; 
}

/* Blog Descriptions */
.blog-card p {
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 16px;
  line-height: 1.5;
  transition: color 0.3s ease;
}
.blog-card p:hover {
  color: #3b3b3b;
}
 .blog-card:last-child {
  margin-bottom: 30px; 
}

/* "Read More" Link */
.blog-card a {
  color: #EE585B;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}
.blog-card a:hover {
  color: #d04748;
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .max-w-7xl {
    max-width: 90%;
  }
}

@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
