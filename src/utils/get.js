import downloadGit from 'download-git-repo';
import { templateConfig } from './constants';

export const downloadLocal = async (templateName, projectName) => {
    const hasTemplate = Object.keys(templateConfig).indexOf(templateName) > -1
    let api = ''
    if (hasTemplate) {
        api = `${templateConfig[templateName].type}:${templateConfig[templateName].user}/${templateConfig[templateName].repository}#${templateConfig[templateName].branch}`;
    }
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, { clone: true }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}