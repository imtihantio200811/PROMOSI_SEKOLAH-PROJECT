import { Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/SMK.png";
import { SCHOOL } from "@/lib/school-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-dark text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 rounded-full bg-white/90 p-1" />
            <div>
              <div className="text-lg font-bold">{SCHOOL.name}</div>
              <div className="text-xs text-primary-foreground/70">{SCHOOL.longName}</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75">
            Mewujudkan lulusan SMK yang kompeten, berkarakter, dan siap kerja
            menghadapi tantangan industri.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            Kontak
          </h4>
          <a href={`tel:${SCHOOL.phone}`} className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-white">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {SCHOOL.phone}
          </a>
          <a href={`mailto:${SCHOOL.email}`} className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-white">
            <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {SCHOOL.email}
          </a>
          <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SCHOOL.address}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            Tautan Cepat
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="/program-keahlian" className="hover:text-white">Program Keahlian</a></li>
            <li><a href="/spmb" className="hover:text-white">Pendaftaran SPMB</a></li>
            <li><a href="/pkl" className="hover:text-white">Program PKL</a></li>
            <li><a href="/informasi" className="hover:text-white">Biaya & Kalender</a></li>
            <li><a href="/blog" className="hover:text-white">Berita Terbaru</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            Media Sosial
          </h4>
          <div className="flex gap-3">
            <a
              href={SCHOOL.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-gold hover:text-primary-dark"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SCHOOL.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-gold hover:text-primary-dark"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={SCHOOL.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-gold hover:text-primary-dark"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/60">
            Ikuti kami untuk update kegiatan, prestasi, dan informasi terbaru.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} {SCHOOL.longName}. Hak Cipta Dilindungi.</p>
          <p>Dikembangkan oleh <span className="font-semibold text-white">{SCHOOL.developer}</span></p>
        </div>
      </div>
    </footer>
  );
}