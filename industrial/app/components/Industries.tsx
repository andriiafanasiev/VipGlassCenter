"use client";

const industries = [
  { title: "Машинобудування", desc: "Виготовлення деталей, корпусів та вузлів для промислового обладнання і машин", detail: "Рами машин, корпуси механізмів, елементи трансмісії", bg: "bg-[#1a1a2e]" },
  { title: "Агросектор", desc: "Металеві компоненти та конструкції для сільськогосподарської техніки та обладнання", detail: "Каркаси посівних і збиральних агрегатів, деталі причіпної техніки", bg: "bg-[#1a2e1a]" },
  { title: "Енергетика", desc: "Металоконструкції та компоненти для енергетичних систем і інфраструктури", detail: "Трансформатори, генератори, газорозподільчі станції", bg: "bg-[#2e1a1a]" },
  { title: "Інфраструктура", desc: "Металеві конструкції для будівництва, транспортної та міської інфраструктури", detail: "Мостові конструкції, опори освітлення, елементи електропідстанцій", bg: "bg-[#1a1e2e]" },
  { title: "Транспорт", desc: "Виробництво деталей та конструкцій для транспортної техніки і логістики", detail: "Деталі кузовів, шасі, контейнерні конструкції", bg: "bg-[#2e2a1a]" },
  { title: "Оборона", desc: "Виготовлення металевих елементів і конструкцій для оборонної та безпекової сфери", detail: "Бронекорпуси, захисні елементи, спеціалізовані конструкції", bg: "bg-[#1e1e1e]" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-30 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold tracking-[-0.03em] leading-[1.05] mb-5">
            Індустрії наших клієнтів
          </h2>
          <p className="text-base text-fg-muted max-w-145 mx-auto leading-relaxed">
            Ми виробляємо металеві деталі, вузли та конструкції для компаній
            із різних галузей промисловості в Україні та Європі
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="flex flex-col items-center text-center px-6 py-9 rounded-2xl bg-bg-muted hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 cursor-default"
            >
              {/* Circle */}
              <div className={`w-40 h-40 rounded-full mb-7 relative overflow-hidden ${ind.bg}`}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(135deg,rgba(255,255,255,0.06) 25%,transparent 25%),linear-gradient(225deg,rgba(255,255,255,0.04) 25%,transparent 25%)", backgroundSize: "40px 40px" }}
                />
              </div>
              <h3 className="text-xl font-bold tracking-[-0.02em] mb-2.5 text-fg">{ind.title}</h3>
              <p className="text-sm text-fg-muted leading-[1.65] mb-4">{ind.desc}</p>
              <p className="text-xs text-[#9a9a9a] italic leading-relaxed">{ind.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
