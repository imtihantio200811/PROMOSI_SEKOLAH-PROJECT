import pkl1 from "@/assets/pkl1.jpg";
import pkl2 from "@/assets/pkl2.jpg";
import pkl3 from "@/assets/pkl3.jpg";
import pkl4 from "@/assets/pkl4.jpg";
import pkl5 from "@/assets/pkl5.jpg";
import news1 from "@/assets/news1.jpg";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3.jpg";

export const SCHOOL = {
  name: "SMKN 1 Walas",
  longName: "SMK Negeri 1 Walas, Sumbawa",
  phone: "+62-82-221-003-538 (Imtihan)",
  email: "info@smkn1walas.sch.id",
  address: "Jl. Pendidikan No. 1, Walas, Kabupaten Sumbawa, NTB 84353",
  hours: "Senin – Jumat: 07.00 – 15.30 WITA",
  socials: {
    instagram: "https://instagram.com/smkn1walas",
    youtube: "https://youtube.com/@smkn1walas",
    facebook: "https://facebook.com/smkn1walas",
  },
  developer: "Muhammad Imtihan Ramadhan",
};

export type Department = {
  id: string;
  name: string;
  short: string;
  profile: string;
  curriculum: string[];
  careers: string[];
  image: string;
};

export const DEPARTMENTS: Department[] = [
  {
    id: "tkj",
    name: "Teknik Komputer & Jaringan",
    short: "TKJ",
    profile:
      "Program keahlian yang membekali siswa dengan kompetensi merancang, membangun, dan memelihara jaringan komputer serta infrastruktur TI modern.",
    curriculum: [
      "Dasar Pemrograman & Sistem Komputer",
      "Administrasi Sistem Jaringan",
      "Teknologi Jaringan Berbasis Luas (WAN)",
      "Keamanan Jaringan & Cyber Security",
      "Cloud Computing & Virtualisasi",
    ],
    careers: [
      "Network Administrator",
      "IT Support Specialist",
      "Cloud Engineer",
      "Wirausaha bidang TI",
    ],
    image: pkl2,
  },
  {
    id: "rpl",
    name: "Rekayasa Perangkat Lunak",
    short: "RPL",
    profile:
      "Mencetak developer muda yang siap membangun aplikasi web, mobile, dan sistem informasi dengan standar industri.",
    curriculum: [
      "Pemrograman Dasar & Struktur Data",
      "Pengembangan Web Front-End & Back-End",
      "Pemrograman Mobile",
      "Basis Data & RESTful API",
      "DevOps & Manajemen Proyek IT",
    ],
    careers: [
      "Front-End / Back-End Developer",
      "Mobile App Developer",
      "UI/UX Designer",
      "Software QA Engineer",
    ],
    image: pkl1,
  },
  {
    id: "tbsm",
    name: "Teknik Bisnis Sepeda Motor",
    short: "TBSM",
    profile:
      "Program keahlian yang fokus pada perawatan, perbaikan, dan manajemen bisnis bengkel sepeda motor modern.",
    curriculum: [
      "Dasar Teknik Otomotif",
      "Pemeliharaan Mesin Sepeda Motor",
      "Pemeliharaan Sasis & Kelistrikan",
      "Sepeda Motor Injeksi & Hybrid",
      "Manajemen Bengkel & Kewirausahaan",
    ],
    careers: [
      "Mekanik / Teknisi Sepeda Motor",
      "Service Advisor Dealer Resmi",
      "Wirausaha Bengkel",
      "Quality Control Industri Otomotif",
    ],
    image: pkl3,
  },
  {
    id: "phk",
    name: "Perhotelan & Kuliner",
    short: "PHK",
    profile:
      "Menyiapkan tenaga profesional di industri perhotelan, restoran, dan jasa boga dengan standar pelayanan internasional.",
    curriculum: [
      "Food & Beverage Service",
      "Housekeeping & Front Office",
      "Cookery & Pastry",
      "Bahasa Inggris Perhotelan",
      "Event & Hospitality Management",
    ],
    careers: [
      "Hotel Staff (FO, HK, F&B)",
      "Chef / Pastry Chef",
      "Wirausaha Kuliner",
      "Cruise Ship Crew",
    ],
    image: pkl4,
  },
  {
    id: "apl",
    name: "Agribisnis Perikanan",
    short: "APL",
    profile:
      "Mengembangkan kompetensi siswa dalam budidaya, pengolahan, dan pemasaran produk perikanan dengan pendekatan agribisnis modern.",
    curriculum: [
      "Dasar Budidaya Perikanan",
      "Teknologi Pembenihan Ikan",
      "Pengolahan Hasil Perikanan",
      "Manajemen Kualitas Air",
      "Pemasaran Digital Produk Perikanan",
    ],
    careers: [
      "Teknisi Budidaya Perikanan",
      "Quality Control Industri Pangan",
      "Wirausaha Agribisnis",
      "Penyuluh Perikanan",
    ],
    image: pkl5,
  },
];

export type ScheduleRow = { semester: string; subjects: Record<string, string> };

export const STUDY_PLAN: ScheduleRow[] = [
  {
    semester: "Semester 1",
    subjects: {
      tkj: "Dasar Program Keahlian, Pemrograman Dasar",
      rpl: "Dasar Program Keahlian, Logika Pemrograman",
      tbsm: "Dasar Teknik Otomotif, K3LH",
      phk: "Dasar Perhotelan, Sanitasi & Hygiene",
      apl: "Dasar Agribisnis, Biologi Perikanan",
    },
  },
  {
    semester: "Semester 2",
    subjects: {
      tkj: "Komputer & Jaringan Dasar, Sistem Operasi",
      rpl: "Pemrograman Berorientasi Objek, Basis Data",
      tbsm: "Gambar Teknik, Pekerjaan Dasar Otomotif",
      phk: "Tata Hidang Dasar, Bahasa Inggris Profesi",
      apl: "Dasar Budidaya Ikan, Kimia Terapan",
    },
  },
  {
    semester: "Semester 3",
    subjects: {
      tkj: "Administrasi Infrastruktur Jaringan",
      rpl: "Pemrograman Web Front-End",
      tbsm: "Pemeliharaan Mesin Sepeda Motor",
      phk: "Front Office Operation",
      apl: "Teknik Pembenihan Ikan Air Tawar",
    },
  },
  {
    semester: "Semester 4",
    subjects: {
      tkj: "Administrasi Sistem Jaringan, AIJ",
      rpl: "Pemrograman Web Back-End, API",
      tbsm: "Pemeliharaan Sasis Sepeda Motor",
      phk: "Housekeeping Operation, Cookery",
      apl: "Pembesaran Ikan, Manajemen Kualitas Air",
    },
  },
  {
    semester: "Semester 5",
    subjects: {
      tkj: "Teknologi Layanan Jaringan, Cloud",
      rpl: "Pemrograman Mobile, DevOps",
      tbsm: "Sepeda Motor Injeksi, Diagnosa",
      phk: "Pastry & Bakery, F&B Service",
      apl: "Pengolahan Hasil Perikanan",
    },
  },
  {
    semester: "Semester 6",
    subjects: {
      tkj: "PKL & Project Work, Sertifikasi",
      rpl: "PKL & Capstone Project, Sertifikasi",
      tbsm: "PKL Industri Otomotif, Uji Kompetensi",
      phk: "PKL Hotel/Restoran, Uji Kompetensi",
      apl: "PKL Agribisnis, Uji Kompetensi",
    },
  },
];

export const NEWS = [
  {
    slug: "juara-lks-provinsi-2025",
    title: "Siswa SMKN 1 Alas Raih Juara LKS Tingkat Provinsi NTB 2025",
    excerpt:
      "Tim siswa jurusan RPL dan TKJ berhasil mengharumkan nama sekolah dengan meraih medali emas di ajang LKS Provinsi NTB.",
    date: "12 Mei 2026",
    category: "Prestasi",
    image: news1,
  },
  {
    slug: "wisuda-angkatan-ke-22",
    title: "Wisuda Angkatan ke-22: 384 Lulusan Siap Terjun ke Dunia Industri",
    excerpt:
      "Sebanyak 384 siswa mengikuti prosesi wisuda dengan tingkat keterserapan kerja mencapai 87% di tahun pertama.",
    date: "28 April 2026",
    category: "Kegiatan",
    image: news2,
  },
  {
    slug: "peresmian-gedung-praktik-baru",
    title: "Peresmian Gedung Praktik Terpadu Senilai 8 Miliar",
    excerpt:
      "Gedung praktik baru tiga lantai resmi digunakan untuk mendukung pembelajaran berbasis industri 4.0.",
    date: "15 Maret 2026",
    category: "Fasilitas",
    image: news3,
  },
];

export const PKL_GALLERY = [
  { src: pkl1, caption: "PKL Mitra Industri Teknologi" },
  { src: pkl2, caption: "PKL Bidang Pengembangan Perangkat Lunak" },
  { src: pkl3, caption: "PKL Industri Otomotif" },
  { src: pkl4, caption: "PKL Perhotelan & Kuliner" },
  { src: pkl5, caption: "PKL Agribisnis Perikanan" },
];

export const INDUSTRY_PARTNERS = [
  "PT Telkom Indonesia",
  "Astra Honda Motor",
  "Hotel Santika Sumbawa",
  "PT Perikanan Nusantara",
  "Niagahoster",
  "Dinas Kominfo NTB",
  "PT Sumbawa Tech",
  "BPR Sumbawa",
];