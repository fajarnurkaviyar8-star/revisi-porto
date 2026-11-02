import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Code2, 
  Palette, 
  BrainCircuit, 
  Check, 
  Terminal, 
  Database, 
  FileCode, 
  Wrench,
  BookOpen
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIconForCategory = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Palette className="w-5 h-5 text-violet-400" />;
      default:
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="keahlian" className="py-20 relative bg-[#080c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian & Kemampuan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Pemetaan Keterampilan Teknis & Etos Kerja
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Disajikan secara jujur dan transparan berdasarkan tingkat penguasaan saat ini tanpa angka persentase atau rating buatan.
          </p>
        </div>

        {/* 3 Columns Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PORTFOLIO_DATA.skills.map((category, catIdx) => (
            <div
              key={category.categoryName}
              className="flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0">
                    {getIconForCategory(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.categoryName}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Items List */}
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm text-slate-200">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-blue-300 border border-slate-700/70">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                <span>Terus diasah melalui modul kuliah & proyek mandiri</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Mindset Banner */}
        <div className="mt-10 p-4 sm:p-5 bg-gradient-to-r from-blue-950/30 via-slate-900/60 to-violet-950/30 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Prinsip Belajar Berkelanjutan
              </h4>
              <p className="text-xs text-slate-400">
                Sebagai mahasiswa semester 1, fokus saya adalah mendalami logika pemrograman dan relasi basis data agar memiliki pondasi yang kokoh.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
            Kurikulum Semester 1
          </span>
        </div>

      </div>
    </section>
  );
};
