import { MELORIN, NAV_LINKS } from "@/lib/melorin";
import { BowIcon, InstagramIcon, TelegramIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-soft-fade border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-cta-gradient text-primary-foreground shadow-soft">
              <BowIcon className="size-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-[0.2em] text-gradient-brand">
                MELORIN
              </span>
              <span className="block text-xs font-bold text-muted-foreground">ملورین</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            لوازم‌التحریر و چیزهای کوچیک دوست‌داشتنی برای روزهای قشنگ‌تر.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={MELORIN.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="اینستاگرام ملورین"
              className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card text-primary transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={MELORIN.telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="کانال تلگرام ملورین"
              className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card text-secondary transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <TelegramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base font-extrabold">دسترسی سریع</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-extrabold">اطلاعات تماس</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>{MELORIN.address}</li>
            <li>{MELORIN.phone}</li>
            <li>{MELORIN.hours}</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="text-base font-extrabold">کانال محصولات</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            محصولات جدید و موجودی‌ها را در کانال تلگرام ببین.
          </p>
          <p className="mt-3 text-lg font-extrabold text-gradient-brand" dir="ltr">
            {MELORIN.telegramId}
          </p>
          <a
            href={MELORIN.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-cta-gradient px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <TelegramIcon className="size-4" />
            مشاهده کانال
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs font-bold text-muted-foreground">
        © 2026 Melorin. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
