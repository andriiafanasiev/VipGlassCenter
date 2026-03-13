"use client";

const cases = [
  { title: "Системи зрошення для агросектору", sub: "Металеві конструкції для великих іригаційних систем", tags: ["Лазерна різка", "Гнуття", "Зварювання", "Цинкування"], material: "Сталь S355, нержавіюча сталь 304", volume: "Серія 250 комплектів", bg: "bg-[#0d1117]" },
  { title: "Кузови для важкої техніки", sub: "Великі металеві вузли для самоскидної техніки", tags: ["Плазмова різка", "Зварювання роботами", "Фарбування"], material: "Hardox 450, сталь S690", volume: "100 штук / квартал", bg: "bg-[#1a1207]" },
  { title: "Рами для сільгосптехніки", sub: "Несучі каркаси посівних та збиральних агрегатів", tags: ["Трубний лазер", "CNC-гнуття", "MIG зварювання"], material: "Квадратна труба 80×80×5, профілі", volume: "150 од. / місяць", bg: "bg-[#071a0d]" },
  { title: "Корпуси для трансформаторного обладнання", sub: "Металеві шафи та кожухи для енергетичних систем", tags: ["Листова різка", "Пробивання", "Порошкове фарбування"], material: "Листова сталь DC01 1.5–3 мм", volume: "50–500 штук / серія", bg: "bg-[#0d0d1a]" },
  { title: "Вузли для дорожньої інфраструктури", sub: "Опори освітлення та елементи дорожніх конструкцій", tags: ["Вальцювання", "Зварювання", "Термічна обробка"], material: "Сталь S235/S355", volume: "Проєктне, 1000+ од.", bg: "bg-[#140d1a]" },
  { title: "Деталі шасі та підвіски", sub: "Прецизійні компоненти для вантажного транспорту", tags: ["CNC-фрезерування", "Токарна обробка", "Хромування"], material: "Сталь 40Cr, 42CrMo4", volume: "Постійне серійне виробництво", bg: "bg-[#1a0d0d]" },
];

export default function Cases() {
  return (
    <section id="cases" className="py-30 px-8 bg-bg-muted">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <div>
            <h2 className="text-[clamp(36px,5vw,72px)] font-bold tracking-[-0.03em] leading-none">
              Work<sup className="text-[0.45em] align-super tracking-normal">3</sup>
            </h2>
            <p className="text-base text-fg-muted mt-3 max-w-120 leading-relaxed">
              Реальні проєкти для реальних замовників — від концепції до відвантаженої партії
            </p>
          </div>
          <a href="#quote" className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg no-underline border border-border-col px-6 py-3 rounded-full hover:border-fg transition-colors">
            Всі кейси
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-0.5">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="grid grid-cols-[auto_1fr_auto] gap-8 items-center bg-white px-9 py-8 hover:bg-[#f7f6f1] transition-colors duration-150 cursor-default"
            >
              {/* Thumbnail */}
              <div className={`w-28 h-20 rounded-xl shrink-0 relative overflow-hidden ${c.bg}`}>
                <span className="absolute inset-0 flex items-center justify-center text-[22px] font-bold text-white/15 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-lg font-bold tracking-[-0.02em] mb-1.5 text-fg">{c.title}</h3>
                <p className="text-[13px] text-fg-muted mb-3">{c.sub}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[11px] font-semibold tracking-wide uppercase text-fg-muted bg-bg-muted px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="text-right shrink-0 hidden sm:block">
                <div className="text-sm font-semibold text-fg mb-1">{c.volume}</div>
                <div className="text-xs text-fg-muted">{c.material}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
