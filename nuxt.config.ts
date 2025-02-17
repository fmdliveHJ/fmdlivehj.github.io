// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/', // GitHub Pages 루트에서 동작할 경우 `/` 설정
  },
});
