'use strict';
const fetch = require('node-fetch');
const AbortController = require('abort-controller');

if (!global.fetch) {
	global.fetch = fetch;
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
