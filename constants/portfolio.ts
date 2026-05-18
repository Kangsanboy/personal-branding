export const PORTFOLIO_DATA = {
  profile: {
    name: "RAJIB ALWI",
    role: "Digital Solution Architect & Web Developer",
    bio: "Saya berspesialisasi dalam menjembatani kebutuhan bisnis klien dengan teknologi modern. Fokus saya adalah merancang dan membangun solusi digital yang fungsional—mulai dari sistem manajemen institusi pendidikan, dasbor operasional B2B, hingga platform komunitas interaktif—menjadi aplikasi yang efisien dan siap pakai.",
  },
  projects: [
    {
      id: "simatren", 
      title: "SIMATREN",
      category: "Sistem Informasi Pesantren",
      description: "Platform manajemen pendidikan terintegrasi untuk pelacakan absensi dan keuangan santri.",
      tech: ["Next.js", "Supabase", "Capacitor"],
      image: "/simatren.png", 
      aboutText: "Simatren dibangun untuk mengatasi masalah administrasi manual di institusi pesantren. Sistem ini mempermudah pengurus dalam mendata ribuan santri, mencatat kehadiran secara digital, hingga mengelola sirkulasi keuangan pondok secara transparan.",
      screenshots: [
        "/simatren.png" 
      ],
      features: [
        { title: "Absensi QR Code & IoT", desc: "Santri cukup melakukan scan kartu untuk mencatat kehadiran secara realtime." },
        { title: "Manajemen Keuangan", desc: "Pencatatan uang jajan santri dan tabungan santri yang otomatis terdata." }
      ]
    },
    {
      id: "simatren-apk",
      title: "SIMATREN MOBILE (APK)",
      category: "Aplikasi Android",
      description: "Versi mobile dari ekosistem Simatren dengan antarmuka yang dioptimalkan untuk smartphone pengurus.",
      tech: ["Capacitor", "Android", "Next.js"],
      image: "/apksimatren.png",
      aboutText: "Sebagai pelengkap dari versi web, saya mengembangkan Simatren menjadi aplikasi mobile berbasis Android (APK). Ini memudahkan pengurus dan tenaga pengajar untuk mengakses data pesantren langsung dari genggaman tangan, kapan saja dan di mana saja.",
      screenshots: [
        "/apksimatren.png"
      ],
      features: [
        { title: "UI/UX Responsif Mobile", desc: "Navigasi dan tata letak yang disesuaikan secara khusus untuk kenyamanan penggunaan di layar sentuh." },
        { title: "Aksesibilitas Instan", desc: "Aplikasi dapat diinstal langsung (APK) di perangkat Android untuk akses yang lebih cepat daripada melalui browser." }
      ]
    },
    {
      id: "paiyat",
      title: "PA IYAT BROILER",
      category: "B2B Management Dashboard",
      description: "Sistem manajemen operasional penjualan ayam dan otomatisasi slip gaji karyawan.",
      tech: ["React", "Tailwind", "TypeScript"],
      image: "/paiyat.png",
      aboutText: "Dashboard PA IYAT BROILER dirancang khusus untuk digitalisasi operasional bisnis peternakan dan penjualan ayam skala besar, menghilangkan pencatatan nota kertas yang rawan hilang.",
      screenshots: [
        "/paiyat.png" 
      ],
      features: [
        { title: "Pelacakan Stok & Penjualan", desc: "Memantau keluar masuknya komoditas ayam dan grafik keuntungan harian." },
        { title: "Otomatisasi Slip Gaji", desc: "Sistem dapat meng-generate slip gaji resmi karyawan hanya dengan satu klik." }
      ]
    },
    {
      id: "genztalk",
      title: "GENZTALK.ID",
      category: "Community Platform",
      description: "Website komunitas dai dengan desain modern dark neon dan fitur interaktif.",
      tech: ["Next.js", "Framer Motion"],
      image: "/genztalk.png",
      aboutText: "Genztalk.id adalah wadah diskusi digital bagi para dai muda di Jawa Barat, dikemas dengan visual kekinian agar menarik minat generasi Z.",
      screenshots: [
        "/genztalk.png" 
      ],
      features: [
        { title: "Desain Dark Neon", desc: "Tampilan estetik dengan skema warna cyberpunk yang disukai generasi muda." },
        { title: "Scroll Animations", desc: "Efek animasi interaktif yang halus saat halaman di-scroll ke bawah." }
      ]
    },
    {
      id: "web-portofolio",
      title: "WEB PORTOFOLIO PRIBADI",
      category: "Web Profile & Case Study",
      description: "Website portofolio interaktif dengan sistem data dinamis dan routing otomatis untuk case study.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/portofolio.png",
      aboutText: "Website portofolio ini saya rancang dan bangun sendiri menggunakan arsitektur Data-Driven UI. Pendekatan ini memungkinkan saya untuk menambah proyek baru secara instan hanya dengan memperbarui satu file data tunggal, tanpa perlu merombak struktur kode komponen visualnya.",
      screenshots: [
        "/portofolio.png"
      ],
      features: [
        { title: "Arsitektur Data-Driven", desc: "Pemisahan antara komponen visual dan data konten untuk skalabilitas jangka panjang." },
        { title: "Dynamic Routing & Case Study", desc: "Halaman detail spesifik untuk setiap proyek yang di-generate secara otomatis menggunakan fitur App Router Next.js." }
      ]
    }
  ],
  contact: {
    email: "mailto:filerajib2002@gmail.com",
    github: "https://github.com/Kangsanboy",
    instagram: "https://instagram.com/rajibalwi_26",
    whatsapp: "https://wa.me/6285353666197",
    linkedin: "https://linkedin.com/in/rajib alwi",
    facebook: "https://facebook.com/rajib.alwi.94"
  }
};
