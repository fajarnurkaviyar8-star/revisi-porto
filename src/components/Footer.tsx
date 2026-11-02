import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { ArrowUp, Heart, BookOpen, Sparkles, FileText, HelpCircle, Camera } from 'lucide-react';

interface FooterProps {
  onOpenCvModal: () => void;
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal, onOpenGuideModal }) => {
  const currentYear = new Date().getFullYear();
  const { openEditor } = usePortfolioImages();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 text-slate-400 text-xs no-print relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white text-xs">
                {PORTFOLIO_DATA.profile.initials}
              </div>
              <span className="font-bold text-base text-white">
                {PORTFOLIO_DATA.profile.fullName}
              </span>
            </div>
            <p className="text-slate-400 mt-1 text-xs">
              Mahasiswa Sistem Informasi · {PORTFOLIO_DATA.profile.university}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <a href="#beranda" onClick={(e) => scrollToSection(e, 'beranda')} className="hover:text-blue-400 transition-colors">
              Beranda
            </a>
            <a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')} className="hover:text-blue-400 transition-colors">
              Tentang Saya
            </a>
            <a href="#pengalaman" onClick={(e) => scrollToSection(e, 'pengalaman')} className="hover:text-blue-400 transition-colors">
              Pengalaman
            </a>
            <a href="#proyek" onClick={(e) => scrollToSection(e, 'proyek')} className="hover:text-blue-400 transition-colors">
              Proyek
            </a>
            <a href="#keahlian" onClick={(e) => scrollToSection(e, 'keahlian')} className="hover:text-blue-400 transition-colors">
              Keahlian
            </a>
            <a href="#minat" onClick={(e) => scrollToSection(e, 'minat')} className="hover:text-blue-400 transition-colors">
              Minat
            </a>
            <a href="#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className="hover:text-blue-400 transition-colors">
              Kontak
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left">
            © {currentYear} {PORTFOLIO_DATA.profile.fullName}. Dibuat dengan semangat belajar dan berkembang.
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => openEditor('profile')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-800/80 transition-colors cursor-pointer text-xs font-medium"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Ganti Foto Web</span>
            </button>

            <button
              type="button"
              onClick={onOpenGuideModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer text-xs"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Panduan Kode</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer text-xs"
              aria-label="Kembali ke bagian paling atas halaman"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
