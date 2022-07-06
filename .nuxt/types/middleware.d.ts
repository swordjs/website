import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}