import 'kleur/colors';
import { q as decodeKey } from './chunks/astro/server_3LB-Gecs.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BiKFGRM6.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/","cacheDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/node_modules/.astro/","outDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/dist/","srcDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/","publicDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/public/","buildClientDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/dist/client/","buildServerDir":"file:///C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/candidates","isIndex":false,"type":"page","pattern":"^\\/candidates\\/?$","segments":[[{"content":"candidates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/candidates.astro","pathname":"/candidates","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/platform-recruitment-uk","isIndex":false,"type":"page","pattern":"^\\/platform-recruitment-uk\\/?$","segments":[[{"content":"platform-recruitment-uk","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/platform-recruitment-uk.astro","pathname":"/platform-recruitment-uk","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/thanks","isIndex":false,"type":"page","pattern":"^\\/thanks\\/?$","segments":[[{"content":"thanks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thanks.astro","pathname":"/thanks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/candidates.Bvt3zBIZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://initsource.co.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/candidates.astro",{"propagation":"none","containsHead":true}],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro",{"propagation":"none","containsHead":true}],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/thanks.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/candidates@_@astro":"pages/candidates.astro.mjs","\u0000@astro-page:src/pages/platform-recruitment-uk@_@astro":"pages/platform-recruitment-uk.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/thanks@_@astro":"pages/thanks.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DFK2VHy1.mjs","C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_TPK5zmow.mjs","C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/candidates.astro?astro&type=script&index=0&lang.ts":"_astro/candidates.astro_astro_type_script_index_0_lang.N03JqGBM.js","C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro?astro&type=script&index=0&lang.ts":"_astro/platform-recruitment-uk.astro_astro_type_script_index_0_lang.C_4sLk6p.js","C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BZXQpSda.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/candidates.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"candidateForm\"),n=document.getElementById(\"candidateStatus\");e.addEventListener(\"submit\",async o=>{o.preventDefault(),n.textContent=\"Submitting...\";const s=Object.fromEntries(new FormData(e).entries()),t=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(s)}),a=await t.json().catch(()=>({}));t.ok&&a.ok?(n.textContent=\"Thanks - we will be in touch if there is a fit.\",e.reset()):n.textContent=\"Submission failed: \"+(a.error||t.status)});"],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/platform-recruitment-uk.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"platformContactForm\"),n=document.getElementById(\"platformContactStatus\");a.addEventListener(\"submit\",async s=>{s.preventDefault(),n.textContent=\"Submitting...\";const o=Object.fromEntries(new FormData(a).entries()),t=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)}),e=await t.json().catch(()=>({}));t.ok&&e.ok?(n.textContent=\"Thanks - we will reply shortly.\",window.location.href=e.redirect||o._redirect||\"/thanks\"):n.textContent=\"Submission failed: \"+(e.error||t.status)});"],["C:/Users/hp/OneDrive/Desktop/initSourceWebSite/init-source/src/pages/index.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"contactForm\"),n=document.getElementById(\"contactStatus\");a.addEventListener(\"submit\",async s=>{s.preventDefault(),n.textContent=\"Submitting...\";const o=Object.fromEntries(new FormData(a).entries()),t=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)}),e=await t.json().catch(()=>({}));t.ok&&e.ok?(n.textContent=\"Thanks - we will reply shortly.\",window.location.href=e.redirect||o._redirect||\"/thanks\"):n.textContent=\"Submission failed: \"+(e.error||t.status)});"]],"assets":["/_astro/candidates.Bvt3zBIZ.css","/About-section.svg","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon-48x48.png","/favicon.ico","/favicon.svg","/hero-illustration.svg","/humans.txt","/logo-white.svg","/logo.svg","/og-image.jpg","/robots.txt","/safari-pinned-tab.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"66Ebp3cSvUsvg+A0hR579W0c378AA8I0nq6zQqS4MaI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
