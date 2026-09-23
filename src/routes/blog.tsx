import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { NEWS } from "@/lib/school-data";
import heroImg from "@/assets/hero.jpg";


export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Berita — SMKN 1 Tokyo" },
      { name: "description", content: "Berita terbaru, prestasi, dan kegiatan SMKN 1 Tokyo, Sumbawa." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = NEWS;
  return (
    <>
        <section className="relative w-full overflow-hidden">
        {/* Layer Background (Absolute) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        {/* Layer Konten (Relative agar tidak tertutup & memberi space) */}
        <div className="container relative z-10 mx-auto px-4 py-16 lg:py-20">
          <h1 className="text-4xl font-bold md:text-5xl text-primary">Blog & Berita Sekolah</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Berita terkini, prestasi siswa, dan kegiatan SMKN 1 Tokyo, Sumbawa.
          </p>
        </div>
      </section>

      {/* Konten bawah tetap sama */}
      <section className="container mx-auto px-4 py-16">
        {/* ... */}
      </section>

      <section className="container mx-auto px-4 py-16">
        <article className="grid gap-6 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-2">
          <img src={featured.image} alt={featured.title} loading="lazy" className="h-full max-h-[420px] w-full object-cover" />
          <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{featured.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{featured.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{featured.title}</h2>
            <p className="text-muted-foreground">{featured.excerpt}</p>
            <a
              href={`/blog/${featured.slug}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Selengkapnya <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-primary">Berita Lainnya</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((n) => (
            <article key={n.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
              <img src={n.image} alt={n.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="space-y-3 p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{n.category}</span>
                  <span>{n.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.excerpt}</p>
                <a
                  href={`/blog/${n.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}