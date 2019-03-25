import add from '../../src/Add'

describe('Add function/ Should add two numbers', () => {
    it('add(2,2) // result 4', () => {
        let res = add(2,2)
        expect(res).to.be.equal(4)
    })
    it('add(2)(2) // result 4', () => {
        let res = add(2)(2)
        expect(res).to.be.equal(4)
    })
})
