import {expectType} from 'tsd';
import ky, {type ResponsePromise} from './index.js';

expectType<ResponsePromise>(ky('https://sindresorhus.com'));
