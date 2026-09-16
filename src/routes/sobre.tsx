import { createFileRoute } from "@tanstack/react-router";
const clinic = "/humaniza-consultorio.jpg";
import { FramedImage } from "@/components/framed-image";
import { FinalCta, PageIntro, SectionTitle } from "@/components/page-elements";

export const Route = createFileRoute("/sobre")({ head: () => ({ meta: [
  { title: "Sobre a Humaniza | Dentistas na Aldeota, Fortaleza" }, { name: "description", content: "Conheça a equipe e a filosofia de odontologia humanizada da Humaniza Clínica, na Aldeota, em Fortaleza — CE. Agende sua consulta." },
  { property: "og:title", content: "Sobre a Humaniza Clínica | Aldeota, Fortaleza" }, { property: "og:description", content: "Escuta, clareza e respeito ao seu ritmo em cada consulta, em Fortaleza." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/sobre" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Sobre a Humaniza Clínica | Aldeota, Fortaleza" }, { name: "twitter:description", content: "Odontologia humanizada com equipe especializada em Fortaleza." },
], links: [{ rel: "canonical", href: "/sobre" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "/" }, { "@type": "ListItem", position: 2, name: "Sobre", item: "/sobre" }] }) }] }), component: Sobre });
const team = [
  { name: "Dra. Sandra Nogueira", role: "Cirurgiã-Dentista", areas: ["Bruxismo", "DTM", "Clareamento", "Prevenção", "Resinas", "Prótese"], photo: "/equipe-sandra.jpg" },
  { name: "Dr. Aloísio Ribeiro", role: "Cirurgião-Dentista", areas: ["Próteses", "Implantes", "Laminados", "Cirurgias"], photo: "/equipe-aloisio.jpg" },
  { name: "Dra. Taíssa", role: "Cirurgiã-Dentista", areas: ["Ortodontia", "Alinhadores invisíveis", "Aparelho fixo"], photo: "/equipe-taissa.jpg" },
  { name: "Dra. Karol Reis", role: "Cirurgiã-Dentista", areas: ["Harmonização facial"], photo: "/equipe-karol.jpg" },
  { name: "Dra. Daniela Gomes", role: "Cirurgiã-Dentista", areas: ["Atendimento odontológico domiciliar"], photo: "/equipe-daniela.jpg" },
];

function Sobre() { return <><PageIntro eyebrow="Sobre a Humaniza" title="Odontologia com técnica. Atendimento com presença." text="Criamos uma experiência em que você é ouvido, entende cada escolha e participa do próprio cuidado, sem pressa, pressão ou julgamentos."/><section><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28"><FramedImage src={clinic} alt="Ambiente conceitual de uma clínica odontológica acolhedora" width={1600} height={1104} loading="lazy" className="aspect-[4/3] size-full" imgClassName="size-full" accent badge={{ label: "Nossa essência", value: "Escuta e cuidado" }} /><div><SectionTitle eyebrow="Nossa forma de cuidar" title="A confiança se constrói em cada detalhe."/><div className="mt-8 space-y-6 leading-8 text-muted-foreground"><p>Antes de qualquer procedimento, existe uma conversa. Queremos entender sua rotina, suas expectativas e também aquilo que já tornou uma consulta difícil para você.</p><p>Explicamos cada etapa em linguagem simples e seguimos no seu ritmo. A prevenção orienta nossas escolhas para preservar sua saúde e tornar o cuidado mais leve ao longo do tempo.</p></div></div></div></section><section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Equipe Humaniza</p><div className="mt-5 grid gap-8 md:grid-cols-2"><h2 className="text-4xl md:text-5xl">Profissionais que cuidam de pessoas, não apenas de sorrisos.</h2><p className="leading-8 text-primary-foreground/75">Cada especialidade da clínica é conduzida por quem escuta antes de indicar. Você sabe quem vai te acompanhar em cada etapa do seu cuidado.</p></div>
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((p) => (
        <article key={p.name} className="group relative overflow-hidden rounded-[2rem] bg-cream p-3 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl">
          <img src={p.photo} alt={`Retrato de ${p.name}, da equipe da Humaniza Clínica`} width={750} height={1000} loading="lazy" className="aspect-[3/4] w-full rounded-[1.5rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          <div className="px-4 pb-4 pt-6">
            <h3 className="text-2xl text-primary">{p.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-earth">{p.role}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.areas.map((a) => (
                <li key={a} className="rounded-full bg-sage/15 px-3 py-1 text-xs text-primary/80">{a}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div></section><FinalCta /></>; }
