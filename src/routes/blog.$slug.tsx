import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import { NEWS } from "@/lib/school-data";

type Post = (typeof NEWS)[number];

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = NEWS.find((n) => n.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — SMKN 1 Alas` : "Artikel — SMKN 1 Alas" },
        { name: "description", content: post?.excerpt ?? "Artikel SMKN 1 Alas" },
        { property: "og:image", content: post?.image },
      ],
    };
  },
  loader: ({ params }) => {
    const post = NEWS.find((n) => n.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: ArticlePage,
});

function ArticlePage() {
  const post1 = Route.useLoaderData() as Post | null;

  if (!post1) {
    return (
      <article className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 pt-12">
          <h2 className="text-2xl font-bold">Artikel tidak ditemukan</h2>
          <p className="mt-2 text-muted-foreground">Maaf, artikel yang Anda cari tidak tersedia.</p>
        </div>
      </article>
    );
  }

const related = NEWS.filter((n) => n.slug !== post1.slug).slice(0, 2);

  return (
    <article className="bg-background">
      <header className="container mx-auto max-w-4xl px-4 pt-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post1.category}</span>
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post1.date}</span>
          <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />Redaksi SMKN 1 Alas</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{post1.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post1.excerpt}</p>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <img src={post1.image} alt={post1.title} className="aspect-[16/9] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-16">
        <div className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            {post1.title} menjadi momentum penting bagi sivitas akademika SMKN 1 Alas
            dalam meneguhkan komitmen mencetak lulusan yang siap menghadapi tantangan
            dunia industri. Kegiatan ini terselenggara berkat sinergi seluruh civitas
            sekolah, orang tua, dan mitra industri.
          </p>
          <p>
            Kepala SMKN 1 Alas dalam sambutannya menyampaikan apresiasi yang tinggi
            kepada seluruh siswa, guru, dan tenaga kependidikan atas dedikasi dan kerja
            kerasnya. "Capaian ini adalah hasil kolaborasi dari banyak pihak, dan kami
            terus berkomitmen meningkatkan kualitas pendidikan kejuruan," ujarnya.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-foreground">Dampak bagi Sekolah</h2>
          <p>
            Kegiatan ini diharapkan dapat memberikan dampak positif yang berkelanjutan,
            khususnya dalam meningkatkan motivasi belajar siswa, memperkuat hubungan
            sekolah dengan dunia industri, serta memperluas peluang kerja bagi alumni.
          </p>
          <blockquote className="border-l-4 border-accent-gold bg-secondary/40 p-4 italic text-foreground/90">
            "Pendidikan kejuruan bukan sekadar menyiapkan tenaga kerja, melainkan
            membentuk profesional yang berkarakter dan adaptif terhadap perubahan."
          </blockquote>
          <h2 className="pt-4 text-2xl font-bold text-foreground">Langkah ke Depan</h2>
          <p>
            SMKN 1 Alas akan terus mengembangkan program-program unggulan dan
            memperkuat kemitraan strategis dengan industri demi mewujudkan visi sebagai
            sekolah kejuruan rujukan di kawasan Sumbawa.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            <Share2 className="h-4 w-4" /> Bagikan
          </button>
        </div>
      </div>

      <section className="bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-bold text-primary">Artikel Terkait</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((n) => (
              <Link
                key={n.slug}
                to="/blog/$slug"
                params={{ slug: n.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <img src={n.image} alt={n.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                <div className="space-y-2 p-5">
                  <div className="text-xs text-muted-foreground">{n.date}</div>
                  <h3 className="font-bold text-foreground group-hover:text-primary">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}