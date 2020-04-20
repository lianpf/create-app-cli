// 管理 .eosrc 文件 (当前用户目录下)

import { get } from './utils/rc';
import chalk from 'chalk';
import { make_success, make_fail, make_warn } from './utils/constants';

let config = async (action, key, value) => {
    switch (action) {
        case 'get':
            if (key) {
                let result = await get(key);
                if (result.code === 0) {
                    console.log(make_success(result.message));
                } else {
                    console.log(make_fail(result.message));
                }
                
            } else {
                console.log(make_warn('Command does not exist!'));
            }
            break;
        default:
            console.log(make_warn('Command does not exist!'));
            break;
    }
}

module.exports = config;