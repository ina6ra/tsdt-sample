import * as assert from 'power-assert';
import * as _ from '../src/underscore';

describe('Underscore.js', () => {
    it('test for maxList', () => {
        assert.equal(_.maxList([10,1,20,3,4,5]), 20);
    });
});
