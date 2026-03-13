"use client";

const certs = ["ISO 9001", "ISO 14001", "ISO 45001", "EN 1090", "ISO 3834", "WPS/WPQR", "IWE"];

const cards = [
  { label: "12 підприємств в Україні та Румунії", sub: "Brands that resonate", bg: "bg-[#8B7D3A]" },
  { label: "Виробнича площа 210 000 м², 125 000 тонн металу нарік, 65 країн постачань", sub: "Designed to convert", bg: "bg-[#1a1a2e]" },
  { label: "ISO 9001, ISO 14001, ISO 45001, EN 1090, ISO 3834, WPS/WPQR, IWE", sub: "Every tap, considered", bg: "bg-[#2a2a2a]" },
];

export default function About() {
  return (
    <section id="about" className="py-30 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 stripe-line shrink-0" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-fg-muted">About us</span>
            </div>

            <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] mb-6 text-fg">
              Про компанію
            </h2>

            <p className="text-[clamp(18px,2vw,26px)] font-bold tracking-[-0.02em] leading-[1.4] mb-8 text-fg">
              Ми працюємо з проєктами різної складності — від виготовлення
              окремих металевих компонентів до повного виробничого циклу
              складних конструкцій і обладнання
            </p>

            <p className="text-[15px] text-fg-muted leading-relaxed mb-5">
              Заснована у 1991 році, компанія виросла до групи з 12 підприємств
              в Україні та Румунії. Наша вертикальна інтеграція дозволяє
              контролювати якість на кожному етапі — від вхідного контролю
              металу до фінального тестування готового вузла.
            </p>
            <p className="text-[15px] text-fg-muted leading-relaxed mb-10">
              Ми поставляємо продукцію в 65 країн світу та співпрацюємо з
              провідними виробниками техніки в Європі. Власна зварювальна школа
              та дослідно-випробувальна лабораторія гарантують найвищі стандарти якості.
            </p>

            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span key={c} className="text-xs font-semibold tracking-wide text-fg bg-bg-muted px-3.5 py-1.5 rounded-full border border-border-col">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div key={card.label} className="rounded-2xl overflow-hidden">
                <div className={`h-44 relative ${card.bg}`}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 40% 40%,rgba(255,255,255,0.07) 0%,transparent 60%)" }} />
                </div>
                <div className="pt-4 pb-1">
                  <p className="text-sm font-semibold leading-snug text-fg mb-1">{card.label}</p>
                  <p className="text-xs text-fg-muted italic">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
