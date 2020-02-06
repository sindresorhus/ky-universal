'use strict';
const fetch = require('node-fetch');
const AbortController = require('abort-controller');

// Extracted from https://github.com/Richienb/try-import/blob/master/index.js
function tryImport(name) {
	try {
		return require(name);
	} catch (_) { }
}

const streams = tryImport('web-streams-polyfill/ponyfill/es2018');

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

if (!global.ReadableStream && streams) {
	global.ReadableStream = streams.ReadableStream;
}

module.exports = require('ky/umd');
