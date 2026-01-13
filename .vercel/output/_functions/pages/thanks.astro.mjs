import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_3LB-Gecs.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_ClHtzgpZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Thanks = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Message Received | Init Source";
  const pageDesc = "Thank you for contacting Init Source. We'll be in touch shortly.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pageTitle, "description": pageDesc }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="section bg-white dark:bg-slate-950 py-24 sm:py-32"> <div class="container max-w-3xl mx-auto text-center"> <h1 class="text-4xl font-extrabold text-primary dark:text-accent sm:text-5xl">
Message Sent!
</h1> <p class="mt-6 text-xl text-slate-700 dark:text-slate-300">
Thank you for reaching out. We've received your message and will 
        be in touch shortly.
</p> <a href="/" class="mt-10 inline-block rounded-full bg-primary px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent hover:text-slate-900 dark:hover:text-slate-900">
&larr; Back to Home
</a> </div> </section> `, "head": ($$result2) => renderTemplate`<meta name="robots" content="noindex">` })}`;
}, "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/thanks.astro", void 0);

const $$file = "C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/thanks.astro";
const $$url = "/thanks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thanks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
