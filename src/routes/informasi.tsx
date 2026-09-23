import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Wallet, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/informasi")({
  head: () => ({
    meta: [
      { title: "Informasi — Biaya & Kalender Akademik SMKN 1 Alas" },
      { name: "description", content: "Informasi rincian biaya sekolah dan kalender akademik interaktif SMKN 1 Alas." },
    ],
  }),
  component: InformasiPage,
});

const FEES = [
  { item: "Uang Pendaftaran", x: "Rp 150.000", xi: "—", xii: "—" },
  { item: "Daftar Ulang Tahunan", x: "Rp 500.000", xi: "Rp 450.000", xii: "Rp 400.000" },
  { item: "SPP per Bulan", x: "Rp 200.000", xi: "Rp 200.000", xii: "Rp 200.000" },
  { item: "Praktik Kejuruan", x: "Rp 350.000", xi: "Rp 400.000", xii: "Rp 450.000" },
  { item: "Seragam & Atribut", x: "Rp 850.000", xi: "—", xii: "—" },
  { item: "Buku & Modul", x: "Rp 600.000", xi: "Rp 500.000", xii: "Rp 400.000" },
  { item: "Kegiatan PKL", x: "—", xi: "—", xii: "Rp 750.000" },
];

type EventType = "kelas" | "libur" | "ujian" | "kegiatan";
const EVENT_STYLES: Record<EventType, { dot: string; bg: string; label: string }> = {
  kelas: { dot: "bg-primary", bg: "bg-primary/15 text-primary", label: "Kelas Reguler" },
  libur: { dot: "bg-destructive", bg: "bg-destructive/15 text-destructive", label: "Libur" },
  ujian: { dot: "bg-warning", bg: "bg-warning/20 text-foreground", label: "Ujian" },
  kegiatan: { dot: "bg-success", bg: "bg-success/15 text-success", label: "Kegiatan Sekolah" },
};

// Events keyed YYYY-M-D (month is 0-based to match Date)
const EVENTS: Record<string, { type: EventType; title: string }> = {
  "2026-4-17": { type: "libur", title: "Hari Buruh" },
  "2026-4-25": { type: "kegiatan", title: "Pentas Seni Akhir Semester" },
  "2026-5-10": { type: "ujian", title: "PAT Hari 1" },
  "2026-5-11": { type: "ujian", title: "PAT Hari 2" },
  "2026-5-12": { type: "ujian", title: "PAT Hari 3" },
  "2026-5-15": { type: "ujian", title: "PAT Hari 4" },
  "2026-5-20": { type: "kegiatan", title: "Class Meeting" },
  "2026-5-25": { type: "libur", title: "Hari Raya Waisak" },
  "2026-5-28": { type: "kegiatan", title: "Pembagian Rapor" },
};

const MONTH_NAMES = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];
const DAY_NAMES = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

function InformasiPage() {
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
          <h1 className="text-4xl font-bold md:text-5xl text-primary">Informasi Sekolah</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Biaya pendidikan dan kalender akademik tahun ajaran 2026/2027.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-6 flex items-center gap-2 text-primary">
          <Wallet className="h-5 w-5" />
          <h2 className="text-2xl font-bold md:text-3xl">Rincian Biaya Sekolah</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left font-semibold">Komponen Biaya</th>
                  <th className="px-4 py-3 text-left font-semibold">Kelas X</th>
                  <th className="px-4 py-3 text-left font-semibold">Kelas XI</th>
                  <th className="px-4 py-3 text-left font-semibold">Kelas XII</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.item}</td>
                    <td className="px-4 py-3 text-foreground/85">{row.x}</td>
                    <td className="px-4 py-3 text-foreground/85">{row.xi}</td>
                    <td className="px-4 py-3 text-foreground/85">{row.xii}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          *Biaya dapat berubah sewaktu-waktu sesuai kebijakan sekolah. Tersedia program beasiswa & KIP.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mb-6 flex items-center gap-2 text-primary">
          <CalendarDays className="h-5 w-5" />
          <h2 className="text-2xl font-bold md:text-3xl">Kalender Akademik</h2>
        </div>
        <AcademicCalendar />
      </section>
    </>
  );
}

function AcademicCalendar() {
  const [cursor, setCursor] = useState(new Date(2026, 4, 1)); // Mei 2026

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const goto = (delta: number) => setCursor(new Date(year, month + delta, 1));

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => goto(-1)}
          className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Bulan sebelumnya"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-lg font-bold text-primary">
          {MONTH_NAMES[month]} {year}
        </h3>
        <button
          onClick={() => goto(1)}
          className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Bulan berikutnya"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground">
        {DAY_NAMES.map((d) => (
          <div key={d} className="py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} className="aspect-square" />;
          const key = `${year}-${month}-${d}`;
          const ev = EVENTS[key];
          const isSunday = i % 7 === 0;
          const base = ev ? EVENT_STYLES[ev.type].bg : isSunday ? "bg-destructive/10 text-destructive" : "bg-secondary/30 text-foreground";
          return (
            <div
              key={i}
              title={ev?.title}
              className={`group relative aspect-square rounded-md p-1.5 text-left text-xs transition-all hover:scale-105 hover:shadow-md ${base}`}
            >
              <span className="font-semibold">{d}</span>
              {ev && (
                <div className={`absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full ${EVENT_STYLES[ev.type].dot}`} />
              )}
              {ev && (
                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-primary-dark px-2 py-1 text-[10px] text-primary-foreground group-hover:block">
                  {ev.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Keterangan Warna</h4>
        <div className="flex flex-wrap gap-3 text-xs">
          {(Object.keys(EVENT_STYLES) as EventType[]).map((k) => (
            <div key={k} className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
              <span className={`h-3 w-3 rounded-full ${EVENT_STYLES[k].dot}`} />
              <span className="text-foreground/85">{EVENT_STYLES[k].label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}