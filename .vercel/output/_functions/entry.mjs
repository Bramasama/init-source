import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_iEutZSyb.mjs';
import { manifest } from './manifest_DFK2VHy1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/candidates.astro.mjs');
const _page3 = () => import('./pages/platform-recruitment-uk.astro.mjs');
const _page4 = () => import('./pages/privacy.astro.mjs');
const _page5 = () => import('./pages/terms.astro.mjs');
const _page6 = () => import('./pages/thanks.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/candidates.astro", _page2],
    ["src/pages/platform-recruitment-uk.astro", _page3],
    ["src/pages/privacy.astro", _page4],
    ["src/pages/terms.astro", _page5],
    ["src/pages/thanks.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5fa479db-2ab0-4ce7-af07-5aabbc52b282",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
