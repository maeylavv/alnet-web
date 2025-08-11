import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // About Us
    aboutAlnetTitle1: 'About',
    aboutAlnetTitle2: 'Telekomunikasi',
    aboutAlnetTitle3: 'Indonesia',
    aboutAlnetDesc: 'Empowering communities across Indonesia with reliable telecommunications solutions',

    // Our Mission
    ourMissionTitle: 'Our Mission',
    ourMissionParagraph1: 'To deliver fast and stable internet services through hybrid technology, with a focus on professionalism, responsiveness, and customer satisfaction.',
    ourMissionParagraph2: "At Alnet, we believe that reliable connectivity is the backbone of today's digital world. Our commitment to delivering fast, stable and innovative internet services empowers individuals, families, and businesses to thrive in a connected era.",
    ourMissionParagraph3: 'Through continuous improvement, dedicated support and cutting-edge technology, we aim not only to meet but exceed our customers\' expectations, building lasting relationships based on trust and excellence.',

    // Director Says
    directorSays: 'Director Says',
    directorName: 'David Indra Yuana',
    directorPosition: 'Alnet Director',
    directorTestimonial: 'At Alnet, we provide fast, reliable internet to empower individuals, families, and businesses. Through continuous innovation and support, we aim to exceed our customers\' expectations every day.',

    // What Makes Us Different
    whatMakesUsDifferentTitle: 'What Makes Us Different',
    whatMakesUsDifferentDesc: 'Solutions, experience, and support - all in one place',
    freeConsultationTitle: 'Free Consultation',
    freeConsultationDesc: 'Get tailored digital business solutions completely free of charge. We analyze your needs and provide expert recommendations.',
    oneStopSolutionTitle: 'One Stop Solution',
    oneStopSolutionDesc: 'Comprehensive digital services that fully meet your business needs, all in one place. From internet to complete IT solutions.',
    experiencedTitle: 'Experienced',
    experiencedDesc: 'Our team has extensive experience to deliver professional and reliable solutions tailored to your needs.',

    // Stats Section
    alnetByNumbersTitle: 'ALNET by the Numbers',
    alnetByNumbersDesc: 'Our commitment to excellence reflected in our achievements',
    customersRate: 'Customers Rate',
    networkCoverage: 'Network Coverage',
    networkUptime: 'Network Uptime',
    supportAvailable: 'Support Available',

    // Visit Us Section
    visitUsTitle: 'Visit Us',
    visitUsDesc: 'Find our office and other locations directly on the map',

    // Call to Action Section
    readyToExperienceTitle: 'Ready to Experience Fast & Stable Internet?',
    readyToExperienceDesc: 'Join thousands of satisfied customers who trust ALNET for reliable telecommunications services. Get your free consultation today and discover our hybrid technology solutions.',
    getFreeConsultationBtn: 'Get Free Consultation',
    viewOurServicesBtn: 'View Our Services',

    // Homepage
    homepageHeroTitle: 'Your Trusted Partner for\nFast, Reliable Internet',
    homepageHeroDesc: 'Connecting homes and businesses with the speed they deserve.',
    homepageServiceAreasTitle: 'SERVICE AREAS',
    homepageServiceAreasDesc: 'We proudly serve a wide range of areas, ensuring that everyone can experience the best in internet connectivity.',
    homepageOurServicesTitle: 'OUR SERVICES',
    homepageOurServicesDesc: 'Explore our range of services designed to meet your digital needs. From high-speed internet to comprehensive IT solutions, we have you covered.',

    // Packages
    packagesTitle: 'PACKAGES',
    packagesSubtitle: 'Choose Your Best Package',
    packageStandardName: 'Standard',
    packageStandardCategory: 'Home',
    packageStandardPrice: 'Rp.235.000/month',
    packageStandardDesc: 'Perfect for everyday internet users looking for reliable speeds to stream, browse, and connect multiple devices at home.',
    packageSuperName: 'Super',
    packageSuperCategory: 'Office & B2B',
    packageSuperPrice: 'Rp.250.000/month',
    packageSuperDesc: 'Designed for small to medium businesses needing faster speeds and reliable connectivity to support multiple users and devices.',
    packagePremiumName: 'Premium',
    packagePremiumCategory: 'Enterprise',
    packagePremiumPrice: 'Rp.400.000/month',
    packagePremiumDesc: 'Tailored for large enterprises requiring ultra-fast internet and dedicated support to handle heavy data traffic and critical operations.',

    // Testimonials Section
    testimonialsTitle: 'TESTIMONIAL',
    testimonialsSubtitle: 'What Our Customers Say',
    testimonial1Text: 'The staff and support are second to none. They are polished, proficient, and patient.',
    testimonial1Name: 'Loana Hadid',
    testimonial1Role: 'Customer',
    testimonial2Text: 'Reliable service and quick response times. Highly recommend for anyone needing fast internet.',
    testimonial2Name: 'Mark R. Thompson',
    testimonial2Role: 'Customer',
    testimonial3Text: 'Professional and courteous support team that goes above and beyond to solve problems.',
    testimonial3Name: 'Sophia Lee',
    testimonial3Role: 'Customer',
  },
  id: {
    aboutAlnetTitle1: 'Tentang',
    aboutAlnetTitle2: 'Telekomunikasi',
    aboutAlnetTitle3: 'Indonesia',
    aboutAlnetDesc: 'Memberdayakan komunitas di seluruh Indonesia dengan solusi telekomunikasi yang handal',

    ourMissionTitle: 'Misi Kami',
    ourMissionParagraph1: 'Menyediakan layanan internet cepat dan stabil melalui teknologi hibrida, dengan fokus pada profesionalisme, responsivitas, dan kepuasan pelanggan.',
    ourMissionParagraph2: 'Di Alnet, kami percaya bahwa konektivitas yang andal adalah tulang punggung dunia digital saat ini. Komitmen kami untuk memberikan layanan internet yang cepat, stabil, dan inovatif memberdayakan individu, keluarga, dan bisnis untuk berkembang di era terkoneksi.',
    ourMissionParagraph3: 'Melalui perbaikan terus-menerus, dukungan berdedikasi, dan teknologi mutakhir, kami bertujuan tidak hanya untuk memenuhi tetapi melebihi harapan pelanggan kami, membangun hubungan yang langgeng berdasarkan kepercayaan dan keunggulan.',

    directorSays: 'Kata Direktur',
    directorName: 'David Indra Yuana',
    directorPosition: 'Direktur Alnet',
    directorTestimonial: 'Di Alnet, kami menyediakan internet cepat dan andal untuk memberdayakan individu, keluarga, dan bisnis. Melalui inovasi dan dukungan berkelanjutan, kami berusaha melebihi ekspektasi pelanggan setiap hari.',

    whatMakesUsDifferentTitle: 'Apa yang Membuat Kami Berbeda',
    whatMakesUsDifferentDesc: 'Solusi, pengalaman, dan dukungan - semuanya dalam satu tempat',
    freeConsultationTitle: 'Konsultasi Gratis',
    freeConsultationDesc: 'Dapatkan solusi bisnis digital yang disesuaikan tanpa biaya. Kami menganalisis kebutuhan Anda dan memberikan rekomendasi ahli.',
    oneStopSolutionTitle: 'Satu Tempat Solusi',
    oneStopSolutionDesc: 'Layanan digital komprehensif yang memenuhi semua kebutuhan bisnis Anda, semua di satu tempat. Dari internet hingga solusi TI lengkap.',
    experiencedTitle: 'Berpengalaman',
    experiencedDesc: 'Tim kami memiliki pengalaman luas untuk memberikan solusi profesional dan andal yang disesuaikan dengan kebutuhan Anda.',

    alnetByNumbersTitle: 'ALNET dalam Angka',
    alnetByNumbersDesc: 'Komitmen kami terhadap keunggulan tercermin dalam pencapaian kami',
    customersRate: 'Persentase Pelanggan',
    networkCoverage: 'Cakupan Jaringan',
    networkUptime: 'Waktu Aktif Jaringan',
    supportAvailable: 'Dukungan Tersedia',

    visitUsTitle: 'Kunjungi Kami',
    visitUsDesc: 'Temukan kantor kami dan lokasi lainnya langsung di peta',

    readyToExperienceTitle: 'Siap Mengalami Internet Cepat & Stabil?',
    readyToExperienceDesc: 'Bergabung dengan ribuan pelanggan puas yang mempercayai ALNET untuk layanan telekomunikasi yang handal. Dapatkan konsultasi gratis hari ini dan temukan solusi teknologi hibrida kami.',
    getFreeConsultationBtn: 'Dapatkan Konsultasi Gratis',
    viewOurServicesBtn: 'Lihat Layanan Kami',

    homepageHeroTitle: 'Mitra Terpercaya Anda untuk\nInternet Cepat dan Andal',
    homepageHeroDesc: 'Menghubungkan rumah dan bisnis dengan kecepatan yang pantas mereka dapatkan.',
    homepageServiceAreasTitle: 'AREA LAYANAN',
    homepageServiceAreasDesc: 'Kami dengan bangga melayani berbagai area, memastikan setiap orang dapat merasakan konektivitas internet terbaik.',
    homepageOurServicesTitle: 'LAYANAN KAMI',
    homepageOurServicesDesc: 'Jelajahi berbagai layanan kami yang dirancang untuk memenuhi kebutuhan digital Anda. Dari internet berkecepatan tinggi hingga solusi TI lengkap, kami siap membantu.',

    packagesTitle: 'PAKET',
    packagesSubtitle: 'Pilih Paket Terbaik Anda',
    packageStandardName: 'Standar',
    packageStandardCategory: 'Rumah',
    packageStandardPrice: 'Rp.235.000/bulan',
    packageStandardDesc: 'Cocok untuk pengguna internet sehari-hari yang menginginkan kecepatan andal untuk streaming, browsing, dan menghubungkan banyak perangkat di rumah.',
    packageSuperName: 'Super',
    packageSuperCategory: 'Kantor & B2B',
    packageSuperPrice: 'Rp.250.000/bulan',
    packageSuperDesc: 'Dirancang untuk bisnis kecil hingga menengah yang membutuhkan kecepatan lebih cepat dan konektivitas andal untuk mendukung banyak pengguna dan perangkat.',
    packagePremiumName: 'Premium',
    packagePremiumCategory: 'Perusahaan',
    packagePremiumPrice: 'Rp.400.000/bulan',
    packagePremiumDesc: 'Dirancang untuk perusahaan besar yang membutuhkan internet ultra-cepat dan dukungan khusus untuk menangani lalu lintas data dan operasi penting.',

    testimonialsTitle: 'TESTIMONI',
    testimonialsSubtitle: 'Apa Kata Pelanggan Kami',
    testimonial1Text: 'Staf dan dukungan mereka tak tertandingi. Mereka profesional, cekatan, dan sabar.',
    testimonial1Name: 'Loana Hadid',
    testimonial1Role: 'Pelanggan',
    testimonial2Text: 'Layanan yang dapat diandalkan dan waktu respon cepat. Sangat direkomendasikan untuk siapa saja yang membutuhkan internet cepat.',
    testimonial2Name: 'Mark R. Thompson',
    testimonial2Role: 'Pelanggan',
    testimonial3Text: 'Tim dukungan yang profesional dan sopan yang selalu berusaha melebihi harapan untuk menyelesaikan masalah.',
    testimonial3Name: 'Sophia Lee',
    testimonial3Role: 'Pelanggan',
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
