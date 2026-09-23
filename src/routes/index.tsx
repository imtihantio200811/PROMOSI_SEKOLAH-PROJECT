import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Calendar, GraduationCap, Building2, ArrowRight, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { DepartmentExplorer } from "@/components/department-explorer";
import { NEWS } from "@/lib/school-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beranda - SMKN 1 Walas" },
      { name: "description", content: "Website resmi SMKN 1 Walas, Sumbawa. Cetak lulusan kompeten dan siap kerja sesuai kebutuhan industri." },
    ],
  }),
  component: HomePage,
});

type Stat = {
  icon: LucideIcon;
  target: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: Users, target: 1240, suffix: "+", label: "Siswa Aktif" },
  { icon: Calendar, target: 1985, label: "Tahun Berdiri" },
  { icon: GraduationCap, target: 8500, suffix: "+", label: "Alumni" },
  { icon: Building2, target: 60, suffix: "+", label: "Mitra Industri" },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
}

function StatCard({ icon: Icon, target, suffix, label }: Stat) {
  const count = useCountUp(target);

  return (
    <div className="spark-fade-in flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-2xl font-bold text-primary">
          {count.toLocaleString("id-ID")}
          {suffix ?? ""}
        </div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-white">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          {/* Overlay Blur */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary ring-1 ring-primary/20">
              Sekolah Menengah Kejuruan Negeri
            </span>
            <h1 className="text-4xl font-bold leading-tight text-primary lg:text-6xl">
              Membangun Masa Depan, <span className="text-accent-gold">Mencetak Lulusan Profesional</span>
            </h1>
            <p className="text-lg text-foreground/80">
              SMKN 1 Walas, Sumbawa — Pusat pendidikan kejuruan unggulan yang
              memadukan kompetensi industri, karakter, dan inovasi.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href=" https://docs.google.com/forms/d/e/1FAIpQLScB9kNF3PdKYXlZda82MGWbTL63bV09wKrGDmDHAOWXICdNdQ/viewform?usp=publish-editor" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                Daftar Sekarang <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/program-keahlian" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                Jelajahi Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto -mt-12 px-4 relative z-20">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* VIDEO PROFIL */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Profil Sekolah</h2>
          <p className="mt-2 text-muted-foreground">Saksikan video profil SMKN 1 Walas, Sumbawa</p>
        </div>
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl border border-border bg-primary-dark shadow-[var(--shadow-elegant)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/T8RRZMYdi34"
            title="Video Profil SMKN 1 Walas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-foreground">
                <Trophy className="h-4 w-4" /> Prestasi Terkini
              </div>
              <h2 className="mt-1 text-3xl font-bold text-primary md:text-4xl">Sorotan Prestasi</h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-semibold text-primary hover:underline md:inline">
              Lihat semua →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {NEWS.map((n) => (
              <article key={n.slug} className="spark-fade-in overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <img src={n.image} alt={n.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="space-y-2 p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{n.category}</span>
                    <span>{n.date}</span>
                  </div>
                  <h3 className="line-clamp-2 font-semibold text-foreground">{n.title}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENT EXPLORER */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">5 Program Keahlian Unggulan</h2>
          <p className="mt-2 text-muted-foreground">
            Klik tombol jurusan untuk melihat profil, kurikulum, dan prospek karier.
          </p>
        </div>
        <DepartmentExplorer />
      </section>
    </>
  );
}