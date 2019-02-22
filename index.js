'use strict';
const fetch = require('node-fetch');
const AbortController = require('abort-controller');

if (!global.fetch) {
	global.fetch = fetch;
	global.Headers = fetch.Headers;
	global.Response = fetch.Response;
	global.AbortController = AbortController;
}

const {default: ky} = require('ky/umd');

module.exports = ky;
module.exports.default = ky;
