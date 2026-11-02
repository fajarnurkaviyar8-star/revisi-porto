import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Printer, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="pengalaman" className="py-20 relative bg-[#080c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pengalaman Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Pengalaman Kerja & Aktivitas Praktis Lapangan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Pengalaman langsung dalam lingkungan kerja operasional yang menumbuhkan tanggung jawab, ketelitian pengerjaan, dan ketangguhan etos kerja.
          </p>
        </div>

        {/* 2 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Advertising & Printing */}
          <div className="flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-blue-400/90 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded-md">
                  Advertising & Percetakan
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                CV. Mulya Mediatama Advertising
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Tenaga Pendukung Produksi & Finishing
              </p>

              {/* Activities list */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Tugas & Aktivitas yang Dijalankan:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>Melakukan finishing banner promosi, termasuk pemotongan bahan yang presisi dan penyelesaian akhir sebelum diserahkan kepada pemesan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>Membantu proses finishing stiker promosi dan penataan materi cetak.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>Pernah mencoba dan mempraktikkan perancangan desain banner menggunakan software CorelDRAW.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>Mengenal langsung seluruh alur produksi materi promosi visual: dari konsep desain grafis hingga tahapan output mesin cetak fisik.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom takeaway box */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-950/40 -mx-2 -mb-2 p-3.5 rounded-xl border border-slate-800/50">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Pembelajaran Utama:
              </span>
              <p className="text-xs text-slate-300">
                Memahami pentingnya ketelitian ukuran milimeter pada hasil cetak serta sinkronisasi antara desain file komputer dengan kemampuan mesin produksi.
              </p>
            </div>
          </div>

          {/* Card 2: Event Decoration (Family Support) */}
          <div className="flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-violet-950/20 group">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-violet-400/90 bg-violet-950/60 border border-violet-800/60 px-2.5 py-1 rounded-md">
                  Layanan Acara & Penataan
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                Dekorasi Hajatan & Pernikahan
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Bantuan Penataan & Operasional (Usaha Keluarga)
              </p>

              {/* Activities list */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Tugas & Aktivitas yang Dijalankan:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>Membantu pekerjaan orang tua dalam seluruh rangkaian kegiatan dekorasi acara hajatan dan resepsi pernikahan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>Melakukan persiapan bahan, pengangkutan ornamen, serta penataan panggung dan interior acara sesuai tema yang diminta.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>Melaksanakan pekerjaan pendukung secara cekatan mengikuti dinamika dan instruksi di lokasi kerja nyata.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>Menyelesaikan target dekorasi dengan tenggat waktu ketat sebelum acara keluarga tamu dimulai.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom takeaway box */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-950/40 -mx-2 -mb-2 p-3.5 rounded-xl border border-slate-800/50">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Pembelajaran Utama:
              </span>
              <p className="text-xs text-slate-300">
                Membentuk daya tahan mental dan fisik, kebiasaan bekerja sama dalam tim, serta kepatuhan pada target waktu yang tidak dapat ditunda.
              </p>
            </div>
          </div>

        </div>

        {/* Realism Note Banner */}
        <div className="mt-8 bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Portofolio ini mencantumkan pengalaman nyata tanpa klaim jabatan korporasi semu atau angka rekayasa.
          </span>
        </div>

      </div>
    </section>
  );
};
