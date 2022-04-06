"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./common/logger"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var inquirer_1 = __importDefault(require("inquirer"));
var _a = require('@serverless-devs/core'), help = _a.help, commandParse = _a.commandParse;
logger_1.default.setContent("CICD");
var CiCdComponent = /** @class */ (function () {
    function CiCdComponent() {
    }
    /**
     * 交互式获取CI/CD解决方案（默认方法）
     * @param inputs
     * @returns
     */
    CiCdComponent.prototype.index = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var cicdPlatform, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([{
                                type: 'list',
                                name: 'platform',
                                'message': '选择对应的CI/CD工具方案',
                                choices: [{ name: 'Github', value: 'Github' }, { name: 'Gitee', value: 'Gitee' }]
                            }])];
                    case 1:
                        cicdPlatform = _b.sent();
                        _a = cicdPlatform.platform;
                        switch (_a) {
                            case 'Github': return [3 /*break*/, 2];
                            case 'Gitee': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.github(inputs)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.gitee(inputs)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    CiCdComponent.prototype.github = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var apts, comParse, templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apts = {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        };
                        comParse = commandParse({ args: inputs.args }, apts);
                        if (comParse.data && comParse.data.help) {
                            help([{
                                    header: 'Usage',
                                    content: "s cli cicd github [ci/cd tool]"
                                }, {
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
                            return [2 /*return*/];
                        }
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        return [4 /*yield*/, fs_extra_1.default.mkdirs('./.github/workflows/')];
                    case 1:
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.readFileSync(path_1.default.join(__dirname, '../', 'src/template/github/action/serverless-devs.yml'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.writeFileSync('./.github/workflows/serverless-devs.yml', templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.info("\n        \n    \uD83D\uDC4C Github Action CI/CD template created successfully.\n       1\uFE0F\u20E3 Edit the file [./.github/workflow/serverless-devs.yml] to complete the CI/CD function configuration\n       2\uFE0F\u20E3 Configure user key information through GitHub Secrets\n    \n    Related documents\uFF1A\n      \uD83D\uDEF8 \u5982\u4F55\u901A\u8FC7Github Action\u4F7F\u7528Serverless Devs\u505ACI/CD\uFF1Ahttp://short.devsapp.cn/cicd/github/action/usage\n    Best practices\uFF1A\n      \uD83C\uDF49 Serverless Devs\u7684\u5B98\u7F51\u662F\u901A\u8FC7Serverless Devs\u90E8\u7F72\u7684: http://short.devsapp.cn/cicd/github/action/practice\n      \uD83C\uDF49 SAE\u4E0EGithub Action\u73E0\u5408\u74A7\u8054\uFF0C\u8BA9CD\u4ECE\u672A\u5982\u6B64\u7B80\u5355: http://www.serverless-devs.com/blog/aliyun-sae-github-action-cicd\n      \uD83C\uDF49 \u963F\u91CC\u4E91Custom Container\u7684CI/CD\u6700\u4F73\u5B9E\u8DF5\u6848\u4F8B: http://www.serverless-devs.com/blog/aliyun-custom-container-ci-cd\n      \uD83C\uDF49 \u53EA\u66F4\u65B0\u4EE3\u7801\uFF0C\u7136\u540E\u53D1\u5E03\u7248\u672C\uFF1A\u539F\u5B50\u5316\u64CD\u4F5C\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97: http://www.serverless-devs.com/blog/serverless-devs-update-fc-code\n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建Gitee Go模板
     * @param inputs
     * @returns
     */
    CiCdComponent.prototype.gitee = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var apts, comParse, templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apts = {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        };
                        comParse = commandParse({ args: inputs.args }, apts);
                        if (comParse.data && comParse.data.help) {
                            help([{
                                    header: 'Usage',
                                    content: "s cli cicd github [ci/cd tool]"
                                }, {
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
                            return [2 /*return*/];
                        }
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        return [4 /*yield*/, fs_extra_1.default.mkdirs('./.workflow/')];
                    case 1:
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.readFileSync(path_1.default.join(__dirname, '../', 'src/template/gitee/go/serverless-devs.yml'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.writeFileSync('./.workflow/serverless-devs.yml', templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.info("\n        \n    \uD83D\uDC4C Gitee Go CI/CD template created successfully.\n       1\uFE0F\u20E3 Edit the file [./.workflow/serverless-devs.yml] to complete the CI/CD function configuration\n       2\uFE0F\u20E3 Configure user key information through Gitee Settings\n    \n    Best practices\uFF1A\n      \uD83C\uDF49 \u901A\u8FC7Gitee+Serverless Devs\u5FEB\u901F\u5B9E\u73B0\u51FD\u6570\u4EE3\u7801\u66F4\u65B0\u4E0E\u7248\u672C\u53D1\u5E03: http://www.serverless-devs.com/blog/gitee-gitee-go-serverless-devs-ci-cd\n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    return CiCdComponent;
}());
exports.default = CiCdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFDckMsc0RBQTJCO0FBQzNCLDhDQUF3QjtBQUN4QixzREFBZ0M7QUFHMUIsSUFBQSxLQUdGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUZoQyxJQUFJLFVBQUEsRUFDSixZQUFZLGtCQUNvQixDQUFBO0FBRXBDLGdCQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXpCO0lBQUE7SUFvS0EsQ0FBQztJQW5LRzs7OztPQUlHO0lBQ1UsNkJBQUssR0FBbEIsVUFBbUIsTUFBa0I7Ozs7OzRCQUNQLHFCQUFNLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzdDLElBQUksRUFBRSxNQUFNO2dDQUNaLElBQUksRUFBRSxVQUFVO2dDQUNoQixTQUFTLEVBQUUsZ0JBQWdCO2dDQUMzQixPQUFPLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUM7NkJBQy9FLENBQUMsQ0FBQyxFQUFBOzt3QkFMRyxZQUFZLEdBQVEsU0FLdkI7d0JBQ0ssS0FBQSxZQUFZLENBQUMsUUFBUSxDQUFBOztpQ0FDcEIsUUFBUSxDQUFDLENBQVQsd0JBQVE7aUNBR1IsT0FBTyxDQUFDLENBQVIsd0JBQU87Ozs0QkFGUixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIsd0JBQU07NEJBRU4scUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXhCLFNBQXdCLENBQUM7d0JBQ3pCLHdCQUFNOzRC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