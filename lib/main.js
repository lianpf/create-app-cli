'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        usages: ['ca init <template-name> <project-name>']
    },
    config: {
        alias: 'cfg',
        description: 'config ca',
        usages: ['ca config get <k>']
    }
    //other commands
};

Object.keys(actionMap).forEach(action => {
    _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias) //别名
    .action(() => {
        switch (action) {
            case 'config':
                (0, _index2.default)(action, ...process.argv.slice(3));
                break;
            case 'init':
                (0, _index2.default)(action, ...process.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log((0, _constants.make_green)('  - ' + usage));
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');
_commander2.default.on('-h', help);
_commander2.default.on('--help', help);
_commander2.default.version(_constants.VERSION, '-v, --version').parse(process.argv);

// eos 不带参数时
if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(_constants.make_green);
}