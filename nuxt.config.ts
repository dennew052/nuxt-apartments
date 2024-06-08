// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  baseURL: '/nuxt-apartments/',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/auto-animate"]
})