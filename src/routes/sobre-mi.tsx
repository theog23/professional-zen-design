import { createFileRoute, Link } from "@tanstack/react-router";

import logoImage from "@/assets/diana-logo.png";
import portrait from "@/assets/diana-portrait.png";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Diana Sarmiento Pachón | Psicoterapia Integrativa" },
      {
        name: "description",
        content:
          "Más de tres décadas acompañando procesos. Psicoterapia Integrativa Multinivel y Multicomponente con marco clínico riguroso. Certificación EuroPsy / EuroCIP.",
      },
      { property: "og:title", content: "Sobre mí — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "Mi diferencial: Psicoterapia Integrativa Multinivel y Multicomponente. Más de 30 años de formación clínica articulada.",
      },
    ],
  }),
  component: SobreMi,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const niveles = [
  "Los niveles estructurales más profundos — organización de la personalidad, estilos de apego, trauma relacional.",
  "Los conflictos inconscientes y patrones relacionales que se repiten en el tiempo.",
  "Las creencias disfuncionales y esquemas cognitivos que sostienen el sufrimiento.",
  "Las conductas desadaptativas que mantienen el malestar en la vida cotidiana.",
  "Los factores contextuales, ambientales y relacionales que influyen en la experiencia subjetiva.",
  "El fortalecimiento de la mentalización — la capacidad de pensar sobre el propio pensamiento y reconocer estados mentales propios y ajenos.",
];

const formacion = [
  "Psicoanálisis y Psicoterapias Psicoanalíticas — freudiano, lacaniano, relacional y desarrollos contemporáneos.",
  "Mentalización, apego y trauma relacional.",
  "Psicoterapia focal y breve psicoanalítica.",
  "Terapia de Esquemas y modelos integrativos psicodinámico-cognitivos.",
  "Análisis Transaccional.",
  "Terapias Cognitivo-Conductuales, integradas desde una lectura clínica profunda.",
  "Terapias Humanistas y Sistémicas, según indicación clínica.",
  "Terapias de Tercera Generación — DBT, ACT, Mindfulness.",
  "Terapias breves — Estratégica, centrada en el Problema y en la Solución.",
  "Coaching profesional, aplicado de forma ética y complementaria.",
];

function SobreMi() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-16">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Sobre mí</p>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              ¿Por qué hago lo que hago?
            </h1>
            <p className="mt-8 font-serif text-2xl italic leading-snug text-sage-deep lg:text-3xl">
              "Mis pacientes pagan por mi conocimiento. Pero yo pongo el amor."
            </p>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Me formé en todas las ramas de la psicoterapia por una convicción: ningún
                enfoque solo es suficiente para la complejidad de una persona real.
                Aprender todas las lentes disponibles no fue una ambición académica — fue
                una responsabilidad ética hacia quienes confían en mí.
              </p>
              <p>
                Después de más de tres décadas, lo que más me mueve sigue siendo lo mismo:
                acompañar a cada persona a conquistarse a sí misma, a descubrir su valor y
                a construir una vida más libre y consciente. Y algo que pocas veces se
                dice abiertamente: ellos también me transforman a mí.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
              >
                Agendar primera sesión
              </a>
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Ver lo que ofrezco
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/40 shadow-2xl">
              <img
                src={portrait}
                alt="Diana Sarmiento Pachón, psicoterapeuta"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Mi diferencial</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Psicoterapia Integrativa Multinivel y Multicomponente
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mi enfoque no es ecléctico ni una suma indiscriminada de técnicas. Es un
              modelo clínico coherente con marco teórico claro, criterio diagnóstico
              sólido y una articulación rigurosa de los distintos enfoques
              psicoterapéuticos.
            </p>
            <p>
              El eje estructural es la comprensión psicodinámica y psicoanalítica del
              funcionamiento mental, junto con el trabajo en mentalización y los
              constructos personales. Desde esa base se organizan e integran, cuando
              resulta clínicamente pertinente, herramientas cognitivas, conductuales,
              humanistas, sistémicas o de tercera generación — sin perder coherencia ni
              profundidad clínica.
            </p>
            <p className="text-foreground">
              Este modelo permite trabajar de manera articulada distintos niveles del
              malestar psicológico:
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {niveles.map((n, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border/60 bg-background p-6 text-sm leading-relaxed text-muted-foreground shadow-sm"
              >
                <span className="mr-2 font-serif text-sage-deep">0{i + 1}</span>
                {n}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              El síntoma no se entiende como algo aislado a eliminar, sino como una
              manifestación significativa de un conflicto más amplio. El trabajo no se
              limita a suprimirlo — busca comprender su función, su origen y su sentido
              dentro de la historia y el funcionamiento global de la persona.
            </p>
            <p>
              Esta integración no sustituye a los enfoques clásicos. Los articula
              clínicamente, permitiendo un trabajo más completo que el uso aislado de
              cualquier modelo único.
            </p>
          </div>
        </div>
      </section>

      {/* Detalle clínico — colapsable */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <details className="group rounded-2xl border border-border/60 bg-muted/20 transition-colors hover:bg-muted/30 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8">
              <span className="flex items-center gap-3">
                <span className="font-serif text-xl text-sage-deep transition-transform duration-300 group-open:rotate-90">
                  ▸
                </span>
                <span className="font-serif text-lg text-foreground sm:text-xl">
                  Para profundizar: detalle del enfoque clínico
                </span>
              </span>
              <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:inline">
                <span className="group-open:hidden">Abrir</span>
                <span className="hidden group-open:inline">Cerrar</span>
              </span>
            </summary>

            <div className="border-t border-border/60 px-6 py-8 sm:px-8 sm:py-10">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Mi trabajo parte de una comprensión psicodinámica del funcionamiento
                  psicológico, que permite realizar diagnósticos clínicos precisos y
                  comprender los distintos niveles de organización, conflicto y posible
                  daño estructural de la personalidad.
                </p>
                <p className="text-foreground">
                  Desde esta base, el abordaje se desarrolla de manera:
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-sage/30 bg-sage/5 p-8">
                  <h3 className="font-serif text-2xl text-sage-deep">Multinivel</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Trabajando desde los niveles más profundos y estructurales hasta los
                    niveles más manifiestos como síntomas, conductas y dificultades
                    actuales.
                  </p>
                </div>
                <div className="rounded-2xl border border-sage/30 bg-sage/5 p-8">
                  <h3 className="font-serif text-2xl text-sage-deep">Multicomponente</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Integrando herramientas clínicas provenientes de distintas
                    psicoterapias según las necesidades del caso, sin perder coherencia ni
                    profundidad clínica.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                De forma transversal, el proceso terapéutico trabaja y fortalece la
                regulación emocional, la integración psíquica, la autoestima, la
                tolerancia a la frustración, los estilos de apego y la comprensión de las
                estructuras de personalidad.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Formación */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Formación</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Más de tres décadas de formación acreditada
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-background/70">
            Y práctica clínica, desarrollada de manera articulada y jerarquizada — no
            indiscriminada.
          </p>

          <ul className="mt-12 divide-y divide-background/10 border-y border-background/10">
            {formacion.map((f, i) => (
              <li key={i} className="flex gap-6 py-5">
                <span className="font-serif text-sm tabular-nums text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-background/85">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-sage/40 bg-sage/10 px-6 py-3 text-sm tracking-wide">
            <span className="text-xs uppercase tracking-[0.25em] text-sage">
              Certificaciones internacionales
            </span>
            <span className="font-medium text-background">EuroPsy / EuroCIP</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            ¿Hablamos?
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
              href={`tel:+573142044866`}
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
            <span className="font-serif text-xl tracking-tight text-sage-deep">Diana Sarmiento</span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:inline">
              Psicoterapeuta
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link
            to="/sobre-mi"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Sobre mí
          </Link>
          <Link to="/psicoterapia" className="hover:text-foreground transition-colors">
            Psicoterapia
          </Link>
          <Link to="/servicios" className="hover:text-foreground transition-colors">
            Servicios
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
