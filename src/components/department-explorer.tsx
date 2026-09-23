import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { DEPARTMENTS } from "@/lib/school-data";

export function DepartmentExplorer() {
  const [active, setActive] = useState(DEPARTMENTS[0].id);
  const dept = DEPARTMENTS.find((d) => d.id === active)!;

  return (
    <div className="spark-fade-in space-y-6">
      <div className="flex flex-wrap gap-2">
        {DEPARTMENTS.map((d) => (
          <button
            key={d.id}
            onClick={() => setActive(d.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === d.id
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                : "border border-border bg-background text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {d.short}
          </button>
        ))}
      </div>

      <div className="spark-fade-in grid gap-6 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] md:grid-cols-2">
        <div className="relative min-h-[280px] md:min-h-full">
          <img
            src={dept.image}
            alt={dept.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
            <div className="text-xs uppercase tracking-wider text-accent-gold">Program Keahlian</div>
            <h3 className="text-2xl font-bold">{dept.name}</h3>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between p-6 md:p-8">
          <div className="space-y-5">
            <section>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <GraduationCap className="h-4 w-4" /> Profil Jurusan
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{dept.profile}</p>
            </section>

            <section>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <BookOpen className="h-4 w-4" /> Kurikulum Pembelajaran
              </div>
              <ul className="grid gap-1.5 text-sm text-foreground/85">
                {dept.curriculum.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                <Briefcase className="h-4 w-4" /> Prospek Karier
              </div>
              <div className="flex flex-wrap gap-2">
                {dept.careers.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {dept.id === "tkj" ? (
            <div className="flex justify-end">
              <Link
                to="/program-keahlian-tkj"
                className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Selengkapnya
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}