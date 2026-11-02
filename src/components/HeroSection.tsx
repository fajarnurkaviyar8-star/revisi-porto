import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { FolderGit2, Mail, Download, Info, Check, Sparkles, GraduationCap, Code2, MapPin, Camera, Edit3 } from 'lucide-react';

interface HeroSectionProps {
  onOpenCvModal: () => void;
  onOpenGuideModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal, onOpenGuideModal }) => {
  const [imgError, setImgError] = useState(false);
  const { profileImage, isProfileCustom, openEditor } = usePortfolioImages();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle tech background grid & ambient light */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.25) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />
      
      {/* Subtle soft gradient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Kicker & Status */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 font-mono text-[11px] tracking-wider uppercase">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                {PORTFOLIO_DATA.profile.label}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PORTFOLIO_DATA.profile.university}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
                {PORTFOLIO_DATA.profile.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                Mahasiswa Semester 1 · Calon Profesional Sistem Informasi
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty">
              {PORTFOLIO_DATA.profile.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('proyek')}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Lihat Proyek Saya</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('kontak')}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Hubungi Saya</span>
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-violet-300 bg-violet-950/40 hover:bg-violet-900/40 border border-violet-800/60 rounded-lg transition-all active:scale-95 cursor-pointer"
                title="Buka pratinjau Curriculum Vitae siap cetak/simpan PDF"
              >
                <Download className="w-4 h-4 text-violet-400" />
                <span>Unduh CV</span>
              </button>
            </div>

            {/* Real transparency badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span>Terbuka untuk diskusi, kolaborasi akademik, dan pengalaman baru.</span>
            </div>
          </div>

          {/* Right Column: Prominent Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-violet-600/20 to-transparent blur-xl opacity-70" />

              {/* Main Photo Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0c1220] border border-slate-800/90 p-4 sm:p-5 shadow-2xl overflow-hidden">
                
                {/* Header ribbon inside card */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="font-mono text-slate-300 uppercase tracking-wider text-[11px]">
                      Profil Mahasiswa
                    </span>
                    {isProfileCustom && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-1.5 py-0.2 rounded">
                        Foto Pribadi
                      </span>
                    )}
                  </div>
                  
                  {/* Direct Edit Button */}
                  <button
                    type="button"
                    onClick={() => openEditor('profile')}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-600 border border-blue-800/80 px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium active:scale-95"
                    title="Klik untuk langsung mengganti foto profil Anda tanpa menyentuh kode"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Ganti Foto Langsung</span>
                  </button>
                </div>

                {/* Profile Image Viewport with Hover Overlay */}
                <div 
                  onClick={() => openEditor('profile')}
                  className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group cursor-pointer"
                  title="Klik untuk mengganti foto profil"
                >
                  {!imgError ? (
                    <img
                      src={profileImage}
                      alt={`Foto Profil ${PORTFOLIO_DATA.profile.fullName}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback if image path is broken */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950 p-6 text-center">
                      <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-3xl font-bold text-blue-400 mb-3">
                        {PORTFOLIO_DATA.profile.initials}
                      </div>
                      <span className="font-semibold text-slate-200 text-sm">
                        {PORTFOLIO_DATA.profile.fullName}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        Placeholder Foto Profil
                      </span>
                    </div>
                  )}

                  {/* Hover action overlay button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Klik untuk Mengganti Foto Profil
                    </span>
                    <span className="text-[11px] text-blue-200">
                      Langsung dari HP / Laptop Anda
                    </span>
                  </div>

                  {/* Subtle corner badge for visual polish */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800/80 rounded-lg px-3 py-2 flex items-center justify-between pointer-events-none">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {PORTFOLIO_DATA.profile.fullName}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {PORTFOLIO_DATA.profile.university}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                      Aktif Belajar
                    </span>
                  </div>
                </div>

                {/* Quick note & manual guide trigger below photo */}
                <div className="mt-3.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span className="truncate">Tersimpan otomatis di browser</span>
                  <button
                    type="button"
                    onClick={onOpenGuideModal}
                    className="text-blue-400 hover:text-blue-300 font-mono transition-colors cursor-pointer shrink-0 ml-2"
                  >
                    Panduan Kode?
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width strip below hero split */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Status Akademik</p>
              <h2 className="text-sm font-semibold text-white mt-0.5">S1 Sistem Informasi (Smt 1)</h2>
              <p className="text-xs text-slate-400 mt-0.5">Universitas Komputer Majenang</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Fokus Pengembangan</p>
              <h2 className="text-sm font-semibold text-white mt-0.5">Aplikasi, Basis Data & Desain</h2>
              <p className="text-xs text-slate-400 mt-0.5">Penguatan fondasi teknis & problem solving</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Etos & Pengalaman</p>
              <h2 className="text-sm font-semibold text-white mt-0.5">Kerja Nyata & Tanggung Jawab</h2>
              <p className="text-xs text-slate-400 mt-0.5">Percetakan promosi & bantuan dekorasi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
