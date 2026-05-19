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
      <nav className="fixed left-0 right-0 top-0 z-50 h-[96px] md:h-[120px] bg-cream/80 backdrop-blur-md border-b border-ink/10">
        <div className="container-lp flex items-center justify-between h-full">
          <img
  src="/logo-cirulli.png"
  alt="Atacado Cirulli"
  className="h-[75px] md:h-[100px] w-auto object-contain"
/>
          <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar no WhatsApp"
  className="
    inline-flex items-center justify-center
    gap-[6px]
    rounded-full
    bg-gold
    px-[14px] py-[8px]
    text-[11px] md:text-[13px]
    font-semibold uppercase tracking-[1.8px]
    text-ink
    shadow-md shadow-gold/20
    transition-all duration-300
    hover:scale-[1.03]
    hover:bg-gold/90
    hover:shadow-lg hover:shadow-gold/30
    active:scale-[0.98]

    md:px-[18px] md:py-[10px]
    md:gap-[8px]
    md:tracking-[2px]
  "
>
  <span className="md:hidden">WhatsApp</span>
  <span className="hidden md:inline">Falar no WhatsApp</span>
</a>
        </div>
      </nav>

      {/* HERO */}
<header className="relative min-h-screen bg-cream pt-[25px] md:pt-[50px]">

  <div className="container-lp grid min-h-screen items-center gap-[40px] pt-[112px] pb-[64px] md:grid-cols-[1.05fr_1fr] md:gap-[60px] md:pt-[128px] md:pb-[96px]">

    {/* TEXTO */}
    <div className="relative z-10 md:pr-[32px]">

      <div className="flex items-center gap-[12px]">
        <span className="h-px w-[40px] bg-gold" aria-hidden />
        <span className="text-[12px] font-medium text-ink/70 tracking-[0.5px]">
          Negócio próprio · Para iniciantes
        </span>
      </div>

      {/* MOBILE TITLE */}
      <h1 className="mt-[24px] text-[42px] leading-[1.02] text-ink md:hidden">
        Comece a lucrar com <em className="text-gold">semijoias</em>
        <br /> mesmo sem experiência.
      </h1>

      {/* DESKTOP TITLE */}
      <h1 className="hidden md:block mt-[24px] text-[72px] leading-[1.02] text-ink">
        Comece a lucrar com <em className="text-gold">semijoias</em>
        <br /> mesmo sem experiência.
      </h1>

      {/* MOBILE DESCRIPTION */}
      <p className="mt-[28px] text-[16px] leading-[1.6] text-ink/70 md:hidden">
        Kits prontos no atacado e suporte real para suas primeiras vendas acontecerem em dias — não em meses.
      </p>

      {/* DESKTOP DESCRIPTION */}
      <p className="hidden md:block mt-[28px] text-[20px] leading-[1.6] text-ink/70 max-w-[520px]">
        Kits prontos no atacado e suporte real para suas primeiras vendas acontecerem em dias — não em meses.
      </p>

      <div className="mt-[40px] flex flex-wrap items-center gap-[20px]">
        <CTA variant="gold">Quero começar agora</CTA>

        <a
          href="#como-funciona"
          className="text-[12px] font-semibold uppercase tracking-[2px] text-ink/70 underline-offset-8 hover:text-ink hover:underline"
        >
          Ver como funciona
        </a>
      </div>

      <dl className="mt-[56px] border-t border-ink/10 pt-[24px]">

  {/* MOBILE: 2x2 (mais confortável) */}
  <div className="grid grid-cols-2 gap-[20px] md:hidden">

    {[
      { v: "2x–3x", l: "Margem" },
      { v: "Dias", l: "1ª venda" },
      { v: "+248", l: "Iniciantes" },
    ].map((s) => (
      <div key={s.l} className="text-center">

        <dt className="text-[26px] text-ink leading-[1]">
          {s.v}
        </dt>

        <dd className="mt-[6px] text-[11px] font-semibold uppercase tracking-[2px] text-ink/60">
          {s.l}
        </dd>

      </div>
    ))}

  </div>

  {/* DESKTOP: mantém 3 colunas */}
  <div className="hidden md:grid max-w-[420px] grid-cols-3 gap-[24px]">

    {[
      { v: "2x–3x", l: "Margem" },
      { v: "Dias", l: "1ª venda" },
      { v: "+248", l: "Iniciantes" },
    ].map((s) => (
      <div key={s.l}>

        <dt className="text-[32px] text-ink leading-[1]">
          {s.v}
        </dt>

        <dd className="mt-[4px] text-[11px] font-semibold uppercase tracking-[2px] text-ink/60">
          {s.l}
        </dd>

      </div>
    ))}

  </div>

</dl>
    </div>

    {/* IMAGEM */}
    <div className="relative">

      <div
        aria-hidden
        className="absolute -left-[24px] -top-[24px] h-[112px] w-[112px] border border-gold/40 md:-left-[40px] md:-top-[40px] md:h-[160px] md:w-[160px]"
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

      {/* TESTEMUNHO DESKTOP */}
      <div
        aria-hidden
        className="absolute -bottom-[24px] -right-[24px] hidden bg-ink p-[20px] text-cream shadow-elegant md:block"
      >
        <p className="text-[18px] italic leading-[1.2]">
          "Comecei do zero e<br />já estou vendendo."
        </p>
        <p className="mt-[8px] text-[10px] font-semibold uppercase tracking-[2px] text-gold">
          Mariana — Revendedora
        </p>
      </div>

    </div>
  </div>

  {/* MARQUEE */}
  <div className="border-y border-ink/10 bg-ink py-[16px] text-cream overflow-hidden">

    <div className="marquee flex w-max gap-[48px] whitespace-nowrap">

      {Array.from({ length: 2 }).map((_, j) => (
        <div key={j} className="flex items-center gap-[48px] pr-[48px]">

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
              className="flex items-center gap-[12px] text-[11px] font-semibold uppercase tracking-[3px]"
            >
              <span className="h-[6px] w-[6px] rounded-full bg-gold" aria-hidden />
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
</header>

      {/* PROBLEMA */}
<section className="relative bg-cream py-[96px] md:py-[140px] overflow-hidden">

  <div className="container-lp grid gap-[64px] md:grid-cols-[1fr_1.35fr] md:gap-[100px]">

    {/* COLUNA ESQUERDA */}
    <div>

      <span className="inline-flex items-center gap-[12px] text-[12px] text-ink/60 tracking-[0.2em] uppercase">
        <span className="h-px w-[36px] bg-gold" aria-hidden />
        01 — O dilema
      </span>

      {/* TITLE */}
      <h2 className="mt-[28px] text-[36px] leading-[1.05] text-ink md:text-[58px]">
        Você quer renda extra. Só não sabe por onde
        <br />
        <em className="text-gold not-italic relative inline-block mt-[6px]">
          começar
          <span className="absolute -bottom-[6px] left-0 h-[3px] w-full bg-gold/30" />
        </em>
        .
      </h2>

    </div>

    {/* COLUNA DIREITA */}
    <div className="md:pt-[10px]">

      {/* TEXTO (VOLTOU PRA DIREITA) */}
      <p className="text-[16px] leading-[1.75] text-ink/70 md:text-[18px] max-w-[620px]">
        A maioria desiste antes de tentar — por medo, falta de dinheiro ou por não saber o que vender. Faz sentido. Começar do zero é desconfortável.
      </p>

      {/* CARDS */}
      <div className="mt-[44px] grid gap-[14px]">

        {[
          "Medo de não conseguir vender",
          "Pouco dinheiro para investir",
          "Não saber onde encontrar clientes",
          "Insegurança em começar algo novo",
        ].map((item, i) => (
          <div
            key={item}
            className="group flex items-center gap-[16px] rounded-[14px] border border-ink/10 bg-white/40 px-[18px] py-[16px] backdrop-blur-sm transition hover:border-gold/30 hover:bg-white/60"
          >
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-gold/10 text-[12px] font-semibold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="text-[15px] md:text-[17px] text-ink/80 group-hover:text-ink transition">
              {item}
            </span>

            <span className="ml-auto text-gold/0 group-hover:text-gold transition">
              →
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

      {/* SOLUÇÃO */}
<section id="solucao" className="bg-ink py-[96px] text-cream md:py-[128px]">

  <div className="container-lp grid items-center gap-[56px] md:grid-cols-2 md:gap-[80px]">

    {/* IMAGEM */}
    <div className="relative md:order-1">

      <div
        aria-hidden
        className="absolute -right-[24px] -top-[24px] h-[128px] w-[128px] border border-gold/60"
      />

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

    {/* TEXTO */}
    <div className="md:order-2">

      <span className="eyebrow flex items-center gap-[12px] text-[12px] text-cream/60 tracking-[1px]">
        <span className="h-px w-[32px] bg-gold" aria-hidden />
        02 — A solução
      </span>

      {/* MOBILE TITLE */}
      <h2 className="mt-[24px] text-[34px] leading-[1.05] text-cream md:hidden">
        Kits prontos, alta demanda. Primeiras vendas em <em className="text-gold">dias</em>.
      </h2>

      {/* DESKTOP TITLE */}
      <h2 className="hidden md:block mt-[24px] text-[56px] leading-[1.05] text-cream">
        Kits prontos, alta demanda. Primeiras vendas em <em className="text-gold">dias</em>.
      </h2>

      {/* MOBILE TEXT */}
      <p className="mt-[24px] text-[16px] leading-[1.7] text-cream/75 md:hidden">
        Semijoias são fáceis de mostrar, fáceis de vender e têm margem alta. Com o kit certo, você começa hoje — sem estoque parado.
      </p>

      {/* DESKTOP TEXT */}
      <p className="hidden md:block mt-[24px] text-[18px] leading-[1.7] text-cream/75 max-w-[560px]">
        Semijoias são fáceis de mostrar, fáceis de vender e têm margem alta. Com o kit certo, você começa hoje — sem estoque parado.
      </p>

      {/* BENEFÍCIOS */}
      <ul className="mt-[40px] grid gap-[16px] sm:grid-cols-2">

        {[
          { t: "Baixo investimento", d: "Kits pensados pra começar pequeno." },
          { t: "Margem 2x – 3x", d: "Preço de atacado, venda no varejo." },
          { t: "Flexibilidade", d: "WhatsApp, Insta ou presencial." },
          { t: "Demanda contínua", d: "Vende o ano inteiro." },
        ].map((b) => (
          <li
            key={b.t}
            className="border-t border-cream/15 pt-[16px]"
          >
            <p className="text-[20px] text-gold">
              {b.t}
            </p>

            <p className="mt-[8px] text-[13px] leading-[1.6] text-cream/70">
              {b.d}
            </p>
          </li>
        ))}

      </ul>

    </div>
  </div>
</section>

      {/* COMO FUNCIONA */}
<section id="como-funciona" className="relative bg-cream py-[96px] md:py-[140px] overflow-hidden">

  {/* glow suave */}
  <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

  <div className="container-lp">

    {/* HEADER */}
    <div className="grid items-end gap-[24px] md:grid-cols-[1fr_auto] md:gap-[48px]">

      <div>

        <span className="inline-flex items-center gap-[12px] text-[12px] text-ink/60 tracking-[0.2em] uppercase">
          <span className="h-px w-[36px] bg-gold" aria-hidden />
          03 — Como funciona
        </span>

        <h2 className="mt-[28px] text-[36px] leading-[1.05] text-ink md:text-[58px]">
          Em quatro passos, você começa a{" "}
          <em className="text-gold not-italic relative inline-block">
            lucrar
            <span className="absolute -bottom-[6px] left-0 h-[3px] w-full bg-gold/30" />
          </em>
          .
        </h2>

      </div>

      <p className="max-w-[360px] text-[14px] leading-[1.7] text-ink/65 md:text-right md:text-[16px]">
        Um processo simples, pensado para quem nunca vendeu nada antes.
      </p>

    </div>

    {/* STEPS */}
    <ol className="mt-[64px] grid gap-[18px] md:grid-cols-4">

      {[
        { t: "Escolha seu kit", d: "Selecione o kit ideal para o seu bolso e perfil." },
        { t: "Receba as peças", d: "Enviamos com agilidade direto para sua casa." },
        { t: "Comece a vender", d: "WhatsApp, Instagram, amigos e família." },
        { t: "Reinvista e cresça", d: "Use o lucro para ampliar seu estoque." },
      ].map((s, i) => (
        <li
          key={s.t}
          className="group relative rounded-[18px] border border-ink/10 bg-white/40 p-[28px] backdrop-blur-sm transition hover:border-gold/30 hover:bg-white/60 md:p-[32px]"
        >

          {/* número estilizado */}
          <div className="flex items-center justify-between">
            <span className="text-[42px] md:text-[48px] font-light text-gold/80">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="text-gold/0 transition group-hover:text-gold">
              →
            </span>
          </div>

          {/* título */}
          <h3 className="mt-[18px] text-[18px] md:text-[22px] text-ink font-medium leading-[1.2]">
            {s.t}
          </h3>

          {/* descrição */}
          <p className="mt-[10px] text-[13px] md:text-[14px] leading-[1.7] text-ink/65">
            {s.d}
          </p>

          {/* linha decorativa sutil */}
          <div className="mt-[18px] h-px w-full bg-gradient-to-r from-gold/20 to-transparent" />

        </li>
      ))}

    </ol>

  </div>
</section>

      {/* PROVA SOCIAL */}
<section className="bg-cream pb-[96px] md:pb-[128px]">

  <div className="container-lp">

    {/* HEADER */}
    <div className="mx-auto max-w-[720px] text-center">

      <span className="eyebrow text-[12px] text-ink/60 tracking-[1px]">
        Quem começou do zero está vendendo
      </span>

      {/* MOBILE TITLE */}
      <h2 className="mt-[20px] text-[28px] leading-[1.1] text-ink md:hidden">
        Histórias reais de quem deu o primeiro passo.
      </h2>

      {/* DESKTOP TITLE */}
      <h2 className="hidden md:block mt-[20px] text-[48px] leading-[1.1] text-ink">
        Histórias reais de quem deu o primeiro passo.
      </h2>

    </div>

    {/* CARDS */}
    <div className="mt-[64px] grid gap-[24px] md:grid-cols-3">

      {[
        {
          name: "Mariana",
          role: "Iniciante · 28 anos",
          text:
            "Comecei do zero e já estou vendendo todos os dias. O suporte fez toda a diferença.",
        },
        {
          name: "Carla",
          role: "Mãe · 34 anos",
          text:
            "Investi pouco no primeiro kit e em 2 semanas tirei o valor de volta e ainda lucrei.",
        },
        {
          name: "Juliana",
          role: "CLT · 41 anos",
          text:
            "Nunca tinha vendido nada. Hoje é minha renda extra fixa todo mês.",
        },
      ].map((d, i) => (
        <figure
          key={d.name}
          className={`relative border border-ink/10 bg-white p-[28px] md:p-[32px] ${
            i === 1 ? "md:-translate-y-[16px] md:shadow-elegant" : ""
          }`}
        >

          <div
            className="text-[44px] leading-none text-gold"
            aria-hidden
          >
            "
          </div>

          <blockquote className="mt-[8px] text-[18px] md:text-[22px] leading-[1.4] text-ink/90">
            {d.text}
          </blockquote>

          <figcaption className="mt-[28px] border-t border-ink/10 pt-[16px]">

            <p className="text-[14px] font-semibold text-ink">
              {d.name}
            </p>

            <p className="mt-[4px] text-[11px] uppercase tracking-[2px] text-ink/55">
              {d.role}
            </p>

          </figcaption>

        </figure>
      ))}

    </div>
  </div>
</section>

      {/* OFERTA */}
<section id="oferta" className="bg-ink py-[96px] text-cream md:py-[128px]">

  <div className="container-lp grid items-center gap-[56px] md:grid-cols-[1.1fr_1fr] md:gap-[80px]">

    {/* TEXTO */}
    <div>

      <span className="eyebrow flex items-center gap-[12px] text-[12px] text-gold tracking-[1px]">
        <span className="h-px w-[32px] bg-gold" aria-hidden />
        A oferta
      </span>

      {/* MOBILE TITLE */}
      <h2 className="mt-[24px] text-[34px] leading-[1.05] text-cream md:hidden">
        Kit inicial acessível.<br />Estoque pronto. <em className="text-gold">Suporte incluso.</em>
      </h2>

      {/* DESKTOP TITLE */}
      <h2 className="hidden md:block mt-[24px] text-[56px] leading-[1.05] text-cream">
        Kit inicial acessível.<br />Estoque pronto. <em className="text-gold">Suporte incluso.</em>
      </h2>

      {/* MOBILE TEXT */}
      <p className="mt-[24px] text-[16px] leading-[1.7] text-cream/75 md:hidden">
        Você recebe peças validadas, com alta saída — e a gente te orienta em como vender desde o primeiro dia.
      </p>

      {/* DESKTOP TEXT */}
      <p className="hidden md:block mt-[24px] text-[18px] leading-[1.7] text-cream/75 max-w-[520px]">
        Você recebe peças validadas, com alta saída — e a gente te orienta em como vender desde o primeiro dia.
      </p>

      <div className="mt-[40px]">

        <CTA variant="ink">Começar agora</CTA>

        <p className="mt-[16px] text-[11px] uppercase tracking-[2px] text-cream/55">
          Atendimento direto no WhatsApp · Sem compromisso
        </p>

      </div>

    </div>

    {/* LISTA */}
    <ul className="grid gap-px bg-cream/10">

      {[
        "Kit completo com peças de alta saída",
        "Preço de atacado real",
        "Suporte para suas primeiras vendas",
        "Material de divulgação pronto",
        "Reposição rápida do estoque",
      ].map((b, i) => (
        <li
          key={b}
          className="flex items-center gap-[24px] bg-ink py-[20px] px-[16px]"
        >

          <span className="text-[12px] text-gold">
            0{i + 1}
          </span>

          <span className="text-[15px] md:text-[17px] leading-[1.6] text-cream/90">
            {b}
          </span>

        </li>
      ))}

    </ul>

  </div>
</section>

      {/* FAQ */}
<section id="faq" className="bg-cream py-[96px] md:py-[128px]">

  <div className="container-lp grid gap-[56px] md:grid-cols-[1fr_1.4fr] md:gap-[80px]">

    {/* TEXTO */}
    <div>

      <span className="eyebrow flex items-center gap-[12px] text-[12px] text-ink/60 tracking-[1px]">
        <span className="h-px w-[32px] bg-gold" aria-hidden />
        FAQ
      </span>

      {/* MOBILE TITLE */}
      <h2 className="mt-[24px] text-[34px] leading-[1.05] text-ink md:hidden">
        Antes de você começar.
      </h2>

      {/* DESKTOP TITLE */}
      <h2 className="hidden md:block mt-[24px] text-[56px] leading-[1.05] text-ink">
        Antes de você começar.
      </h2>

      {/* MOBILE TEXT */}
      <p className="mt-[24px] text-[15px] leading-[1.7] text-ink/65 md:hidden">
        Se ficar qualquer dúvida, é só chamar no WhatsApp — a gente responde rápido.
      </p>

      {/* DESKTOP TEXT */}
      <p className="hidden md:block mt-[24px] text-[16px] leading-[1.7] text-ink/65 max-w-[360px]">
        Se ficar qualquer dúvida, é só chamar no WhatsApp — a gente responde rápido.
      </p>

    </div>

    {/* FAQ LIST */}
    <div>

      {[
        {
          q: "Preciso de experiência para revender?",
          a: "Não. Nossos kits e o suporte foram pensados exatamente para quem está começando do zero.",
        },
        {
          q: "Quanto preciso investir?",
          a: "Temos kits iniciais acessíveis. Você escolhe o que cabe no seu bolso e começa pequeno.",
        },
        {
          q: "Como eu vendo as peças?",
          a: "WhatsApp, Instagram, indicação para amigos e família. Te orientamos passo a passo.",
        },
        {
          q: "Onde encontrar clientes?",
          a: "Começa no seu círculo próximo e nas redes sociais. A demanda por semijoias é alta o ano inteiro.",
        },
        {
          q: "E se eu não conseguir vender?",
          a: "Por isso o suporte é incluso: te ajudamos a destravar as primeiras vendas e ganhar confiança.",
        },
      ].map((f) => (
        <details
          key={f.q}
          className="group border-b border-ink/15 py-[20px]"
        >

          <summary className="flex cursor-pointer list-none items-center justify-between gap-[24px] text-[18px] md:text-[22px] text-ink">

            <span>{f.q}</span>

            <span
              aria-hidden
              className="grid h-[32px] w-[32px] shrink-0 place-items-center border border-ink/30 text-ink transition group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-ink"
            >
              +
            </span>

          </summary>

          <p className="mt-[16px] max-w-[640px] text-[14px] md:text-[16px] leading-[1.7] text-ink/70">
            {f.a}
          </p>

        </details>
      ))}

    </div>
  </div>
</section>

      {/* CTA FINAL */}
<section className="relative overflow-hidden bg-cream py-[96px] md:py-[144px]">

  <div
    aria-hidden
    className="absolute inset-x-0 top-0 mx-auto h-px w-[33%] bg-gold"
  />

  <div className="container-lp text-center">

    <span className="eyebrow text-[12px] text-ink/60 tracking-[1px]">
      Sua vez
    </span>

    {/* MOBILE TITLE */}
    <h2 className="mx-auto mt-[24px] max-w-[360px] text-[34px] leading-[1.02] text-ink md:hidden">
      Sua primeira venda pode ser <em className="text-gold">esta semana</em>.
    </h2>

    {/* DESKTOP TITLE */}
    <h2 className="hidden md:block mx-auto mt-[24px] max-w-[960px] text-[64px] leading-[1.02] text-ink">
      Sua primeira venda pode ser <em className="text-gold">esta semana</em>.
    </h2>

    {/* MOBILE TEXT */}
    <p className="mx-auto mt-[24px] max-w-[360px] text-[15px] leading-[1.7] text-ink/70 md:hidden">
      Fale com a gente no WhatsApp e receba orientação para escolher o kit ideal para você.
    </p>

    {/* DESKTOP TEXT */}
    <p className="mx-auto mt-[28px] hidden md:block max-w-[520px] text-[18px] leading-[1.7] text-ink/70">
      Fale com a gente no WhatsApp e receba orientação para escolher o kit ideal para você.
    </p>

    <div className="mt-[48px] flex justify-center">
      <CTA variant="gold">Quero começar agora</CTA>
    </div>

  </div>
</section>

      {/* FOOTER */}
<footer className="border-t border-ink/10 bg-ink py-[48px] text-cream">

  <div className="container-lp flex flex-col items-center justify-between gap-[24px] md:flex-row">

    {/* BRAND */}
    <div className="flex flex-col items-center gap-[12px] md:flex-row md:gap-[12px]">

      <img
  src="/logo-cirulli.png"
  alt="Atacado Cirulli"
  className="h-[75px] md:h-[75px] w-auto object-contain"
/>

      {/* separator desktop only */}
      <span className="hidden md:block h-px w-[32px] bg-cream/30" aria-hidden />

      <span className="text-[11px] uppercase tracking-[2px] text-cream/60 text-center md:text-left">
        Semijoias no atacado
      </span>

    </div>

    {/* LINKS / INFO */}
    <div className="flex items-center gap-[16px] text-[11px] uppercase tracking-[2px] text-cream/70">

      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition"
      >
        atacadocirulli.com.br
      </a>

      <span aria-hidden>·</span>

      <span>© {new Date().getFullYear()}</span>

    </div>

  </div>
</footer>

      {/* WhatsApp */}
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
