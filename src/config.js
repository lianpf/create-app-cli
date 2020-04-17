// 管理 .eosrc 文件 (当前用户目录下)

import { get } from './utils/rc';
import chalk from 'chalk';
import { make_green, make_red } from './utils/constants';

let config = async (action, key, value) => {
    // console.log('--config-action--', action);
    // console.log('--config-key--', key);
    // console.log('--config-value--', value);
    switch (action) {
        case 'get':
            if (key) {
                let result = await get(key);
                if (result.code === 0) {
                    console.log(make_green(result.message));
                } else {
                    console.log(make_red(result.message));
                }
                
            } else {
                console.log(chalk.red('Command does not exist!'));
            }
            break;
        default:
            console.log(chalk.red('Command does not exist!'));
            break;
    }
}

module.exports = config;