// import { getAll } from './rc';
import downloadGit from 'download-git-repo';
import templateConfig from '../../templates.json'

export const downloadLocal = async (templateName, projectName) => {
    // let config = await getAll();
    // console.log('--downloadLocal-templateName--', templateName)
    // console.log('--downloadLocal-templateConfig--', templateConfig)
    const hasTemplate = Object.keys(templateConfig).indexOf(templateName) > -1

    // let api = 'direct:https://github.com/lianpf/webpack-demo.git#master'
    // let api = 'https://github.com:lianpf/webpack-demo#master'
    let api = ''
    // console.log('--downloadLocal-api--', api)
    if (hasTemplate) {
        api = `${templateConfig[templateName].type}:${templateConfig[templateName].user}/${templateConfig[templateName].repository}#${templateConfig[templateName].branch}`;
    }
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, 'test/tmp', { clone: true }, (err) => {
            if (err) {
                // console.log('--downloadLocal-err--', err)
                reject(err);
            }
            resolve();
        });
    });
}