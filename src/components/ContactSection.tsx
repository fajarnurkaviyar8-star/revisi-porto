import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  Phone, 
  ArrowUpRight, 
  Sparkles,
  Info,
  MapPin
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Halo Fajar, saya ${senderName || 'Pengunjung Portofolio'}${senderContact ? ` (${senderContact})` : ''}:%0A%0A${encodeURIComponent(message || 'Saya melihat portofolio Anda dan ingin berdiskusi.')}`;
    const url = `https://wa.me/6287714442352?text=${formattedText}`;
    window.open(url, '_blank');
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Diskusi Portofolio - Dari ${senderName || 'Pengunjung'}`);
    const body = encodeURIComponent(`Halo Fajar Nur Kaviyar,\n\nNama: ${senderName || '-'}\nKontak: ${senderContact || '-'}\n\nPesan:\n${message || 'Saya melihat website portofolio Anda dan ingin berdiskusi.'}\n\nSalam.`);
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-20 relative bg-[#080c15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Mari Terhubung & Berdiskusi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Terbuka untuk diskusi seputar tugas perkuliahan, kolaborasi teknologi dasar, maupun kesempatan belajar praktis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (Left) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Salin alamat email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Alamat Email Resmi
                </span>
                <p className="text-base font-semibold text-white mt-0.5 break-all">
                  {PORTFOLIO_DATA.profile.email}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Kirim langsung via aplikasi email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Buka Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone')}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Salin nomor WhatsApp"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Nomor WhatsApp
                </span>
                <p className="text-base font-semibold text-white mt-0.5">
                  {PORTFOLIO_DATA.profile.phone}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Format internasional aktif (+62)</span>
                <a
                  href={PORTFOLIO_DATA.profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="p-4 bg-slate-950/60 border border-slate-800/90 rounded-xl flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                Berbasis di <strong className="text-slate-300">Majenang, Jawa Tengah, Indonesia</strong> · Universitas Komputer Majenang (UNIKMA)
              </span>
            </div>

          </div>

          {/* Functional Message Drafter (Right) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Kirim Pesan Cepat
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tulis pesan Anda dan pilih jalur pengiriman langsung yang paling nyaman.
                </p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Kontak Anda (Opsional)
                  </label>
                  <input
                    type="text"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    placeholder="Email atau No. WhatsApp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Isi Pesan
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan topik diskusi, pertanyaan, atau masukan untuk Fajar..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="flex-1 min-w-[180px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaEmail}
                  className="flex-1 min-w-[180px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim via Email</span>
                </button>
              </div>

              {/* Honest Explanation Note */}
              <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 text-[11px] text-slate-400">
                <Info className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <p>
                  <strong>Keterbukaan Sistem:</strong> Tombol di atas langsung membuka aplikasi WhatsApp resmi atau klien email Anda dengan draft pesan yang sudah terisi rapi. Tanpa server perantara buatan, sehingga pesan terkirim secara langsung dan aman.
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
