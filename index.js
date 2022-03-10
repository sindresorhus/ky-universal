import fetch, {Headers, Request, Response} from 'node-fetch';
import AbortController from 'abort-controller';
import ky from 'ky';

const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!globalThis.fetch) {
	globalThis.fetch = (url, options) => fetch(url, {highWaterMark: TEN_MEGABYTES, ...options});
}

if (!globalThis.Headers) {
	globalThis.Headers = Headers;
}

if (!globalThis.Request) {
	globalThis.Request = Request;
}

if (!globalThis.Response) {
	globalThis.Response = Response;
}

if (!globalThis.AbortController) {
	globalThis.AbortController = AbortController;
}

if (!globalThis.ReadableStream) {
	try {
		// eslint-disable-next-line node/file-extension-in-import, node/no-unsupported-features/es-syntax
		globalThis.ReadableStream = await import('web-streams-polyfill/ponyfill/es2018');
	} catch {}
}

export default ky;
export * from 'ky';
