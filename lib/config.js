'use strict';

var _rc = require('./utils/rc');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _constants = require('./utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // 管理 .eosrc 文件 (当前用户目录下)

let config = (() => {
    var _ref = _asyncToGenerator(function* (action, key, value) {
        // console.log('--config-action--', action);
        // console.log('--config-key--', key);
        // console.log('--config-value--', value);
        switch (action) {
            case 'get':
                if (key) {
                    let result = yield (0, _rc.get)(key);
                    if (result.code === 0) {
                        console.log((0, _constants.make_green)(result.message));
                    } else {
                        console.log((0, _constants.make_red)(result.message));
                    }
                } else {
                    console.log(_chalk2.default.red('Command does not exist!'));
                }
                break;
            default:
                console.log(_chalk2.default.red('Command does not exist!'));
                break;
        }
    });

    return function config(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = config;