import { createFileRoute } from "@tanstack/react-router";
import { DEPARTMENTS } from "@/lib/school-data";

const tkj = DEPARTMENTS.find((d) => d.id === "tkj")!;

export const Route = createFileRoute("/program-keahlian-tkj")({
  head: () => ({
    meta: [
      { title: "TKJ — Program Keahlian SMKN 1 Tokyo" },
      { name: "description", content: "Detail jurusan Teknik Komputer & Jaringan SMKN 1 Tokyo, dengan gambar dan deskripsi program." },
    ],
  }),
  component: TkjDetailPage,
});

function TkjDetailPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Teknik Komputer & Jaringan</h1>
          <p className="mt-3 max-w-3xl text-foreground/80">
            Jurusan TKJ mempersiapkan siswa untuk menjadi tenaga profesional di bidang jaringan komputer, infrastruktur TI, dan layanan digital.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl bg-background shadow-sm">
              <img
                src={tkj.image}
                alt={tkj.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Gambaran Jurusan</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                {tkj.profile}
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-border bg-secondary/10 p-6">
            <div>
              <h3 className="text-lg font-semibold text-primary">TKJ (Teknik Komputer & Jaringan)</h3>
              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                TKJ (Teknik Komputer & Jaringan) adalah jurusan yang mempersiapkan siswa untuk menjadi tenaga profesional di bidang jaringan komputer, infrastruktur TI, dan layanan digital.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Kegiatan Utama TKJ</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                <li>Perancangan dan instalasi jaringan komputer</li>
                <li>Administrasi sistem server dan cloud</li>
                <li>Keamanan jaringan dan pemeliharaan perangkat</li>
                <li>Pengembangan solusi teknologi informasi untuk industri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
