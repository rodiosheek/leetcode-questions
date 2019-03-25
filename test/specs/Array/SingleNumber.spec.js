import singleNumber from '@/Array/SingleNumber'

describe('Single Number', () => {

    it('[] => undefined', () => {
        let nums = [];
        let result = singleNumber(nums);

        assert.equal(result, undefined);
    });

    it('[1] => 1', () => {
        let nums = [1];
        let result = singleNumber(nums);

        assert.equal(result, 1);
    });

    it('[-1] => -1', () => {
        let nums = [-1];
        let result = singleNumber(nums);

        assert.equal(result, -1);
    });

    it('[2,2,1] => 1', () => {
        let nums = [2, 2, 1];
        let result = singleNumber(nums);

        assert.equal(result, 1);
    });

    it('[2,3,1,5,3,6,6,2,5] => 1', () => {
        let nums = [2, 3, 1, 5, 3, 6, 6, 2, 5];
        let result = singleNumber(nums);

        assert.equal(result, 1);
    });

    it('[-1,-1,-2] => -2', () => {
        let nums = [-1, -1, -2];
        let result = singleNumber(nums);

        assert.equal(result, -2);
    });

    it('[17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6] => 16', () => {
        let nums = [17, 12, 5, -6, 12, 4, 17, -5, 2, -3, 2, 4, 5, 16, -3, -4, 15, 15, -4, -5, -6];
        let result = singleNumber(nums);

        assert.equal(result, 16);
    });
});
