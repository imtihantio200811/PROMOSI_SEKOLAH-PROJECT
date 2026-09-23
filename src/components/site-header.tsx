import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/SMK.png";
import { SCHOOL } from "@/lib/school-data";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/program-keahlian", label: "Program Keahlian" },
  { to: "/spmb", label: "SPMB" },
  { to: "/pkl", label: "PKL" },
  { to: "/informasi", label: "Informasi" },
  { to: "/blog", label: "Blog" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-sky-100/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo SMKN 1 Alas" className="h-10 w-10 lg:h-12 lg:w-12" />
          <div className="leading-tight">
            <div className="text-sm font-bold text-primary lg:text-base">{SCHOOL.name}</div>
            <div className="text-[10px] text-muted-foreground lg:text-xs">Sumbawa, NTB</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/spmb"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Daftar SPMB
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-primary/10 text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}