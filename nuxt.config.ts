// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    head: {
      link: [{ rel: 'preload', as: 'script', href: '/_nuxt/index.mjs' }],
    },
  },
  ssr: true,
  components: true,
  nitro: {
    preset: 'vercel',
    output: {
      publicDir: '.output/public',
    },
  },
  css: ['@/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content'],
});
