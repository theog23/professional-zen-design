import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import logoImage from "@/assets/diana-logo.png";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Diana Sarmiento Pachón | Agenda tu primera consulta" },
      {
        name: "description",
        content:
          "¿Damos un primer paso? Sesiones presenciales en Bogotá y online en cualquier parte del mundo. Español e inglés.",
      },
      { property: "og:title", content: "Contacto — Diana Sarmiento Pachón" },
      {
        property: "og:description",
        content:
          "Agenda tu primera consulta. Sesiones presenciales en Bogotá y online en cualquier parte del mundo.",
      },
    ],
  }),
  component: Contacto,
});

const PHONE_DISPLAY = "+57 314 204 4866";
const WHATSAPP = `https://wa.me/573142044866?text=${encodeURIComponent(
  "Hola Diana, me gustaría agendar una consulta.",
)}`;

function CTAButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
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
  );
}

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    lugar: "",
    encontraste: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cuerpo = `Hola Diana, soy ${form.nombre}.%0A%0ACorreo: ${form.correo}%0APaís / Ciudad: ${form.lugar}%0ACómo te encontré: ${form.encontraste}%0A%0AQué me trae:%0A${form.mensaje}`;
    window.open(`https://wa.me/573142044866?text=${cuerpo}`, "_blank");
    setEnviado(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">Contacto</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Contacto
          </h1>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-sage-deep lg:text-3xl">
            ¿Damos un primer paso?
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Honorarios */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Honorarios</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Honorarios
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mis honorarios reflejan más de 30 años de formación especializada y un
              modelo de trabajo riguroso y singular. Son acordes a mi experiencia y
              formación internacional — y significativamente más accesibles que los de
              un profesional de perfil equivalente en Europa o Estados Unidos.
            </p>
            <p>
              En perspectiva: un psicoterapeuta de perfil equivalente en Nueva York
              puede cobrar 400 dólares por sesión. Mis honorarios son una fracción de
              eso — y equivalentes a lo que cuesta cualquier consulta con un
              especialista privado de salud en Colombia.
            </p>
            <p className="font-serif text-xl italic text-foreground">
              Todas las sesiones tienen valor profesional — incluida la primera.
            </p>
            <p>
              Trabajo con personas que buscan un proceso serio y entienden que invertir
              en su bienestar psicológico tiene un valor real.
            </p>
          </div>
        </div>
      </section>

      {/* Primera consulta */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">
            Primera consulta
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            ¿Cómo es la primera consulta?
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
            La primera sesión es un espacio de encuentro donde puedes explicar qué te
            trae, qué estás viviendo y qué esperas del proceso. A partir de ahí
            valoramos juntos si hay condiciones para trabajar y cómo orientar el
            proceso.
          </p>
        </div>
      </section>

      {/* Modalidad */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Modalidad</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Modalidad
          </h2>

          <dl className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {[
              { k: "Presencial", v: "Bogotá, Colombia" },
              { k: "Online", v: "Personas en cualquier parte del mundo" },
              { k: "Idiomas", v: "Español e inglés" },
            ].map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <dt className="font-serif text-lg font-medium text-foreground">
                  {row.k}:
                </dt>
                <dd className="text-lg text-muted-foreground">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Escríbeme</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Formulario de contacto
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Completa el formulario y me pondré en contacto contigo a la brevedad.
          </p>

          {enviado ? (
            <div className="mt-12 rounded-2xl border border-sage/30 bg-background p-8 text-center">
              <p className="font-serif text-2xl italic text-sage-deep">
                Mensaje preparado.
              </p>
              <p className="mt-3 text-muted-foreground">
                Se abrió WhatsApp para enviar tu consulta directamente. Si no se abrió,
                puedes escribirme también a{" "}
                <a href={WHATSAPP} className="text-foreground underline">
                  este enlace
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-8">
              <Field
                label="Nombre completo"
                value={form.nombre}
                onChange={(v) => setForm({ ...form, nombre: v })}
                required
              />
              <Field
                label="Correo electrónico"
                type="email"
                value={form.correo}
                onChange={(v) => setForm({ ...form, correo: v })}
                required
              />
              <Field
                label="País / Ciudad"
                value={form.lugar}
                onChange={(v) => setForm({ ...form, lugar: v })}
              />
              <Field
                label="¿Cómo me encontraste?"
                value={form.encontraste}
                onChange={(v) => setForm({ ...form, encontraste: v })}
              />
              <div>
                <label className="block font-serif text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  ¿Qué te trae? Cuéntame brevemente
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="mt-3 w-full border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors focus:border-sage"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
              >
                Enviar mensaje
              </button>

              <p className="pt-4 font-serif text-sm italic text-muted-foreground">
                Toda la información compartida es estrictamente confidencial.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-serif text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors focus:border-sage"
      />
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
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link
            to="/contacto"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
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
