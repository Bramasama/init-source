import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_3LB-Gecs.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://initsource.co.uk");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CTA;
  const {
    href = "#book",
    label = "Book a 15-min calibration call",
    variant = "primary",
    className = ""
  } = Astro2.props;
  const base = "inline-flex items-center rounded-full px-7 py-4 text-lg font-semibold transition-colors";
  const styles = {
    primary: "bg-primary text-white hover:bg-accent hover:text-slate-900",
    secondary: "border border-neutral bg-white text-slate-800 hover:bg-neutral-light dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:bg-slate-900"
  };
  const classes = `${base} ${styles[variant] || styles.primary} ${className}`.trim();
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(label, "data-cta")}${addAttribute(variant, "data-variant")}>${label}</a>`;
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/components/CTA.astro", void 0);

const $$ScreeningChecklist = createComponent(($$result, $$props, $$slots) => {
  const checks = [
    "Terraform / Infrastructure as Code",
    "Kubernetes / containers",
    "CI/CD and release automation",
    "Observability + incident response",
    "Security basics (least privilege, secrets, vulnerability hygiene)"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="screening" class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw grid gap-10 md:grid-cols-2 items-start"> <div> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
Screening checklist
</h2> <p class="mt-3 max-w-xl text-lg text-slate-500 dark:text-slate-300">
Practical signals for Platform, SRE, and DevOps hires. No buzzwords, no guesswork.
</p> </div> <div class="grid gap-4"> ${checks.map((check) => renderTemplate`<div class="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"> <span class="inline-grid size-8 place-items-center rounded-full bg-blue-50 text-[#007BFF] dark:bg-blue-500/20">
✓
</span> <p class="text-slate-700 dark:text-slate-200">${check}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/components/ScreeningChecklist.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://initsource.co.uk");
const $$Seofaq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Seofaq;
  const { faqs = [] } = Astro2.props;
  ({
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  });
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">{JSON.stringify(ld)}<\/script>'])));
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/components/Seofaq.astro", void 0);

export { $$Seofaq as $, $$CTA as a, $$ScreeningChecklist as b };
