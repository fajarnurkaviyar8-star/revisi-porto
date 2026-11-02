export interface EducationItem {
  institution: string;
  major: string;
  period: string;
  status: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  placeName: string;
  field: string;
  role: string;
  periodNote: string;
  activities: string[];
  takeaways: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  periodNote: string;
  shortDesc: string;
  background: string;
  techStack: string[];
  keyFeatures: string[];
  learnings: string[];
  imageIllustration: string;
  isIllustration: boolean;
  note: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  items: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface InterestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusPoint: string;
  learningScope: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Fajar Nur Kaviyar",
    shortName: "Fajar",
    initials: "FNK",
    label: "Mahasiswa Sistem Informasi",
    university: "Universitas Komputer Majenang (UNIKMA)",
    currentSemester: "Semester 1",
    previousEducation: "SMK Farmasi Majenang",
    location: "Majenang, Jawa Tengah, Indonesia",
    email: "fajarnurkaviyar8@gmail.com",
    phone: "0877 1444 2352",
    whatsappLink: "https://wa.me/6287714442352?text=Halo%20Fajar,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.",
    heroBio: "Saya adalah mahasiswa Sistem Informasi yang memiliki minat dalam teknologi, pengembangan aplikasi, desain digital, dan pemecahan masalah. Saya senang mempelajari hal baru, mengembangkan keterampilan, dan membangun pengalaman melalui proyek serta aktivitas kerja.",
    aboutNarrative: `Halo! Saya Fajar Nur Kaviyar, mahasiswa semester 1 Program Studi Sistem Informasi di Universitas Komputer Majenang (UNIKMA). Sebelumnya, saya menempuh pendidikan menengah kejuruan di SMK Farmasi Majenang.

Perjalanan saya di bidang Sistem Informasi didorong oleh rasa ingin tahu yang besar terhadap cara teknologi bekerja untuk mempermudah kegiatan manusia dan operasional bisnis. Saya memiliki minat kuat dalam rekayasa aplikasi, eksplorasi desain grafis & digital, serta pemecahan masalah (problem solving).

Saat ini, saya aktif memfokuskan diri pada pembelajaran mandiri dan penguatan fondasi teknis pemrograman dasar, pengelolaan basis data, serta pemahaman alur sistem. Saya percaya bahwa konsistensi, kemauan mencoba hal baru, dan kebiasaan kerja nyata adalah fondasi penting untuk mempersiapkan diri menyongsong dunia profesional di masa mendatang.`,
    avatarPlaceholder: "/src/assets/images/student_profile_avatar_placeholder_1792417305971.jpg",
    cvFileName: "cv-fajar-nur-kaviyar.pdf",
    cvStaticPath: "/cv-fajar-nur-kaviyar.pdf",
  },

  education: [
    {
      institution: "Universitas Komputer Majenang (UNIKMA)",
      major: "Program Studi Sistem Informasi",
      period: "Semester 1 (Sedang Menempuh)",
      status: "Pendidikan Tinggi Saat Ini",
      description: "Mempelajari dasar-dasar ilmu komputer, algoritma, rekayasa proses bisnis, struktur data, dan arsitektur sistem informasi digital."
    },
    {
      institution: "SMK Farmasi Majenang",
      major: "Pendidikan Menengah Kejuruan",
      period: "Pendidikan Sebelumnya",
      status: "Alumni",
      description: "Menyelesaikan pendidikan kejuruan yang melatih kedisiplinan, ketelitian dalam prosedur kerja, serta awal mula ketertarikan pada pengembangan aplikasi komputer."
    }
  ] as EducationItem[],

  experiences: [
    {
      id: "exp-1",
      placeName: "CV. Mulya Mediatama Advertising",
      field: "Advertising & Percetakan Promosi",
      role: "Tenaga Pendukung Produksi & Finishing",
      periodNote: "Pengalaman Kerja Lapangan / Praktis",
      activities: [
        "Melakukan finishing banner promosi, termasuk pemotongan bahan, perapian tepi, dan penyelesaian akhir sebelum diserahkan ke klien.",
        "Membantu proses finishing stiker cutting dan materi cetak komersial.",
        "Pernah mencoba dan mempraktikkan pembuatan desain banner menggunakan software CorelDRAW.",
        "Mengenal secara langsung alur produksi materi periklanan fisik mulai dari tahap desain acuan, proses cetak mesin, hingga tahap pasca-produksi (finishing)."
      ],
      takeaways: "Melatih ketelitian fisik, manajemen waktu pengerjaan pesanan, serta pemahaman bahwa desain digital harus sinkron dengan batasan teknis mesin cetak."
    },
    {
      id: "exp-2",
      placeName: "Usaha Dekorasi Hajatan & Pernikahan",
      field: "Layanan Acara & Dekorasi Fisik",
      role: "Tenaga Bantuan Dekorasi (Membantu Usaha Keluarga)",
      periodNote: "Keterlibatan Praktis / Mandiri",
      activities: [
        "Membantu pekerjaan orang tua dalam kegiatan persiapan dekorasi acara hajatan dan resepsi pernikahan.",
        "Melakukan persiapan peralatan, pengangkutan properti panggung, dan penataan tata letak dekorasi sesuai kebutuhan acara.",
        "Melaksanakan pekerjaan pendukung dekorasi secara tanggap mengikuti dinamika dan permintaan di lokasi acara.",
        "Bekerja sama dalam tim fisik untuk memastikan panggung dekorasi siap tepat waktu sebelum acara dimulai."
      ],
      takeaways: "Membentuk etos kerja lapangan yang tangguh, kesiapan beradaptasi dengan perubahan mendadak di lokasi, serta rasa tanggung jawab terhadap tugas yang diamanahkan."
    }
  ] as ExperienceItem[],

  featuredProject: {
    id: "proj-1",
    title: "Aplikasi Sistem Informasi Peminjaman Buku Perpustakaan",
    category: "Aplikasi Desktop Windows",
    periodNote: "Proyek Mandiri Saat SMK",
    shortDesc: "Aplikasi desktop perpustakaan berbasis Windows yang dibuat saat SMK untuk membantu pengelolaan data buku, data siswa, dan transaksi peminjaman secara terintegrasi.",
    background: "Saat di SMK, pengelolaan data buku dan sirkulasi peminjaman di lingkungan sekolah sering kali masih bergantung pada buku catatan manual atau tabel terpisah yang rentan redudansi dan keterlambatan penelusuran. Proyek ini dibuat sebagai latihan nyata untuk membangun solusi perangkat lunak mandiri yang mampu menggabungkan antarmuka form desktop dengan basis data terstruktur.",
    techStack: [
      "Visual Studio 2012",
      "Microsoft Access 2013",
      "Windows Forms Desktop",
      "SQL Query (CRUD)"
    ],
    keyFeatures: [
      "Autentikasi Login untuk hak akses Petugas / Administrator perpustakaan.",
      "Manajemen Data Buku (CRUD): Tambah judul baru, edit data pengarang/penerbit, hapus, dan lihat koleksi.",
      "Manajemen Data Siswa (CRUD): Pengelolaan identitas anggota peminjam buku.",
      "Pencatatan Transaksi Peminjaman: Perekaman tanggal pinjam, batas waktu kembali, serta status transaksi.",
      "Integrasi Basis Data: Seluruh perubahan data tersimpan otomatis ke file basis data Microsoft Access."
    ],
    learnings: [
      "Memahami relasi tabel basis data relasional (buku, siswa, transaksi peminjaman).",
      "Menguasai event-handling pada komponen form Visual Studio (tombol simpan, edit, data grid view).",
      "Belajar menulis kueri SQL dasar (SELECT, INSERT, UPDATE, DELETE) yang dihubungkan ke connection string desktop.",
      "Pentingnya penanganan error sederhana saat input data kosong atau format tidak sesuai."
    ],
    imageIllustration: "/src/assets/images/library_desktop_app_illustration_1792417307119.jpg",
    isIllustration: true,
    note: "Catatan: Proyek ini merupakan aplikasi desktop yang pernah saya buat saat masih bersekolah di SMK untuk keperluan pembelajaran mandiri. Aplikasi ini bukan layanan berbasis web daring publik dan belum diimplementasikan di perpustakaan komersial resmi."
  } as ProjectItem,

  skills: [
    {
      categoryName: "Pemrograman & Basis Data",
      description: "Bahasa dan teknologi pengembangan yang sedang saya pelajari serta kembangkan secara bertahap.",
      items: [
        { name: "HTML", level: "Dasar", context: "Penyusunan struktur halaman web dan markup semantik." },
        { name: "CSS", level: "Dasar", context: "Styling antarmuka, tata letak flexbox, dan visual styling." },
        { name: "JavaScript", level: "Dasar", context: "Logika dasar pemrograman web dan manipulasi elemen." },
        { name: "Java", level: "Dasar", context: "Konsep pemrograman berorientasi objek (OOP) dasar." },
        { name: "MySQL", level: "Dasar", context: "Perancangan tabel, tipe data, dan kueri relasional dasar." },
        { name: "Microsoft Access", level: "Dasar", context: "Penyimpanan database relasional untuk aplikasi desktop." }
      ]
    },
    {
      categoryName: "Aplikasi & Perangkat Lunak Desain",
      description: "Software produktivitas, pembuatan materi grafis promosi, dan Integrated Development Environment (IDE).",
      items: [
        { name: "Microsoft Word", level: "Penggunaan Terbiasa", context: "Penyusunan dokumen formal, makalah kuliah, dan laporan terstruktur." },
        { name: "Canva", level: "Penggunaan Terbiasa", context: "Pembuatan materi visual cepat, presentasi, dan konten sosial." },
        { name: "CorelDRAW", level: "Dasar", context: "Desain vektor banner, stiker promosi, dan penyesuaian materi percetakan." },
        { name: "Visual Studio 2012", level: "Dasar", context: "Pengembangan antarmuka desktop Windows Form dan kode program." }
      ]
    },
    {
      categoryName: "Keterampilan Pendukung & Sikap Kerja",
      description: "Karakter pribadi dan etos kerja yang terus saya asah dalam studi maupun kegiatan nyata.",
      items: [
        { name: "Mau Belajar Secara Mandiri", level: "Prinsip Utama", context: "Proaktif mencari referensi materi perkuliahan, dokumentasi, dan tutorial teknis." },
        { name: "Penyelesaian Tugas Terstruktur", level: "Praktek Nyata", context: "Membagi pekerjaan menjadi langkah bertahap agar tuntas secara runtut dan teliti." },
        { name: "Pengalaman Bekerja Langsung", level: "Teruji", context: "Terbiasa dengan pekerjaan fisik di lapangan (percetakan & dekorasi) yang menuntut keuletan." },
        { name: "Kemauan Mengembangkan Kemampuan Teknis", level: "Komitmen", context: "Terbuka menerima masukan, memperbaiki kekurangan, dan meningkatkan standar diri." }
      ]
    }
  ] as SkillCategory[],

  interests: [
    {
      id: "int-1",
      title: "Teknologi & Pengembangan Aplikasi",
      category: "Akademik & Karir",
      description: "Ketertarikan utama dalam mengeksplorasi bagaimana kode program dan basis data dapat dirancang menjadi sistem informasi yang memudahkan pekerjaan nyata.",
      focusPoint: "Membangun fondasi logika pemrograman dan eksplorasi arsitektur sistem digital.",
      learningScope: "Fokus studi utama di Sistem Informasi UNIKMA."
    },
    {
      id: "int-2",
      title: "Belajar Investasi Saham",
      category: "Literasi Finansial Pribadi",
      description: "Mempelajari konsep dasar kepemilikan bisnis melalui instrumen saham, membaca laporan ringkas perusahaan, dan pemahaman akumulasi modal jangka panjang.",
      focusPoint: "Edukasi mandiri mengenai nilai bisnis, valuasi dasar, dan kedisiplinan keuangan.",
      learningScope: "Minat pembelajaran mandiri, bukan layanan finansial atau klaim return."
    },
    {
      id: "int-3",
      title: "Mempelajari Trading Saham & Forex",
      category: "Eksplorasi Analisis",
      description: "Mempelajari mekanisme likuiditas pasar, grafik pergerakan harga, serta bagaimana dinamika makroekonomi mempengaruhi mata uang dan indeks pasar.",
      focusPoint: "Memahami analisa teknikal, pola candlestick, dan dinamika supply-demand.",
      learningScope: "Studi pembelajaran mekanisme pasar dan probabilitas pergerakan."
    },
    {
      id: "int-4",
      title: "Analisis Pasar & Manajemen Risiko",
      category: "Disiplin & Kontrol",
      description: "Mendalami esensi penting dari pembatasan risiko (risk management), rasio risk-to-reward, dan pengendalian psikologi saat menghadapi ketidakpastian data.",
      focusPoint: "Fokus pada pelestarian modal dan pengambilan keputusan berbasis aturan terukur.",
      learningScope: "Pelajaran berharga yang relevan juga dengan problem-solving sistem informasi."
    },
    {
      id: "int-5",
      title: "Berenang",
      category: "Kesehatan Fisik & Rekreasi",
      description: "Kegiatan olahraga rutin untuk menjaga kebugaran fisik, melatih pernapasan, serta menyegarkan pikiran setelah fokus belajar di depan komputer.",
      focusPoint: "Menjaga daya tahan tubuh, konsistensi ritme, dan keseimbangan hidup sehat.",
      learningScope: "Hobi olahraga aktif di waktu luang."
    }
  ] as InterestItem[],

  developerGuide: {
    photoGuide: "Untuk mengganti foto profil dengan foto Anda sendiri: Siapkan file foto (misalnya format JPG/PNG), masukkan ke folder /public/images/profile.jpg (atau ganti nilai avatarPlaceholder di src/data/portfolioData.ts). Foto akan langsung tampil otomatis.",
    cvGuide: "Untuk menambahkan file CV PDF asli: Buat file PDF bernama cv-fajar-nur-kaviyar.pdf lalu letakkan di folder /public/. Tombol 'Unduh CV PDF' di website ini juga menyediakan fitur interaktif 'Cetak / Simpan ke PDF' langsung dari browser yang sudah tertata rapi.",
    projectScreenshotGuide: "Untuk memasukkan screenshot asli aplikasi peminjaman buku perpustakaan: Simpan gambar screenshot di folder /public/images/project-perpustakaan.jpg dan perbarui properti imageIllustration di src/data/portfolioData.ts serta ubah isIllustration menjadi false."
  }
};
