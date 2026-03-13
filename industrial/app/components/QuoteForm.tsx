"use client";
import { useState } from "react";

const inputCls = "w-full px-4 py-3.5 rounded-xl border border-border-col text-[15px] bg-white text-fg outline-none transition-colors duration-150 focus:border-fg font-sans placeholder:text-fg-muted/60";
const labelCls = "block text-[13px] font-semibold text-fg-muted mb-1.5 tracking-wide";

export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", material: "", quantity: "", deadline: "", message: "", nda: false });
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  return (
    <section id="quote" className="py-30 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — blob */}
          <div className="hidden lg:block">
            <div className="gradient-blob rounded-[28px] aspect-4/5 w-full" />
          </div>

          {/* Right — form */}
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border-col text-[11px] font-semibold tracking-widest uppercase text-fg-muted mb-7">
              Talk to us
            </div>

            <h2 className="text-[clamp(26px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.15] mb-4 text-fg">
              Потрібен надійний виробничий партнер для вашого проєкту?
            </h2>
            <p className="text-sm text-fg-muted leading-relaxed mb-10">
              Надішліть нам креслення або короткий опис завдання — наша команда
              проаналізує проєкт і запропонує оптимальне виробниче рішення.
              <br /><br />
              <strong className="text-fg">Працюємо з кресленнями:</strong>{" "}
              STEP · CAD · PDF · DWG · DXF · STP · ZIP
            </p>

            {sent ? (
              <div className="py-12 px-8 bg-bg-muted rounded-2xl text-center">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-fg">Запит надіслано!</h3>
                <p className="text-[15px] text-fg-muted leading-relaxed">Наш менеджер зв&apos;яжеться з вами протягом 24 годин.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Ім&apos;я *</label>
                    <input required name="name" value={form.name} onChange={set} placeholder="Іван Петренко" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Компанія *</label>
                    <input required name="company" value={form.company} onChange={set} placeholder="ТОВ «Назва»" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={set} placeholder="email@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Телефон</label>
                    <input type="tel" name="phone" value={form.phone} onChange={set} placeholder="+38 (___) ___-__-__" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Матеріал</label>
                    <input name="material" value={form.material} onChange={set} placeholder="Сталь S355, алюміній…" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Кількість</label>
                    <input name="quantity" value={form.quantity} onChange={set} placeholder="100 шт./місяць" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Дедлайн</label>
                  <input type="date" name="deadline" value={form.deadline} onChange={set} className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Опис або технічне завдання</label>
                  <textarea name="message" value={form.message} onChange={set} rows={3} placeholder="Опишіть ваш проєкт…" className={`${inputCls} resize-y min-h-20`} />
                </div>

                {/* File upload */}
                <div>
                  <label className={labelCls}>Завантажити креслення</label>
                  <label className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-dashed border-border-col bg-bg-muted cursor-pointer hover:border-fg transition-colors duration-150">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fg-muted shrink-0">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                    <span className="text-sm text-fg-muted truncate">
                      {files.length > 0 ? files.map((f) => f.name).join(", ") : "STEP, STP, DXF, DWG, PDF, ZIP — до 50 МБ"}
                    </span>
                    <input type="file" multiple accept=".step,.stp,.dxf,.dwg,.pdf,.zip,.stl" onChange={(e) => e.target.files && setFiles(Array.from(e.target.files))} className="hidden" />
                  </label>
                </div>

                {/* NDA */}
                <label className="flex items-start gap-3 cursor-pointer text-[13px] text-fg-muted leading-relaxed">
                  <input type="checkbox" name="nda" checked={form.nda} onChange={set} className="mt-0.5 w-4 h-4 shrink-0 accent-fg" />
                  Погоджуюсь з умовами конфіденційності. За потреби ми можемо укласти NDA перед початком співпраці.
                </label>

                <button type="submit" className="w-full bg-fg text-white py-4.5 rounded-full text-base font-semibold hover:opacity-80 transition-opacity cursor-pointer border-0">
                  Зв&apos;язатись
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
