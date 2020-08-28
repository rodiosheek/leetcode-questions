import {encodeNumbersToRoman} from '@/Codewars/EncodeNumbersToRoman';

describe.only('Transform decimal numbers to rome', () => {
    it('10 => X', () => {
        const tmp = encodeNumbersToRoman(10);

        expect(tmp).to.equal('X');
    })

    it('2020 => MMXX', () => {
        const tmp = encodeNumbersToRoman(2020);

        expect(tmp).to.equal('MMXX');
    })

    it('1912 => MCMXII', () => {
        const tmp = encodeNumbersToRoman(1912);

        expect(tmp).to.equal('MCMXII');
    })

    it('2000 => MM', () => {
        const tmp = encodeNumbersToRoman(2000);

        expect(tmp).to.equal('MM');
    })

    it('14 => XIV', () => {
        const tmp = encodeNumbersToRoman(14);

        expect(tmp).to.equal('XIV');
    })

    it('21 => XXI', () => {
        const tmp = encodeNumbersToRoman(21);

        expect(tmp).to.equal('XXI');
    })

    it('1 => I', () => {
        const tmp = encodeNumbersToRoman(1);

        expect(tmp).to.equal('I');
    })

    it('4 => IV', () => {
        const tmp = encodeNumbersToRoman(4);

        expect(tmp).to.equal('IV');
    })

    it('2008 => MMVIII', () => {
        const tmp = encodeNumbersToRoman(2008);

        expect(tmp).to.equal('MMVIII');
    })

    it('1666 => MDCLXVI', () => {
        const tmp = encodeNumbersToRoman(1666);

        expect(tmp).to.equal('MDCLXVI');
    })
})