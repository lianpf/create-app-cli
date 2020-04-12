'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAll = exports.get = undefined;

var _constants = require('./constants');

var _ini = require('ini');

var _util = require('util');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _templates = require('../../templates.json');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const exits = (0, _util.promisify)(_fs2.default.exists);
const readFile = (0, _util.promisify)(_fs2.default.readFile);
const writeFile = (0, _util.promisify)(_fs2.default.writeFile);

const hasTemplate = Object.keys(_templates2.default).indexOf(templateName) > -1;

//RC 是配置文件
//DEFAULTS 是默认的配置
const get = exports.get = (() => {
    var _ref = _asyncToGenerator(function* (key) {
        const exit = yield exits(_constants.RC);
        let opts;
        if (exit) {
            opts = yield readFile(_constants.RC, 'utf8');
            opts = (0, _ini.decode)(opts);
            return opts[key];
        }
        return '';
    });

    return function get(_x) {
        return _ref.apply(this, arguments);
    };
})();

const getAll = exports.getAll = (() => {
    var _ref2 = _asyncToGenerator(function* () {
        const exit = yield exits(_constants.RC);
        let opts;
        if (exit) {
            opts = yield readFile(_constants.RC, 'utf8');
            opts = (0, _ini.decode)(opts);
            return opts;
        }
        return {};
    });

    return function getAll() {
        return _ref2.apply(this, arguments);
    };
})();

// export const set = async (key, value) => {
//     const exit = await exits(RC);
//     let opts;
//     if (exit) {
//         opts = await readFile(RC, 'utf8');
//         opts = decode(opts);
//         if(!key) {
//             console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
//             return;
//         }
//         if(!value) {
//             console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
//             return;
//         }
//         Object.assign(opts, { [key]: value });
//     } else {
//         opts = Object.assign(DEFAULTS, { [key]: value });
//     }
//     await writeFile(RC, encode(opts), 'utf8');
// }

// export const remove = async (key) => {
//     const exit = await exits(RC);
//     let opts;
//     if (exit) {
//         opts = await readFile(RC, 'utf8');
//         opts = decode(opts);
//         delete opts[key];
//         await writeFile(RC, encode(opts), 'utf8');
//     }
// }