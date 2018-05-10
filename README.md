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
  "plugins": ["syntax-lazy-import"]
}
```

## Example

Converts

```js
const component = lazyImport('./xx.js')
```

to

```js
const component = () => import('./xx.js')
```