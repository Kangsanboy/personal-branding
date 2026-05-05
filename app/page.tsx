import ProjectCard from "../components/ProjectCard";
import { PORTFOLIO_DATA } from "../constants/portfolio";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Terbaik</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Solusi digital yang telah saya kembangkan, mulai dari platform komunitas hingga sistem manajemen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((proyek) => (
            <ProjectCard key={proyek.id} project={proyek} />
          ))}
        </div>
      </div>
    </main>
  );
}