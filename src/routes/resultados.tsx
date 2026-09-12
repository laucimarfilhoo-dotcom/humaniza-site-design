import { createFileRoute } from "@tanstack/react-router";
import { Eye, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { FinalCta, PageIntro, SectionTitle } from "@/components/page-elements";

export const Route = createFileRoute("/resultados")({
  head: () => ({
    meta: [
      { title: "Resultados e Experiências | Humaniza Clínica" },
      {
        name: "description",
        content:
          "Depoimentos reais e resultados odontológicos conduzidos com planejamento, naturalidade e consentimento na Humaniza Clínica.",
      },
      { property: "og:title", content: "Resultados | Humaniza Clínica" },
      {
        property: "og:description",
        content: "Depoimentos reais, resultados responsáveis e experiências acolhedoras.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resultados,
});

const testimonials = [
  {
    name: "Silvinha",
    highlight:
      "O carinho começa na plaquinha com meu nome sobre a mesa",
    body: [
      "Desde o primeiro olhar até o último cuidado, tudo transborda acolhimento. O carinho começa na plaquinha com meu nome sobre a mesa — um detalhe que faz toda a diferença e me fez sentir verdadeiramente bem-vinda.",
      "Um atendimento assim dissipa qualquer medo, ansiedade ou desconforto, pois vem carregado de algo raro: afeto genuíno. Cada passo, cada toque das mãos seguras e gentis da Dra. Sandra e da Taynã revelam um cuidado que vai além da técnica — levam a um resultado que, além de espetacular, acalma e fortalece.",
    ],
  },
  {
    name: "Anna Karine",
    highlight: "Pessoas como você fazem muita diferença",
    body: [
      "Fiz essa foto porque quero compartilhar aqui o quão maravilhoso é o atendimento da Dra. Sandra. Fazer o tratamento de prevenção com ela foi uma das melhores escolhas que eu fiz. Sem dúvidas é uma das melhores profissionais que já conheci na vida. Ela é um amor, é muito atenciosa, bastante didática, explica tudo direitinho e trabalha excelentemente bem! Muito obrigada, Sandra! Pessoas como você fazem muita diferença.",
    ],
  },
  {
    name: "Raquel",
    highlight: "Uma mão tão leve que eu mal sinto as intervenções",
    body: [
      "Mais um dia com a Dra. Sandra tornando a vida ao dentista muito menos desagradável. Acolhedora, gentil, uma mão tão leve que eu mal sinto as intervenções, que mais me amedrontavam, e tudo isso tem me ajudado muito com meus traumas de dentista. Onde eu for, exaltarei e indicarei.",
      "Você não tem noção do quanto nossas consultas e procedimentos têm ressignificado minha vida ao dentista. Você ganhou uma paciente e não cansarei de falar bem de você aos quatro cantos! Muito obrigada pela acolhida, escuta, gentileza, tudo!",
    ],
  },
];

function Resultados() {
  const values = [
    [
      Eye,
      "Transparência",
      "Explicamos possibilidades e limites antes de começar.",
    ],
    [
      ShieldCheck,
      "Consentimento",
      "Imagens e relatos só são publicados com autorização.",
    ],
    [
      MessageCircle,
      "Sem promessas",
      "Cada organismo responde de um jeito. Avaliamos o seu caso.",
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Resultados"
        title="O seu melhor resultado não precisa parecer o de ninguém."
        text="Buscamos mudanças naturais, saudáveis e coerentes com a sua história. Planejamento e expectativas honestas vêm sempre antes da comparação."
      />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionTitle
            eyebrow="Nosso compromisso"
            title="Antes e depois, com contexto."
            text="Depoimentos autorizados e casos clínicos reais mostram como conduzimos cada transformação com cuidado, ética e respeito ao seu tempo."
          />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {values.map(([Icon, title, text]) => {
              const I = Icon as typeof Eye;
              return (
                <article key={title as string} className="bg-background p-8">
                  <I className="size-6 text-sage" />
                  <h2 className="mt-12 text-3xl text-primary">
                    {title as string}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionTitle
            eyebrow="Depoimentos"
            title="O que dizem quem já viveu a experiência Humaniza."
            text="Relatos reais de pacientes que encontraram na clínica um cuidado leve, gentil e transformador."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-3xl bg-background p-7 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-earth text-earth"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-5 font-display text-lg italic text-primary">
                  “{item.highlight}”
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                  {item.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-auto pt-6 text-sm font-medium text-primary">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="font-display text-4xl italic leading-tight text-primary md:text-6xl">
            Cuidar não é buscar perfeição. É devolver conforto, saúde e
            liberdade para sorrir.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
