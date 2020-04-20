import program from 'commander';
import { VERSION, make_success, make_fail } from './utils/constants';
import apply from './index';

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
        alias: 'cfg', // 别名
        description: 'config ca',
        usages: [
            'ca config|cfg get <k>'
        ]
    }
}

Object.keys(actionMap).forEach((action) => {
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
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
            console.log(make_success('  - ' + usage));
        });
    });
    console.log('\r');
}


program.usage('<command> [options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, '-v, --version').parse(process.argv);

// ca 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_success);
}