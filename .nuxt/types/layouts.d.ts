import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/seho/Desktop/openSource/sword-website/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}