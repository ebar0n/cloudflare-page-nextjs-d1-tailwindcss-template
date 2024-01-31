<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
  <img alt="Shows all of the tools in the stack for this template, also listed in the README file." src="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Next.js 14 Admin Dashboard Template</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<a href="https://cloudflare-page-nextjs-d1-tailwindcss-template.pages.dev/">Demo</a>
<span> · </span>
<a href="https://github.com/ebar0n/cloudflare-page-nextjs-d1-tailwindcss-template">Clone</a>
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Database - [Cloudflare D1](https://developers.cloudflare.com/d1/)
- ORM - [Drizzle orm](https://orm.drizzle.team/)
- Deployment - [Cloudflare Pages](https://developers.cloudflare.com/pages)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started

> Node version: v19.9.0 or later


Install

```
yarn install
npx wrangler d1 create demo-from-pages
# Replace the output in `wrangler.toml`
```

Create migrations
> Only if you update `app/db/schema.tsx`
```
yarn generate
```

Apply migrations
> Remove `--local` when you want execute for production
```
npx wrangler d1 execute demo-from-pages --file=app/db/drizzle/0000_known_fixer.sql --local
```

Insert a row for testing:
```
npx wrangler d1 execute demo-from-pages --command  "INSERT INTO users (email, name, username) VALUES ('me@site.com', 'Me', 'username');"  --local
```

Read
```
npx wrangler d1 execute demo-from-pages --command  "select * from users limit 1;"
```


Finally, run the following commands to start the development server:

```
yarn pages:watch
yarn pages:dev
```

You should now be able to access the application at http://localhost:3000.

## Deploy into Cloudflare Pages

1. Create proyect into Cloudflare Pages (connect from github and it's okay if the first deployment fails)
2. Set Compatibility flags `nodejs_compat`
3. Set Variables:
```
NODE_ENV=production
NODE_VERSION=v19.9.0
```
4. Config D1 database bindings (connect one db for each env)
```
npx wrangler d1 create demo-from-pages
```
5. Enable Build cache
6. Change Build system version from 2 to 1
7. Retry deploy
