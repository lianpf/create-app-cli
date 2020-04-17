'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make_red = exports.make_green = exports.configCommand = exports.templateConfig = exports.VERSION = undefined;

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

//当前 config <set|get> <command>
const configCommand = exports.configCommand = ['templates'];

const make_green = exports.make_green = txt => {
    return _chalk2.default.green(txt);
};
const make_red = exports.make_red = txt => {
    return _chalk2.default.green(txt);
};