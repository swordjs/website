import { defineNuxtConfig } from "nuxt";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from "@unocss/preset-attributify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    // core options
    shortcuts: {},
    rules: [],
  },

});
