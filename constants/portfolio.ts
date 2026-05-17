export const PORTFOLIO_DATA = {
  profile: {
    name: "[RAJIB ALWI]",
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
        "/simatren.png" // Nanti abang bisa tambah gambar lain di sini
      ],
      features: [
        { title: "Absensi QR Code & IoT", desc: "Santri cukup melakukan scan kartu untuk mencatat kehadiran secara realtime." },
        { title: "Manajemen Keuangan", desc: "Pencatatan uang syahriah (SPP) dan tabungan santri yang otomatis terdata." },
        { title: "Aplikasi Mobile (APK)", desc: "Dapat diunduh di smartphone pengurus dengan fitur login yang aman." }
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
        "/paiyat.png" // Nanti abang bisa tambah gambar lain di sini
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
        "/genztalk.png" // Nanti abang bisa tambah gambar lain di sini
      ],
      features: [
        { title: "Desain Dark Neon", desc: "Tampilan estetik dengan skema warna cyberpunk yang disukai generasi muda." },
        { title: "Scroll Animations", desc: "Efek animasi interaktif yang halus saat halaman di-scroll ke bawah." }
      ]
    }
  ],
  contact: {
    email: "mailto:emailabang@gmail.com",
    github: "https://github.com/username-abang",
    instagram: "https://instagram.com/username-abang",
    whatsapp: "https://wa.me/6281234567890",
    linkedin: "https://linkedin.com/in/username-abang",
    facebook: "https://facebook.com/username-abang"
  }
};
