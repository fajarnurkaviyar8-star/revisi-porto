import React, { useState } from 'react';
import { 
  X, 
  Image, 
  FileText, 
  FolderTree, 
  Code, 
  Check, 
  Copy, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface DeveloperGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperGuideModal: React.FC<DeveloperGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'foto' | 'cv' | 'proyek' | 'struktur'>('foto');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const copySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-sm sm:text-base text-white">
              Panduan Pengembangan & Pembaruan Portofolio
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-2 overflow-x-auto gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('foto')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'foto'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>1. Ganti Foto Profil</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cv')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cv'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>2. Tambah CV PDF</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('proyek')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'proyek'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>3. Screenshot Proyek</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('struktur')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'struktur'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>4. Struktur Kode</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[70vh] overflow-y-auto space-y-4">
          
          {activeTab === 'foto' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-900/60 rounded-xl text-emerald-200">
                <p className="font-semibold text-white mb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Cara Paling Cepat: Edit Langsung di Web (Tanpa Sentuh Kode!)</span>
                </p>
                <p className="text-xs text-slate-300">
                  Cukup klik tombol <strong>"Ganti Foto Langsung"</strong> di kartu foto Hero atau klik langsung foto profil. Anda bisa memilih foto dari galeri HP atau folder laptop. Foto akan langsung tampil seketika dan tersimpan di memori browser Anda!
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-300 space-y-2">
                <p className="font-semibold text-white text-xs">
                  Cara Alternatif Melalui Kode File Statis:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300">
                  <li>
                    Siapkan file foto wajah formal/semi-formal Anda (disarankan format <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">.jpg</code> atau <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">.png</code>).
                  </li>
                  <li>
                    Simpan file gambar tersebut ke folder: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-blue-300">/public/images/fajar-profile.jpg</code>
                  </li>
                  <li>
                    Di <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white">src/data/portfolioData.ts</code>, ubah baris <code className="text-blue-300">avatarPlaceholder</code> menjadi <code className="text-emerald-400">"/images/fajar-profile.jpg"</code>.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'cv' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-violet-950/40 border border-violet-900/60 rounded-xl text-violet-200">
                <p className="font-semibold text-white mb-1">
                  Dua Cara Menyediakan Unduhan CV PDF:
                </p>
                <p>
                  Website ini sudah memiliki fitur cetak PDF langsung bawaan, ditambah opsi menghubungkan file PDF statis.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="font-bold text-white text-xs mb-1">
                    Metode 1 (Otomatis & Langsung Berfungsi):
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Klik tombol <strong>"Unduh CV"</strong> di header atau hero ➔ Klik <strong>"Cetak / Simpan PDF"</strong>. Halaman CV yang rapi akan muncul dan dialog browser akan memformat dokumen menjadi PDF standar yang siap disimpan atau dicetak.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="font-bold text-white text-xs mb-1">
                    Metode 2 (File PDF Dokumen Buatan Sendiri):
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Jika Anda membuat CV di Canva / Word dan mengekspornya menjadi PDF, simpan file tersebut di:
                  </p>
                  <div className="my-1 p-2 bg-slate-900 rounded font-mono text-xs text-amber-300 border border-slate-800">
                    /public/cv-fajar-nur-kaviyar.pdf
                  </div>
                  <p className="text-slate-400 text-xs">
                    Pengunjung dapat mengunduhnya langsung melalui tautan <code className="text-white">/cv-fajar-nur-kaviyar.pdf</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proyek' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-900/60 rounded-xl text-emerald-200">
                <p className="font-semibold text-white mb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Cara Paling Cepat: Edit Langsung di Web</span>
                </p>
                <p className="text-xs text-slate-300">
                  Klik tombol <strong>"Ganti Screenshot Langsung"</strong> di bagian kartu proyek, lalu upload file tangkapan layar form aplikasi Visual Studio Anda dari laptop atau HP. Gambar akan langsung terganti seketika.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-300 space-y-2">
                <p className="font-semibold text-white text-xs">
                  Cara Alternatif Melalui Kode File Statis:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300">
                  <li>
                    Jalankan aplikasi di laptop Anda, lalu ambil screenshot layar antarmuka perpustakaan.
                  </li>
                  <li>
                    Simpan file gambar di: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-blue-300">/public/images/screenshot-perpustakaan.jpg</code>
                  </li>
                  <li>
                    Di <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white">src/data/portfolioData.ts</code>, ubah <code className="text-blue-300">imageIllustration</code> menjadi <code className="text-emerald-400">"/images/screenshot-perpustakaan.jpg"</code> dan ubah <code className="text-emerald-400">isIllustration: false</code>.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'struktur' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300">
                Berikut struktur modular kode portofolio yang rapi agar mudah dipelajari oleh mahasiswa Sistem Informasi:
              </p>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1">
                <p className="text-blue-400">src/</p>
                <p className="pl-4 text-emerald-400">├── data/</p>
                <p className="pl-8 text-slate-300">└── portfolioData.ts <span className="text-slate-500">// Seluruh teks, profil, keahlian & proyek</span></p>
                <p className="pl-4 text-emerald-400">├── components/</p>
                <p className="pl-8 text-slate-300">├── Navbar.tsx <span className="text-slate-500">// Menu navigasi responsif & brand logo</span></p>
                <p className="pl-8 text-slate-300">├── HeroSection.tsx <span className="text-slate-500">// Header utama & kartu foto profil</span></p>
                <p className="pl-8 text-slate-300">├── AboutSection.tsx <span className="text-slate-500">// Cerita profil & riwayat pendidikan</span></p>
                <p className="pl-8 text-slate-300">├── ExperienceSection.tsx <span className="text-slate-500">// Pengalaman kerja percetakan & dekorasi</span></p>
                <p className="pl-8 text-slate-300">├── ProjectSection.tsx <span className="text-slate-500">// Aplikasi desktop perpustakaan</span></p>
                <p className="pl-8 text-slate-300">├── SkillsSection.tsx <span className="text-slate-500">// Pemetaan keahlian tanpa persentase palsu</span></p>
                <p className="pl-8 text-slate-300">├── InterestsSection.tsx <span className="text-slate-500">// Minat personal, olahraga & pasar modal</span></p>
                <p className="pl-8 text-slate-300">├── ContactSection.tsx <span className="text-slate-500">// Email, WhatsApp & pembuat pesan</span></p>
                <p className="pl-8 text-slate-300">├── CVModal.tsx <span className="text-slate-500">// Lembar CV siap cetak/simpan PDF</span></p>
                <p className="pl-8 text-slate-300">├── DeveloperGuideModal.tsx <span className="text-slate-500">// Panduan ganti foto/CV</span></p>
                <p className="pl-8 text-slate-300">└── Footer.tsx <span className="text-slate-500">// Hak cipta & tombol kembali ke atas</span></p>
                <p className="pl-4 text-emerald-400">├── App.tsx <span className="text-slate-500">// Penggabung utama komponen</span></p>
                <p className="pl-4 text-emerald-400">└── index.css <span className="text-slate-500">// Styling Tailwind & cetak dokumen CV</span></p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Mudah diedit & disesuaikan kapan saja</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
