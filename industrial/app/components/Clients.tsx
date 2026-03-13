"use client";

const clients = ["Mercedes-Benz", "BMW", "Porsche", "Leroy Merlin", "Caterpillar", "John Deere", "Siemens"];

export default function Clients() {
  return (
    <section className="py-24 px-8 bg-bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-5 mb-14 flex-wrap">
          <div className="w-8 h-0.5 stripe-line shrink-0" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-fg-muted shrink-0">Clients</span>
          <div className="flex-1 h-px bg-border-col hidden sm:block" />
          <h2 className="text-[clamp(20px,3vw,36px)] font-bold tracking-[-0.02em] shrink-0">
            Компанії, які нам довіряють
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0.5">
          {clients.map((name) => (
            <div
              key={name}
              className="bg-white rounded-2xl py-8 px-5 flex flex-col items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
            >
              <div className="w-20 h-10 bg-bg-muted rounded-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c0bdb5" strokeWidth="1.5">
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-fg text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
