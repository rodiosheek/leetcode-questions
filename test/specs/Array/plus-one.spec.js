import {plusOne, plusOneTypeTwo} from '@/Array/plus-one';

describe('Plus one', () => {
    it('[0] should return [1]', () => {
        const arr = [0];

        expect(plusOne(arr)).to.deep.equal([1]);
    });

    it('[4,3,2,1] should return [4,3,2,2]', () => {
        const arr = [4,3,2,1];

        expect(plusOne(arr)).to.deep.equal([4,3,2,2]);
    });

    it('[9] should return [1,0]', () => {
        const arr = [9];

        expect(plusOne(arr)).to.deep.equal([1,0]);
    });

    it('[1,2,3] should return [1,2,4]', () => {
        const arr = [1,2,3];

        expect(plusOne(arr)).to.deep.equal([1,2,4]);
    });

    it('[9,9,9] should return [1,0,0,0]', () => {
        const arr = [9,9,9];

        expect(plusOne(arr)).to.deep.equal([1,0,0,0]);
    });
});

describe('Plus one type two', () => {
    it('[0] should return [1]', () => {
        const arr = [0];

        expect(plusOneTypeTwo(arr)).to.deep.equal([1]);
    });

    it('[4,3,2,1] should return [4,3,2,2]', () => {
        const arr = [4,3,2,1];

        expect(plusOneTypeTwo(arr)).to.deep.equal([4,3,2,2]);
    });

    it('[9] should return [1,0]', () => {
        const arr = [9];

        expect(plusOneTypeTwo(arr)).to.deep.equal([1,0]);
    });

    it('[1,2,3] should return [1,2,4]', () => {
        const arr = [1,2,3];

        expect(plusOneTypeTwo(arr)).to.deep.equal([1,2,4]);
    });

    it('[9,9,9] should return [1,0,0,0]', () => {
        const arr = [9,9,9];

        expect(plusOneTypeTwo(arr)).to.deep.equal([1,0,0,0]);
    });
});