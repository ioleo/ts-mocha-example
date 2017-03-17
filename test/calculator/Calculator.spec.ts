import {assert} from 'chai'
import {Calculator} from '../../src/calculator/Calculator'

/* tslint:disable:no-string-literal */
describe('Calculator', () => {
    const calculator = new Calculator()

    it('should add: 2 + 3 = 5', () => {
        assert.strictEqual(calculator.add(2, 3), 5)
    })

    it('should subtract: 7 - 5 = 2', () => {
        assert.strictEqual(calculator.sub(7, 5), 2)
    })

    it('should mutiply: 2 * 3 = 6', () => {
        assert.strictEqual(calculator.mul(2, 3), 6)
    })

    it('should divide: 8 / 4 = 2', () => {
        assert.strictEqual(calculator.div(8, 4), 2)
    })
})
