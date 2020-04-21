import downloadGit from 'download-git-repo';
import { templateConfig, hasTemplate } from './constants';

export const downloadLocal = async (templateName, projectName) => {
    const _hasTemplate = hasTemplate(templateName)
    let api = ''
    if (_hasTemplate) {
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