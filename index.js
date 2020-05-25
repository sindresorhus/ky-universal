'use strict';
const fetch = require('node-fetch');
const AbortController = require('abort-controller');

const DEFAULT = 16384;
const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!global.fetch) {
	global.fetch = options => fetch(options.url, {...options, highWaterMark: options.highWaterMark === DEFAULT ? TEN_MEGABYTES : options.highWaterMark});
}

if (!global.Headers) {
	global.Headers = fetch.Headers;
}

if (!global.Request) {
	global.Request = fetch.Request;
}

if (!global.Response) {
	global.Response = fetch.Response;
}

if (!global.AbortController) {
	global.AbortController = AbortController;
}

if (!global.ReadableStream) {
	try {
		global.ReadableStream = require('web-streams-polyfill/ponyfill/es2018');
	} catch (_) {}
}

module.exports = require('ky/umd');
