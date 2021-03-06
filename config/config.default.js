'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1512185318172_2827';

  // add your config here
  config.middleware = [];

  config.sentry = {
    dsn: 'https://069811f5f5624a758ad3408044225826:3bc1392b1e2e4fb691605d802df890ce@sentry.io/170355',
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/quantaxis',
    options: {},
  };

  config.security = {
    domainWhiteList: [ 'http://127.0.0.1:8080' ],
    csrf: {
      ignoreJSON: true,
    },
  };

  return config;
};
