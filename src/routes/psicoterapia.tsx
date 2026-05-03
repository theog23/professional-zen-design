import { createFileRoute, Link } from "@tanstack/react-router";

import logoImage from "@/assets/diana-logo.png";

export const Route = createFileRoute("/psicoterapia")({
  head: () => ({
    meta: [
      { title: "Psicoterapia — Diana Sarmiento Pachón" },
      {
        name: "description",
        content:
          "Psicoterapia profesional, profunda y personalizada. Una experiencia emocional correctiva dentro de un vínculo terapéutico para generar cambios estructurales.",
      },
      { property: "og:title", content: "Psicoterapia — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "¿Qué es realmente la psicoterapia? Proceso, etapas y transformaciones posibles desde un enfoque integrativo.",
      },
    ],
  }),
  component: Psicoterapia,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const noEs = [
  "No es consejos rápidos",
  "No es motivación",
  "No es coaching sin formación",
  "No es inteligencia artificial",
];

const etapas = [
  {
    n: "01",
    titulo: "Contacto inicial y comprensión del malestar",
    texto:
      "El paciente define su dificultad significativa y el motivo de consulta. Se exploran la motivación, los recursos disponibles y el contexto vital. Se acuerda si el trabajo será individual, de pareja, familiar o grupal.",
  },
  {
    n: "02",
    titulo: "Evaluación y diagnóstico",
    texto:
      "Se concretan los problemas focales y se definen objetivos terapéuticos claros. Se realiza un análisis profundo del funcionamiento psicológico, emocional y relacional.",
  },
  {
    n: "03",
    titulo: "Planificación del tratamiento",
    texto:
      "Se diseña un plan terapéutico personalizado, seleccionando las herramientas y enfoques más adecuados. El tratamiento se plantea desde una psicoterapia integrativa, multinivel y multicomponente.",
  },
  {
    n: "04",
    titulo: "Intervención activa",
    texto:
      "Se implementan las estrategias terapéuticas acordadas, integrando trabajo emocional, cognitivo, relacional y experiencial. El objetivo es generar cambios estructurales y sostenibles.",
  },
  {
    n: "05",
    titulo: "Consolidación de cambios",
    texto:
      "Se refuerzan los avances logrados, se evalúa la eficacia de las intervenciones y se ajusta la frecuencia de las sesiones según la evolución del proceso.",
  },
  {
    n: "06",
    titulo: "Preparación para la finalización",
    texto:
      "Se revisa el recorrido terapéutico, se trabaja en consolidar la autonomía y la coherencia interna. Se acuerdan los pasos finales del proceso.",
  },
  {
    n: "07",
    titulo: "Seguimiento post-terapia",
    texto:
      "Se realizan encuentros puntuales para asegurar la permanencia de los cambios y reforzar la continuidad del bienestar psicológico.",
  },
];

const cambios = [
  "Mayor claridad interna y comprensión de tu propia historia.",
  "Regulación emocional — sin ser dominado por tus emociones.",
  "Relaciones más conscientes, estables y satisfactorias.",
  "Identidad más sólida, menos dependiente de la validación externa.",
  "Mejor toma de decisiones alineada con tus valores.",
  "Recursos internos que permanecen contigo más allá del proceso.",
];

function Psicoterapia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Psicoterapia</p>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            ¿Qué es realmente la psicoterapia?
          </h1>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-sage-deep lg:text-3xl">
            Una experiencia emocional correctiva dentro de un vínculo terapéutico construido
            para generar cambios estructurales en cómo piensas, sientes y te relacionas —
            cuando ciertos patrones se han vuelto disfuncionales.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A lo largo del proceso, la persona comprende con mayor profundidad su
            funcionamiento interno y desarrolla recursos psicológicos que le permiten
            sustituir formas rígidas por maneras más flexibles y coherentes con sus valores
            y contextos de vida.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {noEs.map((n) => (
              <span
                key={n}
                className="rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground"
              >
                {n}
              </span>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground">
            Es un proceso profesional, profundo y personalizado, realizado por un
            psicoterapeuta con formación específica acreditada, experiencia clínica y
            responsabilidad ética.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Agendar mi primera sesión
            </a>
            <a
              href={`tel:+573142044866`}
              className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Desplegable: ¿Qué NO es la psicoterapia? */}
      <section className="border-b border-border/40 bg-muted/20 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <details className="group rounded-lg border border-border bg-background px-6 py-5 transition-colors hover:border-sage/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
              <span className="flex items-center gap-3">
                <span className="text-sage transition-transform duration-300 group-open:rotate-90">
                  ▸
                </span>
                <span className="font-serif text-lg text-foreground sm:text-xl">
                  ¿Qué NO es la psicoterapia? — para profundizar
                </span>
              </span>
            </summary>
            <div className="mt-6 space-y-5 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Hoy existe mucha información psicológica circulando en redes sociales,
                cursos rápidos, plataformas digitales y propuestas de desarrollo personal.
                Algunas pueden ser útiles como reflexión general, pero no sustituyen un
                proceso psicoterapéutico real.
              </p>
              <p>
                <strong className="text-foreground">
                  Inteligencia artificial y herramientas digitales:
                </strong>{" "}
                Pueden ofrecer información o generar preguntas interesantes, pero no
                evalúan clínicamente, no diagnostican, no asumen responsabilidad ética ni
                construyen un vínculo terapéutico humano.
              </p>
              <p>
                <strong className="text-foreground">
                  Coaching superficial o formaciones breves:
                </strong>{" "}
                Un curso corto no forma psicoterapeutas. La psicoterapia exige formación
                profunda, supervisión, experiencia clínica y comprensión rigurosa de la
                psicopatología.
              </p>
              <p>
                <strong className="text-foreground">
                  Redes sociales y "terapia en cápsulas":
                </strong>{" "}
                Frases motivacionales y soluciones simplificadas pueden generar sensación
                momentánea de claridad, pero no producen transformaciones estructurales.
              </p>
              <p>
                <strong className="text-foreground">
                  Técnicas aisladas sin criterio clínico:
                </strong>{" "}
                Ejercicios como journaling, meditación o afirmaciones pueden ser útiles
                dentro de un proceso bien guiado, pero por sí solos no constituyen
                psicoterapia.
              </p>
              <p className="font-serif italic text-sage-deep">
                La mente humana es compleja y sensible. Un trabajo psicológico profundo
                requiere formación especializada, criterio diagnóstico y acompañamiento
                profesional responsable.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ¿Cómo es el proceso? */}
      <section className="border-b border-border/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sage">El proceso</p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Cómo es el proceso?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            El proceso psicoterapéutico se desarrolla de manera estructurada y
            personalizada, adaptándose a las necesidades y características de cada persona.
            Aunque cada proceso es único, existen etapas comunes que orientan el trabajo
            clínico.
          </p>

          {/* Resumen de 5 fases */}
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Contacto y comprensión",
              "Evaluación y diagnóstico",
              "Tratamiento personalizado",
              "Intervención activa",
              "Cierre y seguimiento",
            ].map((t, i) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-muted/30 p-5 transition-colors hover:border-sage/50"
              >
                <span className="block font-serif text-2xl text-sage">{i + 1}</span>
                <span className="mt-2 block text-sm font-medium text-foreground">{t}</span>
              </li>
            ))}
          </ol>

          {/* Detalle desplegable */}
          <details className="group mt-10 rounded-lg border border-border bg-background px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-left">
              <span className="text-sage transition-transform duration-300 group-open:rotate-90">
                ▸
              </span>
              <span className="font-serif text-lg text-foreground sm:text-xl">
                Ver detalle de cada etapa
              </span>
            </summary>
            <ol className="mt-6 space-y-6 border-t border-border pt-6">
              {etapas.map((e) => (
                <li key={e.n} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-serif text-2xl text-sage">{e.n}</span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">{e.titulo}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {e.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </details>

          <p className="mt-10 font-serif italic text-lg text-sage-deep">
            Cada proceso terapéutico es singular. La duración, el ritmo y la profundidad
            del trabajo se ajustan a la persona, su momento vital y los objetivos
            acordados.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Quiero comenzar mi proceso
            </a>
          </div>
        </div>
      </section>

      {/* ¿Qué puede cambiar? */}
      <section className="bg-sage-deep py-20 text-background">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-background/70">
            Resultados
          </p>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            ¿Qué puede cambiar?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/80">
            Los resultados de un proceso serio no se reducen a la desaparición del síntoma.
            Implican transformaciones profundas y duraderas en la manera de pensar, sentir,
            relacionarse y estar en el mundo.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {cambios.map((c) => (
              <li
                key={c}
                className="flex gap-4 rounded-lg border border-background/15 bg-background/5 p-5"
              >
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-background" />
                <span className="text-base leading-relaxed text-background/90">{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-12 font-serif text-xl italic text-background lg:text-2xl">
            La psicoterapia no solo produce cambios — capacita a la persona para
            convertirse en el arquitecto de su propia mente y de su propio futuro.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-background px-7 py-3 text-sm font-medium text-sage-deep transition-colors hover:bg-background/90"
            >
              Agendar mi primera sesión
            </a>
            <a
              href={`tel:+573142044866`}
              className="inline-flex items-center rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-b border-border/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            ¿Listo para iniciar un proceso real?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Una primera conversación para conocernos y valorar si este enfoque es el
            adecuado para ti.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Escribir por WhatsApp
            </a>
            <Link
              to="/sobre-mi"
              className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Conocer a Diana
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Diana Sarmiento Pachón - Psicoterapia Integrativa"
            className="h-14 w-auto"
          />
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-sage-deep">
              Diana Sarmiento
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:inline">
              Psicoterapeuta
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link to="/sobre-mi" className="hover:text-foreground transition-colors">
            Sobre mí
          </Link>
          <Link
            to="/psicoterapia"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Psicoterapia
          </Link>
          <Link to="/servicios" className="hover:text-foreground transition-colors">
            Servicios
          </Link>
          <Link to="/resultados" className="hover:text-foreground transition-colors">
            Resultados
          </Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link to="/contacto" className="hover:text-foreground transition-colors">
            Contacto
          </Link>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
        <p className="font-serif text-lg text-foreground">Diana Sarmiento Pachón</p>
        <p className="mt-2">Psicoterapia Integrativa & Multicomponente</p>
        <p className="mt-4">{PHONE_DISPLAY} · Bogotá, Colombia</p>
      </div>
    </footer>
  );
}
