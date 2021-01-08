import test from 'ava';
import ky from './index.js';

test('main', async t => {
	const {slideshow} = await ky('https://httpbin.org/json').json();
	t.is(slideshow.title, 'Sample Slide Show');
});
