import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ContactUs from '@/components/ContactUs.vue'
import AboutUs from '@/components/AboutUs.vue'
import ITInfrastructure from '@/components/ITInfrastructure.vue'
import TestimonialsPage from '@/components/TestimonialsPage.vue'
import FaqPage from '@/components/FaqPage.vue'
import SoftwareDev from '@/components/SoftwareDev.vue'
import OurTeam from '@/components/OurTeam.vue'
import BlogPage from '@/components/BlogPage.vue'
import BlogDetail1 from '@/components/BlogDetail1.vue'
import BlogDetail2 from '@/components/BlogDetail2.vue'
import BlogDetail3 from '@/components/BlogDetail3.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/hello', component: HelloWorld },
  { path: '/contact', component: ContactUs },
  { path: '/about', component: AboutUs },
  { path: '/ViewmoreITInfrastructure', component: ITInfrastructure },
  { path: '/ViewmoreSD', component: SoftwareDev },
  { path: '/testimonials', component: TestimonialsPage },
  { path: '/faq', component: FaqPage },
  { path: '/team', component: OurTeam },
  { path: '/blog', component: BlogPage },
  { path: '/blog1', component: BlogDetail1 },  // Route for Blog 1
  { path: '/blog2', component: BlogDetail2 },  // Route for Blog 2
  { path: '/blog3', component: BlogDetail3 },  // Route for Blog 3
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
