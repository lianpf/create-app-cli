'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make_warn = exports.make_fail = exports.make_success = exports.configCommand = exports.hasTemplate = exports.templateConfig = exports.VERSION = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _package = require('../../package.json');

var _templates = require('../../templates.json');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当前 package.json 的版本号
const VERSION = exports.VERSION = _package.version;

// template config
const templateConfig = exports.templateConfig = _templates2.default;

// 判断是否存在当前模板
const hasTemplate = exports.hasTemplate = templateName => {
    return Object.keys(templateConfig).indexOf(templateName) > -1;
};

//当前 config <set|get> <command>
const configCommand = exports.configCommand = ['templates'];

const make_success = exports.make_success = txt => {
    return _chalk2.default.green(txt);
};
const make_fail = exports.make_fail = txt => {
    return _chalk2.default.red(txt);
};
const make_warn = exports.make_warn = txt => {
    return _chalk2.default.yellow(txt);
};