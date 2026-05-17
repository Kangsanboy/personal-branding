import ProjectCard from "../components/ProjectCard";
import { PORTFOLIO_DATA } from "../constants/portfolio";

export default function Home() {
  const { profile, projects, contact } = PORTFOLIO_DATA;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* 1. HERO & ABOUT SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">{profile.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-indigo-400 mb-8">
          {profile.role}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          {profile.bio}
        </p>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/50">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Karya Terbaik</h2>
          <p className="text-slate-400">Beberapa solusi digital yang telah saya kembangkan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proyek) => (
            <ProjectCard key={proyek.id} project={proyek} />
          ))}
        </div>
      </section>

      {/* 3. CONTACT SECTION (Sesuai Referensi Gambar Abang) */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-400 font-semibold tracking-wider uppercase mb-3 text-sm">
            Kontak
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Hubungi Saya
          </h2>
          
          {/* Deretan Ikon Sosial Media/Kontak */}
          <div className="flex flex-wrap justify-center gap-6">
            
            {/* Tombol WhatsApp */}
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>

            {/* Tombol Email */}
            <a href={contact.email} className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>

            {/* Tombol GitHub */}
            <a href={contact.github} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>

            {/* Tombol Instagram */}
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="group p-4 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a3 3 0 013 3v11a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3z" /></svg>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
