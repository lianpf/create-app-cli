'use strict';

var _rc = require('./utils/rc');

var _constants = require('./utils/constants');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let config = (() => {
    var _ref = _asyncToGenerator(function* (action, key) {
        switch (action) {
            case 'get':
                if (key) {
                    let result = yield (0, _rc.get)(key);
                    if (result.code === 0) {
                        console.log((0, _constants.make_success)(result.message));
                    } else {
                        console.log((0, _constants.make_fail)(result.message));
                    }
                } else {
                    console.log((0, _constants.make_warn)('Command does not exist!'));
                }
                break;
            default:
                console.log((0, _constants.make_warn)('Command does not exist!'));
                break;
        }
    });

    return function config(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = config;