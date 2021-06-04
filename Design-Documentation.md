# Serverless Devs CI/CD解决方案

🍀 Serverless Devs CI/CD 主要是Serverless devs针对CI/CD场景的解决方案建设。这部分可能没有想象中的复杂，但是也不会非常简单。

目前的主要思路：


通过工具侧，为函数计算的CI/CD能力做一些铺垫，目前的想法，或者说整体思路是包括两个部分的

- 模板部分
- 行为部分


## 模板部分

模板部分是说，我们要针对主流的CI/CD平台，提供相对应的模板。例如Github Action，Gitee Go等。期待的使用方法是，用户在当前项目下：

```
s cli cicd -p/--platform github
```

即可在当前项目下创建一个.github/serverless-devs.yaml的模板文档，同时创建之后，给用户在控制台返回对应的最佳实践案例：

```
Github Action Template created successfully.
You can refer to the following documents for more operations:
    - 如何通过Serverless Devs做CI： https://www.serverless-devs.com/blog/cicd/*****
    - 如何通过Serverless Devs做CD： https://www.serverless-devs.com/blog/cicd/*****
    - ***********相关文章和链接地址
```

其他平台操作行为等类似。这种模板行为其实更多来说是辅助用户做一些CI/CD的操作。

核心组成：
1. 模板
2. 案例


## 行为部分

这一部分是比较复杂的高阶操作。目前的想法是不是可以让用户直接在函数计算上做一些cicd的行为，例如：

```
s cli cicd -p/--platform fc
```

此时系统会帮助用户创建两个函数资源，一个是CI函数，一个是CD函数（有待讨论），并且返回一个触发地址（http触发器地址，可以配置到webhooks中），并且返回使用方法，例如：

```
Github Action Template created successfully.
Webhook Url: http://devsapp.net/**********
You can refer to the following documents for more operations:
    - 如何通过Serverless Devs做CI： https://www.serverless-devs.com/blog/cicd/*****
    - 如何通过Serverless Devs做CD： https://www.serverless-devs.com/blog/cicd/*****
    - ***********相关文章和链接地址
```

用户的使用方法很简单，只需要在当前项目下，增加一个CI/CD的模版即可（例如我们指定是.s/ci.yaml, .s/cd.yaml）

