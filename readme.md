# ky-universal

> Use Ky in both Node.js and browsers

**As of [Ky 1.0.0](https://github.com/sindresorhus/ky/releases/tag/v1.0.0), it runs natively on Node.js. So this package is no longer needed.**

[Ky](https://github.com/sindresorhus/ky) is made for browsers, but this package makes it possible to use it in Node.js too, by polyfilling most of the required browser APIs using [`node-fetch`](https://github.com/bitinn/node-fetch).

This package can be useful for:
- Isomorphic code
- Web apps (React, Vue.js, etc.) that use server-side rendering (SSR)
- Testing browser libraries using a Node.js test runner

**Note:** Before opening an issue, make sure it's an issue with Ky and not its polyfills. Generally, if something works in the browser, but not in Node.js, it's an issue with `node-fetch`.

Keep in mind that Ky targets [modern browsers](https://github.com/sindresorhus/ky#browser-support) when used in the browser. For older browsers, you will need to transpile and use a [`fetch` polyfill](https://github.com/github/fetch).

## Install

```sh
npm install ky ky-universal
```

*Note that you also need to install `ky`.*

## Usage

```js
import ky from 'ky-universal';

const parsed = await ky('https://httpbin.org/json').json();

// …
```

## `ReadableStream` support

For [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) support, also install [`web-streams-polyfill`](https://github.com/MattiasBuelens/web-streams-polyfill):

```
$ npm install web-streams-polyfill
```

You can then use it normally:

```js
import ky from 'ky-universal';

const {body} = await ky('https://httpbin.org/bytes/16');
const {value} = await body.getReader().read();
const result = new TextDecoder('utf-8').decode(value);

// …
```

## API

The API is exactly the same as the [Ky API](https://github.com/sindresorhus/ky#api), including the [named exports](https://github.com/sindresorhus/ky#httperror).

## FAQ

#### How do I use this with a web app (React, Vue.js, etc.) that uses server-side rendering (SSR)?

Use it like you would use Ky:

```js
import ky from 'ky-universal';

const parsed = await ky('https://httpbin.org/json').json();

// …
```

Webpack will ensure the polyfills are only included and used when the app is rendered on the server-side.

#### How do I test a browser library that uses Ky in AVA?

Put the following in package.json:

```json
{
	"ava": {
		"require": [
			"ky-universal"
		]
	}
}
```

The library that uses Ky will now *just work* in AVA tests.

#### `clone()` hangs with a large response in Node - What should I do?

Streams in Node.js have a smaller internal buffer size (16 kB, aka `highWaterMark`) than browsers (>1 MB, not consistent across browsers). When using Ky, the default `highWaterMark` is set to 10 MB, so you shouldn't encounter many issues related to that.

However, you can specify a custom `highWaterMark` if needed:

```js
import ky from 'ky-universal';

const response = await ky('https://example.com', {
	// 20 MB
	highWaterMark: 1000 * 1000 * 20
});

const data = await response.clone().buffer();
```

## Related

- [ky](https://github.com/sindresorhus/ky) - Tiny and elegant HTTP client based on the browser Fetch API
- [got](https://github.com/sindresorhus/got) - Simplified HTTP requests in Node.js
