import removeDuplicates from '@/Array/RemoveDuplicates'

describe('Remove Duplicates from Sorted Array', () => {


    it('Return array with length = 2', () => {

        let nums = [1, 1, 2];

        let new_length = removeDuplicates(nums);

        assert.equal(new_length, 2);
    });

    it('[1, 1, 2] =>  [1,2]', () => {

        let nums = [1, 1, 2];

        let new_length = removeDuplicates(nums);


        expect(nums).to.deep.equal([1, 2]);
    });

    it('[1,1,1,1] => [1]', () => {
        let nums = [1, 1, 1, 1];

        removeDuplicates(nums);

        expect(nums).to.deep.equal([1]);
    });

    it('[-1,0,0,0,0,3,3] => [-1,0,3]', () => {
        let nums = [-1, 0, 0, 0, 0, 3, 3];

        removeDuplicates(nums);

        expect(nums).to.deep.equal([-1, 0, 3]);
    });
});
