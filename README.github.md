<p align="center">
  <img src="banner.svg" alt="vue-is-defined" width="100%" />
</p>

<h1 align="center">vue-is-defined</h1>

<p align="center"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-is-defined"><img src="https://img.shields.io/npm/v/vue-is-defined.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-is-defined"><img src="https://img.shields.io/npm/dm/vue-is-defined.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-is-defined
```

## Usage

```ts
import { isDefined } from '@vueuse/core'

const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>

if (isDefined(example))
  example // Ref<string>
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
