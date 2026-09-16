import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Clock3, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
const clinic = "/humaniza-consultorio.jpg";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/components/site-chrome";
import { FramedImage } from "@/components/framed-image";
import { Eyebrow, FinalCta, SectionTitle, TextLink } from "@/components/page-elements";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentista na Aldeota, Fortaleza | Humaniza Clínica" },
      {
        name: "description",
        content:
          "Clínica odontológica na Aldeota, Fortaleza. Odontologia humanizada: limpeza, clareamento, bruxismo, implantes e ortodontia. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Dentista na Aldeota, Fortaleza | Humaniza Clínica" },
      {
        property: "og:description",
        content:
          "Odontologia humanizada e preventiva em Fortaleza. Um cuidado gentil, sem pressa, para você se sentir seguro em cada etapa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://humanizaclinica.vercel.app/humaniza-social.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://humanizaclinica.vercel.app/humaniza-social.jpg" },
      { name: "twitter:title", content: "Dentista na Aldeota, Fortaleza | Humaniza Clínica" },
      {
        name: "twitter:description",
        content: "Clínica de odontologia humanizada na Aldeota, em Fortaleza. Agende sua consulta.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://humanizaclinica.vercel.app/" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const services = [
    ["Prevenção e limpeza dental", "Limpeza odontológica e acompanhamento preventivo em Fortaleza, para manter sua saúde bucal em dia e evitar problemas antes que apareçam.", ["Avaliação periódica", "Higiene guiada", "Plano de cuidado contínuo"]],
    ["Clareamento dental", "Clareamento dental em Fortaleza com planejamento individual e respeito à sensibilidade dos seus dentes.", ["Análise do sorriso", "Expectativas alinhadas", "Acompanhamento profissional"]],
    ["Bruxismo e disfunção da ATM", "Avaliação cuidadosa de bruxismo e dores na articulação da mandíbula, para aliviar desconfortos e proteger seu sorriso.", ["Avaliação de sinais", "Proteção do sorriso", "Cuidado contínuo"]],
    ["Estética, facetas e implantes", "Facetas em resina, próteses e implantes dentários na Aldeota, com soluções sutis que preservam a naturalidade do seu sorriso.", ["Planejamento individual", "Resultados naturais", "Abordagem conservadora"]],
  ];
  return <>
    <section className="relative bg-cream text-primary">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-12 md:px-8 md:py-20">
        <div className="max-w-3xl reveal-up"><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Clínica odontológica na Aldeota, Fortaleza — CE</p><h1 className="text-4xl leading-[0.95] md:text-6xl lg:text-7xl">Dentista na Aldeota: odontologia humanizada em Fortaleza.</h1><p className="mt-5 max-w-xl text-base leading-7 text-primary/80 md:text-lg">Uma odontologia humanizada que vai além dos procedimentos: começa pela escuta, pelo entendimento da sua história e pelo planejamento de um cuidado que faça sentido para a sua realidade. Seu sorriso cuidado com leveza, gentileza e tempo.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><a href={bookingUrl} target="_blank" rel="noreferrer">Agendar consulta pelo WhatsApp <ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="border-primary/30 bg-cream text-primary hover:bg-primary/10 hover:text-primary"><a href="#conheca">Conhecer a Humaniza <ArrowDown /></a></Button></div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary/75">
          <li className="flex items-center gap-2"><MapPin className="size-4 text-sage" /> Humberto Santana Business — Aldeota, Fortaleza/CE</li>
          <li className="flex items-center gap-2"><MessageCircle className="size-4 text-sage" /> WhatsApp (85) 99281-8015</li>
          <li className="flex items-center gap-2"><Clock3 className="size-4 text-sage" /> Atendimento com hora marcada</li>
        </ul>
        </div>
      </div>
    </section>
    <section id="conheca" className="bg-background"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8 md:py-28"><SectionTitle eyebrow="Cuidado que acolhe" title="Aqui, você não precisa esconder o medo do dentista." text="A gente escuta, explica e respeita o seu ritmo. Porque uma boa experiência em uma clínica de odontologia começa antes do procedimento: começa quando você percebe que está em um lugar seguro, no coração da Aldeota."/><div className="grid gap-4 sm:grid-cols-3">{[[HeartHandshake,"Escuta sem julgamentos"],[ShieldCheck,"Prevenção em primeiro lugar"],[Sparkles,"Cuidado nos detalhes"]].map(([Icon,label]) => { const I=Icon as typeof HeartHandshake; return <div key={String(label)} className="border-t border-border pt-5"><I className="size-6 text-sage"/><p className="mt-8 font-display text-2xl leading-tight text-primary">{String(label)}</p></div>})}</div></div></section>
    <section className="bg-cream"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><SectionTitle eyebrow="Nossos cuidados" title="Tratamentos odontológicos em Fortaleza: saúde hoje, tranquilidade no futuro." text="Da prevenção à reabilitação oral, nossos tratamentos partem de uma avaliação cuidadosa e do respeito ao que você realmente precisa."/><div className="mt-12 grid gap-6 md:grid-cols-2">{services.map(([title,text,points],i)=><article key={title as string} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-background p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl md:p-8"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage-soft/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" /><div className="relative"><div className="flex items-start justify-between gap-4"><span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft font-display text-xl text-earth">0{i+1}</span><div className="h-2 w-2 rounded-full bg-sage/60" /></div><h3 className="mt-6 text-2xl leading-tight text-primary md:text-[1.65rem]">{title as string}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text as string}</p><ul className="mt-6 grid gap-2.5">{(points as string[]).map((p)=><li className="flex items-center gap-2.5 text-xs font-semibold text-ink-soft" key={p}><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15"><Check className="size-3 text-sage" /></span>{p}</li>)}</ul><TextLink to="/servicos">Ver detalhes deste cuidado</TextLink></div></article>)}</div><div className="mt-10 flex flex-wrap items-center gap-6"><TextLink to="/servicos">Conhecer todos os serviços odontológicos</TextLink><TextLink to="/home-care">Atendimento odontológico domiciliar</TextLink></div></div></section>
    <section className="grid bg-primary lg:grid-cols-2"><div className="flex items-center p-5 md:p-8"><FramedImage src={clinic} alt="Consultório da Humaniza Clínica, clínica odontológica na Aldeota em Fortaleza, com ambiente acolhedor" width={1600} height={1104} loading="lazy" className="w-full" imgClassName="aspect-[100/69] w-full" accent badge={{ label: "Nosso espaço", value: "Conforto em cada detalhe" }} /></div><div className="flex items-center px-5 py-16 text-primary-foreground md:px-16"><div className="max-w-lg"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Um espaço para respirar na Aldeota</p><h2 className="mt-4 text-4xl leading-tight md:text-6xl">Conforto também faz parte do tratamento.</h2><p className="mt-6 leading-8 text-primary-foreground/75">Cada detalhe é pensado para desacelerar: um ambiente sereno, uma conversa sem pressa e um atendimento que respeita você por inteiro. Estamos no Humberto Santana Business, em Fortaleza — CE.</p><TextLink to="/sobre">Conheça nossa forma de cuidar</TextLink></div></div></section>
    <section className="bg-background"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionTitle eyebrow="Resultados reais" title="Mudanças que respeitam a sua história." text="Cada sorriso pede um olhar único. Compartilhamos somente casos autorizados e sempre explicamos o que pode fazer sentido para você."/><TextLink to="/resultados">Ver depoimentos de pacientes</TextLink></div><div className="mt-12 border-y border-border py-10 text-center"><p className="font-display text-3xl italic text-primary md:text-4xl">“O resultado mais bonito é voltar a sorrir com segurança.”</p></div></div></section>
    <section className="bg-cream"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"><div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center"><div><Eyebrow>Onde estamos</Eyebrow><h2 className="text-4xl leading-tight text-primary md:text-5xl">Clínica de odontologia na Aldeota, em Fortaleza.</h2><p className="mt-5 leading-8 text-muted-foreground">Humberto Santana Business, Aldeota, Fortaleza — CE, CEP 60135-270. Atendemos pacientes de toda Fortaleza e região metropolitana, com agendamento simples pelo WhatsApp (85) 99281-8015.</p><TextLink to="/contato">Ver localização e agendar</TextLink></div><div className="rounded-[2rem] bg-background p-7 shadow-sm md:p-8"><p className="font-display text-2xl leading-tight text-primary">Prefere falar agora?</p><p className="mt-3 text-sm leading-7 text-muted-foreground">Nossa equipe responde suas dúvidas e ajuda a encontrar o melhor horário para a sua primeira consulta.</p><Button asChild size="xl" className="mt-6 w-full"><a href={bookingUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <MessageCircle className="size-4" /></a></Button></div></div></div></section>
    <FinalCta />
  </>;
}
