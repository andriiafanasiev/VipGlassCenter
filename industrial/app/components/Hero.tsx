"use client";

const stats = [
  { value: "210 000 м²", label: "виробничих площ" },
  { value: "125 000 т", label: "металу на рік" },
  { value: "65 країн", label: "постачань" },
  { value: "30+ років", label: "на ринку" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-225">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border-col text-[11px] font-semibold tracking-widest uppercase text-fg-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          ISO 9001 · ISO 14001 · ISO 45001 · EN 1090
        </div>

        <h1 className="text-[clamp(52px,8vw,108px)] font-bold tracking-[-0.04em] leading-none text-fg mb-7">
          Industrial
          <br />
          Fab Marketplace
        </h1>

        <p className="text-[clamp(16px,2vw,21px)] text-fg-muted max-w-145 mx-auto mb-12 leading-relaxed">
          Контрактне виробництво металевих деталей та вузлів під ключ —
          від різки до складання, покриття та доставки
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2.5 bg-fg text-white px-10 py-4 rounded-full text-[15px] font-semibold no-underline hover:opacity-80 transition-opacity"
          >
            Надіслати креслення
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 border border-border-col text-fg px-10 py-4 rounded-full text-[15px] font-semibold no-underline hover:border-fg transition-colors"
          >
            Наші послуги
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 justify-center mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.03em] text-fg">
                {s.value}
              </div>
              <div className="text-[12px] text-fg-muted mt-1 uppercase tracking-[0.06em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted text-[10px] tracking-widest uppercase">
        <span>Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="5" y="0" width="4" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 16l-3 4m3-4l3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
