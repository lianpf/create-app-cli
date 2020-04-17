import { configCommand, make_red, make_green, templateConfig } from './constants';
import AsciiTable from 'ascii-table'

// constants 是配置文件
export const get = async (key) => {
    // 0 success, -1 命令失败或者暂无数据
    let code = -1
    let message = 'Command execution failed！'
    let opts = configCommand;
    let templateList = []
    let templateTable = new AsciiTable()
    templateTable.setHeading('index', 'template-name', 'key-words')
    if (opts.indexOf(key) !== -1) {
        switch (key) {
            case 'templates':
                Object.keys(templateConfig).forEach( templateKey => {
                    templateList.push(templateConfig[templateKey])
                })
                code = templateList.length > 0 ? 0 : -1
                message = 'Command executed successfully!'
                break;
            default:
                console.log(make_red('Command "' + 'ca config get' + key +'" ' + 'does not exist!'))
                break;
        }
    }
    for ( const templateKey in templateList) {
        templateTable.addRow(templateKey, templateList[templateKey].templateName, templateList[templateKey].keyWords)
    }
    console.log(make_green(templateTable.toString()))
    return {
        code,
        data: {},
        message
    };
}
