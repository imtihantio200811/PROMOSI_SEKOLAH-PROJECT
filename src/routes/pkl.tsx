import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Award, Users } from "lucide-react";
import { PKL_GALLERY, INDUSTRY_PARTNERS } from "@/lib/school-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/pkl")({
  head: () => ({
    meta: [
      { title: "Program PKL — SMKN 1 Tokyo" },
      { name: "description", content: "Praktik Kerja Lapangan SMKN 1 Tokyo bersama mitra industri strategis di seluruh Indonesia." },
    ],
  }),
  component: PklPage,
});

const HIGHLIGHTS = [
  { icon: Briefcase, value: "60+", label: "Mitra Industri" },
  { icon: Users, value: "1.500+", label: "Siswa PKL" },
  { icon: Award, value: "87%", label: "Keterserapan Kerja" },
];

function PklPage() {
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
          <h1 className="text-4xl font-bold md:text-5xl text-primary">Praktik Kerja Lapangan (PKL)</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Menghubungkan siswa langsung dengan dunia industri untuk pengalaman kerja nyata.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="mb-3 text-2xl font-bold text-primary md:text-3xl">Tentang Program PKL</h2>
        <p className="max-w-3xl text-foreground/85 card p-6 shadow-[var(--shadow-card)] rounded-2xl border border-border">
          Praktik Kerja Lapangan (PKL) adalah komponen wajib dalam kurikulum SMKN 1 Tokyo
          yang dilaksanakan selama 6 bulan di kelas XII. Program ini menjembatani teori
          pembelajaran di sekolah dengan praktik nyata di dunia usaha dan industri (DUDI).
          Siswa ditempatkan di perusahaan mitra sesuai program keahlian, di bawah
          bimbingan pembimbing sekolah dan instruktur industri.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Galeri Dokumentasi PKL</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PKL_GALLERY.map((g) => (
            <figure key={g.caption} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 text-sm font-medium text-foreground">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary md:text-3xl">Mitra Industri Strategis</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRY_PARTNERS.map((p) => (
              <span key={p} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}