import Image from "next/image";
import Link from "next/link"; // Tambahan Link untuk pindah halaman

interface ProjectProps {
  project: {
    id: string; // Tambahan ID
    title: string;
    description: string;
    tech: string[];
    image: string;
    category?: string; // Tambahan Kategori
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-lg hover:shadow-sky-500/10 flex flex-col">
      
      {/* Bagian Gambar */}
      <div className="relative w-full h-56 overflow-hidden bg-slate-800">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
      </div>

      {/* Bagian Teks */}
      <div className="p-6 relative flex-grow">
        {project.category && (
          <p className="text-sky-400 text-xs font-semibold tracking-wider uppercase mb-1">
            {project.category}
          </p>
        )}
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Daftar Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, index) => (
            <span key={index} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bagian Tombol (Di bawah agar posisinya rapi) */}
      <div className="p-6 pt-0">
        <Link 
          href={`/projects/${project.id}`} 
          className="inline-flex items-center text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg transition-colors"
        >
          Lihat Detail Case Study
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
