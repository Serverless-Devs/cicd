import logger from './common/logger';
import fse from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import {InputProps} from './common/entity';

const {
    help,
    commandParse,
} = require('@serverless-devs/core')

logger.setContent("CICD")

export default class CiCdComponent {
    /**
     * 交互式获取CI/CD解决方案（默认方法）
     * @param inputs
     * @returns
     */
    public async index(inputs: InputProps) {
        const cicdPlatform: any = await inquirer.prompt([{
            type: 'list',
            name: 'platform',
            'message': '选择对应的CI/CD工具方案',
            choices: [{name: 'Github', value: 'Github'},{name: 'Gitee', value: 'Gitee'}]
        }]);
        switch (cicdPlatform.platform) {
            case 'Github':
                await this.github(inputs);
                break;
            case 'Gitee':
                await this.gitee(inputs);
                break;
            default:
                break;
        }
    }

    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    public async github(inputs: InputProps) {
        const apts = {
            boolean: ['help'],
            alias: {help: 'h'},
        };
        const comParse = commandParse({args: inputs.args}, apts);
        if (comParse.data && comParse.data.help) {
            help([{
                header: 'Usage',
                content: `s cli cicd github [ci/cd tool]`
            },
                {
                    header: 'Examples',
                    content: [
                        {
                            desc: 'action',
                            example: 'Fast initialization of GitHub action template for serverless devs. E.g: [s cli cicd github action]'
                        },
                    ],
                },
                {
                    header: 'Document',
                    content: [
                        {
                            desc: 'documents',
                            example: '如何通过Github Action使用Serverless Devs做CI/CD：http://short.devsapp.cn/cicd/github/action/usage'
                        },
                        {
                            desc: 'practices',
                            example: 'Serverless Devs的官网是通过Serverless Devs部署的: http://short.devsapp.cn/cicd/github/action/practice'
                        },
                        {
                            desc: 'practices',
                            example: 'SAE与Github Action珠合璧联，让CD从未如此简单: http://www.serverless-devs.com/blog/aliyun-sae-github-action-cicd'
                        },
                        {
                            desc: 'practices',
                            example: '阿里云Custom Container的CI/CD最佳实践案例: http://www.serverless-devs.com/blog/aliyun-custom-container-ci-cd'
                        },
                        {
                            desc: 'practices',
                            example: '只更新代码，然后发布版本：原子化操作阿里云函数计算: http://www.serverless-devs.com/blog/serverless-devs-update-fc-code'
                        },
                    ],
                }]);
            return;
        }

        /*
        1. 创建文件
        2. 返回数据
        */

        await fse.mkdirs('./.github/workflows/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'src/template/github/action/serverless-devs.yml'))
        await fse.writeFileSync('./.github/workflows/serverless-devs.yml', templateData);

        logger.info(`
        
    👌 Github Action CI/CD template created successfully.
       1️⃣ Edit the file [./.github/workflow/serverless-devs.yml] to complete the CI/CD function configuration
       2️⃣ Configure user key information through GitHub Secrets
    
    Related documents：
      🛸 如何通过Github Action使用Serverless Devs做CI/CD：http://short.devsapp.cn/cicd/github/action/usage
    Best practices：
      🍉 Serverless Devs的官网是通过Serverless Devs部署的: http://short.devsapp.cn/cicd/github/action/practice
      🍉 SAE与Github Action珠合璧联，让CD从未如此简单: http://www.serverless-devs.com/blog/aliyun-sae-github-action-cicd
      🍉 阿里云Custom Container的CI/CD最佳实践案例: http://www.serverless-devs.com/blog/aliyun-custom-container-ci-cd
      🍉 只更新代码，然后发布版本：原子化操作阿里云函数计算: http://www.serverless-devs.com/blog/serverless-devs-update-fc-code
      `)


    }

    /**
     * 创建Gitee Go模板
     * @param inputs
     * @returns
     */
    public async gitee(inputs: InputProps) {
        const apts = {
            boolean: ['help'],
            alias: {help: 'h'},
        };
        const comParse = commandParse({args: inputs.args}, apts);
        if (comParse.data && comParse.data.help) {
            help([{
                header: 'Usage',
                content: `s cli cicd github [ci/cd tool]`
            },
                {
                    header: 'Examples',
                    content: [
                        {
                            desc: 'action',
                            example: 'Fast initialization of GitHub action template for serverless devs. E.g: [s cli cicd gitee go]'
                        },
                    ],
                },
                {
                    header: 'Document',
                    content: [
                        {
                            desc: 'practices',
                            example: '通过Gitee+Serverless Devs快速实现函数代码更新与版本发布: http://www.serverless-devs.com/blog/gitee-gitee-go-serverless-devs-ci-cd'
                        },
                    ],
                }]);
            return;
        }

        /*
        1. 创建文件
        2. 返回数据
        */

        await fse.mkdirs('./.workflow/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'src/template/gitee/go/serverless-devs.yml'))
        await fse.writeFileSync('./.workflow/serverless-devs.yml', templateData);

        logger.info(`
        
    👌 Gitee Go CI/CD template created successfully.
       1️⃣ Edit the file [./.workflow/serverless-devs.yml] to complete the CI/CD function configuration
       2️⃣ Configure user key information through Gitee Settings
    
    Best practices：
      🍉 通过Gitee+Serverless Devs快速实现函数代码更新与版本发布: http://www.serverless-devs.com/blog/gitee-gitee-go-serverless-devs-ci-cd
      `)


    }

}
