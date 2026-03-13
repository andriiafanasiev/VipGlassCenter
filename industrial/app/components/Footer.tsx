"use client";

const cols = [
  {
    title: "Послуги",
    links: ["Листова металообробка", "Обробка труб", "CNC-механічна обробка", "Зварювання та складання", "Покриття поверхні", "Контрактне виробництво"],
  },
  {
    title: "Галузі",
    links: ["Машинобудування", "Агросектор", "Енергетика", "Інфраструктура", "Транспорт", "Оборона"],
  },
  {
    title: "Компанія",
    links: ["Про нас", "Якість та ISO", "Кейси", "Новини", "Кар'єра", "Контакти"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fg text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-[-0.03em] mb-4">
              Industrial<span className="text-red">Fab</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-75 mb-7">
              Контрактне виробництво металевих деталей та вузлів під ключ.
              30+ років досвіду, 12 заводів, 65 країн.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                <svg key="li" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
                <svg key="ig" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-white/40 hover:text-white transition-colors duration-150 no-underline"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-bold tracking-widest uppercase text-white/35 mb-5">
                {col.title}
              </div>
              <ul className="flex flex-col gap-3 list-none">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-150 no-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-8">
          <p className="text-[13px] text-white/35">
            © {year} IndustrialFab. Всі права захищені.
          </p>
          <div className="flex gap-6">
            {["Політика конфіденційності", "Умови використання"].map((t) => (
              <a key={t} href="#" className="text-[13px] text-white/35 hover:text-white/70 transition-colors duration-150 no-underline">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
