import intersect from '@/Array/Intersect'

describe('Intersection of Two Arrays II', () => {

    it('nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2]', () => {
        let nums1 = [1, 2, 2, 1],
            nums2 = [2, 2];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([2, 2]);

    });

    it('nums1 = [], nums2 = [], return []', () => {
        let nums1 = [],
            nums2 = [];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([]);

    });

    it('nums1 = [1,1], nums2 = [], return []', () => {
        let nums1 = [1, 1],
            nums2 = [];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([]);

    });

    it('nums1 = [1], nums2 = [1,1], return [1]', () => {
        let nums1 = [1],
            nums2 = [1, 1];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([1]);

    });

    it('nums1 = [1], nums2 = [1], return [1]', () => {
        let nums1 = [1],
            nums2 = [1];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([1]);

    });

    it('nums1 = [1,2], nums2 = [1,1], return [1]', () => {
        let nums1 = [1, 2],
            nums2 = [1, 1];

        let result = intersect(nums1, nums2);

        expect(result).to.deep.equal([1]);

    });
});
