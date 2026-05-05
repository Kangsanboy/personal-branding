import Image from "next/image";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-lg">
      <div className="relative w-full h-56 overflow-hidden bg-slate-800">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, index) => (
            <span key={index} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}