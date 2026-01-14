import { f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead, h as addAttribute, n as renderScript } from '../chunks/astro/server_3LB-Gecs.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_ClHtzgpZ.mjs';
import { B as BRAND, $ as $$Header, a as $$Footer } from '../chunks/Footer_D3hOfjAy.mjs';
import { $ as $$SeoFaq, a as $$CTA, b as $$ScreeningChecklist } from '../chunks/SeoFaq_DYMRUHVB.mjs';
export { renderers } from '../renderers.mjs';

const $$PlatformRecruitmentUk = createComponent(async ($$result, $$props, $$slots) => {
  const canonical = `${BRAND.domain}/platform-recruitment-uk`;
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
    {
      q: "How are candidates screened?",
      a: "We screen against your stack with practical checks plus structured notes on fit, availability, and compensation."
    },
    {
      q: "Do you do contract?",
      a: "Yes, contract is available on request, but UK permanent hires are our primary focus."
    },
    {
      q: "What's your fee model?",
      a: "Our fee model is outlined in the Terms of Business summary. See the Terms page for details."
    },
    {
      q: "Can you work confidentially?",
      a: "Yes. We do not send candidate details without permission and can run confidential searches."
    }
  ];
  const seoFaqs = faqs.map(({ q, a }) => ({ q, a }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Platform / SRE / DevOps Recruitment UK | Init Source", "description": "Platform / SRE / DevOps recruitment for UK permanent roles. 2-5 screened candidates per role with real technical screening.", "image": `${BRAND.domain}/og-image.jpg`, "canonical": canonical }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="section bg-neutral-light transition-colors dark:bg-slate-900"> <div class="container maxw"> <div class="max-w-3xl"> <h1 class="h1 font-extrabold text-text dark:text-slate-100">Platform / SRE / DevOps recruitment (UK perm)</h1> <p class="lead mt-5">Cloud Platform & Reliability hires. 2-5 candidates. No CV spam.</p> <p class="mt-4 text-lg text-gray-600 dark:text-slate-300">
We run a focused search with real technical screening so you only meet candidates who can do the work.
</p> <div class="mt-8"> ${renderComponent($$result2, "CTA", $$CTA, { "href": "#book", "label": "Book a 15-min calibration call" })} </div> <p class="mt-3 text-sm text-gray-500 dark:text-slate-400">No obligation - we'll tell you in 15 minutes if we can help.</p> </div> </div> </section>  <section id="roles" class="section bg-white transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
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
</p> </div> <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"> <p class="text-lg font-semibold text-slate-900 dark:text-slate-100">What you can expect</p> <ul class="mt-4 space-y-3 text-slate-600 dark:text-slate-300"> <li>Calibration call within 48 hours</li> <li>Real technical screening and written notes</li> <li>Fast feedback loops and transparent updates</li> </ul> </div> </div> </section> ${renderComponent($$result2, "ScreeningChecklist", $$ScreeningChecklist, {})}  <section class="section bg-white transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
Short, structured process
</h2> <div class="mt-10 grid gap-6 md:grid-cols-3"> ${[
    { title: "Calibration", text: "Scorecard, stack, outcomes, and hiring bar agreed." },
    { title: "Screening", text: "Targeted outreach, technical checks, and structured notes." },
    { title: "Shortlist", text: "2-5 candidates with availability and comp expectations." }
  ].map((step) => renderTemplate`<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">${step.title}</h3> <p class="mt-3 text-slate-500 dark:text-slate-300">${step.text}</p> </div>`)} </div> <div class="mt-8"> ${renderComponent($$result2, "CTA", $$CTA, { "href": "#book", "label": "Book a 15-min calibration call", "variant": "secondary" })} </div> </div> </section>  <section class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container maxw rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"> <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Trust & compliance</h2> <p class="mt-3 text-slate-500 dark:text-slate-300">
Init Source Ltd is a UK recruitment company operating as an Employment Agency (perm) and Employment Business (contract).
</p> <div class="mt-4 text-sm text-slate-600 dark:text-slate-300"> <p>Company No: ${BRAND.companyNumber}</p> <p>${BRAND.address}</p> <p>Phone: <a${addAttribute(`tel:${BRAND.tel}`, "href")} class="text-[#007BFF] hover:underline dark:text-accent">${BRAND.tel}</a></p> </div> <div class="mt-4 flex flex-wrap gap-4 text-sm"> <a href="/privacy" class="text-[#007BFF] hover:underline dark:text-accent">Privacy Policy</a> <a href="/terms" class="text-[#007BFF] hover:underline dark:text-accent">Terms of Business</a> </div> </div> </section>  <section class="section bg-white transition-colors dark:bg-slate-950"> <div class="container maxw"> <h2 class="text-4xl font-extrabold text-slate-900 transition-colors md:text-5xl dark:text-slate-100">
FAQ
</h2> <div class="mt-8 grid gap-6"> ${faqs.map((faq) => renderTemplate`<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"> <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">${faq.q}</h3> ${faq.a && renderTemplate`<p class="mt-2 text-slate-500 dark:text-slate-300">${faq.a}</p>`} ${faq.bullets && renderTemplate`<ul class="mt-3 list-disc space-y-2 pl-5 text-slate-500 dark:text-slate-300"> ${faq.bullets.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`} </div>`)} </div> </div> </section>  <section id="book" class="section bg-slate-50 transition-colors dark:bg-slate-950"> <div class="container max-w-3xl mx-auto text-center"> <h2 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100">Book a 15-min calibration call</h2> <p class="mt-3 text-lg text-slate-500 dark:text-slate-300">
Tell us about the Platform, SRE, or DevOps role you are hiring for.
</p> <form id="platformContactForm" class="mt-10 grid gap-5 text-left" data-form="hire"> <input type="hidden" name="_subject" value="Platform hiring lead from Init Source"> <input type="hidden" name="_redirect" value="https://initsource.co.uk/thanks"> <input type="hidden" name="_type" value="client"> <input type="hidden" name="_source" value="platform-landing"> <input type="text" name="_gotcha" class="hidden" tabindex="-1" autocomplete="off"> <label class="block"> <span class="sr-only">Your name</span> <input required name="name" placeholder="Your name" class="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400" autocomplete="name"> </label> <label class="block"> <span class="sr-only">Work email</span> <input required type="email" name="email" placeholder="Work email" class="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400" autocomplete="email" inputmode="email"> </label> <label class="block"> <span class="sr-only">Message</span> <textarea required name="message" aria-label="Message" placeholder="Role, stack, salary range, and target start date" class="w-full h-40 rounded-lg border border-gray-300 px-5 py-4 text-lg transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400"></textarea> </label> <button type="submit" class="rounded-full bg-primary px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent hover:text-slate-900 dark:hover:text-slate-900">
Book a 15-min calibration call
</button> </form> <p id="platformContactStatus" class="mt-3 text-sm text-gray-500 dark:text-slate-400" aria-live="polite"></p> <p class="mt-6 text-sm text-gray-500 dark:text-slate-400">
By submitting this form, you agree to our
<a href="/privacy" class="text-primary hover:underline dark:text-accent" target="_blank" rel="noopener">Privacy Policy</a>.
</p> </div> ${renderScript($$result2, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro?astro&type=script&index=0&lang.ts")} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` <meta charset="UTF-8"> ${renderComponent($$result3, "Seofaq", $$SeoFaq, { "faqs": seoFaqs })} ` })}` })}`;
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro", void 0);

const $$file = "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro";
const $$url = "/platform-recruitment-uk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PlatformRecruitmentUk,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
