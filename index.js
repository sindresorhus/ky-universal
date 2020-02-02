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

module.exports = require('ky/umd');
