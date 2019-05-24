'use strict';
const {URL, URLSearchParams} = require('url');
const fetch = require('node-fetch');
const AbortController = require('abort-controller');

if (!global.URL) {
	global.URL = URL;
	global.URLSearchParams = URLSearchParams;
}

if (!global.fetch) {
	global.fetch = fetch;
	global.Headers = fetch.Headers;
	global.Response = fetch.Response;
	global.AbortController = AbortController;
}

const {
	default: ky,
	HTTPError,
	TimeoutError
} = require('ky/umd');

module.exports = ky;
module.exports.default = ky;
module.exports.HTTPError = HTTPError;
module.exports.TimeoutError = TimeoutError;
