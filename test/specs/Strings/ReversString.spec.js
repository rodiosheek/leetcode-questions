import reverseString from '@/Strings/ReversString'

describe('Reverse String', () => {
    it('["h", "e", "l", "l", "o"] => ["o", "l", "l", "e", "h"]', () => {
        let input = ["h", "e", "l", "l", "o"]
        let output = ["o", "l", "l", "e", "h"]

        reverseString(input)

        expect(input).to.be.deep.equal(output)

    })
    it('["H","a","n","n","a","h"] => ["h","a","n","n","a","H"]', () => {
        let input = ["H","a","n","n","a","h"]
        let output = ["h","a","n","n","a","H"]

        reverseString(input)

        expect(input).to.be.deep.equal(output)
    })
    it('[1,2,3,4,5] => [5,4,3,2,1]', () => {
        let input = [1,2,3,4,5]
        let output = [5,4,3,2,1]

        reverseString(input)

        expect(input).to.be.deep.equal(output)
    })
})
