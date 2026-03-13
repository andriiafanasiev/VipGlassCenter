"use client";

const items = [
  { title: "Дослідно-випробувальна лабораторія", desc: "Оптичний емісійний аналізатор для перевірки хімічного складу металу, розривні машини для визначення міцності зварних швів та з'єднань." },
  { title: "Система простежуваності", desc: "Кожна деталь відстежується від вхідного матеріалу до відвантаження — паспорт якості, протоколи контролю та вимірювань." },
  { title: "Lean та Kaizen", desc: "Постійне вдосконалення виробничих процесів. Скорочення часу переналадки, мінімізація браку, оптимізація маршрутів деталей." },
  { title: "ERP та CRM системи", desc: "Цифрове управління виробництвом: відстеження замовлень в режимі реального часу, автоматичне планування та контроль термінів." },
  { title: "Інженерно-конструкторське бюро", desc: "Власні конструктори допомагають оптимізувати креслення для зниження собівартості виробництва без втрати функціональності." },
  { title: "Зварювальна школа", desc: "Власний навчальний центр для підготовки та атестації зварювальників за міжнародними стандартами. IWE, WPS/WPQR." },
];

export default function Quality() {
  return (
    <section id="quality" className="py-30 px-8 bg-bg-muted">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 stripe-line shrink-0" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-fg-muted">Якість та інновації</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-bold tracking-[-0.03em] leading-[1.05]">
              Якість на кожному
              <br />
              етапі виробництва
            </h2>
            <p className="text-base text-fg-muted leading-relaxed max-w-115">
              Від вхідного контролю матеріалів до фінальної інспекції готового виробу —
              кожен процес підкріплений стандартами ISO та власною системою управління якістю
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {items.map((item, i) => (
            <div key={item.title} className="bg-white p-10 relative overflow-hidden">
              <span className="absolute top-6 right-7 text-[60px] font-extrabold text-black/4 leading-none select-none tracking-[-0.04em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] mb-4 max-w-65 text-fg">{item.title}</h3>
              <p className="text-sm text-fg-muted leading-[1.65]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
