import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  CheckCircle2, 
  FileText,
  Info,
  Camera
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [showPdfGuide, setShowPdfGuide] = useState(false);
  const { profileImage, openEditor } = usePortfolioImages();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden on print) */}
        <div className="no-print bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-sm text-white">
              Curriculum Vitae (CV) · {PORTFOLIO_DATA.profile.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all cursor-pointer active:scale-95"
              title="Cetak langsung atau simpan sebagai file PDF melalui browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPdfGuide(!showPdfGuide)}
              className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Informasi file PDF static"
            >
              <Info className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Guide Callout if toggled */}
        {showPdfGuide && (
          <div className="no-print bg-blue-950/60 border-b border-blue-900/60 p-4 text-xs text-blue-200 flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="font-semibold text-white">
                Opsi File PDF Khusus:
              </p>
              <p>
                Tombol "Cetak / Simpan PDF" di atas akan memformat lembar CV ini secara optimal menggunakan fungsi cetak browser (pilih tujuan <em>"Save as PDF"</em>).
              </p>
              <p className="text-blue-300/80">
                Jika Anda memiliki file PDF hasil desain terpisah, cukup letakkan file bernama <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">cv-fajar-nur-kaviyar.pdf</code> di dalam folder <code className="bg-slate-900 px-1 py-0.5 rounded">public/</code>.
              </p>
            </div>
          </div>
        )}

        {/* CV Printable Document Sheet */}
        <div className="print-cv-container max-h-[80vh] overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-200">
          
          {/* CV Header */}
          <div className="border-b border-slate-700/80 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-slate-950 shrink-0">
                  <img
                    src={profileImage}
                    alt={PORTFOLIO_DATA.profile.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => openEditor('profile')}
                    className="no-print absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-[10px] font-mono transition-opacity cursor-pointer"
                    title="Ubah foto CV"
                  >
                    Ubah
                  </button>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {PORTFOLIO_DATA.profile.fullName}
                  </h1>
                  <p className="text-sm font-semibold text-blue-400 mt-0.5">
                    Mahasiswa Sistem Informasi (Semester 1)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {PORTFOLIO_DATA.profile.university}
                  </p>
                </div>
              </div>

              {/* Contact mini strip */}
              <div className="text-xs space-y-1 text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>Majenang, Jawa Tengah, ID</span>
                </div>
              </div>
            </div>

            {/* Profil Singkat */}
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Profil Singkat: </strong>
              Mahasiswa Program Studi Sistem Informasi di Universitas Komputer Majenang (UNIKMA) dengan latar belakang pendidikan kejuruan di SMK Farmasi Majenang. Memiliki minat mendalam terhadap pengembangan aplikasi, desain digital, dan basis data. Berkomitmen mengembangkan keterampilan teknis secara mandiri dan mengedepankan etos kerja bertanggung jawab yang terasah melalui pengalaman lapangan.
            </div>
          </div>

          {/* Section: Pendidikan */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-slate-800 pb-1.5 mb-3">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Riwayat Pendidikan</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="font-semibold text-white">Universitas Komputer Majenang (UNIKMA)</h3>
                  <p className="text-blue-300 text-xs">Program Studi S1 Sistem Informasi</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Sedang menempuh semester 1. Mempelajari logika pemrograman, arsitektur sistem informasi, dan struktur data.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 shrink-0">Semester 1</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-2 border-t border-slate-800/60">
                <div>
                  <h3 className="font-semibold text-slate-200">SMK Farmasi Majenang</h3>
                  <p className="text-slate-400 text-xs">Pendidikan Menengah Kejuruan</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Melatih ketelitian prosedural dan awal mula ketertarikan pada eksplorasi pemrograman aplikasi komputer.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 shrink-0">Alumni</span>
              </div>
            </div>
          </div>

          {/* Section: Pengalaman Kerja & Lapangan */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-slate-800 pb-1.5 mb-3">
              <Briefcase className="w-4 h-4 text-violet-400" />
              <span>Pengalaman Kerja & Lapangan</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <h3 className="font-semibold text-white">CV. Mulya Mediatama Advertising</h3>
                  <span className="text-xs font-mono text-slate-400">Tenaga Pendukung Finishing</span>
                </div>
                <p className="text-xs text-blue-300">Bidang: Advertising dan Percetakan</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-300">
                  <li>Melakukan finishing banner promosi (pemotongan presisi dan penyelesaian tepi akhir).</li>
                  <li>Membantu proses finishing stiker komersial.</li>
                  <li>Mencoba dan mempraktikkan desain banner menggunakan software CorelDRAW.</li>
                  <li>Mengenal alur produksi lengkap media promosi fisik dari desain hingga cetak.</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <h3 className="font-semibold text-white">Dekorasi Hajatan & Pernikahan</h3>
                  <span className="text-xs font-mono text-slate-400">Bantuan Penataan & Operasional</span>
                </div>
                <p className="text-xs text-violet-300">Bidang: Jasa Dekorasi Acara (Membantu Usaha Orang Tua)</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-300">
                  <li>Membantu persiapan properti, penataan dekorasi pelaminan dan interior acara.</li>
                  <li>Menjalankan pekerjaan pendukung secara cekatan mengikuti dinamika lokasi.</li>
                  <li>Bekerja secara langsung dalam tim fisik dengan target deadline waktu acara yang ketat.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Proyek */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-slate-800 pb-1.5 mb-3">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Proyek Aplikasi</span>
            </h2>

            <div className="text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <h3 className="font-semibold text-white">Aplikasi Sistem Informasi Peminjaman Buku Perpustakaan</h3>
                <span className="text-xs font-mono text-slate-400">Proyek Mandiri Saat SMK</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Teknologi: Visual Studio 2012 · Microsoft Access 2013 · Windows Desktop Forms
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-300">
                <li>Modul Login autentikasi untuk admin / petugas perpustakaan.</li>
                <li>CRUD (Create, Read, Update, Delete) data koleksi buku perpustakaan.</li>
                <li>CRUD data anggota / siswa peminjam.</li>
                <li>Pencatatan sirkulasi transaksi peminjaman buku terintegrasi ke basis data Access.</li>
              </ul>
            </div>
          </div>

          {/* Section: Keahlian */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                Keahlian Teknis & Aplikasi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-slate-200">Bahasa & Database (Dasar):</strong> HTML, CSS, JavaScript, Java, MySQL, Microsoft Access.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                <strong className="text-slate-200">Perangkat Lunak:</strong> Microsoft Word, Canva, CorelDRAW, Visual Studio 2012.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                Keahlian Pendukung & Karakter
              </h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• Mau belajar secara mandiri & tekun mencari materi</li>
                <li>• Berusaha menyelesaikan tugas dengan terstruktur</li>
                <li>• Pengalaman bekerja secara langsung di lapangan</li>
                <li>• Komitmen tinggi mengembangkan kemampuan teknis</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer (hidden on print) */}
        <div className="no-print bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Portofolio & CV Fajar Nur Kaviyar</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
