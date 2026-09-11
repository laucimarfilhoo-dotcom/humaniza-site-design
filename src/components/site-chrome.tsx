import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BrandMark } from "./brand-mark";
import { Button } from "./ui/button";

const nav = [
  ["Sobre", "/sobre"], ["Serviços", "/servicos"], ["Resultados", "/resultados"],
  ["Home Care", "/home-care"], ["Contato", "/contato"],
] as const;
export const bookingUrl = "https://linktr.ee/humanizaodontofortaleza";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen overflow-x-hidden bg-background">
    <header className="sticky top-0 z-50 border-b border-primary-foreground/15 bg-primary/95 text-primary-foreground backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="Humaniza Clínica — início"><BrandMark /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map(([label, to]) => <Link key={to} to={to} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground" activeProps={{ className: "text-primary-foreground font-semibold" }}>{label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Button asChild size="lg" variant="warm"><a href={bookingUrl} target="_blank" rel="noreferrer">Agendar consulta</a></Button></div>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-primary-foreground/15 bg-primary px-5 py-5 lg:hidden" aria-label="Menu móvel">
        <div className="flex flex-col gap-1">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-primary-foreground/15 py-3 text-sm font-medium text-primary-foreground/85">{label}</Link>)}</div>
      </nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-18">
        <div><BrandMark /><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/75">Odontologia leve, gentil e preventiva. Um cuidado que começa pela escuta.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.18em]">Encontre-nos</p><p className="mt-4 flex gap-2 text-sm leading-6 text-primary-foreground/75"><MapPin className="mt-0.5 size-4 shrink-0" /> Humberto Santana Business<br/>Aldeota, Fortaleza — CE<br/>CEP 60135-270</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.18em]">Acompanhe</p><a className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground" href="https://instagram.com/humanizaodontofortaleza" target="_blank" rel="noreferrer"><Instagram className="size-4" /> Instagram</a></div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/55">© 2026 Humaniza Clínica. Informações gerais não substituem avaliação profissional.</div>
    </footer>
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-3 md:hidden"><Button asChild size="xl" className="w-full"><a href={bookingUrl} target="_blank" rel="noreferrer">Agendar minha consulta</a></Button></div>
  </div>;
}