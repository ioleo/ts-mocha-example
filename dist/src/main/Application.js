"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli = require("commander");
var Calculator_1 = require("../calculator/Calculator");
var Application = (function () {
    function Application() {
    }
    Application.run = function () {
        var project = require('../../../package.json');
        cli
            .usage('<Nothing!>')
            .version(project.version)
            .parse(process.argv);
        var inputText = cli.args.join(' ') || 'Nothing!';
        var calc = new Calculator_1.Calculator();
        console.log('You typed in: ' + inputText);
        console.log('Also, we have a cool calculator:');
        console.log('- it can add:       2 + 3 = ' + calc.add(2, 3));
        console.log('- it can subtract:  7 - 5 = ' + calc.sub(7, 5));
        console.log('- it can multiply:  2 * 3 = ' + calc.mul(2, 3));
        console.log('- it can divide:    8 / 4 = ' + calc.div(8, 4));
        process.exit(0);
    };
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=Application.js.map