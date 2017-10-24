## Ironman
1.install dependencies
npm install

2. set up dev environment
npm run dev


## 目录结构

├── deploy                                          // 部署相关
├── src                                             // 根目录
│   ├── assets                                      // 静态资源
│   ├── components                                  // 公共组件
│   ├── constants                                   // 常量文件
│   ├── containers                                  // container型组件
│   ├── modules                                     // 模块
│   ├── reducers                                    // root reducer
│   ├── routes                                      // 路由相关
│   ├── store                                       // store配置
│   ├── styles                                      // 样式
│   ├── utils                                       // 公共方法
├── static                                          // 第三方资源
├── .babelrc                                        // babel-loader 配置
├── eslintrc.js                                     // eslint 配置项
├── .gitignore                                      // git 忽略项
├── index.html                                      // html模板
└── package.json                                    // package.json
└── webpack.base.config.js                          // webpack 配置项
└── webpack.config.js                               // webpack build 配置项
└── webpack.dev.config.js                           // webpack dev 配置项
