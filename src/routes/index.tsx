import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-office.jpg";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+573142044866";
const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

const services = [
  { title: "Ansiedad y estrés", desc: "Recuperar la calma y el equilibrio frente a la sobrecarga emocional." },
  { title: "Terapia de pareja", desc: "Reconstruir la comunicación, el vínculo y la confianza mutua." },
  { title: "Duelo y pérdidas", desc: "Acompañamiento sereno para atravesar momentos difíciles." },
  { title: "Depresión y estados de ánimo", desc: "Comprender y transformar lo que hoy pesa." },
  { title: "Autoestima y desarrollo personal", desc: "Reconocer tu valor y construir una vida con propósito." },
  { title: "Coaching profesional", desc: "Orientación para decisiones laborales y de carrera." },
];

const credentials = [
  { year: "1997", text: "Psicóloga — Pontificia Universidad Javeriana" },
  { year: "2000", text: "Máster en Psicoterapia Psicoanalítica — Universidad Complutense de Madrid" },
  { year: "2012", text: "Máster en Psicología Clínica y de la Salud — Universidad de Valencia" },
  { year: "2013", text: "Máster en Psicoterapia Cognitivo Conductual — COP Valencia" },
  { year: "2014", text: "Psicóloga Especialista en Coaching (PEC) — COP Valencia" },
  { year: "2015", text: "Máster en Psicoterapia Humanista Integrativa — Instituto Galene" },
];

const testimonials = [
  {
    text: "Empecé el proceso en un momento difícil. Diana me recibió con calidez y sin juicio. Hoy me siento empoderada y con herramientas reales para mi vida.",
    name: "Betty Carolina",
  },
  {
    text: "Un proceso interesante, creativo y diferente. Aprendí a comunicarme de forma asertiva y a soltar el drama. Gracias.",
    name: "Dinah Ortiz",
  },
  {
    text: "Gracias a la psicoterapia he podido encontrarme conmigo misma, crecer y descubrir que somos inmensos por el solo hecho de existir.",
    name: "Jeannethe Ardila",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustStrip />
      <About />
      <Approach />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-sage-deep">Diana Sarmiento</span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Psicología clínica
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sobre-mi" className="hover:text-foreground transition-colors">Sobre mí</a>
          <a href="#enfoque" className="hover:text-foreground transition-colors">Enfoque</a>
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#testimonios" className="hover:text-foreground transition-colors">Testimonios</a>
        </nav>
        <a
          href="#contacto"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-4 lg:grid-cols-12 lg:gap-16 lg:pb-32 lg:pt-6">
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sage">
            <span className="h-px w-10 bg-sage" />
            Psicóloga clínica · Bogotá
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Un espacio sereno para
            <em className="text-sage-deep"> reencontrarte</em> contigo.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Psicoterapia integrativa diseñada a la medida de cada persona.
            Más de 25 años acompañando procesos de cambio profundo, con
            sesiones online y presenciales en Bogotá.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-sage-deep"
            >
              Agendar primera sesión
              <span aria-hidden>→</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span>· Certificado Europsy</span>
            <span>· U. Javeriana</span>
            <span>· U. Complutense de Madrid</span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={heroImage}
              alt="Espacio de consulta de psicoterapia, cálido y minimalista"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-sm bg-card p-5 shadow-lg ring-1 ring-border lg:block">
            <p className="font-serif text-2xl leading-tight text-sage-deep">25+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Años de experiencia clínica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Universidad Javeriana",
    "U. Complutense Madrid",
    "U. de Valencia",
    "Certificado Europsy",
    "Instituto Galene",
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={portrait}
              alt="Retrato editorial de manos sosteniendo una libreta"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Sobre mí</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Cada persona merece un tratamiento hecho a su medida.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Soy Diana Sarmiento Pachón, psicóloga clínica con más de dos décadas
            de práctica entre España y Colombia. Mi formación integra distintas
            corrientes —psicoanalítica, cognitivo conductual, humanista
            integrativa y coaching— para construir contigo un proceso terapéutico
            verdaderamente personal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No creo en fórmulas. Creo en la escucha atenta, en el respeto por tu
            historia y en herramientas eficaces que se adaptan a quién eres hoy.
          </p>

          <ul className="mt-12 space-y-5">
            {credentials.map((c) => (
              <li key={c.year} className="flex gap-6 border-b border-border/60 pb-5">
                <span className="font-serif text-lg text-sage-deep w-16 shrink-0">{c.year}</span>
                <span className="text-sm leading-relaxed text-foreground/90">{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="enfoque" className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-sage">El enfoque</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Terapia integrativa multicomponente.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              Una psicoterapia más breve que el psicoanálisis y más profunda
              que la cognitivo conductual. No te ajusto a un método: estructuro
              la solución según tu personalidad, tus fortalezas y aquello que
              hoy te pesa.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {[
                { n: "01", t: "Personal", d: "Cada proceso se diseña para tu historia, tu ritmo y tus objetivos." },
                { n: "02", t: "Profundo", d: "Trabajamos el síntoma y, sobre todo, lo que lo origina." },
                { n: "03", t: "Eficaz", d: "Combinamos herramientas validadas: humanista, cognitiva, coaching." },
                { n: "04", t: "Duradero", d: "Aprendes habilidades para sostener el cambio mucho después de terminar." },
              ].map((b) => (
                <div key={b.n}>
                  <span className="font-serif text-sm text-sage">{b.n}</span>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-sage">Servicios</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          En qué puedo acompañarte.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Sesiones individuales, de pareja y grupales. Modalidad online por
          videollamada o presencial en Bogotá.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group bg-background p-8 transition-colors hover:bg-secondary/40"
          >
            <span className="font-serif text-xs text-sage">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sage-deep opacity-0 transition-opacity group-hover:opacity-100">
              Consultar <span aria-hidden>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="bg-sage-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            Testimonios
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Procesos reales, transformaciones duraderas.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-primary-foreground/15 pt-8">
              <blockquote>
                <p className="font-serif text-lg italic leading-relaxed text-primary-foreground/90">
                  “{t.text}”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Primer paso</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Pedir ayuda es el comienzo del cambio.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Conversemos sobre lo que estás viviendo. Una primera llamada
            permite conocernos y definir si la terapia es el camino adecuado
            para ti en este momento.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="space-y-4 rounded-sm border border-border bg-card p-8">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Escribir por WhatsApp <span aria-hidden>→</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-between rounded-sm border border-border px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Llamar {PHONE_DISPLAY} <span aria-hidden>→</span>
            </a>
            <p className="pt-4 text-xs leading-relaxed text-muted-foreground">
              Respondo personalmente a cada mensaje. Toda consulta es
              estrictamente confidencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-lg text-sage-deep">Diana Sarmiento Pachón</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Psicología clínica · Bogotá
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-muted-foreground">
            <a href={`tel:${PHONE}`} className="hover:text-foreground">{PHONE_DISPLAY}</a>
            <a
              href="https://www.facebook.com/pg/dianasarmientopsicologia/posts/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/diana-sarmiento-pach%C3%B3n-33180686/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Diana Sarmiento Pachón. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-sage-deep/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.83 11.83 0 005.65 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.45zM12.05 21.5h-.01a9.66 9.66 0 01-4.92-1.35l-.35-.21-3.79.99 1.01-3.7-.23-.38a9.65 9.65 0 01-1.48-5.13c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.02 1.01 6.85 2.84a9.62 9.62 0 012.84 6.86c0 5.34-4.35 9.69-9.62 9.77zm5.31-7.26c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.2 3.01c.15.19 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
      </svg>
    </a>
  );
}
