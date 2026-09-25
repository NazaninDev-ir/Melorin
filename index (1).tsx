import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  BowIcon,
  ClockIcon,
  HeartIcon,
  PhoneIcon,
  PinIcon,
  SparkleIcon,
  TelegramIcon,
} from "@/components/Icons";
import { MELORIN } from "@/lib/melorin";

import heroImg from "@/assets/hero.jpg";
import storeImg from "@/assets/store.jpg";
import notebooksImg from "@/assets/notebooks.jpg";
import pensImg from "@/assets/pens.jpg";
import stickersImg from "@/assets/stickers.jpg";
import caseImg from "@/assets/case.jpg";
import memoImg from "@/assets/memo.jpg";
import highlighterImg from "@/assets/highlighter.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import bownoteImg from "@/assets/bownote.jpg";
import deskImg from "@/assets/desk.jpg";
import shelfImg from "@/assets/shelf.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ملورین | فروشگاه لوازم‌التحریر فانتزی و دخترانه" },
      {
        name: "description",
        content:
          "ملورین فروشگاه لوازم‌التحریر فانتزی و دخترانه؛ دفتر، خودکار، استیکر، جامدادی و اکسسوری‌های کیوت. آدرس فروشگاه و کانال محصولات را ببینید.",
      },
      { property: "og:title", content: "ملورین | فروشگاه لوازم‌التحریر فانتزی" },
      {
        property: "og:description",
        content:
          "دفتر، خودکار، استیکر و اکسسوری‌های دوست‌داشتنی؛ برای خرید حضوری به فروشگاه ملورین سر بزنید.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  { title: "دفتر و پلنر", img: notebooksImg },
  { title: "خودکار و مداد", img: pensImg },
  { title: "استیکر", img: stickersImg },
  { title: "جامدادی", img: caseImg },
  { title: "نوت‌پد", img: memoImg },
  { title: "اکسسوری", img: accessoriesImg },
  { title: "هایلایتر", img: highlighterImg },
  { title: "لوازم فانتزی", img: bownoteImg },
];

const products = [
  {
    name: "دفتر فانتزی صورتی",
    desc: "دفتر سیمی با جلد صورتی و کاغذ خوش‌دست برای یادداشت‌های روزانه.",
    img: notebooksImg,
  },
  {
    name: "خودکار ژله‌ای یاسی",
    desc: "خودکار ژله‌ای با نوشتار نرم و بدنه پاستلی در رنگ‌های متنوع.",
    img: pensImg,
  },
  {
    name: "استیکرهای کیوت",
    desc: "ورق‌های استیکر با طرح قلب، پاپیون و شخصیت‌های بامزه.",
    img: stickersImg,
  },
  {
    name: "جامدادی پاستلی",
    desc: "جامدادی نرم و جادار با زیپ مقاوم و آویز پاپیون.",
    img: caseImg,
  },
  {
    name: "نوت‌پد قلبی",
    desc: "نوت‌پد قلبی‌شکل برای یادداشت‌های کوتاه و لیست کارها.",
    img: memoImg,
  },
  {
    name: "هایلایتر پاستلی",
    desc: "ست هایلایتر با رنگ‌های ملایم و مناسب درس خواندن.",
    img: highlighterImg,
  },
  {
    name: "دفتر طرح پاپیون",
    desc: "دفتر جمع‌وجور با طرح پاپیون؛ همراه همیشگی کیفت.",
    img: bownoteImg,
  },
  {
    name: "مجموعه استیکر فانتزی",
    desc: "پک استیکر متنوع برای تزیین دفتر، لپ‌تاپ و جامدادی.",
    img: accessoriesImg,
  },
];

const gallery = [
  { img: deskImg, alt: "میز مطالعه دخترانه با لوازم‌التحریر صورتی" },
  { img: stickersImg, alt: "استیکرهای فانتزی صورتی و بنفش" },
  { img: shelfImg, alt: "قفسه محصولات فروشگاه ملورین" },
  { img: notebooksImg, alt: "دفترهای صورتی و یاسی" },
  { img: caseImg, alt: "جامدادی پاستلی با پاپیون" },
  { img: storeImg, alt: "فضای داخلی فروشگاه ملورین" },
  { img: pensImg, alt: "خودکارهای پاستلی" },
  { img: bownoteImg, alt: "دفتر طرح پاپیون" },
];

const reviews = [
  {
    text: "هر بار میام ملورین یه چیزی پیدا می‌کنم که اصلاً قرار نبود بخرمش!",
    name: "نگار رضایی",
    role: "دانشجو",
  },
  {
    text: "محصولاتشون خیلی کیوته و تنوعش واقعاً زیاده.",
    name: "سارا محمدی",
    role: "دانش‌آموز",
  },
  {
    text: "فضای فروشگاه خیلی دوست‌داشتنیه و انتخاب کردن بین این همه چیز قشنگ سخته!",
    name: "مهسا کریمی",
    role: "مشتری همیشگی",
  },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
      <span className="mx-auto mt-6 block h-1.5 w-24 rounded-full bg-cta-gradient" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section id="home" className="bg-hero-soft relative overflow-hidden pt-32 pb-20 lg:pt-40">
          <SparkleIcon className="animate-float absolute top-28 left-8 size-10 text-petal opacity-70" />
          <HeartIcon className="animate-float absolute right-10 bottom-16 size-8 text-lilac opacity-60" />
          <span className="absolute -top-24 -left-24 size-80 rounded-full bg-lilac-soft blur-3xl" />
          <span className="absolute -right-20 -bottom-32 size-96 rounded-full bg-blush blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
           <div className="animate-rise mx-auto max-w-md text-center lg:mx-0 lg:max-w-none lg:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-primary shadow-soft">
                <BowIcon className="size-4" />
                لوازم‌التحریر فانتزی و دخترانه
              </span>
              <h1 className="mt-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                دنیای کوچیک و <span className="text-gradient-brand">دوست‌داشتنی</span> ملورین
              </h1>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                از دفتر و خودکارهای رنگی تا استیکر و اکسسوری‌های فانتزی؛ ملورین جاییه برای پیدا کردن
                چیزهایی که میز مطالعه‌ات رو قشنگ‌تر می‌کنن.
              </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
  <a
    href="#products"
    className="min-w-[10rem] rounded-2xl bg-cta-gradient px-8 py-4 text-center text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
  >
    مشاهده محصولات
  </a>
  <a
    href="#location"
    className="min-w-[10rem] rounded-2xl border border-border bg-card px-8 py-4 text-center text-sm font-extrabold text-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-soft"
  >
    آدرس فروشگاه
  </a>
</div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary">
                <HeartIcon className="size-4" />
                خرید حضوری در فروشگاه ملورین
              </p>
            </div>

            <div className="animate-rise relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card p-3 shadow-lift">
                <img
                  src={heroImg}
                  alt="چیدمان لوازم‌التحریر فانتزی ملورین شامل دفتر، خودکار و استیکر"
                  width={1536}
                  height={1152}
                  className="h-full w-full rounded-[2rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-3xl border border-border bg-card px-5 py-4 shadow-soft sm:flex">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-blush text-primary">
                  <SparkleIcon className="size-5" />
                </span>
                <span className="text-sm leading-6 font-extrabold">
                  کلی محصول کیوت
                  <span className="block text-xs font-bold text-muted-foreground">
                    هر هفته تازه می‌شه
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-extrabold md:text-4xl">یه عالمه چیز قشنگ برای میزت</h2>
              <p className="mt-6 text-muted-foreground">
                ملورین مجموعه‌ای از لوازم‌التحریر، دفترها، خودکارها، استیکرها و اکسسوری‌های فانتزیه؛
                چیزهایی که انتخاب کردن و استفاده کردنشون می‌تونه روزمره‌ات رو قشنگ‌تر کنه.
              </p>
              <a
                href="#products"
                className="mt-8 inline-flex rounded-2xl bg-cta-gradient px-7 py-4 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                محصولات ملورین رو ببین
              </a>
            </Reveal>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-soft-fade py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                title="چی دوست داری پیدا کنی؟"
                subtitle="از بین کلی محصول رنگی و دوست‌داشتنی، مورد علاقه‌ات رو پیدا کن."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((cat, i) => (
                <Reveal key={cat.title} delay={i * 60}>
                  <a
                    href="#products"
                    className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        loading="lazy"
                        width={900}
                        height={900}
                    className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center justify-between px-4 py-4">
                      <span className="text-sm font-extrabold">{cat.title}</span>
                      <HeartIcon className="size-4 text-petal transition-colors group-hover:text-primary" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                title="چندتا از دوست‌داشتنی‌های ملورین"
                subtitle="این‌ها فقط بخشی از محصولاتی هستن که می‌تونی توی فروشگاه ببینی."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                    <div className="overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        width={900}
                        height={900}
                       className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-extrabold">{p.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                      <a
                        href={MELORIN.telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-extrabold text-accent-foreground transition-colors hover:bg-cta-gradient hover:text-primary-foreground"
                      >
                        <TelegramIcon className="size-4" />
                        مشاهده در کانال
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PHYSICAL STORE CTA */}
        <section className="px-5 py-10 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-cta-gradient px-6 py-14 shadow-lift md:px-14">
            <SparkleIcon className="animate-float absolute top-8 left-10 size-12 text-primary-foreground/40" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div className="text-primary-foreground">
                <h2 className="text-3xl font-extrabold md:text-4xl">
                  از نزدیک ببین، انتخاب کن، عاشقش شو!
                </h2>
                <p className="mt-5 opacity-95">
                  محصولات ملورین رو از نزدیک ببین و با خیال راحت انتخاب کن. برای خرید حضوری منتظرت
                  هستیم.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-card/20 px-5 py-3 text-sm font-extrabold backdrop-blur">
                  <HeartIcon className="size-4" />
                  خرید محصولات به‌صورت حضوری انجام می‌شود.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#location"
                    className="rounded-2xl bg-card px-7 py-4 text-sm font-extrabold text-primary shadow-soft transition-all hover:-translate-y-0.5"
                  >
                    مشاهده آدرس فروشگاه
                  </a>
                  <a
                    href={MELORIN.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-primary-foreground/60 px-7 py-4 text-sm font-extrabold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-card/15"
                  >
                    مشاهده کانال محصولات
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={shelfImg}
                  alt="قفسه محصولات فروشگاه ملورین"
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-56 w-full rounded-3xl object-cover shadow-lift md:h-72"
                />
                <img
                  src={deskImg}
                  alt="میز مطالعه با لوازم‌التحریر ملورین"
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="mt-8 h-56 w-full rounded-3xl object-cover shadow-lift md:h-72"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="relative">
                <img
                  src={storeImg}
                  alt="فضای داخلی فروشگاه لوازم‌التحریر ملورین"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="w-full rounded-[2.5rem] border border-border object-cover shadow-lift"
                />
                <span className="absolute -bottom-5 right-6 rounded-3xl border border-border bg-card px-5 py-4 text-sm font-extrabold shadow-soft">
                  فضای دوست‌داشتنی ملورین
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl font-extrabold md:text-4xl">ملورین فقط یه لوازم‌التحریری نیست</h2>
              <p className="mt-6 text-muted-foreground">
                ما دوست داریم وقتی وارد ملورین می‌شی، بین کلی رنگ، طرح و چیزهای دوست‌داشتنی چیزی پیدا
                کنی که واقعاً دوستش داشته باشی.
              </p>
              <p className="mt-4 text-muted-foreground">
                از انتخاب محصولات تا فضای فروشگاه، تلاش می‌کنیم تجربه‌ای شیرین و دوست‌داشتنی برای شما
                بسازیم.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "تنوع بالا", d: "کلی طرح و رنگ" },
                  { t: "انتخاب دقیق", d: "محصولات باکیفیت" },
                  { t: "خرید حضوری", d: "دیدن از نزدیک" },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-3xl border border-border bg-card p-5 text-center shadow-soft"
                  >
                    <p className="text-sm font-extrabold">{item.t}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* TELEGRAM */}
        <section className="bg-soft-fade py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 text-center shadow-lift">
                <span className="absolute -top-16 -left-16 size-52 rounded-full bg-lilac-soft blur-3xl" />
                <div className="relative">
                  <span className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-cta-gradient text-primary-foreground shadow-soft">
                    <TelegramIcon className="size-8" />
                  </span>
                  <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
                    محصولات جدید رو از دست نده!
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                    محصولات جدید، موجودی‌ها و چیزهای تازه‌ای که به ملورین اضافه می‌شن رو توی کانال
                    معرفی می‌کنیم.
                  </p>
                  <p
                    dir="ltr"
                    className="mt-6 inline-block rounded-2xl bg-blush px-6 py-3 text-xl font-extrabold text-gradient-brand"
                  >
                    {MELORIN.telegramId}
                  </p>
                  <div className="mt-7">
                    <a
                      href={MELORIN.telegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-cta-gradient px-8 py-4 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      <TelegramIcon className="size-4" />
                      مشاهده کانال ملورین
                    </a>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">
                    برای دیدن محصولات جدید و اطلاع از موجودی، کانال ما رو دنبال کن.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                title="کجا پیدامون کنی؟"
                subtitle="برای دیدن محصولات و خرید حضوری، به فروشگاه ملورین سر بزن."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              <Reveal className="lg:col-span-2">
                <div className="h-full rounded-[2rem] border border-border bg-card p-7 shadow-soft">
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blush text-primary">
                        <PinIcon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold">آدرس فروشگاه</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {MELORIN.address}
                        </span>
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-lilac-soft text-secondary">
                        <PhoneIcon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold">شماره تماس</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {MELORIN.phone}
                        </span>
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blush text-primary">
                        <ClockIcon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold">ساعات کاری</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {MELORIN.hours}
                        </span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href={MELORIN.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-cta-gradient px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <PinIcon className="size-4" />
                    مسیریابی
                  </a>
                  <div className="mt-5 rounded-2xl border border-border bg-blush p-5 text-center">
                    <p className="text-sm font-extrabold text-primary">خرید حضوری</p>
                    <p className="mt-1 text-sm text-muted-foreground">منتظرت هستیم!</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-3">
                <div className="bg-hero-soft flex h-full min-h-[22rem] flex-col items-center justify-center rounded-[2rem] border border-dashed border-primary/40 p-8 text-center">
                  <span className="flex size-16 items-center justify-center rounded-3xl bg-card text-primary shadow-soft">
                    <PinIcon className="size-7" />
                  </span>
                  <p className="mt-5 text-base font-extrabold">نقشه فروشگاه ملورین</p>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    محل دقیق فروشگاه روی نقشه در همین قسمت نمایش داده می‌شود.
                  </p>
                  <a
                    href={MELORIN.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-extrabold transition-all hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    باز کردن نقشه
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-soft-fade py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                title="یه گوشه از دنیای ملورین"
                subtitle="نگاهی به محصولات، قفسه‌ها و فضای دوست‌داشتنی فروشگاه."
              />
            </Reveal>
            <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
              {gallery.map((g, i) => (
                <Reveal key={g.alt} delay={i * 50} className="mb-4 break-inside-avoid">
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                    <img
                      src={g.img}
                      alt={g.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle title="حرف‌های قشنگ شما" />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 90}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                    <HeartIcon className="size-6 text-petal" />
                    <p className="mt-4 text-sm text-foreground/85">«{r.text}»</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-blush text-sm font-extrabold text-primary">
                        {r.name.slice(0, 1)}
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold">{r.name}</span>
                        <span className="block text-xs text-muted-foreground">{r.role}</span>
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-20 lg:px-8">
          <Reveal>
            <div className="bg-hero-soft relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border px-6 py-16 text-center shadow-soft">
              <BowIcon className="animate-float absolute top-8 right-10 size-10 text-petal" />
              <SparkleIcon className="animate-float absolute bottom-8 left-10 size-9 text-lilac" />
              <h2 className="text-3xl font-extrabold md:text-4xl">یه سر به ملورین بزن!</h2>
              <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                محصولات رو آنلاین ببین، مورد علاقه‌ات رو پیدا کن و برای خرید حضوری بهمون سر بزن.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={MELORIN.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-cta-gradient px-8 py-4 text-sm font-extrabold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  مشاهده کانال
                </a>
                <a
                  href="#location"
                  className="rounded-2xl border border-border bg-card px-8 py-4 text-sm font-extrabold transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  آدرس فروشگاه
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
