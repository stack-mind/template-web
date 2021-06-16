# StackMind Web Template

This is a base template to get started building a static website.

It uses the following technologies:

- [svelte-kit](https://kit.svelte.dev/)
- [forestry](https://forestry.io/)
- [typescript](https://www.typescriptlang.org/)
- [sass](https://sass-lang.com/)
- [pnpm](https://pnpm.io/)

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

By default, this template uses the [static adapter](https://www.npmjs.com/package/@sveltejs/adapter-static).

If you need a different adapter, see [adapters](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
