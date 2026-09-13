import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
const clinic = "/humaniza-consultorio.jpg";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/components/site-chrome";
import { FramedImage } from "@/components/framed-image";
import { Eyebrow, FinalCta, SectionTitle, TextLink } from "@/components/page-elements";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Humaniza Clínica | Dentista em Fortaleza" },
    { name: "description", content: "Odontologia leve, gentil e preventiva na Aldeota. Limpeza dental, clareamento, bruxismo e estética em Fortaleza." },
    { property: "og:title", content: "Humaniza Clínica | Odontologia gentil" },
    { property: "og:description", content: "Um cuidado acolhedor para você se sentir seguro em cada etapa." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const services = [
    ["Prevenção & limpeza", "Cuidado minucioso para manter sua saúde bucal em dia e evitar problemas antes que apareçam.", ["Avaliação periódica", "Higiene guiada", "Plano de cuidado contínuo"]],
    ["Clareamento", "Um sorriso mais luminoso, com planejamento individual e respeito à sensibilidade dos seus dentes.", ["Análise do sorriso", "Expectativas alinhadas", "Acompanhamento profissional"]],
    ["Bruxismo", "Avaliação cuidadosa para aliviar desconfortos e proteger seu sorriso de forma contínua.", ["Avaliação de sinais", "Proteção do sorriso", "Cuidado contínuo"]],
    ["Estética", "Soluções sutis e personalizadas, preservando aquilo que faz o seu sorriso ser seu.", ["Planejamento individual", "Resultados naturais", "Abordagem conservadora"]],
  ];
  return <>
    <section className="relative bg-cream text-primary">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-12 md:px-8 md:py-20">
        <div className="max-w-3xl reveal-up"><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Odontologia gentil em Fortaleza</p><h1 className="text-4xl leading-[0.95] md:text-6xl lg:text-7xl">Seu sorriso cuidado com leveza, gentileza e tempo.</h1><p className="mt-5 max-w-xl text-base leading-7 text-primary/80 md:text-lg">Uma odontologia humanizada que vai além dos procedimentos: começa pela escuta, pelo entendimento da sua história e pelo planejamento de um cuidado que faça sentido para a sua realidade.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><a href={bookingUrl} target="_blank" rel="noreferrer">Agendar minha consulta <ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="border-primary/30 bg-cream text-primary hover:bg-primary/10 hover:text-primary"><a href="#conheca">Conhecer a Humaniza <ArrowDown /></a></Button></div></div>
      </div>
    </section>
    <section id="conheca" className="bg-background"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8 md:py-28"><SectionTitle eyebrow="Cuidado que acolhe" title="Aqui, você não precisa esconder o medo." text="A gente escuta, explica e respeita o seu ritmo. Porque uma boa experiência no dentista começa antes do procedimento: começa quando você percebe que está em um lugar seguro."/><div className="grid gap-4 sm:grid-cols-3">{[[HeartHandshake,"Escuta sem julgamentos"],[ShieldCheck,"Prevenção em primeiro lugar"],[Sparkles,"Cuidado nos detalhes"]].map(([Icon,label]) => { const I=Icon as typeof HeartHandshake; return <div key={String(label)} className="border-t border-border pt-5"><I className="size-6 text-sage"/><p className="mt-8 font-display text-2xl leading-tight text-primary">{String(label)}</p></div>})}</div></div></section>
    <section className="bg-cream"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><SectionTitle eyebrow="Nossos cuidados" title="Saúde para hoje. Tranquilidade para o futuro."/><div className="mt-12 grid gap-6 md:grid-cols-2">{services.map(([title,text,points],i)=><article key={title as string} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-background p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl md:p-8"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage-soft/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" /><div className="relative"><div className="flex items-start justify-between gap-4"><span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft font-display text-xl text-earth">0{i+1}</span><div className="h-2 w-2 rounded-full bg-sage/60" /></div><h3 className="mt-6 text-2xl leading-tight text-primary md:text-[1.65rem]">{title as string}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text as string}</p><ul className="mt-6 grid gap-2.5">{(points as string[]).map((p)=><li className="flex items-center gap-2.5 text-xs font-semibold text-ink-soft" key={p}><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15"><Check className="size-3 text-sage" /></span>{p}</li>)}</ul></div></article>)}</div><div className="mt-10"><TextLink to="/servicos">Conhecer todos os serviços</TextLink></div></div></section>
    <section className="grid bg-primary lg:grid-cols-2"><div className="flex items-center p-5 md:p-8"><FramedImage src={clinic} alt="Ambiente conceitual de consultório odontológico sofisticado e acolhedor" width={1600} height={1104} loading="lazy" className="w-full" imgClassName="aspect-[100/69] w-full" accent badge={{ label: "Nosso espaço", value: "Conforto em cada detalhe" }} /></div><div className="flex items-center px-5 py-16 text-primary-foreground md:px-16"><div className="max-w-lg"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Um espaço para respirar</p><h2 className="mt-4 text-4xl leading-tight md:text-6xl">Conforto também faz parte do tratamento.</h2><p className="mt-6 leading-8 text-primary-foreground/75">Cada detalhe é pensado para desacelerar: um ambiente sereno, uma conversa sem pressa e um atendimento que respeita você por inteiro.</p><TextLink to="/sobre">Conheça nossa forma de cuidar</TextLink></div></div></section>
    <section className="bg-background"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionTitle eyebrow="Resultados reais" title="Mudanças que respeitam a sua história." text="Cada sorriso pede um olhar único. Compartilhamos somente casos autorizados e sempre explicamos o que pode fazer sentido para você."/><TextLink to="/resultados">Ver como trabalhamos</TextLink></div><div className="mt-12 border-y border-border py-10 text-center"><p className="font-display text-3xl italic text-primary md:text-4xl">“O resultado mais bonito é voltar a sorrir com segurança.”</p></div></div></section>
    <FinalCta />
  </>;
}
