import {expectType} from 'tsd';
import ky, {ResponsePromise} from '.';

expectType<ResponsePromise>(ky('https://sindresorhus.com'));
