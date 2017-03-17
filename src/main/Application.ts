import cli  = require('commander')
import {Calculator} from '../calculator/Calculator'

export class Application {

    public static run() {

        // package.json path relative to compiled Application.js file
        const project = require('../../../package.json')

        cli
            .usage('<Nothing!>')
            .version(project.version)
            .parse(process.argv)

        const inputText = cli.args.join(' ') || 'Nothing!'
        const calc: Calculator = new Calculator()

        console.log('You typed in: ' + inputText)

        console.log('Also, we have a cool calculator:')
        console.log('- it can add:       2 + 3 = ' + calc.add(2, 3))
        console.log('- it can subtract:  7 - 5 = ' + calc.sub(7, 5))
        console.log('- it can multiply:  2 * 3 = ' + calc.mul(2, 3))
        console.log('- it can divide:    8 / 4 = ' + calc.div(8, 4))

        process.exit(0)
    }
}
