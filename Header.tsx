import { useEffect, useState } from "react";
import { MELORIN, NAV_LINKS } from "@/lib/melorin";
import { TelegramIcon, BowIcon } from "@/components/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-xl" : "bg-blush/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-11 items-center justify-center rounded-2xl bg-cta-gradient text-primary-foreground shadow-soft">
            <BowIcon className="size-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-[0.2em] text-gradient-brand">
              MELORIN
            </span>
            <span className="block text-xs font-bold text-muted-foreground">ملورین</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={MELORIN.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="کانال تلگرام ملورین"
            className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card text-secondary transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <TelegramIcon className="size-5" />
          </a>
          <a
            href="#location"
            className="hidden rounded-2xl bg-cta-gradient px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            آدرس فروشگاه
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="منو"
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-[7px] h-0.5 rounded bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/97 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-foreground/85 transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-cta-gradient px-4 py-3 text-center text-base font-extrabold text-primary-foreground shadow-soft"
            >
              آدرس فروشگاه
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
