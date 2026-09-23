import { createFileRoute } from "@tanstack/react-router";
import { DepartmentExplorer } from "@/components/department-explorer";
import { DEPARTMENTS, STUDY_PLAN } from "@/lib/school-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/program-keahlian")({
  head: () => ({
    meta: [
      { title: "Program Keahlian — SMKN 1 Tokyo" },
      { name: "description", content: "Lima program keahlian unggulan SMKN 1 Tokyo, Sumbawa dengan rencana studi 3 tahun (Semester 1–6)." },
    ],
  }),
  component: ProgramPage,
});

function ProgramPage() {
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
          <h1 className="text-4xl font-bold md:text-5xl text-primary">Program Keahlian</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Rencana studi 3 tahun (6 semester) untuk seluruh program keahlian di SMKN 1 Tokyo, Sumbawa.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold text-primary">Rencana Studi 3 Tahun</h2>
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="sticky left-0 z-10 bg-primary px-4 py-3 text-left font-semibold">Semester</th>
                  {DEPARTMENTS.map((d) => (
                    <th key={d.id} className="px-4 py-3 text-left font-semibold">{d.short}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STUDY_PLAN.map((row, idx) => (
                  <tr key={row.semester} className={idx % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                    <td className="sticky left-0 bg-inherit px-4 py-3 font-semibold text-primary">{row.semester}</td>
                    {DEPARTMENTS.map((d) => (
                      <td key={d.id} className="px-4 py-3 align-top text-foreground/85">
                        {row.subjects[d.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-primary">Detail Program Keahlian</h2>
        <DepartmentExplorer />
      </section>
    </>
  );
}