'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadLocal = undefined;

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import { getAll } from './rc';


const downloadLocal = exports.downloadLocal = (() => {
    var _ref = _asyncToGenerator(function* (templateName, projectName) {
        // let config = await getAll();
        // let api = `${config.registry}/${templateName}`;
        let api = 'direct:https://github.com/lianpf/webpack-demo.git#master';
        return new Promise(function (resolve, reject) {
            (0, _downloadGitRepo2.default)(api, projectName, function (err) {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    });

    return function downloadLocal(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();