import React, { useState, useRef } from 'react';
import { usePortfolioImages } from '../context/PortfolioImageContext';
import { 
  X, 
  Upload, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  RotateCcw, 
  Check, 
  AlertCircle,
  Sparkles,
  Camera,
  FolderGit2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Helper function to resize large images to reasonable dimensions for localStorage storage
const processAndCompressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Compress as jpeg quality 0.85
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        resolve(dataUrl);
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const ImageManagerModal: React.FC = () => {
  const { 
    isEditorOpen, 
    closeEditor, 
    activeEditorTab, 
    setActiveEditorTab,
    profileImage,
    projectImage,
    isProfileCustom,
    isProjectCustom,
    setProfileImage,
    setProjectImage,
    resetProfileImage,
    resetProjectImage
  } = usePortfolioImages();

  const [urlInput, setUrlInput] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isEditorOpen) return null;

  const isProfile = activeEditorTab === 'profile';
  const currentImage = isProfile ? profileImage : projectImage;
  const isCustom = isProfile ? isProfileCustom : isProjectCustom;

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Harap pilih file gambar (JPG, PNG, WebP).');
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const optimizedDataUrl = await processAndCompressImage(file);
      if (isProfile) {
        setProfileImage(optimizedDataUrl);
        showNotification('Foto profil berhasil diunggah dan langsung tampil di web!');
      } else {
        setProjectImage(optimizedDataUrl);
        showNotification('Screenshot proyek berhasil diunggah dan langsung tampil di web!');
      }
    } catch (err) {
      setErrorMessage('Terjadi kesalahan saat memproses gambar. Coba file lain.');
      console.error(err);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    if (isProfile) {
      setProfileImage(urlInput.trim());
      showNotification('Foto profil berhasil diperbarui dari URL!');
    } else {
      setProjectImage(urlInput.trim());
      showNotification('Screenshot proyek berhasil diperbarui dari URL!');
    }
    setUrlInput('');
  };

  const handleReset = () => {
    if (isProfile) {
      resetProfileImage();
      showNotification('Foto profil dikembalikan ke tampilan awal default.');
    } else {
      resetProjectImage();
      showNotification('Gambar proyek dikembalikan ke ilustrasi konseptual awal.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center no-print">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white">
                Kelola & Ganti Foto Langsung di Web
              </h2>
              <p className="text-xs text-slate-400">
                Ubah gambar secara instan tanpa perlu mengedit atau mengulangi baris kode
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeEditor}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 pt-3 gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveEditorTab('profile');
              setErrorMessage(null);
            }}
            className={`pb-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              isProfile
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Foto Profil Wajah</span>
            {isProfileCustom && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="Foto khusus aktif" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveEditorTab('project');
              setErrorMessage(null);
            }}
            className={`pb-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              !isProfile
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Screenshot Proyek Perpustakaan</span>
            {isProjectCustom && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="Screenshot khusus aktif" />
            )}
          </button>
        </div>

        {/* Feedback alerts */}
        {successMessage && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Live Preview Row */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className={`relative overflow-hidden bg-slate-900 border border-slate-700 shrink-0 ${
              isProfile ? 'w-28 h-28 rounded-2xl aspect-square' : 'w-48 h-28 rounded-xl aspect-video'
            }`}>
              <img
                src={currentImage}
                alt="Pratinjau Saat Ini"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-semibold text-white">
                  {isProfile ? 'Foto Profil Aktif' : 'Gambar Proyek Aktif'}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  isCustom 
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {isCustom ? 'Foto Pribadi Anda' : 'Default / Bawaan'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isProfile 
                  ? 'Foto ini langsung tampil di Hero Section dan pratinjau dokumen Curriculum Vitae.' 
                  : 'Gambar ini ditampilkan sebagai preview utama aplikasi desktop perpustakaan SMK.'}
              </p>
              {isCustom && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 pt-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Kembalikan ke Foto Default</span>
                </button>
              )}
            </div>
          </div>

          {/* Action 1: Upload from Device */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
              Opsi 1: Unggah Langsung dari HP atau Komputer
            </label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-950/40 hover:bg-blue-950/10 group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                {isProcessing ? 'Sedang memproses gambar...' : 'Klik untuk memilih foto dari galeri / file'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Format didukung: JPG, PNG, WEBP (Otomatis disimpan di browser Anda)
              </p>
            </div>
          </div>

          {/* Action 2: Image URL */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
              Opsi 2: Atau Tempel Tautan / URL Gambar Online
            </label>
            <form onSubmit={handleApplyUrl} className="flex gap-2">
              <div className="relative flex-1">
                <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://contoh-link-gambar.com/foto-fajar.jpg"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                Gunakan URL
              </button>
            </form>
          </div>

          {/* Storage Explanation */}
          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-blue-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Penyimpanan Otomatis (Local Storage):</span>
            </div>
            <p>
              Gambar yang Anda pilih disimpan langsung di memori browser perangkat ini (<code className="text-slate-300">localStorage</code>). Setiap kali Anda membuka website ini di masa mendatang, foto profil atau screenshot pilihan Anda akan selalu tampil secara otomatis tanpa perlu mengubah baris kode apapun.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Perubahan berlaku seketika</span>
          <button
            type="button"
            onClick={closeEditor}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
