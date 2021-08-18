# base64-text-decoder

![Node](https://img.shields.io/node/v/base64-text-decoder.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/base64-text-decoder.svg?style=flat-square)](https://www.npmjs.com/package/base64-text-decoder)
[![Travis](https://img.shields.io/travis/jolzee/base64-text-decoder/master.svg?style=flat-square)](https://travis-ci.org/jolzee/base64-text-decoder)
[![David](https://img.shields.io/david/jolzee/base64-text-decoder.svg?style=flat-square)](https://david-dm.org/jolzee/base64-text-decoder)
[![Coverage Status](https://img.shields.io/coveralls/jolzee/base64-text-decoder.svg?style=flat-square)](https://coveralls.io/github/jolzee/base64-text-decoder)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)
[![NPM](https://img.shields.io/npm/dt/base64-text-decoder.svg?style=flat-square)](https://www.npmjs.com/package/base64-text-decoder)

> Extracts text from raw requests. Aditionally extracts text that has been base64 encoded

### Usage

```js
import decoder from "base64-text-decoder";
```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

    yarn add base64-text-decoder

or npm

    npm install base64-text-decoder

### example

```js
import decoder from "base64-text-decoder";

let partialEncoded = {
  email: "myemail@email.com",
  emailBase64: "bXllbWFpbEBlbWFpbC5jb20=",
  passwordBase64: "bXlwYXNzd29yZA==",
  anotherNested: {
    passwordBase64: "bXlwYXNzd29yZA==",
  },
};
let arrayWithEncodedElements = [
  "Peter",
  "bXlwYXNzd29yZA==",
  partialEncoded,
  ["bXlwYXNzd29yZA=="],
];
let decodedTextResult = decoder.getText(partialEncoded);
let decodedFromStringResult = decoder.getText(JSON.stringify(partialEncoded));
let simpleStringResult = decoder.getText("bXlwYXNzd29yZA==");
let arrayTextResult = decoder.getText(arrayWithEncodedElements);
let searchTextResult = decoder.getSearchText(
  "?secret=bXlwYXNzd29yZA==&email=myemail%40email.com"
);

console.log(`Decoded Text Result`, decodedTextResult);
console.log(`Decoded Stringified Object`, decodedFromStringResult);
console.log(`Decoded Simple String`, simpleStringResult);
console.log(`Decoded Array`, arrayTextResult);
console.log(`Decoded URL search`, searchTextResult);
```

### methods

```js
getText(); // accepts String, Array, Object
```

```js
getSearchText(); // accepts a URL search string ?secret=bXlwYXNzd29yZA==&email=myemail%40email.com
```

### Examples

See [`example`](example/script.js) folder.

### Builds

If you don't use a package manager, you can [access `base64-text-decoder` via unpkg (CDN)](https://unpkg.com/base64-text-decoder/), download the source, or point your package manager to the url.

`base64-text-decoder` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
-9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `base64-text-decoder` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/base64-text-decoder/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/base64-text-decoder) on your page. The UMD builds make `base64-text-decoder` available as a `window.requestTextExtractor` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-jolzee-node-module](https://github.com/jolzee/generator-jolzee-node-module).
