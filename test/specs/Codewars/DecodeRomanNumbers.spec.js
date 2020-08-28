import {decodeRomanNumber} from '@/Codewars/DecodeRomanNumbers';

describe('Roman numbers decoder', () => {
    it('I => 1', () => {
        expect(decodeRomanNumber('I')).to.equal(1);
    })
})