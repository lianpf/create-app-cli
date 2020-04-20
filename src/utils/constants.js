import chalk from 'chalk';
import { version } from '../../package.json';
import templates from '../../templates.json'

//当前 package.json 的版本号
export const VERSION = version;

// template config
export const templateConfig = templates

// 判断是否存在当前模板
export const hasTemplate = (templateName) => {
    return Object.keys(templateConfig).indexOf(templateName) > -1
}

//当前 config <set|get> <command>
export const configCommand = [
    'templates'
]

export const make_success = (txt) => {
    return chalk.green(txt);
}
export const make_fail = (txt) => {
    return chalk.red(txt);
}
export const make_warn = (txt) => {
    return chalk.yellow(txt);
}