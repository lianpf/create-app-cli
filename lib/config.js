'use strict';

var _rc = require('./utils/rc');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // 管理 .eosrc 文件 (当前用户目录下)

let config = (() => {
    var _ref = _asyncToGenerator(function* (action, key, value) {
        switch (action) {
            case 'get':
                if (key) {
                    let result = yield (0, _rc.get)(key);
                    console.log(result);
                } else {
                    let obj = yield (0, _rc.getAll)();
                    Object.keys(obj).forEach(function (key) {
                        console.log(`${key}=${obj[key]}`);
                    });
                }
                break;
            case 'set':
                (0, _rc.set)(key, value);
                break;
            case 'remove':
                (0, _rc.remove)(key);
                break;
            default:
                break;
        }
    });

    return function config(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = config;