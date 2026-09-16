import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { FinalCta, PageIntro } from "@/components/page-elements";
import { bookingUrl } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

const items: [string, string, string, string[]][] = [
  ["Prevenção inteligente", "Odontologia preventiva em Fortaleza", "Acompanhamento contínuo para manter sua saúde bucal em dia, identificar sinais antes que virem problemas e construir hábitos que protegem seu sorriso.", ["Avaliação periódica", "Orientação personalizada", "Plano de cuidado contínuo"]],
  ["Limpeza odontológica", "Limpeza dental e profilaxia na Aldeota", "Remoção suave de placa e tártaro com atenção ao seu conforto, deixando a boca mais saudável, a gengiva protegida e o sorriso mais leve.", ["Técnica cuidadosa", "Conforto durante o procedimento", "Manutenção da saúde gengival"]],
  ["Clareamento dental", "Clareamento dental em Fortaleza", "Iluminação do sorriso com planejamento individual, respeito à sensibilidade dos seus dentes e acompanhamento para resultados naturais.", ["Análise do seu sorriso", "Expectativas alinhadas", "Acompanhamento profissional"]],
  ["Bruxismo", "Tratamento de bruxismo na Aldeota, Fortaleza", "Avaliação dos sinais de apertamento ou ranger dos dentes, com placa de proteção e orientações para aliviar desconfortos e preservar suas estruturas.", ["Avaliação de sinais", "Placa de proteção", "Cuidado contínuo"]],
  ["Disfunção da ATM", "Tratamento de DTM e dor na mandíbula em Fortaleza", "Investigação cuidadosa dos desconfortos na articulação da mandíbula, buscando entender causas e indicar o melhor caminho para mais qualidade de vida.", ["Avaliação especializada", "Planejamento individual", "Acompanhamento da evolução"]],
  ["Facetas em resina e estética dental", "Facetas de resina e estética dental na Aldeota", "Transformações sutis que respeitam a naturalidade do seu sorriso, com decisões conscientes e indicação baseada em avaliação clínica.", ["Planejamento individual", "Resultados naturais", "Abordagem conservadora"]],
  ["Próteses e reabilitação oral", "Prótese dentária e reabilitação oral em Fortaleza", "Recuperação da função e da estética do sorriso com soluções personalizadas, respeitando seu ritmo e suas necessidades.", ["Avaliação completa", "Soluções personalizadas", "Acompanhamento pós-procedimento"]],
  ["Cirurgias e implantes", "Implante dentário e cirurgia oral na Aldeota", "Procedimentos cirúrgicos conduzidos com planejamento, explicação clara de cada etapa e cuidado para que você se sinta seguro do início ao fim.", ["Planejamento detalhado", "Explicação de cada etapa", "Acompanhamento pós-cirúrgico"]],
  ["Restaurações", "Restauração dental em Fortaleza", "Reparo de dentes com atenção à estética e à função, usando materiais e técnicas que buscam um resultado discreto e duradouro.", ["Avaliação do dente afetado", "Materiais de qualidade", "Acabamento natural"]],
  ["Ortodontia", "Aparelho ortodôntico na Aldeota, Fortaleza", "Alinhamento do sorriso com acompanhamento regular, explicação das etapas e respeito ao tempo do seu tratamento.", ["Avaliação ortodôntica", "Planejamento do tratamento", "Acompanhamento periódico"]],
  ["Alinhador invisível", "Alinhador invisível em Fortaleza", "Opção discreta para quem busca corrigir a posição dos dentes com mais liberdade visual e conforto no dia a dia.", ["Avaliação de viabilidade", "Planejamento digital", "Acompanhamento do progresso"]],
  ["Odontologia do sono (ronco e apneia)", "Tratamento de ronco e apneia do sono em Fortaleza", "Avaliação de sinais de ronco e apneia, com orientações e dispositivos intraorais que podem melhorar sua respiração e qualidade de sono.", ["Avaliação dos sinais", "Indicação de dispositivos", "Acompanhamento da adaptação"]],
  ["Harmonização facial", "Harmonização facial na Aldeota, Fortaleza", "Procedimentos estéticos minimamente invasivos para valorizar seus traços de forma natural, sempre com indicação individualizada.", ["Avaliação facial", "Indicação personalizada", "Resultados sutis"]],
  ["Atendimento odontológico domiciliar", "Dentista em casa em Fortaleza (home care)", "Cuidado odontológico no conforto da sua casa para quem tem dificuldade de deslocamento ou prefere ser atendido em ambiente familiar.", ["Atendimento humanizado", "Conforto do lar", "Agendamento flexível"]],
];

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços Odontológicos na Aldeota, Fortaleza" },
      {
        name: "description",
        content:
          "Limpeza, clareamento, bruxismo, ortodontia, implantes, prótese e harmonização facial na Aldeota, Fortaleza. Agende sua consulta pelo WhatsApp.",
      },
      { property: "og:title", content: "Serviços Odontológicos na Aldeota, Fortaleza | Humaniza" },
      {
        property: "og:description",
        content:
          "Tratamentos odontológicos completos, preventivos e humanizados em Fortaleza — CE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Serviços Odontológicos na Aldeota, Fortaleza" },
      {
        name: "twitter:description",
        content: "Do preventivo à reabilitação oral, com atendimento gentil em Fortaleza.",
      },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: "https://humanizaclinica.vercel.app/" },
                { "@type": "ListItem", position: 2, name: "Serviços", item: "https://humanizaclinica.vercel.app/servicos" },
              ],
            },
            {
              "@type": "ItemList",
              name: "Serviços odontológicos da Humaniza Clínica em Fortaleza",
              itemListElement: items.map(([name, local, description], i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "MedicalProcedure",
                  name,
                  alternateName: local,
                  description,
                  provider: { "@id": "https://humanizaclinica.vercel.app/#organization" },
                  areaServed: { "@type": "City", name: "Fortaleza" },
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <PageIntro
        eyebrow="Serviços odontológicos em Fortaleza"
        title="Serviços odontológicos na Aldeota, Fortaleza."
        text="Da prevenção à reabilitação oral, da estética ao atendimento domiciliar: na Humaniza Clínica, cada indicação parte da escuta, de uma avaliação cuidadosa e do respeito ao que você realmente precisa. Somos uma clínica de odontologia humanizada no bairro Aldeota, em Fortaleza — CE."
      />

      <section className="bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm leading-7 text-muted-foreground">
            Não sabe qual tratamento é o ideal? A gente ajuda você a entender o próximo passo.
          </p>
          <Button asChild size="lg">
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Agendar avaliação pelo WhatsApp <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-background" aria-labelledby="lista-servicos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 id="lista-servicos" className="max-w-3xl text-4xl leading-tight text-primary md:text-5xl">
            Tratamentos que oferecemos na clínica
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Conheça cada especialidade disponível na nossa clínica odontológica em Fortaleza e o
            que você pode esperar do cuidado em cada uma delas.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, local, text, points], i) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-cream p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl md:p-8"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage-soft/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft font-display text-xl text-earth">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-sage/60" />
                  </div>
                  <h3 className="mt-6 text-2xl leading-tight text-primary md:text-[1.65rem]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-earth">
                    {local}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {points.map((p) => (
                      <li
                        className="flex items-center gap-2.5 text-xs font-semibold text-ink-soft"
                        key={p}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15">
                          <Check className="size-3 text-sage" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-accent underline-offset-8"
                  >
                    Agendar {title.toLowerCase()} <MessageCircle className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            A indicação de qualquer tratamento depende de avaliação presencial e pode variar de
            pessoa para pessoa.
          </p>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="atendimento-local">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="atendimento-local" className="max-w-3xl text-4xl leading-tight text-primary md:text-5xl">
            Onde atendemos em Fortaleza
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Nossa clínica fica no Humberto Santana Business, no bairro Aldeota, em Fortaleza — CE,
            CEP 60135-270. Recebemos pacientes de toda a cidade e região metropolitana e também
            oferecemos atendimento odontológico domiciliar para quem precisa de mais conforto.
          </p>
          <Button asChild size="xl" className="mt-8">
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Falar com a Humaniza no WhatsApp <MessageCircle className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <FinalCta title="Qual cuidado faz sentido para você agora?" />
    </>
  );
}
