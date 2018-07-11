# babel-plugin-syntax-dynamic-lazy-import

> Allow parsing of `lazyImport()`

Modules only on demand.

## Installation

```bash
npm install babel-plugin-syntax-dynamic-lazy-import --save-dev
```

## Usage

Via `.babelrc` or babel-loader.

```json
{
  "plugins": ["syntax-dynamic-lazy-import"]
}
```

## Example

```js
const component = lazyImport('./xx.js', 'xxChunkFileName')
```

