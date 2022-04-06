var w=Object.create;var l=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var u=t=>l(t,"__esModule",{value:!0});var y=(t,e)=>{u(t);for(var i in e)l(t,i,{get:e[i],enumerable:!0})},G=(t,e,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of f(e))!D.call(t,s)&&s!=="default"&&l(t,s,{get:()=>e[s],enumerable:!(i=b(e,s))||i.enumerable});return t},m=t=>G(u(l(t!=null?w(C(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);y(exports,{default:()=>p});var c=m(require("@serverless-devs/core")),r=class{static setContent(e){r.CONTENT=e}static log(e){c.Logger.log(e)}static info(e){c.Logger.info(r.CONTENT,e)}static debug(e){c.Logger.debug(r.CONTENT,e)}static error(e){c.Logger.error(r.CONTENT,e)}static warning(e){c.Logger.warn(r.CONTENT,e)}static success(e){c.Logger.log(e,"green")}},a=r;a.CONTENT="";var n=m(require("path")),{help:h,fse:o,inquirer:S,commandParse:v}=require("@serverless-devs/core");a.setContent("CICD");var g=n.default.join(__dirname,"../","template"),p=class{async index(e){switch((await S.prompt([{type:"list",name:"platform",message:"\u9009\u62E9\u5BF9\u5E94\u7684CI/CD\u5DE5\u5177\u65B9\u6848",choices:[{name:"Github",value:"Github"},{name:"Gitee",value:"Gitee"}]}])).platform){case"Github":await this.github(e);break;case"Gitee":await this.gitee(e);break;default:break}}async github(e){let i={boolean:["help"],alias:{help:"h"}},s=v({args:e.args},i);if(s.data&&s.data.help){h([{header:"Usage",content:"s cli cicd github [ci/cd tool]"},{header:"Examples",content:[{desc:"action",example:"Fast initialization of GitHub action template for serverless devs. E.g: [s cli cicd github action]"}]},{header:"Document",content:[{desc:"documents",example:"\u5982\u4F55\u901A\u8FC7Github Action\u4F7F\u7528Serverless Devs\u505ACI/CD\uFF1Ahttp://short.devsapp.cn/cicd/github/action/usage"},{desc:"practices",example:"Serverless Devs\u7684\u5B98\u7F51\u662F\u901A\u8FC7Serverless Devs\u90E8\u7F72\u7684: http://short.devsapp.cn/cicd/github/action/practice"},{desc:"practices",example:"SAE\u4E0EGithub Action\u73E0\u5408\u74A7\u8054\uFF0C\u8BA9CD\u4ECE\u672A\u5982\u6B64\u7B80\u5355: http://www.serverless-devs.com/blog/aliyun-sae-github-action-cicd"},{desc:"practices",example:"\u963F\u91CC\u4E91Custom Container\u7684CI/CD\u6700\u4F73\u5B9E\u8DF5\u6848\u4F8B: http://www.serverless-devs.com/blog/aliyun-custom-container-ci-cd"},{desc:"practices",example:"\u53EA\u66F4\u65B0\u4EE3\u7801\uFF0C\u7136\u540E\u53D1\u5E03\u7248\u672C\uFF1A\u539F\u5B50\u5316\u64CD\u4F5C\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97: http://www.serverless-devs.com/blog/serverless-devs-update-fc-code"}]}]);return}await o.mkdirs("./.github/workflows/");let d=await o.readFileSync(n.default.join(g,"github/action/serverless-devs.yml"));await o.writeFileSync("./.github/workflows/serverless-devs.yml",d),a.info(`
        
    \u{1F44C} Github Action CI/CD template created successfully.
       1\uFE0F\u20E3 Edit the file [./.github/workflow/serverless-devs.yml] to complete the CI/CD function configuration
       2\uFE0F\u20E3 Configure user key information through GitHub Secrets
    
    Related documents\uFF1A
      \u{1F6F8} \u5982\u4F55\u901A\u8FC7Github Action\u4F7F\u7528Serverless Devs\u505ACI/CD\uFF1Ahttp://short.devsapp.cn/cicd/github/action/usage
    Best practices\uFF1A
      \u{1F349} Serverless Devs\u7684\u5B98\u7F51\u662F\u901A\u8FC7Serverless Devs\u90E8\u7F72\u7684: http://short.devsapp.cn/cicd/github/action/practice
      \u{1F349} SAE\u4E0EGithub Action\u73E0\u5408\u74A7\u8054\uFF0C\u8BA9CD\u4ECE\u672A\u5982\u6B64\u7B80\u5355: http://www.serverless-devs.com/blog/aliyun-sae-github-action-cicd
      \u{1F349} \u963F\u91CC\u4E91Custom Container\u7684CI/CD\u6700\u4F73\u5B9E\u8DF5\u6848\u4F8B: http://www.serverless-devs.com/blog/aliyun-custom-container-ci-cd
      \u{1F349} \u53EA\u66F4\u65B0\u4EE3\u7801\uFF0C\u7136\u540E\u53D1\u5E03\u7248\u672C\uFF1A\u539F\u5B50\u5316\u64CD\u4F5C\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97: http://www.serverless-devs.com/blog/serverless-devs-update-fc-code
      `)}async gitee(e){let i={boolean:["help"],alias:{help:"h"}},s=v({args:e.args},i);if(s.data&&s.data.help){h([{header:"Usage",content:"s cli cicd github [ci/cd tool]"},{header:"Examples",content:[{desc:"action",example:"Fast initialization of GitHub action template for serverless devs. E.g: [s cli cicd gitee go]"}]},{header:"Document",content:[{desc:"practices",example:"\u901A\u8FC7Gitee+Serverless Devs\u5FEB\u901F\u5B9E\u73B0\u51FD\u6570\u4EE3\u7801\u66F4\u65B0\u4E0E\u7248\u672C\u53D1\u5E03: http://www.serverless-devs.com/blog/gitee-gitee-go-serverless-devs-ci-cd"}]}]);return}await o.mkdirs("./.workflow/");let d=await o.readFileSync(n.default.join(g,"gitee/go/serverless-devs.yml"));await o.writeFileSync("./.workflow/serverless-devs.yml",d),a.info(`
        
    \u{1F44C} Gitee Go CI/CD template created successfully.
       1\uFE0F\u20E3 Edit the file [./.workflow/serverless-devs.yml] to complete the CI/CD function configuration
       2\uFE0F\u20E3 Configure user key information through Gitee Settings
    
    Best practices\uFF1A
      \u{1F349} \u901A\u8FC7Gitee+Serverless Devs\u5FEB\u901F\u5B9E\u73B0\u51FD\u6570\u4EE3\u7801\u66F4\u65B0\u4E0E\u7248\u672C\u53D1\u5E03: http://www.serverless-devs.com/blog/gitee-gitee-go-serverless-devs-ci-cd
      `)}};0&&(module.exports={});