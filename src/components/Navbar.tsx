import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { Menu, X, FileText, ArrowUpRight, Camera } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const { openEditor } = usePortfolioImages();

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Saya', href: '#tentang' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Minat', href: '#minat' },
    { label: 'Kontak', href: '#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors group shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            {PORTFOLIO_DATA.profile.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
              {PORTFOLIO_DATA.profile.fullName}
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-wide">
              Sistem Informasi UNIKMA
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-slate-800/80 font-semibold shadow-inner border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Desktop) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => openEditor('profile')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
            title="Ganti foto profil langsung dari web"
          >
            <Camera className="w-3.5 h-3.5 text-blue-400" />
            <span>Ganti Foto</span>
          </button>

          <button
            type="button"
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:shadow-blue-500/40 cursor-pointer whitespace-nowrap active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Lihat & Unduh CV</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => openEditor('profile')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md cursor-pointer"
            title="Ganti foto"
          >
            <Camera className="w-3.5 h-3.5 text-blue-400" />
          </button>
          <button
            type="button"
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-blue-300 bg-blue-950/60 border border-blue-800/60 rounded-md cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e19] border-b border-slate-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl transition-all">
          <div className="text-[11px] text-slate-400 font-mono px-3 py-1 uppercase tracking-wider">
            Menu Navigasi
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-blue-600/20 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800 mt-2 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openEditor('profile');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 text-blue-400" />
              <span>Ganti Foto / Screenshot Langsung</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Buka Curriculum Vitae (CV)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
