<p align="center">
  <img src="banner.svg" alt="vue-is-defined" width="100%" />
</p>

<h1 align="center">vue-is-defined</h1>

<p align="center">A Vue 3 composition API type guard utility that checks if a ref's value is defined (not null or undefined), with proper TypeScript type narrowing for safe property access.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-is-defined"><img src="https://img.shields.io/npm/v/vue-is-defined.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-is-defined"><img src="https://img.shields.io/npm/dm/vue-is-defined.svg" alt="npm downloads" /></a>
  <a href="https://github.com/vuefrag/vue-is-defined/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vue-is-defined.svg" alt="license" /></a>
</p>

## Installation

```bash
npm install vue-is-defined
```

## Usage

```ts
import { isDefined } from 'vue-is-defined';
```

Non-nullish checking type guard for Ref.

```ts
import { isDefined } from 'vue-is-defined'

const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>

if (isDefined(example))
  example // Ref<string>
```

> Extracted from [VueUse](https://vueuse.org/) for standalone use.

## License

MIT
