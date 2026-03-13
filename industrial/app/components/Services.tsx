"use client";

const services = [
  {
    num: "01",
    title: "Листова металообробка",
    desc: "Лазерна та плазмова різка, гнуття, пробивання, штампування та вальцювання листового металу товщиною до 60 мм.",
    specs: ["Лазер Trumpf, Durma, Aramis — до 20 мм", "Столи 3000×1500 / 4000×2000 / 6000×2000 мм", "Плазма/газ — столи до 12×2 м, до 60 мм", "Преси Durma/Baykal 160–220 т, до 8 м", "Пробивання Trumpf 3000, Boci Trumatic"],
  },
  {
    num: "02",
    title: "Обробка труб",
    desc: "Трубний лазер, CNC-трубогиби, виготовлення каркасів і рам для агро та інфраструктурних проєктів.",
    specs: ["Трубний лазер: до 9 м, Ø до 250 мм", "CNC трубогиби: Ø 38 мм та Ø 60 мм", "Виготовлення каркасів і рам", "Поздовжнє та поперечне розрізання"],
  },
  {
    num: "03",
    title: "CNC-механічна обробка",
    desc: "3- та 4-осьове фрезерування, токарна обробка, горизонтально-розточувальні роботи для деталей до 3 м.",
    specs: ["Haas, DMG Mori, Micron — деталі до 3 м", "Токарні Haas ST-серія, Gildemeister", "Union BFT90 — великі корпуси", "Допуски до ±0.01 мм"],
  },
  {
    num: "04",
    title: "Зварювання та складання",
    desc: "MIG/MAG, TIG; 22 апарати Fronius, 6 роботів Fanuc ArcMate. Зварювання сталі, алюмінію та нержавіючої сталі.",
    specs: ["22 апарати Fronius MIG/MAG/TIG", "6 роботів Fanuc ArcMate", "Сталь, алюміній, нержавіюча сталь", "Збірка вузлів та тестування"],
  },
  {
    num: "05",
    title: "Покриття та обробка поверхні",
    desc: "Дробеструйна підготовка, порошкове та рідке фарбування, цинкування, хромування, термічна обробка.",
    specs: ["3 автоматичних + 5 ручних ліній фарбування", "Порошкове та рідке покриття", "Холодне цинкування", "Тверде хромування, гальваніка", "Гартування та відпуск"],
  },
  {
    num: "06",
    title: "Контрактне виробництво",
    desc: "Повний цикл від інженерного аналізу до пакування та доставки. Серійне та одиничне виробництво.",
    specs: ["Від одиниці до великої серії", "Різка → гнуття → обробка → зварювання", "Покриття → контроль якості → пакування", "Інженерний аналіз та DFM-оптимізація", "NDA за запитом"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-30 px-8 bg-bg-muted">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 stripe-line shrink-0" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-fg-muted">Послуги</span>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold tracking-[-0.03em] leading-[1.05] max-w-140">
            Повний цикл металообробки
          </h2>
          <p className="text-base text-fg-muted mt-5 max-w-130 leading-relaxed">
            від різання металу до виготовлення готових вузлів і конструкцій за кресленнями замовника
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map((s) => (
            <div key={s.num} className="bg-white p-10 hover:-translate-y-1 transition-transform duration-200 cursor-default">
              <div className="w-full h-48 rounded-xl mb-7 overflow-hidden relative img-dark">
                <div className="absolute inset-0 img-dark-inner" />
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-[10px] text-white/70 font-semibold tracking-widest uppercase">
                  {s.num}
                </div>
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-3 text-fg">{s.title}</h3>
              <p className="text-sm text-fg-muted leading-[1.65] mb-6">{s.desc}</p>
              <ul className="list-none">
                {s.specs.map((spec) => (
                  <li key={spec} className="text-[13px] text-fg-muted py-1.5 border-t border-border-col flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#quote" className="inline-flex items-center gap-2 bg-fg text-white px-9 py-4 rounded-full text-[15px] font-semibold no-underline hover:opacity-80 transition-opacity">
            Отримати комерційну пропозицію
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
