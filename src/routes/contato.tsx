import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, MessageCircle, Navigation } from "lucide-react";
import { PageIntro } from "@/components/page-elements";
import { bookingUrl } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Localização | Dentista na Aldeota" },
      {
        name: "description",
        content:
          "Agende sua consulta odontológica na Humaniza Clínica, na Aldeota, Fortaleza. Fale pelo WhatsApp (85) 99281-8015 e veja como chegar.",
      },
      { property: "og:title", content: "Contato e localização | Humaniza Clínica Fortaleza" },
      {
        property: "og:description",
        content: "Fale com nossa equipe e agende seu atendimento odontológico na Aldeota.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contato e localização | Humaniza Clínica" },
      { name: "twitter:description", content: "Dentista na Aldeota, Fortaleza. Agende pelo WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://humanizaclinica.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Contato", item: "https://humanizaclinica.vercel.app/contato" },
        ],
      }),
    }],
  }),
  component: Contato,
});

const clinicAddress = "Humberto Santana Business, Aldeota, Fortaleza - CE, 60135-270";
const mapsQuery = encodeURIComponent(clinicAddress);
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=15&ie=UTF8&iwloc=B&output=embed`;
const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

function Contato() {
  return (
    <>
      <PageIntro
        eyebrow="Agendamento"
        title="Seu primeiro passo pode ser só uma conversa."
        text="Conte para a gente como podemos ajudar. Nossa equipe orienta você e encontra o melhor caminho para começar com tranquilidade."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
          <div className="bg-primary p-8 text-primary-foreground md:p-14">
            <MessageCircle className="size-8 text-accent" />
            <h2 className="mt-10 text-4xl md:text-5xl">
              Agende pelo canal da Humaniza.
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-primary-foreground/70">
              Você será direcionado ao canal atual de atendimento da clínica. Por
              lá, pode tirar dúvidas e combinar seu horário.
            </p>
            <Button asChild size="xl" variant="warm" className="mt-8">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                Conversar com a Humaniza <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="space-y-10 py-4">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-sage" />
              <div>
                <h2 className="font-sans text-sm font-bold">Endereço</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Humberto Santana Business
                  <br />
                  Aldeota, Fortaleza — CE
                  <br />
                  CEP 60135-270
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 size-5 shrink-0 text-sage" />
              <div>
                <h2 className="font-sans text-sm font-bold">Horários</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Consulte a disponibilidade diretamente com a equipe no momento
                  do agendamento.
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-xs leading-6 text-muted-foreground">
                O endereço e os horários finais devem ser confirmados pela
                clínica antes da publicação do site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-earth">
              Localização
            </p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">
              Onde encontrar a Humaniza.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Estamos no Humberto Santana Business, no bairro Aldeota, em
              Fortaleza. Fácil acesso e ambiente preparado para receber você com
              calma.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
            <iframe
              title="Localização da Humaniza Clínica"
              src={mapsEmbedUrl}
              className="h-80 w-full border-0 md:h-[28rem]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" variant="warm">
              <a href={mapsLinkUrl} target="_blank" rel="noreferrer">
                <Navigation className="size-4" />
                Ver rotas no Google Maps
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                Agendar minha consulta
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
