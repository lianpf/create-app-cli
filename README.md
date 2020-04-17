## 当前版本
![](https://img.shields.io/npm/v/@lianpf/create-app-cli.svg?style=flat-square)

## 参考文档
> npm官网搜索```@lianpf/create-app-cli``` 或 直接点击下列图片跳转

[![@lianpf/create-app-cli](https://nodei.co/npm/@lianpf/create-app-cli.png)](https://www.npmjs.com/package/@lianpf/create-app-cli)

***
## 使用教程
#### init 项目
* 安装 ```npm install @lianpf/create-app-cli```
* 初始化项目 ```ca init <template-name> <project-name>```

#### 其他命令
* 查看版本号 ```ca -v```
* 帮助 ```ca -h```
* 查看模板列表 ```ca config get templates``` 或 ```ca cfg get templates```

#### 项目模板 ```<template-name>```
* ```react-template```
* ```webpack-template```

***
## 使用示例
```
// 安装
$ npm install @lianpf/create-app-cli 

// 查看模板列表
$ ca cfg get templates

// 选择 react-template 为模板 init 一个项目 myPro
$ ca init react-template myPro 
```