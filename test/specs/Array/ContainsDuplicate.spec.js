import containsDuplicate from '@/Array/ContainsDuplicate'

describe('Contains Duplicate', () => {
    it('[]  => false', () => {
        let nums = [];

        let res = containsDuplicate(nums);

        expect(res).to.be.false

    })

    it('[1, 3, 4, 1, 5] => true', () => {
        let nums = [1, 3, 4, 1, 5];

        let res = containsDuplicate(nums);

        expect(res).to.be.true
    });

    it('[3,3] => true', () => {
        let nums = [3, 3];

        let res = containsDuplicate(nums);

        expect(res).to.be.true
    });

    it('[3,1] => false', () => {
        let nums = [3, 1];

        let res = containsDuplicate(nums);

        expect(res).to.be.false
    });
});
