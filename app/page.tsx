"use client";

import Image from "next/image"; // Tambahan import Image untuk foto
import ProjectCard from "../components/ProjectCard";
import { PORTFOLIO_DATA } from "../constants/portfolio";
import { motion } from "framer-motion";

export default function Home() {
  const { profile, projects, contact } = PORTFOLIO_DATA;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* 1. HERO & ABOUT SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* FOTO PROFIL DENGAN EFEK FADE BAWAH */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-48 h-56 md:w-56 md:h-64 mb-10 overflow-hidden"
        >
          {/* Gambar Asli Abang (object-top biar fokus ke wajah/kepala) */}
          <Image 
            src="/rajib.png" 
            alt="Foto Profil Rajib Alwi" 
            fill
            className="object-cover object-top rounded-t-3xl" 
          />
          {/* Trik Ilusi Optik: Gradien pudar dari warna background ke transparan */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">{profile.name}</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-indigo-400 mb-8"
        >
          {profile.role}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
        >
          {profile.bio}
        </motion.p>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/50">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Karya Terbaik</h2>
          <p className="text-slate-400">Beberapa solusi digital yang telah saya kembangkan.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proyek, index) => (
            <ProjectCard key={proyek.id} project={proyek} index={index} />
          ))}
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800/50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-indigo-400 font-semibold tracking-wider uppercase mb-3 text-sm">Kontak</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Hubungi Saya</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* WhatsApp */}
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Email */}
            <a href={contact.email} className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            {/* GitHub */}
            <a href={contact.github} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            {/* Instagram */}
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href={contact.facebook} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
