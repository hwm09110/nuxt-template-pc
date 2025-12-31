# 宏途官网

## 构建

### SSR
~~~
pnpm build:prod:ssr | pnpm build
~~~

### SPA
- 测试环境
~~~
pnpm build:test
~~~
- 生产环境
~~~
pnpm build:prod
~~~

### SSG
~~~
pnpm build:prod:ssg
或者 pnpm generate
~~~

## 部署

- 配置 
~~~
ecosystem.config.cjs
~~~

- 启动
~~~
pm2 start ecosystem.config.cjs
~~~ 

- 重启
~~~
pm2 reload HT-OS-PC
或 pm2 restart HT-OS-PC
~~~

## Relation

[Nuxt.js](https://nuxt.com/)