<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Decorative Background Blurs -->
      <div class="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-20 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
      
      <div class="mt-20 max-w-4xl mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E204B] mb-6 font-poppins">
          <span class="text-[#EE585B]">How to Update Your Wi-Fi Password in 2025</span>
        </h1>
        <!-- Date of Publication -->
        <p class="text-sm text-gray-500 mb-4">Published on: <span class="font-semibold">July 28, 2025</span></p>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Learn how to easily update your Wi-Fi password in just one minute! A simple step-by-step guide for various routers.
        </p>
      </div>
    </section>

    <!-- Main Blog Content Section -->
    <section class="py-16 md:py-20 px-6 md:px-24 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Hero Card with Basic Info -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">Why Change Your Wi-Fi Password Regularly?</h2>
          <p class="leading-relaxed">
            Changing your Wi-Fi password regularly ensures better security and optimal network performance. With the rise of IoT devices, it's essential to maintain a strong and unique password.
          </p>
        </div>

        <!-- Blog Details Section -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#EE585B]/20 mb-12">
          <h2 class="text-xl font-bold text-[#1E204B] mb-4">How to Change Wi-Fi Password in Different Routers</h2>
          <div class="mb-6">
            <h3 class="text-lg font-semibold">1. Change Wi-Fi Password in Biznet Using the MyBiznet App</h3>
            <ol class="list-decimal pl-5">
              <li>Open the MyBiznet app on your phone.</li>
              <li>Log in using your Biznet account.</li>
              <li>Select the "Wi-Fi Settings" menu.</li>
              <li>Click on "Change Password."</li>
              <li>Enter a strong password (combination of numbers, letters, and symbols).</li>
              <li>Click "Save." All previously connected devices will be disconnected, and you'll need to reconnect with the new password.</li>
            </ol>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">2. Change Wi-Fi Password in TP-Link and Huawei Routers</h3>
            <p>If you're using a TP-Link or Huawei router, follow these steps:</p>
            <ol class="list-decimal pl-5">
              <li>Connect your device (laptop or smartphone) to the Wi-Fi network you want to change the password for.</li>
              <li>Open your browser and type one of the following IP addresses: 192.168.0.1, 192.168.1.1, or 192.168.100.1 (depending on your router brand).</li>
              <li>Login with your router's default username and password (usually "admin/admin," check the back of the router if unsure).</li>
              <li>For TP-Link:
                <ul>
                  <li>Navigate to "Wireless Settings" or "Wireless Security."</li>
                  <li>Find the "Wireless Password" or "Pre-shared Key" field.</li>
                  <li>Enter the new password and click "Save."</li>
                </ul>
              </li>
              <li>For Huawei:
                <ul>
                  <li>Go to "WLAN Settings" or "Basic Settings."</li>
                  <li>Change the password in the "WPA Passphrase" or "PreSharedKey" field.</li>
                  <li>Click "Apply" to save changes.</li>
                </ul>
              </li>
              <li>Once the password is changed, all previously connected devices will need to reconnect with the new password.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'BlogDetail1',
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
/* Content Styling */
.content {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Increased Line Spacing for Better Readability */
p, ol, ul {
  line-height: 1.8; 
  margin-bottom: 20px; 
}

ol, ul {
  padding-left: 20px;
}

h2, h3 {
  margin-bottom: 16px;
  color: #1E204B;
}

/* Button Styling */
.btn {
  background-color: #EE585B;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #d04748;
  transform: translateY(-3px);
}
</style>
