// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from './build';
loadEnv();

export default defineNuxtConfig({
  compatibilityDate: '2025-12-01',
  ssr: process.env.NUXT_APP_SSR ? (process.env.NUXT_APP_SSR === 'false' ? false : true) : true,
  nitro: {
    preset: process.env.NUXT_APP_NITRO_PRESET || 'node-server', // static | node-server
  },
  spaLoadingTemplate: './spaLoadingTemplate.html',
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: process.env.NUXT_APP_FAVICON_URL || '/favicon.ico',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: '', // 留空 不用写，自动映射.env
    },
  },
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}', 'utils/**'],
  },
  // $env: {
  //   development: {
  //     app: {
  //       baseURL: "/develop/",
  //     },
  //   },
  //   test: {
  //     app: {
  //       baseURL: "/test/",
  //     },
  //   },
  //   production: {
  //     app: {
  //       baseURL: "/public/",
  //     },
  //   },
  // },
  devtools: { enabled: true },
  modules: ['nuxt-windicss', '@nuxtjs/i18n', '@nuxt/eslint', '@ant-design-vue/nuxt', '@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/index.scss" as *;`,
        },
      },
    },
  },
  antd: {
    extractStyle: true, // 开启 SSR 样式抽取（防止闪烁）
  },
  // @ts-ignore  自动导入好像没有，先忽略，先手动导入
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
    storesDirs: ['./app/stores/**'],
  },
  i18n: {
    baseUrl: process.env.NUXT_I18N_BASE_URL,
    lazy: true,
    locales: [
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json', dir: 'ltr', language: 'zh-CN' },
      { code: 'zh-HK', name: '繁体中文', file: 'zh-HK.json', dir: 'ltr', language: 'zh-HK' },
      { code: 'en', name: 'English', file: 'en.json', dir: 'ltr', language: 'en-US' },
    ],
    langDir: 'locales',
    defaultLocale: 'zh-HK',
    // strategy: 'no_prefix',
    strategy: 'prefix_and_default', // 繁体路由显示为 /zh-HK/xxx
    vueI18n: './i18n.config.ts',
    // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
    // nuxt-i18n 会在 cookie 中添加一个用于存储当前语言环境的变量，当我们修改语言时，nuxt-i18n 会更新它
    detectBrowserLanguage: {
      // 启动 cookie
      useCookie: true,
      // 用于存储当前语言环境的变量名
      cookieKey: 'i18n_redirected',
      // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是“no_prefix”时才有效。
      redirectOn: 'root',
    },
  },
});
