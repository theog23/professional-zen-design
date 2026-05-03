import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-office.jpg";
import logoImage from "@/assets/diana-logo.png";
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
  {
    title: "Terapia individual",
    desc: "El espacio más profundo para entenderte y transformarte.",
  },
  {
    title: "Terapia de pareja",
    desc: "Trabajar juntos lo que solos no se puede.",
  },
  {
    title: "Niños y adolescentes",
    desc: "Acompañamiento especializado en etapas clave.",
  },
  {
    title: "Grupos y procesos colectivos",
    desc: "Dinámicas compartidas con trabajo individual.",
  },
  {
    title: "Coaching personal y ejecutivo",
    desc: "Claridad y decisiones cuando no hay patología clínica.",
  },
];

const testimonials = [
  {
    text: "Creó un espacio seguro donde es posible expresarse libremente y sentirse verdaderamente escuchado. Gracias a su acompañamiento he podido comprender mejor mis emociones y desarrollar herramientas para afrontar distintas situaciones de una manera más saludable y consciente.",
    name: "Nathalia",
  },
  {
    text: "Me ayudó a recuperar la confianza en mí misma, incluso en los momentos en que yo misma no creía en mí. Encontré claridad cuando todo parecía confuso, y me sentí escuchada y acompañada en los momentos más difíciles de mi vida.",
    name: "Betty",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustStrip />
      <WhatChanges />
      <Services />
      <MidCTA />
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
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoImage} alt="Diana Sarmiento Pachón - Psicoterapia Integrativa" className="h-14 w-auto" />
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-sage-deep">Diana Sarmiento</span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:inline">
              Psicoterapeuta
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#cambio" className="hover:text-foreground transition-colors">El proceso</a>
          <Link to="/sobre-mi" className="hover:text-foreground transition-colors">Sobre mí</Link>
          <Link to="/psicoterapia" className="hover:text-foreground transition-colors">Psicoterapia</Link>
          <Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link>
          <Link to="/resultados" className="hover:text-foreground transition-colors">Resultados</Link>
          <a href="#servicios" className="hover:text-foreground transition-colors">Lo que ofrezco</a>
          <a href="#testimonios" className="hover:text-foreground transition-colors">Testimonios</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-4 lg:grid-cols-12 lg:gap-16 lg:pb-32 lg:pt-6">
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sage">
            <span className="h-px w-10 bg-sage" />
            Psicoterapeuta · Psicóloga Clínica
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Diana Sarmiento <em className="text-sage-deep">Pachón</em>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-2xl italic leading-snug text-sage-deep">
            «Mis pacientes pagan por mi conocimiento. Pero yo pongo el amor.»
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Más de 30 años acompañando a personas a conquistarse a sí mismas,
            descubrir su valor y construir una vida más libre y consciente.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Trabajo de forma presencial y online, en español e inglés, con
            personas en distintas partes del mundo.
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
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver lo que ofrezco
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-sage-deep underline-offset-4 hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span>· Presencial y online</span>
            <span>· Español e inglés</span>
            <span>· 30+ años de experiencia</span>
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
          <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-sm bg-card p-5 shadow-lg ring-1 ring-border lg:block">
            <p className="font-serif text-2xl leading-tight text-sage-deep">30+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Años acompañando procesos
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-sage-deep hover:underline"
            >
              Hablemos →
            </a>
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

function WhatChanges() {
  return (
    <section id="cambio" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
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
          <p className="text-xs uppercase tracking-[0.3em] text-sage">El proceso</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            ¿Qué puede cambiar contigo?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/90">
            No prometo soluciones rápidas. Lo que sí ofrezco es un proceso
            serio, profundo y personalizado que genera cambios reales —
            no solo alivio temporal, sino una transformación genuina en cómo
            piensas, sientes y te relacionas.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Comenzar mi proceso
              <span aria-hidden>→</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver modalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Lo que ofrezco</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Cinco maneras de acompañarte.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Modalidad presencial y online · Español e inglés · Personas en
            cualquier parte del mundo.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary/40"
            >
              <span className="font-serif text-xs text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sage-deep transition-opacity hover:opacity-80"
              >
                Consultar <span aria-hidden>→</span>
              </a>
            </article>
          ))}
          <article className="flex flex-col justify-between bg-sage-deep p-8 text-primary-foreground">
            <div>
              <span className="font-serif text-xs text-primary-foreground/70">→</span>
              <h3 className="mt-4 font-serif text-2xl">¿No sabes por dónde empezar?</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                Conversemos. Una primera llamada permite definir el camino más
                adecuado para ti.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary-foreground hover:underline"
            >
              Escribirme <span aria-hidden>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <p className="font-serif text-2xl text-foreground sm:text-3xl">
          Da el primer paso. Hoy.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
          >
            Escribir por WhatsApp →
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Llamar {PHONE_DISPLAY}
          </a>
        </div>
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
            Lo que dicen quienes han trabajado conmigo.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-primary-foreground/15 pt-8">
              <blockquote>
                <p className="font-serif text-lg italic leading-relaxed text-primary-foreground/90">
                  «{t.text}»
                </p>
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-sage-deep transition-colors hover:bg-background/90"
          >
            Quiero comenzar mi proceso →
          </a>
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
          <p className="text-xs uppercase tracking-[0.3em] text-sage">¿Hablamos?</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Todas las sesiones tienen valor profesional — incluida la primera.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Presencial y online · Español e inglés · Personas en cualquier
            parte del mundo.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              Contactar
              <span aria-hidden>→</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
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
              Psicoterapeuta · Psicóloga Clínica
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
