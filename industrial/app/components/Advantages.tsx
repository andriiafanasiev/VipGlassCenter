"use client";

const advantages = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><path d="M4 14l6 6L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Закритий виробничий цикл",
    desc: "Від різки та гнуття до механічної обробки, зварювання, нанесення покриттів та пакування — все на власних потужностях.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Сертифікати ISO та CE",
    desc: "ISO 9001, 14001, 45001, EN 1090, ISO 3834, WPS/WPQR, IWE. Підтверджена система управління якістю.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Власна інженерна команда",
    desc: "Конструктори, технологи та робототехніки допомагають оптимізувати дизайн деталей для зниження собівартості.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><path d="M6 20L12 8l4 8 3-4 3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Lean виробництво та ERP",
    desc: "Kaizen, ERP та CRM системи забезпечують точні терміни, прозорість та ефективне управління замовленням.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/><path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "210 000 м² і 12 заводів",
    desc: "12 підприємств в Україні та Румунії. 125 000 тонн металу на рік. Потужності для будь-якого обсягу.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><path d="M14 4l2.4 7.3H24l-6.2 4.5 2.4 7.2L14 18.5l-6.2 4.5 2.4-7.2L4 11.3h7.6L14 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
    title: "Власна лабораторія контролю",
    desc: "Оптичний емісійний аналізатор, розривні машини, повна система трасуваності від заготовки до відвантаження.",
  },
];

export default function Advantages() {
  return (
    <section className="py-30 px-8 bg-fg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 stripe-line shrink-0" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50">Переваги</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,60px)] font-bold tracking-[-0.03em] leading-[1.1] mb-6 text-white">
              Чому обирають нас
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-110 mb-10">
              За 30 років ми побудували вертикально інтегроване виробництво — єдине вікно
              для будь-якого металовиробу від простої деталі до складного вузла в серійному тиражі.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-white text-fg px-8 py-4 rounded-full text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              Розпочати проєкт
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-white/6 rounded-2xl p-7 border border-white/8 hover:bg-white/10 transition-colors duration-200 cursor-default"
              >
                <div className="text-white/50 mb-4">{a.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2 tracking-tight">{a.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
