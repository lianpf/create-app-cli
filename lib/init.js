'use strict';

var _get = require('./utils/get');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let init = (() => {
    var _ref = _asyncToGenerator(function* (templateName, projectName) {
        //项目不存在
        if (!_fs2.default.existsSync(projectName)) {
            //命令行交互
            _inquirer2.default.prompt([{
                name: 'description',
                message: 'Please enter the project description: '
            }, {
                name: 'author',
                message: 'Please enter the author name: '
            }]).then((() => {
                var _ref2 = _asyncToGenerator(function* (answer) {
                    //下载模板 选择模板
                    //通过配置文件，获取模板信息
                    let loading = (0, _ora2.default)('downloading template ...');
                    loading.start();
                    (0, _get.downloadLocal)(templateName, projectName).then(function () {
                        loading.succeed();
                        const fileName = `${projectName}/package.json`;
                        if (_fs2.default.existsSync(fileName)) {
                            const data = _fs2.default.readFileSync(fileName).toString();
                            let json = JSON.parse(data);
                            json.name = projectName;
                            json.author = answer.author;
                            json.description = answer.description;
                            //修改项目文件夹中 package.json 文件
                            _fs2.default.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
                            console.log(_logSymbols2.default.success, _chalk2.default.green('Project initialization finished!'));
                        }
                    }, function () {
                        loading.fail();
                    });
                });

                return function (_x3) {
                    return _ref2.apply(this, arguments);
                };
            })());
        } else {
            //项目已经存在
            console.log(_logSymbols2.default.error, _chalk2.default.red('The project already exists'));
        }
    });

    return function init(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = init;