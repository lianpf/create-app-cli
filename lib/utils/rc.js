'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = undefined;

var _constants = require('./constants');

var _asciiTable = require('ascii-table');

var _asciiTable2 = _interopRequireDefault(_asciiTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// constants 是配置文件
const get = exports.get = (() => {
    var _ref = _asyncToGenerator(function* (key) {
        // 0 success, -1 命令失败或者暂无数据
        let code = -1;
        let message = 'Command execution failed！';
        let opts = _constants.configCommand;
        let templateList = [];
        let templateTable = new _asciiTable2.default();
        templateTable.setHeading('index', 'template-name', 'key-words');
        if (opts.indexOf(key) !== -1) {
            switch (key) {
                case 'templates':
                    Object.keys(_constants.templateConfig).forEach(function (templateKey) {
                        templateList.push(_constants.templateConfig[templateKey]);
                    });
                    code = templateList.length > 0 ? 0 : -1;
                    message = 'Command executed successfully!';
                    break;
                default:
                    console.log((0, _constants.make_warn)('Command "' + 'ca config get' + key + '" ' + 'does not exist!'));
                    break;
            }
        }
        for (const templateKey in templateList) {
            templateTable.addRow(templateKey, templateList[templateKey].templateName, templateList[templateKey].keyWords);
        }
        console.log((0, _constants.make_success)(templateTable.toString()));
        return {
            code,
            data: {},
            message
        };
    });

    return function get(_x) {
        return _ref.apply(this, arguments);
    };
})();