'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/stock', controller.stock.index);
  router.get('/stock/glance', controller.stock.glance);
};
