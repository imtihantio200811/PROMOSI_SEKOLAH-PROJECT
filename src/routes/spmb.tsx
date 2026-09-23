import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, FileCheck, UserPlus, CheckCircle2, FileText, Calendar } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/spmb")({
  head: () => ({
    meta: [
      { title: "SPMB — Pendaftaran Siswa Baru SMKN 1 Tokyo" },
      { name: "description", content: "Informasi prosedur, persyaratan, dan dokumen pendaftaran Seleksi Penerimaan Murid Baru SMKN 1 Tokyo." },
    ],
  }),
  component: SpmbPage,
});

const STEPS = [
  { icon: UserPlus, title: "Pendaftaran Online", desc: "Buat akun di portal SPMB & isi formulir." },
  { icon: FileCheck, title: "Verifikasi Berkas", desc: "Unggah dokumen sesuai persyaratan." },
  { icon: ClipboardList, title: "Tes Seleksi", desc: "Mengikuti tes akademik & wawancara." },
  { icon: CheckCircle2, title: "Pengumuman", desc: "Hasil seleksi diumumkan via website." },
];

const REQUIREMENTS = [
  "Lulusan SMP/MTs atau sederajat tahun 2024/2025/2026",
  "Usia maksimal 21 tahun pada awal tahun ajaran",
  "Sehat jasmani & rohani (dibuktikan surat keterangan dokter)",
  "Bersedia mematuhi tata tertib sekolah",
  "Tidak buta warna untuk program keahlian tertentu (TKJ, RPL, TBSM)",
];

const DOCUMENTS = [
  "Ijazah & SKHUN SMP/MTs (asli + fotokopi legalisir)",
  "Akta kelahiran",
  "Kartu Keluarga (KK)",
  "KTP orang tua/wali",
  "Pas foto berwarna 3x4 (4 lembar)",
  "Surat keterangan sehat dari dokter",
  "Kartu Indonesia Pintar (jika ada)",
];

const SCHEDULE = [
  { phase: "Pendaftaran Online", date: "1 – 30 Juni 2026" },
  { phase: "Verifikasi Berkas", date: "1 – 5 Juli 2026" },
  { phase: "Tes Seleksi", date: "8 – 10 Juli 2026" },
  { phase: "Pengumuman", date: "15 Juli 2026" },
  { phase: "Daftar Ulang", date: "16 – 20 Juli 2026" },
];

function SpmbPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 lg:py-20">
          <h1 className="text-4xl font-bold md:text-5xl text-primary">SPMB 2026/2027</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Seleksi Penerimaan Murid Baru SMKN 1 Tokyo — Bergabunglah dengan sekolah unggulan di Sumbawa.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Prosedur Pendaftaran</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="absolute -top-3 right-4 rounded-full bg-accent-gold px-2.5 py-0.5 text-xs font-bold text-primary-dark">
                Langkah {i + 1}
              </div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 pb-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <ClipboardList className="h-5 w-5" />
            <h3 className="text-xl font-bold">Persyaratan</h3>
          </div>
          <ul className="space-y-2.5">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h3 className="text-xl font-bold">Dokumen yang Diperlukan</h3>
          </div>
          <ul className="space-y-2.5">
            {DOCUMENTS.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Calendar className="h-5 w-5" />
            <h3 className="text-xl font-bold">Jadwal SPMB</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/60 text-secondary-foreground">
                  <th className="px-4 py-3 text-left font-semibold">Tahapan</th>
                  <th className="px-4 py-3 text-left font-semibold">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((s, i) => (
                  <tr key={s.phase} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="px-4 py-3 font-medium text-foreground">{s.phase}</td>
                    <td className="px-4 py-3 text-muted-foreground">{s.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}