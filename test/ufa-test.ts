import * as assert from 'power-assert';
import * as gas from '../src/urlfetchapp';

describe('UrlFetchApp', () => {
    it('test for fetch', () => {
        assert.equal(gas.gasFetch('http://www.google.com'), true);
    });
});
