import { PORTFOLIO_DATA } from "../../../constants/portfolio";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Perbaikan Next.js 15 (params harus async)
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Tombol Kembali (Estetik hover indigo) */}
        <Link href="/" className="group inline-flex items-center text-sm text-sky-400 hover:text-indigo-400 mb-12 transition-colors">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>

        {/* Header Proyek */}
        <div className="mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter">{project.title}</h1>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t, idx) => (
              <span key={idx} className="bg-slate-900 text-slate-200 text-xs px-3.5 py-1.5 rounded-full border border-slate-800 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-800 pt-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-5">Tentang Proyek</h2>
            <p className="text-slate-400 text-lg leading-relaxed">{project.aboutText}</p>
          </div>
          
          <div className="bg-slate-900/50 p-7 rounded-2xl border border-slate-800/60 h-fit">
            <h3 className="text-xl font-bold text-white mb-6">Fitur & Solusi</h3>
            <div className="flex flex-col gap-6">
              {project.features?.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">{feat.title}</h4>
                    <p className="text-sm text-slate-400">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* GALERI SCREENSHOT - DENGAN LOGIK "SMART BOUNDING BOX" */}
        {/* ================================================================ */}
        <div className="mb-16 border-t border-slate-800 pt-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center md:text-left">Tampilan Antarmuka</h2>
          <div className="flex flex-col gap-16 items-center">
            {project.screenshots?.map((src, idx) => {
              // DETEKSI OTOMATIS: Apakah ini foto aplikasi HP (Potrait)?
              // Jika ID proyek mengandung kata 'apk', kita anggap dia potrait.
              const isPortrait = project.id.includes('apk');

              return (
                <div 
                  key={idx} 
                  className={`relative group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center ${
                    // Logika Smart Bounding Box:
                    isPortrait 
                      // Kalau potrait: Pake kotak bentuk HP (9:16), lebarnya dikecilin di monitor. MX-auto biar ditengah.
                      ? 'aspect-[9/16] w-[75vw] md:w-[28vw] mx-auto p-4' 
                      // Kalau lanskap web: Pake kotak monitor (16:9), lebar penuh.
                      : 'aspect-[16/9] w-full p-4 md:p-6'
                  }`}
                >
                  {/* Efek Hover Keren (Border Indigo) */}
                  <div className="absolute inset-0 border-2 border-indigo-500/0 group-hover:border-indigo-500/30 rounded-3xl transition-colors duration-500 z-20" />

                  {/* Gambar Asli (Tampil utuh, contain, p-nya bikin ada jarak dikit ke bingkai) */}
                  <Image 
                    src={src} 
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className={`object-contain z-10 transition-transform duration-700 group-hover:scale-[1.02] ${
                      isPortrait ? 'p-2' : 'p-2'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* ================================================================ */}

      </div>
    </main>
  );
}
