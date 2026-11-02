import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { User, BookOpen, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 relative bg-[#090d17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Fajar Nur Kaviyar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Membangun Fondasi Teknologi Melalui Belajar & Kerja Praktis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Mengenal lebih dekat latar belakang, komitmen belajar, dan arah pengembangan diri saya di bidang Sistem Informasi.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            <p>
              Saya adalah <strong className="text-white font-semibold">{PORTFOLIO_DATA.profile.fullName}</strong>, mahasiswa semester 1 pada Program Studi Sistem Informasi di <strong className="text-white font-semibold">{PORTFOLIO_DATA.profile.university}</strong>.
            </p>
            <p>
              Perjalanan akademik saya berawal dari kelulusan di <strong className="text-slate-200 font-medium">{PORTFOLIO_DATA.profile.previousEducation}</strong>. Ketertarikan yang mendalam terhadap dunia komputasi dan cara kerja sistem mendorong saya melanjutkan studi ke jenjang perguruan tinggi di bidang Sistem Informasi.
            </p>
            <p>
              Fokus utama saya saat ini adalah mengembangkan kemampuan teknis, memahami alur pemrograman, serta mengasah keterampilan pemecahan masalah (<em>problem solving</em>) secara bertahap. Saya meyakini bahwa menjadi profesional yang handal dimulai dari kesadaran untuk tidak berpuas diri, tekun menguasai konsep dasar, dan membiasakan diri bekerja secara terstruktur.
            </p>
            <p className="text-slate-400 text-sm">
              Di luar aktivitas perkuliahan teori, saya aktif mengeksplorasi materi pemrograman, mencoba tools desain grafis, dan mempelajari literasi analisis pasar secara mandiri.
            </p>

            {/* Core Values / Learning Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Belajar mandiri berkesinambungan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Sikap jujur & realistis terhadap keahlian</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Pengalaman kerja lapangan nyata</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Orientasi pemecahan masalah praktis</span>
              </div>
            </div>
          </div>

          {/* Structured Cards (Right) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Timeline Pendidikan Singkat */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Jalur Pendidikan</span>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                
                {/* Item 1 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center shrink-0 z-10 text-[10px] font-bold text-blue-300">
                    1
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 block">Pendidikan Saat Ini</span>
                    <h3 className="text-sm font-bold text-white">Universitas Komputer Majenang (UNIKMA)</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Program Studi Sistem Informasi · Semester 1</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Fokus pada pondasi algoritma, arsitektur sistem, basis data, dan logika pemrosesan data.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 z-10 text-[10px] font-bold text-slate-300">
                    2
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Pendidikan Sebelumnya</span>
                    <h3 className="text-sm font-semibold text-slate-200">SMK Farmasi Majenang</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Jenjang Sekolah Menengah Kejuruan</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Membentuk kedisiplinan kerja, ketelitian operasional, dan awal ketertarikan pada pembuatan aplikasi komputer.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Minat & Aspirasi Card */}
            <div className="bg-gradient-to-br from-slate-900/80 to-[#101728] border border-blue-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">
                <Target className="w-3.5 h-3.5" />
                <span>Tujuan & Komitmen</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Mempersiapkan Diri Menghadapi Kebutuhan Industri
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Saya tidak mengklaim diri sebagai ahli atau profesional yang serba bisa. Namun, saya berkomitmen untuk terus meningkatkan jam terbang praktek, memperluas wawasan rekayasa sistem informasi, dan siap berkontribusi dengan etos kerja yang terpercaya.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
