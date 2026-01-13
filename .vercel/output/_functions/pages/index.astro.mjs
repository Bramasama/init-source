import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, l as Fragment, m as maybeRenderHead, h as addAttribute, n as renderScript } from '../chunks/astro/server_3LB-Gecs.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_ClHtzgpZ.mjs';
/* empty css                                      */
import { B as BRAND, $ as $$Header, a as $$Footer } from '../chunks/Footer_D3hOfjAy.mjs';
import { $ as $$Seofaq, a as $$CTA, b as $$ScreeningChecklist } from '../chunks/Seofaq_DiyQU49q.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://initsource.co.uk");
const $$SeoHowTo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SeoHowTo;
  const { steps = [] } = Astro2.props;
  ({
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.name, text: s.text }))
  });
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">{JSON.stringify(ld)}<\/script>'])));
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/components/SeoHowTo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "Who is this not for?",
      a: "Not a fit for:",
      bullets: [
        "Teams wanting high-volume CVs",
        "Roles without a defined budget or seniority",
        "Contract-first volume hiring"
      ]
    },
    { q: "How are candidates screened?", a: "We use technical screening aligned to your stack plus structured notes on fit, availability, and compensation." },
    { q: "Do you do contract?", a: "Yes, contract is available on request, but UK permanent is our primary focus." },
    { q: "What's your fee model?", a: "Our fee model is outlined in the Terms of Business summary." },
    { q: "Can you work confidentially?", a: "Yes. We do not send candidate details without permission." }
  ];
  const seoFaqs = faqs.map(({ q, a }) => ({ q, a }));
  const steps = [
    { name: "Calibration", text: "Define the scorecard, stack, and success outcomes." },
    { name: "Screening", text: "Targeted outreach, technical checks, and structured notes." },
    { name: "Shortlist", text: "2-5 high-signal candidates with availability and comp expectations." }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Init Source Ltd | Platform / SRE / DevOps Recruitment UK", "description": "Cloud Platform & Reliability recruitment for UK permanent roles. 2-5 screened candidates per role.", "image": `${BRAND.domain}/og-image.jpg`, "canonical": `${BRAND.domain}/` }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="section bg-neutral-light transition-colors dark:bg-slate-900"> <div class="container maxw"> <div class="max-w-3xl"> <h1 class="h1 font-extrabold text-text dark:text-slate-100">Platform / SRE / DevOps recruitment (UK perm)</h1> <p class="lead mt-5">
Cloud Platform & Reliability hires. 2-5 candidates. No CV spam.
</p> <div class="mt-8">\\n ${renderComponent($$result2, "CTA", $$CTA, { "href": "#book", "label": "Book a 15-min calibration call" })}\\n </div>\\n <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Candidates: <a href="/candidates" class="font-semibold text-[#007BFF] transition hover:text-slate-900 dark:text-accent dark:hover:text-white">Get represented -></a></p>\\n <p class="mt-3 text-sm text-gray-500 dark:text-slate-400">No obligation - we'll tell you in 15 minutes if we can help.</p> </div> </div> </section>  <section id="roles" class="section bg-white transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
Roles we fill
</h2> <p class="mt-3 max-w-2xl text-lg text-slate-500 dark:text-slate-300">
Specialist permanent roles across Platform, Reliability, and DevOps engineering.
</p> <div class="mt-10 grid gap-6 md:grid-cols-2"> ${[
    "Platform Engineer",
    "Site Reliability Engineer (SRE)",
    "DevOps Engineer",
    "Cloud Infrastructure Engineer"
  ].map((role) => renderTemplate`<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">${role}</h3> <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">
UK permanent hires aligned to your stack, scale, and team expectations.
</p> </div>`)} </div> </div> </section>  <section class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw grid gap-8 md:grid-cols-2 items-center"> <div> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
Typical 7-day shortlist
</h2> <p class="mt-3 text-lg text-slate-500 dark:text-slate-300">
Once the brief is calibrated, we aim to deliver a focused 2–5 candidate shortlist within ~7 days.
          If the role is niche or the bar is high, we'll tell you upfront.
</p> </div> <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"> <p class="text-lg font-semibold text-slate-900 dark:text-slate-100">What you can expect</p> <ul class="mt-4 space-y-3 text-slate-600 dark:text-slate-300"> <li>Calibration call within 48 hours</li> <li>Technical screening and written notes</li> <li>Fast feedback loops and transparent updates</li> </ul> </div> </div> </section> ${renderComponent($$result2, "ScreeningChecklist", $$ScreeningChecklist, {})}  <section id="process" class="bg-white py-20 transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
Streamlined <span class="text-[#007BFF] dark:text-accent">Platform Hiring Process</span> </h2> <p class="mt-3 max-w-2xl text-lg text-slate-500 dark:text-slate-300">
Simple, transparent, and fast from calibration to offer.
</p> <!-- Progress indicator --> <div class="relative mt-12 hidden md:block"> <div class="h-1 w-full rounded-full bg-gray-200 dark:bg-slate-700"></div> <div class="absolute inset-y-0 left-0 h-1 w-1/3 rounded-full bg-[#007BFF] transition-all dark:bg-accent"></div> </div> <!-- Steps --> <div class="mt-12 grid gap-8 md:grid-cols-3"> <!-- Step 1 --> <article class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"> <div class="flex items-center gap-3"> <span class="grid size-10 place-items-center rounded-lg bg-blue-50 text-lg font-bold text-[#007BFF] dark:bg-blue-500/20">1</span> <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Calibrate the Role</h3> </div> <p class="mt-4 leading-snug text-slate-500 dark:text-slate-300">
Scorecard, stack, outcomes, and hiring bar agreed in one focused session.
</p> </article> <!-- Step 2 --> <article class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"> <div class="flex items-center gap-3"> <span class="grid size-10 place-items-center rounded-lg bg-blue-50 text-lg font-bold text-[#007BFF] dark:bg-blue-500/20">2</span> <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Source & Screen</h3> </div> <p class="mt-4 leading-snug text-slate-500 dark:text-slate-300">
Targeted outreach, technical checks, and detailed candidate notes on fit and availability.
</p> </article> <!-- Step 3 --> <article class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"> <div class="flex items-center gap-3"> <span class="grid size-10 place-items-center rounded-lg bg-blue-50 text-lg font-bold text-[#007BFF] dark:bg-blue-500/20">3</span> <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Shortlist</h3> </div> <p class="mt-4 leading-snug text-slate-500 dark:text-slate-300">
2-5 candidates with availability, compensation expectations, and screening notes.
</p> </article> </div> <!-- CTA --> <div class="mt-12"> ${renderComponent($$result2, "CTA", $$CTA, { "href": "#book", "label": "Book a 15-min calibration call", "variant": "secondary" })} </div> </div> </section>   <section class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"> <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Trust & compliance</h2> <p class="mt-3 text-slate-500 dark:text-slate-300">
Init Source Ltd is a UK recruitment company operating as an Employment Agency (perm) and Employment Business (contract).
</p> <div class="mt-4 text-sm text-slate-600 dark:text-slate-300"> <p>Company No: ${BRAND.companyNumber}</p> <p>${BRAND.address}</p> <p>Phone: <a${addAttribute(`tel:${BRAND.tel}`, "href")} class="text-[#007BFF] hover:underline dark:text-accent">${BRAND.tel}</a></p> </div> <div class="mt-4 flex flex-wrap gap-4 text-sm"> <a href="/privacy" class="text-[#007BFF] hover:underline dark:text-accent">Privacy Policy</a> <a href="/terms" class="text-[#007BFF] hover:underline dark:text-accent">Terms of Business</a> </div> </div> </section> <section id="about" class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw grid md:grid-cols-2 items-center gap-12"> <div> <h2 class="h2 font-bold text-text dark:text-slate-100">
About <span class="text-primary">InitSource</span> </h2> <p class="mt-4 text-lg leading-snug text-gray-600 dark:text-slate-300">
InitSource is a specialist recruitment partner for UK teams hiring <strong>Platform, SRE, and DevOps</strong> talent.
          We combine a developer's understanding of cloud infrastructure with structured screening, so you only meet candidates who can actually do the work.
</p> <div class="grid grid-cols-1 sm:grid-cols-3 mt-10 text-center md:text-left gap-8"> <div> <p class="text-xl font-semibold text-primary">Precision Matching</p> <p class="text-sm text-gray-600 dark:text-slate-400">We build a clear profile of what great looks like for your team, then send a small shortlist of candidates who fit on skills, mindset, and impact.</p> </div> <div> <p class="text-xl font-semibold text-primary">Human Expertise</p> <p class="text-sm text-gray-600 dark:text-slate-400">Every candidate is screened in conversation - technical depth, communication, and how they'll affect the team.</p> </div> <div> <p class="text-xl font-semibold text-primary">Transparent Process</p> <p class="text-sm text-gray-600 dark:text-slate-400">Clear expectations, honest feedback, and visibility at every stage. If the brief or market are misaligned, we'll say it.</p> </div> </div> <div class="mt-8 text-sm text-slate-500 dark:text-slate-300">
Learn more about our screening approach in the sections below.
</div> </div> <div class="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 opacity-80 shadow-lg transition-opacity duration-300 hover:opacity-100 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800"> <img src="/About-section.svg" alt="Recruitment workflow" class="w-full rounded-xl"> </div> </div> </section>  <section class="section bg-white transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
FAQ
</h2> <div class="mt-8 grid gap-6"> ${faqs.map((faq) => renderTemplate`<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">${faq.q}</h3> ${faq.a && renderTemplate`<p class="mt-2 text-slate-500 dark:text-slate-300">${faq.a}</p>`} ${faq.bullets && renderTemplate`<ul class="mt-3 list-disc space-y-2 pl-5 text-slate-500 dark:text-slate-300"> ${faq.bullets.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`} </div>`)} </div> </div> </section>  <section class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw grid gap-8 md:grid-cols-2"> <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Hiring teams</h3> <p class="mt-3 text-slate-500 dark:text-slate-300">
Share your Platform / SRE / DevOps role brief and we will respond quickly.
</p> <div class="mt-6 text-sm text-slate-600 dark:text-slate-300"> <a href="/platform-recruitment-uk" class="font-semibold text-[#007BFF] transition hover:text-slate-900 dark:text-accent dark:hover:text-white">
View the platform hiring page ->
</a> </div> </div> <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Candidates</h3> <p class="mt-3 text-slate-500 dark:text-slate-300">
Get represented for UK permanent Platform, SRE, and DevOps roles.
</p> <div class="mt-6 text-sm text-slate-600 dark:text-slate-300"> <a href="/candidates" class="font-semibold text-[#007BFF] transition hover:text-slate-900 dark:text-accent dark:hover:text-white">
Get represented ->
</a> </div> </div> </div> </section>  <section id="book" class="section bg-white transition-colors dark:bg-slate-950"> <div class="container max-w-3xl mx-auto text-center"> <h2 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100">Book a 15-min calibration call</h2> <p class="mt-3 text-lg text-slate-500 dark:text-slate-300">
Hiring Platform, SRE, or DevOps? Share your brief and we will respond quickly.
</p> <form id="contactForm" class="mt-10 grid gap-5 text-left" data-form="hire"> <input type="hidden" name="_subject" value="New hiring lead from Init Source"> <input type="hidden" name="_redirect" value="https://initsource.co.uk/thanks"> <input type="hidden" name="_type" value="client"> <input type="hidden" name="_source" value="homepage"> <input type="text" name="_gotcha" class="hidden" tabindex="-1" autocomplete="off"> <label class="block"> <span class="sr-only">Your name</span> <input required name="name" placeholder="Your name" class="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400" autocomplete="name"> </label> <label class="block"> <span class="sr-only">Work email</span> <input required type="email" name="email" placeholder="Work email" class="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400" autocomplete="email" inputmode="email"> </label> <label class="block"> <span class="sr-only">Message</span> <textarea required name="message" aria-label="Message" placeholder="Role, stack, salary range, and target start date" class="w-full h-40 rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400"></textarea> </label> <button type="submit" class="rounded-full bg-primary px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent hover:text-slate-900 dark:hover:text-slate-900">
Book a 15-min calibration call
</button> </form> <p id="contactStatus" class="mt-3 text-sm text-gray-500 dark:text-slate-400" aria-live="polite"></p> <p class="mt-6 text-sm text-gray-500 dark:text-slate-400">
By submitting this form, you agree to our
<a href="/privacy" class="text-primary hover:underline dark:text-accent" target="_blank" rel="noopener">Privacy Policy</a>.
</p> <p class="mt-3 text-sm text-gray-500 dark:text-slate-400">
Candidates: use the <a href="/candidates" class="text-primary hover:underline dark:text-accent">Get represented</a> form instead.
</p> </div> ${renderScript($$result2, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template(['  <link rel="preload" as="image" href="/logo-white.svg"> <meta charset="UTF-8">  <script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "EmploymentAgency",\n        "name": BRAND.name ?? "Init Source Ltd",\n        "url": `${BRAND.domain}/`,\n        "logo": `${BRAND.domain}/logo.svg`,\n        "image": `${BRAND.domain}/og-image.jpg`,\n        "description": "UK recruitment for Platform, SRE, and DevOps roles. Fast, precise, human-first hiring.",\n        "email": BRAND.email,\n        "telephone": BRAND.tel,\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "71-75 Shelton Street, Covent Garden",\n          "postalCode": "WC2H 9JQ",\n          "addressLocality": "London",\n          "addressCountry": "GB"\n        },\n        "areaServed": ["GB"],\n        "sameAs": ["https://www.linkedin.com/company/initsource"],\n        "contactPoint": [{\n          "@type": "ContactPoint",\n          "contactType": "Sales",\n          "email": BRAND.email,\n          "telephone": BRAND.tel,\n          "areaServed": "GB",\n          "availableLanguage": ["en"]\n        }]\n      })}\n    <\/script>  ', " ", " "], ['  <link rel="preload" as="image" href="/logo-white.svg"> <meta charset="UTF-8">  <script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "EmploymentAgency",\n        "name": BRAND.name ?? "Init Source Ltd",\n        "url": \\`\\${BRAND.domain}/\\`,\n        "logo": \\`\\${BRAND.domain}/logo.svg\\`,\n        "image": \\`\\${BRAND.domain}/og-image.jpg\\`,\n        "description": "UK recruitment for Platform, SRE, and DevOps roles. Fast, precise, human-first hiring.",\n        "email": BRAND.email,\n        "telephone": BRAND.tel,\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "71-75 Shelton Street, Covent Garden",\n          "postalCode": "WC2H 9JQ",\n          "addressLocality": "London",\n          "addressCountry": "GB"\n        },\n        "areaServed": ["GB"],\n        "sameAs": ["https://www.linkedin.com/company/initsource"],\n        "contactPoint": [{\n          "@type": "ContactPoint",\n          "contactType": "Sales",\n          "email": BRAND.email,\n          "telephone": BRAND.tel,\n          "areaServed": "GB",\n          "availableLanguage": ["en"]\n        }]\n      })}\n    <\/script>  ', " ", " "])), renderComponent($$result3, "Seofaq", $$Seofaq, { "faqs": seoFaqs }), renderComponent($$result3, "SeoHowTo", $$SeoHowTo, { "steps": steps })) })}` })}`;
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro", void 0);

const $$file = "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
