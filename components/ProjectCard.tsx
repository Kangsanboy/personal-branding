import Image from "next/image";

// Tambahkan import Link di paling atas file
import Link from "next/link";

// Sesuaikan interface-nya (id diubah jadi string)
interface ProjectProps {
  project: {
    id: string; // Tambahkan ini
    title: string;
    description: string;
    tech: string[];
    image: string;
    category: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-lg">
      {/* ... kode gambar dan teks yang sebelumnya biarkan saja ... */}
      
      <div className="p-6 pt-0"> {/* Bungkus tombolnya */}
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
