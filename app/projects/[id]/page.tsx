import { PORTFOLIO_DATA } from "../../../constants/portfolio";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Tambahkan kata 'async' dan ubah tipe params menjadi Promise
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Buka "bungkus" params-nya menggunakan await (Aturan Next.js 15)
  const resolvedParams = await params;
  
  // Sekarang id-nya pasti terbaca
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 mb-12 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>

        {/* Header Proyek */}
        <p className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-2">{project.category}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">{project.title}</h1>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((t, idx) => (
            <span key={idx} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-800">{t}</span>
          ))}
        </div>

        {/* Konten Utama / Tentang Proyek */}
        <div className="border-t border-slate-800 pt-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tentang Proyek</h2>
          <p className="text-slate-400 text-lg leading-relaxed">{project.aboutText}</p>
        </div>

        {/* Fitur Utama */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Fitur & Solusi yang Diterapkan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features?.map((feat, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800/60">
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galeri Screenshot */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Tampilan Antarmuka</h2>
          <div className="flex flex-col gap-8">
            {project.screenshots?.map((src, idx) => (
              <div key={idx} className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
                <Image 
                  src={src} 
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
