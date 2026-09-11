import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import clinic from "@/assets/humaniza-consultorio.jpg";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/components/site-chrome";
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
    ["Prevenção & limpeza", "Cuidado minucioso para manter sua saúde bucal em dia e evitar problemas antes que apareçam."],
    ["Clareamento", "Um sorriso mais luminoso, com planejamento individual e respeito à sensibilidade dos seus dentes."],
    ["Bruxismo", "Avaliação cuidadosa para aliviar desconfortos e proteger seu sorriso de forma contínua."],
    ["Estética", "Soluções sutis e personalizadas, preservando aquilo que faz o seu sorriso ser seu."],
  ];
  return <>
    <section className="relative min-h-[calc(100svh-4.5rem)] bg-primary text-primary-foreground md:min-h-[760px]">
      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:min-h-[760px] md:px-8 md:pb-24">
        <div className="max-w-3xl reveal-up"><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/80">Odontologia gentil em Fortaleza</p><h1 className="text-5xl leading-[0.92] md:text-7xl lg:text-8xl">Seu sorriso cuidado com leveza, gentileza e tempo.</h1><p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/85 md:text-lg">Uma odontologia preventiva e acolhedora, para você se sentir seguro em cada etapa — da limpeza ao cuidado contínuo.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="xl" variant="warm"><a href={bookingUrl} target="_blank" rel="noreferrer">Agendar minha consulta <ArrowRight /></a></Button><Button asChild size="xl" variant="outline" className="border-primary-foreground/40 bg-primary/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#conheca">Conhecer a Humaniza <ArrowDown /></a></Button></div></div>
      </div>
    </section>
    <section id="conheca" className="bg-background"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8 md:py-28"><SectionTitle eyebrow="Cuidado que acolhe" title="Aqui, você não precisa esconder o medo." text="A gente escuta, explica e respeita o seu ritmo. Porque uma boa experiência no dentista começa antes do procedimento: começa quando você percebe que está em um lugar seguro."/><div className="grid gap-4 sm:grid-cols-3">{[[HeartHandshake,"Escuta sem julgamentos"],[ShieldCheck,"Prevenção em primeiro lugar"],[Sparkles,"Cuidado nos detalhes"]].map(([Icon,label]) => { const I=Icon as typeof HeartHandshake; return <div key={String(label)} className="border-t border-border pt-5"><I className="size-6 text-sage"/><p className="mt-8 font-display text-2xl leading-tight text-primary">{String(label)}</p></div>})}</div></div></section>
    <section className="bg-cream"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><SectionTitle eyebrow="Nossos cuidados" title="Saúde para hoje. Tranquilidade para o futuro."/><div className="mt-12 grid border-t border-border md:grid-cols-2">{services.map(([title,text],i)=><article key={title} className="border-b border-border py-8 md:p-10 md:even:border-l"><span className="text-xs text-earth">0{i+1}</span><h3 className="mt-4 text-3xl text-primary">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div><TextLink to="/servicos">Conhecer todos os serviços</TextLink></div></section>
    <section className="grid bg-primary md:grid-cols-2"><div className="min-h-[380px] md:min-h-[620px]"><img src={clinic} alt="Ambiente conceitual de consultório odontológico sofisticado e acolhedor" width={1600} height={1104} loading="lazy" className="size-full object-cover" /></div><div className="flex items-center px-5 py-16 text-primary-foreground md:px-16"><div className="max-w-lg"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Um espaço para respirar</p><h2 className="mt-4 text-4xl leading-tight md:text-6xl">Conforto também faz parte do tratamento.</h2><p className="mt-6 leading-8 text-primary-foreground/75">Cada detalhe é pensado para desacelerar: um ambiente sereno, uma conversa sem pressa e um atendimento que respeita você por inteiro.</p><TextLink to="/sobre">Conheça nossa forma de cuidar</TextLink></div></div></section>
    <section className="bg-background"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionTitle eyebrow="Resultados reais" title="Mudanças que respeitam a sua história." text="Cada sorriso pede um olhar único. Compartilhamos somente casos autorizados e sempre explicamos o que pode fazer sentido para você."/><TextLink to="/resultados">Ver como trabalhamos</TextLink></div><div className="mt-12 border-y border-border py-10 text-center"><p className="font-display text-3xl italic text-primary md:text-4xl">“O resultado mais bonito é voltar a sorrir com segurança.”</p></div></div></section>
    <FinalCta />
  </>;
}
