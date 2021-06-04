"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var _a = require('@serverless-devs/core'), help = _a.help, commandParse = _a.commandParse, reportComponent = _a.reportComponent;
logger_1.default.setContent("CICD");
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.github = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var apts, comParse, templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reportComponent('cicd', {
                            command: 'github',
                            uid: '',
                        });
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
                                    ],
                                }]);
                            return [2 /*return*/];
                        }
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        return [4 /*yield*/, fs_extra_1.default.mkdirs('./.github/workflow/')];
                    case 1:
                        /*
                        1. 创建文件
                        2. 返回数据
                        */
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.readFileSync(path_1.default.join(__dirname, '../', 'src/template/github/action/serverless-devs.yml'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.writeFileSync('./.github/workflow/serverless-devs.yml', templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.info("\n        \n    \uD83D\uDC4C Github Action CI/CD template created successfully.\n       1\uFE0F\u20E3 Edit the file [./.github/workflow/serverless-devs.yml] to complete the CI/CD function configuration\n       2\uFE0F\u20E3 Configure user key information through GitHub Secrets\n    \n    Related documents\uFF1A\n      \uD83D\uDEF8 \u5982\u4F55\u901A\u8FC7Github Action\u4F7F\u7528Serverless Devs\u505ACI/CD\uFF1Ahttp://short.devsapp.cn/cicd/github/action/usage\n    Best practices\uFF1A\n      \uD83C\uDF49 Serverless Devs\u7684\u5B98\u7F51\u662F\u901A\u8FC7Serverless Devs\u90E8\u7F72\u7684: http://short.devsapp.cn/cicd/github/action/practice\n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBDO0FBQzFDLDJEQUFxQztBQUNyQyxzREFBMkI7QUFDM0IsOENBQXdCO0FBR2xCLElBQUEsS0FJRixPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFIaEMsSUFBSSxVQUFBLEVBQ0osWUFBWSxrQkFBQSxFQUNaLGVBQWUscUJBQ2lCLENBQUE7QUFFcEMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFekI7SUFBMkMsaUNBQWE7SUFDcEQsdUJBQVksS0FBSztlQUNiLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNVLDhCQUFNLEdBQW5CLFVBQW9CLE1BQWtCOzs7Ozs7d0JBQ2xDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7NEJBQ3BCLE9BQU8sRUFBRSxRQUFROzRCQUNqQixHQUFHLEVBQUUsRUFBRTt5QkFDVixDQUFDLENBQUM7d0JBQ0csSUFBSSxHQUFHOzRCQUNULE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQzs0QkFDakIsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQzt5QkFDckIsQ0FBQzt3QkFDSSxRQUFRLEdBQUcsWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDekQsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNyQyxJQUFJLENBQUMsQ0FBQztvQ0FDRixNQUFNLEVBQUUsT0FBTztvQ0FDZixPQUFPLEVBQUUsZ0NBQWdDO2lDQUM1QyxFQUNHO29DQUNJLE1BQU0sRUFBRSxVQUFVO29DQUNsQixPQUFPLEVBQUU7d0NBQ0w7NENBQ0ksSUFBSSxFQUFFLFFBQVE7NENBQ2QsT0FBTyxFQUFFLG9HQUFvRzt5Q0FDaEg7cUNBQ0o7aUNBQ0o7Z0NBQ0Q7b0NBQ0ksTUFBTSxFQUFFLFVBQVU7b0NBQ2xCLE9BQU8sRUFBRTt3Q0FDTDs0Q0FDSSxJQUFJLEVBQUUsV0FBVzs0Q0FDakIsT0FBTyxFQUFFLDJGQUEyRjt5Q0FDdkc7d0NBQ0Q7NENBQ0ksSUFBSSxFQUFFLFdBQVc7NENBQ2pCLE9BQU8sRUFBRSw4RkFBOEY7eUNBQzFHO3FDQUNKO2lDQUNKLENBQUMsQ0FBQyxDQUFDOzRCQUNSLHNCQUFPO3lCQUNWO3dCQUVEOzs7MEJBR0U7d0JBRUYscUJBQU0sa0JBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBQTs7d0JBTHZDOzs7MEJBR0U7d0JBRUYsU0FBdUMsQ0FBQzt3QkFDbkIscUJBQU0sa0JBQUcsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdEQUFnRCxDQUFDLENBQUMsRUFBQTs7d0JBQXBILFlBQVksR0FBRyxTQUFxRzt3QkFDMUgscUJBQU0sa0JBQUcsQ0FBQyxhQUFhLENBQUMsd0NBQXdDLEVBQUUsWUFBWSxDQUFDLEVBQUE7O3dCQUEvRSxTQUErRSxDQUFDO3dCQUVoRixnQkFBTSxDQUFDLElBQUksQ0FBQyxncEJBVWIsQ0FBQyxDQUFBOzs7OztLQUdIO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBMUVELENBQTJDLGNBQWEsR0EwRXZEIn0=