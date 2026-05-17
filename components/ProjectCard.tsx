"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    category?: string;
  };
  index: number; // Tambahan index untuk jeda animasi
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }} // Animasi munculnya bergiliran
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-colors duration-300 shadow-lg flex flex-col"
    >
      
      {/* Bagian Gambar (Sudah Pakai Trik Anti-Kopong) */}
      <div className="relative w-full h-64 overflow-hidden bg-slate-950 flex items-center justify-center">
        {/* Latar Belakang Blur (Pengisi Kekosongan) */}
        <Image 
          src={project.image} 
          alt="background blur"
          fill
          className="object-cover opacity-30 blur-xl scale-110"
        />
        {/* Gambar Utama (Tetap proporsional, tidak terpotong) */}
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-contain z-10 p-4 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradien Bawah */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-100 z-20" />
      </div>

      {/* Bagian Teks */}
      <div className="p-6 relative flex-grow z-30">
        {project.category && (
          <p className="text-sky-400 text-xs font-semibold tracking-wider uppercase mb-1">
            {project.category}
          </p>
        )}
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Daftar Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, idx) => (
            <span key={idx} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bagian Tombol */}
      <div className="p-6 pt-0 z-30">
        <Link 
          href={`/projects/${project.id}`} 
          className="inline-flex items-center text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg transition-colors"
        >
          Lihat Detail Case Study
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

    </motion.div>
  );
}
