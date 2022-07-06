
// --------------------
// Request: /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs ($id_01b7b628)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/paths.mjs ($id_ddd46e74)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/css.mjs ($id_a61e8307)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/root-component.mjs ($id_9da450b6)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/app-component.mjs ($id_9f1a84eb)
// --------------------
const $id_5da89afc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/components.plugin.mjs ($id_aa82cdd7)
// - /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs ($id_438a5406)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_9680c712)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs ($id_78559c1b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs ($id_7e11cc02)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs ($id_be70c5c2)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs ($id_4594e510)
// - /components/Header.vue ($id_4e284fc3)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b79b7992 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 

// --------------------
const $id_01b7b628 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/paths.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// --------------------
const $id_ddd46e74 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/paths.mjs ($id_ddd46e74)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 

// --------------------
const $id_495ace14 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_c519006a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs ($id_efa9f6c9)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_48cedfc3)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs ($id_be70c5c2)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs ($id_8456c3bf)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// --------------------
const $id_766abaf4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs ($id_1a92400c)
// - /node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs ($id_d6fb3d59)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// --------------------
const $id_10acdc10 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 

// --------------------
const $id_1a92400c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 

// --------------------
const $id_d6fb3d59 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 
// - /node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs ($id_05d98782)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// --------------------
const $id_a8337ab8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// Dependencies: 

// --------------------
const $id_05d98782 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_c519006a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs ($id_efa9f6c9)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// --------------------
const $id_ddfc5c1d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js ($id_9735b15d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// --------------------
const $id_bb679022 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// Dependencies: 

// --------------------
const $id_9735b15d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_55f07f6c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_5fb452ea = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_c519006a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_15536816 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_efa9f6c9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs ($id_138a9c06)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// --------------------
const $id_e6e5acd2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// Dependencies: 

// --------------------
const $id_138a9c06 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs ($id_1c0537b7)
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs ($id_622c7ff8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_51244472 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 

// --------------------
const $id_1c0537b7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 

// --------------------
const $id_0a9d87b7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 

// --------------------
const $id_622c7ff8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_03dc0f08 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_904700ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// --------------------
const $id_8456c3bf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs ($id_8456c3bf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_7351f7c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// --------------------
const $id_cfdcd588 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 
// - /node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js ($id_d7d09eda)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_5298d07a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// Dependencies: 

// --------------------
const $id_d7d09eda = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/css.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 

// --------------------
const $id_a61e8307 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_48cedfc3)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/components.plugin.mjs ($id_aa82cdd7)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/unocss.mjs ($id_f9e4542b)
// --------------------
const $id_1715962e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/unocss.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_48cedfc3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_aa82cdd7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs ($id_438a5406)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs ($id_c379efc8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_dbc1312b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_438a5406 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// Dependencies: 

// --------------------
const $id_c379efc8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/meta.config.mjs ($id_5542a21e)
// --------------------
const $id_a9cfc40a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// --------------------
const $id_788f106d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 

// --------------------
const $id_5542a21e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js ($id_9735b15d)
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs ($id_0f8875ce)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/router.options.mjs ($id_6e1e3eb5)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/middleware.mjs ($id_fc41a7ed)
// --------------------
const $id_f517f1ae = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js ($id_9735b15d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_9680c712)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs ($id_78559c1b)
// --------------------
const $id_fd32b9d6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_9680c712 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs ($id_fd32b9d6)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs ($id_be70c5c2)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_78559c1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_0f8875ce = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "index",
    path: "/",
    file: "/Users/seho/Desktop/openSource/sword-website/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs ($id_0f8875ce)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  
}


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_0__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_1__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /components/Header.vue ($id_4e284fc3)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs ($id_0f8875ce)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  
}


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_0__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_1__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/pages/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 

// --------------------
const $id_6e1e3eb5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs ($id_f517f1ae)
// Dependencies: 

// --------------------
const $id_fc41a7ed = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/unocss.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs ($id_1715962e)
// Dependencies: 
// - /__uno.css ($id_7174fecb)
// --------------------
const $id_f9e4542b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/__uno.css");

__vite_ssr_exports__.default = () => {};;
}


// --------------------
// Request: /__uno.css
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/unocss.mjs ($id_f9e4542b)
// Dependencies: 

// --------------------
const $id_7174fecb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::-webkit-backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.z-20{z-index:20}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.h-auto{height:auto}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.w-full{width:100%}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.cursor-pointer{cursor:pointer}.place-content-center{place-content:center}.items-center{align-items:center}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:rgba(0,0,0,.05)}.bg-white{--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity))}.dark .dark\\:bg-black{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.dark .dark\\:bg-white\\/10{background-color:hsla(0,0%,100%,.1)}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pt-14{padding-top:3.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.text-6xl{font-size:3.75rem;line-height:1}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.dark .dark\\:text-white{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.text-black{--un-text-opacity:1;color:rgba(0,0,0,var(--un-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/root-component.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// --------------------
const $id_9da450b6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/root-component.mjs ($id_9da450b6)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/error-component.mjs ($id_7a0a6cad)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f4b707cc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// --------------------
const $id_7a0a6cad = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/error-component.mjs ($id_7a0a6cad)
// Dependencies: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ba924238 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_0277a538)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6b0e98cf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-11469db4><div class="fixed left-0 right-0 spotlight z-10" data-v-11469db4></div><div class="max-w-520px text-center z-20" data-v-11469db4><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-11469db4>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-11469db4>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-11469db4>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-11469db4"],['__file',"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_31b64ebc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_bbde79f7)
// --------------------
const $id_2cbbe295 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs ($id_7e11cc02)
// --------------------
const $id_31b64ebc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_31b64ebc)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_7e11cc02 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// Dependencies: 

// --------------------
const $id_bbde79f7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /components/Header.vue ($id_4e284fc3)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_86c2af1b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// Dependencies: 

// --------------------
const $id_0277a538 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-11469db4]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-11469db4]{cursor:pointer}.flex[data-v-11469db4]{display:flex}.grid[data-v-11469db4]{display:grid}.place-content-center[data-v-11469db4]{place-content:center}.items-center[data-v-11469db4]{align-items:center}.justify-center[data-v-11469db4]{justify-content:center}.font-sans[data-v-11469db4]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-11469db4]{font-weight:500}.font-light[data-v-11469db4]{font-weight:300}.text-8xl[data-v-11469db4]{font-size:6rem;line-height:1}.text-xl[data-v-11469db4]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-11469db4]{line-height:1.25}.mb-8[data-v-11469db4]{margin-bottom:2rem}.mb-16[data-v-11469db4]{margin-bottom:4rem}.max-w-520px[data-v-11469db4]{max-width:520px}.min-h-screen[data-v-11469db4]{min-height:100vh}.overflow-hidden[data-v-11469db4]{overflow:hidden}.px-8[data-v-11469db4]{padding-left:2rem;padding-right:2rem}.py-2[data-v-11469db4]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-11469db4]{padding-left:1rem;padding-right:1rem}.fixed[data-v-11469db4]{position:fixed}.left-0[data-v-11469db4]{left:0}.right-0[data-v-11469db4]{right:0}.text-center[data-v-11469db4]{text-align:center}.text-black[data-v-11469db4]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-11469db4]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-11469db4]{width:100%}.z-10[data-v-11469db4]{z-index:10}.z-20[data-v-11469db4]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-11469db4]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-11469db4]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-11469db4]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-11469db4]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-11469db4]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-11469db4]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-11469db4]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-11469db4]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-11469db4]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-11469db4]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-11469db4]{background-color:#ffffff4d}.gradient-border[data-v-11469db4]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-11469db4]{background-color:#1414144d}.gradient-border[data-v-11469db4]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-11469db4]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-11469db4]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_f91ec644)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_aaca7844 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-2c0a8e63><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-2c0a8e63></div><div class="max-w-520px text-center" data-v-2c0a8e63><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-2c0a8e63>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-2c0a8e63>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2c0a8e63"],['__file',"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// Dependencies: 

// --------------------
const $id_f91ec644 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-2c0a8e63]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-2c0a8e63]{display:grid}.place-content-center[data-v-2c0a8e63]{place-content:center}.font-sans[data-v-2c0a8e63]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-2c0a8e63]{font-weight:500}.font-light[data-v-2c0a8e63]{font-weight:300}.h-1\\/2[data-v-2c0a8e63]{height:50%}.text-8xl[data-v-2c0a8e63]{font-size:6rem;line-height:1}.text-xl[data-v-2c0a8e63]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-2c0a8e63]{line-height:1.25}.mb-8[data-v-2c0a8e63]{margin-bottom:2rem}.mb-16[data-v-2c0a8e63]{margin-bottom:4rem}.max-w-520px[data-v-2c0a8e63]{max-width:520px}.min-h-screen[data-v-2c0a8e63]{min-height:100vh}.overflow-hidden[data-v-2c0a8e63]{overflow:hidden}.px-8[data-v-2c0a8e63]{padding-left:2rem;padding-right:2rem}.fixed[data-v-2c0a8e63]{position:fixed}.left-0[data-v-2c0a8e63]{left:0}.right-0[data-v-2c0a8e63]{right:0}.-bottom-1\\/2[data-v-2c0a8e63]{bottom:-50%}.text-center[data-v-2c0a8e63]{text-align:center}.text-black[data-v-2c0a8e63]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-2c0a8e63]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-2c0a8e63]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-2c0a8e63]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-2c0a8e63]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-2c0a8e63]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-2c0a8e63]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-2c0a8e63]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs ($id_2cbbe295)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e225fa28)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_74fc6fbe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-409ab583><div class="fixed left-0 right-0 spotlight" data-v-409ab583></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-409ab583>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-409ab583>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-409ab583><pre class="text-xl font-light leading-tight z-10 p-8" data-v-409ab583>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-409ab583"],['__file',"/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// Dependencies: 

// --------------------
const $id_e225fa28 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-409ab583]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-409ab583]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-409ab583]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-409ab583]{display:flex}.flex-col[data-v-409ab583]{flex-direction:column}.flex-1[data-v-409ab583]{flex:1 1 0%}.font-sans[data-v-409ab583]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-409ab583]{font-weight:500}.font-light[data-v-409ab583]{font-weight:300}.h-auto[data-v-409ab583]{height:auto}.text-xl[data-v-409ab583]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-409ab583]{font-size:3.75rem;line-height:1}.leading-tight[data-v-409ab583]{line-height:1.25}.mb-8[data-v-409ab583]{margin-bottom:2rem}.mb-6[data-v-409ab583]{margin-bottom:1.5rem}.min-h-screen[data-v-409ab583]{min-height:100vh}.overflow-y-auto[data-v-409ab583]{overflow-y:auto}.p-8[data-v-409ab583]{padding:2rem}.px-10[data-v-409ab583]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-409ab583]{padding-top:3.5rem}.fixed[data-v-409ab583]{position:fixed}.left-0[data-v-409ab583]{left:0}.right-0[data-v-409ab583]{right:0}.text-black[data-v-409ab583]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-409ab583]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-409ab583]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-409ab583]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-409ab583]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-409ab583]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-409ab583]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-409ab583]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-409ab583]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/app-component.mjs
// Parents: 
// - /Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_5da89afc)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_9f1a84eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/app-component.mjs ($id_9f1a84eb)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs ($id_be70c5c2)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/app.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs ($id_78559c1b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs ($id_4594e510)
// --------------------
const $id_be70c5c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs ($id_be70c5c2)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_4594e510 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs ($id_4594e510)
// Dependencies: 
// - /components/Header.vue ($id_4e284fc3)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "sword-main" }, _attrs))}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Header, null, null, _parent))
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/layouts/default.vue"]]);
}


// --------------------
// Request: /components/Header.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4e284fc3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: "sword-header",
    flex: "",
    justify: "between",
    align: "items-center"
  }, _attrs))}><!-- logo --><img src="/images/logo.svg" alt=""><div class="tab" flex align="items-center"><div class="tab-content" flex align="items-center"><div flex class="tab-content-item"> sword.js <div class="i-tabler-flame"></div></div><div class="tab-content-item" m="l-3"> sword app </div><div class="tab-content-item" m="l-3"> concat us </div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Header.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/seho/Desktop/openSource/sword-website/components/Header.vue"]]);
}


const __modules__ = {
  "/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry": $id_5da89afc,
  "/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js": $id_b79b7992,
  "/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs": $id_01b7b628,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/paths.mjs": $id_ddd46e74,
  "/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs": $id_495ace14,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs": $id_766abaf4,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs": $id_10acdc10,
  "/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs": $id_1a92400c,
  "/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs": $id_d6fb3d59,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a8337ab8,
  "/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs": $id_05d98782,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs": $id_ddfc5c1d,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs": $id_bb679022,
  "/node_modules/.pnpm/vue-router@4.1.1_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js": $id_9735b15d,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_55f07f6c,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs": $id_5fb452ea,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_c519006a,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs": $id_15536816,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs": $id_efa9f6c9,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_e6e5acd2,
  "/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs": $id_138a9c06,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_51244472,
  "/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs": $id_1c0537b7,
  "/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs": $id_0a9d87b7,
  "/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs": $id_622c7ff8,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_03dc0f08,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs": $id_904700ca,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs": $id_8456c3bf,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_7351f7c2,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs": $id_cfdcd588,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_5298d07a,
  "/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js": $id_d7d09eda,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/css.mjs": $id_a61e8307,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/plugins/server.mjs": $id_1715962e,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_48cedfc3,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/components.plugin.mjs": $id_aa82cdd7,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_dbc1312b,
  "/node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs": $id_438a5406,
  "/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs": $id_c379efc8,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a9cfc40a,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs": $id_788f106d,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/meta.config.mjs": $id_5542a21e,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_f517f1ae,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_fd32b9d6,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_9680c712,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/utils.mjs": $id_78559c1b,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/routes.mjs": $id_0f8875ce,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/index.vue": $id_cca58e97,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/router.options.mjs": $id_6e1e3eb5,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/middleware.mjs": $id_fc41a7ed,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/unocss.mjs": $id_f9e4542b,
  "/__uno.css": $id_7174fecb,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/root-component.mjs": $id_9da450b6,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_f4b707cc,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/error-component.mjs": $id_7a0a6cad,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_ba924238,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_6b0e98cf,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/imports.mjs": $id_2cbbe295,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_31b64ebc,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs": $id_7e11cc02,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_bbde79f7,
  "/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js": $id_86c2af1b,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_0277a538,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_aaca7844,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_f91ec644,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_74fc6fbe,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e225fa28,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/app-component.mjs": $id_9f1a84eb,
  "/app.vue": $id_2b46e842,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/layout.mjs": $id_be70c5c2,
  "/@id/virtual:nuxt:/Users/seho/Desktop/openSource/sword-website/.nuxt/layouts.mjs": $id_4594e510,
  "/layouts/default.vue": $id_7689e89d,
  "/components/Header.vue": $id_4e284fc3
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry")