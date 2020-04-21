import { downloadLocal } from './utils/download';
import { make_success, make_fail, make_warn, hasTemplate } from './utils/constants';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import symbol from 'log-symbols';
// import { rejects } from 'assert';

let init = async (templateName, projectName) => {
    let _hasTemplate = hasTemplate(templateName)
    if (!_hasTemplate) {
        console.log(make_warn('Warn: no such template!'))
        return
    }
    //项目不存在
    if (!fs.existsSync(projectName)) {
        //命令行交互
        inquirer.prompt([
            {
                name: 'description',
                message: 'Please enter the project description: '
            },
            {
                name: 'author',
                message: 'Please enter the author name: '
            }
        ]).then(async (answer) => {
            //下载模板 选择模板
            //通过配置文件，获取模板信息
            let loading = ora(make_success('downloading template ...'));
            loading.start();
            downloadLocal(templateName, projectName).then(() => {
                loading.succeed();
                const fileName = `${projectName}/package.json`;
                if(fs.existsSync(fileName)) {
                    const data = fs.readFileSync(fileName).toString();
                    let json = JSON.parse(data);
                    json.name = projectName;
                    json.author = answer.author;
                    json.description = answer.description;
                    //修改项目文件夹中 package.json 文件
                    fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
                    console.log(symbol.success, make_success('Project init finished!'));
                }
            }, (err) => {
                console.log(make_fail('Project init fail:', err))
                loading.fail();
            });
        });
    }else {
        //项目已经存在
        console.log(symbol.error, chalk.red('The project already exists'));
    }
}

module.exports = init;
