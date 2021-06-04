import BaseComponent from './common/base';
import logger from './common/logger';
import fse from 'fs-extra';
import path from 'path';
import {InputProps} from './common/entity';

const {
    help,
    commandParse,
    reportComponent
} = require('@serverless-devs/core')

logger.setContent("CICD")

export default class ComponentDemo extends BaseComponent {
    constructor(props) {
        super(props)
    }

    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    public async github(inputs: InputProps) {
        reportComponent('cicd', {
            command: 'github',
            uid: '',
        });
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
                    ],
                }]);
            return;
        }

        /*
        1. 创建文件
        2. 返回数据
        */

        await fse.mkdirs('./.github/workflow/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'src/template/github/action/serverless-devs.yml'))
        await fse.writeFileSync('./.github/workflow/serverless-devs.yml', templateData);

        logger.info(`
        
    👌 Github Action CI/CD template created successfully.
       1️⃣ Edit the file [./.github/workflow/serverless-devs.yml] to complete the CI/CD function configuration
       2️⃣ Configure user key information through GitHub Secrets
    
    Related documents：
      🛸 如何通过Github Action使用Serverless Devs做CI/CD：http://short.devsapp.cn/cicd/github/action/usage
    Best practices：
      🍉 Serverless Devs的官网是通过Serverless Devs部署的: http://short.devsapp.cn/cicd/github/action/practice
      `)


    }

}
