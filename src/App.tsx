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
  variant = "gold",
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: "gold" | "ink";
  ariaLabel?: string;
}) {
  const styles =
    variant === "gold"
      ? "bg-ink text-cream hover:bg-gold hover:text-ink shadow-elegant"
      : "bg-cream text-ink hover:bg-gold";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Falar no WhatsApp para começar agora"}
      className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${styles}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

export default function App() {
  return (
    <main className="overflow-x-hidden bg-cream text-ink">
      {/* NAV */}
      <nav aria-label="Principal" className="fixed left-0 right-0 top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-ink/10">
        <div className="container-lp flex items-center justify-between py-6">
          <img
            src="/logo-cirulli.png"
            alt="Atacado Cirulli"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-ink/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-ink hover:text-cream md:inline-block"
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
              <span className="h-px w-10 bg-gold" aria-hidden />
              <span className="eyebrow text-ink/70">Negócio próprio · Para iniciantes</span> 
            </div>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] text-ink md:text-7xl">
              Comece a lucrar com <em className="text-gold">semijoias</em>
              <br className="hidden md:block" /> mesmo sem experiência.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70 md:text-xl">
              Kits prontos no atacado e suporte real para suas primeiras vendas acontecerem em dias — não em meses.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <CTA variant="gold">Quero começar agora</CTA>
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
                  <dt className="font-display text-2xl text-ink md:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -left-6 -top-6 h-28 w-28 border border-gold/40 md:-left-10 md:-top-10 md:h-40 md:w-40" />
            <img
              src="/hero-jewelry.jpg"
              alt="Coleção de semijoias douradas com correntes, brincos e anéis"
              width={1080}
              height={1600}
              fetchPriority="high"
              decoding="async"
              className="relative w-full object-cover shadow-elegant"
            />
            <div aria-hidden className="absolute -bottom-6 -right-6 hidden bg-ink p-5 text-cream shadow-elegant md:block">
              <p className="font-display text-lg italic">"Comecei do zero e<br />já estou vendendo."</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">Mariana — Revendedora</p>
            </div>
          </div>
        </div>

        <div className="border-y border-ink/10 bg-ink py-4 text-cream overflow-hidden">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex items-center gap-12 pr-12">
                {["Baixo investimento", "Suporte incluso", "Alta margem", "Estoque pronto", "Frete ágil", "Sem experiência", "Mercado validado"].map((t) => (
                  <span key={t} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lp grid gap-16 md:grid-cols-[1fr_1.3fr] md:gap-24">
          <div>
            <span className="eyebrow flex items-center gap-3 text-ink/60">
              <span className="h-px w-8 bg-gold" aria-hidden />01 — O dilema
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Você quer renda extra. Só não sabe por onde <em className="text-gold">começar</em>.
            </h2>
          </div>
          <div className="md:pt-4">
            <p className="text-lg leading-relaxed text-ink/70">
              A maioria desiste antes de tentar — por medo, falta de dinheiro ou por não saber o que vender. Faz sentido. Começar do zero é desconfortável.
            </p>
            <ul className="mt-10 grid gap-px bg-ink/10">
              {["Medo de não conseguir vender", "Pouco dinheiro para investir", "Não saber onde encontrar clientes", "Insegurança em começar algo novo"].map((p, i) => (
                <li key={p} className="flex items-baseline gap-6 bg-cream py-5">
                  <span className="font-display text-xs text-gold">0{i + 1}</span>
                  <span className="text-lg text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section id="solucao" className="bg-ink py-24 text-cream md:py-32">
        <div className="container-lp grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative order-2 md:order-1">
            <div aria-hidden className="absolute -right-6 -top-6 h-32 w-32 border border-gold/60" />
            <img
              src="/kit-semijoias.jpg"
              alt="Kit de semijoias com anéis e brincos em seda dourada"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="relative aspect-square w-full object-cover shadow-elegant"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="eyebrow flex items-center gap-3 text-cream/60">
              <span className="h-px w-8 bg-gold" aria-hidden />02 — A solução
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
              Kits prontos, alta demanda. Primeiras vendas em <em className="text-gold">dias</em>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/75">
              Semijoias são fáceis de mostrar, fáceis de vender e têm margem alta. Com o kit certo, você começa hoje — sem estoque parado.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Baixo investimento", d: "Kits pensados pra começar pequeno." },
                { t: "Margem 2x – 3x", d: "Preço de atacado, venda no varejo." },
                { t: "Flexibilidade", d: "WhatsApp, Insta ou presencial." },
                { t: "Demanda contínua", d: "Vende o ano inteiro." },
              ].map((b) => (
                <li key={b.t} className="border-t border-cream/15 pt-4">
                  <p className="font-display text-xl text-gold">{b.t}</p>
                  <p className="mt-2 text-sm text-cream/70">{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-cream py-24 md:py-32">
        <div className="container-lp">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <span className="eyebrow flex items-center gap-3 text-ink/60">
                <span className="h-px w-8 bg-gold" aria-hidden />03 — Como funciona
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
                Em quatro passos, você começa a <em className="text-gold">lucrar</em>.
              </h2>
            </div>
            <p className="max-w-sm text-base text-ink/65 md:text-right">
              Um processo simples, pensado para quem nunca vendeu nada antes.
            </p>
          </div>
          <ol className="mt-16 grid gap-px bg-ink/10 md:grid-cols-4">
            {[
              { t: "Escolha seu kit", d: "Selecione o kit ideal para o seu bolso e perfil." },
              { t: "Receba as peças", d: "Enviamos com agilidade direto para sua casa." },
              { t: "Comece a vender", d: "WhatsApp, Instagram, amigos e família." },
              { t: "Reinvista e cresça", d: "Use o lucro para ampliar seu estoque." },
            ].map((s, i) => (
              <li key={s.t} className="bg-cream p-8">
                <span className="font-display text-4xl text-gold">0{i + 1}</span>
                <p className="mt-6 font-display text-2xl text-ink">{s.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-ink/60">Quem começou do zero está vendendo</span>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-ink md:text-5xl">
              Histórias reais de quem deu o primeiro passo.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { name: "Mariana", role: "Iniciante · 28 anos", text: "Comecei do zero e já estou vendendo todos os dias. O suporte fez toda a diferença." },
              { name: "Carla", role: "Mãe · 34 anos", text: "Investi pouco no primeiro kit e em 2 semanas tirei o valor de volta e ainda lucrei." },
              { name: "Juliana", role: "CLT · 41 anos", text: "Nunca tinha vendido nada. Hoje é minha renda extra fixa todo mês." },
            ].map((d, i) => (
              <figure key={d.name} className={`relative border border-ink/10 bg-white p-8 ${i === 1 ? "md:-translate-y-4 md:shadow-elegant" : ""}`}>
                <div className="font-display text-5xl leading-none text-gold" aria-hidden>"</div>
                <blockquote className="mt-2 font-display text-xl leading-snug text-ink/90 md:text-2xl">{d.text}</blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-4">
                  <p className="font-semibold text-ink">{d.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/55">{d.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-ink py-24 text-cream md:py-32">
        <div className="container-lp grid items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <span className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden />A oferta
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
              Kit inicial acessível.<br />Estoque pronto. <em className="text-gold">Suporte incluso.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-cream/75">
              Você recebe peças validadas, com alta saída — e a gente te orienta em como vender desde o primeiro dia.
            </p>
            <div className="mt-10">
              <CTA variant="ink">Começar agora</CTA>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cream/55">
                Atendimento direto no WhatsApp · Sem compromisso
              </p>
            </div>
          </div>
          <ul className="grid gap-px bg-cream/10">
            {["Kit completo com peças de alta saída", "Preço de atacado real", "Suporte para suas primeiras vendas", "Material de divulgação pronto", "Reposição rápida do estoque"].map((b, i) => (
              <li key={b} className="flex items-baseline gap-6 bg-ink py-5">
                <span className="font-display text-xs text-gold">0{i + 1}</span>
                <span className="text-base text-cream/90 md:text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream py-24 md:py-32">
        <div className="container-lp grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <span className="eyebrow flex items-center gap-3 text-ink/60">
              <span className="h-px w-8 bg-gold" aria-hidden />FAQ
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Antes de você começar.
            </h2>
            <p className="mt-6 max-w-sm text-base text-ink/65">
              Se ficar qualquer dúvida, é só chamar no WhatsApp — a gente responde rápido.
            </p>
          </div>
          <div>
            {[
              { q: "Preciso de experiência para revender?", a: "Não. Nossos kits e o suporte foram pensados exatamente para quem está começando do zero." },
              { q: "Quanto preciso investir?", a: "Temos kits iniciais acessíveis. Você escolhe o que cabe no seu bolso e começa pequeno." },
              { q: "Como eu vendo as peças?", a: "WhatsApp, Instagram, indicação para amigos e família. Te orientamos passo a passo." },
              { q: "Onde encontrar clientes?", a: "Começa no seu círculo próximo e nas redes sociais. A demanda por semijoias é alta o ano inteiro." },
              { q: "E se eu não conseguir vender?", a: "Por isso o suporte é incluso: te ajudamos a destravar as primeiras vendas e ganhar confiança." },
            ].map((f) => (
              <details key={f.q} className="group border-b border-ink/15 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ink md:text-2xl">
                  <span>{f.q}</span>
                  <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center border border-ink/30 text-ink transition group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-ink">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-36">
        <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-gold" />
        <div className="container-lp text-center">
          <span className="eyebrow text-ink/60">Sua vez</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-ink md:text-7xl">
            Sua primeira venda pode ser <em className="text-gold">esta semana</em>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg text-ink/70">
            Fale com a gente no WhatsApp e receba orientação para escolher o kit ideal para você.
          </p>
          <div className="mt-12 flex justify-center">
            <CTA variant="gold">Quero começar agora</CTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-ink py-12 text-cream">
        <div className="container-lp flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo-cirulli.png"
              alt="Atacado Cirulli"
              className="h-14 w-auto object-contain"
            />
            <span className="h-px w-8 bg-cream/30" aria-hidden />
            <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Semijoias no atacado</span>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-cream/70">
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">atacadocirulli.com.br</a>
            <span aria-hidden>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.412 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>
    </main>
  );
}
