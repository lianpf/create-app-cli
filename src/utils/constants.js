import chalk from 'chalk';
import { version } from '../../package.json';
import templates from '../../templates.json'

//当前 package.json 的版本号
export const VERSION = version;

// template config
export const templateConfig = templates

//当前 config <set|get> <command>
export const configCommand = [
    'templates'
]

export const make_green = (txt) => {
    return chalk.green(txt); 
}
export const make_red = (txt) => {
    return chalk.green(txt); 
}