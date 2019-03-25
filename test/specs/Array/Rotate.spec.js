import rotate from '@/Array/Rotate'

describe('Rotate an array of n elements to the right by k steps. rotate(nums, k)', () => {

    it(' k = 3, [1,2,3,4,5,6,7] => [5,6,7,1,2,3,4]', () => {
        let nums = [1, 2, 3, 4, 5, 6, 7];

        rotate(nums, 3);

        expect(nums).to.deep.equal([5, 6, 7, 1, 2, 3, 4]);
    });

    it(' k = 1, [1,2] => [2,1]', () => {
        let nums = [1, 2];

        rotate(nums, 1);

        expect(nums).to.deep.equal([2, 1]);
    });

    it(' k = 1, [1] => [1]', () => {
        let nums = [1];

        rotate(nums, 1);

        expect(nums).to.deep.equal([1]);
    });

    it(' k = 0, [1] => [1]', () => {
        let nums = [1];

        rotate(nums, 0);

        expect(nums).to.deep.equal([1]);
    });

    it(' k = 3, [1,2] => [2,1]', () => {
        let nums = [1, 2];

        rotate(nums, 3);

        expect(nums).to.deep.equal([2, 1]);
    });
});
