"use client";
import { useState } from "react";

const links = [
  { label: "Послуги", href: "#services" },
  { label: "Галузі", href: "#industries" },
  { label: "Кейси", href: "#cases" },
  { label: "Про нас", href: "#about" },
  { label: "Якість", href: "#quality" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0dfd8]">
      <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-[18px] tracking-tight text-[#0d0d0d] no-underline">
          Industrial<span className="text-[#e8091d]">Fab</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#6b6b6b] hover:text-[#0d0d0d] transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-[#0d0d0d] text-white px-6 py-2.5 rounded-full text-sm font-semibold no-underline hover:opacity-80 transition-opacity"
          >
            Надіслати креслення
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-0 cursor-pointer"
          aria-label="Меню"
        >
          <span
            className="block w-[22px] h-[2px] bg-[#0d0d0d] rounded-sm transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }}
          />
          <span
            className="block w-[22px] h-[2px] bg-[#0d0d0d] rounded-sm transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[2px] bg-[#0d0d0d] rounded-sm transition-transform duration-200"
            style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#e0dfd8] px-8 pt-6 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-[#0d0d0d] no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="bg-[#0d0d0d] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline text-center"
          >
            Надіслати креслення
          </a>
        </div>
      )}
    </header>
  );
}
