import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { 
  FolderGit2, 
  Layers, 
  Database, 
  Monitor, 
  CheckCircle, 
  BookMarked, 
  Lightbulb, 
  Info, 
  Maximize2, 
  X,
  ExternalLink,
  Camera,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectSectionProps {
  onOpenGuideModal: () => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onOpenGuideModal }) => {
  const [activeTab, setActiveTab] = useState<'fitur' | 'latar' | 'teknologi' | 'pembelajaran'>('fitur');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { projectImage, isProjectCustom, openEditor } = usePortfolioImages();
  const proj = PORTFOLIO_DATA.featuredProject;

  return (
    <section id="proyek" className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proyek Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Rekayasa Perangkat Lunak Desktop Mandiri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Aplikasi desktop Windows yang dirancang untuk membuktikan kemampuan mengintegrasikan antarmuka grafis pengguna dengan basis data relasional.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Card Top Banner / Meta */}
          <div className="px-6 py-4 bg-slate-950/70 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-xs text-blue-300 uppercase tracking-wider">
                {proj.category}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400 font-mono">
                {proj.periodNote}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openEditor('project')}
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-600 border border-blue-800/80 px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium active:scale-95"
                title="Klik untuk langsung mengunggah atau mengganti screenshot proyek tanpa mengedit kode"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Ganti Screenshot Langsung</span>
              </button>

              <button
                type="button"
                onClick={onOpenGuideModal}
                className="text-xs text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer ml-1"
                title="Panduan kode"
              >
                <Info className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Panduan</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Project Info & Interactive Tabs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {proj.shortDesc}
                  </p>
                </div>

                {/* Tech Pills (Clean unboxed style) */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                    Teknologi & Lingkungan Kerja:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-slate-200 bg-slate-800/90 border border-slate-700/80 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Segmented Detail Tabs */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-lg border border-slate-800 mb-4 overflow-x-auto">
                    <button
                      type="button"
                      onClick={() => setActiveTab('fitur')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        activeTab === 'fitur'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Fitur Utama
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('latar')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        activeTab === 'latar'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Latar Belakang
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('teknologi')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        activeTab === 'teknologi'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Arsitektur Teknologi
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('pembelajaran')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        activeTab === 'pembelajaran'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Pembelajaran yang Didapat
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[170px] bg-slate-950/40 rounded-xl p-4 border border-slate-800/60 text-xs sm:text-sm text-slate-300">
                    {activeTab === 'fitur' && (
                      <div className="space-y-2.5">
                        <div className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Daftar Modul & Fitur yang Diimplementasikan:</span>
                        </div>
                        <ul className="space-y-2">
                          {proj.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-blue-400 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'latar' && (
                      <div className="space-y-3 leading-relaxed">
                        <div className="text-xs font-semibold text-white flex items-center gap-2">
                          <BookMarked className="w-4 h-4 text-blue-400" />
                          <span>Konteks & Alasan Pembuatan:</span>
                        </div>
                        <p>{proj.background}</p>
                        <p className="text-xs text-slate-400">
                          Fokus proyek ini adalah membiasakan logika CRUD (Create, Read, Update, Delete) yang menjadi fondasi penting dalam seluruh aplikasi sistem informasi modern.
                        </p>
                      </div>
                    )}

                    {activeTab === 'teknologi' && (
                      <div className="space-y-3 leading-relaxed">
                        <div className="text-xs font-semibold text-white flex items-center gap-2">
                          <Layers className="w-4 h-4 text-violet-400" />
                          <span>Rincian Komponen Perangkat Lunak:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="font-mono text-blue-400 font-semibold block">IDE: Visual Studio 2012</span>
                            <span className="text-slate-400 mt-1 block">Pembuatan form visual, tombol, data grid view, dan event logic.</span>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="font-mono text-violet-400 font-semibold block">DB: Microsoft Access 2013</span>
                            <span className="text-slate-400 mt-1 block">Penyimpanan tabel buku, tabel siswa, dan riwayat peminjaman.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'pembelajaran' && (
                      <div className="space-y-2.5">
                        <div className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>Pelajaran Berharga yang Diperoleh:</span>
                        </div>
                        <ul className="space-y-2">
                          {proj.learnings.map((learn, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-amber-400 font-mono text-xs mt-0.5">✓</span>
                              <span>{learn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Honest Disclaimer */}
                <div className="p-3.5 bg-blue-950/30 border border-blue-900/40 rounded-xl text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-blue-300 block mb-0.5">Catatan Kejujuran Portofolio:</span>
                  {proj.note}
                </div>

              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="lg:col-span-5 flex flex-col space-y-3">
                <div 
                  className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-lg cursor-pointer"
                  onClick={() => openEditor('project')}
                  title="Klik untuk langsung mengganti screenshot ini"
                >
                  <img
                    src={projectImage}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay badge indicating status */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 pointer-events-none">
                    {isProjectCustom ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-emerald-300">Screenshot Asli (Diunggah)</span>
                      </>
                    ) : (
                      <>
                        <Info className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-amber-300">Ilustrasi Konseptual Antarmuka</span>
                      </>
                    )}
                  </div>

                  {/* Hover action overlay button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center backdrop-blur-xs">
                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Klik untuk Mengganti Screenshot Proyek
                    </span>
                    <span className="text-[11px] text-blue-200">
                      Bisa upload foto dari HP / laptop atau paste URL
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="absolute bottom-3 right-3 p-2 bg-slate-950/80 hover:bg-blue-600 text-white rounded-lg border border-slate-700/80 transition-all cursor-pointer shadow-md"
                    title="Perbesar Tampilan"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Visual Label Explanation */}
                <div className="text-xs text-slate-400 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60 flex items-start justify-between gap-2">
                  <div>
                    <span className="text-slate-300 font-medium block mb-1">
                      {isProjectCustom ? 'Screenshot Asli Aktif:' : 'Tentang Ilustrasi Antarmuka di Atas:'}
                    </span>
                    {isProjectCustom 
                      ? 'Gambar ini adalah screenshot kustom yang Anda unggah langsung di web dan tersimpan di browser.' 
                      : 'Gambar di atas merupakan ilustrasi visual antarmuka sistem. Anda dapat mengunggah screenshot asli kapan saja tanpa menyentuh kode.'}
                  </div>
                  <button
                    type="button"
                    onClick={() => openEditor('project')}
                    className="text-blue-400 hover:text-blue-300 text-xs font-semibold underline shrink-0 cursor-pointer pt-0.5"
                  >
                    Ubah
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <span className="text-xs font-mono text-slate-300">
                {isProjectCustom ? 'Screenshot Proyek Anda' : 'Ilustrasi Konseptual Antarmuka Desktop'} · {proj.title}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <img
                src={projectImage}
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain rounded-lg bg-black"
              />
              <p className="mt-3 text-xs text-slate-400 text-center font-mono">
                {isProjectCustom ? 'Screenshot aktif tersimpan di peramban (browser) Anda' : proj.note}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
