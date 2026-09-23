import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";
import heroImg from "@/assets/hero.jpg";


export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — SMKN 1 Tokyo" },
      { name: "description", content: "Hubungi SMKN 1 Tokyo, Sumbawa — alamat, jam operasional, dan kanal komunikasi resmi." },
    ],
  }),
  component: KontakPage,
});

function KontakPage() {
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
          <h1 className="text-4xl font-bold md:text-5xl text-primary">Hubungi Kami</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Kami siap membantu menjawab pertanyaan Anda seputar SMKN 1 Tokyo, Sumbawa.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-16 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Alamat</h3>
          <p className="mt-2 text-sm text-muted-foreground">{SCHOOL.address}</p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Jam Operasional</h3>
          <p className="mt-2 text-sm text-muted-foreground">{SCHOOL.hours}</p>
          <p className="text-sm text-muted-foreground">Sabtu – Minggu: Tutup</p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Kanal Kontak</h3>
          <a href={`tel:${SCHOOL.phone}`} className="mt-2 flex items-center gap-2 text-sm text-foreground/85 hover:text-primary">
            <Phone className="h-4 w-4" /> {SCHOOL.phone}
          </a>
          <a href={`mailto:${SCHOOL.email}`} className="flex items-center gap-2 text-sm text-foreground/85 hover:text-primary">
            <Mail className="h-4 w-4" /> {SCHOOL.email}
          </a>
          <div className="mt-3 flex gap-2">
            <a href={SCHOOL.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SCHOOL.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={SCHOOL.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </article>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Lokasi SMKN 1 Tokyo"
            src="https://www.google.com/maps?q=Alas+Sumbawa&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}