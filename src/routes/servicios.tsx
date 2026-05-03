import { createFileRoute, Link } from "@tanstack/react-router";

import logoImage from "@/assets/diana-logo.png";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Diana Sarmiento Pachón | Psicoterapia y Coaching" },
      {
        name: "description",
        content:
          "Terapia individual, de pareja, familiar, niños y adolescentes, grupos, coaching personal y ejecutivo. Enfoque integrativo multinivel y multicomponente.",
      },
      { property: "og:title", content: "Servicios — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "Servicios de psicoterapia y coaching con enfoque integrativo. Bogotá y online.",
      },
    ],
  }),
  component: Servicios,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const individualProblems = [
  "Autoestima",
  "Dependencia emocional",
  "Abuso narcisista",
  "Vínculo traumático",
  "Inseguridad personal",
  "Amor tóxico",
  "Recuperar pareja (cuando es posible)",
  "Duelo",
  "Celos",
  "Crecimiento personal",
  "Sentirse perdido o sin rumbo",
  "Crisis vitales",
  "Confusión emocional",
  "Patrones repetitivos en relaciones",
];

const parejaIndividual = [
  "Traumas personales que afectan la relación",
  "Inseguridades individuales",
  "Conflictos íntimos o privados",
  "Historia vincular y estilos de apego",
];

const parejaConjunto = [
  "Comunicación efectiva",
  "Manejo del conflicto",
  "Reenamoramiento",
  "Sexualidad y afectividad",
  "Acuerdos financieros y familiares",
  "Crianza y educación de hijos",
  "Negociación y toma de decisiones",
  "Comprensión de diferencias psicológicas",
];

const familiar = [
  "Dinámicas familiares complejas",
  "Conflictos intergeneracionales",
  "Problemas de convivencia",
  "Procesos de cambio familiar",
  "Crisis o transiciones vitales",
];

const ninos = [
  "Regulación emocional",
  "Ansiedad y adaptación escolar",
  "Problemas de conducta",
  "Conflictos familiares",
  "Desarrollo emocional",
  "Procesos de identidad",
  "Separaciones parentales",
];

const grupoConstituido = [
  "Equipos directivos",
  "Empresas",
  "Organizaciones",
  "Familias ampliadas",
  "Grupos laborales con conflictos internos",
];

const grupoEnGrupo = [
  "Recuperación tras relación con narcisista",
  "Dependencia emocional",
  "Duelo",
  "Rupturas afectivas",
  "Desarrollo personal",
  "Trauma relacional",
];

const coachingPersonal = [
  "Toma de decisiones",
  "Cambios laborales o personales",
  "Organización de objetivos",
  "Desarrollo de habilidades",
  "Claridad vital",
  "Transiciones importantes",
];

const coachingEjecutivo = [
  "Liderazgo",
  "Toma de decisiones estratégicas",
  "Manejo de presión",
  "Comunicación organizacional",
  "Rendimiento profesional",
];

const terapiaAmor = [
  "Elección consciente de pareja",
  "Relaciones afectivas sanas",
  "Patrones amorosos repetitivos",
  "Dependencia emocional",
  "Rupturas complejas",
  "Recuperación tras abuso narcisista",
  "Reaprendizaje del vínculo afectivo",
];

const asesoramiento = [
  "Decisiones laborales",
  "Situaciones escolares",
  "Conflictos específicos",
  "Orientación puntual",
  "Consultas breves estratégicas",
];

const eligePsico = [
  "hay sufrimiento emocional profundo",
  "trauma o historia vincular compleja",
  "patrones repetitivos",
  "ansiedad, depresión o crisis relacional",
  "conflictos internos persistentes",
  "heridas afectivas",
];

const eligeCoaching = [
  "el objetivo es estratégico o puntual",
  "se busca organización de metas",
  "decisiones profesionales",
  "desarrollo de habilidades específicas",
  "crecimiento sin patología clínica activa",
];

const glosario = [
  {
    term: "Timidez",
    def: "Dificultad persistente para interactuar socialmente con comodidad, asociada a inhibición emocional, inseguridad y temor a la evaluación externa.",
  },
  {
    term: "Inseguridad emocional",
    def: "Sensación constante de duda sobre el propio valor, las decisiones o la aceptación por parte de los demás. Suele vincularse a experiencias vinculares tempranas.",
  },
  {
    term: "Problemas de autoestima",
    def: "Patrones persistentes de autovaloración negativa que pueden manifestarse como autocrítica rígida, miedo al error, perfeccionismo o dependencia de la validación externa.",
  },
  {
    term: "Regulación emocional",
    def: "Capacidad de identificar, comprender y modular las propias emociones de manera flexible y adaptativa.",
  },
  {
    term: "Crisis vital",
    def: "Periodo de desorganización emocional asociado a cambios significativos que cuestionan la identidad, los vínculos o el proyecto de vida.",
  },
  {
    term: "Ansiedad",
    def: "Estado de activación emocional caracterizado por preocupación, tensión interna, anticipación negativa y sensación de amenaza.",
  },
  {
    term: "Ansiedad generalizada",
    def: "Preocupación excesiva y sostenida que afecta múltiples áreas de la vida cotidiana, acompañada de hipervigilancia y dificultad para desconectar mentalmente.",
  },
  {
    term: "Ataques de pánico",
    def: "Episodios súbitos de ansiedad intensa con síntomas físicos y cognitivos como palpitaciones o sensación de ahogo, aun sin peligro real inmediato.",
  },
  {
    term: "Fobias",
    def: "Miedos intensos y desproporcionados ante objetos o situaciones específicas que generan evitación y ansiedad significativa.",
  },
  {
    term: "Fobia social / Ansiedad social",
    def: "Miedo intenso a situaciones sociales o de desempeño, asociado a temor al juicio y evitación persistente.",
  },
  {
    term: "Trastorno Obsesivo-Compulsivo (TOC)",
    def: "Presencia de pensamientos intrusivos recurrentes y conductas compulsivas orientadas a reducir la ansiedad.",
  },
  {
    term: "Hipocondría / Ansiedad por la salud",
    def: "Preocupación persistente por padecer una enfermedad grave, acompañada de hipervigilancia corporal.",
  },
  {
    term: "Dependencia emocional",
    def: "Patrón relacional caracterizado por miedo intenso al abandono y necesidad excesiva de validación.",
  },
  {
    term: "Vínculo traumático",
    def: "Relaciones marcadas por ciclos de idealización, maltrato y dependencia, sostenidas por mecanismos inconscientes.",
  },
  {
    term: "Duelo",
    def: "Proceso emocional natural ante la pérdida de una persona, vínculo, etapa vital o proyecto significativo.",
  },
  {
    term: "Duelo complicado / patológico",
    def: "Bloqueo o cronificación del proceso de duelo, con intenso sufrimiento emocional y dificultad para elaborar la pérdida.",
  },
  {
    term: "Depresión",
    def: "Estado de ánimo persistentemente bajo, pérdida de interés, apatía y disminución de la energía vital.",
  },
  {
    term: "Trastornos depresivos",
    def: "Conjunto de cuadros clínicos del estado de ánimo con distinta intensidad, duración e impacto funcional.",
  },
  {
    term: "Conductas adictivas",
    def: "Patrones repetitivos de conducta que cumplen una función de regulación emocional y generan pérdida de control y dependencia psicológica.",
  },
  {
    term: "Trastornos adictivos",
    def: "Problemáticas clínicas caracterizadas por una relación compulsiva con sustancias o conductas, con deterioro significativo del funcionamiento vital.",
  },
  {
    term: "Trastornos de la conducta alimentaria",
    def: "Alteraciones persistentes en la relación con la comida, el cuerpo y la imagen corporal.",
  },
  {
    term: "Trastornos psicosomáticos",
    def: "Manifestaciones físicas en las que los factores emocionales y psicológicos influyen de forma significativa en el malestar corporal.",
  },
  {
    term: "Trastornos sexuales",
    def: "Dificultades persistentes en la vivencia de la sexualidad que generan malestar personal o relacional.",
  },
  {
    term: "Trastornos de personalidad",
    def: "Patrones estables y rígidos de funcionamiento psicológico y relacional que afectan la identidad, los vínculos y la adaptación social.",
  },
  {
    term: "Trastorno bipolar",
    def: "Alteración del estado de ánimo caracterizada por la alternancia de episodios depresivos y episodios maníacos o hipomaníacos.",
  },
  {
    term: "Trastornos psicóticos",
    def: "Alteraciones graves del pensamiento, la percepción y el contacto con la realidad que requieren abordaje clínico especializado.",
  },
];

function CTAButtons({ variant = "default" }: { variant?: "default" | "light" }) {
  const primaryClass =
    variant === "light"
      ? "inline-flex items-center rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
      : "inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep";
  const secondaryClass =
    variant === "light"
      ? "inline-flex items-center rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
      : "inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted";
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={primaryClass}>
        Agendar una sesión
      </a>
      <a href="tel:+573142044866" className={secondaryClass}>
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

type ServiceCardProps = {
  number: string;
  title: string;
  badge?: string;
  description?: string;
  note?: string;
  children?: React.ReactNode;
};

function ServiceCard({
  number,
  title,
  badge,
  description,
  note,
  children,
  defaultOpen = false,
}: ServiceCardProps & { defaultOpen?: boolean }) {
  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm transition-colors hover:border-sage/40 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-6 sm:px-10 sm:py-7">
        <span className="font-serif text-2xl text-sage tabular-nums">{number}</span>
        <div className="flex flex-1 flex-wrap items-baseline gap-3">
          <h3 className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
            {title}
          </h3>
          {badge && (
            <span className="rounded-full bg-sage/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-sage-deep">
              {badge}
            </span>
          )}
        </div>
        <span className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-sage sm:flex">
          <span className="group-open:hidden">Ver más</span>
          <span className="hidden group-open:inline">Cerrar</span>
        </span>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sage/40 text-sage transition-transform duration-300 group-open:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="border-t border-border/60 px-6 py-8 sm:px-10 sm:py-10">
        {description && (
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children}
        {note && (
          <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">{note}</p>
        )}
      </div>
    </details>
  );
}


function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((it) => (
        <li
          key={it}
          className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Servicios() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Servicios</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Servicios
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Procesos terapéuticos y de acompañamiento diseñados para distintas necesidades —
            todos sostenidos por un mismo marco clínico riguroso.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Services list */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6">
          <ServiceCard
            number="01"
            title="Terapia Individual"
            defaultOpen
            description="Proceso psicoterapéutico profundo orientado al autoconocimiento, la regulación emocional, la transformación de patrones relacionales y la resolución de conflictos internos desde un enfoque integrativo multinivel y multicomponente."
          >
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Se trabaja desde trauma relacional, apego, historia vincular, mentalización y
              dinámicas inconscientes que afectan la vida actual.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-sage">
              Problemáticas frecuentes
            </p>
            <ChipList items={individualProblems} />
            <CTAButtons />
          </ServiceCard>

          <ServiceCard
            number="02"
            title="Terapia de Pareja"
            description="Proceso terapéutico dividido en dos niveles de trabajo:"
          >
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sage/30 bg-sage/5 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">
                  1 · Espacios individuales dentro del proceso
                </p>
                <BulletList items={parejaIndividual} />
              </div>
              <div className="rounded-2xl border border-sage/30 bg-sage/5 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">
                  2 · Espacios conjuntos
                </p>
                <BulletList items={parejaConjunto} />
              </div>
            </div>
          </ServiceCard>

          <ServiceCard
            number="03"
            title="Terapia Familiar"
            description="Intervención sistémica orientada a:"
          >
            <BulletList items={familiar} />
          </ServiceCard>

          <ServiceCard
            number="04"
            title="Terapia con Niños y Adolescentes"
            description="Trabajo especializado en:"
          >
            <BulletList items={ninos} />
          </ServiceCard>

          <ServiceCard
            number="05"
            title="Terapia de Grupo"
            description="Grupo constituido como unidad — instituciones o colectivos específicos."
          >
            <BulletList items={grupoConstituido} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Se trabaja la dinámica grupal como una personalidad colectiva.
            </p>
          </ServiceCard>

          <ServiceCard
            number="06"
            title="Terapia en Grupo"
            description="Personas distintas reunidas por temática común."
          >
            <BulletList items={grupoEnGrupo} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Espacio terapéutico compartido con trabajo individual dentro del grupo.
            </p>
          </ServiceCard>

          <ServiceCard
            number="07"
            title="Coaching Personal"
            description="Proceso focalizado en objetivos estratégicos y desarrollo personal:"
            note="No sustituye la psicoterapia cuando existe sufrimiento psicológico profundo."
          >
            <BulletList items={coachingPersonal} />
          </ServiceCard>

          <ServiceCard
            number="08"
            title="Coaching Ejecutivo"
            description="Dirigido a directivos, líderes, empresarios y equipos de trabajo."
          >
            <BulletList items={coachingEjecutivo} />
          </ServiceCard>

          <ServiceCard
            number="09"
            title="Terapia / Coaching del Amor"
            description="Espacio especializado en vínculos y relaciones afectivas:"
          >
            <BulletList items={terapiaAmor} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Incluye procesos de reconstrucción emocional, redefinición de estándares
              afectivos y construcción de vínculos sanos.
            </p>
          </ServiceCard>

          <ServiceCard
            number="10"
            title="Asesoramiento Psicológico Puntual"
            description="Para personas que no desean un proceso terapéutico prolongado:"
          >
            <BulletList items={asesoramiento} />
          </ServiceCard>
        </div>
      </section>

      {/* CTA mid */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            ¿No sabes cuál es el espacio indicado para ti?
          </h2>
          <p className="mt-4 text-lg text-background/75">
            Conversemos. La primera sesión sirve para entender qué necesitas y elegir el
            formato adecuado.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Escríbeme por WhatsApp
            </a>
            <a
              href="tel:+573142044866"
              className="inline-flex items-center rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Psicoterapia o Coaching */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Orientación</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Psicoterapia o Coaching?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-muted/30 p-8">
              <p className="font-serif text-xl text-sage-deep">▸ Elige psicoterapia cuando:</p>
              <BulletList items={eligePsico} />
            </div>
            <div className="rounded-3xl border border-border/60 bg-muted/30 p-8">
              <p className="font-serif text-xl text-sage-deep">▸ Elige coaching cuando:</p>
              <BulletList items={eligeCoaching} />
            </div>
          </div>

          <CTAButtons />
        </div>
      </section>

      {/* Glosario */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Glosario clínico</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Glosario clínico
          </h2>
          <p className="mt-4 italic text-muted-foreground">
            Cada término se despliega para mostrar su definición.
          </p>

          <div className="mt-10 space-y-3">
            {glosario.map((g) => (
              <details
                key={g.term}
                className="group rounded-2xl border border-border/60 bg-background transition-colors hover:bg-background/80 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 sm:px-6">
                  <span className="font-serif text-lg text-sage-deep transition-transform duration-300 group-open:rotate-90">
                    ▸
                  </span>
                  <span className="font-serif text-base text-foreground sm:text-lg">
                    {g.term}
                  </span>
                </summary>
                <div className="border-t border-border/60 px-5 py-5 text-base leading-relaxed text-muted-foreground sm:px-6">
                  {g.def}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-10 text-sm italic text-muted-foreground">
            Nota: Las definiciones presentadas son orientativas y no sustituyen una
            evaluación clínica profesional.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Da el primer paso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una primera conversación para entender qué necesitas y ver si soy la persona
            indicada para acompañarte.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Escríbeme por WhatsApp
            </a>
            <a
              href="tel:+573142044866"
              className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {PHONE_DISPLAY}
            </a>
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
          <Link to="/psicoterapia" className="hover:text-foreground transition-colors">
            Psicoterapia
          </Link>
          <Link
            to="/servicios"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Servicios
          </Link>
          <Link to="/resultados" className="hover:text-foreground transition-colors">
            Resultados
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
