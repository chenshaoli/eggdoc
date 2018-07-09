'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531120396432_5111';

  // add your config here
  config.middleware = [];

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  },
  config.news = {
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
    pageSize: 5,
  },
  config.middleware = [
    'robot',
  ];

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  return config;
};
