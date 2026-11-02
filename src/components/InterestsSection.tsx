import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Heart, 
  Waves, 
  Cpu, 
  TrendingUp, 
  LineChart, 
  ShieldAlert, 
  BookOpen, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'int-1':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'int-2':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'int-3':
        return <LineChart className="w-5 h-5 text-violet-400" />;
      case 'int-4':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'int-5':
        return <Waves className="w-5 h-5 text-cyan-400" />;
      default:
        return <Heart className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="minat" className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span>Minat & Eksplorasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Ketertarikan Personal & Pembelajaran Mandiri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Hal-hal yang saya senangi untuk melatih ketajaman analisis, kebugaran fisik, serta literasi sistem dan keuangan.
          </p>
        </div>

        {/* 5-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.interests.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 rounded-2xl p-6 transition-all shadow-md group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getInterestIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950/70 border border-slate-800 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/70 text-xs">
                  <span className="font-mono text-slate-400 block mb-1 text-[11px]">
                    Fokus Pengetahuan:
                  </span>
                  <p className="text-slate-300">
                    {item.focusPoint}
                  </p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>{item.learningScope}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note regarding Investment & Trading */}
        <div className="mt-10 p-4 bg-slate-950/80 border border-slate-800/90 rounded-xl flex items-start gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Catatan Etika:</strong> Minat terhadap saham, forex, dan analisis pasar diposisikan murni sebagai sarana edukasi literasi finansial serta studi analisis risiko probabilistik pribadi, bukan sebagai profesi penasihat keuangan, bukan pekerjaan utama, dan tidak memuat klaim keuntungan apapun.
          </p>
        </div>

      </div>
    </section>
  );
};
