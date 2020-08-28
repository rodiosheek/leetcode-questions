import {decodeRomanNumber} from '@/Codewars/DecodeRomanNumbers';

describe.only('Roman numbers decoder', () => {
    it('I => 1', () => {
        expect(decodeRomanNumber('I')).to.equal(1);
    })

    it('XXI => 21', () => {
        expect(decodeRomanNumber('XXI')).to.equal(21);
    })

    it('IV => 4', () => {
        expect(decodeRomanNumber('IV')).to.equal(4);
    })

    it('MMVIII => 2008', () => {
        expect(decodeRomanNumber('MMVIII')).to.equal(2008);
    })

    it('MDCLXVI => 1666', () => {
        expect(decodeRomanNumber('MDCLXVI')).to.equal(1666);
    })

    it('MMMCMXCIX => 3999', () => {
        expect(decodeRomanNumber('MMMCMXCIX')).to.equal(3999);
    })
})