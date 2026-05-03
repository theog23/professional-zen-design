import { createFileRoute, Link } from "@tanstack/react-router";

import logoImage from "@/assets/diana-logo.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Diana Sarmiento Pachón | Psicoterapia y procesos de cambio" },
      {
        name: "description",
        content:
          "Artículos de fondo sobre psicoterapia, vínculos, salud mental y procesos de cambio. Escritos desde la práctica clínica real.",
      },
      { property: "og:title", content: "Blog — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "Artículos de fondo sobre psicoterapia, vínculos, salud mental y procesos de cambio.",
      },
    ],
  }),
  component: Blog,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const proximos = [
  "¿Qué es realmente el apego y por qué lo cambia todo?",
  "Dependencia emocional: cuando el amor duele más que ayuda",
  "El síntoma no es el enemigo — es un mensaje",
  "¿Cuándo termina una terapia? El arte del cierre terapéutico",
];

function CTAButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
      >
        Agendar una sesión
      </a>
      <a
        href="tel:+573142044866"
        className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Blog</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Blog
          </h1>
          <p className="mt-8 font-serif text-xl italic leading-snug text-sage-deep lg:text-2xl">
            Artículos de fondo sobre psicoterapia, vínculos, salud mental y procesos de
            cambio. Escritos desde la práctica clínica real, no desde las redes sociales.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Artículo 1 */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article>
            <p className="text-xs uppercase tracking-[0.3em] text-sage">Artículo 1</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              ¿Por qué ningún enfoque solo es suficiente?
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                El psicoanálisis es, para mí, el marco más profundo y completo para
                entender el funcionamiento humano. Pero en su forma más ortodoxa es un
                proceso largo y costoso, y hay situaciones clínicas que no pueden esperar:
                una anorexia, una adicción, un intento de suicidio, una situación de
                violencia requieren intervenciones más rápidas y focalizadas.
              </p>
              <p>
                En el otro extremo, los enfoques cognitivo-conductuales ofrecen
                herramientas eficaces para reducir síntomas, pero corren el riesgo de
                quedarse en la superficie: tratan lo que molesta sin preguntarse qué dice
                ese síntoma, sin ver la sombra del tsunami que hay detrás. Eliminar el
                síntoma sin resolver el conflicto que lo genera es, en el mejor de los
                casos, un alivio temporal.
              </p>
            </div>

            <blockquote className="my-12 border-l-2 border-sage pl-6 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
              La verdadera curación no está en la eliminación de lo que incomoda, sino en
              la resolución de lo que subyace.
            </blockquote>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Eso exige profundidad clínica, criterio diagnóstico y la capacidad de
                moverse entre distintos niveles de intervención según lo que cada caso y
                cada momento requieren.
              </p>
              <p>
                Por eso trabajo desde un modelo Multinivel y Multicomponente: porque la
                complejidad humana no cabe en un solo enfoque, y mis pacientes merecen
                una intervención que esté a la altura de esa complejidad.
              </p>
            </div>
          </article>

          <CTAButtons />
        </div>
      </section>

      {/* Próximos artículos */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Lo que viene</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Próximos artículos
          </h2>

          <ul className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {proximos.map((titulo, i) => (
              <li
                key={i}
                className="flex items-baseline gap-6 py-6"
              >
                <span className="font-serif text-sm tabular-nums text-sage">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="mt-2 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
                    {titulo}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center font-serif text-base italic text-muted-foreground">
            Los artículos se publican periódicamente. Cada uno nace de la práctica clínica
            real.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            ¿Lo leído te resuena?
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
          <Link to="/resultados" className="hover:text-foreground transition-colors">
            Resultados
          </Link>
          <Link
            to="/blog"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Blog
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
