const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "5511999999999";

const WHATSAPP_MSG = encodeURIComponent(
  "Quero começar a revender semijoias, pode me ajudar?",
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string) ||
  "https://www.atacadocirulli.com.br";

function CTA({
  children,
  variant = "primary",
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ink";
  ariaLabel?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-ink text-cream hover:bg-primary hover:text-ink shadow-elegant"
      : "bg-cream text-ink hover:bg-primary";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Falar no WhatsApp para começar agora"}
      className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${styles}`}
    >
      {children}

      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export default function App() {
  return (
    <main className="overflow-x-hidden bg-cream text-ink">
      {/* NAV */}
      <nav
        aria-label="Principal"
        className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md"
      >
        <div className="container-lp flex items-center justify-between py-6">
          <img
            src="/logo-cirulli.png"
            alt="Atacado Cirulli"
            className="h-14 w-auto object-contain md:h-16"
            style={{
              filter: "brightness(0) saturate(100%)",
            }}
          />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-ink/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-cream md:inline-block"
            aria-label="Falar no WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative min-h-screen bg-cream">
        <div className="container-lp grid min-h-screen items-center gap-10 pt-28 pb-16 md:grid-cols-[1.05fr_1fr] md:pt-32 md:pb-24">
          <div className="relative z-10 md:pr-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" aria-hidden />
              <span className="eyebrow text-ink/70">
                Negócio próprio · Para iniciantes
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] text-ink md:text-7xl">
              Comece a lucrar com{" "}
              <em className="text-primary">semijoias</em>
              <br className="hidden md:block" /> mesmo sem experiência.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70 md:text-xl">
              Kits prontos no atacado e suporte real para suas primeiras vendas
              acontecerem em dias — não em meses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <CTA variant="primary">Quero começar agora</CTA>

              <a
                href="#como-funciona"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 underline-offset-8 hover:text-ink hover:underline"
              >
                Ver como funciona
              </a>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              {[
                { v: "2x–3x", l: "Margem" },
                { v: "Dias", l: "1ª venda" },
                { v: "+248", l: "Iniciantes" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl text-ink md:text-3xl">
                    {s.v}
                  </dt>

                  <dd className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-6 -top-6 h-28 w-28 border border-primary/40 md:-left-10 md:-top-10 md:h-40 md:w-40"
            />

            <img
              src="/hero-jewelry.jpg"
              alt="Coleção de semijoias douradas com correntes, brincos e anéis"
              width={1080}
              height={1600}
              fetchPriority="high"
              decoding="async"
              className="relative w-full object-cover shadow-elegant"
            />

            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 hidden bg-ink p-5 text-cream shadow-elegant md:block"
            >
              <p className="font-display text-lg italic">
                "Comecei do zero e
                <br />
                já estou vendendo."
              </p>

              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Mariana — Revendedora
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex items-center gap-12 pr-12">
                {[
                  "Baixo investimento",
                  "Suporte incluso",
                  "Alta margem",
                  "Estoque pronto",
                  "Frete ágil",
                  "Sem experiência",
                  "Mercado validado",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden
                    />

                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}