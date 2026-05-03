import { createFileRoute, Link } from "@tanstack/react-router";

import logoImage from "@/assets/diana-logo.png";

export const Route = createFileRoute("/resultados")({
  head: () => ({
    meta: [
      { title: "Resultados — Diana Sarmiento Pachón | Cambios reales en psicoterapia" },
      {
        name: "description",
        content:
          "Cuando el trabajo terapéutico es serio, los cambios no solo se sienten: se viven. Testimonios y transformaciones reales del proceso psicoterapéutico.",
      },
      { property: "og:title", content: "Resultados — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "Transformaciones reales del proceso terapéutico: comprensión, regulación emocional, identidad sólida y vínculos sanos.",
      },
    ],
  }),
  component: Resultados,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const cambios = [
  "Una comprensión más clara y compasiva de tu propia historia y de cómo influye en tu presente.",
  "Mayor capacidad para reconocer y regular tus emociones sin ser dominado por ellas.",
  "Relaciones más conscientes, estables y satisfactorias.",
  "Una identidad más sólida, menos dependiente de la validación externa.",
  "Mejor toma de decisiones, alineada con tus valores y tu proyecto de vida.",
  "La incorporación de recursos internos que permanecen más allá del proceso terapéutico.",
];

function CTAButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={
          light
            ? "inline-flex items-center rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            : "inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
        }
      >
        Agendar una sesión
      </a>
      <a
        href="tel:+573142044866"
        className={
          light
            ? "inline-flex items-center rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            : "inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        }
      >
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function Resultados() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Resultados</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Resultados
          </h1>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-sage-deep lg:text-3xl">
            Cuando el trabajo terapéutico es serio, los cambios no solo se sienten: se viven.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* ¿Qué puede cambiar contigo? */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">El proceso</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Qué puede cambiar contigo?
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              La psicoterapia no promete soluciones rápidas ni resultados garantizados. Lo
              que sí ofrece, cuando el proceso es riguroso, profundo y sostenido en el
              tiempo, es la posibilidad de una transformación real: no solo alivio
              sintomático, sino un cambio genuino en la manera de pensar, sentir,
              relacionarse y estar en el mundo.
            </p>
            <p>
              Estos son algunos de los cambios que las personas suelen experimentar a lo
              largo del proceso:
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {cambios.map((c, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="font-serif text-lg tabular-nums text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-12 border-l-2 border-sage pl-6 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
            La psicoterapia no solo produce cambios — capacita a la persona para
            convertirse en el arquitecto de su propia mente y de su propio futuro, en
            lugar de quedar dominada por miedos, angustias, traumas o conflictos no
            elaborados.
          </blockquote>

          <CTAButtons />
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Testimonios</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lo que dicen quienes han trabajado conmigo
          </h2>

          <div className="mt-12 space-y-8">
            <article className="rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sage">— Nathalia</p>
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                <span className="mr-1 text-3xl text-sage">&ldquo;</span>
                Mi experiencia en el proceso terapéutico con Diana ha sido muy positiva.
                Desde el inicio ha demostrado un gran profesionalismo, empatía y un
                profundo conocimiento de la psicología, creando un espacio seguro y de
                confianza donde es posible expresarse libremente y sentirse verdaderamente
                escuchado. Gracias a su acompañamiento he podido comprender mejor mis
                emociones y desarrollar herramientas para afrontar distintas situaciones
                de una manera más saludable y consciente. Recomiendo ampliamente el
                trabajo de Diana a quienes buscan un acompañamiento psicológico
                profesional, cercano y de gran calidad.
                <span className="ml-1 text-3xl text-sage">&rdquo;</span>
              </blockquote>
            </article>

            <article className="rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sage">— Betty</p>
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                <span className="mr-1 text-3xl text-sage">&ldquo;</span>
                Diana me ayudó a recuperar la confianza en mí misma, a no perder mi
                dignidad y a fortalecer mi carácter, incluso en los momentos en que yo
                misma no creía en mí. Encontré claridad cuando todo parecía confuso, y me
                sentí escuchada y acompañada en los momentos más difíciles de mi vida.
                <span className="ml-1 text-3xl text-sage">&rdquo;</span>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Confidencialidad</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
            Una nota sobre la confidencialidad
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/80 sm:text-lg">
            Todos los testimonios publicados en esta página han sido compartidos de forma
            voluntaria y con consentimiento explícito de las personas que los han escrito.
            Los nombres utilizados son los que cada persona ha elegido usar libremente.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Empieza tu proceso
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
          <Link to="/servicios" className="hover:text-foreground transition-colors">
            Servicios
          </Link>
          <Link
            to="/resultados"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
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
