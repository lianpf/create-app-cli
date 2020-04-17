import program from 'commander';
import { VERSION, make_green, make_red } from './utils/constants';
import apply from './index';
// import chalk from 'chalk';

/**
 * ca commands
 * - config
 * - init 
 * - v
 * - h
 */

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'ca init <template-name> <project-name>'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config ca',
        usages: [
            'ca config get <k>'
        ]
    },
    //other commands
}

Object.keys(actionMap).forEach((action) => {
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias) //别名
    .action(() => {
        switch (action) {
            case 'config': 
                apply(action, ...process.argv.slice(3));
                break;
            case 'init':
                apply(action, ...process.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log(make_green('  - ' + usage));
        });
    });
    console.log('\r');
}


program.usage('<command> [options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, '-v, --version').parse(process.argv);

// eos 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}