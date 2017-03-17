"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Calculator_1 = require("../../src/calculator/Calculator");
describe('Calculator', function () {
    var calculator = new Calculator_1.Calculator();
    it('should add: 2 + 3 = 5', function () {
        chai_1.assert.strictEqual(calculator.add(2, 3), 5);
    });
    it('should subtract: 7 - 5 = 2', function () {
        chai_1.assert.strictEqual(calculator.sub(7, 5), 2);
    });
    it('should mutiply: 2 * 3 = 6', function () {
        chai_1.assert.strictEqual(calculator.mul(2, 3), 6);
    });
    it('should divide: 8 / 4 = 2', function () {
        chai_1.assert.strictEqual(calculator.div(8, 4), 2);
    });
});
//# sourceMappingURL=Calculator.spec.js.map